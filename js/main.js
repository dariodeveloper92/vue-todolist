// Vue js

Vue.config.devtools = true; // scrivere per attivare l'estenzione sul browser

/* CONSEGNA:
Rifare l'esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista*/

const app = new Vue(
    {
        el: '#root',
        data: {
            newTodo: '',
            toDos: [
                ' Fare i compiti',
                ' Fare la spesa',
                ' Fare il bucato'
            ],
        },
})

/*BONUS:
-modificare la struttura dell'array dei todos. Da array di stringhe diventa array di oggetti.
-Con la proprietà done colorare in verde gli <li> di todos  che sono stati svolti, in rosso gli <li> con todos non ancora svolti.
Al click su un <li> potremo infine modificare la proprietà done, portandola a false se era precedentemente a true e viceversa.
*/