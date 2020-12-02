const app = Vue.createApp({
    data(){
        return {
            userStyle:"",
            hidden:false,
            style:""
        }
    },
    computed:{
        styled(){
            return [this.userStyle, this.hidden?"hidden":""];
        },
        hide(){
            return this.hidden?"hidden":"";
        }
    },
    methods:{
        toggleHidden(){
            this.hidden = !this.hidden;
        }
    }
});

app.mount("#assignment");