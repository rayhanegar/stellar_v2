<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ReflectLogo from '@/Components/ReflectLogo.vue';
import WriteLogo from '@/Components/WriteLogo.vue';
import TodayCard from '@/Components/TodayCard.vue';
import TodayJournal from '@/Components/TodayJournal.vue';

const props = defineProps({
    user: Object,
    date: String,
});

</script>

<template>
    <Head title="Reflections" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-center">Reflections.</h2>
            <p class="text-center">Take a look at what you feel.</p>
        </template>
    </AuthenticatedLayout>

</template>
