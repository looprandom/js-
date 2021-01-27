/*
继承是面向对象的，
使用这种方式我们可以更好地复用以前的开发代码，
缩短开发的周期、提升开发效率。
*/

//最优的继承方式：寄生组合继承

function clone(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

function Parent(name, age) {
    this.name = name
    this.age = age
}
Parent.prototype.play = function play() {
    console.log(this.name + ' play')
}

function Child(sex, ...args) {
    Parent.call(this, ...args)
    this.sex = sex
}

//先调用clone
clone(Parent, Child)
    //再设置Child上的方法
Child.prototype.eat = function eat() {
    console.log(this.name + ' eat')
}

//test
const ch = new Child('男', '张三', '18')
console.log(ch)
console.log(ch instanceof Parent)
console.log(ch instanceof Child)
ch.eat()
ch.play()