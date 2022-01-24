<template>
  <div class='form-group mx-md-2 my-3 col-md-4'>
    <label for='selectDate' class='mb-md-2 d-block'>Select date:</label>
    <input id='selectDate' type='date' v-model="date" :max="today" class='form-control d-block pl-2' />
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex';

export default {
  name: 'SelectDate',
  setup(){
    const store = useStore();

    const today = ref(new Date())
    const date = ref('')

    const formatDate = (date) => {

      const year = date.value.getFullYear()
      const month = date.value.getMonth() + 1
      const day = date.value.getDate()
      
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDay = day < 10 ? `0${day}` : day;

      return `${year}-${formattedMonth}-${formattedDay}` 
    }
    
    onMounted(()=>{
      date.value = formatDate(today)
      today.value = formatDate(today)
    })

    watch(date, (val) => {
      store.commit('setSelectedDate', val)
    })

    return {
      today,
      date,
    }
  }
}
</script>

<style>

</style>