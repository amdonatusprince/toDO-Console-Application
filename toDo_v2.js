// To-Do List Application

// Initialize an empty array for storing To-Do items
let toDoList = [];

// Function for adding a new To-Do item
function addToDo(item) {
  toDoList.push(item);
  console.log(`${item} has been added to your To-Do list.`);
}

// Function for deleting a To-Do item
function deleteToDo(item) {
  let index = toDoList.indexOf(item);
  if (index !== -1) {
    toDoList.splice(index, 1);
    console.log(`${item} has been deleted from your To-Do list.`);
  } else {
    console.log(`${item} is not in your To-Do list.`);
  }
}

// Function for updating a To-Do item
function updateToDo(oldItem, newItem) {
  let index = toDoList.indexOf(oldItem);
  if (index !== -1) {
    toDoList[index] = newItem;
    console.log(`${oldItem} has been updated to ${newItem} in your To-Do list.`);
  } else {
    console.log(`${oldItem} is not in your To-Do list.`);
  }
}

// Function for displaying all To-Do items
function displayToDos() {
  console.log("Your To-Do list:");
  toDoList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

console.log("Welcome to the To-Do List Application!");
console.log("Enter 'add' to add a new item, 'update' to update an existing item, 'delete' to delete an item, and 'list' to display all items.");

// Get user input for command
let command = prompt("What would you like to do?");

if (command === "add") {
  let item = prompt("What item would you like to add?");
  addToDo(item);
} else if (command === "update") {
  let oldItem = prompt("What item would you like to update?");
  let newItem = prompt("What is the new item?");
  updateToDo(oldItem, newItem);
} else if (command === "delete") {
  let item = prompt("What item would you like to delete?");
  deleteToDo(item);
} else if (command === "list") {
  displayToDos();
} else {
  console.log("Invalid command. Please enter 'add', 'update', 'delete', or 'list'.");
}
