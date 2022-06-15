// # 문제31 : 자바스크립트 자료형의 복잡도

// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

// 1)  arr[i]
// 2)  arr.push(5) - O(1)
// 3)  arr.slice() - O(n)
// 4)  arr.pop() - O(1)
// 5)  arr.includes(5)

// 3)  arr.slice() - O(n)
// 5)  arr.includes(5)

// 정답은 '3번', '5번' 입니다.
// splice() - O(n) (탐색해야돼서 O(n))
// shift, unshift: O(n)
// sort() - O(n log(n))

// 배열은 처음이나 뒤에 붙이는게 좋고, 중간에 끼워넣는건 지양하는 것이 좋다