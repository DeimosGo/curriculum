<template>
    <div class="w-full h-80v bg-slate-700 flex flex-col justify-between items-center py-10">
        <h3 class="text-white text-3xl lg:text-4xl">My Projects</h3>
        <div class="w-full h-70v overflow-y-scroll lg:overflow-y-visible items-center
        grid grid-cols-1 lg:grid-cols-2 justify-center gap-2 lg:gap-7">
            <ProjectCard :project="item" v-for="item in projects" :key="item" />
        </div>
    </div>
</template>
<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import { ref } from '@vue/reactivity';
const projects = ref([
    {
        name: "Curriculum",
        image: "https://cdn.discordapp.com/attachments/706896762857848886/1027315763125702696/curriculumProject.png",
        link: "https://github.com/DeimosGo/curriculum.git",
        page: "https://davidcr.ml",
    },
    {
        name: "Sistema administrativo Dolce Vita",
        image: "https://cdn.discordapp.com/attachments/706896762857848886/1027319586669989888/dolcevita.png",
        link: "https://github.com/DeimosGo/adminDolceVita.git",
        page: "https://dolcevitatesis.tk",
    },
]);
</script>