<template>
    <section ref="main" class="flex w-full h-100v lg:h-90v relative">
        <div class="flex flex-col w-full h-full items-center justify-center lg:w-full
        space-y-10 px-4 first relative">
            <h1 class="text-center text-4xl lg:text-5xl font-medium underline underline-offset-2">
                David Castillo Ramirez
            </h1>
            <p class="text-2xl lg:text-2xl text-center font-semibold">
                Let's make solutions that lead us to be better people in a better world.
            </p>
            <button @click="next" class="w-fit hover-underline text-xl border-b-2 border-white mt-16 pt-1
            transition-all duration-150 hover:translate-y-1 font-bold">
                Tell me about you
            </button>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const main = ref();
const next = () => {
    //window.scrollTo(0,main.value.clientHeight);
    document.querySelector("#second").scrollIntoView({
        behavior: "smooth"
    });
};
</script>

<style scoped>
.hover-underline {
    display: inline-block;
    position: relative;
    color: white;
    animation: change__color 8s forwards infinite steps(12);
}

.hover-underline:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    top: 0;
    left: 0;
    background-color: rgba(17, 24, 39, 1);
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.first {
    background-image: url(https://images.pexels.com/photos/267147/pexels-photo-267147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-attachment: fixed;
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    animation-name: animate;
    animation-duration: 25s;
    animation-direction: alternate-reverse;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: ease-in-out;
}

@keyframes animate {
    0% {
        background-image: url(https://images.pexels.com/photos/267147/pexels-photo-267147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    }

    50% {
        background-image: url(https://images.pexels.com/photos/361507/pexels-photo-361507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    }
}
</style>