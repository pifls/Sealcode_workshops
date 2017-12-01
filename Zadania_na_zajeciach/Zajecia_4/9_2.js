var tab = [];
var n = 10;
var m = 0;


for(var i = 0; i < n; i++){
        tab[i] = m;
        m++;
}

function rev(tab){
    for(var j = tab.length -1; j > 0; j--){
        console.log(tab[j]);
    }
}

var x = rev(tab);
