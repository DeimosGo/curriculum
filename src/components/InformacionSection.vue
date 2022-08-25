<template>
<section
    class="w-full h-90v flex flex-col items-center justify-center px-0 lg:px-24 space-y-3 py-8"
    >
    <div
        class="w-11/12 lg:w-4/5 h-1/3 lg:h-30v card--main flex flex-col space-y-6 items-center justify-center text-gray-700 font-semibold shadow-xl"
        >
        <i class="fa-solid fa-laptop-code text-6xl"></i>
        <p class="w-full text-center text-2xl lg:text-4xl">David Castillo Ramirez</p>
    </div>

    <div
        class="w-11/12 lg:w-4/5 h-2/5 lg:h-30v grid grid-cols-2 text-gray-700 font-semibold text-3xl items-center gap-3 place-items-center"
    >
        <div
        class="cards w-full h-32 flex flex-col justify-center items-center space-y-4"
        >
        <i class="fa-solid fa-calendar-day"></i>
        <p class="w-full text-center text-xl lg:text-2xl">{{ edad }} años</p>
        </div>
        <div
        class="cards w-full h-32 flex flex-col justify-center items-center space-y-4 shadow-xl"
        >
        <i class="fa-solid fa-earth-americas"></i>
        <p class="w-full text-center text-xl lg:text-2xl">Piura - Peru</p>
        </div>
        <div
        class="cards w-full h-32 flex flex-col justify-center items-center space-y-4 shadow-xl"
        >
        <i class="fa-solid fa-user-tie"></i>
        <p class="w-full text-center text-xl lg:text-2xl">Web Developer</p>
        </div>
        <div
        class="cards w-full h-32 flex flex-col justify-center items-center space-y-4 shadow-xl"
        >
        <i class="fa-solid fa-graduation-cap"></i>
        <p class="w-full text-center text-xl lg:text-2xl">Egresado de Idat</p>
        </div>
    </div>
</section>
</template>
<script setup>
import getAge from "get-age";
const edad = getAge("2002-09-10");
</script>
<style scoped>
.card--main{
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 200ms;
}

.cards{
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 200ms;
}

.cards:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
}
</style>