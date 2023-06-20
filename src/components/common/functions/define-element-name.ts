export default function defineElementName(
    elementNameParams: ElementPrefixIteratorInterface | ElementNameInterface
): {name: string, iterator?: number} {
    let name;
    const instances: HTMLElement[] = elementNameParams.instances;

    if( 'name' in elementNameParams ) {
        name = elementNameParams.name;

        try {
            validateName(name, instances);
            return {name};
        } catch (err) {
            alert('Element name already exists \nThe name has not been updated');
            throw err;
        }
    } else {
        let iterator = elementNameParams.iterator++;

        while(true) {
            try {
                name = `${elementNameParams.prefix}${iterator}`;
                validateName(name, instances);
                iterator++;
                return {name, iterator};
            } catch (err) {
                iterator++;
            }
        }
    }
}

function validateName(name: string, instances: HTMLElement[]) {
    const nameAlreadyExists = instances.find((instance) => instance['name'] === name) ? true : false;

    const idAlreadyExists = instances.find((instance) => instance['id'] === name) ? true : false;

    if (nameAlreadyExists || idAlreadyExists) {
        throw new Error('Element name already exists');
    }
}

interface ElementPrefixIteratorInterface {
    instances: HTMLElement[],
    prefix: string,
    iterator: number,
}

interface ElementNameInterface {
    instances: HTMLElement[],
    name: string,
}
