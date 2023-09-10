<template>
  <header class="h-[60vh] relative">
    <img src="https://gotolatam.com/images/400/1700/machu-picchu-full-day.jpg" alt="" class="object-cover w-screen h-full">
        <div class="absolute inset-x-0 bottom-0 text-center">
          <h1 class="mb-24 font-bold text-6xl text-white">
            Travel destinations to South America
          </h1>
        </div>
  </header>

<!--  <sections class="my-12">
    <div class="container">
      <h1 class="text-3xl font-bold">Destinations</h1>
    </div>
  </sections>-->

  <section class="my-12">
    <div class="container grid grid-cols-4 gap-12">
      <a :href="'/destinations/countries/'+country.url" class="mx-3 p-3 bg-white w-full rounded-xl my-2 shadow-md cursor-pointer" v-for="country in listDestination">
        <div class="relative">
          <img :src="country.imagen_s" alt="" class="rounded-lg">
        </div>
        <div class="">
          <h3 class="text-left text-lg font-semibold my-3">{{ country.nombre }}</h3>
          <div class="flex gap-2 mt-3 text-sm">
            <img src="/icons/map-location.svg" alt=""> {{country.resumen}}
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()

const listDestination = ref([])

const getPais = async () => {
  const res:any = await packageStore.getPais()


  listDestination.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

onMounted(async () => {
  await getPais()
})
</script>