export class Attributes<T> {
  constructor(private data: T) {}

  //converted to bound func w/arrow
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set = (update: T): void => {
    Object.assign(this.data, update);
  }
}
