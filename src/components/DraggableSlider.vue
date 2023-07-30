<script setup lang="ts">
import { ref, onMounted } from "vue";

let isDragging = ref<boolean>(false);
const tabs = ref<null | Element>(null);
const hideRight = ref<boolean>(false);
const hideLeft = ref<boolean>(true);

function scroll(type: string): void {
   if (tabs.value === null) {
      return;
   }
   let scrollWidth = (tabs.value.scrollLeft += type === "left" ? -340 : 340);
   handleIcons(scrollWidth);
}

function handleIcons(scrollWidth: number): void {
   if (tabs.value === null) {
      return;
   }
   let maxScrollableWidth = tabs.value.scrollWidth - tabs.value.clientWidth;

   scrollWidth <= 0 ? (hideLeft.value = true) : (hideLeft.value = false);
   maxScrollableWidth - scrollWidth <= 1 ? (hideRight.value = true) : (hideRight.value = false);
}

function dragging(e: Event) {
   const event = e as MouseEvent;
   if (tabs.value === null) {
      return;
   }
   if (!isDragging.value) {
      return;
   }
   tabs.value.classList.add("dragging");
   tabs.value.scrollLeft -= event.movementX;
   handleIcons(tabs.value.scrollLeft);
}

function dragStop() {
   if (tabs.value === null) {
      return;
   }
   isDragging.value = false;
   tabs.value.classList.remove("dragging");
}

function dragStart() {
   isDragging.value = true;
}

onMounted(() => {
   document.addEventListener("mouseup", dragStop);
});
</script>
<template>
   <div class="wrapper">
      <div class="icon" v-show="!hideLeft"><v-icon name="fa-chevron-left" @click="scroll('left')" /></div>
      <ul class="tabs-box" ref="tabs" @mousemove="dragging($event)" @mousedown="dragStart">
         <li class="tab">PHP</li>
         <li class="tab active">JavaScript</li>
         <li class="tab">MySQL</li>
         <li class="tab">Databases</li>
         <li class="tab">Software Development</li>
         <li class="tab">BigQuery</li>
         <li class="tab">AWS</li>
         <li class="tab">Programming</li>
         <li class="tab">HTML</li>
         <li class="tab">Algorithms</li>
         <li class="tab">CSS</li>
         <li class="tab">Typescript</li>
         <li class="tab">Vue</li>
         <li class="tab">React</li>
         <li class="tab">Data Structure</li>
      </ul>
      <div class="icon" v-show="!hideRight"><v-icon name="fa-chevron-right" @click="scroll('right')" /></div>
   </div>
</template>
