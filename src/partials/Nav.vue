<script setup lang="ts">
type link = {
  link: string;
  name: string;
};

const routes: link[] = [
  { link: "/", name: "home" },
  { link: "/reviews", name: "reviews" },
  { link: "/expandable-image", name: "expandable image" },
  { link: "/github-profile", name: "github profile search" },
];
</script>
<template>
  <div id="sidebar">
    <nav class="hide-mobile nav">
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          {{ route.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>
