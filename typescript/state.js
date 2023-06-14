// Primer Parcial - Patron State en TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Creacion del Context
var Context = /** @class */ (function () {
    function Context(state) {
        this.cambiarEstado(state);
    }
    // Con esta funcion del Context se permite que el State cambie de su estado actual a otro
    Context.prototype.cambiarEstado = function (state) {
        console.log("El Context ahora es: ".concat(state.constructor.name, "."));
        this.state = state;
        this.state.setContext(this);
    };
    // El Context divide en dos el State, el primero es la propiedad request1 y el segundo es la propiedad request2
    Context.prototype.request1 = function () {
        console.log('Usando la request1 del Context que contiene la funcion handle1');
        this.state.handle1(); // Metodo handle1 del State
    };
    Context.prototype.request2 = function () {
        console.log('Usando la request2 del Context que contiene la funcion handle2');
        this.state.handle2(); // Metodo handle2 del State
    };
    return Context;
}());
// La clase State declara métodos que se implementan en todos los estados del State
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
// Estados posibles que puede tener el State
var State1 = /** @class */ (function (_super) {
    __extends(State1, _super);
    function State1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    State1.prototype.handle1 = function () {
        console.log('El State1 usa la request1 para cambiar su estado');
        console.log('El State1 espera a que cambie el contexto del State.');
        this.context.cambiarEstado(new State2()); // El State1 cambia a State2
    };
    State1.prototype.handle2 = function () {
        console.log('Entonces el State1 usa ahora la request2.');
    };
    return State1;
}(State));
var State2 = /** @class */ (function (_super) {
    __extends(State2, _super);
    function State2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    State2.prototype.handle1 = function () {
        console.log('Entonces el State2 usa ahora la request2.');
    };
    State2.prototype.handle2 = function () {
        console.log('El State2 usa la request1 para cambiar su estado');
        console.log('El State2 espera a que cambie el contexto del State.');
        this.context.cambiarEstado(new State1()); // El State2 cambia a State1
    };
    return State2;
}(State));
// Ejecución del código
var context = new Context(new State2()); // Se crea un nuevo Context con el State1
// Se ejecutan las dos funciones del Context
context.request1();
context.request2();
