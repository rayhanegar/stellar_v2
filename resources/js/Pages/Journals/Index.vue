<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ReflectLogo from '@/Components/ReflectLogo.vue';
import WriteLogo from '@/Components/WriteLogo.vue';
import TodayCard from '@/Components/TodayCard.vue';
import TodayJournal from '@/Components/TodayJournal.vue';
import JournalCard from '@/Components/JournalCard.vue'; 
import NoteModal from '@/Components/NoteModal.vue';
import PreviewNoteModal from '@/Components/PreviewNoteModal.vue'; 
import AddLogo from '@/Components/AddLogo.vue';
import { ref } from 'vue';

defineProps(['journals']);

const showModal = ref(false);
const showPreviewModal = ref(false); 
const selectedJournal = ref(null);

const openPreviewModal = (journal) => {
    selectedJournal.value = journal;
    showPreviewModal.value = true;
};
</script>

<template>
    <Head>
        <title>Journals</title>
    </Head>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-center">Journals</h2>
            <p class="text-center">Here's what you've written so far.</p>
        </template>

        <div class="h-screen w-full flex flex-col space-y-4">
            <div class="w-full h-20 flex flex-row space-x-4">
                <button class="w-1/2 h-full bg-grey rounded-lg">
                    <p>All Entries</p>
                </button>
                <button class="w-1/2 h-full bg-grey rounded-lg">
                    <p>Today Entries</p>
                </button>
            </div>
            <div class="h-full grid grid-cols-3 grid-rows-2 gap-5">
                <JournalCard @click="openPreviewModal(journal)"
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

    <NoteModal v-model="showModal"/>
    <PreviewNoteModal v-model="showPreviewModal" :journal="selectedJournal"/>
</template>
