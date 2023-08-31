<template>
    <Nav></Nav>

    <slot />

    <Footer></Footer>
</template>

<script lang="ts" setup name="default">
import Nav from "~/components/page/Nav.vue";
import Footer from "~/components/page/Footer.vue";
</script>