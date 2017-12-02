var arr = [3,4,8,1,32,2,6,11,22,11,45,66,5,6,7,3,5,7,7,43,6,67,5,4,5,6,6,4,5,,6,6,5,5,5,7,5,,8,9,89,7,34,,2,23,43,65,65,65,43,,43,43,]

// Function check if number exist in array and output this number with index of first appearance in array
function checker(ar, x){
    
    for(var i = 0; i < ar.length; i++){
        
        if(ar[i] == x){
            console.log("number: " + ar[i]);
            console.log("index of first appearance: " + i);
            break;
        }
        else{
            if(i == ar.length - 1){
                console.log("Number " + x + " doesn't exist in array");
            }
        }
    }
}

checker(arr,8);
checker(arr,43);
checker(arr,9999);