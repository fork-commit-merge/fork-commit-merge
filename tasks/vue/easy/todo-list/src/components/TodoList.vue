<template>
  <main class="container">
    <div class="card content">
      <div class="app-heading">
        <h1>To do app</h1>
      </div>

      <div class="form-container">
        <form class="add-todo-form" action="">
          <div class="input-div">
            <input
              id="add-input-field"
              type="text"
              placeholder="Input your todo"
              v-model="enteredTodo"
            />
            <button
              @click.prevent="() => addTodo(enteredTodo)"
              id="add-todo-btn"
            >
              <svg
                id="add-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 18L12 6"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button
              @click.prevent="saveEditHandler"
              :class="{
                hidden: !isSaveEditBtnShown,
                save: !isSaveEditBtnShown,
              }"
              id="save-edit-btn"
            >
              Save Edit
            </button>
          </div>
        </form>
      </div>

      <div class="divider"></div>

      <div class="list-container">
        <div v-if="isErrorShown" class="error-container">
          <p class="error-message">Invalid input, please put in a Todo</p>
        </div>

        <ul class="todo-list">
          <li class="todo-item" v-for="(todo, idx) in todoList" :key="idx">
            <label class="checkbox-container">
              <input
                @change="($event) => toggleCheckTodo($event, idx)"
                class="check-todo"
                type="checkbox"
                :id="idx"
                ref="checkbox"
              />
              <span class="checkmark"></span>
            </label>

            <span class="entered-todo"> {{ todo }} </span>

            <span class="btn-icons">
              <button
                @click="($event) => editTodo($event, idx)"
                class="btn edit-todo-btn"
              >
                <svg
                  id="edit-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 20.0001V21.0001C8.26522 21.0001 8.51957 20.8947 8.70711 20.7072L8 20.0001ZM4 20.0001H3C3 20.5524 3.44772 21.0001 4 21.0001V20.0001ZM4 16.0001L3.29289 15.293C3.10536 15.4805 3 15.7349 3 16.0001H4ZM15.2929 4.7072L16 5.41431L16 5.41431L15.2929 4.7072ZM16.7071 4.7072L16 5.41431L16 5.41431L16.7071 4.7072ZM19.2929 7.29299L20 6.58588V6.58588L19.2929 7.29299ZM19.2929 8.7072L18.5858 8.00009L19.2929 8.7072ZM8 19.0001H4V21.0001H8V19.0001ZM5 20.0001V16.0001H3V20.0001H5ZM4.70711 16.7072L16 5.41431L14.5858 4.00009L3.29289 15.293L4.70711 16.7072ZM16 5.41431L18.5858 8.00009L20 6.58588L17.4142 4.00009L16 5.41431ZM18.5858 8.00009L7.29289 19.293L8.70711 20.7072L20 9.41431L18.5858 8.00009ZM18.5858 8.00009V8.00009L20 9.41431C20.781 8.63326 20.781 7.36693 20 6.58588L18.5858 8.00009ZM16 5.41431H16L17.4142 4.00009C16.6332 3.21904 15.3668 3.21904 14.5858 4.00009L16 5.41431Z"
                    fill="#14181F"
                  />
                  <path
                    d="M12 8L16 12"
                    sdtroke="#14181F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button
                @click.prevent="deleteTodo(idx)"
                type="button"
                class="btn delete-todo-btn"
              >
                <svg
                  id="delete-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10L14 17"
                    stroke="#14181F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 10L10 17"
                    stroke="#14181F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6V5C5.44772 5 5 5.44772 5 6H6ZM18 6H19C19 5.44772 18.5523 5 18 5V6ZM6 7H18V5H6V7ZM17 6V20H19V6H17ZM17 20H7V22H17V20ZM7 20V6H5V20H7ZM7 20H7H5C5 21.1046 5.89543 22 7 22V20ZM17 20V22C18.1046 22 19 21.1046 19 20H17Z"
                    fill="#14181F"
                  />
                  <path
                    d="M4 6H20"
                    stroke="#14181F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 6V7C16.5523 7 17 6.55228 17 6H16ZM8 6H7C7 6.55228 7.44772 7 8 7V6ZM9 4H15V2H9V4ZM15 4V6H17V4H15ZM16 5H8V7H16V5ZM9 6V4H7V6H9ZM15 4H17C17 2.89543 16.1046 2 15 2V4ZM9 2C7.89543 2 7 2.89543 7 4H9V4V2Z"
                    fill="#14181F"
                  />
                </svg></button
            ></span>
          </li>
        </ul>
      </div>
    </div>

    <footer>
      <p class="copyright-message">
        Copyright &copy; | Deborah Animashaun, <br />
        Based on Figma design by
        <a
          class="figma-link"
          href="https://www.figma.com/community/file/1080893764520102996"
        >
          Deniz Yoldaş Aksu
        </a>
      </p>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
      enteredTodo: "",
      isErrorShown: false,
      editIcon: ``,
      deleteIcon: ``,
      selectedTodoId: null,
      selectedTodoIdx: null,
      isSaveEditBtnShown: false,
      selectedTodo: null,
    };
  },

  methods: {
    addTodo(todo) {
      this.enteredTodo.length <= 0
        ? this.renderError()
        : this.todoList.push(todo);
      console.log("todo", this.todoList);
      this.enteredTodo = "";
    },

    renderError() {
      this.isErrorShown = true;

      setTimeout(() => {
        this.isErrorShown = false;
      }, 700);
    },

    toggleCheckTodo(e, idx) {
      this.selectedTodoId = idx;
      let checkbox = this.$refs.checkbox[idx];
      const todoItem = e.target.closest(".todo-item");
      console.log("toggle ", this.selectedTodoId === idx, checkbox);
      this.selectedTodoId === idx && checkbox?.["checked"]
        ? todoItem.classList.add("todo-done")
        : todoItem.classList.remove("todo-done");
    },

    editTodo(e, idx) {
      this.selectedTodo = this.todoList[idx];
      this.selectedTodoIdx = idx;
      this.enteredTodo = this.selectedTodo;
      this.isAddBtnShown = false;
      this.isSaveEditBtnShown = true;
    },

    saveEditHandler() {
      this.todoList[this.selectedTodoIdx] = this.enteredTodo;

      setTimeout(() => {
        this.enteredTodo = "";
        this.isAddBtnShown = true;
        this.isSaveEditBtnShown = false;
      }, 1000);
    },

    deleteTodo(idx) {
      this.todoList.splice(idx);
    },
  },
};
</script>

