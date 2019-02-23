import { Application } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRouter {

  public usersCtrl: UserController = new UserController();

  public attach(app: Application): void {

    app.route('/user')
    // GET users list with filter
    .get(this.usersCtrl.getUsers)
    // POST create a single user
    .post(this.usersCtrl.createUser);

    app.route('/user/:userId')
    // GET a single user by id
    .get(this.usersCtrl.getUserById)
    // PUT update a single existing user by id
    .put(this.usersCtrl.updateUserById)
    // DELETE a single existing user by id
    .delete(this.usersCtrl.deleteUserById);

  }
}
