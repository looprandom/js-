/*
    new 运算符
    1 在堆内存中创建一个空间存放一个空白对象
    2 将constructor的prototype赋值给空白对象的[[proto]]属性
    3 执行constructor，并把this指向新建的空白对象
    4 若constructor的返回值为object则返回该object,否则返回新建的空白对象
*/

function myNew(fn, ...args) {
    console.log(fn instanceof Function)
    if (!(fn instanceof Function))
        throw `${fn} is no a constructor`
    let ob = {}
    ob.__proto__ = fn.prototype
    let ret = fn.apply(ob, args)
    return ret instanceof Object ? ret : ob
}

function Person(name, age) {
    this.name = name
    this.age = age
}

console.log(myNew(Person, '张三', '18'))
console.log(myNew(1))