export default function prepareHTMLFileForOutput(): string {
    const mainContainer = document.querySelector('#app-container').innerHTML;
    const removeDraggableRegEx = new RegExp(' draggable="true"', 'g');
    mainContainer.replace(removeDraggableRegEx, '');

    // TODO: ver si deberia ir desplegando el arbol de elementos HTML e ir armando el html aqui.
    // TODO: ver si es necesario borrar el style y lo que haya dentro....
    // TODO: eliminar el draggable

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body id="app-container" class="body">
        ${mainContainer}
    </body>
    </html>`
}
