let arr = [12, 51, 56, 1052, 51, 0, 4158, 418, 4185, 789, 45, 48, 48, 64, 77]
console.log(arr)
quick_sort(arr)
console.log(arr)

function quick_sort(arr) {
    quick_sort_c(arr, 0, arr.length - 1)
}

function quick_sort_c(arr, l, r) {
    if (l >= r)
        return
    let q = parttion(arr, l, r)
    quick_sort_c(arr, l, q - 1)
    quick_sort_c(arr, q + 1, r)
}

//分区函数
function parttion(arr, l, r) {
    let pivot = arr[r]
    let i = l
    for (let j = l; j < r; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j)
            i++
        }
    }
    swap(arr, i, r) //Don't forget
    return i
}

function swap(arr, index1, index2) {
    let tmp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tmp
}