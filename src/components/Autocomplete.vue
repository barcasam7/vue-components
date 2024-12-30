<script setup lang="ts">
import { ref } from "vue";

const search = ref<string>("");
const searchedCountries = ref<string[]>([]);
const selectedCountry = ref<string>("");
const input = ref<HTMLInputElement | null>(null);

const countries = ref<string[]>([
   "Afghanistan",
   "Albania",
   "Algeria",
   "Andorra",
   "Angola",
   "Antigua and Barbuda",
   "Argentina",
   "Armenia",
   "Australia",
   "Austria",
   "Azerbaijan",
   "Bahamas",
   "Bahrain",
   "Bangladesh",
   "Barbados",
   "Belarus",
   "Belgium",
   "Belize",
   "Benin",
   "Bhutan",
   "Bolivia",
   "Bosnia and Herzegovina",
   "Botswana",
   "Brazil",
   "Brunei",
   "Bulgaria",
   "Burkina Faso",
]);

const searchCountries = (event: Event) => {
   search.value = (event.target as HTMLInputElement).value;
   let key = (event as KeyboardEvent).key;
   console.log(key);

   if (key === "ArrowDown" || key === "ArrowUp" || key === "Enter") {
      keyboardPress(key);
      return;
   }

   if (!search.value) {
      searchedCountries.value = [];
      return;
   }

   searchedCountries.value = countries.value.filter((country) => country.toLowerCase().includes(search.value.toLowerCase())).splice(0, 10);
};

const keyboardPress = (key: string) => {
   switch (key) {
      case "ArrowDown":
         break;
      default:
         break;
   }
};

const selectCountry = (country: string) => {
   selectedCountry.value = country;
   searchedCountries.value = [];
   search.value = "";

   if (input.value) {
      input.value.value = "";
   }
};
</script>
<template>
   <div class="autocomplete">
      <input ref="input" id="search-input" type="text" placeholder="Search..." @keyup="searchCountries($event)" />
      <div id="autocomplete-list" class="autocomplete-items">
         <div v-for="country in searchedCountries" :key="country" @click="selectCountry(country)">{{ country }}</div>
      </div>
      <p v-show="selectedCountry">Selected Country: {{ selectedCountry }}</p>
   </div>
</template>
