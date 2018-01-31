var TreeLogic = require('tree-logic');
var notIdData = require('./notIdData.demo');

var resultData = TreeLogic.map(notIdData, 'child', function (item, index, currentArray) {
    item.$indexID = this.$parent.index.concat([index]).join('_')
    return item
})

console.log('----- createUId resultData -----\n',resultData)
