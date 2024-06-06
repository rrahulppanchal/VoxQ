class ResponseHandler {
  public data: any;
  public message: string;
  public statusCode: number;

  constructor(data: any, message: string, statusCode: number) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }

  public getData() {
    return this.data;
  }

  public getMessage() {
    return this.message;
  }

  public getStatusCode() {
    return this.statusCode;
  }

  public getResponse() {
    return {
      data: this.data,
      message: this.message,
      statusCode: this.statusCode,
    };
  }
}

export default ResponseHandler;
