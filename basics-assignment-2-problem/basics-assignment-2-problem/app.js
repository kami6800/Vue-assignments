const app = Vue.createApp({
    data(){
        return {
            message:"WARNING",
            output1:"",
            output2:""
        }
    },
    methods:{
        showWarning(){
            alert(this.message);
        },
        changeOutput1(event){
            this.output1 = event.currentTarget.value;
        },
        changeOutput2(event){
            this.output2 = event.currentTarget.value;
        }
    }
});

app.mount("#assignment");