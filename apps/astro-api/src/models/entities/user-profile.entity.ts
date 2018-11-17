import { UserProfileModel } from '@nearest-stars/data-models';
import { EntitySchema } from 'typeorm';

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
      inverseSide: 'profile',
      primary: true
    }
  }
});
