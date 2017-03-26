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

function setServerFranchise(id, server, msg, cb) {
    db.update({guild: server},{guild: server, franchise: id}, {upsert: true}, (err, numReplaced, upsert) => {
        console.log(numReplaced, upsert);
        cb(id, msg);
    });
}

module.exports = {
    checkExisting: checkExisting,
    setServerFranchise: setServerFranchise
}