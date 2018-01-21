/* WYPISANIE DATY W PASTACI DD/MM/RRRR */   
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;



var taskArr = []


document.addEventListener("DOMContentLoaded", function(event) {

    var addTodoInput = document.querySelector('#main-input');
   // var addTodoBtn   = document.querySelector('#submit');
    
    
    
    
   
    
    document.getElementById("submit").addEventListener("click", function(){
        addTask();
    });
    
    document.querySelector('#main-input').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 == Enter
      addTask();
    }
    });
    

   
         document.querySelector('body').addEventListener('click', function(event) {
             
             for(var d=0; d <= 3; d++){
            if (event.target.className.toLowerCase() === 'delete' + d) {
                  deleteTask(d);
             }
             }
         });
    
    
    
    function addTask() {
    
    var inputValue = addTodoInput.value;
        
        
    if(inputValue == ""){
        alert("Nie możesz dodać pustego zadania!");
    }
    else{
        taskArr.push(inputValue);
        taskDisp(taskArr);
    }
    
    // CZYSZCZENIE POLA DO WPISYWANIA ZADANIA
    document.getElementById('main-input').value = "";
      
    }
    
    
    function deleteTask(dt){
        
        
        
        taskArr.splice(dt, 1);
        
        taskDisp(taskArr);
    }
    
    
    
});



function taskDisp(t){
    
     var ar = [];
    if(t.length == 0){
        document.getElementById("ul-tasks").innerHTML = "There are no tasks to do.";
    }
    else{
        for(var i=0; i<t.length; i++){


        ar[i] = "<li> <input class=\"checker\" type=\"checkbox\">" + t[i] + "<button class=\"delete" + i + "\"+ type=\"button\"> X</button> </li>";
            
        }

        document.getElementById("ul-tasks").innerHTML = ar.join("");
    }
    
    
}

