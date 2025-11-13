<template>
  <base-card>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
  </base-card>
</template>

<script>
import BaseCard from './BaseCard.vue'
export default {
  components: {
    BaseCard,
  },
  props: ['fullName', 'infoText', 'role'],
}
</script>

<style scoped>
</style>
