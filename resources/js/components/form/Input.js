import {Abstract} from "./Abstract";
import {INPUT_CSS} from "./css";
import {initInputElement} from "./mixins/ElementInitializer";

class InputText extends Abstract {

    initElements () {
        initInputElement.call(this);
        return super.initElements();
    }

    initAttributes () {
        if (this.hasAttribute('minlength')) {
            this.minlength = this.getAttribute('minlength');
        }
        if (this.hasAttribute('maxlength')) {
            this.maxlength = this.getAttribute('maxlength');
        }
        if (this.hasAttribute('pattern')) {
            this.pattern = this.getAttribute('pattern');
        }
        return super.initAttributes();
    }

    attachEvents () {
        return super.attachEvents('input');
    }

    get minlength () {
        return this.input.getAttribute('minlength');
    }

    set minlength (v) {
        this.input.setAttribute('minlength', v);
    }

    get maxlength () {
        return this.input.getAttribute('maxlength');
    }

    set maxlength (v) {
        this.input.setAttribute('maxlength', v);
    }

    get pattern () {
        return this.input.getAttribute('pattern');
    }

    set pattern (v) {
        if (!v && this.input.hasAttribute('pattern')) {
            this.input.removeAttribute('pattern')
        } else {
            this.input.setAttribute('pattern', v);
        }
    }
}

InputText.prototype.template = document.createElement('template');

InputText.prototype.template.innerHTML = /*html*/ `
${INPUT_CSS}
<label>
    <span><slot></slot></span>
    <input>
    <em></em>
</label>
`;

customElements.define('x-input-text', InputText);
