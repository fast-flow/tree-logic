var extend = require("extend");
var treeforEach = require('./forEach');

const defaultOption = {
    getData() { return [] },
    getChecked() {
        return [] // [1,11]
    },
    judgeChild:'child',
    // extendParent: false,
    // extendChild: false,
    multiple: false,
    onChange(checkeds) {
        // checkeds : [2,21]
    }
}

module.exports = class TreeLogic {
    constructor (props) {
        console.log('props :',props)
    }
}
