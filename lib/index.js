var extend = require("extend");
var toggleCheck = require('./toggleCheck');
var forEach = require('./forEach');
var map = require('./map');
var find = require('./find');
var some = require('./some');
var filter = require('./filter');

const defaultOption = {
    getData() { return [] },
    getChecked() {
        return [] // [1,11]
    },
    judgeChild:'child',
    extendParent: {
        check : true ,
        uncheck : true ,
        uncheckUntilLast : true // uncheck : true 才需要此参数 (取消item条件:其下没有任何子孙元素被选中)
    },
    extendChild: {
        check : true,
        uncheck : true ,
    },
    multiple: true,
    onChange(checkeds) {
        // checkeds : [2,21]
    }
}

module.exports = class TreeLogic {
    constructor (props) {
        let setting = extend(true,{},defaultOption,props)
        for(let key in setting){
            this[key] = setting[key]
        }
        console.log('this :',this)
    }
    toggleCheck(id){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.getData())
        let latestCheckArray = extend(true,[],self.getChecked())

        return toggleCheck(
                    {
                        data: latestData,
                        judgeChild: self.judgeChild,
                        checkArray: latestCheckArray,
                        extendParent: self.extendParent,
                        extendChild: self.extendChild,
                        multiple: self.multiple
                    },
                    id,
                    self.onToggle
                )

    }
    forEach(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.getData())
        return forEach(latestData, self.judgeChild, handler)
    }
    map(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.getData())
        return map(latestData, self.judgeChild, handler)
    }
    find(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.getData())
        return find(latestData, self.judgeChild, handler)
    }
    some(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.getData())
        return some(latestData, self.judgeChild, handler)
    }
    filter(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.getData())
        return filter(latestData, self.judgeChild, handler)
    }
}
