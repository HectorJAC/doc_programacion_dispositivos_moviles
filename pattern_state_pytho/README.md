# Patron de Diseño STATE en Python  

**Descripcion del funcionamiento del codigo**  
El funcionamiento del codigo es el siguiente:

1. El estado esta en StateA.  
2. El StateA maneja el request1.  
3. El StateA espera que a cambie el estado del context.  
4. El estado cambia de StateA a StateB.  
5. El estado esta en StateB.  
6. El StateA maneja el request2.  
7. El StateB espera a que cambie el estado del context.  
8. El stado cambia de StateB a StateA.  
9. El estado esta en StateA.  

Y en ese orden se va cambiando el estado de la clase Context, pasando de un estado a otro y en cada estado pasa algo diferente dependiendo el estado en el que se encuentre.  

**Comparacion del patron State con Redux y React Context**  

Mientras que el State se enfoca en gestionar el estado interno de un objeto de forma individual, tanto Redux como React Context se enfocan en gestionar el estado de toda la app, pudiendo pasar propiedades entre componentes.
