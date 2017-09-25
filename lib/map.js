var extend = require("extend")
var treeforEach = require('./forEach')
/**
 * fucntion - 遍历tree数据
 * @parame {Array} data - 树形结构数据
 * @param {string|function} childKey - 子节点的 key
 */
module.exports = function map(data, judgeChild, handler) {
    if (!Array.isArray(data)) {
        throw new Error('node_modules/tree-logic: map(data, judgeChild, handler) data must be a array')
    }
    if (typeof judgeChild !== 'string' && typeof judgeChild !== 'function') {
        throw new Error('node_modules/tree-logic: map(data, judgeChild, handler) judgeChild must be a string or function')
    }
    if (typeof handler !== 'function') {
        throw new Error('node_modules/tree-logic: map(data, judgeChild, handler) handler must be a function')
    }
    treeforEach(data, judgeChild, function (item, index, array) {
        var result = handler.apply(this, arguments)
        array[index] = result
    })
}
