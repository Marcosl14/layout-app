import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import prepareHTMLFileForOutput from './prepare-html-file';

export default function validateAndSave(completeProjectName: string, projects?: string[]) {
    if (projects && projects.includes(completeProjectName.trim())) {
        alert('Already exists a project with that name');
        return { exists: true };
    }

    const appContainerHeightInput: HTMLInputElement = document.querySelector('#update-height');
    const appContainerWidthInput: HTMLInputElement = document.querySelector('#update-width');

    localStorage.setItem(completeProjectName, JSON.stringify({
        html: prepareHTMLFileForOutput(),
        css: CssStyleSheet.getStyleSheetAsText(),
        body: {
            height: appContainerHeightInput.value,
            width: appContainerWidthInput.value,
        }
    }))

    return { exists: false }
}
