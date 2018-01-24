module.exports = function (name,argProps) {
    var data = argProps[0]
    var judgeChild = argProps[1]
    var handler = argProps[2]
    if (!Array.isArray(data)) {
        throw new Error('node_modules/tree-logic: ' +  name + '(data, judgeChild, handler) data must be a array')
    }
    if (typeof judgeChild !== 'string' && typeof judgeChild !== 'function') {
        throw new Error('node_modules/tree-logic: ' +  name + '(data, judgeChild, handler) judgeChild must be a string or function')
    }
    if (typeof handler !== 'function') {
        throw new Error('node_modules/tree-logic: ' +  name + '(data, judgeChild, handler) handler must be a function')
    }
}
