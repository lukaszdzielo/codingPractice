<template>
  <base-container v-if="userIsAuthenticated" title="Vuex">
    <TheCounter />
    <FavoriteValue />
    <button @click="addOne">Add 10</button>
    <ChangeCounter />
  </base-container>
  <base-container title="User Authentication">
    <UserAuth />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 5 } );
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    },
  },
};
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
</style>