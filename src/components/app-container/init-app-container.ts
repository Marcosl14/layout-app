import componentsIndex from '../html-components/componentsIndex';

export default function initAppContainer(){
    const appContainer = document.querySelector('#app-container');

    appContainer.addEventListener('dragenter', dragEnter);
    appContainer.addEventListener('dragover', dragOver);
    appContainer.addEventListener('dragleave', dragLeave);
    appContainer.addEventListener('drop', drop);
}

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

function dragLeave() {
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

    const elementExists = newDomElement ? false : true;

    if (elementExists) {
        const draggable = document.getElementById(tipoDeElemento);
        e.target.appendChild(draggable);
        return;
    }

    e.target.appendChild(newDomElement);
}
