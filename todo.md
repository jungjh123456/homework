# 20201021 homework

## html 생성
```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    html = html + `<li id= "${todo.id}">
    <label><input type = "checkbox" ${todo.completed ? 'checked' : ""}>${todo.content}</label>
    </li>
    `
  });

  return html;
}

console.log(render());
```
## 특정 프로퍼티 값 추출
```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
  return todos.map(todo => todo[key]);
}
console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false]
```

## 프로퍼티 정렬

```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  return [...todos].sort((a,b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)
}
console.log(sortBy('id'));
```

## 새로운 요소 추가

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  todos = [newTodo, ...todos];
  return todos;
}

console.log(addTodo({ id: 4, content: 'Test', completed: false }));

console.log(todos);

```
## 특정 요소 삭제

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

removeTodo(2);

console.log(todos);
```

## completed 프로퍼티의 값이 true인 요소의 갯수 구하기

```js
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  return todos.filter(todo => todo.completed === true).length;
}

console.log(countCompletedTodos()); // 1
```
##  id 프로퍼티의 값 중에서 최대값 구하기

```js
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  return Math.max(...todos.map(todo => todo.id));
}

console.log(getMaxId()); // 3

```