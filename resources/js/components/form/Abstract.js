import {ValidityMessages} from "./ValidityMessages";

export class Abstract extends HTMLElement {
    static formAssociated = true;

    static get observedAttributes() {
        return [
            'required'
        ]
    };

    constructor() {
        super();
    }

    connectedCallback() {
        this.internals = this.attachInternals();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.template.content.cloneNode(true));
        this.initElements()
            .initAttributes()
            .attachEvents()
            .initInternals()
        ;
        this.validate();
    }

    attributeChangedCallback(name, o, n) {
        if (this.input) {
            switch (name) {
                case 'required':
                    this.required = !!n;
                    break;
            }
        }
    }

    initElements () {
        this.label = this.shadow.querySelector('label');
        this.input.value = this.value || this.getAttribute('value');
        return this;
    }

    initAttributes () {
        this.required = this.hasAttribute('required');
        return this;
    }

    attachEvents (mainEvent) {
        this.input.addEventListener('focus', () => this.label.classList.add('validates'), {once: true});
        this.internals.form.addEventListener('submit', () => this.label.classList.add('validates'), {once: true});
        this.input.addEventListener('blur', () => this.validate())
        this.input.addEventListener(mainEvent, () => this.validate())
        this.input.addEventListener(mainEvent, () => this.internals.form.dispatchEvent(new CustomEvent('change', {detail: this})))
        return this;
    }

    initInternals () {
        this.internals.setFormValue(this.value);
        return this;
    }

    validate() {
        this.internals.setFormValue(this.value);
        if (this.input.willValidate) {
            this.input.setCustomValidity('');
            if (!this.input.validity.valid) {
                const message = this.matchValidityMessage();
                if (message) {
                    this.input.setCustomValidity(message);
                }
            }
            this.internals.setValidity(this.input.validity, this.input.validationMessage, this.input);
        }
        this.shadow.querySelector('em').innerText = this.input.validationMessage;
        return this.input.validity.valid;
    }

    matchValidityMessage () {
        const message = Object.keys(ValidityMessages).find(k => {
            return this.input.validity[k] === true
        })
        return ValidityMessages[message]
    }

    get required () {
        return this.input.required;
    }

    set required (v) {
        if (!v) {
            this.removeAttribute('required');
        } else if (!this.hasAttribute('required')) {
            this.setAttribute('required', v);
        }
        this.input.required = v;
        this.validate();
    }

    get value() {
        return this.input.value;
    }

    set value(v) {
        this.input.value = v;
    }

    get validity() {
        return this.input.validity;
    }
}