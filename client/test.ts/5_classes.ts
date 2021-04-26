class Typescript {
  // можем указывать просто поля
  version: string;
  // можем указывать конструктор
  constructor(version: string) {
    this.version = version;
  }
  info(name: string): string {
    return `[${name}]:Typescript version is ${this.version}`;
  }
}

class Car {
  // поля до конструктора
  readonly model: string;
  readonly numberOfWheels: number = 4;
  // конструктор внутри конструктора мы можем перезаписать приватное поле readonly
  constructor(theModel: string) {
    this.model = theModel;
  }
  // методы
}

// дженерики
const arrayOfNumbers: Array<number> = [1,2]

const arrayOfString: Array<string> = ['1','2']

// позволяет принимать массивы с разными типами данных
function reverse<T>(array:T[]):T[] {
    return array.reverse()
}