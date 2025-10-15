const app = Vue.createApp({
	data() {
		return {
      enteredGoalValue: '',
			goals: [],
		};
	},
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },
    removeGoal(index) {
      console.log('--', index);
      this.goals.splice(index, 1);
    }
  }
});

app.mount("#user-goals");
