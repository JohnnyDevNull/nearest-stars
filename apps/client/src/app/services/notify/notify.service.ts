import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Subject } from 'rxjs';
import { NotifyTypeEnum } from './notify-type.enum';
import { NotifyModel } from './notify.model';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private messages: NotifyModel[] = [];
  public updSubj = new Subject<any>();

  public constructor() {
  }

  public getMessages(): NotifyModel[] {
    return this.messages;
  }

  public showMessage(text: string, type: NotifyTypeEnum): void {
    this.messages.push({text, type});
    this.updSubj.next(1);
  }

  public reset(): void {
    this.messages = [];
  }

  public removeMessage(msg: NotifyModel): void {
    this.messages.splice(this.messages.indexOf(msg), 1);
    this.updSubj.next(1);
  }

  public showMessageByResult(result: any): void {
    let text: string;
    let type: string;

    if (result !== undefined && result.meta !== undefined) {
      if (result.meta.code === 0) {
        type = NotifyTypeEnum.SUCCESS;
      } else if (result.meta.error) {
        type = NotifyTypeEnum.ERROR;
      } else {
        type = NotifyTypeEnum.WARNING;
      }
      text = result.meta.message;
    } else if (result.error !== undefined) {
      type = NotifyTypeEnum.ERROR;
      if (typeof result.error === 'string') {
        text = result.error;
      } else if (result.error.meta !== 'undefined') {
        text = result.error.meta.message;
      }
    } else if (result.message !== undefined ) {
      type = NotifyTypeEnum.WARNING;
      text = result.message;
    }

    notify(text, type, 3000);
  }
}
