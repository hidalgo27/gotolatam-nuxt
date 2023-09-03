<template>
  <div class="container">
    <div class="grid grid-cols-7">
      <div class="col-span-2">
        <h2 class="text-3xl font-bold">Top <br>12 tours</h2>
        <p class="my-6">We specialize inn <br> brinding you the <br> finest n luxury <br> South American <br>tours.</p>
        <button type="button" class="btn-ternary-outline flex gap-2 my-6 items-center">
          <img src="/icons/map.svg" alt="">
          View all
        </button>
        <div class="flex gap-6">
          <button class="rounded-full border-2 p-2  border-gray-500 focus:bg-gray-800 focus:text-white" @click="prevSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button class="rounded-full border-2 p-2  border-gray-500 focus:bg-gray-800 focus:text-white" @click="nextSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div class="col-span-5">

        <Carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
          <slide v-for="packages in listPackages" :key="packages.id">
            <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->

            <a :href="'/latam-travel-packages/'+packages.url" class="mx-3 p-3 bg-white w-full rounded-xl my-2 shadow-md cursor-pointer">
              <div class="relative">
                <img :src="packages.imagen" alt="" class="rounded-lg">
                <div class="bg-secondary px-2 py-1 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">PAQUETE</div>
              </div>
              <div class="">
                <h3 class="text-left text-lg font-semibold my-3">{{ packages.titulo }}</h3>
                <div class="flex text-xs font-semibold gap-1 items-center">
                  <template v-for="(destination, index, array) in uniqueDestinos = getUniqueDestinos(packages.paquetes_destinos)" :key="destination.id">
                    {{destination.pais}}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < uniqueDestinos.length - 1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </template>
                </div>
                <div class="flex gap-2 mt-3 text-sm">
                  <img src="/icons/map-location.svg" alt=""> Estaring Airpor <span class="text-primary"> ---</span>
                </div>
                <div class="border my-4"></div>
                <div class="flex justify-between text-lg font-semibold">
                  <div>{{ packages.duracion }} days</div>
                  <div v-if="getThreeStarPrice(packages.precio_paquetes) > 0">
                    <span class="text-xs text-gray-400">From</span> ${{ getThreeStarPrice(packages.precio_paquetes) }}
                  </div>
                  <div v-else>
                    <sup class="italic light text-xs">Price </sup>Inquire
                  </div>
                </div>
              </div>
            </a>

          </slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="CarouselTeam">
import "vue3-carousel/dist/carousel.css"
import {Carousel, Slide} from "vue3-carousel"
import {usePackageStore} from "~/stores/packages"

const packageStore = usePackageStore()

const listPackages = ref([])

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 3.2,
    snapAlign: 'start',
  },
}

const carouselRef = ref();

const prevSlide = () => {
  carouselRef.value.prev();
}

const nextSlide = () => {
  carouselRef.value.next();
}

const getPackage = async () => {
  const res:any = await packageStore.getPackage()


  listPackages.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

interface Item {
  id: number;
  name: string;
}

const getUniqueDestinos = (arr:any) => {
  const unique:any = {};
  const uniqueDestinos = [];
  for (const paqueteDestino of arr) {
    const { destinos } = paqueteDestino;
    if (!unique[destinos.pais]) {
      unique[destinos.pais] = true;
      uniqueDestinos.push(destinos);
    }
  }
  return uniqueDestinos;
};

const getThreeStarPrice = (arr:any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

onMounted(async () => {
  await getPackage()
})


</script>