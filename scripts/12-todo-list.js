const todoList = [
  { name: "make dinner", dueDate: "2022-12-12" },
  { name: "Wash dishes", dueDate: "2022-12-12" },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
        
             <button class="delete-todo-button js-delete-todo-button">Delete</button> 
            `;

    todoListHtml += html;

    // console.log(todoListHtml);
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;

  // NodeList
  console.log(document.querySelectorAll(".js-delete-todo-button"));
  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

// Add todo
document
  .querySelector(".js-add-todo-button")
  .addEventListener("click", addTodo);

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}

//Todo list example 2

/*
  Steps(Algorithm):
  1. Loop through the array
  2. Create some html code for each todo
  3. Put the html on web page
  */

// Main idea of javascript
/*
  1. Save the data
  2. Generate the html
  3. Make it interactive
  */
