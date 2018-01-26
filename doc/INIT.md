# 初始化
声称对象,减少每次调用传入参数

## init
new TreeLogic(option)

```js
import { TreeLogic } from 'tree-logic';
// var TreeLogic = require('tree-logic').TreeLogic;

var tree = new TreeLogic({
    getData() {
        return []
    },
    getChecked() {
        return []
    },
    judgeChild:'child',
    // extendParent: false,
    // extendChild: false,
    multiple: false,
    onToggleCheck(checkedArray) {
        // checkedArray: [1, 12, 121]
    }
})
```

### option
- getData
    - type : function
    - @return : [Array]
    - 作用 : 获取最新的数据源
    - 例 : [示例data](http://127.0.0.1:4111/doc/data.html#data)
- getChecked
    - type : function
    - @return : [Array]
    - 作用 : 获取最新的已选中id数组
    - 例 : `[1,12,121]`
- judgeChild
    - type : String
    - 作用 : 递归遍历所需子节点的 key
- extendParent
    - type :
    - 作用 :
    - 例 :
