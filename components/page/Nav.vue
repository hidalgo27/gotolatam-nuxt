<template>
  <div class="container flex justify-between py-6 items-center">
    <div class="">
      <img src="/images/logos/logo-gotolatam.svg" width="240">
    </div>
    <div class="">
      <nav class="gap-6 hidden md:flex">
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
</template>

<script lang="ts" setup name="nav">

</script>