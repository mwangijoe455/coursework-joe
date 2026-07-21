// index.test.js
const { combineUsers } = require('./index');
require('datejs');

describe('combineUsers function return', function() {
    const combine = combineUsers(
        ["James_Ochieng", "Mary_Akinyi", "Peter_Odhiambo"],
        ["Grace_Wanjiru", "David_Kiprop", "Sarah_Chebet"],
        ["John_Mwangi", "Faith_Auma", "Joseph_Omondi"]
    );
    
    test('should be an object', function() {
        expect(typeof combine).toBe('object');
    });
    
    test('should have the properties users and merge_date', function() {
        expect(combine).toHaveProperty('users');
        expect(combine).toHaveProperty('merge_date');
    });
});

describe('combineUsers function', function() {
    const combine = combineUsers(
        ["James_Ochieng", "Mary_Akinyi", "Peter_Odhiambo"],
        ["Grace_Wanjiru", "David_Kiprop", "Sarah_Chebet"],
        ["John_Mwangi", "Faith_Auma", "Joseph_Omondi"]
    );
    const combine2 = combineUsers(["Kevin_Otieno"], ["Mercy_Jepchumba"]);
    const combine3 = combineUsers([]);
    
    test('should merge all given arrays', function() {
        expect(combine.users).toStrictEqual([
            "James_Ochieng", "Mary_Akinyi", "Peter_Odhiambo",
            "Grace_Wanjiru", "David_Kiprop", "Sarah_Chebet",
            "John_Mwangi", "Faith_Auma", "Joseph_Omondi"
        ]);
        expect(combine2.users).toStrictEqual(["Kevin_Otieno", "Mercy_Jepchumba"]);
        expect(combine3.users).toStrictEqual([]);
    });

    test('should contain todays date', function() {
        const today = Date.today().toString("M/d/yyyy");
        expect(combine.merge_date).toBe(today);
        expect(combine2.merge_date).toBe(today);
        expect(combine3.merge_date).toBe(today);
    });
});