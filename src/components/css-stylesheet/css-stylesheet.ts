export default class CssStyleSheet {
    private static styleSheet = document.styleSheets[1];

    /*
    CSSStyleSheetDocumentation:
    https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/addRule
    */

    static init() {
        CssStyleSheet.styleSheet.insertRule(`.button-component {
            margin: 5px;
        }`);

        CssStyleSheet.styleSheet.insertRule(`.container-component {
            margin: 5px;
            padding: 5px;
            min-height: 20px;
        }`);

        CssStyleSheet.styleSheet.insertRule(`.input-text-component {
            margin: 5px;
        }`);
    }

    static print() {
        let cssFileOutput = '';

        Object.keys(CssStyleSheet.styleSheet.cssRules).forEach(key => {
            cssFileOutput += `${CssStyleSheet.styleSheet.cssRules[parseInt(key)].cssText}\n\n`
        });

        console.log(cssFileOutput);
    }

    static getRule(id: string) {
        const index = this.getRuleIndex(id);
        return CssStyleSheet.styleSheet.cssRules[index];
    }

    static getRuleIndex(id: string): number {
        return parseInt(Object.keys(CssStyleSheet.styleSheet.cssRules).find(key => {
            return CssStyleSheet.styleSheet.cssRules[parseInt(key)]['selectorText'] === `.${id}`
        }));
    }

    static getRuleStyles(id: string): CSSStyleDeclaration {
        const index = this.getRuleIndex(id);
        return CssStyleSheet.styleSheet.cssRules[index]['style'];
    }

    static removeRule(id: string): void {
        const index = this.getRuleIndex(id);
        CssStyleSheet.styleSheet.deleteRule(index);
    }

    static removeRuleByIndex(index: number): void {
        CssStyleSheet.styleSheet.deleteRule(index);
    }

    static insertRule(rule: string) {
        CssStyleSheet.styleSheet.insertRule(rule);
    }
}
