<template>
  <div class='form-group mx-2'>
    <label for='numberOfImages' class='mb-2 d-block'>Number of images:</label>
    <input id='numberOfImages' type='number' v-model.number.lazy='numberOfImages' class='form-control d-block pl-2' />
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
