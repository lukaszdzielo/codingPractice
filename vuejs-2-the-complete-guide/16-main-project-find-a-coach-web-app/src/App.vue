<template>
  <TheHeader />
  <RouterView v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </RouterView>
</template>

<script>

  import TheHeader from './components/layout/TheHeader.vue';

  export default {
    components: {
      TheHeader
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  translate: 0 -30px;
}

.route-leave-to {
  opacity: 0;
  translate: 0 30px;
}

.route-enter-active {
  transition: all .3s ease-out;
}

.route-leave-active {
  transition: all .3s ease-in;
}

.route-enter-to,
.route-leave-to {
  opacity: 1;
  translate: 0 0;
}

</style>