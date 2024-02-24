<template>
   <div id="page-position-container">
      <div class="article">
         <section v-for="(header, index) in headers" :key="header">
            <h2 :id="`${index}`">{{ header }}</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu
               tincidunt tortor. Adipiscing at in tellus integer feugiat scelerisque varius. Laoreet id donec ultrices tincidunt. Orci a scelerisque purus semper eget. Orci sagittis eu volutpat odio
               facilisis mauris. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Nam aliquam sem et tortor.
               Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. At tempor commodo ullamcorper a. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Lacus sed turpis
               tincidunt id aliquet risus feugiat in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Adipiscing at in tellus integer feugiat scelerisque varius. Laoreet
               id donec ultrices tincidunt. Orci a scelerisque purus semper eget. Orci sagittis eu volutpat odio facilisis mauris. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus.
               Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Nam aliquam sem et tortor. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. At tempor commodo
               ullamcorper a. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Lacus sed turpis tincidunt id aliquet risus feugiat in. Amet commodo nulla facilisi nullam vehicula ipsum
               a arcu.
            </p>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu
               tincidunt tortor. Adipiscing at in tellus integer feugiat scelerisque varius. Laoreet id donec ultrices tincidunt. Orci a scelerisque purus semper eget. Orci sagittis eu volutpat odio
               facilisis mauris. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Nam aliquam sem et tortor.
               Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. At tempor commodo ullamcorper a. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Lacus sed turpis
               tincidunt id aliquet risus feugiat in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Adipiscing at in tellus integer feugiat scelerisque varius. Laoreet
               id donec ultrices tincidunt. Orci a scelerisque purus semper eget. Orci sagittis eu volutpat odio facilisis mauris. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus.
               Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Nam aliquam sem et tortor. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. At tempor commodo
               ullamcorper a. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Lacus sed turpis tincidunt id aliquet risus feugiat in. Amet commodo nulla facilisi nullam vehicula ipsum
               a arcu.
            </p>
         </section>
      </div>
      <aside>
         <div>
            <a v-for="(header, index) in headers" :key="header" :href="`#${index}`" :class="{ active: index == parseInt(currentSection) }">{{ header }}</a>
         </div>
      </aside>
   </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const headers: string[] = ["About me", "Bio", "Followers", "Following", "Public Repos"];

const currentSection = ref<string>("");

onMounted(() => {
   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
               currentSection.value = entry.target.id;
            }
         });
      },
      {
         rootMargin: "0px 0px -30% 0px",
         threshold: 1,
      }
   );

   document.querySelectorAll(".article h2").forEach((section: Element) => {
      observer.observe(section);
   });
});
</script>
