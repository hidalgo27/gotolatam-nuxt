import YouTube from 'vue3-youtube'
export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.component('YouTube', YouTube)
})
