<template>
    <div class="container">
        <LightGallery
            :settings="{ speed: 500, plugins: plugins }"
            class="row"
        >
            <GallerySingleImage v-for="photo in photos" :key="photo.id" :photo="photo"/>
        </LightGallery>
    </div>
    
</template>

<script>
import LightGallery from 'lightgallery/vue'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbanail from 'lightgallery/plugins/thumbnail'

import GallerySingleImage from '@/components/gallery/GallerySingleImage'

export default {
  name: 'GalleryImages',
  components: {
    LightGallery,
    GallerySingleImage,
  },
  data: () => ({
    plugins: [lgZoom, lgThumbanail],
  }),
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
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
</style>