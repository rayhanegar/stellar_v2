<template>
    <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-5 py-10">
        <div class="bg-black text-white p-5 rounded-lg shadow-lg w-2/3 h-full flex flex-col justify-between space-y-5">
            <div v-if="!isEdit" class="flex flex-col h-full space-y-5 p-4">
                <img :src="computedUrl" alt="" class="w-2/5">
                <p>{{ computedTitle }}</p>
            </div>
            
            <div v-else class="h-full space-y-5 p-4">
                <form @submit.prevent="saveChanges()" class="flex flex-col space-y-2">
                    <img :src="computedUrl" alt="Snap Image" class="w-1/2" />
                    <textarea v-model="editableContent" class="w-full h-full p-2 bg-grey text-white rounded-lg"></textarea>
                    <button type="submit" class="w-fit bg-black text-white font-bold hover:bg-lavender hover:text-black py-2 px-4 rounded">
                        Save
                    </button>
                </form>
            </div>

            <div class="w-full flex justify-between">
                <div class="flex flex-row space-x-4">
                    <button @click="closeModal()" class="bg-black text-white font-bold hover:bg-white hover:text-black py-2 px-4 rounded">
                        Close
                    </button>
                    <button @click="deleteSnap()" class="bg-black text-white font-bold hover:bg-red hover:text-black py-2 px-4 rounded">
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
  import { ref, onMounted, computed } from 'vue';
  import { Inertia } from '@inertiajs/inertia';
//   import { route } from 'vue';

  
  

  export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true
        },
        snap: {
            type: Object,
            default: () => ({ url: '', title: '', id: null, created_at: '' })
        }
    },
  
    setup(props, { emit }) {
        const isEdit = ref(false); 
        const computedTitle = computed(() => props.snap.title);
        const computedUrl = computed(() => props.snap.url);

        const editableTitle = ref(props.snap.title); 

        function closeModal() {
            if (props.modelValue) {
                emit('update:modelValue', false);
            }
        };


        function deleteSnap() {
            if (confirm('Are you sure you want to delete this snap?')) {
                console.log("deelte the shits"); 
                Inertia.delete(route('snaps.destroy', props.snap.id), {
                    onSuccess: () => {
                        closeModal();
                    }
                });
            }
        }

        function editMode(){
            editableTitle.value = computedTitle.value;
            isEdit.value = true;
        }

        function testis(){
            console.log("testing"); 
        }

        function saveChanges(){
            Inertia.put(route('snaps.update', props.snap.id), {
                url: computedUrl,
                title: editableTitle.value,
            })
            closeModal(); 
        }

        return { saveChanges, editMode, isEdit, computedTitle, computedUrl, closeModal, deleteSnap };
    }

  }
  </script>
  