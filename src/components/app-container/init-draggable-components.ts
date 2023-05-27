import dragStartWithTargetNodeName from '../common/functions/drag-start-with-target-node_name';

export default function initDraggableComponents() {
    const domElements = document.querySelectorAll('.dom-element');

    domElements.forEach((domElement) => {
        domElement.addEventListener('dragstart', dragStartWithTargetNodeName);
    });
}
