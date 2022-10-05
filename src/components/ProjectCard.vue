<template>
    <div id="asd" class="w-11/12 lg:w-10/12 bg-white flex flex-col justify-between items-center rounded-lg overflow-hidden
    pb-2 zoom shadow-2xl shadow-slate-900 place-self-center h-72 lg:h-full">
        <div class="w-full overflow-hidden h-3/5 border-b-2 border-slate-500">
            <img class="w-full object-cover transition-all duration-200 grayscale scale-150"
            :src="props.project.image"
                alt="Image example">
        </div>
        <p class="text-xl font-semibold text-center">{{props.project.name}}</p>
        <a target="_blank" :href="props.project.link" class="w-11/12 lg:w-9/12 flex justify-center items-center p-1 border border-slate-700
        space-x-2 hover:text-white hover:rounded-xl hover:bg-slate-700 transition-all duration-200 cursor-pointer">
            <i class="fa-brands fa-github text-3xl"></i>
            <span>
                See in Github
            </span>
        </a>
    </div>
</template>
<script setup>
import { defineProps, onMounted } from 'vue';
const props = defineProps(['project'])
onMounted(()=>{
    console.log(props);
});
</script>
<style scoped>
.zoom:hover img {
    transform: scale(1);
    filter: grayscale(0);
}
</style>