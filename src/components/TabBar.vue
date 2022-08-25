<template>
    <div class="w-full absolute bottom-0 flex lg:hidden justify-center items-center h-fit text-gray-400 bg-white z-30">
        <ul class="flex space-x-4 text-base p-1">
            <li>
                <button @click="setValue(1)" class="buttonTab" :class="styleFirst">
                <i class="fa-solid fa-circle-info"></i>
                <p>Informacion</p>
                </button>
            </li>
            <li>
                <button @click="setValue(2)" class="buttonTab" :class="styleSecond">
                <i class="fa-solid fa-dumbbell"></i>
                <p>Habilidades</p>
                </button>
            </li>
            <li>
                <button @click="setValue(3)" class="buttonTab" :class="styleThird">
                <i class="fa-solid fa-folder-open"></i>
                <p>Portafolio</p>
                </button>
            </li>
            <li>
                <button @click="setValue(4)" class="buttonTab" :class="styleFourth">
                <i class="fa-solid fa-headset"></i>
                <p>Contacto</p>
                </button>
            </li>
        </ul>
    </div>
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
        return 'text-gray-900';
    } else {
        return '';
    }
});

const styleSecond = computed(()=>{
    if (clickSecond.value) {
        return 'text-gray-900';
    } else {
        return '';
    }
});

const styleThird = computed(()=>{
    if (clickThird.value) {
        return 'text-gray-900';
    } else {
        return '';
    }
});

const styleFourth = computed(()=>{
    if (clickForth.value) {
        return 'text-gray-900';
    } else {
        return '';
    }
});

</script>