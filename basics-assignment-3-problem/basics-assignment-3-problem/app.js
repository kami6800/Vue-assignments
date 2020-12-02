
const app = Vue.createApp({
    data(){
        return {
            result:0
        }
    },
    watch:{
        showResult(){
            console.log("run");
            const that = this;
            setTimeout(function(){
                that.result = 0;
                console.log("time");
            }, 1000);
        }
    },
    computed:{
        showResult(){
            return this.result>37?"Too much":"Not there yet";
        }
    },
    methods:{
        add(value){
            this.result += value;
        }
    }
});

app.mount("#assignment")