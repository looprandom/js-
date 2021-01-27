/*
    19个数组方法
    改变原数组的API: 
    push()、unshift()、pop()、shift()、reverse()、splice()、sort()

    新增元素(改变原数组)：push unshift splice
    删除元素(改变原数组)：pop shift splice
    数组转字符串：join toString
    数组翻转(改变原数组): reverse
    获取子数组：slice
    数组排序(改变原数组)：sort
    查找数组：indexOf lastIndexOf
    连接数组或元素(不改变原数组)：concat

    与遍历数组有关的API(不改变原数组)：
    forEach map filter every some reduce

*/
//push()：将value添加到数组的最后，返回新数组的长度(改变原数组)
const arr1 = [1, 2, 3]
console.log(arr1)
arr1.push(4)
console.log('arr1-push: ' + 4)
console.log(arr1)
console.log("")

//unshift()：添加元素到数组的开头，返回新数组的长度(改变原数组)
const arr2 = [1, 2, 3]
console.log(arr2)
arr2.unshift(0)
console.log('arr2-unshift: ' + 0)
console.log(arr2)
console.log("")

//pop()：删除数组中最后一个元素，返回被删除的元素(改变原数组)
const arr3 = [1, 2, 3]
console.log(arr3)
const popE = arr3.pop()
console.log('arr3-pop')
console.log('popEle: ' + popE)
console.log(arr3)
console.log("")

//shift()：删除数组第一个元素，返回被删除的元素(改变原数组)
const arr4 = [1, 2, 3]
console.log(arr4)
const shiftE = arr4.shift()
console.log('arr4-shift')
console.log('shiftEle: ' + shiftE)
console.log(arr4)
console.log("")

/*join(value)：将数组用value连接为字符串，
返回被连接后的字符串(不改变原数组) */
const arr5 = [1, 2, 3]
console.log(arr5)
console.log('arr5-join: ' + '-')
console.log(arr5.join('-'))
console.log("")

//reverse()：反转数组，返回反转后的新数组(改变原数组)
const arr6 = [1, 2, 3]
console.log(arr6)
console.log('reverse')
console.log(arr6.reverse())
console.log("")

/*
slice(start, end)：获取子数组，包含原数组索引
start的值到索引end的值，不包含end，
返回获取的子数组(不改变原数组)
*/
const arr7 = [1, 2, 3, 4, 5]
console.log(arr7)
console.log('slice()')
console.log(arr7.slice())
console.log('slice(1)')
console.log(arr7.slice(1))
console.log('slice(1,3)')
console.log(arr7.slice(1, 3))
console.log("")

/*
splice(index, count, value1, value2....)：
从索引位index处删除count个元素，
插入value1, value2等元素，
返回被删除的元素组成的新数组(改变原数组)
*/
const arr8 = [1, 2, 3, 4, 5, 6]
console.log(arr8)
console.log('splice(1,3)')
arr8.splice(1, 3)
console.log(arr8)
console.log('splice(1,3,4,5,6)')
arr8.splice(1, 3, 4, 5, 6)
console.log(arr8)
console.log("")

//sort()：对数组元素进行排序，返回排序后的新数组(改变原数组)
const arr9 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(arr9)
arr9.sort((a, b) => {
    return a - b
})
console.log("sort: 从小到大")
console.log(arr9)
console.log("")

/*
toString()：将数组中的元素用逗号拼接成字符串，
返回拼接后的字符串(不改变原数组)
*/
const arr10 = [1, 2, 3, 4]
console.log(arr10)
console.log('toString')
console.log(arr10.toString())
console.log("")

/*
indexOf(value)：从索引为0开始，
检查数组中是否包含有value，
有则返回匹配到的第一个索引，
没有则返回-1(不改变原数组)
*/
const arr11 = [1, 2, 3, 4, 5, 4]
console.log(arr11)
console.log('indexOf(4)')
console.log(arr11.indexOf(4))
console.log("")

/*
    lastIndexOf(value)：从最后的索引开始，
    检查数组找那个是否包含value，
    有则返回匹配到的第一个索引，
    没有返回-1(不改变原数组)
*/

const arr12 = [1, 2, 3, 4, 5, 4]
console.log(arr12)
console.log('lastIndexOf(4)')
console.log(arr11.lastIndexOf(4))
console.log("")

/*
concat(value)：将数组和(或)值连接成新数组，
返回新数组(不改变原数组)
*/
const arr13 = [1, 2, 3]
console.log(arr13)
console.log('concat([4,5,6],7)')
console.log(arr13.concat([4, 5, 6], 7))
console.log("")

/*
forEach()：对数组进行遍历循环，
对数组中每一项运行给定函数，参数都是function类型，默认有传参，
参数分别为：遍历数组内容、对应的数组索引、数组本身。没有返回值
*/
const arr14 = [1, 2, 3]
console.log('forEach: 遍历')
console.log(arr14)
arr14.forEach((item, index, arr) => {
    console.log('index: ' + index)
    console.log('item: ' + item)
})
console.log("")

/*
map()：指“映射”，
对数组中的每一项运行给定函数，
返回每次函数调用的结果组成的新数组
*/
const arr15 = [1, 2, 3]
console.log(arr15)
console.log('map(item * index)')
console.log(arr15.map((item, index, arr) => {
    return item * index
}))
console.log("")

/*
filter()：“过滤”功能，
数组中的每一项运行给定函数，
返回满足过滤条件组成的数组
*/
const arr16 = [0, 1, 2, 3, 4, 5, 6, 7]
console.log(arr16)
console.log('filter(item % 2 === 0)')
console.log(arr16.filter((item, index, arr) => {
    return item % 2 === 0
}))
console.log("")

/*
every()：判断数组中每一项都是否满足条件，
只有所有项都满足条件，才会返回true
*/
const arr17 = [2, 4, 6]
console.log(arr17)
console.log('every(item % 2 === 0)')
console.log(arr17.every((item, index, arr) => {
    return item % 2 === 0
}))
console.log("")

/* some()：判断数组中是否存在满足条件的项，
只要有一项满足条件，就会返回true*/
const arr18 = [1, 2, 4, 7, 8, 11, 2, 4, 6]
console.log(arr18)
console.log('some(item % 2 === 0)')
console.log(arr17.some((item, index, arr) => {
    return item % 2 === 0
}))
console.log("")
    /*
    reduce():接收一个函数作为累加器，
    数组中的每个值（从左到右）开始缩减，
    最终计算为一个值
    语法：array.reduce(function(previousValue, currentValue, currentIndex, arr), initialValue)
    如果initialValue省略，则previousValue和currentValue分别为数组中的第一项元素和第二项元素；如果initialValue存在，则previousValue为initialValue，而currentValue为数组中的第一项
    注意: reduce() 对于空数组是不会执行回调函数的    
    */
const arr19 = [1, 2, 3, 4, 5]
console.log(arr19)
console.log('reduce(item累加)')
console.log(arr19.reduce((pre, cur, curIndex, arr) => {
    return cur + pre
}))
console.log("")