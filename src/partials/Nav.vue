<script setup lang="ts">
import { useRoute } from "vue-router";
import { routes as links } from "./../router/router";
const route = useRoute();
console.log(links);
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
  </div>
</template>
