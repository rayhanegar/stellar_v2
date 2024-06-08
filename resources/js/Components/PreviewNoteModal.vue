<template>
    <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-5 py-10">
        <div class="bg-black text-white p-5 rounded-lg shadow-lg w-2/3 h-full flex flex-col justify-between space-y-5">
            <div v-if="!isEdit" class="flex flex-col h-full space-y-5 p-4">
                <h3 class="font-bold">{{ computedTitle }}</h3>
                <p>{{ computedContent }}</p>
            </div>
            
            <div v-else class="h-full space-y-5 p-4">
                <form @submit.prevent="saveChanges" class="flex flex-col space-y-2">
                    <input v-model="editableTitle" class="w-full p-2 mb-4 bg-grey text-white rounded-lg" maxlength="50">
                    <textarea v-model="editableContent" class="w-full h-full p-2 bg-grey text-white rounded-lg"></textarea>
                    <button type="submit" class="w-fit bg-black text-white font-bold hover:bg-lavender hover:text-black py-2 px-4 rounded">
                        Save
                    </button>
                </form>
            </div>

            <div class="w-full flex justify-between">
                <div class="flex flex-row space-x-4">
                    <button @click="closeModal" class="bg-black text-white font-bold hover:bg-white hover:text-black py-2 px-4 rounded">
                        Close
                    </button>
                    <button @click="deleteJournal" class="bg-black text-white font-bold hover:bg-red hover:text-black py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
                <button v-if="!isEdit" @click="editMode" class="bg-black text-white font-bold hover:bg-white hover:text-black py-2 px-4 rounded">
                    Edit
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { Inertia } from '@inertiajs/inertia';
import { computed, ref } from 'vue';

export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true
        },
        journal: {
            type: Object,
            default: () => ({ title: '', content: '', id: null, created_at: '' })
        }
    },

    setup(props, { emit }) {
        const isEdit = ref(false);
        const computedTitle = computed(() => props.journal.title);
        const computedContent = computed(() => props.journal.content);

        const editableTitle = ref(props.journal.title);
        const editableContent = ref(props.journal.content);

        function closeModal() {
            emit('update:modelValue', false);
            isEdit.value = false;
        }

        function editMode() {
            editableTitle.value = computedTitle.value;
            editableContent.value = computedContent.value;
            isEdit.value = true;
        }

        function saveChanges() {
            Inertia.put(route('journals.update', props.journal.id), {
                title: editableTitle.value,
                content: editableContent.value
            }, {
                onSuccess: () => closeModal()
            });
        }

        function deleteJournal() {
            if (confirm('Are you sure you want to delete this journal?')) {
                Inertia.delete(route('journals.destroy', props.journal.id), {
                    onSuccess: () => {
                        closeModal();
                    }
                });
            }
        }

        return { computedTitle, computedContent, editableTitle, editableContent, isEdit, closeModal, editMode, saveChanges, deleteJournal };
    }
}
</script>