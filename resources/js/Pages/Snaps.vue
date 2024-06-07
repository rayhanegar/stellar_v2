<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ReflectLogo from '@/Components/ReflectLogo.vue';
import WriteLogo from '@/Components/WriteLogo.vue';
import TodayCard from '@/Components/TodayCard.vue';
import TodayJournal from '@/Components/TodayJournal.vue';
import SnapCard from '@/Components/SnapCard.vue';

const props = defineProps({
    user: Object,
    date: String,
});

</script>

<template>
    <Head title="Snaps" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-center">Snaps.</h2>
            <p class="text-center">Galleries of photos that represents your day.</p>
        </template>

        <div class="h-screen w-full flex flex-col space-y-4">
            <div class="w-full h-20 flex flex-row space-x-4">
                <button class="w-1/2 h-full bg-mediumgrey rounded-lg">
                    <p>All Entries</p>
                </button>
                <button class="w-1/2 h-full bg-mediumgrey rounded-lg">
                    <p>Today Entries</p>
                </button>
            </div>
            <div class="h-full grid grid-cols-3 grid-rows-2 gap-5">
                <SnapCard @click="openPreviewModal(journal)"
                    v-for="journal in journals"
                    :key="journal.id"
                    :journal="journal"
                />
                <TodayCard @click="showModal = true">
                    <template #icon>
                        <AddLogo />
                    </template>
                </TodayCard>
            </div>
        </div>
    </AuthenticatedLayout>

</template>
