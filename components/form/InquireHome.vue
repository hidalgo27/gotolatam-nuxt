<template>
  <div class="container mt-36 mb-16" >
    <div class="relative z-10 w-4/6 bg-white mx-auto p-6 rounded-2xl">
      <div class="grid grid-cols-5 gap-5 items-center">
        <div class="relative col-span-2">
          <input type="text" class="is-input-ico rounded-right-0 border-right-0 peer capitalize" readonly placeholder=" " @click.stop="toggle(1)"  v-model="destination">
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
            <div class="bg-white" :class="[shouldOpenUpwardsFirst?'box-option-select-top':'box-option-select']" v-show="viewPopover == 1" ref="dropdownFirst">
              <div class="grid items-start text-left p-2">
<!--                <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination(destino.url)" v-for="destino in listDestination">-->
<!--                  {{ destino.nombre }}</div>-->

                <div class="flex" v-for="destino in listDestination">
                  <input type="checkbox" :id="destino.id" class="peer hidden" :value="destino.url" v-model="destination" />
                  <label :for="destino.id" class="select-none cursor-pointer my-1 bg-gray-100 text-gray-800 rounded-full px-5 py-2 transition-colors duration-200 ease-in-out peer-checked:bg-[#D6DD85] peer-checked:text-primary"> {{ destino.nombre }} </label>
                </div>
<!--                <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Cusco')">Cusco</div>-->
<!--                <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Arequipa')">Arequipa</div>-->
<!--                <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Puno')">Puno</div>-->
              </div>
            </div>
          </transition>
        </div>
        <div class="relative col-span-1">
          <div class="relative">
            <input type="text" class="is-input-ico peer" placeholder=" " v-model="travelDate" @focus="showModalProcess = true">
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
              <vue-tailwind-datepicker as-single no-input :formatter="formatter" v-model="travelDate" @click="onClickSomething()" class="calendar-w"/>
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

                <div class="flex" v-for="destino in listDestination">
                  <input type="checkbox" :id="destino.id" class="peer hidden" :value="destino.url" v-model="destination" />
                  <label :for="destino.id" class="select-none cursor-pointer bg-gray-100 text-gray-800 rounded-full px-5 py-2 transition-colors duration-200 ease-in-out peer-checked:bg-[#D6DD85] peer-checked:text-primary"> {{ destino.nombre }} </label>
                </div>


<!--                <div class="p-8">-->
<!--                  <div-->
<!--                      v-for="country in listDestination"-->
<!--                      :key="country.id"-->
<!--                  >-->
<!--                    <checkbox-destination-->
<!--                        :label="country.nombre"-->
<!--                        :modelValue="selectedCountries[country.id]"-->
<!--                        @update:modelValue="updateCountrySelection(country.id, $event)"-->
<!--                    />-->
<!--                  </div>-->

