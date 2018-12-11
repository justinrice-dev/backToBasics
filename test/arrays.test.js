const arrays = require("../arrays");
const assert = require("assert");
const people = require("../People.json")

describe('Basic Mocha String Test', function () {
        it('should return number of charachters in a string', function () {
                assert.equal(arrays.getOne([9, 2, 3, 4]), 9);
                assert.equal(arrays.getOne([10, 2, 3, 4]), 10);
                assert.equal(arrays.getOne([1, 2, 3, 4]), 1);
        });
});