<!-- Vue - Medium -->

<!-- TODO: Add all the necessary code to the commented sections to make the Task List work as expected -->

<template>
  <div>
    <!-- Add a button to add a task -->
    <!-- Display tasks in a list. Ensure you loop through tasks and display them. -->
    <!-- Display total tasks and completed tasks count -->
    <!-- Add filter buttons for All and Completed tasks -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
      // Add filter data property
    };
  },
  computed: {
    // Create a computed property to filter tasks based on the filter state
    // Create a computed property to get the count of completed tasks
  },
  methods: {
    // Create a method to add a task. Ensure the task has an id, name, and completed status.
  }
};
</script>

