Vue Email List
===

## CONSEGNA
### **Descrizione:**

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista. <br>
>**Bonus**

Far comparire gli indirizzi email solamente quando sono stati tutti generati.

## STEPS
1. Creo la base del progetto aggiungendo lo scaffolding iniziale
2. Mi salvo l'url dell'api nel return dei data di vue
3. Mi creo una funzione che prende l'url tramite AXIOS (la funzione deve avere questa struttura base) `axios.get(URL).then(result => { console.log(result.data.response) })`
4. Richiamo la funzione nel mounted() e così posso visualizzare l'api sulla mia pagina.
5. Con un ciclo genero 10 mail e le vado a stampare in pagina dentro una lista