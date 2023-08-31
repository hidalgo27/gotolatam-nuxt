<template>
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
          <button type="button" class="btn-primary w-full" @click="showModalInquire = true">Create My Trip Now</button>
        </div>
      </div>
    </div>
  </div>

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

  <section class="modal-box">
    <transition name="fade" appear>
      <div class="modal-overlay"
           v-if="showModalInquire"
           @click="showModalInquire = false"></div>
    </transition>
    <transition name="pop" appear>
      <div class="modal overflow-y-scroll"
           role="dialog"
           v-if="showModalInquire"
      >
        <div class="w-full">
          <div class="grid grid-cols-1">
            <div class="text-left">
              <h2 class="text-lg text-tertiary omnes-semibold mb-5">What countries do you want to visit?</h2>
              <div class="flex justify-start gap-3 my-6 overflow-x-scroll focus:touch-pan-x">
                <button type="button" class="px-5 py-2 bg-[#D6DD85] text-primary font-medium rounded-full">Perú</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Bolivia</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Chile</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Ecuador</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Colombia</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Argentina</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Brasil</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Colombia</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Argentina</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Brasil</button>
              </div>
              <h3 class="text-xs text-tertiary omnes-semibold">You can choose one or more countries</h3>
              <h3 class="text-lg text-tertiary omnes-semibold my-5">Number of travelers</h3>
              <div class="flex justify-start gap-3 my-6 overflow-x-scroll focus:touch-pan-x">
                <button type="button" class="px-5 py-2 bg-primary text-white font-medium rounded-lg">1</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg">2</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg">3</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg">4</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg">5</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg">6</button>
                <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg">7</button>
              </div>
              <h3 class="text-lg text-tertiary omnes-semibold my-5">Hotel Category</h3>
              <div class="flex justify-start gap-3 my-6 overflow-x-scroll focus:touch-pan-x">
                <button type="button" class="px-5 py-2 border-2 border-primary font-medium rounded-lg divide-y divide-primary">
                  <div class="pb-1">
                    <img src="/icons/hotel.svg" alt="">
                    <h4 class="text-primary pt-1">Luxury</h4>
                  </div>
                  <div class="flex pt-2 gap-1">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                  </div>
                </button>
                <button type="button" class="px-5 py-2 border border-gray-300 font-medium rounded-lg divide-y divide-gray-400">
                  <div class="pb-1">
                    <img src="/icons/hotel.svg" alt="" class="opacity-50">
                    <h4 class="pt-1 text-gray-400">Superior</h4>
                  </div>
                  <div class="flex pt-2 gap-1">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                  </div>
                </button>
                <button type="button" class="px-5 py-2 border border-gray-300 font-medium rounded-lg divide-y divide-gray-400">
                  <div class="pb-1">
                    <img src="/icons/hotel.svg" alt="" class="opacity-50">
                    <h4 class="pt-1 text-gray-400">Best Value</h4>
                  </div>
                  <div class="flex pt-2 gap-1">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                  </div>
                </button>
                <button type="button" class="px-5 py-2 border border-gray-300 font-medium rounded-lg divide-y divide-gray-400">
                  <div class="pb-1">
                    <img src="/icons/hotel.svg" alt="" class="opacity-50">
                    <h4 class="pt-1 text-gray-400">Budget</h4>
                  </div>
                  <div class="flex pt-2 gap-1">
                    <img src="/icons/star.svg" alt="" class="w-2">
                    <img src="/icons/star.svg" alt="" class="w-2">
                  </div>
                </button>

              </div>

              <h3 class="text-lg text-tertiary omnes-semibold my-5">Contact information</h3>

              <div class="grid grid-cols-1 gap-3">
                <div class="relative">
                  <div class="relative">
                    <input
                        type="text"
                        name="search"
                        class="is-input-ico peer"
                        placeholder=" "
                        autocomplete="off"
                    />
                    <label class="is-input-ico-label">Full Name</label>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="relative">
                  <div class="relative">
                    <input
                        type="text"
                        name="search"
                        class="is-input-ico peer"
                        placeholder=" "
                        autocomplete="off"
                    />
                    <label class="is-input-ico-label">Phone Number</label>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="relative">
                  <div class="relative">
                    <input
                        type="text"
                        name="search"
                        class="is-input-ico peer"
                        placeholder=" "
                        autocomplete="off"
                    />
                    <label class="is-input-ico-label">Email</label>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                      </svg>
                    </div>
                  </div>
                </div>


                <div class="relative">
                  <div class="relative">
                    <textarea
                        type="text"
                        name="search"
                        class="is-input-ico peer"
                        placeholder=" "
                        autocomplete="off"
                    />
                    <label class="is-input-ico-label text-xs md:text-[15px]">What can we do for you? We have it all. Just ask!</label>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                    </div>
                  </div>
                </div>



              </div>

              <div class="grid grid-cols-1 mt-4">
                <button type="button" class="btn-primary">Create My Trip Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>

</template>

<script lang="ts" setup name="InquireHome">
const showModalProcess = ref(false)
const showModalInquire = ref(false)
const destination = ref()
const viewPopover = ref()

const dateValue = ref()

function selectDestination (val:String) {
  destination.value = val
  viewPopover.value = 0
}


const onClickSomething = () => {
  showModalProcess.value = false
}

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
const formatter = ref({
  date: 'YYYY/MM/DD',
  month: 'MMM'
})

</script>