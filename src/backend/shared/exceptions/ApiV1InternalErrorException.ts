import { unknownInternalError } from "../constants";

export default class extends Error {
  constructor(message: string = unknownInternalError) {
    super(message);
    this.name = "ApiV1InternalErrorException";
  }
}
