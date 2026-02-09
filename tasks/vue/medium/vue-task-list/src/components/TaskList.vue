<!-- Vue - Medium -->

<!-- TODO: Add all the necessary code to the commented sections to make the Task List work as expected -->
<!-- Add a button to add a task XXXX--> 
<!-- Display tasks in a list. Ensure you loop through tasks and display them. XXX-->
<!-- Display total tasks and completed tasks count -->
<!-- Add filter buttons for All and Completed tasks XXX -->
<!--
	// Add filter data property
	// Create a computed property to filter tasks based on the filter state
	// Create a computed property to get the count of completed tasks
	// Create a method to add a task. Ensure the task has an id, name, and completed status.
-->

<template>

	<div>
		<h2>Tasks List</h2>
		<input type="radio" id="all" name="taskFilter" value="all" v-model="filter" checked>
		<label for="all">All</label>
		<input type="radio" id="completed" name="taskFilter" v-model="filter" value="completed">
		<label for="completed">Completed</label>
		<input type="radio" id="pending" name="taskFilter" v-model="filter" value="pending">
		<label for="completed">Pending</label>
		<ol>
			<li v-for="task in filteredTasks" :key="task.id">
				{{ task.text }}
				<button @click="completeTask(task.id)" v-if="!task.completed">Complete</button>
				<span v-else class="tick-square">✔</span>
			</li>
		</ol>
		<p>Total tasks: {{ tasks.length }}</p>
		<p>Completed tasks: {{ completedTaksCount }}</p>
		<form action="" @submit.prevent="addTask">
			<input type="text" placeholder="Task description" v-model="newTask">
			<button>Add to list</button>
		</form>

	</div>

</template>

<script>
export default {
	name: "TaskList",
	computed: {
		filteredTasks() {
			if (this.filter === 'all') return this.tasks;
			if (this.filter === 'completed') return this.tasks.filter(t => t.completed);
			return this.tasks.filter(t => !t.completed);
		},

		completedTaksCount() {
			return this.tasks.filter(t => t.completed).length;
		}

	},
	data() {
		return {
			newTask: "",
			tasks: [],
			filter: 'all',
		};
	},
	methods: {
		addTask() {
			this.tasks.push({
				id: this.tasks.length + 1,
				text: this.newTask,
				completed: false
			});
			console.log(this.tasks);
			this.newTask = "";
		},

		completeTask(taskId) {
			let task = this.tasks.find( t=> t.id === taskId);
			if (task) {
				task.completed = true;
			}
		}
	}
};
</script>

<style scoped>
div {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f5f5f5; /* fondo suave */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

input[type="radio"] {
  margin-right: 0.3rem;
}

label {
  margin-right: 1rem;
  cursor: pointer;
  user-select: none;
  color: #555;
  font-weight: 500;
}

ol {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: background-color 0.2s, transform 0.1s;
}

li:hover {
  background-color: #f0f0f0;
  transform: translateY(-1px);
}

li.completed {
  text-decoration: line-through;
  color: #999;
  background-color: #e0e0e0;
}

li button {
  padding: 0.3rem 0.7rem;
  border: none;
  border-radius: 6px;
  background-color: #e2b24b;
  color: white;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.2s;
}

li button:hover {
  background-color: #b8913d;
}

.tick-square {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  font-size: 16px;
}

p {
  margin: 0.5rem 0;
  color: #333;
  font-weight: 500;
}

form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

form input[type="text"] {
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

form button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #2196F3;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

form button:hover {
  background-color: #1976d2;
}
</style>


