const Padding = 'padd'

function Promise(fn) {
    this.cbs = []
    const resolve = (value) => {
        setTimeout(() => {
            this.data = value
            this.cbs.forEach((cb) => cb(value))
        })
    }
    fn(resolve.bind(this))
}

Promise.prototype.then = function(onResolved) {
    return new Promise((resolve) => {
        this.cbs.push(() => {
            const res = onResolved(this.data)
            if (res instanceof Promise) {
                res.then(resolve)
            } else {
                resolve(res)
            }
        })
    })
}

//test 支持链式异步调用
const pro = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
})

pro
    .then((res) => {
        return res + 1
    })
    .then((res) => {
        return res + 1
    })
    .then((res) => {
        console.log(res)
    })