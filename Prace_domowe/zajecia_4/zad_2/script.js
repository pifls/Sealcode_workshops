// TABLICZKA MNOZENIA

var tab = [1,2,3,4,5,6,7,8,9,10];

var tab1 = [];
for(var k = 0; k < tab.length; k++){
    tab1[k] = [];
}

for(var i = 0; i < tab.length; i++){
   
    for(var j = 0; j < tab.length; j++){
        
        tab1[i][j] = tab[i]*tab[j];
        }
}

     console.log(tab1);