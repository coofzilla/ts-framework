//interface can be used to create types to describe object literals
interface UserProps {
  name?: string;
  age?: number;
}

//type alias
//type annotation
type Callback = () => {};

export class User {
  events: {
    [key: string]: Callback[];
  } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(eventName: string, callback: Callback) {}
}
