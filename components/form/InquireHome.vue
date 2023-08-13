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
          <button type="button" class="btn-primary w-full">Create My Trip Now</button>
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
</template>

<script lang="ts" setup name="InquireHome">
const showModalProcess = ref(false)
const destination = ref()
const viewPopover = ref()

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