import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotifyService } from '@client-services/notify/notify.service';
import { UserGroupModel } from '@nearest-stars/schema';
import { DxFormComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';
import { AdminUserGroupsService } from '../admin-user-groups.service';

@Component({
  selector: 'nearest-stars-admin-user-groups-item',
  templateUrl: './admin-user-groups-item.component.html',
  styleUrls: ['./admin-user-groups-item.component.scss']
})
export class AdminUserGroupsItemComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public mode: string;
  public index: number;

  public origItem: UserGroupModel | null = null;
  public item: UserGroupModel | null = null;

  @ViewChild('dxForm')
  public dxForm: DxFormComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private admServ: AdminUserGroupsService,
    private msgServ: NotifyService
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

  public onDxSubmit(): void {
    if (!this.dxForm.instance.validate().isValid) {
      return;
    }

    const group: UserGroupModel = {};
    const {name, type, activated} = this.dxForm.formData;
    group.name = name;
    group.type = type;

    if (activated !== undefined) {
      group.activated = activated;
    }

    if (this.mode === 'edit' && this.item.id !== null) {
      group.id = this.item.id;
      this.admServ.updateUserGroup(group).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    } else if (this.mode === 'new' && this.item.id === null) {
      this.admServ.createUserGroup(group).subscribe(
        (res) => this.msgServ.showMessageByResult(res),
        (err) => this.msgServ.showMessageByResult(err)
      );
    }
  }

  public onDelete(): void {
    this.admServ.deleteUserGroup(this.item.id).subscribe(
      (res) => this.msgServ.showMessageByResult(res),
      (err) => this.msgServ.showMessageByResult(err)
    );
  }

  public onDiscard(): void {
    if (this.origItem) {
      this.item = Object.create(this.origItem);
    } else {
      this.dxForm.instance.resetValues();
    }
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
        this.item = Object.create(item);
        this.origItem = Object.create(item);
      } else {
        this.router.navigate(['/admin/groups']);
      }
    }
  }
}
