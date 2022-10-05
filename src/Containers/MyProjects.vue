<template>
    <div class="w-full h-90v bg-slate-700 flex flex-col justify-between items-center py-10">
        <h3 class="text-white text-4xl">My Projects</h3>
        <div class="w-full h-70v grid grid-cols-3 justify-center gap-7">
            <ProjectCard v-for="i in 6" :key="i" />
        </div>
    </div>
</template>
<script setup>
import ProjectCard from '@/components/ProjectCard.vue';

</script>