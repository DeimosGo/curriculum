<template>
    <FirstModule />
    <WhoAmI id="second"/>
    <HabilitiesSection id="skills"/>
    <MyProjects id="projects"/>
</template>
<script setup>
    import FirstModule from "../Containers/FirstModule.vue";
import HabilitiesSection from "../Containers/HabilitiesSection.vue";
import WhoAmI from "../Containers/WhoAmI.vue";
import MyProjects from "../Containers/MyProjects.vue";
</script>