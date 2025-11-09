<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(F)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-show="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
//   props: ['name', 'phone', 'email', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    phone: {
      type: String,
      required: true,
      default: '000-000-0000',
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['toggle-favorite'],
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true
  //     } else {
  //       console.warn('Id is missing!')
  //       return false
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    },
  },
}
</script>
