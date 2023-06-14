// The Basics

// Static type-checking 
const message = "hello!";
message(); // TypeScript marcara un error porque message no es una funcion

// Non-exception Failures
const user = {
    name: "Daniel",
    age: 26,
};

user.location; // TypeScript retorna undefined, porque location no existe en user

const announcement = "Hello World!";
 
// TypeScript marcara como error cuando este mal escrito
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
 
// Asi se debe escribir
announcement.toLocaleLowerCase();

function flipCoin() {
    return Math.random < 0.5; // TypeScript marcara un error cuando no se llame correctamente una funcion
}

const value = Math.random() < 0.5 ? "a" : "b"; // Typescript indicara cuando haya errores logicos
if (value !== "a") {
  // ...
} else if (value === "b") {
    // ...
}

// Explicit Types

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Maddison', Date()); // TypeSctipt marcara como error porque Date() retorna un string 
greet('Maddison', new Date()); // TypeScript no marcara error porque new Date() retorna un Date

// Everyday Types

// The primitives: string, number, boolean
let nombre: string = "Juan";
let edad: number = 25;
let adulto: boolean = true;

// Arrays
let lista: number[] = [1,2,3];

// Any
let obj: any = { x: 0 };
// Como obj es de tipo any se le puede colocar cualquier valor y TypeScript no marcara error
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// Type Annotations on Variables
let myName: string = "Alice";

// Functions

// Parameter Type Annotations
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

greet(42); // TypeScript marcara error porque 42 no es un string

// Return Type Annotations
function getFavoriteNumber(): string {
    return 26; // TypeScript marcara error porque retorna 26 y no es un string como se marco en el tipo del retorno
}

// Anonymous Functions
const names: string[] = ["Alice", "Bob", "Eve"];

names.forEach(function (s) { // El parametro s es de tipo string porque se infiere del tipo del array names
    console.log(s.toUpperCase());
});

names.forEach((s) => { // Pasa lo mismo con las funciones de flecha
    console.log(s.toUpperCase());
});

// Object Types
function printCoord(pt: {x: number; y: number}) { // Tambien se le puede colocar a un parametro un objeto como su tipo
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional Properties
function printName(obj: { first: string; last?: string }) { // Colocando un ? despues del nombre de la propiedad se indica que es opcional
    // ...
}
printName({first: "Bob"});
printName({first: "Alice", last: "Alisson"});

// Si se trata de acceder a una propeidad opcional TypeScript marcara un error, porque esta puede ser undefined
function printName(obj: { first: string; last?: string }) { 
    console.log(obj.last.toUpperCase());
    if (obj.last !== undefined) {
      // OK
      console.log(obj.last.toUpperCase());
    }
    console.log(obj.last?.toUpperCase());
}

// Union Types
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error, porque el parametro no es ni un string ni un number
printId({ myID: 22342 });

// Working with Union Types
function print(id: number | string) {
    console.log(id.toUpperCase()); // TypeScript marcara error porque toUpperCase() no existe en number
}

// Para resolver ese problema se puede hacer una verificacion de tipo usando typeof y condicionales
function print(id: number | string) {
    if (typeof id === "string") { // Si es string se puede usar toUpperCase()
      console.log(id.toUpperCase());
    } else { // Si es number no se puede usar toUpperCase(), y asi TypeScript no marcara error
      console.log(id);
    }
}

// Type Aliases
type Point = { // Forma de nombrar tipos de objetos, para reutilizarlos
    x: number;
    y: number;
};
function printCoord2(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });

// Interfaces
interface Point2 { // Otra de forma de nombrar los tipos de objeto, muy parecido a los types, solo que las interfaces se pueden modificar
    x: number;
    y: number;
};
function printCoord3(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });

// Type Assertions
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement; // Se le dice a TypeScript que myCanvas es de tipo HTMLCanvasElement

const x = "hello" as number; // TypeScript no permite asignarle un tipo number a un string

// Less Common Primitives

// BigInt
const oneHundred: bigint = BigInt(100);
const anotherHundred: bigint = 100n;

// Symbol
const firstName = Symbol("name");
const secondName = Symbol("name");
 
if (firstName === secondName) {
  // Can't ever happen
}

// Narrowing

function padLeft(padding: number | string, input: string) {
    return " ".repeat(padding) + input; // TypeScript marcara error porque repeat() solo acepta number
}

// Se verifica si padding es un number y se puede usar repeat()
function padLeft2(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
}

// typeof Type Guards

function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) { // TypeScript marcara error porque strs puede ser null
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
}

// Truthiness narrowing

function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) { // Se ejecutara si numUsersOnline es true, ya que la condicion if fuerza primero sus condiciones a boolean
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

// Con las condicionales se puede proteger de los valores como null o undefined que son false
function printAll2(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
}

// Equality narrowing

// Con la condicion if solo se ejecutara si x es igual a y, y como ambos tienen string entre sus tipos se pueden usar los metodos de string
function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();

      y.toLowerCase();

    } else {
      console.log(x);

      console.log(y);
    }
};

// The in operator narrowing

type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) { // El operador in verifica si el objeto tiene la propiedad que se le pasa
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

// instanceof narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) { // instanceof verifica si un valor es de una instancia de otro valor
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
}

// Assignments

let x2 = Math.random() < 0.5 ? 10 : "hello world!";
// Se le pueden asignar diferentes valores a la misma variable siempre y cuando sean del mismo tipo que cuando se declara
x2 = 1;
console.log(x);

x2 = "goodbye!";
console.log(x); // Si se le asigna, por ejemplo, un booleano a x daria un error pues no es del mismo tipo que cuando se declaro

// Control Flow Analysis

// Como el ultimo return esta fuera de la condicion, padding solo se queda con el tipo string
function padLeft3(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
}

// Using Type Predicates

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// Discriminated Unions

// Interfaz de la forma que puede ser cirulo o cuadrado dependiendo de la propiedad kind
// De esta forma se pueden dar errores
interface ShapeBad { 
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

// Es recomendable dividir las propiedades en diferentes interfaces
interface Circle {
    kind: "circle";
    radius: number;
}
   
interface Square {
    kind: "square";
    sideLength: number;
}
 
// Y luego crear un type que sea la union de las interfaces
type Shape = Circle | Square;

// Se puede usar un switch para realziar operaaciones dependiendo la king que tenga el type y asi se evitan errores
function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;                
      case "square":
        return shape.sideLength ** 2;
    }
}

// Exhaustiveness checking

// Si en el default se coloca un -exhaustiveCheck dara error si no se manejan todos los casos posible o si se agrega uno nuevo
function getArea2(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      default:
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
}

