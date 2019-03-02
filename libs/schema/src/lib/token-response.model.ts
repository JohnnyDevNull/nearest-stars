export interface TokenResponseModel {
  token: string;
  expiresAt: number;
  userId: number;
  username: string;
  activated: boolean;
  locked: boolean;
}
