const todoList = [
  { name: "make dinner", dueDate: "2022-12-12" },
  { name: "Wash dishes", dueDate: "2022-12-12" },
];

renderTodoList();

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

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>

    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;

    todoListHtml += html;
  }
  console.log(todoListHtml);

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}
// Main idea of javascript
/*
1. Save the data
2. Generate the html
3. Make it interactive
*/
