<template>
  <form action="#" ref="form">
      <h1>Vue Gedöns</h1>
      <fieldset>
        <legend>Custom</legend>
        <x-select value="1" name="prefix" required :data-options="prefixes">Prefix</x-select>
        <fieldset class="name">
          <x-input-text placeholder="First name" name="firstname" required minlength="2" pattern="a{2,}">First name</x-input-text>
          <x-input-text :value="lastname" placeholder="Last name" name="lastname" required>Last name</x-input-text>
        </fieldset>
        <x-zip name="zip" data-country="DE" required>Zip</x-zip>
        <x-select name="country" data-options='[{"value": "de_DE", "label": "Germany"}]'>Country</x-select>
      </fieldset>
    <button type="submit">Clicki</button>
  </form>
</template>

<script>
export default {
  name: 'VueForm',

  data() {
    return {
      prefixes: JSON.stringify([{"value": "", "label": ""}, {"value": 0, "label": "Mr"}, {"value": 1, "label": "Ms"}]),
      lastname: 'Boing'
    }
  },

  mounted() {
    this.$refs.form.addEventListener('submit', e => this.handleSubmit(e))
  },

  watch: {
    lastname() {
      console.log(arguments)
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(this.$refs.form);
      const data = {};
      formData.forEach((value, key) => data[key] = value);
      console.log('Vue', data)
    }
  }
}
</script>

<style></style>