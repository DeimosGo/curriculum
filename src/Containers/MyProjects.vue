<template>
    <div class="w-full h-90v bg-slate-700 flex flex-col justify-between items-center py-10">
        <h3 class="text-white text-4xl">My Projects</h3>
        <div class="w-full h-70v overflow-y-scroll lg:overflow-y-visible items-center
        grid grid-cols-1 lg:grid-cols-3 justify-center gap-7">
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
        link: "https://github.com/DeimosGo/curriculum.git"
    },
    {
        name: "Sistema administrativo Dolce Vita",
        image: "https://cdn.discordapp.com/attachments/706896762857848886/1027319586669989888/dolcevita.png",
        link: "https://github.com/DeimosGo/adminDolceVita.git"
    },
    {
        name: "Curriculum",
        image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac_apps/pages/macos-big-sur-pages-10-3-templates-books.jpg",
        link: "https://github.com/DeimosGo/curriculum.git"
    },
    {
        name: "Curriculum",
        image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac_apps/pages/macos-big-sur-pages-10-3-templates-books.jpg",
        link: "https://github.com/DeimosGo/curriculum.git"
    },
    {
        name: "Curriculum",
        image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac_apps/pages/macos-big-sur-pages-10-3-templates-books.jpg",
        link: "https://github.com/DeimosGo/curriculum.git"
    }
]);
</script>