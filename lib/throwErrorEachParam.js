module.exports = function (name, arguments) {
    var data = arguments[0]
    var judgeChild = arguments[1]
    var handler = arguments[2]
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
