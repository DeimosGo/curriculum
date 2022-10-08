<template>
  <main class="font-Josefin overflow-x-hidden">

    <Transition name="load">
      <KeepAlive>
        <Suspense>
          <template #default>
            <NewMain />
          </template>
          <template #fallback>
            <LoadingPage />
          </template>
        </Suspense>
      </KeepAlive>
    </Transition>
  </main>
</template>
<script setup>
import { defineAsyncComponent } from "vue";
import LoadingPage from "./Containers/LoadingPage.vue";
const NewMain = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(()=>resolve(import("./Pages/NewMain.vue")), 1500);
  });
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap");
@import "./../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
@import "./tailwind.css";

.load-leave-active {
  animation: offLoad 700ms;
}

@keyframes offLoad {
  0% {
    color: rgba(255, 255, 255,0);
    background-color: white;
  }
  100% {
    color: rgba(255, 255, 255,0);
    background-color: rgba(255, 255, 255,0);
    opacity: 0;
  }
}
</style>
