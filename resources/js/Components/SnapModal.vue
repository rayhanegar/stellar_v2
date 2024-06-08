<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-5 py-10">
      <div class="bg-black text-white p-5 rounded-lg shadow-lg w-2/3 h-full flex flex-col space-y-5 items-center">
          <h3>New Snap</h3>
          <form @submit.prevent="submitSnap" class="w-full h-full flex flex-col">
              <div 
                  @click="triggerFileInput"
                  @dragover.prevent
                  @dragenter.prevent="dragOver = true"
                  @dragleave.prevent="dragOver = false"
                  @drop.prevent="handleDrop"
                  :class="['flex justify-center items-center rounded-lg h-1/2 mb-4 cursor-pointer', imageSrc ? 'border-none' : 'border-dashed border-2', dragOver ? 'border-blue-500' : 'border-gray-400']"
              >
                  <input type="file" ref="fileInput" @change="handleFileUpload" class="hidden" accept="image/*">
                  <div v-if="imageSrc">
                      <img :src="imageSrc" class="max-h-40 max-w-full" alt="Preview">
                  </div>
                  <p v-else class="text-center text-gray-500">Drag and drop your file here, or click to select file</p>
              </div>
              <textarea v-model="content" class="w-full h-1/2 p-2 border bg-mediumgrey text-white rounded-lg" placeholder="Write your notes here..."></textarea>
              <div class="mt-4 w-full flex justify-between">
                  <button type="button" @click="closeModal" class="bg-black text-white font-bold hover:bg-red hover:text-black py-2 px-4 rounded">
                      Cancel
                  </button>
                  <div class="space-x-2">
                      <button type="button" @click="saveDraft" class="bg-black text-white font-bold hover:bg-lavender hover:text-black py-2 px-4 rounded">
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
import { ref, onMounted } from 'vue';
import { Inertia } from '@inertiajs/inertia';

export default {
  props: {
      modelValue: {
          type: Boolean,
          required: true
      }
  },

  setup(props, { emit }) {
      const content = ref('');
      const dragOver = ref(false);
      const fileInput = ref(null);
      const imageSrc = ref(null); // To store the image URL for preview

      const closeModal = () => {
          content.value = '';
          imageSrc.value = null;
          emit('update:modelValue', false);
      };

      const saveDraft = () => {
          // Logic to handle saving the draft
          console.log('Draft saved');
          emit('update:modelValue', false);
      };

      const submitSnap = () => {
          const formData = new FormData();
          formData.append('content', content.value);
          if (fileInput.value.files[0]) {
              formData.append('image', fileInput.value.files[0]);
          }
          Inertia.post('/snaps/store', formData);
          closeModal();
      };

      const handleFileUpload = (event) => {
          const files = event.target.files || event.dataTransfer.files;
          if (files.length > 0) {
              imageSrc.value = URL.createObjectURL(files[0]);
          }
      };

      const handleDrop = (event) => {
          handleFileUpload(event);
          dragOver.value = false;
      };

      const triggerFileInput = () => {
          fileInput.value.click();
      };

      return { content, dragOver, fileInput, imageSrc, closeModal, saveDraft, submitSnap, handleFileUpload, handleDrop, triggerFileInput };
  }
}
</script>
