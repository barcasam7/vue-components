<template>
   <div class="payment-wrapper">
      <div class="credit-card" id="card">
         <div class="card-front">
            <div class="branding">
               <img src="/chip.png" class="chip-img" />
               <img src="/visa.png" class="visa-logo" />
            </div>
            <div class="card-number">
               <div>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
               </div>
               <div>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
               </div>
               <div>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
               </div>
               <div>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
                  <span class="card-number-display">_</span>
               </div>
            </div>
            <div class="details">
               <div>
                  <span>Card Holder</span>
                  <span id="card-holder-name">Your Name Here</span>
               </div>
               <div>
                  <span>Expires</span>
                  <span id="validity">06/28</span>
               </div>
            </div>
         </div>
         <div class="card-back">
            <div class="black-strip"></div>
            <div class="white-strip">
               <span>CVV</span>
               <div id="cvv-display"></div>
            </div>
            <img src="/visa.png" class="visa-logo" />
         </div>
      </div>
      <form>
         <label for="card-number">Card Number</label>
         <input @keyup="inputCardNumber($event)" type="text" id="card-number" placeholder="1234123412341234" maxlength="16" />
         <label for="card-holder">Card Holder:</label>
         <input @keyup="inputName($event)" type="text" id="card-name-input" placeholder="Your Name" />
         <div class="date-cvv">
            <div>
               <label for="validity">Expires On:</label>
               <input type="date" id="validity-input" />
            </div>
            <div>
               <label for="cvv">CVV:</label>
               <input @focus="flipCard" @blur="flipBack" @keyup="inputCVV($event)" type="number" id="cvv" placeholder="***" />
            </div>
         </div>
      </form>
   </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const cardNumber = ref<string>("");
const name = ref<string>("");
const CVV = ref<string>("");

function inputCardNumber(event: Event) {
   cardNumber.value = (event.target as HTMLInputElement).value.slice(0, 16).replace(/\D/g, "");
   const cardNumberDisplay = document.querySelectorAll(".card-number-display");

   for (let i = 0; i < cardNumberDisplay.length; i++) {
      if (i < cardNumber.value.length) {
         cardNumberDisplay[i].textContent = cardNumber.value[i];
      } else {
         cardNumberDisplay[i].textContent = "_";
      }
   }
}

function inputName(event: Event) {
   name.value = (event.target as HTMLInputElement).value;
   const cardName = document.getElementById("card-holder-name");

   if (cardName === null) {
      return;
   }

   if (name.value.length < 1) {
      cardName.innerText = "Your Name Here";
   } else {
      cardName.innerText = name.value.slice(0, 30);
   }
}

function flipCard() {
   const card = document.getElementById("card");
   if (card === null) {
      return;
   }
   card.style.transform = "rotateY(180deg)";
}

function flipBack() {
   const card = document.getElementById("card");
   if (card === null) {
      return;
   }
   card.style.transform = "rotateY(0deg)";
}

function inputCVV(event: Event) {
   CVV.value = (event.target as HTMLInputElement).value;

   const cvvDisplay = document.getElementById("cvv-display");
   if (cvvDisplay === null) {
      return;
   }
   cvvDisplay.innerText = CVV.value;
}
</script>
