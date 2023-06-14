// Primer Parcial - Patron State en TypeScript

// Creacion del Context
class Context {
    private state!: State; // Propiedad state del Context

    // Con esta funcion del Context se permite que el State cambie de su estado actual a otro
    public cambiarEstado(state: State): void {
        console.log(`El Context ahora es: ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }
    
    constructor(state: State) {
        this.cambiarEstado(state);
    }

    // El Context divide en dos el State, el primero es la propiedad request1 y el segundo es la propiedad request2
    public request1(): void {
        console.log('Usando la request1 del Context que contiene la funcion handle1');
        this.state.handle1(); // Metodo handle1 del State
    }

    public request2(): void {
        console.log('Usando la request2 del Context que contiene la funcion handle2');
        this.state.handle2(); // Metodo handle2 del State
    }
}

// La clase State declara métodos que se implementan en todos los estados del State
abstract class State {
    protected context!: Context; // Propiedad context del State, del tipo de la clase Context

    public setContext(context: Context) {
        this.context = context;
    }

    public abstract handle1(): void;

    public abstract handle2(): void;
}

// Estados posibles que puede tener el State
class State1 extends State { // El State1 contiene las funciones handle1 y handle2 que son las propiedades del State
    public handle1(): void {
        console.log('El State1 usa la request1 para cambiar su estado');
        console.log('El State1 espera a que cambie el contexto del State.');
        this.context.cambiarEstado(new State2()); // El State1 cambia a State2
    }

    public handle2(): void {
        console.log('Entonces el State1 usa ahora la request2.');
    }
}

class State2 extends State { // El State2 tambien contiene las funciones handle1 y handle2 que son las propiedades del State
    public handle1(): void {
        console.log('Entonces el State2 usa ahora la request2.');
    }

    public handle2(): void {
        console.log('El State2 usa la request1 para cambiar su estado');
        console.log('El State2 espera a que cambie el contexto del State.');
        this.context.cambiarEstado(new State1()); // El State2 cambia a State1
    }
}

// Ejecución del código
const context = new Context(new State2()); // Se crea un nuevo Context con el State1
// Se ejecutan las dos funciones del Context
context.request1();
context.request2();