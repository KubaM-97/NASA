<template>
  <div class='form-group mx-md-2 my-3 col-md-4'>
    <label for='selectDate' class='mb-md-2 d-block'>Select date:</label>
    <input id='selectDate' type='date' v-model="date" :max='date' class='form-control d-block pl-2' />
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

    watch(date, (val) => {
      store.commit('setSelectedDate', val)
    })

    return {
      date
    }
  }
}
</script>

<style>

</style>