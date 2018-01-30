var extend = require("extend");
var _ = require('lodash');
var find = require('./find');
var forEach = require('./forEach');

const check = function(checkArray,id) {
    // id : string|number|array
    if(typeof(id) == 'string' || typeof(id) == 'number'){
        id = [id]
    }
    // 往checkArray中添加 并去重
    return _.union(checkArray, id);
}
const uncheck = function(checkArray,id) {
    // id == string|number|array
    if(typeof(id) == 'string' || typeof(id) == 'number'){
        id = [id]
    }
    // 从checkArray中删除
    return _.difference(checkArray,id);
}

module.exports = function toggleCheck(settings, currentId, handler) {
    require('./throwErrorEachParam')('toggleCheck', arguments)
    let s = extend(true, [], settings)

    // which action to do
    let isCheck = !s.checkArray.includes(currentId)

    let target = find(s.data, s.judgeChild, function(i){
                    return i.id == currentId
                })
    let targetAllParents = target.parent.data.map(function(i,index,array){
                                return i.id
                            })
    let targetAllChildren = []
        forEach(target.target[s.judgeChild] || [], s.judgeChild, function(i,index,array){
            targetAllChildren.push(i.id)
        })

    if(!s.multiple){
        s.checkArray = [currentId]
        if(s.extendParent.check){
            s.checkArray = s.checkArray.concat(targetAllParents)
        }
        if(s.extendChild.check){
            s.checkArray = s.checkArray.concat(targetAllChildren)
        }
    }else if(isCheck){
        s.checkArray = check(s.checkArray,currentId)
        if(s.extendChild.check){
            s.checkArray = check(s.checkArray,targetAllChildren)
        }
        if(s.extendParent.check){
            s.checkArray = check(s.checkArray,targetAllParents)
        }
    }else if(!isCheck){
        s.checkArray = uncheck(s.checkArray,currentId)
        if(s.extendChild.uncheck){
            s.checkArray = uncheck(s.checkArray,targetAllChildren)
        }
        if(s.extendParent.uncheck){
            for(let key in targetAllParents){
                if(s.extendParent.uncheckUntilLast){
                    // curParentItem uncheck without checked child
                    let curParentItem = find(s.data, s.judgeChild, function(i){
                        return i.id == targetAllParents[key]
                    })
                    let curParentAllChildren = []
                    forEach(curParentItem.target[s.judgeChild] || [], s.judgeChild, function(i){
                        curParentAllChildren.push(i.id)
                    })
                    if(_.intersection(s.checkArray,curParentAllChildren).length == 0){
                        s.checkArray = uncheck(s.checkArray,targetAllParents[key])
                    }
                }else{
                    s.checkArray = uncheck(s.checkArray,targetAllParents[key])
                }
            }
        }
    }

    handler(s.checkArray)
    return s.checkArray

}
