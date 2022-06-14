// # 문제13 : 몇 번째 행성인가요?

// 우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

// 입출력

// 입력 : 1
// 출력 : 수성

// 나의 답
// const planet = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

// function 출력 (index) {
//     console.log(planet[index-1]);
// }

// // 답안
// const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

// const n = prompt('몇 번째 행성인가요?');

// console.log(planets[n-1]);

// 예외처리 수빈님 코드
// prompt는 입력값을 문자열로 반환한다
// NaN == NaN은 false로 처리한다 NaN의 비교는 항상 isNaN을 사용해주자
// const arr = ["수성","금성","지구","화성","목성","토성","천왕성","해왕성"];
// const numCheck = (num) => {num > 8 || num < 1}
// function galaxy() {
//     const answer = Number(prompt("숫자를 입력해주세요"));
//     if (isNaN(answer)) {
//         alert("숫자만 입력이 가능합니다.");
//         return galaxy();
//     } else if (numCheck(answer)) {
//         alert("1-8 사이의 수를 입력해주세요!");
//         return galaxy();
//     }
//     console.log(arr[answer - 1]);
// }

const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

function solarSystem() {
    const answer = parseInt(prompt('몇 번째 행성인가요?'));
    if(isNaN(answer)) {
        alert('숫자만 입력 가능합니다.');
        return solarSystem(); 
    } else if(answer > 8 || answer < 1) {
        alert("1-8 사이의 수를 입력해주세요!");
        return solarSystem();
    }
    else return planets[answer-1];
}