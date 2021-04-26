const isLoading: boolean = false;
const isFetching: boolean = true;

const int: number = 42;

const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello Typescript";

// variant typing of array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
// generic type - notation - запись типа дженерик
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "TypeScript"];

// tuple тапл явное указазание данных в массиве
const contact: [string, number] = ["Vlad", 1234];

// переопределить тип данных type any
let variable: any = 42;
variable = "ddd";

// function set parametrs after parametrs set what a return function void - если функция ничего не возвращает
function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("vanya");

// type Never when function return error or haven't end (continiuously working) for example two functions below

function throwError(message: string): never {
  throw new Error(message);
}

// never end
// function infinite():never {
//     while(true) {

//     }
// }

// Type зарание прописываем типы
type Login = string;
const login: Login = "tingol";

// можно задавать несколько типов
type ID = string | number;
const id1: ID = 123;
const id2: ID = "123";
// const id3: ID = true;

type SomeType = string | null | undefined