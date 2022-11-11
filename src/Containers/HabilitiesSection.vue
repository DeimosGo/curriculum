<template>
    <section class="w-full h-90v flex flex-col justify-between items-center space-y-4 lg:space-y-4 bg-gray-50">
        <h2 class="text-3xl pt-8">My skills</h2>
        <div class="w-full flex-col items-center justify-center space-y-4 overflow-y-scroll lg:overflow-y-visible">
            <div class="p-1 lg:pl-4 flex h-fit justify-center space-x-2
        lg:space-x-7 w-full items-center lg:h-1/6">
                <button @click="change(1)"
                    class="w-1/2 lg:w-1/6 rounded-full p-1 font-bold border transition-all duration-150"
                    :class="classFirst">
                    technologicals
                </button>
                <button @click="change(2)"
                    class="border w-1/2 lg:w-1/6 rounded-full p-1 font-bold transition-all duration-150"
                    :class="classSecond">
                    Soft Skills
                </button>
            </div>
            <div v-motion-slide-visible-left :delay="400"
                class="overflow-y-scroll lg:overflow-y-visible w-full flex justify-center items-center">
                <Transition name="tecno">
                    <TecnoHablities v-if="first" />
                </Transition>
                <Transition name="lab">
                    <SocialHabilities v-if="second" />
                </Transition>
            </div>
        </div>
        <div class="w-full h-1/6 flex justify-center items-center">
            <button @click="next" class="w-fit hover-underline text-2xl underline underline-offset-8 pt-1
            transition-all duration-150 font-bold">
                Show me your work
            </button>
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import TecnoHablities from "./../components/TecnoHablities.vue";
import SocialHabilities from "./../components/SocialHabilities.vue";
const first = ref(true);
const second = ref(false);
const classFirst = ref('bg-white border-white text-gray-800');
const classSecond = ref('border-white text-white');
const next = () => {
    //window.scrollTo(0,main.value.clientHeight);
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
};
onMounted(() => {
    change(1);
})
const change = (valor) => {
    if (valor === 1) {
        second.value = false;
        setTimeout(() => first.value = true, 250);
        classFirst.value = 'bg-gray-700 text-white';
        classSecond.value = 'border-gray-700 text-gray-700 hover:scale-105';
    } else {
        first.value = false;
        setTimeout(() => second.value = true, 250);
        classSecond.value = 'bg-gray-700 text-white';
        classFirst.value = 'border-gray-700 text-gray-700 hover:scale-105';
    }
};
</script>
<style scoped>
.hover-underline {
    display: inline-block;
    position: relative;
    color: rgba(17, 24, 39, 1);
    margin-bottom: 12px;
    animation: change__color 3s backwards infinite;
    transition: all 200ms;
}

@keyframes change__color {
    0% {
        color: rgba(0, 212, 135, 1);
    }

    33.33% {
        color: rgba(10, 25, 176, 1);
    }

    66.66% {
        color: rgba(137, 4, 183, 1);
    }

    100% {
        color: rgba(0, 212, 135, 1);
    }
}

.hover-underline:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    top: 0;
    left: 0;
    background: rgb(0, 212, 135);
    background: linear-gradient(90deg, rgba(0, 212, 135, 1) 20%, rgba(10, 25, 176, 1) 50%, rgba(137, 4, 183, 1) 100%);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.tecno-enter-active {
    animation: showTec 500ms;
}

@keyframes showTec {
    0% {
        opacity: 0;
    }
}

.tecno-leave-active {
    animation: hide 250ms;
}

@keyframes hide {
    100% {
        opacity: 0;
    }
}

.lab-enter-active {
    animation: show 250ms;
}

@keyframes show {
    0% {
        opacity: 0;
    }
}

.lab-leave-active {
    animation: hideLab 250ms;
}

@keyframes hideLab {
    100% {
        opacity: 0;
    }
}
</style>