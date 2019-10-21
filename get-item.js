const libraryChai = require('chai');
//console.log(libraryChai);
const expect = libraryChai.expect;
console.log(expect, '<-----expect')

function getItem(arr, index) {
    if (index >= arr.length) {
        index = (index % arr.length);
    }
    return arr[index];
}

//const actual = getItem(['a', 'b', 'c'], 0);
//const expected = 'a';
//if (actual !== expected) {
//    throw new Error('We expected the ' + expected + ' to equal ' + actual);
//} else {
//    console.log('all good!')
//}

describe('getItem()', function() {
    it('When given an index of 0, it returns the first item', function() {
        const actual = getItem(['a', 'b', 'c'], 0);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
    it('when index is less than array.length, returns item at given index', function() {})
})

/*console.log('When given an index of 0, it returns the first item')
try {
    const actual = getItem(['a', 'b', 'c', 'd', 'e'], 0);
    const expected = 'a';
    if (actual != expected) {
        throw new Error('We expected the ' + expected + ' to equal ' + actual);
    } else {
        console.log('all good!')
    } 
    expect(actual).to.equal(expected);
} catch (error) {}
console.log('\n'); 


console.log('When given index less than arr.length, it returns the item at given index');
try {
    const actual = getItem(['a', 'b', 'c', 'd', 'e'], 2);
    const expected = 'c';
    /*if (actual != expected) {
        throw new Error('We expected the ' + expected + ' to equal ' + actual);
    } else {
        console.log('all good!')
    } 
    expect(actual).to.equal(expected);
} catch (error) {
    console.log(error);
}

console.log('*****TEST CASE 3*********');
console.log('When given an index the same as arr.length, returns the first item')

try {
    const actual = getItem(['a', 'b', 'c', 'd', 'e'], 5);
    const expected = 'a';
    /*if (actual != expected) {
        throw new Error('We expected the ' + expected + ' to equal ' + actual);
    } else {
        console.log('all good!')
    } 
    expect(actual).to.equal(expected);
}
catch (error) {
    console.log(error);
}

console.log('********End of TEST CASE 3******');

console.log('*******TEST CASE 4*******');
console.log('When given an index greater than arr.length, repeats over the array and returns the correct item');
try {
    const actual = getItem(['a', 'b', 'c', 'd', 'e'], 22);
    const expected = 'c';
    /* if (actual != expected) {
        throw new Error('We expected the ' + expected + ' to equal ' + actual);
    } else {
        console.log('all good!')
    } 
    expect(actual).to.equal(expected);
}
catch (error) {
    console.log(error);
}
console.log('*******END OF TEST CASE 4*********'); */

module.exports = getItem;