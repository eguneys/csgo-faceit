import { BSON, BSONId, DocId } from './bson';


export abstract class Coll<A> {

  bson: BSONId<A>
  
  constructor(bson: BSONId<A>) {
    this.bson = bson;
  }

  read(doc: Maybe<DocId>): Maybe<A> {
    if (doc) {
      return this.bson.read(doc);
    }
  }

  write(a: Maybe<A>): Maybe<DocId> {
    if (a) {
      return this.bson.write(a);
    }
  }

  exists(query: any): Fu<Boolean> {
    return this.one(query).then(_ => !!_);
  }
  
  abstract one(query: any): Fu<Maybe<A>>
  abstract insert(doc: A): Fu<void>
  abstract delete(id: string): Fu<void>
  abstract set(id: string, update: any): Fu<void>
  abstract update(id: string, update: any): Fu<void>
  abstract find(query: any): Fu<Array<A>>
  abstract findProjection<B>(query: any, projection: any, bson: BSON<B>): Fu<Array<B>>
  
}
