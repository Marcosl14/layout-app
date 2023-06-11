import initDraggableComponents from './components/app-container/init-draggable-components';
import CssStyleSheet from './components/css-stylesheet/css-stylesheet';
import InitAppContainer from './components/app-container/init-app-container';
import CreateNewHTMLComponentPublisher from './components/common/publishers/CreateNewHTMLComponentPublisher';

initDraggableComponents();

const createNewInstancePublisher = new CreateNewHTMLComponentPublisher();
const appContainer = new InitAppContainer(createNewInstancePublisher);
createNewInstancePublisher.attach(appContainer);

CssStyleSheet.init();

// TODO: leer HTML y CSS del local storage (deberia ser automatico con cada accion).
// Cada vez que hagamos click sobre un elemento para buildear las configs, ahi guardamos.

// TODO: el z-index tambien puede ser auto, habria que ver de agregar un checkbox

// TODO: poder guardar el proyecto con un cierto nombre.
// TODO: hacer un selector con los proyectos guardados.
// TODO: debemos guardar en el localstorage la key con el nombre del proyecto + '-layout-app'
// TODO: debemos guardar el nombre del proyecto en el localstorage bajo la key 'proyects-layout-app'
// -> que sera un array (JSON.stringify)

// TODO: agregar header, aside, nav, footer, etc...

// TODO: agregar select... al cual le tenemos que poder agregar options de manera sencilla

// TODO: deployar pagina en otro servidor web, no en github pages
// TODO: incorporar google metrics o algo para medir los usuarios que utilizan la pagina

// TODO: dar estilos facheritos a las tablas, por ejemplo, algo especifico para el header,
// y que las filas tengan diferentes colores... que el footer tenga otro color distinto...

// TODO: Agregar imagenes al background...
// TODO: el background-color tambien podria ser en degrade, pero podemos dejar que eso lo hagan con la rawclass

// TODO: ver forma de remover el borde original del input. No es la misma propiedad que el border...
// TODO: el borderbox del input viene como advanced... Ver si tenemos que hacerle algo

// TODO: cuando creo un nombre futuro, y justo creo un elemento con ese nombre futuro, tira error...
// por eso yo le pasaba el iterator... ver como solucionar...

// TODO: con el id habria que reemplazar todos los caracteres especiales por guiones o algo asi...???

// TODO: falta propiedad scrollable en div.

// TODO: cualquier elemento debe poder modificar el display settings, solo que algunos no tendran el flex o grid.

// TODO: en el Select Item no se encuentra el app-container.
// Es que para que esto funcione, el app-container deberia ser creado como un new Container();
// De hecho, cuando creo un solo componente, no lo puedo seleccionar por el selector...
// Ver si en vez de usar change, usamos 'select'

// TODO: falta un boton de remove initial properties, asi sacamos los bordes y eso a un div, por ejemplo...

/*
TODO: faltan los siguientes componentes:
    - falta agregar el colgroup y el caption
    - ver si permitimos que los componentes internos sean draggables, o no...

TODO: para el caso de tablas, el DisplayTypesEnum deberia agregar mas elementos

TODO: quizas para las tablas habria que setear cuantas filas queremos que tenga el body, si queremos footer, etc.
ver como se hariamos para que un td o th pueda compartir dos espacios.

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

// TODO: probar exportar css y html y ver como queda la pagina en la realidad */
// TODO: hacer analisis de que deberiamos exportar realmente del html */

// TODO: cuando voy pasando por los contenedores, no le saca el hover a los padre. Esto parece bastante complicado
// de solucionar. Hay que trabajar con el mouse entre y el mouse leave, lo cual habiamos visto que traia algunos
// problemas...
/*
  const parent = document.getElementById('parent');
  const child = parent.querySelector('.child');

  child.addEventListener('mouseenter', () => {
    child.classList.add('hovered');
  });

  child.addEventListener('mouseleave', () => {
    child.classList.remove('hovered');
});
*/



// Para una v1.5:
// TODO: hacer mas bello el contenedor de todas las fuentes que tiene el elemento





// Para una V2 (por la complejidad):

// TODO: el metodo init deberia buscar el css del localstorage, deberiamos hacer lo mismo con el HTML
// Deberiamos ver como almacenar y deshacer cambios....

// TODO: insertar rules para el media query : https://davidwalsh.name/add-rules-stylesheets
// https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule

