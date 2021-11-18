import {Abstract} from "./Abstract";
import {INPUT_CSS} from "./css";
import {initSelectElement} from "./mixins/ElementInitializer";

class Select extends Abstract {
    initElements() {
        initSelectElement.call(this);
        return super.initElements();
    }

    attachEvents () {
        this.input.addEventListener('change', () => {
            this.label.classList.add('validates');
        }, {once: true})
        return super.attachEvents('change');
    }

    initOptions() {
        const options = JSON.parse(this.dataset.options);
        options.forEach(o => {
            const option = document.createElement('option');
            option.value = o.value;
            option.innerText = o.label;
            this.input.appendChild(option);
        })
        if (options.length === 1) {
            this.input.disabled = true;
            this.value = options[0].value;
        }
        return this;
    }
}

Select.prototype.template = document.createElement('template');

Select.prototype.template.innerHTML = /*html*/ `
${INPUT_CSS}
<label>
    <span><slot></slot></span>
    <select></select>
    <em></em>
</label>
`;

customElements.define('x-select', Select);