<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage} from '@inertiajs/vue3';
import TodayCard from '@/Components/TodayCard.vue';
import SnapCard from '@/Components/SnapCard.vue';
import AddLogo from '@/Components/AddLogo.vue';
import SnapModal from '@/Components/SnapModal.vue'; 
import PreviewSnapModal from '@/Components/PreviewSnapModal.vue'; 
import { ref, computed } from 'vue';
import { Inertia } from '@inertiajs/inertia';


const { props } = usePage();
const snaps = computed(() => props.snaps.data);

// defineProps(['snaps']);

const showModalSnap = ref(false);
const showPreviewModalSnap = ref(false); 
const selectedSnap = ref(null);

const filter = ref('');

const openPreviewSnapModal = (snap) => {
    console.log("Opening snap:", snap);
    selectedSnap.value = snap;
    showPreviewModalSnap.value = true;
};

function navigate(pageUrl) {
    console.log("testing");
    // if (pageUrl) {
    //     Inertia.visit(pageUrl, { data: { filter: filter.value} });
    // }
}

function fetchsnaps(selectedFilter=''){
    filter.value = selectedFilter;
    Inertia.get('/snaps', {filter: selectedFilter}, {preserveState: false});
}

</script>

<template>
    <Head title="Snaps" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-center">Snaps.</h2>
            <p class="text-center">Galleries of photos that represents your day.</p>
        </template>

        <div class="h-screen w-full flex flex-col space-y-4">
            <div class="w-full h-14 flex flex-row space-x-4">
                <button :class="{'bg-white text-black font-bold': filter === ''}" @click="fetchsnaps('')" class="w-1/2 h-full rounded-lg">
                    <p>All Entries</p>
                </button>
                <button :class="{'bg-white text-black font-bold': filter === 'today'}" @click="fetchsnaps('today')" class="w-1/2 h-full rounded-lg">
                    <p>Today Entries</p>
                </button>
            </div>
            <div class="h-full grid grid-cols-3 grid-rows-2 gap-5">
                <SnapCard @click="openPreviewSnapModal(snap)"
                    v-for="snap in snaps"
                    :key="snap.id"
                    :snap="snap"
                />
                <TodayCard @click="showModalSnap = true">
                    <template #icon>
                        <AddLogo />
                    </template>
                </TodayCard>
                </div>
                <div class="flex flex-row justify-between">
                    <button @click="navigate(props.snaps.prev_page_url)" :disabled="!props.snaps.prev_page_url">
                        Previous
                    </button>
                    <span>Page {{ props.snaps.current_page }} of {{ props.snaps.last_page }}</span>
                    <button @click="navigate(props.snaps.next_page_url)" :disabled="!props.snaps.next_page_url">
                        Next
                    </button> 
                </div>
        </div>
    </AuthenticatedLayout>

    <SnapModal v-model="showModalSnap"/>
    <PreviewSnapModal v-model="showPreviewModalSnap" :snap="selectedSnap"/>

</template>