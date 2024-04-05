
// practice 1
let todoList1 = [];

function printConsole(){
    const input1 = document.querySelector('.js-input1');
    todoList1.push(input1.value);
    input1.value = '';
    console.log(todoList1);
}

//practice 2
let todoList2 = [];

function addToPage(){
    const input2 = document.querySelector('.js-input2');
    todoList2.push(input2.value);
    let result = '';
    todoList2.forEach(function (value){
        result += `<p>${value}</p>`;
    })

    document.querySelector('.js-result').innerHTML = result;
    input2.value = '';
}


//Todo List
let todoList3 = [];
function AddTodoList(){
    const input3 = document.querySelector('.js-input3');
    const jsDate = document.querySelector('.js-date');

    const input = input3.value;
    const date = jsDate.value;
    todoList3.push({
        input,
        date
    });

    let result = '';
    todoList3.forEach(function (object){
        result += 
        `<div class="js-result-list">
            <div>${object.input}</div>
            <div>${object.date}</div>
            <button class = "js-delete-button">Delete</button>
        </div>`;
    })
    document.querySelector('.js-result3').innerHTML = result;
    input3.value = '';
    jsDate.value = '' ;
}