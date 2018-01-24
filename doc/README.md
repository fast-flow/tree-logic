# 示例

## data

````code
{
    title: '示例数据源',
    desc: '`基础数据` `树形结构数据` `无id重复`',
    js: './data.demo.js',
    source: './data.demo.js',
    open: false
}
````


## forEach
递归遍历, 从浅至深 , 从上至下
> Tips: forEach(data, judgeChild, handler(item, index, array)), item and this.$parent not deep copy!

````code
{
    title: '基础使用',
    desc: '`desc`',
    html: '<div id="forEach-demo" ></div>',
    js: './forEach.demo.js',
    source: './forEach.demo.js',
    open: false
}
````
> 打印数据可以控制台查看,也可以展开查看下列简列

- itemArray

````json
[
  { name: nimo, id: 1, child: [ [Object], [Object] ] },
  { name: tim, id: 11, child: [ [Object], [Object] ] },
  { name: nico, id: 111 },
  { name: Jack, id: 112, child: [ [Object] ] },
  { name: Jen, id: 1121 },
  { name: sam, id: 12, child: [ [Object], [Object] ] },
  { name: oil, id: 121 },
  { name: poli, id: 122 },
  { name: Naer, id: 2, child: [ [Object], [Object] ] },
  { name: Que, id: 21 },
  { name: Beer, id: 22, child: [ [Object], [Object] ] },
  { name: noname, id: 221 },
  { name: yumi, id: 222 }
]
````
- parentMap

````json
{
    nimo: {
        index: [],
        data: [],
        name: []
    },
    tim: {
        index: [0],
        data: [[Object]],
        name: ['nimo']
    },
    nico: {
        index: [0, 0],
        data: [[Object], [Object]],
        name: ['nimo', 'tim']
    },
    Jack: {
        index: [0, 0],
        data: [[Object], [Object]],
        name: ['nimo', 'tim']
    },
    Jen: {
        index: [0, 0, 1],
        data: [[Object], [Object], [Object]],
        name: ['nimo', 'tim', 'Jack']
    },
    sam: {
        index: [0],
        data: [[Object]],
        name: ['nimo']
    },
    oil: {
        index: [0, 1],
        data: [[Object], [Object]],
        name: ['nimo', 'sam']
    },
    poli: {
        index: [0, 1],
        data: [[Object], [Object]],
        name: ['nimo', 'sam']
    },
    Naer: {
        index: [],
        data: [],
        name: []
    },
    Que: {
        index: [1],
        data: [[Object]],
        name: ['Naer']
    },
    Beer: {
        index: [1],
        data: [[Object]],
        name: ['Naer']
    },
    noname: {
        index: [1, 1],
        data: [[Object], [Object]],
        name: ['Naer', 'Beer']
    },
    yumi: {
        index: [1, 1],
        data: [[Object], [Object]],
        name: ['Naer', 'Beer']
    }
}
````

## map

`
`

## find

`
`

## some

`
`

## filter

`
`

## toggleCheck

`
`




