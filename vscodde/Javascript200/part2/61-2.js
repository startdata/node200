function verifyNumber(n) {
    if (!n || Number.isNaN(n)) return 0; //NaN은 산술처리가 안되기 때문에 
    return n;
}

const num1 = verifyNumber(15); // 15
const num2 = verifyNumber(undefined); // 0
const num3 = verifyNumber(null); // 0
const num4 = verifyNumber(NaN); // 0

console.log(num1 + num2 + num3 + num4);