// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

// 나의 답
// 굳이 변수에 저장하지 않아도 되는것을 구별하여 메모리 낭비하지 말자
let numbers = prompt('두 숫자를 공백으로 구분하여 입력하세요.');
let arr = numbers.split(' ');
// function power (array) {
//     parseInt(array[0]) ** parseInt(array[1]);
// };
console.log(parseInt(arr[0]) ** parseInt(arr[1]));

// 답안
const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));