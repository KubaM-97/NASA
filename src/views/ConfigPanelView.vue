<template>
  <div class='text-center mt-3 mt-md-5 d-flex justify-content-center align-items-end'>
    <NumberOfImages />
    <SelectDate />
    <SubmitButton />
  </div>
</template>

<script>
import NumberOfImages from '@/components/config/NumberOfImages'
import SelectDate from '@/components/config/SelectDate'
import SubmitButton from '@/components/config/SubmitButton'

export default {
    name: 'ConfigPanelView',
    components: {
        NumberOfImages,
        SelectDate,
        SubmitButton,
    }
}
</script>

<style>

</style>