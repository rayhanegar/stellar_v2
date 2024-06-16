<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ReflectLogo from '@/Components/ReflectLogo.vue';
import WriteLogo from '@/Components/WriteLogo.vue';
import TodayCard from '@/Components/TodayCard.vue';
import TodayJournal from '@/Components/TodayJournal.vue';
import NoteModal from '@/Components/NoteModal.vue';
import PreviewNoteModal from '@/Components/PreviewNoteModal.vue'; 
import { computed, ref } from 'vue';

const props = defineProps({
    user: Object,
    date: String,
    todayJournals: Array
});

const showModal = ref(false);
const showPreviewModal = ref(false); 
const selectedJournal = ref(null);

const openPreviewModal = (journal) => {
    console.log("Opening journal:", journal);
    selectedJournal.value = journal;
    showPreviewModal.value = true;
};

const limitedJournals = computed(() => props.todayJournals.slice(0,3));
</script>

<template>
    <Head>
        <title>Dashboard</title>
    </Head>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-center">Good Day, {{ user.name }}.</h2>
            <p class="text-center">Today is {{ date }}. Let's do something good for yourself.</p>
        </template>

        <div class="h-screen w-full flex flex-col overflow-y-auto">
            <div class="h-full w-full grid grid-cols-2 gap-5">
                <div>
                    <TodayCard @click="showModal = true" text="Write your thoughts, plan your day, and more.">
                        <template #icon>
                            <WriteLogo/>
                        </template>
                    </TodayCard>
                </div>
                <div>
                    <TodayCard :href="route('reflections')" text="Let's reflect on what you learn and how you feel today.">
                        <template #icon>
                            <ReflectLogo/>
                        </template>
                    </TodayCard>
                </div>
                <div class="h-full w-full m-0 p-0 space-y-5">
                    <h3>Today's Journals.</h3>
                    <div v-if="limitedJournals.length" class="max-h-1/2 flex flex-col space-y-4 overflow-auto">
                        <TodayJournal @click="openPreviewModal(journal)" v-for="journal in limitedJournals" 
                            :key="journal.id" 
                            :journal="journal" 
                        />
                        <p>View more on Journals page.</p>
                    </div>
                    <div v-else class="text-center py-4">
                        Whoops, no journal yet!
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
    
    <NoteModal v-model="showModal"/>
    <PreviewNoteModal v-model="showPreviewModal" :journal="selectedJournal"/>

</template>