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
  var str = '';
  for(var i =0; i < s.length; i++){
    if(i%2===0) str += s[i].toUpperCase();
    else if(i === " ") str += s[i]
    else str += s[i].toLowerCase();
  }
  return str;
}

console.log(toWeirdCase('hello world'))
console.log(toWeirdCase('my name is lee')); 

```

출력

```
HeLlO WoRlD
My nAmE Is lEe
```