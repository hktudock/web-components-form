import {Abstract} from "./Abstract";
import {INPUT_CSS} from "./css";
import {initRadioElement} from "./mixins/ElementInitializer";

class Radio extends Abstract {

    initElements () {
        initRadioElement.call(this);
        return super.initElements();
    }

    attachEvents () {
        this.input.addEventListener('change', e => {
            if (this.checked) {
                const sel = `x-radio[name="${this.getAttribute('name')}"]`
                Array.from(document.querySelectorAll(sel)).filter(r => r !== this).forEach(r => r.checked = false)
            }
        })
        return super.attachEvents('input');
    }

    get checked() {
        return this.input.checked;
    }

    set checked(v) {
        return this.input.checked = !!v;
    }
}

Radio.prototype.template = document.createElement('template');

Radio.prototype.template.innerHTML = /*html*/ `
${INPUT_CSS}
<style>
input {
    display: inline-block;
    position: relative;
    padding: 0;
    margin: 0;
    width: .75rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border-color: var(--x-form-accent-color-bg, black);
    box-sizing: border-box;
}
:host(:hover) input:not(:checked) {
    background: var(--x-form-accent-color-hover, hsl(0, 0%, 80%));
}
input:checked {
    background: var(--x-form-accent-color-bg, black);;
}
input:checked::after {
    content: '';
    display: inline;
    background-color: var(--x-form-accent-color-fg, white);
    border-radius: 40%;
    width: .3em;
    aspect-ratio: 1;
    line-height: 0;
    padding: 0;
    margin: 0;
    position: absolute;
    top: calc((.75rem - .3em) / 2 - 1px);
    left: calc((.75rem - .3em) / 2 - 1px);
}
label span {
    display: revert;
}
</style>
<label>
    <input type="radio">
    <span><slot></slot></span>
    <em></em>
</label>
`;

customElements.define('x-radio', Radio);