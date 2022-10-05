<template>
    <section class="w-full h-90v flex flex-col items-center justify-start space-y-6 bg-gray-50">
        <h3 class="text-5xl py-2 lg:py-6 text-gray-900">I'm a...</h3>
        <div v-motion-slide-visible-right :delay="400" class="w-11/12 lg:w-5/12 h-80v forma text-gray-900 flex flex-col
        justify-between items-center bg-white py-4 shadow-xl">
            <p class="text-2xl text-center underline underline-offset-4">
                20 Years old
            </p>
            <div class="text-5xl text-center relative flex flex-row">
                <ul class="absolute overflow-hidden h-10 flex flex-col justify-start items-center
                top-0 left-0 right-0 m-auto space-y-1">
                    <li class="h-10 animate__letters">Web</li>
                    <li class="h-10">Mobile</li>
                </ul>
                <p class="mt-12">Developer</p>
            </div>
            <div class="w-5/12 lg:w-1/4 relative">
                <div class="w-full m-auto left-0 right-0 bottom-0 top-3 h-full absolute z-10 gradientImage"></div>
                <img class="w-full" src="../assets/profile.png" alt="David Castillo Ramirez">
            </div>
            <div class="flex flex-col justify-center items-center pt-6">
                <p class="text-2xl text-center">From</p>
                <div class="w-24 h-16 flex justify-center items-center shadow-xl rounded-xl overflow-hidden my-2">
                    <div class="w-1/3 bg-red-600 h-full"></div>
                    <div class="w-1/3 bg-white h-full"></div>
                    <div class="w-1/3 bg-red-600 h-full"></div>
                </div>
                <p class="text-2xl text-center">Peru</p>
            </div>
            <button @click="next"
                class="w-fit hover-underline text-2xl underline underline-offset-8 mt-16 pt-1 font-bold">
                Tell me more
            </button>
        </div>
    </section>
</template>
<script setup>
const next = () => {
    //window.scrollTo(0,main.value.clientHeight);
    document.querySelector("#skills").scrollIntoView({
        behavior: "smooth"
    });
};
</script>
<style scoped>
.hover-underline {
    display: inline-block;
    position: relative;
    color: rgba(17, 24, 39, 1);
    animation: color__change 4s forwards infinite;
}

@keyframes color__change {
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

.back {
    background: rgb(17, 24, 39);
}

.gradientImage {
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 4%, rgba(255, 255, 255, 0) 25%);
}

.hover-underline:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.animate__letters {
    animation: letters infinite 4s;
}

@keyframes letters {
    0% {
        margin-top: 0;
    }

    48% {
        margin-top: 0;
    }

    50% {
        margin-top: -40px;
    }

    98% {
        margin-top: -40px;
    }

    100% {
        margin-top: 0;
    }
}
</style>