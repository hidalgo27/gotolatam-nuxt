<template>
  <div class="shadow">
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
    <div class="">
      <div class="h-[60vh] relative">
        <img src="/images/banners/banner-lg.png" alt="" class="object-cover w-screen h-full">
        <div class="absolute inset-x-0 bottom-0 text-center">
          <h2 class="text-white text-4xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">LET’S <span class="text-primary">GO</span> <span class="text-secondary">TOGETHER</span> TO</h2>

          <div class="container mt-36 mb-16">
            <div class="relative z-10 w-4/6 bg-white mx-auto p-6 rounded-2xl">
              <div class="grid grid-cols-5 gap-5 items-center">
                <div class="relative col-span-2">
                  <input type="text" class="is-input-ico rounded-right-0 border-right-0 peer" placeholder=" " @focus="openPopover(1)" @blur="closePopover(1)" v-model="destination">
                  <label class="is-input-ico-label">Choose your destinations</label>
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
                        <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Lima')">Lima</div>
                        <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Cusco')">Cusco</div>
                        <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Arequipa')">Arequipa</div>
                        <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Puno')">Puno</div>
                      </div>
                    </div>
                  </transition>
                </div>
                <div class="relative col-span-1">
                  <div class="relative">
                    <input type="text" class="is-input-ico peer" placeholder=" " v-model="dateValue" @focus="showModalProcess = true">
                    <label class="is-input-ico-label">When</label>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <img src="/icons/calendar.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="relative col-span-2">
                  <button type="button" class="btn-primary w-full">Create My Trip Now</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <section class="py-12 bg-gray-100">
      <carousel-p></carousel-p>
    </section>

    <section class="my-12 container">
      <div class="w-10/12 mx-auto">
        <div class="grid grid-cols-2 justify-center gap-24">
          <div class="">
            <div class="columns-2 gap-3 space-y-4 floa">
              <img src="/images/home/operator1.png" alt="">
              <img src="/images/home/operator2.png" alt="">
              <img src="/images/home/operator3.png" alt="">
              <img src="/images/home/operator4.png" alt="">
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold">LATAM Travel Operator</h2>
            <p class="my-6">Trust our team of local travel experts to <br> plan an unforgettable trip full of <br> must-see attractions and our favorite
              <br> hidden gems of the land <br> of the Incas. Every Peru tour offered is <br>regularly inspected to ensure our travelers
              <br> have an amazing experience.</p>
            <button type="button" class="btn-primary">Create My Trip Now</button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-100">
      <carousel-h></carousel-h>
    </section>

    <section class="container py-12">
      <h2 class="text-3xl font-bold text-center">Destinations</h2>
      <div class="flex justify-center gap-3 my-6">
        <button type="button" class="px-5 py-2 bg-[#D6DD85] text-primary font-medium rounded-full">Perú</button>
        <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Bolivia</button>
        <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Chile</button>
        <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Ecuador</button>
        <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Colombia</button>
        <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Argentina</button>
        <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Brasil</button>
      </div>
      <div class="grid grid-cols-5 gap-24 my-12">
        <div class="col-span-2">
          <h3 class="text-3xl font-bold">simply dummy text of</h3>
          <div class="pr-24">
            <p class="my-6">is simply dummy text of the printing an pesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown is simply dummy text of the printing an pesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever</p>
          </div>
        </div>
        <div class="col-span-3">
          <img src="https://gotoperu.com/images/1327.jpg" alt="">
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-100">
      <div class="container">
        <h2 class="text-3xl font-bold text-center">Reviews and Testimonials</h2>
        <div class="columns-4 gap-6 space-y-6 my-12">
          <div class="relative rounded-2xl">
              <div class="relative">
                <img src="/images/testimonials/testimonial1.png" alt="" class="w-full object-center">
                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">
                  <img src="/icons/pay.svg" alt="" class="mx-auto">
                </div>
              </div>
            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">
              <img src="/icons/quotes.svg" alt="" class="-mt-9">
              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>
              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>
            </div>
          </div>
          <div class="relative rounded-2xl">
              <div class="relative">
                <img src="/images/testimonials/testimonial2.png" alt="" class="w-full object-center">
                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">
                  <img src="/icons/pay.svg" alt="" class="mx-auto">
                </div>
              </div>
            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">
              <img src="/icons/quotes.svg" alt="" class="-mt-9">
              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>
              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>
            </div>
          </div>
          <div class="relative rounded-2xl">
              <div class="relative">
                <img src="/images/testimonials/testimonial3.png" alt="" class="w-full object-center">
                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">
                  <img src="/icons/pay.svg" alt="" class="mx-auto">
                </div>
              </div>
            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">
              <img src="/icons/quotes.svg" alt="" class="-mt-9">
              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>
              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>
            </div>
          </div>
          <div class="relative rounded-2xl">
              <div class="relative">
                <img src="/images/testimonials/testimonial4.png" alt="" class="w-full object-center">
                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">
                  <img src="/icons/pay.svg" alt="" class="mx-auto">
                </div>
              </div>
            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">
              <img src="/icons/quotes.svg" alt="" class="-mt-9">
              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>
              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>
            </div>
          </div>
          <div class="relative rounded-2xl">
              <div class="relative">
                <img src="/images/testimonials/testimonial2.png" alt="" class="w-full object-center">
                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">
                  <img src="/icons/pay.svg" alt="" class="mx-auto">
                </div>
              </div>
            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">
              <img src="/icons/quotes.svg" alt="" class="-mt-9">
              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>
              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>
            </div>
          </div>
          <div class="relative rounded-2xl">
              <div class="relative">
                <img src="/images/testimonials/testimonial5.png" alt="" class="w-full object-center">
                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">
                  <img src="/icons/pay.svg" alt="" class="mx-auto">
                </div>
              </div>
            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">
              <img src="/icons/quotes.svg" alt="" class="-mt-9">
              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>
              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>
            </div>
          </div>
          <div class="relative rounded-2xl">
              <div class="relative">
                <img src="/images/testimonials/testimonial3.png" alt="" class="w-full object-center">
                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">
                  <img src="/icons/pay.svg" alt="" class="mx-auto">
                </div>
              </div>
            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">
              <img src="/icons/quotes.svg" alt="" class="-mt-9">
              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>
              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>
            </div>
          </div>
        </div>
        <div class="flex gap-2 items-center justify-center">
          <p>Happy Guests are the Best Rewarc</p>
          <img src="/images/logos/tripadvisor.png" alt="" class="w-32">
          <img src="/images/logos/trustpilot.png" alt="" class="w-20">
        </div>
      </div>
    </section>

    <section class="container py-16">
      <div class="grid grid-cols-4 gap-6">
        <div class="grid grid-cols-2 rounded-xl relative bg-gray-100 px-4 py-8 border gap-12">
          <img src="/icons/shield.svg" alt="" class="absolute left-0 top-0 ml-3 -mt-6">
          <div class="">
            <h3 class="font-semibold text-sm">Book with Confidence</h3>
            <p class="text-sm mt-3">Keep calm! We will help you plan your dream trip.</p>
          </div>
          <div class="">
            <div class="bg-primary rounded-xl h-full w-full"></div>
          </div>
        </div>
        <div class="grid grid-cols-2 rounded-xl relative bg-gray-100 px-4 py-8 border gap-12">
          <img src="/icons/star-yellow.svg" alt="" class="absolute left-0 top-0 ml-3 -mt-6">
          <div class="">
            <h3 class="font-semibold text-sm">Book with Confidence</h3>
            <p class="text-sm mt-3">Keep calm! We will help you plan your dream trip.</p>
          </div>
          <div class="">
            <div class="bg-primary rounded-xl h-full w-full"></div>
          </div>
        </div>
        <div class="grid grid-cols-2 rounded-xl relative bg-gray-100 px-4 py-8 border gap-12">
          <img src="/icons/person.svg" alt="" class="absolute left-0 top-0 ml-3 -mt-6">
          <div class="">
            <h3 class="font-semibold text-sm">Book with Confidence</h3>
            <p class="text-sm mt-3">Keep calm! We will help you plan your dream trip.</p>
          </div>
          <div class="">
            <div class="bg-primary rounded-xl h-full w-full"></div>
          </div>
        </div>
        <div class="grid grid-cols-2 rounded-xl relative bg-gray-100 px-4 py-8 border gap-12">
          <img src="/icons/shield.svg" alt="" class="absolute left-0 top-0 ml-3 -mt-6">
          <div class="">
            <h3 class="font-semibold text-sm">Book with Confidence</h3>
            <p class="text-sm mt-3">Keep calm! We will help you plan your dream trip.</p>
          </div>
          <div class="">
            <div class="bg-primary rounded-xl h-full w-full"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="container pb-16 text-center">
      <img src="/images/logos/logo-gotolatam.svg" alt="" class="mx-auto w-52">
      <p class="my-6">We specialize in bringing you the finest in luxury South American Tours</p>
    </section>

    <footer class="h-72 bg-gray-800">

    </footer>


    <section class="modal-box">
      <transition name="fade" appear>
        <div class="modal-overlay"
             v-if="showModalProcess"
             @click="showModalProcess = false"></div>
      </transition>
      <transition name="pop" appear>
        <div class="modal flex items-center"
             role="dialog"
             v-if="showModalProcess"
        >
          <div class="w-full">
            <div class="grid grid-cols-1">
              <div class="">
                <h2 class="text-lg text-tertiary omnes-semibold mb-5">Cuando desea viajar</h2>
<!--                <p class="my-6">Espera la confirmación del pago para recibir tu póliza SOAT.  El procesamiento del pago puede tardar unos segundos.</p>-->
                <vue-tailwind-datepicker as-single no-input :formatter="formatter" v-model="dateValue" @click="onClickSomething()" class="calendar-w"/>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>

  </div>
</template>


<script lang="ts" setup>

const currentSlide = ref(0)
const showModalProcess = ref(false)
const dateValue = ref([])
const destination = ref()
const viewPopover = ref()
const mouseIsOverPopover = ref(false)
const formatter = ref({
  date: 'YYYY/MM/DD',
  month: 'MMM'
})


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

  function selectDestination (val:String) {
    destination.value = val
    viewPopover.value = 0
  }


const onClickSomething = () => {
  showModalProcess.value = false
}

</script>