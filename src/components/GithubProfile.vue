<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import Skeleton from "./Skeleton.vue";

type profile = {
   id: number;
   name: string;
   followers: number;
   following: number;
   avatar_url: string;
   bio: string;
   public_repos: number;
};

type repo = {
   name: string;
   html_url: string;
};

const user = ref<null | profile>(null);
const search = ref<string>("");
const repos = ref<repo[]>([]);
const userNotFound = ref<boolean>(false);
const isLoading = ref<boolean>(true);

function searchUser(event: Event): void {
   search.value = (event.target as HTMLInputElement).value;
}

function getUsers(event: Event): void {
   event.preventDefault();
   isLoading.value = true;
   axios
      .get(`https://api.github.com/users/${search.value}`)
      .then((data) => {
         user.value = data.data;
         getRepos();
         userNotFound.value = false;
         isLoading.value = false;
      })
      .catch(() => {
         userNotFound.value = true;
         isLoading.value = false;
      });
}

function getRepos(): void {
   axios
      .get(`https://api.github.com/users/${search.value}/repos`)
      .then((data) => (repos.value = data.data.slice(0, 10)))
      .catch(() => (repos.value = []));
}
</script>
<template>
   <form className="user-form" id="form" @submit="getUsers($event)">
      <input type="text" id="search" placeholder="Search a Github User" @change="searchUser($event)" />
   </form>
   <main id="id">
      <Skeleton :rows="3" v-if="isLoading" />
      <div class="card" v-if="user !== null && !userNotFound && !isLoading">
         <div>
            <img :src="user.avatar_url" alt="" className="avatar" />
         </div>
         <div class="user-info">
            <h2>{{ user.name }}</h2>
            <p>{{ user.bio }}</p>
            <ul>
               <li>{{ user.followers }} <strong>Followers</strong></li>
               <li>{{ user.following }} <strong>Following</strong></li>
               <li>{{ user.public_repos }} <strong>Repos</strong></li>
            </ul>
            <div id="repos">
               <a v-for="(repo, key) in repos" :key="key" target="_blank" :href="repo.html_url" className="repo">
                  {{ repo.name }}
               </a>
            </div>
         </div>
      </div>
      <p v-if="userNotFound && !isLoading">No user found for that username</p>
   </main>
</template>
