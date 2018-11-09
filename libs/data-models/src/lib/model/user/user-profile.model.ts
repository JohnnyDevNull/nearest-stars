import { EntitySchema } from 'typeorm';
import { UserModel } from './user.model';

export interface UserProfileModel {

  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  zipCode: string;
  city: string;
  country: string;
  phone1: string;
  phone2: string;
  backupEmail: string;

  user: UserModel;

}

export const UserProfileEntity = new EntitySchema<UserProfileModel>({
  name: 'UserProfile',
  columns: {
    firstName: {
      type: String,
      length: 20
    },
    lastName: {
      type: String,
      length: 20
    },
    addressLine1: {
      type: String,
      length: 20
    },
    addressLine2: {
      type: String,
      length: 20
    },
    addressLine3: {
      type: String,
      length: 20
    },
    zipCode: {
      type: String,
      length: 10
    },
    city: {
      type: String,
      length: 20
    },
    country: {
      type: String,
      length: 20
    },
    phone1: {
      type: String,
      length: 20
    },
    phone2: {
      type: String,
      length: 20
    },
    backupEmail: {
      type: String,
      length: 20
    },
  },
  relations: {
    user: {
      target: 'User',
      type: 'one-to-one',
      joinColumn: true,
      inverseSide: 'profile'
    }
  }
});
