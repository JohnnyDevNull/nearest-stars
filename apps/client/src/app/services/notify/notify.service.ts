import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as HttpStatus from 'http-status-codes';
import { NotifyTypeEnum } from './notify-type.enum';

// @todo: Theming snackbar for info, warning and error messages
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  public constructor(
    private snackBar: MatSnackBar
  ) {
  }

  public showMessage(text: string, type: NotifyTypeEnum = NotifyTypeEnum.INFO): void {
    this.snackBar.open(text, 'OK', {duration: 4000});
  }

  public showMessageByResult(result: any, timeout = 3000): void {
    let text: string;
    let type: string;

    if (result !== undefined && result.meta !== undefined) {
      if (
        (
          result.meta.code === HttpStatus.OK
          || result.meta.code === HttpStatus.CREATED
          || result.meta.code === HttpStatus.ACCEPTED
        )
        && !result.meta.error
      ) {
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

    this.snackBar.open(text, 'Ok', { duration: timeout});
  }
}
