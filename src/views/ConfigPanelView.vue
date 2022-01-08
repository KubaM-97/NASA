<template>
  <form @submit.prevent="submitForm"
    class="text-center mt-3 mt-md-5"
  >
    <div class="container">
      <div class="row offset-md-2 d-flex align-items-end">
        <NumberOfImages />
        <SelectDate />
        <SubmitButton />
      </div>
    </div>
  </form>
</template>

<script>
import NumberOfImages from '@/components/config/NumberOfImages'
import SelectDate from '@/components/config/SelectDate'
import SubmitButton from '@/components/config/SubmitButton'

import { useStore } from 'vuex'

export default {
    name: 'ConfigPanelView',
    components: {
        NumberOfImages,
        SelectDate,
        SubmitButton,
    },
    setup(){

      const store = useStore();

      function submitForm() {
        store.dispatch("fetchPhotos");
      }

      return {
        submitForm
      }
      
    }
}
</script>

<style>

</style>