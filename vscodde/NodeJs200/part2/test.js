// function s (a,b) {
//     return new Date(2016, a-1,b).toString().slice(0,3).toUpperCase()
// }

// console.log(s(1,6));


function solution(a,b) {
    const weekToday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
    //월 날짜
    const leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    // 2016년 1월 1일 시작 날 금요일(인덱스 4번)
    let day = b+4;

    // 
    for(let i = 0; i< a-1; i++){
        day += leapYearMonths[i]
        console.log(day);
    } 
    return weekToday[day%7]
}

console.log(solution(2,5));