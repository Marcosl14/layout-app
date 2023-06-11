import CssStyleSheet from '../../css-stylesheet/css-stylesheet';
import prepareHTMLFileForOutput from './prepare-html-file';

export default function validateAndSave(completeProyectName: string, projects?: string[]) {
    if (projects && projects.includes(completeProyectName)) {
        alert('Already exists a proyect with that name');
        return { exists: true };
    }

    localStorage.setItem(completeProyectName, JSON.stringify({
        html: prepareHTMLFileForOutput(),
        css: CssStyleSheet.getStyleSheetAsText()
    }))

    return { exists: false }
}
