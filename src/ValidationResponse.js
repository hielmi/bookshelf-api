class ValidationResponse extends Error {
  constructor(message, responseCode, status) {
    super(message);
    this.name = 'ValidationResponse';
    this.responseCode = responseCode;
    this.status = status;
  }
}

module.exports = ValidationResponse;
