var TreeLogic = require('../index')
var data = require('./data')
var nameArray = []
var parentMap = {}
TreeLogic.forEach(data, 'child', function (item, index, array) {

    nameArray.push(item)
    parentMap[item.name] = {
        index: this.$parent.index,
        data: this.$parent.data,
        // filter name
        name: this.$parent.data.map(function(item){ return item.name })
    }
})
console.log(nameArray)
/*
[
  { name: 'nimo', child: [ [Object], [Object] ] },
  { name: 'tim', child: [ [Object], [Object] ] },
  { name: 'nico' },
  { name: 'Jack', child: [ [Object] ] },
  { name: 'Jen' },
  { name: 'sam', child: [ [Object], [Object] ] },
  { name: 'oil' },
  { name: 'poli' },
  { name: 'Naer', child: [ [Object], [Object] ] },
  { name: 'Que' },
  { name: 'Beer', child: [ [Object], [Object] ] },
  { name: 'noname' },
  { name: 'yumi' }
]
*/
console.log(parentMap)
/*
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
*/
