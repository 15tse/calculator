
function add(a, b){
    if(isNaN(a) || isNaN(b)){
        return"not valid numbers"
    }
return a+b;
}

console.log("addition",add(2,5))

function div(a, b){
    if(isNaN(a) || isNaN(b)){
        return"not valid numbers"
    }
    if(b==0) {
        return"not valid"
    }
return b/a
}
console.log("division",div(2,5))

function sub(a, b){
    if(isNaN(a) || isNaN(b)){
        return"not valid numbers"
    }
return b-a;
}
console.log("substruction",sub(2,5))
