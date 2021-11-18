import "./bootstrap";

import "./components/form/Form.js";
import "./components/form/Input.js";
import "./components/form/Select.js";
import "./components/form/Zip.js";

window.Vue = require('vue/dist/vue.js');
window.Vue.config.ignoredElements = [
    'x-input-text',
    'x-select',
    'x-zip'
];


window.Vue.component('vue-form', require('./vue/form'));
import VueForm from './vue/form';
document.addEventListener('DOMContentLoaded', () => {

    // const f = document.querySelector('#form1');
    // f.addEventListener('submit', e => {
    //     e.preventDefault();
    //     const formData = new FormData(f);
    //     const data = {};
    //     formData.forEach((value, key) => data[key] = value);
    //     console.log('Nix Vue:', data)
    // })

    const app = new window.Vue({
        el: 'main',
        components: { VueForm }
    });

})
