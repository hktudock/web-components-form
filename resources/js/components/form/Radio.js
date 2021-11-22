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
    display: grid;
    place-content: center;
    border-radius: 50%;
    aspect-ratio: 1;
    border-color: var(--x-form-accent-color-bg, black);
    width: .75rem;
    padding: 0;
}
:host(:hover) input:not(:checked) {
    background: var(--x-form-accent-color-bg, hsl(0, 0%, 80%));
}
input:checked {
    background: black;
}
input:checked::after {
    content: '';
    background-color: var(--x-form-accent-color-fg, white);
    border-radius: 40%;
    width: .3em;
    aspect-ratio: 1;
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