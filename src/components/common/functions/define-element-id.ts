export default function defineElementId(initialName: string, instances: HTMLElement[]): string {
    const nameAlreadyExists = instances.find((instance) => instance.id === initialName) ? true : false;

    if (nameAlreadyExists) {
        alert('Id name already exists \nThe name has not been updated');
        throw new Error('Id name already exists');
    }

    return initialName;
}
