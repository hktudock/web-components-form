import {AVAILABLE_X_FORM_TAGS} from "../index";

export const getXFormElements = function (form) {
    const elements = Array.from(form.elements);
    if (window.ElementInternals.isPolyfilled) {
        const names = elements.filter(e => e.hasAttribute('name')).map(e => e.getAttribute('name'));
        const xFormElements = Array.from(form.querySelectorAll(AVAILABLE_X_FORM_TAGS.join(',')));
        return xFormElements.filter(e => names.indexOf(e.getAttribute('name')) > -1);
    } else {
        return elements;
    }
}