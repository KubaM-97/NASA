<template>  
    <a 
        data-lg-size="1406-1390"
        class="col-sm-6 col-md-4 col-lg-3 my-2 d-flex flex-wrap justify-content-center align-items-center text-dark text-decoration-none"
        :data-src="photo.img_src"
    >
        <div class="border border-primary">
            <img
                class="img-responsive w-100"
                :src="photo.img_src"
            />
            <p class='my-1 w-100 h4'>{{photo.id}}</p>
            <p class='mb-1 w-100'>{{photo.earth_date}}</p>
        </div>
    </a>
</template>

<script>
export default {
  name: 'GallerySingleImage',
  props: {
    photo: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
}
</script>

<style>
</style>