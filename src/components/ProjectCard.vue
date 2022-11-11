<template>
    <div id="asd" class="w-11/12 lg:w-10/12 bg-white flex flex-col justify-between items-center rounded-lg overflow-hidden
    pb-2 zoom shadow-2xl shadow-slate-900 place-self-center h-[320px] lg:h-3/4">
        <div class="w-full overflow-hidden h-2/5 lg:h-3/5 border-b-2 border-slate-500">
            <img class="w-full object-cover transition-all duration-200 grayscale scale-150" :src="props.project.image"
                alt="Image example">
        </div>
        <p class="text-xl font-semibold text-center">{{props.project.name}}</p>
        <div class="w-full flex flex-col items-center justify-center space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2 px-2">
            <a target="_blank" :href="props.project.link"
                class="w-11/12 text-xl lg:w-1/2 flex justify-center items-center p-1 border border-slate-700 space-x-2 hover:text-white
                rounded-md hover:rounded-xl hover:bg-slate-700 transition-all duration-200 cursor-pointer">
                <i class="fa-brands fa-github text-xl lg:text-3xl"></i>
                <span>
                    Code
                </span>
            </a>
            <a target="_blank" :href="props.project.page"
                class="w-11/12 text-xl lg:w-1/2 flex justify-center items-center text-sky-500 p-1 border border-sky-500 space-x-2
                hover:text-white rounded-md hover:rounded-xl hover:bg-sky-500 transition-all duration-200 cursor-pointer">
                <i class="fa-solid fa-globe text-xl lg:text-3xl"></i>
                <span>
                    Deployment
                </span>
            </a>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(['project']);
</script>
<style scoped>
.zoom:hover img {
    transform: scale(1);
    filter: grayscale(0);
}
</style>