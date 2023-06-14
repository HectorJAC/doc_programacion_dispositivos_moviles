# The Basics  
TypeScript es la forma de escribir codigo JavaScript de manera estatica para asi hacer predicciones sobre que codigo se espera antes de que se ejecute.  

**Static type-cheking - Comprobacion estatica de tipos**
TypeScript con su sistema de tipos estaticos puede decir al programador cuando su codigo dara un error incluso antes de este ejecutarse, cuando se trate de un error de tipos, ya sea de variables, funciones, etc.  

**Non-exception Failures - Fallos no excepcionales**  
En JavaScript cuando se llama a una propiedad que no existe dentro de un objeto no devuelve un error, sino que devuelve "undefined", esto por las caracteristicas del ECMAScript. Mientras que por otro lado TypeScript si se llama a una propiedad que no existe dentro de un objeto marcara un error antes de este ejecutarse. Entre los errores que TypeScript detecta estan los errroes tipograficos, funciones no llamadas o errore logicos basicos.  

**Types for Tooling - Tipos de herramientas**  
TypeScript cuenta con un verificador que ayuda a completar el codigo mientras se escribe, por ejemplo, puede mostrar las propiedades correctas de un objeto mientras se escribe el codigo para acceder a estas.  

**tsc, the TypeScript compyler - tsc, el compilador de TypeScript**  
El compilador "tsc" siempre que ejecuta un archivo TypeScript lo compila y lo convierte a un archivo JavaScript, porque los navegadores solo entienden el lenguaje JavaScript. Aun usando el compilador "tsc" TypeScript sigue mostrando los errores que encuentra.  

**Emitting with Errors - Emitiendo con errores**  
Aun si el archivo de TypeScript tiene errores el archivo de JavaScript se actualizara, y hay una forma de hacer que este no se actualice si el archivo TypeScript muestra un error, esto se logra con el comando --noEmitInError-- de la consola de comandos.  

**Explicit Types - Tipos explicitos**  
TypeScript permite decirle a nuestras variables, constantes, funcione, etc, de que tipo de dato son y/o que tipo de datos van a recibir, haciendo posible que detecte errores de manera mas eficaz.  

**Erased Types - Tipos borrados**  
El codigo JavaScript que se obtiene al compilar el codigo TypeScript elimina las anotaciones de tipo, ya que JavaScript no soporta las anotaciones de tipo.  

**Strictness - Rigor**  
TypeScript tiene una forma de subir el nivel de la verficacion. En el archivo tsconfig.json se coloca el "strict" en true se activa un nivel de rigor muy poderoso para todo el programa, pero si solo es requerido para un archivo o algunos archivos en especifico se utilizan "noImplicityAny" y "strictNullChecks".  

**noImplicityAny**  
Con esto se bloquea o se genera un error siempre que se coloque la anotacion de tipo "any".  

**strictNullChecks**  
Con esto se bloquea o se genera un error siempre que se coloque la anotacion de tipo "null" y "undefined".

# Everyday Types  

**The primitives: string, number and boolean - Los primitvos: string, number y boolean**  
String: son los caracteres de letras.
Number: son los numeros.
Boolean: son los valores true y false.

**Arrays - Arreglos**  
Son una cadena de caracters como por ejemplo: [1, 2, 3]. Usando la sintaxis: number[] o  Array<number>.  

**Any**  
En pocas palabras any puede ser cualquier valor, es utilizado cuando no se requiere el uso del verificador de TypeScript.  

**Type Annotations on Variable - Escriba anotaciones en variables**  
Es simplemente indicar de que tipo es la variable que se esta creando, aunque no es siempre necesario porque TypeScript intenta inferir automaticamente los tipos en el codigo, es considerada una buena practica.  

**Functions - Funciones**  
Una funcion es una porcion de codigo que puede ser llamada las veces que sean necesario, y TypeScript permite especificar el tipo de los valores de salida y de entrada de las funciones.  

**Parameter Type Annotations - Anotaciones de tipo parametro**  
Se pueden agregar las anotaciones de tipo despues de la declaracion de cada parametro que espera recibir la funcion.  

**Return Type Annotations - Anotaciones de tipo de retorno**  
Estas anotaciones se colocan luego de la lista de parametros e indican que el tipo del valor que se retornara.  

**Anonymous Functions - Funciones anonimas**  
Es cuando una funcion se llama sin la creacion anterior, TypeScript le coloca automaticamente los tipos a los paramteros que esta recibe.  

**Object Types - Tipos de objetos**  
Los objetos son valores con propiedades, entonces para crear un objeto solo se enumeran sus propiedades y sus tipos.  

**Optional Properties - Propiedades opcionales**  
Tambien se le puede indicar a TypeScript que propiedades son opcionales, y esto se logra colocando un "?" antes de la anotacion del tipo de la propiedad.  

