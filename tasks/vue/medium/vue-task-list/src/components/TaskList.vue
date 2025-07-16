<template>
  <div class="task-app">
    <header class="app-header">
      <h1 class="app-title">Vue Task Manager</h1>
    </header>

    <div class="task-input-container">
      <input
        v-model="newTask"
        type="text"
        placeholder="What do you need to be done?"
        class="task-input"
        @keyup.enter="addTask"
      >
      <button @click="addTask" class="add-button">
        <span class="plus-icon">+</span> Add Task
      </button>
    </div>

    <div class="filter-buttons">
      <button 
        @click="filter = 'all'" 
        :class="{ active: filter === 'all' }"
        class="filter-button"
      >
        All Tasks
      </button>
      <button 
        @click="filter = 'completed'" 
        :class="{ active: filter === 'completed' }"
        class="filter-button"
      >
        Completed
      </button>
    </div>

    <div class="task-list-container">
      <ul class="task-list">
        <li
          v-for="(task, index) in filteredTasks"
          :key="index"
          class="task-item"
        >
          <label class="task-checkbox">
            <input
              type="checkbox"
              v-model="task.completed"
              class="hidden-checkbox"
            >
            <span class="custom-checkbox"></span>
            <span
              class="task-text"
              :class="{ completed: task.completed }"
            >
              {{ task.text }}
            </span>
          </label>
        </li>
      </ul>

      <div v-if="filteredTasks.length === 0" class="empty-state">
        <p>No tasks found. Add a new task above!</p>
      </div>
    </div>

    <footer class="stats-footer">
      <div class="stat-item">
        <span class="stat-number">{{ tasks.length }}</span>
        <span class="stat-label">Total Tasks</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ completedTasks }}</span>
        <span class="stat-label">Completed</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ tasks.length - completedTasks }}</span>
        <span class="stat-label">Remaining</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
      newTask: "",
      tasks: [],
      filter: "all"
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === "completed") {
        return this.tasks.filter(task => task.completed);
      }
      return this.tasks;
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed).length;
    }
  },
  methods: {
    addTask() {
      const text = this.newTask.trim();
      if (text) {
        this.tasks.push({ text, completed: false });
        this.newTask = "";
      }
    }
  }
};
</script>

<style scoped>
.task-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.app-header {
  text-align: center;
  margin-bottom: 32px;
}

.app-title {
  color: #294158ff;
  font-size: 28px;
  margin-bottom: 8px;
}

.app-subtitle {
  color: #7f8c8d;
  font-size: 16px;
  margin-top: 0;
}

.task-input-container {
  display: flex;
  margin-bottom: 24px;
  gap: 8px;
}

.task-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.task-input:focus {
  outline: none;
  border-color: #70a7ccff;
}

.add-button {
  background-color: #70a7ccff;
  color: white;
  border: none;
  padding: 0 24px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.add-button:hover {
  background-color: #70a7ccff;
}

.plus-icon {
  font-size: 18px;
}

.filter-buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.filter-button {
  flex: 1;
  padding: 8px;
  background-color: #ecf0f1;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-button.active {
  background-color: #3498db;
  color: white;
}

.task-list-container {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-item {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.task-item:last-child {
  border-bottom: none;
}

.task-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px;
}

.hidden-checkbox {
  position: absolute;
  opacity: 0;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #bdc3c7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.hidden-checkbox:checked + .custom-checkbox {
  background-color: #3498db;
  border-color: #3498db;
}

.hidden-checkbox:checked + .custom-checkbox::after {
  content: "✓";
  color: white;
  font-size: 14px;
}

.task-text {
  flex: 1;
  color: #2c3e50;
}

.task-text.completed {
  color: #95a5a6;
  text-decoration: line-through;
}

.empty-state {
  text-align: center;
  padding: 24px;
  color: #95a5a6;
}

.stats-footer {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-number {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}

.stat-label {
  font-size: 13px;
  color: #7f8c8d;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
