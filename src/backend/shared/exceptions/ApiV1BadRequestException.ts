import {paramMissingError} from "../constants";

export default class extends Error {
  constructor() {
    super(paramMissingError);
    this.name = "ApiV1BadRequestException";
  }
};
