const {createApp} = Vue;

createApp({

  data(){

    return{
      
    }

  },

  methods:{ //FUNZIONI
    getApi(){
      console.log("vue")
    }
  },

  mounted() {
    this.getApi();
  }

}).mount('#app')