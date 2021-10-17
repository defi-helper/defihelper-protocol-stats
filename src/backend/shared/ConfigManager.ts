export default class {
  public static get(key: string): string {
    const v = process.env[key];
    if(v === undefined) {
      throw Error('Key doesn't exists');
    }
    return v;
  }
}
