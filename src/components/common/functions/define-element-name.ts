export default function defineElementName(initialName: string, instances: HTMLElement[]): string {
    const nameAlreadyExists = instances.find((instance) => instance['name'] === initialName) ? true : false;

    if (nameAlreadyExists) {
        alert('Element name already exists \nThe name has not been updated');
        throw new Error('Element name already exists');
    }

    return initialName;
}
