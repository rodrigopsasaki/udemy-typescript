const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;

const nothingMuch: null = null;
const nothing: undefined = undefined;

// built-in objects
const now: Date = new Date();

// Array
const colors: string[] = ['red', 'green', 'blue'];
const myNumbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, true, false];

// Classes
class Car {}
const car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = i => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}
