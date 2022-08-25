<template>
    <section class="w-full h-90v flex flex-col absolute justify-start items-center pt-12 space-y-4 lg:space-y-10">
        <div class="p-1 lg:pl-4 mt-6 lg:mt-2 flex h-fit justify-center space-x-2 lg:space-x-7 w-full items-center lg:h-1/6">
            <button @click="change(1)" class="w-1/2 lg:w-1/6 rounded-full p-1 font-bold border transition-all duration-150" :class="classFirst">
                Tecnologicas
            </button>
            <button @click="change(2)" class="border w-1/2 lg:w-1/6 rounded-full p-1 font-bold transition-all duration-150
            hover:text-gray-800 hover:bg-white" :class="classSecond">
                Laborales
            </button>
        </div>
        <transition name="tecno">
            <TecnoHablities v-if="first" />
        </transition>
        <transition name="lab">
            <SocialHabilities v-if="second" />
        </transition>
    </section>
</template>
<script setup>
import { onMounted, ref, defineAsyncComponent } from "vue";
const TecnoHablities = defineAsyncComponent(()=>import("./TecnoHablities.vue"));
const SocialHabilities = defineAsyncComponent(()=>import("./SocialHabilities.vue"));
const first = ref(true);
const second = ref(false);
const classFirst = ref('bg-white border-white text-gray-800');
const classSecond = ref('border-white text-white');
onMounted(()=>{
    change(1);
})
const change=(valor)=>{
    if (valor === 1) {
        second.value = false;
        setTimeout(()=>first.value = true, 250);
        classFirst.value = 'bg-white border-white text-gray-800';
        classSecond.value = 'border-white text-white';
    } else {
        first.value = false;
        setTimeout(()=>second.value = true, 250);
        classFirst.value = 'border-white text-white';
        classSecond.value = 'bg-white border-white text-gray-800';
    }
}
</script>
<style>
.tecno-enter-active{
    animation: showTec 500ms;
}
@keyframes showTec {
    0%{
        opacity: 0;
    }
}
.tecno-leave-active{
    animation: hide 250ms;
}
@keyframes hide {
    100%{
        opacity: 0;
    }
}

.lab-enter-active{
    animation: show 250ms;
}
@keyframes show {
    0%{
        opacity: 0;
    }
}

.lab-leave-active{
    animation: hideLab 250ms;
}
@keyframes hideLab {
    100%{
        opacity: 0;
    }
}

</style>