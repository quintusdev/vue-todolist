//Creazione const createApp VUE JS
const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'ToBooList',
            newTask: '',

            tasks:[
                {
                    text: 'Fare l\' esercizio di Boolean',
                    done: false
                    //inserire proprieta' per bonus
                },
                {
                    text: 'Pushare il Readme.md',
                    done: false
                    //inserire proprieta' per bonus
                },
                {
                    text: 'Inserire i commenti in VS Code',
                    done: false
                    //inserire proprieta' per bonus
                },
                {
                    text: 'Ricorda di fare i commit',
                    done: false
                    //inserire proprieta' per bonus
                },
                {
                    text: 'Work Smart not Hard',
                    done: false
                    //inserire proprieta' per bonus
                }
            ]
        }
    },
    methods: {

        // creo il metodo per cambiare il valore di done dell'elemento con indice X da FALSE a TRUE
        changeTaskStatus(index){
            this.tasks[index].done = !this.tasks[index].done;
        },

        // creo il metodo per cancellare la task nella posizione X dell'array con SPLICE
        deleteTask(index){
            this.tasks.splice(index, 1);
        },

        // creo il metodo per aggiungere una nuova task all'array e togliere il contenuto dall'input
        addTask(){

            //creo un oggetto obj con la nuova task con attributo DONE su false.
            let obj = {
                text: this.newTask,
                done: false
            }

        //pusho OBJ nell'array delle tasks
        this.tasks.push(obj);

        //svuoto il contenuto di TEXT dall'INPUT
        this.newTask = '';
        }

        // metodo per esercizio BONUS
        
    },
}).mount('#app');