const app = Vue.createApp({
    data() {
        return {
            naame: "cool",
            age: 100,
            url: "https://sitechecker.pro/wp-content/uploads/2017/12/URL-meaning.png"
        }
    },
    methods: {
        ageplus5() {
            return this.age + 5;
        },
        randum() {
            return Math.random();
        }
    }
});

app.mount("#assignment");