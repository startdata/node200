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
const strings = ["sun", "bed", "car"]

function solution(strings, n){
    var answer = strings.sort((a,b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        if(a[n] === b[n]){
            if(a>b){
            return 1;  
            } else if(a<b) {
                return -1;
            } else {
                return 0;
            }
        }
    })
    return answer;
}

