## 동적인 UI 만드는 단계

1. **HTML 및 CSS로 디자인 완성**

2. **UI 상태를 state로 저장**

3. **State에 따라 UI 렌더링**
   - State 값에 따라 UI가 어떻게 보일지를 작성.

- state 만드는 곳은 state 사용하는 컴포넌트들 중 <b>최상위 컴포넌트</b>(보통 App)

## map 함수

모든 배열 자료에 `map()` 함수를 사용할 수 있다. 자바스크립트의 기본 함수이며, 배열을 다루는데 유용하다.

### 기능 1: 배열 요소만큼 반복 실행
```javascript
var array = [2, 3, 4];
array.map(function() {
  console.log(1);
});
// 출력: 1, 1, 1 (3번 반복)
```
- 배열에 있는 자료의 개수만큼 콜백 함수를 반복 실행.

### 기능 2: 배열 요소를 파라미터로 사용
```javascript
var array = [2, 3, 4];
array.map(function(a) {
  console.log(a);
});
// 출력: 2, 3, 4
```
- 콜백 함수의 파라미터는 배열 안의 모든 자료를 하나씩 출력.


### 기능 3: 변환된 새로운 배열 생성
```javascript
var array = [2, 3, 4];
var newArray = array.map(function(a) {
  return a * 10;
});
console.log(newArray);
// 출력: [20, 30, 40]
```
- map() 함수는 return 값으로 새로운 배열을 생성하고, 이 배열을 변수에 담을 수 있다.