<style scoped>
/* COMMONALITIES */
.container {
  background-color: #3f72af;
  height: 100vh;
  margin: 0px;
  padding: 5vw;
}

* {
  margin: 0px;
  padding: 0px;
  font-family: "Ubuntu", sans-serif;
}

.btn {
  background-color: transparent;
  border: none;
}

/* CARD */
.card {
  border-radius: 10px;
  background-color: #f9f7f7;
  padding: 25px;
  margin-bottom: 25px;
}

.card h1 {
  text-transform: capitalize;
  font-weight: 400;
}

/* FORM */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.app-heading {
  margin-bottom: 19.6px;
}

.form-container {
  width: 73%;
}

.input-div {
  position: relative;
}

#add-input-field {
  width: 82%;
  height: 32px;
  padding-left: 0.5em;
  background: #dbe2ef;
  border: 1px solid rgba(177, 177, 177, 0.4);
  border-radius: 5px;
}

#add-todo-btn,
#save-edit-btn {
  position: absolute;
  height: 34px;
  width: 18%;
  right: 1px;
  background: #3f72af;
  border: none;
  border-radius: 0px 5px 5px 0px;
  color: #f9f7f7;
  cursor: pointer;
}

#save-edit-btn {
  width: 30%;
}

.delete-todo-btn,
.edit-todo-btn {
  cursor: pointer;
}

/* DIVIDER */

.divider {
  width: 91%;
  margin: 15px 13px;
}

.divider:after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.5);
}

.list-container {
  width: 90%;
}

/* TODOS */

.todo-item {
  background: #dbe2ef;
  border-radius: 5px;
  margin-top: 5px;
  list-style: none;
  padding: 13px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  text-transform: capitalize;
}

.entered-todo {
  flex-basis: 50%;
}

.btn-icons {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  width: 53px;
}

.hidden {
  display: none;
}

.checkbox-container {
  position: relative;
  display: block;
  cursor: pointer;
  font-size: 20px;
}

input[type="checkbox"] {
  visibility: hidden;
}

.checkmark {
  position: absolute;
  top: 0%;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #f9f7f7;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.check-todo:checked ~ .checkmark:after {
  display: block;
}

.checkmark:after {
  left: 8px;
  bottom: 5px;
  width: 6px;
  height: 12px;
  border: solid #3f72af;
  border-width: 0 4px 4px 0px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.todo-done {
  filter: blur(2px) grayscale(100%);
  transition: filter 3s;
}

.error-message {
  color: red;
  text-transform: capitalize;
  text-align: center;
  font-size: 22px;
}

/* FOOTER */

.copyright-message {
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}

.figma-link {
  color: #ffffff;
  border-bottom: double #f9f7f7;
}

.figma-link:hover {
  font-size: larger;
  color: #000000;
}

@media only screen and (min-width: 768px) {
  .card {
    padding: 35px;
  }

  .input-div {
    width: 80%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .entered-todo {
    flex-basis: 70%;
  }

  #add-input-field {
    height: 42px;
    padding-left: 0.8em;
  }

  #add-todo-btn,
  #save-edit-btn {
    height: 44px;
    cursor: pointer;
  }
}
</style>
