<template>
  <NumberOfImages />
  <SelectDate />
  <SubmitButton />
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