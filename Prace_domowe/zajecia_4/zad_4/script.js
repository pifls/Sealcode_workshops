var x = 10;

//Function returns binary of given number
function toBin(str){
    if(x >= 0){
        var bin = (+str).toString(2);
        console.log(bin);
    }
    else{
        console.log("Errr")
    }
}

toBin(x);