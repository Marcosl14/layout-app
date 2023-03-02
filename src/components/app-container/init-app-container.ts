import componentsIndex from '../html-components/componentsIndex';

export default function initAppContainer(){
    const appContainer = document.querySelector('#app-container');

    appContainer.addEventListener('dragenter', dragEnter);
    appContainer.addEventListener('dragover', dragOver);
    appContainer.addEventListener('dragleave', dragLeave);
    appContainer.addEventListener('drop', drop);
}

function dragEnter(event: any) {
    event.preventDefault();
    this.classList.add('drag-enter');
    this.classList.remove('drag-leave');
}

function dragOver(event: any) {
    event.preventDefault();
    this.classList.add('drag-enter');
    this.classList.remove('drag-leave');
  }

function dragLeave() {
    this.classList.add('drag-leave');
    this.classList.remove('drag-enter');
}

function drop(event: any) {
    this.classList.add('drag-leave');
    this.classList.remove('drag-enter');

    if (event.target.nodeName !== 'DIV') {
        return;
    }

    const tipoDeElemento = event.dataTransfer.getData('text/plain');

    const newDomElement: HTMLElement = componentsIndex(tipoDeElemento)();

    const elementExists = newDomElement ? false : true;

    if (elementExists) {
        const draggable = document.getElementById(tipoDeElemento);
        event.target.appendChild(draggable);
        return;
    }

    event.target.appendChild(newDomElement);
}
