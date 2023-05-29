import RawHTMLConponent from '../html-components/RawHTMLComponent';

export default class CssStyleSheet {
    private static styleSheet = document.styleSheets[1];

    /*
    CSSStyleSheetDocumentation:
    https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/addRule
    */

    static init() {
        const printCssFileButton: HTMLButtonElement = document.querySelector('#print-css-file');
        this.print = this.print.bind(this);
        printCssFileButton.addEventListener('click', this.print);
    }

    static print() {
        let cssFileOutput = '';

        Object.keys(this.styleSheet.cssRules).forEach(key => {
            cssFileOutput += `${this.styleSheet.cssRules[parseInt(key)].cssText}\n\n`
        });

        console.log(cssFileOutput);

        // TODO: ver si hay que eliminar algo del app-container... algun atributo...
        // antes de exportar el css
    }

    static getRule(id: string): CSSRule {
        const index = this.getRuleIndex(id);
        return this.styleSheet.cssRules[index];
    }

    static getRuleIndex(id: string): number {
        const index = parseInt(Object.keys(this.styleSheet.cssRules).find(key => {
            const className = this.styleSheet.cssRules[parseInt(key)]['selectorText']
            return className === `.${id}`
        }))

        if(isNaN(index)){
            return -1;
        }

        return index;
    }

    static getRules(id: string): CSSRule[] {
        const indexes = this.getRulesIndexes(id);
        return indexes.map((index) => this.styleSheet.cssRules[index]);
    }

    static getAllRules(): CSSRule[] {
        return Object.values(this.styleSheet.cssRules);
    }

    static getRulesIndexes(id: string): number[] {
        return Object.keys(this.styleSheet.cssRules)
            .filter(key => {
                const className = this.styleSheet.cssRules[parseInt(key)]['selectorText']
                return className === `.${id}` || className.includes(`.${id}:`)
            })
            .map((index) => parseInt(index));
    }

    static getRuleStyles(id: string): CSSStyleDeclaration {
        const index = this.getRuleIndex(id);
        const styles = this.styleSheet.cssRules[index];
        return styles ? styles['style'] : {};
    }

    static removeRule(id: string): void {
        const index = this.getRuleIndex(id);
        let existsRuleForAnotherComponent = false;

        RawHTMLConponent.instances.forEach((instance) => {
            if(instance.classList.contains(id)) {
                existsRuleForAnotherComponent = true;
            }
        })

        if(!existsRuleForAnotherComponent) {
            this.styleSheet.deleteRule(index);
        }
    }

    static removeRuleByIndex(index: number): void {
        this.styleSheet.deleteRule(index);
    }

    static insertRule(rule: string) {
        this.styleSheet.insertRule(rule);
    }

    static changeRuleName(currentRule: string, newRuleName: string) {
        const currentRuleIndex = this.getRuleIndex(currentRule);
        const newRule = this.styleSheet.cssRules[currentRuleIndex].cssText.replace(currentRule, newRuleName);
        this.removeRuleByIndex(currentRuleIndex);
        this.insertRule(newRule);
    }

    static duplicateRule(ruleToDuplicate: string, newName: string) {
        const ruleToDuplicateIndex = this.getRuleIndex(ruleToDuplicate);
        const newRule =
            this.styleSheet.cssRules[ruleToDuplicateIndex].cssText.replace(ruleToDuplicate, newName);
        this.insertRule(newRule);
    }
}
