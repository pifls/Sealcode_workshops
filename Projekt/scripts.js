/* WYPISANIE DATY W PASTACI DD/MM/RRRR */   
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;



var tab = []
var k   = 0;

document.addEventListener("DOMContentLoaded", function(event) {

    var addTodoInput = document.querySelector('#main-input');
    var addTodoBtn   = document.querySelector('#submit');
    
    addTodoBtn.addEventListener('click', function (event) {
    var inputValue = addTodoInput.value;
    
    addTask(inputValue);
    });
});


// funkcja tworzy obiekt i dodaje go do tablicy
function addTask(t){
    
    var task = new Object()
    task.description = t;
    task.status = false;
    task.id = k;
    
    tab.push(task);
    k++;
}