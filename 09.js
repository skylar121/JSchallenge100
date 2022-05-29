// # 문제9 : concat을 활용한 출력 방법

// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
// 데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

// 출력
// 2019/04/26 11:34:27

// 나의 답
var slash = '/';
var space = ' ';
var colon = ':'

var result = year.concat(slash, month, slash, day, space, hour, colon, minute, colon, second)

console.log(result);

// 답안
// var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);