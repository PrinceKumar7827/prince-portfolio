
function adder() {
    let a = document.getElementById("input").value;
    
    if (a == "") {
        alert("Please enter something");
    } else {
        
        let list = document.getElementById("ul");
        let newButton = document.createElement("button");
        let newTask = document.createElement("li");

        newButton.style.cursor = "pointer";
        newButton.style.height = "30px";
        newButton.style.width = "40px";
        newButton.style.textAlign = "center";

        newTask.textContent = a;
        newButton.innerHTML = "X";
        
        newButton.onclick = function() {
            newTask.remove();
            newButton.remove();
        }
        
        list.appendChild(newTask);
        list.appendChild(newButton);
        
        document.getElementById("input").value = "";

        
    }

}


// Load tasks from localStorage when the page loads
// window.onload = function () {
//     let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     let list = document.getElementById("ul");

//     savedTasks.forEach(taskText => {
//         // Create task and delete button
//         let newButton = document.createElement("button");
//         let newTask = document.createElement("li");

//         // Style the delete button
//         newButton.style.cursor = "pointer";
//         newButton.style.height = "30px";
//         newButton.style.width = "40px";
//         newButton.style.textAlign = "center";

//         newTask.textContent = taskText;
//         newButton.innerHTML = "X";

//         // Add delete functionality
//         newButton.onclick = function () {
//             newTask.remove();
//             newButton.remove();
//             saveTasksToLocalStorage(); // Update localStorage after deletion
//         };

//         list.appendChild(newTask);
//         list.appendChild(newButton);
//     });
// };

// // Save tasks to localStorage
// function saveTasksToLocalStorage() {
//     let tasks = [];
//     // Collect all list item text content
//     document.querySelectorAll("#ul li").forEach(task => {
//         tasks.push(task.textContent);
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // Your existing adder function
// function adder() {
//     let a = document.getElementById("input").value;

//     if (a == "") {
//         alert("Please enter something");
//     } else {
//         let list = document.getElementById("ul");
//         let newButton = document.createElement("button");
//         let newTask = document.createElement("li");

//         // Style the delete button
//         newButton.style.cursor = "pointer";
//         newButton.style.height = "30px";
//         newButton.style.width = "40px";
//         newButton.style.textAlign = "center";

//         newTask.textContent = a;
//         newButton.innerHTML = "X";

//         // Add delete functionality
//         newButton.onclick = function () {
//             newTask.remove();
//             newButton.remove();
//             saveTasksToLocalStorage(); // Update localStorage after deletion
//         };

//         list.appendChild(newTask);
//         list.appendChild(newButton);

//         // Clear the input field
//         document.getElementById("input").value = "";

//         saveTasksToLocalStorage(); // Save to localStorage after adding
//     }
// }