**Union Types - Tipos de Union**  
Los tipo de union es una anotacion de tipo formada por dos tipos, es decir que puede ser de cualquiera de esos dos tipos.  

**Working with Union Types - Trabajo con tipos de union**  
Para trabajar con union de tipos es necesario utilizar operaciones que coincidan con cada uno de los tipos, sino se debe crear condiciones para trabajar con operaciones dependiendo el tipo que sea.  

**Type Aliases - Tipos de alias**  
Los alias de tipo se usan cuando es necesario utilizar el mismo tipo varias veces, entonces se coloca un nombre para ese tipo, ya sea uno en especifico o hasta una union de tipos.  

**Interfaces**  
Es otra forma de nombrar los tipos de objeto. Al igual que con los alias de tipo TypeScript solo se preocupa de que la funcion, variable, etc, tenga las propiedades esperadadas, es por esto que TypeScript usa un sistema de tipos "estructuralmente tipados".  

**Diferencias entre alias de tipo e interfaces**  
La principal diferencia recae en que los alias no se pueden volver a abrir para agregarle propiedades, mientras que las interfaces son extendibles cuanto queramos.  

**Type Assertions - Escriba aserciones**  
Las aserciones son para indicarle a TypeScript un tipo mas especifico. Por ejemplo, si este espera un tipo HTMLElement, pero sabemos que en la pagina tenemos un tipo mas especifico se le puede indicar escribieno HTMLCanvasElemet, por ejemplo.  

**Literal Types - Tipos literales**  
Los literales se usan cuando una variable puede tener diferentes valores.  

**Literal Inference - Inferencia literal**  
Cuando se inicializa una variable con un objeto, TypeScript asume que las propiedades del objeto pueden cambiar los valores mas adelante.  

**Null y undefined**  
Son los otros valores primitivos que se utilizan cuando un valor esta ausento o no inicializado.  

**Non-null AssertionOperator (!) - Operador de asercion no nulo (!)**  
TypeScript permite eliminar el null y el undefined de un tipo utilizando "!" despues de la llamada de la variable.  

**Enums - Enumeraciones**  
Permite describir un valor que podría ser uno de un conjunto de posibles constantes con nombre.  

**Less Common Primitives - Primitivas menos comunes**  
Desde ES2020 en adelante, hay una primitiva en JavaScript que se usa para números enteros muy grandes, BigInt.  
Hay una primitiva en JavaScript que se usa para crear una referencia globalmente única a través de la función Symbol().

# Narrowing  

**typeof, tipo guardias**  
El operador typeof brinda informacion basica sobre el tipo de valor que se tiene en tiempo de ejecucion, tales como: "string", "number", "function", etc.  

**Estrechamiento de veracidad**  
En JavaScript se puede usar cualquier expresion en las condicionales. En JavaScript, las construcciones como if primero "forzan" sus condiciones a booleans para darles sentido, y luego eligen sus ramas dependiendo de si el resultado es true o false.  

**Reduccion de igualdad**  
TypeScript también usa switchinstrucciones y comprobaciones de igualdad como ===, !==, == y != para limitar los tipos.  

**El in estrechamiento del operador**  
JavaScript tiene un operador para determinar si un objeto o su cadena prototipo tiene una propiedad con un nombre: el inoperador. TypeScript tiene esto en cuenta como una forma de reducir los tipos potenciales.  

**instanceof estrechamiento**  
JavaScript tiene un operador para verificar si un valor es o no una "instancia" de otro valor, y ese es "instanceof".  

**Tareas**  
Si se delara una variable con una union de tipos, TypeScript en cada llamada a esta variable le cambia el tipo dependiendo la situacion, pero solamente entre los tipos de la union.  

**Analisis de flujo de control**  
TypeScript utiliza e; análisis de flujo de flujo de control para limitar los tipos a medida que encuentra asignaciones y protecciones de tipo.  

**Uso de predicados de tipo**  
Para definir una protección de tipo definida por el usuario, simplemente necesitamos definir una función cuyo tipo de retorno sea un predicado de tipo. Un predicado toma la forma "parameterName is Type", donde "parameterName" debe ser el nombre de un parámetro de la firma de la función actual.  

**Sindicatos discriminados**  
Las uniones discriminadas son útiles para representar cualquier tipo de esquema de mensajería en JavaScript, como cuando se envían mensajes a través de la red (comunicación cliente/servidor) o se codifican mutaciones en un marco de gestión de estado.  

**El never tipo**  
TypeScript usará un nevertipo para representar un estado que no debería existir.  

**Comprobacion de exhaustividad**  
El nevertipo es asignable a cada tipo; sin embargo, ningún tipo es asignable a never(excepto nevera sí mismo).
