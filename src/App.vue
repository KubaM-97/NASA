<template>
  <LogoView />
  <ConfigPanelView />
  <GalleryView />
</template>

<script>
import LogoView from '@/views/LogoView'
import ConfigPanelView from '@/views/ConfigPanelView'
import GalleryView from '@/views/GalleryView'

export default {
  name: 'App',
  components: {
    LogoView,
    ConfigPanelView,
    GalleryView,
  }
}
</script>

<style>
@import url('https://fonts.google.com/specimen/Space+Grotesk');
#app {
  font-family: 'Space Grotesk', sans-serif;
}
</style>

