/* WYPISANIE DATY W PASTACI DD/MM/RRRR */   
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;



var taskArr = []
var k = 0;

document.addEventListener("DOMContentLoaded", function(event) {

    var addTodoInput = document.querySelector('#main-input');
    var addTodoBtn   = document.querySelector('#submit');
    
    addTodoBtn.addEventListener('click', function (event) {
    var inputValue = addTodoInput.value;
    
    if(inputValue == ""){
        alert("Nie możesz dodać pustego zadania!");
    }
    else{
        taskArr.push(inputValue);
        taskDisp(taskArr);
    }
    });
});

function taskDisp(t){
    var ar = [];
    for(var i=0; i<t.length; i++){
    ar[i] = "<li> <input class=\"checker\" type=\"checkbox\">" + t[i] + "<button class=\"delete\" type=\"button\">X</button> </li>";
    }
    document.getElementById("ul-tasks").innerHTML = ar.join("");
}

