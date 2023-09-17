<template>
  <div class="container flex justify-between py-6 items-center">
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" @click="packageStore.showModalMenu = !packageStore.showModalMenu">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
    <Nav></Nav>
    <div class="">
      <button type="button" class="btn-secondary" @click="packageStore.showModalInquireGlobal = !packageStore.showModalInquireGlobal">Inquire Now</button>
    </div>
  </div>

</template>

<script lang="ts" setup name="nav">
import {usePackageStore} from "~/stores/packages";
import Nav from "~/components/page/Nav.vue";

const packageStore = usePackageStore()
packageStore.showModalInquireGlobal = false
</script>