<!--                  {{selectedCountries}}-->
<!--                </div>-->

              </div>
              <h3 class="text-xs text-tertiary omnes-semibold">You can choose one or more countries</h3>
              <h3 class="text-lg text-tertiary omnes-semibold my-5">Number of travelers</h3>
              <div class="flex justify-start gap-3 my-6 overflow-x-scroll focus:touch-pan-x">

                <div class="flex" v-for="n in 10" :key="n">
                  <input type="radio" :id="'radio_'+n" class="peer hidden" :value="n" v-model="traveller" />
                  <label :for="'radio_'+n" class="select-none cursor-pointer bg-gray-100 text-gray-800 rounded-lg px-5 py-2 transition-colors duration-200 ease-in-out peer-checked:bg-primary peer-checked:text-white"> {{ n }} </label>
                </div>

                <div class="flex">
                  <input type="radio" :id="'radio_11'" class="peer hidden" value="11+" v-model="traveller" />
                  <label :for="'radio_11'" class="select-none cursor-pointer bg-gray-100 text-gray-800 rounded-lg px-5 py-2 transition-colors duration-200 ease-in-out peer-checked:bg-primary peer-checked:text-white"> 11+ </label>
                </div>

              </div>
              <h3 class="text-lg text-tertiary omnes-semibold my-5">Hotel Category</h3>
              <div class="flex justify-start gap-3 my-6 overflow-x-scroll focus:touch-pan-x">

                <div class="flex">
                  <input type="checkbox" id="hotel_5" class="peer hidden" value="5" v-model="hotel" />
                  <label for="hotel_5" class="select-none cursor-pointer px-5 py-2 border border-gray-300 text-gray-400 rounded-lg divide-y divide-gray-400 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary peer-checked:divide-primary  ">
                    <div class="pb-1">
                      <img src="/icons/hotel.svg" alt="">
                      <h4 class=" pt-1">Luxury</h4>
                    </div>
                    <div class="flex pt-2 gap-1">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                    </div>
                  </label>
                </div>

                <div class="flex">
                  <input type="checkbox" id="hotel_4" class="peer hidden" value="4" v-model="hotel" />
                  <label for="hotel_4" class="select-none cursor-pointer px-5 py-2 border border-gray-300 text-gray-400 rounded-lg divide-y divide-gray-400 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary peer-checked:divide-primary  ">
                    <div class="pb-1">
                      <img src="/icons/hotel.svg" alt="">
                      <h4 class=" pt-1">Superior</h4>
                    </div>
                    <div class="flex pt-2 gap-1">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                    </div>
                  </label>
                </div>

                <div class="flex">
                  <input type="checkbox" id="hotel_3" class="peer hidden" value="3" v-model="hotel" />
                  <label for="hotel_3" class="select-none cursor-pointer px-5 py-2 border border-gray-300 text-gray-400 rounded-lg divide-y divide-gray-400 transition-colors duration-200 ease-in-out peer-checked:border-2 peer-checked:border-primary peer-checked:text-primary peer-checked:divide-primary  ">
                    <div class="pb-1">
                      <img src="/icons/hotel.svg" alt="">
                      <h4 class=" pt-1">Best Value</h4>
                    </div>
                    <div class="flex pt-2 gap-1">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                      <img src="/icons/star.svg" alt="" class="w-2">
                    </div>
                  </label>
                </div>

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
                        v-model="fullName"
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
                        v-model="phone"
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
                        v-model="email"
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
                        v-model="comment"
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

import {usePackageStore} from "~/stores/packages";
import CheckboxDestination from "~/components/form/checkboxDestination.vue";
const packageStore = usePackageStore()

const showModalProcess = ref(false)
const showModalInquire = ref(false)

const viewPopover = ref()

const travelDate = ref()
const traveller = ref()
const hotel = ref([])
const destination = ref([])
const fullName = ref()
const phone = ref()
const email = ref()
const comment = ref()

const dropdownFirst = ref(null);
const shouldOpenUpwardsFirst = ref(false);

const listDestination = ref([])

const getPais = async () => {
  const res = await packageStore.getPais()

  listDestination.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}


function selectDestination (val:any) {
  destination.value[0] = val
  // viewPopover.value = 0
}


const onClickSomething = () => {
  showModalProcess.value = false
}


const toggle = (dropdown:any) => {

  if (dropdown === 1) {
    viewPopover.value = !viewPopover.value;
  }

  // checkDropdownPosition(dropdown);

  self.timer = setTimeout(function() {
    checkDropdownPosition(dropdown);

  }, 100)

}

const formatter = ref({
  date: 'YYYY/MM/DD',
  month: 'MMM'
})


const checkDropdownPosition = (dropdown) => {
  const dropdownElement = dropdown === 1 ? dropdownFirst.value : null;

  if (!dropdownElement) return;

  const rect = dropdownElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (dropdown === 1) {
    shouldOpenUpwardsFirst.value = rect.bottom > windowHeight;
  }




};



const handleClickOutside = (event) => {
  if (dropdownFirst.value && !dropdownFirst.value.contains(event.target)) {
    viewPopover.value = 0
  }
}



const shouldOpenUpwards = (dropdown) => {
  return dropdown === 'first' ? shouldOpenUpwardsFirst.value : false;
};

const shouldOpenDownwards = (dropdown) => {
  return !shouldOpenUpwards(dropdown);
};

// const selectedCountries = ref({})
//
// const updateCountrySelection = (id:any, value:any) => {
//   selectedCountries.value[id] = value
// }
const windowHeight = ref(null);

const updateWindowHeight = () => {
  if (typeof window !== 'undefined') {
    windowHeight.value = window.innerHeight;
  }
};

onMounted(async () => {
  document.addEventListener('click', handleClickOutside);
  await getPais()
  watchEffect(() => {
    checkDropdownPosition(1);
  });

  if (typeof window !== 'undefined') {
    windowHeight.value = window.innerHeight;
    // console.log(windowHeight.value)
    window.addEventListener('resize', updateWindowHeight);
  }

})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowHeight);
  }
})

</script>