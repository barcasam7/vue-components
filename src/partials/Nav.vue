<script setup lang="ts">
import { useRoute } from "vue-router";
import { routes as links } from "./../router/router";
import { ref } from "vue";
const route = useRoute();
let isOpen = ref<boolean>(false);

const toggleMenu = () => {
   document.getElementById("bar1")?.classList.toggle("animateBar1");
   document.getElementById("bar2")?.classList.toggle("animateBar2");
   document.getElementById("bar3")?.classList.toggle("animateBar3");
   isOpen.value = !isOpen.value;
};
</script>
<template>
   <div id="sidebar">
      <nav class="hide-mobile nav">
         <ul>
            <li v-for="(routeLink, index) in links" :key="index">
               <router-link :class="route.fullPath === routeLink.path ? 'active' : ''" :to="routeLink.path"> {{ routeLink.name }}</router-link>
            </li>
         </ul>
      </nav>
      <div className="hamburger" @click="toggleMenu">
         <div className="bar" id="bar1"></div>
         <div className="bar" id="bar2"></div>
         <div className="bar" id="bar3"></div>
      </div>
      <nav :class="isOpen ? 'opened' : ''" class="mobile-nav">
         <ul>
            <li v-for="(routeLink, index) in links" :key="index">
               <router-link :class="route.fullPath === routeLink.path ? 'active' : ''" :to="routeLink.path"> {{ routeLink.name }}</router-link>
            </li>
         </ul>
      </nav>
   </div>
</template>
