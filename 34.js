// # 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES


// 나의 답
// 배열 비교시엔 string으로 변환해야 한다
// sort 메서드는 기본적으로 배열을 문자열(String) 타입으로 간주하고 비교하기 때문에 sort(function(a, b) { return a - b;})
function checkOrder () {
    let height = prompt('키를 띄어쓰기로 구분해서 입력하세요.').split(' ');
    let heightCopy = JSON.parse(JSON.stringify(height));
    if (JSON.stringify(heightCopy) === JSON.stringify(height.sort())) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

checkOrder();

// 답안
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
    .split(" ")
    .sort(function(a, b) {
        return a - b;
    })
    .join(" ");

    if (unsorted === sorted) {
    console.log("Yes");
    } else {
    console.log("No");
}