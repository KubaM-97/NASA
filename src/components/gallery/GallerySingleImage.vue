<template>  
  <p>{{photo.id}}</p>
</template>

<script>
export default {
  name: 'GallerySingleImage',
  props: {
      photo: {
          type: Object,
          required: false,
          default: () => {},
      },
  },
}
</script>

<style>
</style>