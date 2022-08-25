<template>
  <div class="font-Josefin main w-full h-100v overflow-hidden">
    <transition name="load">
      <LoadingPage v-if="!carga" />
      <MainHome v-else />
    </transition>
  </div>
</template>
<script setup>
import { ref } from "vue";
import LoadingPage from "./components/LoadingPage.vue";
import MainHome from "./components/MainHome.vue";
const carga = ref(false);
window.onload = ()=>{
  setTimeout(()=>carga.value = true,1000)
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap");
@import "./../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
@import "./tailwind.css";

.load-leave-active{
  animation: offLoad 900ms;
}
@keyframes offLoad {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
