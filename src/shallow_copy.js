//浅拷贝
let ob = {
    a: 1,
    next: {
        b: 2,
        next: {
            c: 3
        }
    }
}

function reset() {
    ob = {
        a: 1,
        next: {
            b: 2,
            next: {
                c: 3
            }
        }
    }
}

function test_shallow_copy(copy_ob, ob) {
    console.log('copy_ob')
    console.log(copy_ob)
    console.log('')

    console.log('ob')
    console.log(ob)
    console.log('')

    copy_ob.a = 2
    console.log('copy_ob.a -> 2')
    console.log(copy_ob)
    console.log(ob)
    console.log('')

    copy_ob.next.b = 3
    console.log('copy_ob.next.b -> 3')
    console.log(copy_ob)
    console.log(ob)
    console.log('')

    copy_ob.next.next.c = 4
    console.log('copy_ob.next.next.c -> 4')
    console.log(copy_ob)
    console.log(ob)
    console.log('')

    reset()
}

//方法1：Object assign
let copy_ob1 = Object.assign({}, ob)
console.log("Object assign")
test_shallow_copy(copy_ob1, ob)

//方法2：展开运算符
let copy_ob2 = {...ob }
console.log("...运算符")
test_shallow_copy(copy_ob2, ob)

//方法3: 手工实现浅拷贝
function shallow_copy(ob) {
    let copy_ob3 = {}
    for (let key in ob) {
        copy_ob3[key] = ob[key]
    }
    return copy_ob3
}
let copy_ob3 = shallow_copy(ob)
console.log("手工实现浅拷贝")
test_shallow_copy(copy_ob3, ob)