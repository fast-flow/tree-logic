import { TreeLogic } from 'tree-logic';
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
    onChange(checkeds) {
        checkedArray = extend(true,[],checkeds)
    }
})
tree.toggleCheck('11')
