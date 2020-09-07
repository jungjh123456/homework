# 20200907 자바스크립트 숙제

## 삼항 연산 연산자 변경

```js
var x = 0;
var result = (x === 0) ? '영' : (x % 2===0) ? '짝수' : '홀수'
console.log(result)
```

결과: 영

## 제어문 연습문제

1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라

```js
var x = 15;

if(x > 10 && x < 20) {
  console.log(x);
}
```

결과

```
15
```

2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

```js
for(var i = 0; i < 10; i++){
  if(i%2===0){
    console.log(i)
  }
}
```
결과

```
0
2
4
6
8
```

3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

```js
var result = '';

for(var i = 0; i < 10; i++){
  if(i%2===0){
    result += i;
  }
}

console.log(typeof result,result)
```

결과

```
02468
```

4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

```js
for(let i = 10; i > 0; i--){
  if(i%2===1){
    console.log(i);
  }
}
```

결과

```
9
7
5
3
1
```

5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

```js
let i = 0;

while(i<10){
  if(i%2===0){
    console.log(i)
  }
  i++
}
```

결과

```
0
2
4
6
8
```

6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

```js
var i = 10;

while(i>0){
  if(i%2===1){
    console.log(i)
  }
  i--;
}
```

결과

```
9
7
5
3
1
```

7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

```js
var result = 0;

for(var i = 0; i < 10; i++){
  result = result + i;
}
console.log(result)
```

결과

```
45
```

8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

```js
var result = 0;
  
for(var i = 0; i < 20; i++){
  if(i%2 !== 0 && i%3 !== 0){
    result = result + i;
  }
}

console.log(result)
```

결과

```
73
```

9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

```js
var result = 0;
  
for(var i = 0; i < 20; i++){
  if(i%2 === 0 || i%3 === 0){
    result = result + i;
  }
}

console.log(result)
```
결과

```
117
```
10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

```js
for(var i = 0; i < 6; i++){
  var newArr = [];
  for(var j = 0; j < 6; j++){
    if(i+j === 6){
      newArr.push(i,j)
    }
  }
  console.log(newArr);
}
```
결과

```
[ 1, 5 ]
[ 2, 4 ]
[ 3, 3 ]
[ 4, 2 ]
[ 5, 1 ]
```
11. 삼각형 출력하기 - pattern 1

```js
var result = '';

for(let i = 0; i <= 5; i++){
  for(let j = 0; j < i; j++){

      result = result + '*';
   
  }
  result = result + '\n'
}

console.log(result)
```
결과

```
*
**
***
****
*****
```
12. 삼각형 출력하기 - pattern 2
```js
var result = '';

for(var i = 0; i < 5; i++){
  for(var j = 0; j < i; j++){

      result =  result + ' ';
   
  }
  for(var k = 5; k > i; k--){
    result = result + '*';
  }
 
  result = result + '\n'
}

console.log(result)
```
결과

```
*****
 ****
  ***
   **
    *
```
13. 삼각형 출력하기 - pattern 3

```js
var result = '';

for(let i = 0; i <= 5; i++){
  for(let j = 5; j > i; j--){

      result = result + '*';
   
  }
  result = result + '\n'
}

console.log(result)
```
결과

```
*****
****
***
**
*
```

14. 삼각형 출력하기 - pattern 4

```js
var result = '';

for(var i = 0; i < 5; i++){
  for(var j = 5; j > i; j--){

      result =  result + ' ';
   
  }
  for(var k = 0; k <= i; k++){
    result = result + '*';
  }
 
  result = result + '\n'
}

console.log(result)
```
결과

```
    *
   **
  ***
 ****
*****
```

15. 정삼각형 출력하기

```js
var result = '';

for(var i = 0; i < 5; i++){
  for(var j = 5; j > i; j--){

      result =  result + ' ';
   
  }
  for(var j = 0; j <= i; j++){
    result = result + '*';
  }
  for(var j = 1; j <= i; j++){
    result = result + '*';
  }
 
  result = result + '\n'
}

console.log(result)
```
결과

```
    *
   ***
  *****
 *******
*********
```

16. 역정삼각형 출력하기
```js
var result = '';

for(var i = 1; i <= 5; i++){
  for(var j = 0; j <= i; j++){

      result =  result + ' ';
   
  }
  for(var j = 5; j >= i; j--){
    result = result + '*';
  }
  for(var j = 4; j >= i; j--){
    result = result + '*';
  }
 
  result = result + '\n'
}

console.log(result)
```
결과

```
*********
 *******
  *****
   ***
    *
```