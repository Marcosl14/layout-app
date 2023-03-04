import initDraggableComponents from './components/components-container/init-draggable-components';
// import CssStyleSheet from './components/css-stylesheet/css-stylesheet';
import InitAppContainer from './components/app-container/init-app-container';

initDraggableComponents();
new InitAppContainer();
// CssStyleSheet.init(); // TODO: el metodo init debe buscar el css del localstorage, deberiamos crear el mismo elemento, pero HTML
// CssStyleSheet.print();

// Deberiamos ver como almacenar y deshacer cambios....
