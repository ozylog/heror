export default class Herrors extends Error {
  private _statusCode!: number;
  private _error!: string;
  private _data!: any | undefined;

  constructor(statusCode: number, error: string, message?: string, data?: any) {
    const msg = message === undefined ? error : message;
    super(msg);

    this._statusCode = statusCode;
    this._error = error;
    this._data = data;
  }

  public get statusCode() {
    return this._statusCode;
  }

  public get error() {
    return this._error;
  }

  public get data() {
    return this._data;
  }
}
