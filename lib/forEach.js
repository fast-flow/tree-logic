/**
 * fucntion - 遍历tree数据
 * @parame {Array} data - 树形结构数据
 * @param {string|function} childKey - 子节点的 key
 */
module.exports = function (data, childKey, handler) {
    if (!Array.isArray(data)) {
        throw new Error('node_modules/tree-logic: forEach(data, childKey, handler) data must be a array')
    }
    if (typeof childKey !== 'string') {
        throw new Error('node_modules/tree-logic: forEach(data, childKey, handler) childKey must be a string')
    }
    if (typeof handler !== 'function') {
        throw new Error('node_modules/tree-logic: forEach(data, childKey, handler) handler must be a function')
    }
    function each(target, parent, level) {
        target.forEach(function (item, index) {
            handler.apply(
                {
                    $parent: parent
                }
                ,
                [item, index, target]
            )
            if (Array.isArray(item[childKey])) {
                var currentParent = {}
                // （与深复制有关）concat 是为了防止 index 和 data 按地址引用，但是 index data 中的 数组项还是按地址引用
                currentParent.index = parent.index.concat([index])
                currentParent.data = parent.data.concat([item])
                each(item[childKey], currentParent, level + 1)
            }
        })
    }
    var rootChildParent = {
        index: [],
        data: []
    }
    each(data, rootChildParent, 1)
}
