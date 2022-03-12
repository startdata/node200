// function checkNumber(val){
//     if (typeof val !== 'number') throw '유효하지 않는 값입니다.';
//     console.log('숫자형 값으로 확인되었습니다.');
// }

// checkNumber(100);
// checkNumber('Wrong type');
// checkNumber('완료');

function checkNumber1(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}
try {
    checkNumber1(100);
    checkNumber1('Wrong type');
} catch(e){
    console.log(`에러가 발생했습니다. >>> ${e}`);
} finally {
    console.log('완료');
}

