<template>
    <Nav></Nav>

    <slot />
    <modal-inquire></modal-inquire>
    <Footer></Footer>
</template>

<script lang="ts" setup name="default">
import Nav from "~/components/page/Nav.vue";
import Footer from "~/components/page/Footer.vue";
import ModalInquire from "~/components/modal/ModalInquire.vue";
</script>