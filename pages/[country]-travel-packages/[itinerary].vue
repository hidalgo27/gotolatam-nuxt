<template>

  <header class="h-[60vh] relative">
    <img src="/images/banners/banner-lg.png" alt="" class="object-cover w-screen h-full">
    <div class="absolute inset-x-0 bottom-0 text-center">
      <h1 class="mb-24 font-bold text-6xl text-white">Ecuador Classic</h1>
    </div>
  </header>

  <section class="bg-slate-100 py-8">
    <div class="container grid grid-cols-12 gap-12 items-center">
      <div class="col-span-9">
        <div class="grid grid-cols-3">
          <div class="">
            <h3 class="text-gray-400 text-xs flex gap-1 font-semibold mb-2 items-center"><img src="/icons/map.svg" alt="" class="opacity-70"> TRIP</h3>
            <h2 class="text-2xl font-semibold">Patagonia Highlights</h2>
          </div>
          <div class="">
            <h3 class="text-gray-400 text-xs flex gap-1 font-semibold mb-2 items-center"><img src="/icons/map.svg" alt="" class="opacity-70"> DAYS</h3>
            <h2 class="text-2xl font-semibold">42D/41N</h2>
          </div>
          <div class="">
            <h3 class="text-gray-400 text-xs flex gap-1 font-semibold mb-2 items-center"><img src="/icons/map.svg" alt="" class="opacity-70"> FROM</h3>
            <h2 class="text-2xl font-semibold flex items-center gap-2">$9099 <span class="text-[8px] leading-3">PER <br> PERSON</span></h2>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <button type="btn" class="btn-primary block w-full">Get a Quote</button>
      </div>
    </div>
  </section>

  <section class="container">
    <div class="flex gap-3 my-12">
      <button type="button" class="px-5 text-sm py-2 bg-[#D6DD85] text-primary font-medium rounded-full">Review</button>
      <button type="button" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full">Itinerary</button>
      <button type="button" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full">Included</button>
      <button type="button" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full">Hotels</button>
      <button type="button" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full">Hotels</button>
      <button type="button" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full">Prices</button>
    </div>
  </section>

  <section class="">
    <div class="container grid grid-cols-12 gap-12">
      <div class="col-span-9">
        <img src="/images/banners/map.png" alt="" class="rounded-2xl w-full">

        <div class="grid my-8 space-y-2">
          <div class="flex gap-2">
            <img src="/icons/location.svg" alt=""> <span class="font-bold">Start</span> Lima, Peru
          </div>
          <div class="flex gap-2">
            <img src="/icons/location.svg" alt=""> <span class="font-bold">Finish</span> La Paz, Bolivia
          </div>
          <div class="flex gap-2">
            <img src="/icons/location.svg" alt="">
            <span class="font-bold">Destinations</span>
            <span class="badged-sm bg-gray-800">Argentina</span>
            <span class="badged-sm bg-primary">Perú</span>
            <span class="badged-sm bg-secondary">Bolivia</span>
            <span class="badged-sm bg-primary">Chile</span>
            <span class="badged-sm bg-secondary">Brasil</span>
            <span class="badged-sm bg-gray-800">Colombia</span>
          </div>
          <div class="flex gap-2">
            <img src="/icons/search.svg" alt=""> <span class="font-bold">Code</span> GTP002
          </div>
        </div>

        <article>
          <h2 class="text-2xl font-bold mb-8">Titulo del resumen</h2>
          <p class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deserunt dolorum earum enim, exercitationem expedita fugit impedit obcaecati quae qui quia voluptatem. Beatae cumque dignissimos excepturi explicabo repellat voluptatem?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deserunt dolorum earum enim, exercitationem expedita fugit impedit obcaecati quae qui quia voluptatem. Beatae cumque dignissimos excepturi explicabo repellat voluptatem?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deserunt dolorum earum enim, exercitationem expedita fugit impedit obcaecati quae qui quia voluptatem. Beatae cumque dignissimos excepturi explicabo repellat voluptatem?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deserunt dolorum earum enim, exercitationem expedita fugit impedit obcaecati quae qui quia voluptatem. Beatae cumque dignissimos excepturi explicabo repellat voluptatem?</p>
        </article>

        <article class="my-12">
          <h2 class="text-2xl font-bold mb-8">Itinerary</h2>
          <div class="">

            <div class="w-full mx-auto relative">


              <div v-for="(item, index) in displayedItems" :key="index" class="flex item">
                <div class="relative w-20 text-center gap-12">
                  <div class="absolute -z-10 left-1/2 top-0 bottom-0 border-l-2 border-dashed border-slate-300"></div>
                  <div class="bg-white py-2  font-bold text-xs" :class="[currentItem == index ? 'text-secondary' : 'text-slate-500']">DAY {{index + 1}}</div>
                </div>
                <div class="space-y-2 w-full " :class="[index + 1 == items.length ? 'border-y' : 'border-t']">
                  <div>
                    <button @click="toggleItem(index)" class="w-full text-left p-4 flex justify-between items-center hover:bg-gray-200">
                        {{ item.title }}
                      <span>
                        {{ currentItem == index ? '-' : '+' }}
                      </span>
                    </button>
                      <transition name="bottom">
                        <div v-if="currentItem === index" class="p-4">
                          {{ item.content }}
                        </div>
                      </transition>
                  </div>
                </div>
              </div>

              <button @click="loadMore" v-if="canLoadMore" class="mt-4 p-4 bg-[#ffeece] mt-2 font-bold text-secondary rounded w-full hover:bg-secondary hover:text-white">
                View More
              </button>

              <button @click="loadLess" v-if="canLoadLess" class="px-4 py-2 w-full mt-2 rounded text-red-500 hover:text-primary">
                View Less
              </button>

            </div>
          </div>

        </article>

        <article>
          <h2 class="text-2xl font-bold mb-8">Our Rates includes</h2>
          <div class="grid grid-cols-4 gap-6">
            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">
              <img src="/icons/star.svg" alt="" class="mb-3 w-6">
              <p class="text-sm">Private transport Airport - Hotel</p>
            </div>
            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">
              <img src="/icons/star.svg" alt="" class="mb-3 w-6">
              <p class="text-sm">Profesional <br> Guides</p>
            </div>
            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">
              <img src="/icons/star.svg" alt="" class="mb-3 w-6">
              <p class="text-sm">Train Ollantaytambo - Machupicchu</p>
            </div>
            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">
              <img src="/icons/star.svg" alt="" class="mb-3 w-6">
              <p class="text-sm">Helpline 24 hours a day, 7 days a week</p>
            </div>
            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">
              <img src="/icons/star.svg" alt="" class="mb-3 w-6">
              <p class="text-sm">All The Entrances & Tours</p>
            </div>
            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">
              <img src="/icons/star.svg" alt="" class="mb-3 w-6">
              <p class="text-sm">41 Nights With 3 Stars hotel</p>
            </div>
            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">
              <img src="/icons/star.svg" alt="" class="mb-3 w-6">
              <p class="text-sm">Meals As Per Program</p>
            </div>
            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">
              <img src="/icons/star.svg" alt="" class="mb-3 w-6">
              <p class="text-sm">Train Service</p>
            </div>
          </div>
        </article>

        <article class="my-12">
          <h2 class="text-2xl font-bold mb-8">Not Included</h2>
          <ul class="list-inside list-image-[url(/icons/star.svg)]">
            <li>National & International Flights</li>
            <li>Travel Insurance</li>
            <li>Visas</li>
            <li>Tips</li>
          </ul>
        </article>

        <article class="my-12">
          <h2 class="text-2xl font-bold mb-8">Hotels considered</h2>
          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <img src="/icons/hotel.svg" alt=""> Overnight
            </div>
            <div class="flex gap-2 items-center">
              Category:
              <div class="relative col-span-2">
                <input type="text" class="is-input-ico rounded-right-0 border-right-0 peer" placeholder=" " @focus="openPopover(1)" @blur="closePopover(1)" v-model="destination">
                <label class="is-input-ico-label">Choose Category</label>
                <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <img src="/icons/search.svg" alt="">
                </div>
                <div class="absolute z-10 inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <transition name="top" appear>
                  <div class="box-option-select" v-show="viewPopover == 1" @mouseover="mouseIsOverPopover = true" @mouseleave="mouseIsOverPopover = false">
                    <div class="grid items-start text-left">
                      <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer flex gap-2">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                      </div>
                      <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer flex gap-2">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                      </div>
                      <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer flex gap-2">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                      </div>
                      <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer flex gap-2">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                        <img src="/icons/star.svg" alt="">
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </article>

        <article>
          <div class="grid grid-cols-12 bg-gray-800 rounded-t-xl py-3 text-white divide-x items-center">
            <div class="col-span-2 text-center pl-6">
                Nights
            </div>
            <div class="col-span-4 pl-6">
              <div>
                City
              </div>
            </div>
            <div class="col-span-6 pl-6">
              <div>
                Hotel
              </div>
            </div>
          </div>

          <div class="grid grid-cols-12 py-2 bg-slate-100 divide-x divide-slate-300 items-center my-2">
            <div class="col-span-2 pl-6 leading-none text-primary text-center">
              <span class="text-xs">Nights</span><br>
              <span class="text-2xl font-bold">04</span>
            </div>
            <div class="col-span-4 pl-6">
              Quito
            </div>
            <div class="col-span-6 pl-6">
              Vieja Cuba
            </div>
          </div>

          <div class="grid grid-cols-12 py-2 bg-slate-100 divide-x divide-slate-300 items-center my-2">
            <div class="col-span-2 pl-6 leading-none text-primary text-center">
              <span class="text-xs">Nights</span><br>
              <span class="text-2xl font-bold">04</span>
            </div>
            <div class="col-span-4 pl-6">
              Quito
            </div>
            <div class="col-span-6 pl-6">
              Vieja Cuba
            </div>
          </div>

          <button @click="loadMore" v-if="canLoadMore" class=" p-4 bg-[#eff2d6] font-bold text-primary rounded w-full hover:bg-primary hover:text-white">
            View More
          </button>

          <button @click="loadLess" v-if="canLoadLess" class="px-4 py-2 w-full mt-2 rounded text-red-500 hover:text-primary">
            View Less
          </button>



        </article>


        <article class="my-12">
          <h2 class="text-2xl font-bold mb-8">Dates & availability</h2>
          <div class="p-4 border-l-8 rounded-l-lg bg-slate-100 border-primary grid grid-cols-3 items-center">
            <div class="">
              <div class="text-lg font-bold">Tour class</div>
              <div class="flex items-center gap-2">
                <img src="/icons/calendar.svg" alt="">
                <span class="font-bold text-3xl">$7876</span>
              </div>
            </div>
            <div class="">
              <p class="font-bold mb-2">Per adult in a twin share room</p>
              <p class="text-sm text-slate-400">Want your own room? <br> From an extra $980</p>
            </div>
            <div class="">
              <button type="button" class="btn-ternary w-full mb-3">Get a Quote</button>
              <button type="button" class="btn-ternary-outline w-full">Get a Quote</button>
            </div>
          </div>

          <div class="p-4 border-l-8 rounded-l-lg bg-slate-100 border-secondary mt-4 grid grid-cols-3 items-center">
            <div class="">
              <div class="text-lg font-bold">Superior class</div>
              <div class="flex items-center gap-2">
                <img src="/icons/calendar.svg" alt="">
                <span class="font-bold text-3xl">$7876</span>
              </div>
            </div>
            <div class="">
              <p class="font-bold mb-2">Per adult in a twin share room</p>
              <p class="text-sm text-slate-400">Want your own room? <br> From an extra $980</p>
            </div>
            <div class="">
              <button type="button" class="btn-ternary w-full mb-3">Get a Quote</button>
              <button type="button" class="btn-ternary-outline w-full">Get a Quote</button>
            </div>
          </div>
        </article>


      </div>
      <div class="col-span-3">
        <div class="bg-[#eef3d3] p-6 rounded-2xl sticky top-10">
          <img src="/images/home/operator1.png" alt="" class="mx-auto -mt-16 rounded-full h-24 w-24 object-cover  border border-primary">
          <div class="p-6 rounded-2xl bg-white my-4">
            <h4 class="text-center text-primary font-semibold">¡Hello, I'm Yoa!</h4>
            <p class="text-sm text-center font-light mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad corporis dolorem explicabo modi natus necessitatibus nisi odit reprehenderit similique?</p>
          </div>
          <button type="button" class="rounded-lg py-2 w-full px-6 text-white bg-green-500 hover:bg-opacity-95 duration-300">Write Us</button>
          <button type="button" class="rounded-lg py-2 w-full px-6 text-primary border border-primary hover:bg-primary hover:text-white duration-300 mt-3">Write Us</button>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts" setup name="itinerary">
