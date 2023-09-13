<template>
  <div class="container flex justify-between py-6 items-center">
    <div class="">
      <nuxt-link to="/"><img src="/images/logos/logo-gotolatam.svg" width="240"></nuxt-link>
    </div>
    <div class="">
      <nav class="gap-6 hidden md:flex">
        <nuxt-link to="/destinations/countries" class="flex gap-2 items-center"><img src="/icons/location.svg"> Destinations</nuxt-link>
        <nuxt-link to="/latam-travel-packages" class="flex gap-2 items-center"><img src="/icons/map.svg"> LATAM Travel Packages</nuxt-link>
        <nuxt-link to="/#top-12" class="flex gap-2 items-center"><img src="/icons/star.svg"> Top tours</nuxt-link>
        <nuxt-link to="/reviews" class="flex gap-2 items-center"><img src="/icons/search.svg"> Reviews</nuxt-link>
        <nuxt-link to="/about" class="flex gap-2 items-center"><img src="/icons/user.svg"> About us</nuxt-link>
      </nav>
    </div>
    <div class="">
      <button type="button" class="btn-secondary">Contact</button>
    </div>
  </div>
</template>

<script lang="ts" setup name="nav">

</script>