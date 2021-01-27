function apply(fn, ctx, ...args) {
    ctx.__fn__ = fn
    let ret = ctx.__fn__(...args)
    delete ctx.__fn__
    return ret
}