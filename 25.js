// # 문제25 : 원의 넓이를 구하세요

// 원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// **입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수**를 만들어 주세요.

function circleDimension() {
    const n = prompt('반지름의 길이를 정수로 입력하세요.');
    if (isNaN(n)) {
        alert('숫자를 입력하세요.');
        return circleDimension();
    }
    console.log(Math.pow(parseInt(n), 2) * 3.14);
}

circleDimension();

// 답안
function circle(n) {
    const result = n * n * 3.14;

    return result;
}

const r = prompt("원의 반지름을 입력하세요.");

console.log(circle(r));