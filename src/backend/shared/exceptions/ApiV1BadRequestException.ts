import {paramMissingError} from '../constants';

export default class extends Error {
  constructor(message: string = paramMissingError) {
    super(message);
  }
};
