<template>
    <!-- TODO: Implement the Vue component code here -->
     <div class="todo-list">
    <h1>My Todo List</h1>

    <!-- Input field to add new tasks -->
    <input
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Add a new task"
    />
    <button @click="addTask">Add</button>

    <!-- Task list -->
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input
          type="checkbox"
          v-model="task.completed"
        />
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.text }}
        </span>
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    // TODO: Implement the JavaScript code here
    name: "TodoList",
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* TODO: Implement the CSS code here */
.todo-list {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
input[type="text"] {
  margin-right: 10px;
  padding: 5px;
}
button {
  margin-left: 5px;
}
</style>
