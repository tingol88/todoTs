// usealy use fot some classes

interface Rect {
  // readonly - means that you can only create it fild but can not edit
  readonly id: string;
  // ? not nessesary property
  color?: string;
  size: {
    width: number;
    hight: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 10,
    hight: 30,
  },
  color: "ccc",
};
const rect2: Rect = {
  id: "12345",
  size: {
    width: 10,
    hight: 30,
  },
};
rect2.color = "black";
// assignment - присваивание

// strict assignment to type (interface) below rect3
const rect3 = {} as Rect;
const rect4 = <Rect>{};

// extended of interfaces (наследование интерфейсов)
interface RectWithArea extends Rect {
  // assignment type for function
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    hight: 10,
  },
  // after parensless we have to say what function is return
  getArea(): number {
    return this.size.width * this.size.hight;
  },
};
console.log(rect5.getArea());

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

// имплементация разработка реализация исполнение выполнение
class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
      this.time = date
  }
}
// =============
// если в объекте много свойств можем разом указать что все ключи будут иметь один тип string и пропишем что значения тоже будут string
interface Styles {
    [key: string]: string
}

const css: Styles ={
    border: '1px solid black',
    borderRadius: '2px',
}
