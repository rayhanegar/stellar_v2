<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-black text-white bg-gradient-to-br from-black from-30% to-lavender/80">
        <div>
            <Link href="/">
                <ApplicationLogo class="w-20 h-20 fill-current text-gray-500" />
            </Link>
        </div>

        <div
            class="w-full sm:max-w-md bg-black/20 backdrop-blur-lg rounded-lg border border-mediumgrey shadow-lg px-5 mx-5 py-5 my-5"
        >
            <slot />
        </div>
    </div>
</template>
