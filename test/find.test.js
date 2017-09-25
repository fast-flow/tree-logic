var expect = require("expect.js")
var numberData = require('../example/numberData')
var Tree = require('../index')
describe('find.test.js', function() {
    it('basic', function(done) {
        Tree.map(numberData, 'child', function (item, index) {
            item.$indexID = this.$parent.index.concat([index]).join('-')
            item.$id = this.$parent.data.concat(item).map(function (parentItem) {
                return parentItem.id
            }).join('-')
            return item
        })
        expect(
            Tree.find(numberData, 'child', function (item) {
                return item.$id == '2-2'
            })
        ).to.eql(
            {
                "target": {
                    "name": "oil",
                    "id": "2",
                    "$indexID": "1-1",
                    "$id": "2-2"
                },
                "parent": {
                    "index": [
                        1
                    ],
                    "data": [
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
                }
            }
        )
        done()
    })

})
