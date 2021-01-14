function my_instanceof(A, B) {
    if (typeof A !== 'object' && typeof A !== 'function')
        return false
    let res = false
    let cur = B.prototype
    let A_proto = A.__proto__
    while (cur !== null) {
        if (cur === A_proto) {
            res = true
            break
        }
        cur = cur.__proto__
    }
    return res
}

console.log('A: [123]  B: Array')
console.log(my_instanceof([123], Array))
console.log("")

console.log('A: 123  B: Array')
console.log(my_instanceof(123, Array))
console.log("")

function Person(name, age) {
    this.name = name
    this.age = age
}

let ob = new Person()
console.log('A: ob(new Person)  B: Person')
console.log(my_instanceof(ob, Person))
console.log("")