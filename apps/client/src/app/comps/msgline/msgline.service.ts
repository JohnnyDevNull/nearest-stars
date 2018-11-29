import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MsglineTypeEnum } from './msgline-type.enum';
import { MsglineModel } from './msgline.model';

@Injectable({
  providedIn: 'root'
})
export class MsglineService {

  private messages: MsglineModel[] = [];
  public updSubj = new Subject<any>();

  public constructor() {
  }

  public getMessages(): MsglineModel[] {
    return this.messages;
  }

  public showMessage(text: string, type: MsglineTypeEnum): void {
    this.messages.push({text, type});
    this.updSubj.next(1);
  }

  public reset(): void {
    this.messages = [];
  }

  public removeMessage(msg: MsglineModel): void {
    this.messages.splice(this.messages.indexOf(msg), 1);
    this.updSubj.next(1);
  }
}
