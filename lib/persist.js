const Datastore = require('nedb');
const db = new Datastore({filename: './data/datastore.db', autoload: true});

function checkExisting(user, server, cb) {
    db.findOne({user: user}, (err, doc) => {
        console.log(user, server);
        if (err) {
            console.log(err);
        } else {
            if (doc) {
                cb(doc);
            } else {
                db.findOne({guild: server}, (err, doc) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (doc) {
                            cb(doc);
                        } else {
                            cb('false');
                        }
                    }
                })
            }
        }
    });
}

module.exports = {
    checkExisting: checkExisting
}