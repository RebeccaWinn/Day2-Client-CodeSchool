var app = new Vue({
    el:"#app" ,
    data:{
        greeting:"Hello",
        name:"Rebecca",
        major:"Computer Science",
        what_im_typing:""
    },

    methods:{
        changeName: function(new_name){
            this.name= new_name
            this.what_im_typing=""
        }

    }


})