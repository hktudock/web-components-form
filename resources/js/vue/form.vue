<template>
  <form action="#" ref="form" :novalidate="novalidate">
      <h1>Vue Gedöns</h1>
      <fieldset>
        <legend>Custom</legend>
        <x-select value="1" name="prefix" required :data-options="prefixes">Prefix</x-select>
        <fieldset class="name">
          <x-input placeholder="First name" name="firstname" required minlength="2" pattern="a{2,}">First name</x-input>
          <x-input :value="lastname" placeholder="Last name" name="lastname" required>Last name</x-input>
        </fieldset>
        <x-zip name="zip" data-country="DE" required>Zip</x-zip>
        <x-select name="country" data-options='[{"value": "de_DE", "label": "Germany"}]'>Country</x-select>
      </fieldset>
    <button type="submit" :disabled="!canSubmit">Clicki</button>
  </form>
</template>

<script>

import {getXFormElements} from "../components/form/helper/Form";

export default {
  name: 'VueForm',

  data() {
    return {
      canSubmit: false,
      prefixes: JSON.stringify([{"value": "", "label": ""}, {"value": 0, "label": "Mr"}, {"value": 1, "label": "Ms"}]),
      lastname: 'Müller',
      novalidate: !window.ElementInternals.isPolyfilled
    }
  },

  computed: {
    formElements: {
      get() {
        return getXFormElements(this.$refs.form)
      }
    }
  },

  mounted() {
    this.$refs.form.addEventListener('submit', e => this.handleSubmit(e))
    this.$refs.form.addEventListener('change', this.update.bind(this))
    this.update()
  },

  watch: {
    lastname() {
      console.log(arguments)
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.isValid()) {
        const formData = new FormData(this.$refs.form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        console.log('Vue', data)
      }
    },
    update(e) {
      this.canSubmit = this.isValid();
    },
    isValid() {
      return this.formElements.every(e => {
        return e.validity.valid
      });
    }
  }
}
</script>

<style></style>