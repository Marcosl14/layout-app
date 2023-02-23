import appContainerStyleSheet from "../common/functions/app-container-style_sheet";

export default function initCssStyleSheet() {
    appContainerStyleSheet.insertRule(`.button-component {
        margin: 5px;
    }`);

    appContainerStyleSheet.insertRule(`.container-component {
        margin: 5px;
        padding: 5px;
        min-height: 20px;
    }`);

    appContainerStyleSheet.insertRule(`.input-text-component {
        margin: 5px;
    }`);
}