# Pensamiento Computacional

Bitacora del ramo pensamiento computacional.

# Solemne II: Codigo Interactivo

## Nombre del proyecto: DISPERSIÓN

**Autor:** Matías Padilla

## Descripción objetiva:

Con los referentes en mente, ideé una manera para llegar al resultado que necesitaba, para esto debía hayar
la forma para posicionar correctamente los círculos en todo el canvas, para esto, utilicé una herramienta
vista en clases la cual era el nested loop for(let), esto me permite hacer repeticiones de elementos las veces que
considere necesaria.

![explicacion1](registro/explicacion3.png)

Con esta secuencia utilizando las variables que asigné para columnas y filas en el loop hice que se repartieran los circulos
de manera ordenada alrededor de todo el canvas. También hice que las elipses estuvieran en modo CENTER, para que así cada una
se posicionara automaticamente centradas y no tener que estar asignando el eje X e Y.

![ellipse](registro/explicacion2.png)

En cuanto a inputs, hice uso de varios, entre estos el uso del mouse, el cual cumple la función de ir deformando las grillas,
haciendo que los elementos ubicados dentro de esta se achiquen (output), también están los inputs de uso de teclas, tales como
las teclas 'WASD', estas cumplen principalmente la función de cambiar los colores de los círculos, por ejemplo; la tecla **'A'**
cambia los colores del relleno de los círculos y la tecla **'D'** cambia el color del trazo de estos. En cuanto a la funcionalidad
de las teclas W y S, la primera se encarga de "desactivar" los colores del relleno, y la segunda cumple lo mismo pero con los trazos.

![explicación3](registro/explicacion4.png)

Esto funciona a través de variables, donde r,g y b son los encargados de cambiar especificamente los colores de relleno de los círculos,
y los R,G y B se encargan del color de los trazos de estos.

![explicacion4](registro/explicacion1.png)

**Algunos procesos que no salieron como quería pero dejé registro para documentar:**

![background](registro/intento_de_cambio_de_background.png)

En esta imagen se puede ver como intenté hacer variaciones en el color del background, pero simplemente no resultó como quería, así que
lo descarté.

![colores](registro/error_desactivar_colores)

Estas fueron las primeras pruebas de inputs para poder desactivar los colores de los rellenos y trazos, por lo que se puede ver intenté asignarle
colores rgb a un fondo el cual funciona con blancos y negros. Como solución opté por cambiar a color blanco el relleno y trazo de los círculos en vez
de hacer un cambio en el background.

## Descripción conceptual:

## Referentes

Para la solemne II de pensamiento computacional usé como referente el diseño Op art y Cinetic Art.

**Algunos de los referentes en los que me inspiré para realizar el trabajo fueron los siguientes:**

David Mrugala (diseñador y artista)

![referente1](registro/referente1.jpg)

Cristina Hauk (artista)

![referente2](registro/referente2.jpg)

Seth Nickerson (diseñador)

![referente3](registro/referente3.jpg)

El principio de diseño que se explora en este caso es el del uso de las figuras primales para generar movimiento sinestésico, esto siendo visto
y estudiado desde los inicios de la Bauhaus por academicos como Wassily Kandinsky, Paul Klee y Gertrud Grunow.


