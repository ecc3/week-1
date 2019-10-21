const libraryChai = require('chai');
const expect = libraryChai.expect;
const getItem = require('../get-item');

describe('getItem()', function() {
    it('When given an index of 0, it returns the first item', function() {
        const actual = getItem(['a', 'b', 'c'], 0);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
    it('when index is less than array.length, returns item at given index', function() {})
});

describe('getItem()', function() {
    it('When given an index 2, it returns the item at index 2', function() {
        const actual = getItem(['a', 'b', 'c'], 2);
        const expected = 'c';
        expect(actual).to.equal(expected);
    });
    it('when index is less than array.length, returns item at given index', function() {})
});

describe('getItem()', function() {
    it('When given an index of 3, it returns the first item', function() {
        const actual = getItem(['a', 'b', 'c'], 3);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
    it('when index is the same as array.length, returns item at first index', function() {})
});

describe('getItem()', function() {
    it('When given an index of 8, it returns the first item', function() {
        const actual = getItem(['a', 'b', 'c'], 8);
        const expected = 'c';
        expect(actual).to.equal(expected);
    });
    it('when index is less than array.length, returns item at given index', function() {})
});