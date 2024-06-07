<template>
    <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-5 py-10">
        <div class="bg-black text-white p-5 rounded-lg shadow-lg w-2/3 h-full flex flex-col justify-between space-y-5">
            <div v-if="!isEdit">
                <h3>{{ title }}</h3>
                <p>{{ content }}</p>
            </div>
            
            <div v-else>
                <form @submit.prevent="saveChanges">
                    <input v-model="title" class="w-full p-2 border mb-4 bg-mediumgrey text-white rounded-lg" maxlength="50">
                    <textarea v-model="content" class="w-full h-full p-2 border bg-mediumgrey text-white rounded-lg"></textarea>
                    <button type="submit" class="bg-black text-white font-bold hover:bg-red hover:text-black py-2 px-4 rounded">
                        Save
                    </button>
                </form>
            </div>

            <div class="w-full flex justify-between">
                <div class="flex flex-row space-x-4">
                    <button @click="closeModal" class="bg-black text-white font-bold hover:bg-red hover:text-black py-2 px-4 rounded">
                        Close
                    </button>
                    <button @click="deleteJournal" class="bg-black text-white font-bold hover:bg-red hover:text-black py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
                <button v-if="!isEdit" @click="editMode" class="bg-black text-white font-bold hover:bg-lavender hover:text-black py-2 px-4 rounded">
                    Edit
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true
        },
        journal: {
            type: Object,
            default: () => ({ title: '', content: '' })
        }
    },

    data() {
        return {
            isEdit: false,
            title: this.journal.title,
            content: this.journal.content
        };
    },

    methods: {
        closeModal() {
            this.$emit('update:modelValue', false);
            this.isEdit = false;
        },
        editMode() {
            this.isEdit = true;
        },
        saveChanges() {
            Inertia.put(route('journals.update', this.journal.id), {
                title: this.title,
                content: this.content
            }, {
                onSuccess: () => this.closeModal()
            });
        },
        deleteJournal() {
            if (confirm('Are you sure you want to delete this journal?')) {
                Inertia.delete(route('journals.destroy', this.journal.id), {
                    onSuccess: () => {
                        this.closeModal();
                    }
                });
            }
        }
    }
}
</script>