import initDraggableComponents from './components/components-container/init-draggable-components';
import CssStyleSheet from './components/css-stylesheet/css-stylesheet';
import InitAppContainer from './components/app-container/init-app-container';

initDraggableComponents();
new InitAppContainer();
CssStyleSheet.init();

// TODO: el metodo init deberia buscar el css del localstorage, deberiamos hacer lo mismo con el HTML
// Deberiamos ver como almacenar y deshacer cambios....

// TODO: acomodar estructuras con prettier y tslinter. Saltar linea cuando muy larga.

// TODO: hay que meterle drag enter al app-container-fixed para que le saque el background color al app-container...
// o ver que pasa con el drag leave

// TODO: insertar rules para el media query : https://davidwalsh.name/add-rules-stylesheets
// https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule

// TODO: probar exportar css y html y ver como queda la pagina en la realidad */
// TODO: hacer analisis de que deberiamos exportar realmente del html */

// TODO: aqui falta la accion de duplicar un componente, es decir, de un componente existente, duplicar la config...
// si, es necesario, porque es mucho mas facil que asignarle la clase de otro componente...
// ver como duplicamos las clases... si le asignamos las clases del otro componente???, como hacemos con su clase???
// si duplicamos, no creamos clase propia, solo asignamos las clases del otro componente...

// Agregar el elemento img y a su vez, agregar imagenes al background...

// TODO: falta todo lo que es position... Absolute, relative, etc... No recuerdo bien como es eso...
// incluso, el z index, que podria estar en el mismo componente.


// TODO: ver forma de remover el borde original del input. No es la misma propiedad que el border...
// TODO: el borderbox del input viene como advanced... Ver si tenemos que hacerle algo

// TODO: cuando creo un nombre futuro, y justo creo un elemento con ese nombre futuro, tira error...
// por eso yo le pasaba el iterator... ver como solucionar...

// TODO: con el id habria que reemplazar todos los caracteres especiales por guiones o algo asi...

// TODO: falta propiedad scrollable en div

// TODO: cualquier elemento debe poder modificar el display settings

// TODO: falta la propiedad background-image en el background-color

// eslint-disable-next-line max-len
// TODO: en el Select Item no se encuentra el app-container. Es que para que esto funcione, el app-container deberia ser creado como un new Container();

// TODO: falta un boton de delete initial properties, asi sacamos los bordes y eso a un div, por ejemplo...