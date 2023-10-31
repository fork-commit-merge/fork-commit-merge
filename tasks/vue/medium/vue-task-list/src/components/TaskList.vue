<!-- Vue - Medium -->

<!-- TODO: Add all the necessary code to the commented sections to make the Task List work as expected -->

<template>
  <div class="task-container">
    <!-- Add a button to add a task -->
    <input type="text" v-model="newTask" placeholder="Enter a new task..."/>
    <button @click="addTask">Add Task</button>
    <!-- Display tasks in a list. Ensure you loop through tasks and display them. -->
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <input type="checkbox" v-model="task.completed"/>
            <span :class="{ completed: task.completed }">{{ task.name }}</span>
      </li>
    </ul>
    <!-- Display total tasks and completed tasks count -->
    <p>Total Tasks: {{ tasks.length }}</p>
    <p>Completed Tasks: {{ completedTasks }}</p>
    <!-- Add filter buttons for All and Completed tasks -->
    <button @click="Filter('all')">All</button>
    <button @click="Filter('completed')">Completed</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
      // Add filter data property
      filter: "all",
    };
  },
  computed: {
    // Create a computed property to filter tasks based on the filter state
    filteredTasks() {
      if (this.filter === "completed") {
        return this.tasks.filter(task => task.completed);
      } else{
        return this.tasks;
      }
    },
    // Create a computed property to get the count of completed tasks
    completedTasks(){
      return this.tasks.filter( task => task.completed).length;
    }
  },
  methods: {
    // Create a method to add a task. Ensure the task has an id, name, and completed status.
    addTask() {
      if (this.newTask.trim() !== "") {
        const task = {
          id: Date.now(),
          name: this.newTask,
          completed: false
        };
        this.tasks.push(task);
        this.newTask = "";
      }
    },
    Filter(filter) {
      this.filter = filter;
    }
  }
};
</script>

<style>
  .task-container {
    margin-left: 40%;
  }
  .completed {
    text-decoration: line-through;
  }
  ul {
    list-style-type: none;
  }
</style>