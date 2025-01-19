
function adder() {
    let a = document.getElementById("display").value;
    
    if (a == "") {
        alert("Please enter something");
    } else {
        
        let list = document.getElementById("ul");
        list.className = 'list-group';
        let newTask = document.createElement('li');
        newTask.className = 'list-group-item';
        let newButton = document.createElement("button");
        newButton.className = "btn btn-danger";
        let editButton = document.createElement('button');
        editButton.className = 'btn btn-primary';


        newTask.innerHTML = a;
        newButton.innerHTML = "x";
        editButton.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#fff" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1,22V4A1,1,0,0,1,2,3H12a1,1,0,0,1,0,2H3V21H19V12a1,1,0,0,1,2,0V22a1,1,0,0,1-1,1H2A1,1,0,0,1,1,22ZM11.293,8.626l7.333-7.333a1,1,0,0,1,1.414,0l2.667,2.666a1,1,0,0,1,0,1.415l-7.334,7.333a1,1,0,0,1-.707.293H12a1,1,0,0,1-1-1V9.333A1,1,0,0,1,11.293,8.626ZM13,11h1.252l6.334-6.333L19.333,3.414,13,9.748Z"/></svg>
`
        
        newButton.onclick = function() {
            newTask.remove();
            newButton.remove();
        }
        list.appendChild(newTask);
        newTask.appendChild(newButton);
        newTask.appendChild(editButton);
        
        editButton.onclick = function() {
            document.getElementById('display').value = a;
            
            newTask.remove();
            
        }
        document.getElementById("display").value = "";
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
