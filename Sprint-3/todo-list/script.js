// Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.textContent = todo.task;

    if (todo.completed) {
      li.classList.add("completed");
      li.style.textDecoration = "line-through";
    }

    const badge = document.createElement("span");
    badge.className = "badge bg-primary rounded-pill";

    const checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check";
    checkIcon.setAttribute("aria-hidden", "true");

    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash";
    trashIcon.setAttribute("aria-hidden", "true");

    // toggle completed
    checkIcon.addEventListener("click", () => {
      li.classList.toggle("completed");
      li.style.textDecoration =
        li.style.textDecoration === "line-through" ? "none" : "line-through";
      todos[index].completed = !todos[index].completed;
    });

    // delete todo
    trashIcon.addEventListener("click", () => {
      todos.splice(index, 1);
      populateTodoList(todos);
    });

    badge.append(checkIcon, trashIcon);
    li.appendChild(badge);
    list.appendChild(li);
  });
}
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  event.preventDefault();
  const input = document.querySelector('input[type="text"]');
  const text = input.value.trim();

  if (text) {
    // Push new object into our "source of truth" array
    todos.push({ task: text, completed: false });

    // Re-render the whole list based on the updated array
    populateTodoList(todos);

    // Cleanup
    input.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

document.querySelector("form").addEventListener("submit", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);

populateTodoList(todos);
