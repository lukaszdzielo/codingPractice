const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedInput: ''
        }
    },
	methods: {
		showAlert() {
			alert("This works!");
		},
        saveInpuit(e) {
            this.userInput = e.target.value;
        },
        confirmInput(e) {
            this.confirmedInput = this.userInput;
        }
	},
});

app.mount("#assignment");
