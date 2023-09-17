<template>
    <Headers></Headers>

    <slot />
    <modal-inquire></modal-inquire>
  <modal-menu></modal-menu>
    <Footer></Footer>
</template>

<script lang="ts" setup >
import Footer from "~/components/page/Footer.vue";
import ModalInquire from "~/components/modal/ModalInquire.vue";
import Headers from "~/components/page/Headers.vue";
import ModalMenu from "~/components/modal/ModalMenu.vue";
</script>