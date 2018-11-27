import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserGroupModel } from '@nearest-stars/data-models';
import { Subscription } from 'rxjs';
import { AdminUserGroupsService } from './../admin-user-groups.service';

@Component({
  selector: 'nearest-stars-admin-user-groups-item',
  templateUrl: './admin-user-groups-item.component.html'
})
export class AdminUserGroupsItemComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public mode: string;
  public index: number;

  public item: UserGroupModel | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private admServ: AdminUserGroupsService
  ) {
  }

  ngOnInit() {
    this.mode = this.route.snapshot.params['mode'];
    this.index = this.route.snapshot.params['index'] !== undefined
            ? +this.route.snapshot.params['index']
            : 0;
    this.fetchItem();

    this.subs.push(this.route.params.subscribe((params: Params) => {
      this.mode = params['mode'];
      this.index = this.route.snapshot.params['index'] !== undefined
              ? +this.route.snapshot.params['index']
              : 0;
      this.fetchItem();
    }));
  }

  public ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  public onSubmit(f: NgForm): void {
    if (!f.valid) {
      return;
    }

    const group: UserGroupModel = {};
    const {name, type, activated} = f.value;
    group.name = name;
    group.type = type;

    if (activated !== undefined) {
      group.activated = activated;
    }

    if (this.mode === 'edit' && this.item.id !== null) {
      group.id = this.item.id;
      this.admServ.updateUserGroup(group).subscribe(
        (res) => console.log(res),
        (err) => console.error(err)
      );
    } else if (this.mode === 'new' && this.item.id === null) {
      this.admServ.createUserGroup(group).subscribe(
        (res) => console.log(res),
        (err) => console.error(err)
      );
    }
  }

  public onDelete(userGroupId: number): void {
    this.admServ.deleteUserGroup(userGroupId).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  private fetchItem(): void {
    this.item = {
      id: null,
      name: '',
      type: '',
      activated: false
    };

    if (this.mode === 'edit' && this.index !== null) {
      const item = this.admServ.getUserGroupByIndex(this.index);

      if (item !== null) {
        this.item = item;
      } else {
        this.router.navigate(['/admin/groups']);
      }
    }
  }
}
