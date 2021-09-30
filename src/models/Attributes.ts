export class Attributes<T> {
  constructor(private data: T) {}

  //converted to bound func w/arrow
  //gets only one attribute as key argument
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll(): T {
    return this.data;
  }
}
