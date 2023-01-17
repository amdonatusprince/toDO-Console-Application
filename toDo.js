const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let toDoList = [];

function addToDo(item) {
  toDoList.push(item);
  console.log(`${item} has been added to your To-Do list.`);
}

function deleteToDo(item) {
  let index = toDoList.indexOf(item);
  if (index !== -1) {
    toDoList.splice(index, 1);
    console.log(`${item} has been deleted from your To-Do list.`);
  } else {
    console.log(`${item} is not in your To-Do list.`);
  }
}

function updateToDo(oldItem, newItem) {
  let index = toDoList.indexOf(oldItem);
  if (index !== -1) {
    toDoList[index] = newItem;
    console.log(`${oldItem} has been updated to ${newItem} in your To-Do list.`);
  } else {
    console.log(`${oldItem} is not in your To-Do list.`);
  }
}

function displayToDos() {
  console.log("Your To-Do list:");
  toDoList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

console.log("Welcome to the To-Do List Application!");
console.log("Enter 'add' to add a new item, 'update' to update an existing item, 'delete' to delete an item, and 'list' to display all items.");

rl.question("What would you like to do? ", (answer) => {
  if (answer === "add") {
    rl.question("What item would you like to add? ", (item) => {
      addToDo(item);
      rl.close();
    });
  } else if (answer === "update") {
    rl.question("What item would you like to update? ", (oldItem) => {
      rl.question("What is the new item? ", (newItem) => {
        updateToDo(oldItem, newItem);
        rl.close();
      });
    });
  } else if (answer === "delete") {
    rl.question("What item would you like to delete? ", (item) => {
      deleteToDo(item);
      rl.close();
    });
  } else if (answer === "list") {
    displayToDos();
    rl.close();
  } else {
    console.log("Invalid command. Please enter 'add', 'update', 'delete', or 'list'.");
    rl.close();
  }
});
