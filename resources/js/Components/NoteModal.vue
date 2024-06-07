<template>
    <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-5 py-10">
        <div class="bg-black text-white p-5 rounded-lg shadow-lg w-2/3 h-full flex flex-col space-y-5 items-center">
            <h3>New Journal</h3>
            <form @submit.prevent="submitJournal" class="w-full h-full flex flex-col">
                <input v-model="title" class="w-full p-2 border mb-4 bg-mediumgrey text-white rounded-lg" placeholder="Title" maxlength="50">
                <textarea v-model="content" class="w-full h-full p-2 border bg-mediumgrey text-white rounded-lg" placeholder="Write your notes here..."></textarea>
                <div class="mt-4 w-full flex justify-between">
                    <button type="button" @click="closeModal" class=" bg-black text-white font-bold hover:bg-red hover:text-black py-2 px-4 rounded">
                        Cancel
                    </button>
                    <div class="space-x-2">
                        <button type="button" @click="saveDraft" class=" bg-black text-white font-bold hover:bg-lavender hover:text-black py-2 px-4 rounded">
                            Draft
                        </button>
                        <button type="submit" class="bg-white text-black hover:bg-lavender font-bold py-2 px-4 rounded">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            title: '',
            content: ''
        };
    },

    methods: {
        closeModal() {
            this.$emit('update:modelValue', false);
            this.title = '';
            this.content = '';
        },

        saveDraft() {
            // Draft saving logic here
            this.$emit('update:modelValue', false);
        },

        submitJournal() {
            Inertia.post(route('journals.store'), {
                title: this.title,
                content: this.content
            });
            this.closeModal(); // Optionally close modal after saving
        }
    }
}
</script>
