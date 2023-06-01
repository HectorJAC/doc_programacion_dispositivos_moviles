# Documentacion para la materia de Programacion de Dispositivos Moviles  

# Clase 1: Frameworks populares en el desarrollo de aplicaciones moviles 

# Flutter

**Descripcion**: Flutter es un marco de código abierto desarrollado y compatible con Google. Los desarrolladores de front-end y pila completa utilizan Flutter para crear una interfaz de usuario (IU) de aplicación para varias plataforma con un único código base.   
**Lenguaje de Programacion Base**: Dart  
**Pagina Oficial**: https://flutter.dev/  
**Repositorio**: https://github.com/flutter  
**Creador**: Google  
**Empresa encargada del mantemiento**: Google  
**Fecha de Creacion**: 2018  

# Xamarin

**Descripcion**: Xamarin es una plataforma que permite desarrollar aplicaciones iOS y Android utilizando código C#, permitiendo compartir código entre plataformas hasta un 75% (usando Xamarin clásico) o hasta 100% (usando Xamarin.Forms).  
**Lenguaje de Programacion Base**: C#  
**Pagina Oficial**: https://visualstudio.microsoft.com/es/xamarin/  
**Repositorio**: https://github.com/xamarin/Xamarin.Forms  
**Creador**: Nat Friedman y Miguel de Icaza  
**Empresa encargada del mantemiento**: Microsoft  
**Fecha de Creacion**: 2011

# React Native

**Descripcion**: React Native es un framework JavaScript para crear aplicaciones reales nativas para iOS y Android, basado en la librearía de JavaScript React para la creación de componentes visuales  
**Lenguaje de Programacion Base**: JavaScript  
**Pagina Oficial**: https://reactnative.dev/  
**Repositorio**: https://github.com/facebook/react-native  
**Creador**: Facebook  
**Empresa encargada del mantemiento**: Facebook  
**Fecha de Creacion**: 2015  

# Ionic

**Descripcion**: Ionic Framework es un SDK de frontend de código abierto para desarrollar aplicaciones híbridas basado en tecnologías web (HTML, CSS y JS). Es decir, un framework que nos permite desarrollar aplicaciones para iOS nativo, Android y la web, desde una única base de código.  
**Lenguaje de Programacion Base**: HTML, CSS y JavaScript.  
**Pagina Oficial**: https://ionicframework.com/  
**Repositorio**: https://github.com/ionic-team/ionic-framework  
**Creador**: Drifty Co  
**Empresa encargada del mantemiento**: Drifty Co  
**Fecha de Creacion**: 2013

# Clase 2: Patrones de Diseño y de Arquitectura  

# Patrones de Arquitectura  

**MVC**  
El patrón o arquitectura MVC es una técnica para organizar proyectos de programación que se basa en tres capas: un modelo, una vista y un controlador.  
En el patrón modelo vista controlador, el modelo se refiere a la sección de código que obtiene los datos que usamos en un proyecto. Por su parte, la vista es la sección de código que se encarga de determinar cómo se van a ver estos datos dentro de nuestro proyecto. Finalmente, el controlador es el encargado de intermediar entre el modelo y la vista. 
**Referencia**: https://keepcoding.io/blog/ventajas-del-patron-mvc/#Que_es_el_patron_MVC  

**MVP**  
El Modelo-Vista-Presentador (MVP – model view presenter) es un formato de distribución para la puesta en práctica de la interfaz de usuario (UI) de una aplicación.
Este de diseño consta, como indica su nombre, de 3 aspectos o componentes esenciales. Estos son:  
Modelo. Es el componente del sistema del que depende el acceso a base de datos.  
Vista. Hace referencia a la visualización del diseño de la interfaz.  
Presentador. Este elemento es el puente entre la vista y el modelo. Gracias al presentador, se da la interacción entre petición y almacenamiento de información.  

**Referencia**: https://keepcoding.io/blog/que-es-el-modelo-vista-presentador/  

**MVVM**  
El patrón de arquitectura MVVM, también conocido como Model View ViewModel, se refiere a un modelo de diseño que tiene el objetivo para llevar a cabo la separación del apartado de la interfaz de usuario (View) de la parte lógica (Model). Esto lo hace con el objetivo de que el aspecto visual sea completamente independiente.  

**Referencia**: https://keepcoding.io/blog/que-es-el-patron-de-arquitectura-mvvm/  

