import { Application } from 'express';
import { UserGroupController } from '../controllers/user-group.controller';

export class UserGroupRouter {

  public usersCtrl: UserGroupController = new UserGroupController();

  public attach(app: Application): void {

    app.route('/usergroup')
    // GET user group list
    .get(this.usersCtrl.getUserGroups)
    // POST create a single user group
    .post(this.usersCtrl.createUserGroup);

    app.route('/usergroup/:groupId')
    // GET a single user group by id
    .get(this.usersCtrl.getUserGroupById)
    // PUT update a single existing user group by id
    .put(this.usersCtrl.updateUserGroupById)
    // DELETE a single existing user group by id
    .delete(this.usersCtrl.deleteUserGroupById);

  }
}
