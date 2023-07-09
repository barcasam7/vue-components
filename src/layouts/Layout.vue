<template>
   <Nav />
   <section className="app-container">
      <div className="title hide-mobile">
         <h2>Vue & Typescript Components</h2>
         <div className="underline"></div>
      </div>
      <router-view></router-view>
   </section>
</template>
<script setup lang="ts">
import Nav from "./../partials/Nav.vue";
</script>
