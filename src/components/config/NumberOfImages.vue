<template>
  <div class='form-group mx-md-2 my-3 col-md-4'>
    <label for='numberOfImages' class='mb-md-2 d-block'>Number of images:</label>
    <input id='numberOfImages' type='number' v-model.number.lazy='numberOfImages' min='1' max='50' class='form-control d-block pl-2' />
  </div>
</template>

<script>

export default {
  name: 'NumberOfImages',
  computed: {
    numberOfImages: {
      get () {
        return this.$store.state.numberOfImages
      },
      set (value) {
        this.$store.commit('setNumberOfImages', value)
      }
    }
  },
}
</script>
