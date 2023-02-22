import componentsIndex from './components/html-components/componentsIndex';
import dragStartWithTargetNodeName from './components/common/functions/drag-start-with-target-node_name';

import Container from './components/html-components/Container';


/* draggable element */
const domElements = document.querySelectorAll('.dom-element');

domElements.forEach((domElement) => {
    domElement.addEventListener('dragstart', dragStartWithTargetNodeName);
});

// prueba: agregar elementos mediante los objetos creados
// const componentsContainer = document.querySelector('.components-container')
// const newContainer = new Container().domElement;
// newContainer.addEventListener('drop', drop);
// newContainer.addEventListener('dragstart', dragStart);
// newContainer.draggable = true;
// componentsContainer.appendChild(newContainer);
// prueba

/* Target container */
const appContainer = document.querySelector('.app-container');

appContainer.addEventListener('dragenter', dragEnter);
appContainer.addEventListener('dragover', dragOver);
appContainer.addEventListener('dragleave', dragLeave);
appContainer.addEventListener('drop', drop);

function dragEnter(e: any) {
    e.preventDefault();
    this.classList.add('drag-enter');
    this.classList.remove('drag-leave');
}

function dragOver(e: any) {
  e.preventDefault();
  this.classList.add('drag-enter');
  this.classList.remove('drag-leave');
}

function dragLeave(e: any) {
    this.classList.add('drag-leave');
    this.classList.remove('drag-enter');
}

function drop(e: any) {
    this.classList.add('drag-leave');
    this.classList.remove('drag-enter');

    if (e.target.nodeName === 'INPUT') {
        return;
    }

    const tipoDeElemento = e.dataTransfer.getData('text/plain');

    const newDomElement = componentsIndex(tipoDeElemento)();

    let elementExists = newDomElement ? false : true;

    if (elementExists) {
        const draggable = document.getElementById(tipoDeElemento);
        e.target.appendChild(draggable);
        return;
    }

    e.target.appendChild(newDomElement);
}

// const cssStyleSheet = document.styleSheets;

// cssStyleSheet[1].insertRule(`.components-container {
//     border: dashed 1px black;
//     width: 400px;
//     padding: 10px;
//   }`);

// cssStyleSheet[1].insertRule(`.actions-container {
//     border: dashed 1px black;
//     width: 400px;
//   }`);

// cssStyleSheet[1].insertRule(`.dom-element {
//     box-sizing: border-box;
//   }`);

// cssStyleSheet[1].insertRule(`.dom-element:not(:last-child) {
//     margin-bottom: 5px;
//   }`);

// cssStyleSheet[1].insertRule(`.dom-element-input {
//   width: 100%;
// }`);

// cssStyleSheet[1].insertRule(`.dom-element-button {
//     width: 100%;
//   }`);

// cssStyleSheet[1].insertRule(`.drag-enter {
//     border: dashed 1px red
//   }`);

// let cssFileOutput = '';

// Object.keys(cssStyleSheet[1].rules).forEach(key => {
//     cssFileOutput += `${cssStyleSheet[1].rules[parseInt(key)].cssText}\n\n`
// });

// console.log(cssFileOutput);
