import { BSONId, DocId } from '../db/bson';
import User from './user';
import LightUser from './lightuser';

export type UserDoc = DocId & {
  username: string
}

export const UserBsonHandler: BSONId<User> = {
  read(doc: UserDoc): User {
    return User.make(doc);
  },

  write(user: User): UserDoc {
    return {
      id: user.id,
      username: user.username
    };
  }
};

export type LightUserDoc = DocId & {
  username: string  
}

export const lightUserBsonHandler: BSONId<LightUser> = {
  read(doc: LightUserDoc): LightUser {
    return new LightUser(doc.id,
                         doc.username);
  },

  write(lightUser: LightUser): LightUserDoc {
    return {
      id: lightUser.id,
      username: lightUser.name
    };
  }
}
