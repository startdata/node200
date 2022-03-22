const a =[176,156,155,165,166,169]
let b = "";

a = b.split(" ").sort(function(a,b){
    return a - b;
}).join(" ");

if (a === b){
    console.log("Yes")
} else {
    console.log("NO")
}