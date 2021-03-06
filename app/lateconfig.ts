import prodConfig from '../conf/late_prod';
import devConfig from '../conf/late_dev';
import Configuration from './config';
import * as chest from '../modules';
import { Coll } from '../modules/db';
import { BSONId, DocId, defaultBsonHandler } from '../modules/db/bson';

export type LateConfig = DocId & {
  project: string,
  cookie_secret: string,
  steamApiKey: string
}

export default class LateConfigEnv {

  coll: Coll<LateConfig>

  project: string
  config!: LateConfig
  template: LateConfig

  constructor(config: Configuration,
              db: chest.db.Db) {

    this.template = config.mode === 'production' ? prodConfig : devConfig;
    
    this.project = config.net.project;
    this.coll = db.apply('env');
    
  }

  async awaitConfig() {
    return this.coll
      .one({})
      .then(_ => {
        if (_) {
          this.config = _;
        } else {
          return this.createConfig().then(_ => {
            this.config = _;
          });
        }
      });
  }

  async createConfig() {
    return this.coll.insert(this.template)
      .then(_ => this.template);
  }
  
}
