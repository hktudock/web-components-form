import {Abstract} from "./Abstract";
import {INPUT_CSS} from "./css";
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';
import {initInputElement} from "./mixins/ElementInitializer";

class Zip extends Abstract {

    initElements () {
        initInputElement.call(this);
        return super.initElements();
    }

    attachEvents () {
        return super.attachEvents('input');
    }

    validate() {
        this.internals.setFormValue(this.value);
        this.input.setCustomValidity('');
        if (
            this.required
            && postcodeValidatorExistsForCountry(this.dataset.country)
            && !postcodeValidator(this.input.value, this.dataset.country)
        ) {
            this.input.setCustomValidity('Zipcode invalid');
        }
        this.internals.setValidity(this.input.validity, this.input.validationMessage, this.input);
        this.shadow.querySelector('em').innerText = this.input.validationMessage;
        return this.input.validity.valid;
    }
}

Zip.prototype.template = document.createElement('template');

Zip.prototype.template.innerHTML = /*html*/ `
${INPUT_CSS}
<label>
    <span><slot></slot></span>
    <input>
    <em></em>
</label>
`;

customElements.define('x-zip', Zip);