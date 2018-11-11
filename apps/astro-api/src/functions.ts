
export function getError (statusCode: number, message: string) {
  const err = new Error(message);
  (<any>err).status = statusCode;
  return err;
}
