import { UsersController } from '../controllers/users-controller';
import { Application } from 'express';

export class UsersRouter {

  public usersCtrl: UsersController = new UsersController();

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
