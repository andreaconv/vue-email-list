const {createApp} = Vue;

createApp({

  data(){

    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mailGenerata: null,
    }

  },

  methods:{ //FUNZIONI
    getApi(){
      axios.get(this.apiUrl)
      .then(result => {
        console.log(result.data.response)
        this.mailGenerata = result.data.response;
      })
    }
  },

  mounted() {
    this.getApi();
  }

}).mount('#app')