<template>
  <LogoView />
  <ConfigPanelView />
</template>

<script>
import LogoView from '@/views/LogoView'
import ConfigPanelView from '@/views/ConfigPanelView'

export default {
  name: 'App',
  components: {
    LogoView,
    ConfigPanelView,
  }
}
</script>

<style>
@import url('https://fonts.google.com/specimen/Space+Grotesk');
#app {
  font-family: 'Space Grotesk', sans-serif;
}
</style>

