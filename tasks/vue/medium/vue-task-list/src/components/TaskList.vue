<template>
  <div>
    <h1>Task List</h1>
    <div>
      <input type="text" v-model="newTaskText" placeholder="Enter task name" />
      <button @click="addTask">Add Task</button>
    </div>
    <div>
      <h2>Total Tasks: {{ totalTasks }}</h2>
      <h2>Completed Tasks: {{ completedTasks }}</h2>
    </div>
    <div>
      <button @click="setFilter('all')">All</button>
      <button @click="setFilter('completed')">Completed</button>
      <button @click="setFilter('uncompleted')">Uncompleted</button>
    </div>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <span>{{ task.text }} ({{ task.completed ? 'Completed' : 'Not Completed' }})</span>
        <button @click="markAsCompleted(task)" v-if="!task.completed">Mark as Completed</button>
        <button @click="markAsIncomplete(task)" v-if="task.completed">Mark as Incomplete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTaskText: '',
      filter: 'all',
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'completed') {
        return this.tasks.filter(task => task.completed);
      } else if (this.filter === 'uncompleted') {
        return this.tasks.filter(task => !task.completed);
      }
      return this.tasks;
    },
    totalTasks() {
      return this.tasks.length;
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed).length;
    },
  },
  methods: {
    addTask() {
      if (this.newTaskText.trim() !== '') {
        this.tasks.push({ id: Date.now(), text: this.newTaskText, completed: false });
        this.newTaskText = '';
      }
    },
    setFilter(filter) {
      this.filter = filter;
    },
    markAsCompleted(task) {
      task.completed = true;
    },
    markAsIncomplete(task) {
      task.completed = false;
    },
  },
};
</script>