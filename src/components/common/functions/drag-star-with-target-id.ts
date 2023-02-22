export default function dragStartWithTargetId(e: any) {
    e.dataTransfer.setData('text/plain', e.target.id);
}