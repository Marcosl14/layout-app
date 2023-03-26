export default function dragStartWithTargetNodeName(e: DragEvent) {
    e.dataTransfer.setData('text/plain', (e.target as HTMLElement).nodeName);
}
