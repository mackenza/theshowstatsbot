const Datastore = require('nedb');
const db = new Datastore({filename: './data/datastore.db', autoload: true});

function checkExisting(user, server, cb) {
    db.findOne({guild: server}, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            cb(doc);
        }
    });
}

module.exports = {
    checkExisting: checkExisting
}