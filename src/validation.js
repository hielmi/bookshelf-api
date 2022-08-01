class ValidationData extends Error {
  constructor(message, responseCode, status) {
    super(message);
    this.name = 'ValidationData';
    this.responseCode = responseCode;
    this.status = status;
  }
}

module.exports = ValidationData;
