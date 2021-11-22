export const INPUT_CSS = /*html*/ `
<style>
input, select {
    background-color: var(--x-form-background-color);
    padding: var(--x-form-padding);
    border: var(--x-form-border-width) var(--x-form-border-style) var(--x-form-border-color);
    border-radius: 0;
    outline: none;
    appearance: none;
    --webkit-appearance: none;
}
select {
    background: url(/img/chevron-down.svg) no-repeat calc(100% - .8rem);
    background-size: .625rem;
    margin-bottom: .25rem;
    min-width: 140px;
}
select:focus,
input:focus {
    border-color: var(--x-form-border-color--focus);
}
input:disabled,
select:disabled {
    background: var(--x-form-background-color--disabled);
}
:host([required]) label span::after {
    content: ' *';
    color: red;
}
label span {
    user-select: none;
    display: block;
    margin-bottom: .5rem;
}
em {
    user-select: none;
    display: none;
    color: red;
    font-style: italic;
    font-size: .75rem;
}
label.validates select:invalid ~ em,
label.validates input:invalid ~ em {
    display: block;
}
</style>
`;