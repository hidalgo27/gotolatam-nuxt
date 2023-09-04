<template>
  <header class="h-[60vh] relative">
    <img src="/images/banners/banner-lg.png" alt="" class="object-cover w-screen h-full">
<!--    <div class="absolute inset-x-0 bottom-0 text-center">
      <h1 class="mb-24 font-bold text-6xl text-white">
        Destinations
      </h1>
    </div>-->
  </header>

  <section class="my-12">
    <div class="container">
      <h1 class="text-3xl font-bold">Destinations</h1>
    </div>
  </section>

  <section>
    <div class="container col-end-4">
      <div class="">
        <img src="" alt="">
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()

const listDestination = ref([])

const getTeam = async () => {
  const res:any = await packageStore.getTeam()


  listDestination.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

onMounted(async () => {
  await getTeam()
})
</script>