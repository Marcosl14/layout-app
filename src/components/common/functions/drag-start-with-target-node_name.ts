export default function dragStartWithTargetNodeName(event: DragEvent) {
    event.dataTransfer.setData('text/plain', (event.target as HTMLElement).nodeName);
}
