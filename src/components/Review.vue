<script setup lang="ts">
import { computed, ref } from "vue";
import people from "../data";

const index = ref<number>(0);

const checkNumber = (number: number): number => {
   if (number > people.length - 1) {
      return 0;
   }
   if (number < 0) {
      return people.length - 1;
   }
   return number;
};

// @ts-ignore
const getReview = (e: Event, type: string) => {
   let newIndex = type === "previous" ? index.value - 1 : index.value + 1;
   index.value = checkNumber(newIndex);
};

const person = computed(() => people[index.value]);

const randomPerson = () => {
   let randomNumber = Math.floor(Math.random() * people.length);
   if (randomNumber === index.value) {
      randomNumber = index.value + 1;
   }
   index.value = checkNumber(randomNumber);
};
</script>
<template>
   <article className="review">
      <div className="img-container">
         <img :src="person.image" :alt="person.name" className="person-img" />
         <span className="quote-icon">
            <v-icon name="fa-quote-right" />
         </span>
      </div>
      <h4 className="author">{{ person.name }}</h4>
      <p className="job">{{ person.job }}</p>
      <p className="info">{{ person.text }}</p>
      <div className="button-container">
         <button className="prev-btn" @click="getReview($event, 'next')">
            <v-icon name="fa-chevron-left" />
         </button>
         <button className="next-btn" @click="getReview($event, 'previos')">
            <v-icon name="fa-chevron-right" />
         </button>
      </div>
      <button className="random-btn" @click="randomPerson">Surprise me</button>
   </article>
</template>
