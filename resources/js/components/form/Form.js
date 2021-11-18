class Form extends HTMLElement {
    static formAssociated = true;

    static observedAttributes = [
        'required'
    ];

    constructor() {
        super();
        this.internals = this.attachInternals();
    }

    connectedCallback() {
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }
}

Form.prototype.template = document.createElement('template');

Form.prototype.template.innerHTML = /*html*/ `
<form action="#">
    <slot></slot>
</form> 
`;

customElements.define('x-form', Form);