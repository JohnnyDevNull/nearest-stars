export interface TokenResponseModel {
  token: string;
  expiresAt: number;
  firstName: string;
  lastName: string;
  userName: string;
  activated: boolean;
  locked: boolean;
}
