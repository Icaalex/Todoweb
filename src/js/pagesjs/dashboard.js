// re-render feather icons

feather.replace();

import { Sidebar } from "../components/sidebar.js";

document.getElementById("sidebar-container").innerHTML = Sidebar("projects");


/* to display in paragraph
const inpt = document.getElementById('inpt');
const show = document.getElementById('show');
const showw = document.getElementById('showw');


inpt.addEventListener('input', function(){

    show.innerHTML = inpt.value;
});

//To add task
const form = document.getElementById('todo-form');
        const input = document.getElementById('todo-input');
        const list = document.getElementById('todo-list');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (input.value !== '') {
                const listItem = document.createElement('li');
                const but = document.createElement('button');
                but.innerHTML = input.value;
                listItem.appendChild(but);
                list.appendChild(listItem);
                input.value = '';

            
            }
            showw.innerHTML = input.value;

            // Create delete button
const deleteButton = document.createElement('button');
deleteButton.innerText = "Delete";
deleteButton.style.marginLeft = "10px";

// Add delete button to list item
listItem.appendChild(deleteButton);

// Delete functionality
deleteButton.addEventListener('click', function () {
    listItem.remove();
});


        });






//To mark task as completed
//        list.addEventListener('click', function(event) {
//            if (event.target.tagName === 'LI') {
//               event.target.classList.toggle('completed');
//          }
//      });*/

 //To add task
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (input.value !== '') {
        const listItem = document.createElement('li');
        const but = document.createElement('button');
        but.innerHTML = input.value;

        listItem.appendChild(but);
        
        // NEW — delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.style.marginLeft = "10px";
        listItem.appendChild(deleteButton);

        // Add list item to list
        list.appendChild(listItem);

        // Clear input
        input.value = '';

        // DELETE FUNCTION
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });
    }
});
