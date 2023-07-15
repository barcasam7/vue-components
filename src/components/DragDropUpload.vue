<script setup lang="ts">
import { ref } from "vue";

type image = {
   url: string;
   name: string;
};

const images = ref<image[]>([]);
const isDragging = ref<boolean>(false);
const fileinput = ref(null);

const selectFiles = () => {
   if (fileinput.value !== null) {
      (fileinput.value as HTMLButtonElement).click();
   }
};

const onFileSelect = (event: Event) => {
   const target = event.target as HTMLInputElement;
   if (event.target !== null) {
      const files = target.files as FileList;
      addFiles(files);
   }
};

const addFiles = (files: FileList) => {
   if (files.length === 0) return;

   for (let index = 0; index < files.length; index++) {
      if (files[index].type.split("/")[0] !== "image") {
         continue;
      }
      if (!images.value.some((e: image) => e.name === files[index].name)) {
         images.value = [
            ...images.value,
            {
               name: files[index].name,
               url: URL.createObjectURL(files[index]),
            },
         ];
      }
   }
};

const deleteImage = (deleteIndex: number) => {
   // @ts-ignore
   images.value = images.value.filter((image: image, index: number) => {
      return index !== deleteIndex;
   });
};

const onDragOver = (event: DragEvent) => {
   event.preventDefault();
   isDragging.value = true;
   if (event.dataTransfer !== null) {
      event.dataTransfer.dropEffect = "copy";
   }
};

const onDragLeave = (event: DragEvent) => {
   event.preventDefault();
   isDragging.value = false;
};

const onDrop = (event: DragEvent) => {
   event.preventDefault();
   isDragging.value = false;
   if (event.dataTransfer !== null) {
      const files = event.dataTransfer.files;
      addFiles(files);
   }
};
</script>
<template>
   <div className="card-upload">
      <div className="top">
         <p>Drag & Drop image upload</p>
      </div>
      <div className="drag-area" @dragover="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
         <span className="select">Drop images here</span>
         Drag & Drop image here or
         <span className="select" role="button" @click="selectFiles"> Browse </span>
         <input type="file" name="file" className="file" multiple ref="fileinput" @change="onFileSelect" />
      </div>
      <div className="container">
         <div v-for="(image, index) in images" :key="index" className="image">
            <span className="delete" @click="deleteImage(index)"> &times; </span>
            <img :src="image.url" :alt="image.name" />
         </div>
      </div>
      <button type="button">Upload</button>
   </div>
</template>
