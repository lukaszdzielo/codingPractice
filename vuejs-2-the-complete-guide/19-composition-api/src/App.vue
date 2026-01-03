<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3> -->
    <h2>{{ user3.name }}</h2>
    <h3>{{ userAge }}</h3>
    <h3>{{ user3.age }}</h3>
    
    <button @click="setNewAge">Change age</button>
    <div>
      <div>{{ uName }}</div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <!-- <input type="text" placeholder="Last Name" @input="setLastName"> -->
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { ref, isRef, reactive, isReactive, toRefs, computed, watch } from 'vue';
 
const userName = ref('Maximilian');

const userAge = ref(11);

const firstName = ref('-');
const lastName = ref('-');
const lastNameInput = ref(null);

const user2 = ref({
  name: 'Maximilian',
  age: 11,
});

const user3 = reactive({
  name: 'Maximilian',
  age: 11,
});

// console.log( '1', isRef(userAge) ) // true
// console.log( '2', isRef(user2) ) // true
// console.log( '3', isReactive(user3) ) // true
// console.log( '4', isReactive(user3.name) ) // false

const userRefs = toRefs(user3)

// console.log( '5', isRef(userRefs) ) // false
// console.log( '6', isRef(userRefs.name) ) // true

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

function setNewAge() {
  userAge.value = 40;
  user3.age = 45;
}

const uName = computed( function () {
  return `${firstName.value} ${lastName.value}`
});

function setFirstName(e) {
  firstName.value = e.target.value;
}

// function setLastName(e) {
//   lastName.value = e.target.value;
// }

watch(userAge, function (newValue, oldValue) {
  console.log('userAge changed.',  oldValue, '→', newValue)
})

watch([userAge, userName], function (newValues, oldValues) {
  console.log(0,  oldValues[0], '→', newValues[0])
  console.log(1,  oldValues[1], '→', newValues[1])
})

function setLastName () {
  lastName.value = lastNameInput.value.value;
}

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