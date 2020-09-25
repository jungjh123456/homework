const person = {
  age: 26,
  
  get changeAge() {
    return `${this.age}`
  },
  set changeAge(age) {
    if(age > 0) this.age = age;
  }

}

person.changeAge = -3;
console.log(person)
console.log(person.changeAge)
