export default function defineElementId(initialName: string, instances: HTMLElement[], iterator?: number): ReturnDefinition {
    let idName = initialName + (iterator >= 0 ? iterator : '');
    let increaser = 0;

    while (true) {
        const nameAlreadyExists = instances.find((instance) => instance.id === idName) ? true : false;

        if (nameAlreadyExists) {
            idName = initialName + increaser++;
            alert(`Name already exists \n\t Name updated automatically to: ${idName}`)
        } else {
            iterator++;
            break;
        }
    }

    return { idName, iterator };
}

interface ReturnDefinition {
    idName: string,
    iterator: number
}
