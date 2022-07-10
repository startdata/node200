const s = 'ppppooooyy'

const solution = (s) => {
    let answer = true;
    let count = 0;
    let a = s.indexOf('p')
    let b = s.indexOf('y')
    let c = s.indexOf('P')
    let d = s.indexOf('Y')

    while(a !== -1){
        count++;
        a = s.indexOf('p', a+1);
    }
}

console.log(solution(s));