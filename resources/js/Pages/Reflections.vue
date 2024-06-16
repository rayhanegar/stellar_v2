<script setup>
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/inertia-vue3';
import ReflectLogo from '@/Components/ReflectLogo.vue'; 
import WriteLogo from '@/Components/WriteLogo.vue';
import TodayCard from '@/Components/TodayCard.vue';
import TodayJournal from '@/Components/TodayJournal.vue';
import { Vue3Slider } from 'vue3-slider'; 

const props = defineProps({
    user: Object,
    date: String,
});

const feeling = ref('');  // Initialize feeling as an empty string
const sliderValue = ref(50);  // Initialize sliderValue, for example starting at 50
</script>

<template>
    <Head title="Reflections" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-center">Reflections</h2>
            <p class="text-center">Take a look at what you feel.</p>
        </template>
        <template>
  <div class="custom-slider">
    <input
      v-model="sliderValue"
      type="range"
      min="0"
      max="100"
      class="slider"
    />
    <input v-model="sliderValue" type="number" class="input" />
  </div>
</template>
        <div class="p-6 text-white bg-black rounded-lg">
            <h3 class="text-lg font-semibold">How are you today?</h3>
            <p>How do you feel?</p>
            <input v-model="feeling" type="text" class="w-full mt-2 mb-4 p-2 border rounded text-black" placeholder="Today I felt Moderately Rested">
            <Vue3Slider v-model="sliderValue" :min="0" :max="100" :tooltip="'always'" class="slider-custom"/>
            <div class="flex justify-between text-xs mt-4">
                <span>Not at all</span>
                <span>Very</span>
            </div>
            <button class="w-full py-2 mt-4 bg-purple-600 text-white rounded-lg">Submit</button>
        </div>
    </AuthenticatedLayout>
</template>

<style>
.slider-custom .vue-slider-dot {
    background-color: #5B21B6; 
}

.slider-custom .vue-slider-process {
    background-color: #A78BFA; 
}

.slider-custom .vue-slider-mark {
    display: none; /* Hide scale marks if any */
}

.slider-custom .vue-slider-dot-tooltip {
    background-color: #4C1D95; /* Tooltip background */
    color: rgb(0, 0, 0); /* Tooltip text color */
}
</style>


