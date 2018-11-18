export interface TokenResponseModel {
  token: string;
  expiresAt: number;
  username: string;
  activated: boolean;
  locked: boolean;
}
