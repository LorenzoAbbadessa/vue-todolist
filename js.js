const {createApp} = Vue 
createApp({
    data(){
        return{
            newItem: '',
            items: [],
            done : ""
        }
    },
    methods: {
        addItem() {
            this.items.push(this.newItem)
            this.newItem = ''
              
        },
       
        
        

    }
}).mount("#app");
