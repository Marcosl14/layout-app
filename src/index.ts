import initDraggableComponents from './components/components-container/init-draggable-components';
import initAppContainer from './components/app-container/init-app-container';
// import initCssStyleSheet from './components/main-container/init-css-style_sheet';

initDraggableComponents();
initAppContainer();
// initCssStyleSheet();



// import appContainerStyleSheet from './components/common/functions/app-container-style_sheet';

// let cssFileOutput = '';

// Object.keys(appContainerStyleSheet.rules).forEach(key => {
//     cssFileOutput += `${appContainerStyleSheet.cssRules[parseInt(key)].cssText}\n\n`
// });

// console.log(cssFileOutput);
