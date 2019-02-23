import { TokenController } from '../controllers/token.controller';
import { Application } from 'express';

export class TokenRouter {

  public tokenCtrl: TokenController = new TokenController();

  public attach(app: Application): void {
    app.route('/token')
    // GET Token validity
    .get(this.tokenCtrl.verifyToken, this.tokenCtrl.getTokenInfo)
    // POST Get new Token
    .post(this.tokenCtrl.createToken)
    // DELETE Token
    .delete(this.tokenCtrl.deleteToken);
  }
}
