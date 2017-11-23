const {Given, Then, When} = require ('cucumber');
const assert = require('assert');

Given(/^The contact list is display$/, function(callback){
    this.browser.visit('http://localhost:3000', (err) => {
        if (err) throw err;
        let header = this.browser.queryAll("#contacts > table > tbody > tr[id]");
        assert.notEqual(header.length, 0);
        callback();
    });
});

When(/^User clicks on remove button of the first contact$/, function(callback) {
        let Contact = this.browser.tabs.current.Contact;
        let instance = Contact.Contacts.instance();
        let iterator = instance.iterator();
        let eramat = iterator.first();
        let button_id = "#button_" + eramat.id();
        let button = this.browser.query(button_id);
        assert.notEqual(button, undefined);
        button.click();
        callback();
});

Then(/^The first contact is removed$/, function(callback){
        let Contact = this.browser.tabs.current.Contact;
        let instance = Contact.Contacts.instance();
        let iterator = instance.iterator();
        let contact;
        let removed = true;
        while (iterator.hasNext() === true){
            contact = iterator.next();
            if (contact.firstName() === "Eric"){
                removed = false;
            }
        }
        assert.equal(removed, true);
        callback();
});

