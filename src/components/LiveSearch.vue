<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

type Location = {
   city: string;
   country: string;
};
type Image = {
   thumbnail: string;
};

type ID = {
   value: string;
};

type Name = {
   first: string;
   last: string;
};

type User = {
   name: Name;
   id: ID;
   picture: Image;
   location: Location;
};

const users = ref<User[]>([]);
const search = ref<string>("");
const searchUsers = ref<User[]>([]);

const getUsers = () => {
   axios
      .get("https://randomuser.me/api/?results=20")
      .then((data) => {
         users.value = data.data.results;
         searchUsers.value = data.data.results;
      })
      .catch((e) => console.log(e));
};

const searchUser = (event: Event) => {
   search.value = (event.target as HTMLInputElement).value;
   if (search.value === "") {
      return (searchUsers.value = users.value);
   }
   searchUsers.value = users.value.filter((user: User) => {
      return (
         user.name.first.toLowerCase().includes(search.value.toLowerCase()) ||
         user.name.last.toLowerCase().includes(search.value.toLowerCase()) ||
         user.location.city.toLowerCase().includes(search.value.toLowerCase()) ||
         user.location.country.toLowerCase().includes(search.value.toLowerCase())
      );
   });
};

onMounted(() => getUsers());
</script>
<template>
   <div class="search-container">
      <header class="header">
         <h4 class="title">Live User Filter</h4>
         <small class="subtitle">Search by name and/or location</small>
         <input type="text" id="id" placeholder="Search" @change="searchUser($event)" />
      </header>
      <ul id="result" class="user-list">
         <li v-for="{ name, picture, location, id } in searchUsers" :key="id.value">
            <img :src="picture.thumbnail" alt="" />
            <div class="user-info">
               <h4>{{ name.first }} {{ name.last }}</h4>
               <p>{{ location.city }}, {{ location.country }}</p>
            </div>
         </li>
      </ul>
   </div>
</template>
