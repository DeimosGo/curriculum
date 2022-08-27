<template>
    <nav class="w-10/12 absolute top-0 flex lg:justify-between items-center lg:px-12 h-fit lg:h-20 text-white z-30 right-0 left-0 m-auto">
        <h3 class="pt-4 pb-2 lg:p-0 w-full lg:w-fit text-center text-2xl borde font-bold">Castillo Ramirez</h3>
        <ul class="hidden lg:flex justify-center text-lg space-x-10">
            <li><button @click="setValue(1)" class="buttonBar" :class="styleFirst">Informacion</button></li>
            <li><button @click="setValue(2)" class="buttonBar" :class="styleSecond">Habilidades</button></li>
            <li><button @click="setValue(3)" class="buttonBar" :class="styleThird">Portafolio</button></li>
            <li><button @click="setValue(4)" class="buttonBar" :class="styleFourth">Contacto</button></li>
        </ul>
    </nav>
</template>
<script setup>
import { computed, ref, defineEmits } from 'vue';
let clickFirst = ref(true);
let clickSecond = ref(false);
let clickThird = ref(false);
let clickForth = ref(false);
const emits = defineEmits(['changeSection']);
const setValue = (value)=>{
    if (value == 1 && !clickFirst.value) {
        emits('changeSection', 1);
        clickFirst.value = true;
        clickSecond.value = false;
        clickThird.value = false;
        clickForth.value = false;
    }else if (value == 2 && !clickSecond.value) {
        emits('changeSection', 2);
        clickFirst.value = false;
        clickSecond.value = true;
        clickThird.value = false;
        clickForth.value = false;
    }else if (value == 3 && !clickThird.value) {
        emits('changeSection', 3);
        clickFirst.value = false;
        clickSecond.value = false;
        clickThird.value = true;
        clickForth.value = false;
    }else if (value == 4 && !clickForth.value) {
        emits('changeSection', 4);
        clickFirst.value = false;
        clickSecond.value = false;
        clickThird.value = false;
        clickForth.value = true;
    }
};

const styleFirst = computed(()=>{
    if (clickFirst.value) {
        return 'border-b border-white -translate-y-1';
    } else {
        return '';
    }
});

const styleSecond = computed(()=>{
    if (clickSecond.value) {
        return 'border-b border-white -translate-y-1';
    } else {
        return '';
    }
});

const styleThird = computed(()=>{
    if (clickThird.value) {
        return 'border-b border-white -translate-y-1';
    } else {
        return '';
    }
});

const styleFourth = computed(()=>{
    if (clickForth.value) {
        return 'border-b border-white -translate-y-1';
    } else {
        return '';
    }
});

</script>