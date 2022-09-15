class HttpError {}

class BadRequest extends HttpError {
  constructor(payload = {}) {
    super();

    this.code = 400;
    this.payload = payload;
  }
}

class Unauthorized extends HttpError {
  constructor(payload = {}) {
    super();

    this.code = 401;
    this.payload = payload;
  }
}

class Forbidden extends HttpError {
  constructor(payload = {}) {
    super();

    this.code = 403;
    this.payload = payload;
  }
}

class NotFound extends HttpError {
  constructor(payload = {}) {
    super();

    this.code = 404;
    this.payload = payload;
  }
}

class InternalServerError extends HttpError {
  constructor(payload = {}) {
    super();

    this.code = 500;
    this.payload = payload;
  }
}

module.exports = {
  HttpError,
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  InternalServerError
}