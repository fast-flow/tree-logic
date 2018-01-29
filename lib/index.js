var extend = require("extend");
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
        // checkExtendlength : Number.MAX_VALUE // check : true 才需要此参数
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
        this.check = (id) => {
            // 往checkArray中添加 并去重
            console.log('this.check ',id)
        }
        this.uncheck = (id) => {
            // 从checkArray中删除
            console.log('this.uncheck ',id)
        }
        console.log('this :',this)
    }
    toggleCheck(id){
        console.log('id :',id)
        let self = this
        // Get Latest setting
        self.data = extend(true,[],self.getData())
        self.checkArray = extend(true,[],self.getChecked())
        // which action to do
        let isCheck = !self.checkArray.includes(id)
        let target = find(self.data, self.judgeChild, function(item){
            return item.id == id
        })
        let targetAllParents = target.parent.data.map(function(item,index,array){
            console.log('P',item,index,array)
            return [item.id] = 'index'
        })
        let targetAllChildren = {}
        forEach(target.target[self.judgeChild], self.judgeChild, function(item,index,array){
            console.log('C',item,index,array)
            targetAllChildren[item.id] = 'index'
        })
        console.log('toggleCheck target : ',target)
        console.log('toggleCheck targetAllParents : ',targetAllParents)
        console.log('toggleCheck targetAllChildren : ',targetAllChildren)
        if(isCheck){

        }else{

        }

    }
    forEach(handler){
        let self = this
        // Get Latest setting
        self.data = extend(true,[],self.getData())
        return forEach(self.data, self.judgeChild, handler)
    }
    map(handler){
        let self = this
        // Get Latest setting
        self.data = extend(true,[],self.getData())
        return map(self.data, self.judgeChild, handler)
    }
    find(handler){
        let self = this
        // Get Latest setting
        self.data = extend(true,[],self.getData())
        return find(self.data, self.judgeChild, handler)
    }
    some(handler){
        let self = this
        // Get Latest setting
        self.data = extend(true,[],self.getData())
        return some(self.data, self.judgeChild, handler)
    }
    filter(handler){
        let self = this
        // Get Latest setting
        self.data = extend(true,[],self.getData())
        return filter(self.data, self.judgeChild, handler)
    }
}
