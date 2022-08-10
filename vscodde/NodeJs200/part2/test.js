// function s (a,b) {
//     return new Date(2016, a-1,b).toString().slice(0,3).toUpperCase()
// }

// console.log(s(1,6));


// function solution(a,b) {
//     const weekToday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
//     //월 날짜
//     const leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31];
    
//     // 2016년 1월 1일 시작 날 금요일(인덱스 4번)
//     let day = b+4;

//     // 
//     for(let i = 0; i< a-1; i++){
//         day += leapYearMonths[i]
//         console.log(day);
//     } 
//     return weekToday[day%7]
// }

// console.log(solution(2,5));

let a = [1,5,2,6,3,7,4]
let b = [[2,5,3], [4,4,1], [1,7,3]]
let d = a.slice(b[1][0]+1,b[1][1]+1).sort()
console.log(d);
function solu(array, commands) {
    let answer = [];
    for(let u = 0;u <commands.length ; u++){
        let aa = array.slice(commands[u][0],commands[u][1]).sort()
       let bb = aa[commands[u][2]]
      return answer += bb
    }

    console.log(answer);
    return answer;
}
console.log(solu(a, b));