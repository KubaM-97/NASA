<template>
  <div class="col-sm-6 col-md-4 col-lg-3 my-2">
    <div class="border border-primary">
      <img class="img-responsive w-100" :src="photo.img_src" />
      <p class="my-1 w-100 h4">{{ photo.id }}</p>
      <p class="mb-1 w-100">{{ photo.earth_date }}</p>
    </div>
  </div>
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