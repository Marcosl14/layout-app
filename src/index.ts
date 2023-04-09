import initDraggableComponents from './components/components-container/init-draggable-components';
// import CssStyleSheet from './components/css-stylesheet/css-stylesheet';
import InitAppContainer from './components/app-container/init-app-container';

initDraggableComponents();
new InitAppContainer();
// CssStyleSheet.init();
// TODO: el metodo init deberia buscar el css del localstorage, deberiamos hacer lo mismo con el HTML
// CssStyleSheet.print();


// TODO: debemos colocar un selector para buscar un elemento por ID, y abrir el panel lateral... No solo con click...
// porque si borras las clases, perdes visibilidad del elemento...
// debemos llamar al metodo openElementConfigs hacerlo publico....
// ver como entrar a traves del componentsIndex.js, y quitar el domElement,
// para tener la instancia pura del elemento y poder trabajar sobre ella...

// Deberiamos ver como almacenar y deshacer cambios....

// TODO: acomodar estructuras con prettier y tslinter. Saltar linea cuando muy larga.

// TODO: falta el color del texto, color tipografia y la tipografia...

// TODO: hay que meterle drag enter al app-container-fixed para que le saque el background color al app-container...

// TODO: insertar rules para el media query : https://davidwalsh.name/add-rules-stylesheets
// https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
