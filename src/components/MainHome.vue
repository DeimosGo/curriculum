<template>
    <main class="relative">
        <NavBar @changeSection="changeSection" />
        <transition name="information">
            <InformacionSection v-if="first" class="absolute z-10 opacity-100" />
        </transition>
        <transition name="habilities">
            <HabilitiesSection v-if="second" class="absolute z-10"/>
        </transition>
        <transition name="habilities">
            <PortafolioComponent v-if="third" class="absolute z-10"/>
        </transition>
        <BackGround />
        <TabBar @changeSection="changeSection" />
    </main>
</template>
<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";
import Glide from "@glidejs/glide";
import BackGround from "./BackGround.vue";
import TabBar from "./TabBar.vue";
const HabilitiesSection = defineAsyncComponent(()=> import("../Containers/HabilitiesSection.vue"));
const PortafolioComponent =defineAsyncComponent(()=> import("./PortafolioComponent.vue"));

const NavBar = defineAsyncComponent(() => import("./NavBar.vue"));
const InformacionSection = defineAsyncComponent(() =>
  import("./InformacionSection.vue")
);
const first = ref(false);
const second = ref(false);
const third = ref(false);
const fourth = ref(false);

const changeSection = (value)=>{
  if (value == 1 && !first.value) {
    first.value = true;
    second.value = false;
    third.value = false;
    fourth.value = false;
  }else if (value == 2 && !second.value) {
    first.value = false;
    second.value = true;
    third.value = false;
    fourth.value = false;
  }else if (value == 3 && !third.value) {
    first.value = false;
    second.value = false;
    third.value = true;
    fourth.value = false;
  }else if (value == 4 && !fourth.value) {
    first.value = false;
    second.value = false;
    third.value = false;
    fourth.value = true;
  }
};

onMounted(() => {
  new Glide(".glide", {
    autoplay: 8000,
    hoverpause: false,
    swipeThreshold: false,
    dragThreshold: false,
  }).mount();
  setTimeout(()=>{
  changeSection(1);
}, 500);
});
</script>
<style scoped>
.habilities-enter-active{
  animation: showHabs 800ms;
}

@keyframes showHabs {
  0%{
    opacity: 0;
  }
}

.information-enter-active{
  animation: showInfo 200ms;
}
@keyframes showInfo {
  0%{
    transform: scale(0.9);
    opacity: 0;
  }
}

.information-leave-active{
  animation: hideInfo 150ms;
}
@keyframes hideInfo {
  100%{
    opacity: 0;
  }
}

</style>