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
.lg-thumb {
  margin: 10px auto;
}
.lg-thumb-item{
  border: 2px solid rgba(158, 160, 80, 0.8);
  width: 10px;
  height: 10px;
  display: inline-block;
  opacity: .7;
}
.lg-thumb-item:hover{
  border: 2px solid rgb(233, 235, 104);
  cursor: pointer;
  opacity: 1;
}
img{
  height: 100%
}
</style>