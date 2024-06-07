<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'text-black w-full flex-grow flex-shrink-0 px-2 py-2 font-bold leading-5 bg-white rounded-lg focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
        : 'text-white w-full flex-grow flex-shrink-0 px-2 py-2 font-regular leading-5 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
);

</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
