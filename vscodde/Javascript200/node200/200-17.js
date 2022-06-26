const greeting = 'hello';
const dateString = '2017-08-24T11:00:00';
const smallBracket = '()';

// replace
const replacedGreeting = greeting.replace('e1', '');
const replacedDateString = dateString.replace('T', ' ');
const middleBracket = smallBracket.replace('(', '{').replace(')', '}');

// print
console.log('e1 없애기 : %s', replacedGreeting);
console.log('T를 공백으로 : %s', replacedDateString);
console.log('() => {} : %s', middleBracket);