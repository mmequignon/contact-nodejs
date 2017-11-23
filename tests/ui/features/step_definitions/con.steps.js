const {Given, Then, When} = require ('cucumber');
const assert = require('assert');

Given(/^The contact list is displayed disordered$/, function(callback) {
    this.browser.visit('http://localhost:3000', (err) => {
        if (err) throw err;
        let sorted = true;
        let contacts = this.browser.queryAll("td#cellLastName");
        for(let i = 1; i < contacts.length; i++){
            if (contacts[i-1].innerHTML > contacts[i].innerHTML){
                sorted = false;
            }
        }
        assert.equal(sorted, false);
        callback();
    });
});

When(/^User clicks on the sort button$/, function(callback) {
    let button = this.browser.query("#button_sort");
    button.click();
    callback();
});

Then(/^Contact list is displayed sorted$/, function(callback){
    let sorted = true;
    let contacts = this.browser.queryAll("td#cellLastName");
    for(let i = 1; i < contacts.length; i++){
        if (contacts[i-1].innerHTML > contacts[i].innerHTML){
            sorted = false;
        }
    }
    assert.equal(sorted, true);
    callback();
});

