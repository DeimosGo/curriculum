<template>
    <FirstModule />
    <WhoAmI id="second"/>
    <HabilitiesSection id="skills"/>
    <MyProjects id="projects"/>
    <ContactMe />
</template>
<script setup>
    import FirstModule from "../Containers/FirstModule.vue";
import HabilitiesSection from "../Containers/HabilitiesSection.vue";
import WhoAmI from "../Containers/WhoAmI.vue";
import MyProjects from "../Containers/MyProjects.vue";
import ContactMe from "@/Containers/ContactMe.vue";
</script>