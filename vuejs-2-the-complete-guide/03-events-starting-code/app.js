const app = Vue.createApp({
	data() {
		return {
			counter: 0,
      name: '',
      confirmedName: '',
		};
	},
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter += num;
    },
    substract(num) {
      this.counter -= num;
    }
  }
});

app.mount("#events");
