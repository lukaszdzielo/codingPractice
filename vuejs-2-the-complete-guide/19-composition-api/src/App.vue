<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3> -->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
 
// const userName = ref('Maximilian');
// const userAge = ref(11);

// const user = ref({
//   name: 'Maximilian',
//   age: 22,
// });

const user = reactive({
  name: 'Maximilian',
  age: 22,
});

setTimeout(function() {
  // userName.value = 'Max';
  // userAge.value = 22;

  // ref
  // user.value.name = 'Max';
  // user.value.age = 22;

  // reactive
  user.name = 'Max';
  user.age = 22;
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