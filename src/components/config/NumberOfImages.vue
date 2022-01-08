<template>
  <div class='mx-2'>
    <label for='numberOfImages' class='mb-2 d-block'>Number of images:</label>
    <input id='numberOfImages' type='number' v-model.number='numberOfImages' class='d-block pl-2' />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NumberOfImages',
  setup(){
    
    const numberOfImages = ref(0);

    return {
      numberOfImages
    }

  }
}
</script>