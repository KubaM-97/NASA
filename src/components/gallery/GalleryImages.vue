<template>
  <GallerySingleImage v-for="photo in photos" :key="photo.id" :photo="photo"/>
</template>

<script>
import GallerySingleImage from "@/components/gallery/GallerySingleImage";

export default {
  name: "GalleryImages",
  components: {
    GallerySingleImage,
  },
  props: {
    photos: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style>
</style>