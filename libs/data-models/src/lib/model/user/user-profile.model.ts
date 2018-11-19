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
  birthDate: Date;

  user: UserModel;

}
