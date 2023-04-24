const {createApp} = Vue;

createApp({

  data(){

    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mailGenerata: null,
      arrayMail: []
    }

  },

  methods:{ //FUNZIONI
    getApi(){

      for(let i = 0; i < 10; i++){
        axios.get(this.apiUrl)
        .then(result => {
          this.mailGenerata = result.data.response;
          console.log(this.mailGenerata)
          this.arrayMail.push(this.mailGenerata)
        })
      }
      
      console.log(this.arrayMail)
    }
  },
  
  mounted() {
    this.getApi();
  }

}).mount('#app')