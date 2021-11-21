import "./bootstrap";

import "./components/form";
import {AVAILABLE_X_FORM_TAGS} from "./components/form";

window.Vue = require('vue/dist/vue.js');
window.Vue.config.ignoredElements = AVAILABLE_X_FORM_TAGS;


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