const currentItem = ref(null); //
const viewPopover = ref()// índice del ítem actualmente abierto
function openPopover(val:number){
  if (val){
    viewPopover.value = val
  }else {
    viewPopover.value = 0
  }
}
function closePopover(val:number){
  setTimeout(() => {
    if (mouseIsOverPopover) {
      if (val){
        viewPopover.value = 0
      }
    }
  }, 100);

}

const mouseIsOverPopover = ref(false)

const items = ref([
  { title: 'Título 1', content: 'Contenido 1' },
  { title: 'Título 2', content: 'Contenido 2' },
  { title: 'Título 3', content: 'Contenido 3' },
  { title: 'Título 4', content: 'Contenido 4' },
  { title: 'Título 5', content: 'Contenido 5' },
  { title: 'Título 6', content: 'Contenido 6' },
  { title: 'Título 7', content: 'Contenido 7' },
]);
const toggleItem = (index:any) => {
  if (currentItem.value === index) {
    currentItem.value = null;
  } else {
    currentItem.value = index;
  }
};

const displayedItems = ref(items.value.slice(0, 2));

const loadMore = () => {
  let nextItems = items.value.slice(displayedItems.value.length, displayedItems.value.length + 2);
  displayedItems.value = [...displayedItems.value, ...nextItems];
};
const loadLess = () => {
  displayedItems.value = displayedItems.value.slice(0, displayedItems.value.length - 2);
};

const canLoadLess = computed(() => displayedItems.value.length > 2);

const canLoadMore = computed(() => items.value.length > displayedItems.value.length);

</script>