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

  public showMessageByResult(result: any): void {
    let text: string;
    let type: string;

    if (result !== undefined && result.meta !== undefined) {
      if (result.meta.code === 0) {
        type = MsglineTypeEnum.SUCCESS;
      } else if (result.meta.error) {
        type = MsglineTypeEnum.DANGER;
      } else {
        type = MsglineTypeEnum.WARNING;
      }
      text = result.meta.message;
    } else if (result.error !== undefined) {
      type = MsglineTypeEnum.DANGER;
      if (typeof result.error === 'string') {
        text = result.error;
      } else if (result.error.meta !== 'undefined') {
        text = result.error.meta.message;
      }
    } else if (result.message !== undefined ) {
      type = MsglineTypeEnum.WARNING;
      text = result.message;
    }

    this.messages.push({text, type});
    this.updSubj.next(1);
  }
}
