export default function dragStartWithTargetNodeName(e: any) {
    e.dataTransfer.setData('text/plain', e.target.nodeName);
}
