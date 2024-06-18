<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import TodayCard from '@/Components/TodayCard.vue';
import JournalCard from '@/Components/JournalCard.vue'; 
import NoteModal from '@/Components/NoteModal.vue';
import PreviewNoteModal from '@/Components/PreviewNoteModal.vue'; 
import AddLogo from '@/Components/AddLogo.vue';
import { ref, computed } from 'vue';
import { Inertia } from '@inertiajs/inertia';

const { props } = usePage();
const journals = computed(() => props.journals.data);
const links = computed(() => props.journals.links);

// defineProps(['journals']);

const showModal = ref(false);
const showPreviewModal = ref(false); 
const selectedJournal = ref(null);

const filter = ref('');

const openPreviewModal = (journal) => {
    console.log("Opening journal:", journal);
    selectedJournal.value = journal;
    showPreviewModal.value = true;
};

function navigate(pageUrl) {
    if (pageUrl) {
        console.log("Navigate clicked");
        Inertia.visit(pageUrl, { data: { filter: filter.value} });
    }
}

function fetchJournals(selectedFilter=''){
    console.log("Fetching journals with filter: ", selectedFilter);
    filter.value = selectedFilter;
    Inertia.get('/journals', {filter: selectedFilter}, {preserveState: false});
}

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

        <div class="w-full flex flex-col space-y-4 overflow-y-auto">
            <div class="w-full h-14 flex flex-row space-x-4">
                <button :class="{'bg-white text-black font-bold': filter === ''}" @click="fetchJournals('')" class="w-1/2 h-full rounded-lg">
                    <p>All Entries</p>
                </button>
                <button :class="{'bg-white text-black font-bold': filter === 'today'}" @click="fetchJournals('today')" class="w-1/2 h-full rounded-lg">
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
            <div class="flex flex-row justify-between">
                <button @click="navigate(props.journals.prev_page_url)" :disabled="!props.journals.prev_page_url">
                    Previous
                </button>
                <span>Page {{ props.journals.current_page }} of {{ props.journals.last_page }}</span>
                <button @click="navigate(props.journals.next_page_url)" :disabled="!props.journals.next_page_url">
                    Next
                </button>
            </div>
        </div>
    </AuthenticatedLayout>

    <NoteModal v-model="showModal"/>
    <PreviewNoteModal v-model="showPreviewModal" :journal="selectedJournal"/>
</template>
