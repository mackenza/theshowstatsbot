const Datastore = require('nedb');
var db = new Datastore({filename: './data/datastore.db', autoload: true});

var doc = {
    guild: "GeekLockdown",
    franchise: "275472"
};

db.insert(doc, (err, newDoc) => {
    if (err) {
        console.log(err);
    } else {
        console.log(newDoc);
    }
});