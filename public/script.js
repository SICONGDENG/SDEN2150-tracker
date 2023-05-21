// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(form.elements.taskTraining.value)

  addTask(
    form.elements.taskName.value,
    form.elements.taskTimes.value,
    form.elements.taskWeight.value,
    form.elements.taskTraining.value,
    form.elements.taskDate.value,
  )
  console.log(taskList)
})

function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML = `<p><strong>${task.name}</strong><br>${task.training}<br>${task.weight}KG X ${task.times}<br>${task.date}</p>`;

  item.style.backgroundColor = "white";
  item.style.width = "30%";
  item.style.padding = "10px";
  item.style.marginBottom = "10px";
  item.style.borderRadius = "5px";
  item.style.listStyle = "none";
  // item.style.marginTop = "-10px";
  item.style.marginLeft = "55%";
  item.style.textAlign = "center";



  tasklist.appendChild(item);

  // Clear the value of the input once the task has been added to the page
  form.reset();

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  delButton.style.backgroundColor = "#e74c3c";
  delButton.style.color = "white";
  delButton.style.border = "none";
  delButton.style.padding = "5px 10px";
  delButton.style.borderRadius = "5px";
  delButton.style.cursor = "pointer";


  // Listen for when the delete button is clicked
  delButton.addEventListener("click", function (event) {
    taskList.forEach(function (taskArrayElement, taskArrayIndex) {
      if (taskArrayElement.id == item.getAttribute('data-id')) {
        taskList.splice(taskArrayIndex, 1)
      }
    })

    // Make sure the deletion worked by logging out the whole array
    console.log(taskList)

    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })
}


var taskList = [];


function addTask(name, times, weight, training, date) {
  // Creating the object, directly passing in the input parameters
  let task = {
    name: name,
    times: times,
    weight: weight,
    training: training,
    date: date,
  }

  taskList.push(task);
  displayTask(task);
}

// Call the function with test values for the input paramaters
addTask("Initial Sketches", 5, 50, "Concept Ideation", "Google");

// Log the array to the console.
console.log(taskList);