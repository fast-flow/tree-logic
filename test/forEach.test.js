var expect = require("expect.js")
var data = require('../example/data')
var badData = require('../example/badData')
var Tree = require('../index')
var jsonFormat = require('json-format')
describe('forEach.test.js', function() {
    it('basic', function(done) {
        var nameArray = []
        var parentArray = []
        Tree.forEach(data, 'child', function (item, index, array) {
            parentArray.push(array)
            nameArray.push(
                item.name + '|' + index
            )
        })
        expect(nameArray).to.eql([
            'nimo|0',
            'tim|0',
            'nico|0',
            'Jack|1',
            'Jen|0',
            'sam|1',
            'oil|0',
            'poli|1',
            'Naer|1',
            'Que|0',
            'Beer|1',
            'noname|0',
            'yumi|1'
        ])
        expect(JSON.stringify(parentArray)).to.eql('[[{"name":"nimo","child":[{"name":"tim","child":[{"name":"nico"},{"name":"Jack","child":[{"name":"Jen"}]}]},{"name":"sam","child":[{"name":"oil"},{"name":"poli"}]}]},{"name":"Naer","child":[{"name":"Que"},{"name":"Beer","child":[{"name":"noname"},{"name":"yumi"}]}]}],[{"name":"tim","child":[{"name":"nico"},{"name":"Jack","child":[{"name":"Jen"}]}]},{"name":"sam","child":[{"name":"oil"},{"name":"poli"}]}],[{"name":"nico"},{"name":"Jack","child":[{"name":"Jen"}]}],[{"name":"nico"},{"name":"Jack","child":[{"name":"Jen"}]}],[{"name":"Jen"}],[{"name":"tim","child":[{"name":"nico"},{"name":"Jack","child":[{"name":"Jen"}]}]},{"name":"sam","child":[{"name":"oil"},{"name":"poli"}]}],[{"name":"oil"},{"name":"poli"}],[{"name":"oil"},{"name":"poli"}],[{"name":"nimo","child":[{"name":"tim","child":[{"name":"nico"},{"name":"Jack","child":[{"name":"Jen"}]}]},{"name":"sam","child":[{"name":"oil"},{"name":"poli"}]}]},{"name":"Naer","child":[{"name":"Que"},{"name":"Beer","child":[{"name":"noname"},{"name":"yumi"}]}]}],[{"name":"Que"},{"name":"Beer","child":[{"name":"noname"},{"name":"yumi"}]}],[{"name":"Que"},{"name":"Beer","child":[{"name":"noname"},{"name":"yumi"}]}],[{"name":"noname"},{"name":"yumi"}],[{"name":"noname"},{"name":"yumi"}]]')
        done()
    })
    it('parent', function (done) {
        var parentMap = {}
        Tree.forEach(data, 'child', function (item, index, array) {
            parentMap[item.name] = this.$parent
        })
        var jsonText = JSON.stringify(parentMap)
        // require('fs').writeFileSync(__dirname + '/forEach-parent.json', jsonText)
        expect(require('fs').readFileSync(__dirname + '/forEach-parent.json').toString()).to.eql(jsonText)
        done()
    })
    it('not deep copy', function (done) {
        Tree.forEach(data, 'child', function (item, index, array) {
            if (item.name === 'nimo') {
                item.age = 24
            }
            if (item.name === 'nico') {
                // this.$parent is "tim"
                var lastParent = this.$parent.data[this.$parent.data.length-1]
                lastParent.age = 10

            }
        })
        expect(data[0].age).to.eql(24)
        expect(data[0].child[0].age).to.eql(10)
        done()
    })
    it('judgeChild', function (done) {
        var nameArray = []
        Tree.forEach(
            badData,
            function judgeChild (item, index, array) {
                // this.$parent
                return item[1]
            },
            function handler (item, index, array) {
                // this.$parent
                nameArray.push(
                    item[0].name + '|' + index
                )
            }
        )
        expect(nameArray).to.eql(
            [ 'some|0',
              'time|0',
              'nico|0',
              'Jack|1',
              'Jen|0',
              'Naer|1',
              'Que|0',
              'Beer|1',
              'noname|0',
              'yumi|1' ]
        )
        done()
    })
})
