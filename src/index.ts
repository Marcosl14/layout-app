import initDraggableComponents from './components/app-container/init-draggable-components';
import CssStyleSheet from './components/css-stylesheet/css-stylesheet';
import InitAppContainer from './components/app-container/init-app-container';
import CreateNewHTMLComponentPublisher from './components/common/publishers/CreateNewHTMLComponentPublisher';

initDraggableComponents();

const createNewInstancePublisher = new CreateNewHTMLComponentPublisher();
const appContainer = new InitAppContainer(createNewInstancePublisher);
createNewInstancePublisher.attach(appContainer);

CssStyleSheet.init();

// TODO: si la clase solo la utiliza ese unico componente,
// quizas el nombre de la clase css deberia ir con # y no con punto...

// TODO: deployar pagina en otro servidor web, no en github pages
// TODO: incorporar google metrics o algo para medir los usuarios que utilizan la pagina
// TODO: hacer repo privado

// TODO: dar estilos facheritos a las tablas, por ejemplo, algo especifico para el header,
// y que las filas tengan diferentes colores... que el footer tenga otro color distinto...

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
TODO: Ver como se hariamos para que un td o th pueda compartir dos espacios.

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

// TODO: Agregar imagenes al background...
// TODO: el background-color tambien podria ser en degrade, pero podemos dejar que eso lo hagan con la rawclass
// https://developer.mozilla.org/en-US/docs/Web/CSS/background

// TODO: hacer mas bello el contenedor de todas las fuentes que tiene el elemento
// TODO: el select es solo draggable si esta contenido en un div... No hay otra manera???.

// TODO: estoy pensando que quizas estaria bueno tener un selector con todas las prop que tiene ese componente
// y que cuando selecciones, ahi si se habra el contenedor con dicha prop...






// Para una V2 (por la complejidad):

// TODO: el metodo init deberia buscar el css del localstorage, deberiamos hacer lo mismo con el HTML
// Deberiamos ver como almacenar y deshacer cambios....

// TODO: insertar rules para el media query : https://davidwalsh.name/add-rules-stylesheets
// https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule






