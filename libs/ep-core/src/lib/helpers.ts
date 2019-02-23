export namespace Helpers {

  export function getError (statusCode: number, message: string): Error {
    const err = new Error(message);
    (<any>err).status = statusCode;
    return err;
  }

  export function isEmptyStr(v: string): boolean {
    return v === null || v === undefined || v === '';
  }

  export function isEmptyNum(v: number): boolean {
    return v === null && v === undefined || v === 0;
  }

}
