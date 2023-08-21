<!-- Vue - Medium -->

<!-- TODO: Add all the necessary code to the commented sections to make the Task List work as expected -->

<template>
  <div id="my-app" class="container">
    <h1>ToDo List</h1>
    <form>
      <input v-model="newTask" type="text" placeholder="New Task" />
      <button :disabled="!newTask" @click.prevent="addTask">Add Task</button>
      <button
        v-if="tasks.length &gt; 1"
        class="delete-all"
        @click.prevent="deleteAll"
      >
        Delete All
      </button>
    </form>
    <div v-for="(task, index) in filteredList" :key="index" class="tasks-list">
      <div class="task-box">
        <input type="checkbox" class="toggle" @input="task.done = !task.done" />
        <p :style="{ 'text-decoration': task.done ? 'line-through' : '' }">
          {{ task.words }}
        </p>
      </div>
      <div class="delete" @click="deleteTask(index)">Delete</div>
    </div>

    <footer class="todo-footer">
      <span class="todo-count">
        <strong>{{ completedTask }}</strong> done
      </span>
      <ul class="filters">
        <li>
          <span
            :class="{ selected: filter === 'all' }"
            @click.prevent="filter = 'all'"
          >
            All
          </span>
        </li>
        <li>
          <span
            :class="{ selected: filter === 'done' }"
            @click.prevent="filter = 'done'"
          >
            Done
          </span>
        </li>
        <li>
          <span
            :class="{ selected: filter === 'todo' }"
            @click.prevent="filter = 'todo'"
          >
            To be done
          </span>
        </li>
      </ul>
    </footer>
  <div>
    <!-- Add a button to add a task -->
    <!-- Display tasks in a list. Ensure you loop through tasks and display them. -->
    <!-- Display total tasks and completed tasks count -->
    <!-- Add filter buttons for All and Completed tasks -->
  </div>
</template>

<script>
export default {
  name: "TaskListVue",
  data() {
    return {
      newTask: "",
      tasks: [],
      filter: "all",
    };
  },
  computed: {
    // Create a computed property to filter tasks based on the filter state
    // Create a computed property to get the count of completed tasks
    completedTask() {
      return this.tasks.filter((todo) => todo.done).length;
    },
    filteredList() {
      if (this.filter === "todo") {
        return this.tasks.filter((todo) => !todo.done);
      } else if (this.filter === "done") {
        return this.tasks.filter((todo) => todo.done);
      }
      return this.tasks;
    },
  },
  methods: {
    addTask: function () {
      this.tasks.push({ words: this.newTask, done: false });
      this.newTask = "";
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
    deleteAll: function () {
      this.tasks = [];
    },
  },
};
</script>
