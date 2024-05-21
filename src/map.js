export class ErrorRepository {
    constructor() {
      this.errors = {};
    };
  
    translate(code) {
      if (this.errors[code]) {
        return this.errors[code];
      } else {
        throw new Error("Unknown error");
      }
    };
};