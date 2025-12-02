//to display in paragraph
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


        });


//To delete task
const btn = document.getElementById('btn')
        but.addEventListener('click', function() {
           btn.addEventListener('click', function() {

                but.innerHTML = '';
            })         
            
           alert("working")
        })



//To mark task as completed
//        list.addEventListener('click', function(event) {
//            if (event.target.tagName === 'LI') {
//               event.target.classList.toggle('completed');
//          }
//      });


