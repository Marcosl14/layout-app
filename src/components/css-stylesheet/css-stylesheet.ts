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
        console.log(this.getStyleSheetAsText());
    }

    static getStyleSheetAsText(): string {
        // TODO: ver si hay que eliminar algo del app-container... algun atributo...
        // antes de exportar el css

        let cssFileOutput = '';

        Object.keys(this.styleSheet.cssRules).forEach(key => {
            cssFileOutput += `${this.styleSheet.cssRules[parseInt(key)].cssText}\n\n`
        });

        return cssFileOutput;
    }

    static getRule(id: string): CSSRule {
        const index = this.getRuleIndex(id);
        return this.styleSheet.cssRules[index];
    }

    static getRuleIndex(id: string): number {
        const singIndex = id.indexOf('>')

        if(singIndex !== -1 && id[singIndex-1] !== ' ' && id[singIndex+1] !== ' '){
            id = id.split('>').join(' > ');
        }

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
                // TODO: aca hay que agregar decordores css todavia, como el > o el :, o ver si existen otros
                // esto es para la carga de la funcion. Para la creacion de la misma, trabajar sobre la class management
                return className === `.${id}` || className.includes(`.${id}:`) || className.includes(`.${id} >`)
            })
            .map((index) => parseInt(index));
    }

    static getRuleStyles(id: string): CSSStyleDeclaration | object | object {
        try {
            const index = this.getRuleIndex(id);
            const styles = this.styleSheet.cssRules[index];
            return styles ? styles['style'] : {};
        } catch(err) {
            return {};
        }
    }

    static removeRule(id: string): void {
        const index = this.getRuleIndex(id);

        let existsRuleForAnotherComponent = false;

        RawHTMLConponent.instances.forEach((instance) => {
            if(instance.classList.contains(id)) {
                existsRuleForAnotherComponent = true;
            }
        });

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

    static getRuleAttributes(id: string): {key: string, val: string}[] {
        const value = this.getRule(id).cssText;

        let classValueWithoutName = value.split('{')[1];
        classValueWithoutName = classValueWithoutName.split('}')[0];

        const modifiedValues = classValueWithoutName.split(';').map((val) => val.trim());

        return modifiedValues
            .map((att) => {
                const [key, val] = att.split(':');
                return {key, val};
            })
            .filter((att) => att.key !== '' && att.key !== undefined);
    }

    static editRuleAtributes(id: string, newRuleValues: {key: string, val: string}[]) {
        const previousStyles = this.getRuleAttributes(id);
        const ruleStyles = this.getRuleStyles(id);

        newRuleValues.forEach((att) => {
            ruleStyles[att.key] = att.val;

            if(ruleStyles[att.key] === '' || ruleStyles[att.key] === undefined) {
                alert(`The style ${att.key} could not be set. Wrong expression`);
            }
        });

        previousStyles.forEach((prevAtt) => {
            const styleAlreadyChanged = newRuleValues.find((att) => att.key === prevAtt.key);

            if(styleAlreadyChanged === undefined){
                ruleStyles[prevAtt.key] = '';
            }
        });
    }
}
