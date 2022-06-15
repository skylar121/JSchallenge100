// # 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

// 나의 답
const numbers = prompt('숫자들을 공백으로 구분하여 입력해주세요.').split(' ');
function reverseNumbers (arr) {    
    let reverseArr = JSON.parse(JSON.stringify(arr));
    console.log(reverseArr.reverse().join(' '));
}

reverseNumbers(numbers);

// 답안
// const data = prompt('숫자를 입력하세요.').split(' ').reverse();
// const result = '';

// for (let i=0; i<data.length; i++){
//   result += data[i];
// }

// console.log(result);