const app = Vue.createApp({
    data() {
        return {
            name: 'DevName',
            age: 30,
            vueLink: 'https://vuejs.org/',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png',
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random().toFixed(2);
        }
    },
})

app.mount('#assignment');