var expect = require("expect.js")
var numberData = require('../example/numberData')
var Tree = require('../index')
describe('map.test.js', function() {
    it('basic', function(done) {
        var result = Tree.map(numberData, 'child', function (item, index) {
            item.$indexID = this.$parent.index.concat([index]).join('-')
            item.$id = this.$parent.data.concat(item).map(function (parentItem) {
                return parentItem.id
            }).join('-')
            return item
        })
        expect(numberData[0].$id).to.eql(undefined)
        expect(result).to.eql(
            [
                {
                    "name": "nimo",
                    "id": "1",
                    "child": [
                        {
                            "name": "nico",
                            "id": "1",
                            "$indexID": "0-0",
                            "$id": "1-1"
                        },
                        {
                            "name": "tim",
                            "id": "2",
                            "$indexID": "0-1",
                            "$id": "1-2"
                        }
                    ],
                    "$indexID": "0",
                    "$id": "1"
                },
                {
                    "name": "jen",
                    "id": "2",
                    "child": [
                        {
                            "name": "tom",
                            "id": "1",
                            "$indexID": "1-0",
                            "$id": "2-1"
                        },
                        {
                            "name": "oil",
                            "id": "2",
                            "$indexID": "1-1",
                            "$id": "2-2"
                        }
                    ],
                    "$indexID": "1",
                    "$id": "2"
                }
            ]
        )
        done()
    })

})
