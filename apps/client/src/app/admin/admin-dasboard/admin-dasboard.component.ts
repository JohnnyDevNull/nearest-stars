import { NotifyService } from '@client-services/notify/notify.service';
import { Component, OnInit } from '@angular/core';
import { NotifyTypeEnum } from '@client-services/notify/notify-type.enum';

@Component({
  selector: 'nearest-stars-admin-dasboard',
  templateUrl: './admin-dasboard.component.html'
})
export class AdminDasboardComponent implements OnInit {

  constructor(
    private notify: NotifyService
  ) {
  }

  ngOnInit() {
  }

  onSnackTest() {
    this.notify.showMessage('Test');
  }
}
