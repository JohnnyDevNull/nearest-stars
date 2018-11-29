import { Component, OnInit } from '@angular/core';
import { MsglineModel } from './msgline.model';
import { MsglineService } from './msgline.service';

@Component({
  selector: 'nearest-stars-msgline',
  templateUrl: './msgline.component.html'
})
export class MsglineComponent implements OnInit {

  public messages: MsglineModel[];

  public constructor(
    private compServ: MsglineService
  ) {
    this.doReset();
  }

  public ngOnInit(): void {
    this.messages = this.compServ.getMessages();
    this.compServ.updSubj.subscribe(
      () => this.messages = this.compServ.getMessages()
    );
  }

  public doClose(msg: MsglineModel): void {
    this.compServ.removeMessage(msg);
  }

  public doReset(): void {
    this.compServ.reset();
    this.messages = [];
  }
}
