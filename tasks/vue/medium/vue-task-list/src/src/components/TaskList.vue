<template>
  <div>
    <button @click="addTask">Add Task</button>
    <p>Total Tasks: {{ totalTasks }}</p>
    <p>Completed Tasks: {{ completedTasks }}</p>
    <div>
      <button @click="filterTasks('all')">All</button>
      <button @click="filterTasks('completed')">Completed</button>
      <button @click="filterTasks('incomplete')">Incomplete</button>
    </div>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        {{ task.text }}
        <button @click="toggleTaskCompletion(task)">{{ task.completed ? 'Mark as Incomplete' : 'Mark as Completed'
        }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [], // Your task data
      filter: 'all',
    };
  },
  computed: {
    totalTasks() {
      return this.tasks.length;
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed).length;
    },
    filteredTasks() {
      if (this.filter === 'all') return this.tasks;
      if (this.filter === 'completed') return this.tasks.filter(task => task.completed);
      if (this.filter === 'incomplete') return this.tasks.filter(task => !task.completed);

      // Add a default return value to handle any other cases
      return this.tasks; // You can return the full list as a default
    },
  },
  methods: {
    addTask() {
      // Implement task addition logic here
      this.tasks.push({ id: Date.now(), text: 'New Task', completed: false });
    },
    filterTasks(filter) {
      this.filter = filter;
    },
    toggleTaskCompletion(task) {
      task.completed = !task.completed;
    },
  },
};
</script>
