import initDraggableComponents from './components/app-container/init-draggable-components';
import CssStyleSheet from './components/css-stylesheet/css-stylesheet';
import InitAppContainer from './components/app-container/init-app-container';
import CreateNewHTMLComponentPublisher from './components/common/publishers/CreateNewHTMLComponentPublisher';

initDraggableComponents();

const createNewInstancePublisher = new CreateNewHTMLComponentPublisher();
const appContainer = new InitAppContainer(createNewInstancePublisher);
createNewInstancePublisher.attach(appContainer);

CssStyleSheet.init();

// TODO: probar exportar css y html y ver como queda la pagina en la realidad */
// TODO: hacer analisis de que deberiamos exportar realmente del html */

// TODO: falta la accion de duplicar un componente, es decir, de un componente existente, duplicar la config...
// si, es necesario, porque es mucho mas facil que asignarle la clase de otro componente...
// ver como duplicamos las clases... si le asignamos las clases del otro componente???, como hacemos con su clase???
// si duplicamos, no creamos clase propia, solo asignamos las clases del otro componente...

// Agregar imagenes al background...

// TODO: falta todo lo que es position... Absolute, relative, etc... No recuerdo bien como es eso...
// incluso, el z index, que podria estar en el mismo componente.

// TODO: ver forma de remover el borde original del input. No es la misma propiedad que el border...
// TODO: el borderbox del input viene como advanced... Ver si tenemos que hacerle algo

// TODO: cuando creo un nombre futuro, y justo creo un elemento con ese nombre futuro, tira error...
// por eso yo le pasaba el iterator... ver como solucionar...

// TODO: con el id habria que reemplazar todos los caracteres especiales por guiones o algo asi...???

// TODO: falta propiedad scrollable en div

// TODO: cualquier elemento debe poder modificar el display settings, solo que algunos no tendran el flex o grid

// TODO: en el Select Item no se encuentra el app-container.
// Es que para que esto funcione, el app-container deberia ser creado como un new Container();
// De hecho, cuando creo un solo componente, no lo puedo seleccionar por el selector...
// Ver si en vez de usar change, usamos 'select'

// TODO: falta un boton de remove initial properties, asi sacamos los bordes y eso a un div, por ejemplo...

/*
TODO: faltan los siguientes componentes:
    - falta agregar el colgroup y el caption
    - ver si permitimos que los componentes internos sean draggables, o no...

<table>
  <colgroup span="4" class="columns"></colgroup>
  <tr>
    <th>Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>

<table>
  <caption>Awesome caption</caption>
  <tr>
    <td>Awesome data</td>
  </tr>
</table>

    - hyperlink o anchor element: debemos agregar el hiperlink y algunas otras cosas

    - textarea: debemos poder modificar el relleno, pero en vez de con un input,
    tambien debe poder ser seleccionable si la queres estirable o no en el dom
*/

// TODO: el background-color tambien podria ser en degrade, pero podemos dejar que eso lo hagan con la rawclass

// TODO: si yo a una clase le agrego, por ejemplo .table0>td,
// nunca me trae esa clase como parte de la table0 en el Raw Class Editor
// ni en el Classes Management Selector, pero esta en el CssStyleSheet

// TODO: cuando voy pasando por los contenedores, no le saca el hover al padre

// TODO: cuando selecciono un contenedor, me muestra que le ppuedo agregar el hover que tiene a si mismo...
// y cuando agrega la clase al classList del comp HTML, la agrega como contenedor0:hover





// Para una V2 (por la complejidad):

// TODO: el metodo init deberia buscar el css del localstorage, deberiamos hacer lo mismo con el HTML
// Deberiamos ver como almacenar y deshacer cambios....

// TODO: insertar rules para el media query : https://davidwalsh.name/add-rules-stylesheets
// https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule

