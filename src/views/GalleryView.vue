<template>
    <div class='text-center mt-5'>
        <p v-if="!photos.length">No photos found for this date</p>
        <template v-else>
            <GalleryImages :photos="photos" />
        </template>
    </div>
</template>

<script>
import GalleryImages from '@/components/gallery/GalleryImages';

import { computed } from 'vue';
import { useStore } from "vuex";

export default {
    name: 'GalleryView',
    components: {
        GalleryImages,
    },
    setup() {

        const store = useStore();
        const photos = computed(() => store.state.photos);

        return {
            photos
        }
    }
}
</script>

<style>

</style>