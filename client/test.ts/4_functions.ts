function add(a: number, b: number): number {
  return a + b;
}
function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

//  перегрузка function

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}
function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;
// function with unnessesary parametrs function overload - перезагрузка функции 
//для того что бы можно было ее использовать разными параметрами и она могла отдавать разный результат
// часто используется в библиотеках типа lodash
function position(a?: number, b?: number) {
  if (!a && !b) return { x: undefined, y: undefined };
  if (a && !b) return { x: a, y: undefined, default: a.toString() };
  return { x: a, y: b };
}

console.log("Empty", position());
console.log("One param", position(42));
console.log("Two params", position(10, 15));
