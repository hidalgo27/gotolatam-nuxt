<template>
  <div class="shadow">
    <div class="container flex justify-between py-6 items-center">
      <div class="">
        <img src="/images/logos/logo-gotolatam.svg" width="240">
      </div>
      <div class="">
        <nav class="flex gap-6">
          <nuxt-link to="/Destinations" class="flex gap-2 items-center"><img src="/icons/location.svg"> Destinations</nuxt-link>
          <nuxt-link to="/Destinations" class="flex gap-2 items-center"><img src="/icons/map.svg"> Travel Themes</nuxt-link>
          <nuxt-link to="/Destinations" class="flex gap-2 items-center"><img src="/icons/star.svg"> Top 12 tours</nuxt-link>
          <nuxt-link to="/Destinations" class="flex gap-2 items-center"><img src="/icons/search.svg"> Reviews</nuxt-link>
          <nuxt-link to="/Destinations" class="flex gap-2 items-center"><img src="/icons/user.svg"> About us</nuxt-link>
        </nav>
      </div>
      <div class="">
        <button type="button" class="btn-secondary">Contact</button>
      </div>
    </div>
    <div class="container">
      <div class="">
        <img src="/images/seccion.png" alt="" class="object-cover h-1/2 w-screen">
        <img src="/images/seccion1.png" alt="" class="object-cover h-1/2 w-screen">
        <img src="/images/seccion2.png" alt="" class="object-cover h-1/2 w-screen">
        <img src="/images/seccion3.png" alt="" class="object-cover h-1/2 w-screen">
        <img src="/images/seccion4.png" alt="" class="object-cover h-1/2 w-screen">
        <img src="/images/seccion5.png" alt="" class="object-cover h-1/2 w-screen">
        <img src="/images/seccion6.png" alt="" class="object-cover h-1/2 w-screen">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>