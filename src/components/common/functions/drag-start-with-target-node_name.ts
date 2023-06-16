export default function dragStartWithTargetNodeName(event: DragEvent) {
    const target = event.target as HTMLElement;

    if( target.children[0]?.nodeName === 'SELECT' ){
        event.dataTransfer.setData('text/plain', target.children[0].nodeName);
    } else {
        event.dataTransfer.setData('text/plain', target.nodeName);
    }
}
