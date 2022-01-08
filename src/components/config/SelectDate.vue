<template>
  <div class='mx-2'>
    <label for='selectDate' class='mb-2 d-block'>Select date:</label>
    <input id='selectDate' type='date'  v-model="date" :max='date' class='d-block pl-2' />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'SelectDate',
  setup(){

    const today = ref(new Date())
    const date = ref('')

    const formatDate = () => {

      const year = today.value.getFullYear()
      const month = today.value.getMonth() + 1
      const day = today.value.getDate()
      
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDay = month < 10 ? `0${day}` : day;

      date.value = `${year}-${formattedMonth}-${formattedDay}` 
    }
    
    onMounted(()=>{
      formatDate()
    })

    return {
      date
    }
  }
}
</script>

<style>

</style>