**REDUX/FLUX**  
El patrón de diseño Flux es un patrón de arquitectura de software que se utiliza para construir aplicaciones web de una sola página (Single-Page Applications). Este patrón se enfoca en el manejo del flujo de datos a través de la aplicación, separando la lógica de negocio de la interfaz de usuario.
El patrón Flux consta de cuatro elementos principales:
Acciones (Actions): son objetos que describen algo que sucede en la aplicación, como la entrada del usuario o la respuesta del servidor.  
Dispatcher: es un objeto que recibe las acciones y las envía a los Stores correspondientes.  
Stores: son objetos que contienen el estado de la aplicación y la lógica de negocio.  
Vista (View): es la interfaz de usuario de la aplicación.  

**Referencia**: https://es.linkedin.com/pulse/qu%C3%A9-es-el-patr%C3%B3n-de-dise%C3%B1o-flux-y-c%C3%B3mo-funciona-jorge-arias-arg%C3%BCelles#:~:text=El%20patr%C3%B3n%20de%20dise%C3%B1o%20Flux%20es%20un%20patr%C3%B3n%20de%20arquitectura,de%20la%20interfaz%20de%20usuario.  

**HOC**  
El patrón de diseño Higher-Order Component (HOC) es un patrón avanzado en React que se utiliza para reutilizar la lógica de los componentes. Un HOC es una función que toma un componente y devuelve otro componente con funcionalidades adicionales o modificadas.  
**Referencia**: https://jfbarrios.com/patron-de-diseno-higher-order-component-hoc-en-react-y-javascript  

# Patrones de Diseño

# Patrones Creacionales  

**Factory Method**  
Es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.  

**Abstract Factory**  
Es un patrón de diseño creacional que nos permite producir familias de objetos relacionados sin especificar sus clases concretas.  

**Builder**  
Es un patrón de diseño creacional que nos permite construir objetos complejos paso a paso. El patrón nos permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.  

**Prototype**  
Es un patrón de diseño creacional que nos permite copiar objetos existentes sin que el código dependa de sus clases.  

**Singleton**  
Es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.  

# Patrones estructurales   

**Adapter**  
Es un patrón de diseño estructural que permite la colaboración entre objetos con interfaces incompatibles.  

**Bridge**  
Es un patrón de diseño estructural que te permite dividir una clase grande, o un grupo de clases estrechamente relacionadas, en dos jerarquías separadas (abstracción e implementación) que pueden desarrollarse independientemente la una de la otra.  

**Composite**  
Es un patrón de diseño estructural que te permite componer objetos en estructuras de árbol y trabajar con esas estructuras como si fueran objetos individuales.  

**Decorator**  
Es un patrón de diseño estructural que te permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades. 

**Facade**  
Es un patrón de diseño estructural que proporciona una interfaz simplificada a una biblioteca, un framework o cualquier otro grupo complejo de clases.  

**Flyweight**  
Es un patrón de diseño estructural que te permite mantener más objetos dentro de la cantidad disponible de RAM compartiendo las partes comunes del estado entre varios objetos en lugar de mantener toda la información en cada objeto.  

**Proxy**  
Es un patrón de diseño estructural que te permite proporcionar un sustituto o marcador de posición para otro objeto. Un proxy controla el acceso al objeto original, permitiéndote hacer algo antes o después de que la solicitud llegue al objeto original.  

# Patrones de comportamiento  

**Chain of Responsability**  
Es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo de una cadena de manejadores. Al recibir una solicitud, cada manejador decide si la procesa o si la pasa al siguiente manejador de la cadena.  

**Command**  
Es un patrón de diseño de comportamiento que convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud. Esta transformación te permite parametrizar los métodos con diferentes solicitudes, retrasar o poner en cola la ejecución de una solicitud y soportar operaciones que no se pueden realizar.  

**Iterator**  
Es un patrón de diseño de comportamiento que te permite recorrer elementos de una colección sin exponer su representación subyacente (lista, pila, árbol, etc.).  

**Mediator**  
Es un patrón de diseño de comportamiento que te permite reducir las dependencias caóticas entre objetos. El patrón restringe las comunicaciones directas entre los objetos, forzándolos a colaborar únicamente a través de un objeto mediador.  

**Memento**  
Es un patrón de diseño de comportamiento que te permite guardar y restaurar el estado previo de un objeto sin revelar los detalles de su implementación.  

**Observer**  
Es un patrón de diseño de comportamiento que te permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando.  

**State**  
Es un patrón de diseño de comportamiento que permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase.  

**Strategy**  
Es un patrón de diseño de comportamiento que te permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.  

**Template Method**  
Es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en la superclase pero permite que las subclases sobrescriban pasos del algoritmo sin cambiar su estructura.  

**Visitor**  
Es un patrón de diseño de comportamiento que te permite separar algoritmos de los objetos sobre los que operan.

