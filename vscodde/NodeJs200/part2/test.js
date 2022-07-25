// const strings = ["sun", "bed", "car"]

// function solution(strings, n){
//     var answer = [];
//     for(let i =0; i<strings.length; i++){
//         let str = strings[i].split('')[n]
//         answer.push(str)
//     }
//     answer.sort()
// }
// console.log(solution(strings,1));
const cc = [{a:2,b:3,c:5},{a:2,b:5,c:5},{a:2,b:5,c:5},{a:1,b:2,c:5},{a:1,b:3,c:5}]

const bb = cc.filter(list => {
    list.a > 2
})

console.log(bb);