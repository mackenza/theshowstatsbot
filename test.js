const Datastore = require('nedb');
var db = new Datastore({filename: './data/datastore.db', autoload: true});

db.find({guild: "mackenza-test"}, (err, docs) => {
    if (err) {
        console.log(err);
    } else {
        console.log(docs.length);
    }
});