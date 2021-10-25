new Vue({
    el: '#assignment',

    data:{
        userInput: '',
        lists: [],
        toggle: 'Hide',
        btn: false,

    },
    methods:{
        listTasks() {
            this.lists.push(this.userInput);
        },
        toggleBtn(){
            this.btn = !this.btn

            if(this.btn === true) {
                this.toggle = 'Show List'
            }
            else{
                this.toggle = 'Hide'
            }
         },
    }
})