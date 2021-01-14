let arr = [12, 51, 23, 54, 22, 88, 66, 11, 54, 1, 2, 5, 84, 65, 1005, 156, 77, 2448]
console.log(arr)
console.log(merge_sort(arr))

function merge_sort(arr) {
    if (arr.length <= 1)
        return arr
            // console.log((arr.length - 1) / 2)
    let mid = Math.floor((arr.length - 1) / 2)
    let arr1 = merge_sort(arr.slice(0, mid + 1))
    let arr2 = merge_sort(arr.slice(mid + 1))
    return merge(arr1, arr2)
}

function merge(arr1, arr2) {
    let res = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j])
            res.push(arr1[i++])
        else
            res.push(arr2[j++])
    }
    while (i < arr1.length)
        res.push(arr1[i++])
    while (j < arr2.length)
        res.push(arr2[j++])
    return res
}