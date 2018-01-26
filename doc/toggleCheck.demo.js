import { TreeLogic } from 'tree-logic';
// var TreeLogic = require('tree-logic').TreeLogic;
var data = require('./data.demo');


var checkedArray = [1,11]
var tree = new TreeLogic({
    getData() {
        return data
    },
    getChecked() {
        return checkedArray
    },
    judgeChild:'child',
    // extendParent: false,
    // extendChild: false,
    multiple: false,
    onChange(checkeds) {
        checkedArray = extend(true,[],checkeds)
    }
})
tree.toggleCheck('2')
