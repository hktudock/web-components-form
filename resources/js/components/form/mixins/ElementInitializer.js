export function initInputElement() {
    this.input = this.shadow.querySelector('input');
    this.input.placeholder = this.getAttribute('placeholder') ?? ''
}

export function initSelectElement() {
    this.input = this.shadow.querySelector('select');
    this.initOptions();
}

export function initRadioElement() {
    this.input = this.shadow.querySelector('input');
    if (this.hasAttribute('name')) {
        this.input.name = this.getAttribute('name');
    }
}