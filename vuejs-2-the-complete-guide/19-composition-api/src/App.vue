<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3> -->
    <h2>{{ user3.name }}</h2>
    <h3>{{ user3.age }}</h3>
  </section>
</template>

<script setup>
import { ref, isRef, reactive, isReactive, toRefs } from 'vue';
 
// const userName = ref('Maximilian');

const userAge = ref(11);

const user2 = ref({
  name: 'Maximilian',
  age: 22,
});

const user3 = reactive({
  name: 'Maximilian',
  age: 22,
});

console.log( '1', isRef(userAge) ) // true
console.log( '2', isRef(user2) ) // true
console.log( '3', isReactive(user3) ) // true
console.log( '4', isReactive(user3.name) ) // false

const userRefs = toRefs(user3)

console.log( '5', isReactive(userRefs) ) // false
console.log( '6', isReactive(userRefs.name) ) // false

setTimeout(function() {
  // userName.value = 'Max';
  // userAge.value = 22;

  // ref
  // user.value.name = 'Max';
  // user.value.age = 22;

  // reactive
  user3.name = 'Max';
  user3.age = 22;
}, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>