<template>

    <div>
        <h1>Vue Todo List</h1>
        <ul id="list">
            <li v-for="(task, i) in tasks" :key="i">
                <input type="checkbox" v-model="task.complete">
                <span :class="{ completed: task.complete }">
                    {{ task.text }}
                </span>
                <button @click="eraseTask(i)">Erase</button>
            </li>
        </ul>

        <h3>Add tasks to the list: </h3>
        <form action="">
            <input 
            type="text"
            v-model="newTask.text"
            @keydown.enter.prevent="addTask"
            >
            <button
            :disabled="isTaskValid"
            @click.prevent="addTask"
            >
                Add
            </button>
        </form>
    </div>

</template>

<script>
export default {
    name: "TodoList",
    computed: {
        isTaskValid() {
            return this.newTask.text.trim() === "";
        }
    },
    data() {
        return {
            tasks: [],
            newTask: {
                text: "",
                complete: false
            }
        }
    },
    methods: {

        addTask() {
            if (this.newTask.text.trim() !== "") {

                this.tasks.push({...this.newTask});
                this.newTask.text = '';

                console.log(this.tasks);
            }
        },

        eraseTask(index) {
            this.tasks.splice(index, 1);
        },

    }
};
</script>

<style scoped>
/* Fondo general y tipografía */
body {
    background-color: #f4f4f9;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    padding: 40px 0;
    display: flex;
}

/* Contenedor principal */
div {
    background-color: #fff;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    width: 400px;
}

/* Título principal */
h1 {
    text-align: center;
    margin-bottom: 25px;
    color: #333;
}

/* Lista de tareas */
ul#list {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
}

/* Cada tarea */
ul#list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f9f9f9;
    padding: 10px 12px;
    margin-bottom: 10px;
    border-radius: 6px;
    transition: background-color 0.2s;

}

ul#list span {
    overflow: hidden;
    text-overflow: ellipsis;
}

ul#list li:hover {
    background-color: #e6f0ff;
}

/* Checkbox */
ul#list li input[type="checkbox"] {
    margin-right: 10px;
    width: 18px;
    height: 18px;
}

/* Botón "Erase" */
ul#list li button {
    background-color: #ff4d4f;
    border: none;
    color: #fff;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s;
}

ul#list li button:hover {
    background-color: #e33b3f;
}

/* Subtítulo */
h3 {
    margin-bottom: 10px;
    color: #555;
}

/* Formulario */
form {
    display: flex;
    gap: 10px;
}

/* Input de nueva tarea */
form input[type="text"] {
    flex: 1;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    transition: border-color 0.2s;
}

form input[type="text"]:focus {
    outline: none;
    border-color: #3399ff;
}

/* Botón "Add" */
form button {
    padding: 8px 15px;
    border-radius: 5px;
    border: none;
    background-color: #3399ff;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
}

form button:disabled {
    background-color: #b0d4ff;
    cursor: not-allowed;
}

form button:hover:not(:disabled) {
    background-color: #007acc;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

</style>

