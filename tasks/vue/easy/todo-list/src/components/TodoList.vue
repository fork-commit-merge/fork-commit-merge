<template>
    <div>
        <h2>Todo List</h2>
        <ul>
            <li v-for="(item, index) in todos" :key="index">
                {{ item }}
            </li>
        </ul>
        <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Enter a new todo" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: [],
            newTodo: '',
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        },
    },
};
</script>

<style scoped>
h2 {
    font-size: 24px;
    margin: 10px 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 5px 0;
}

input[type='text'] {
    width: 100%;
    padding: 5px;
    margin-top: 10px;
}
</style>

