# 20200918 homework

## 1 ~ 10000의 숫자 중 8이 등장하는 횟수 구하기

```js
function getCount8(){
var string = "";
var count = 0;

for(var i = 1; i <= 10000; i++){
  string += i;
}
for(var i = 0; i<string.length; i++) {
  if(string[i] === '8') count++
}
  return count;
}

console.log(getCount8());
```

출력

```
4000
```

## 이상한 문자 만들기

```js

function toWeirdCase(s) {
  var result = [];
  var str = s.split(' ');

  for(var i = 0; i < str.length; i++){
    var newArr = [];
    for(var j = 0; j < str[i].split('').length; j++) {
      if(j%2===0) newArr.push(str[i].split('')[j].toUpperCase())
      else newArr.push(str[i].split('')[j])
    }
    result.push(newArr.join(''));
  }
  return result.join(' ');
}
console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
```

출력

```
HeLlO WoRlD
My NaMe Is LeE
```