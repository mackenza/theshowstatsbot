const Datastore = require('nedb');
const db = new Datastore({filename: './data/datastore.db', autoload: true});

function getFranchiseId(user, server, msg, cb) {
    isUserFranchiseSet(user, userFranchise => {
        if (userFranchise) {
            cb(userFranchise, msg);
        } else {
            isServerFranchiseSet(server, serverFranchise => {
                if (serverFranchise) {
                    cb(serverFranchise, msg);
                } else {
                    cb(false, msg);
                }
            })
        }
    }) 
}

function getServerFranchiseId(server, msg, cb) {
    isServerFranchiseSet(server, serverFranchise => {
        cb(serverFranchise, msg);
    })
}

function getUserFranchiseId(user, msg, cb) {
    isUserFranchiseSet(user, userFranchise => {
        cb(userFranchise, msg);
    })
}

function isUserFranchiseSet(user, cb) {
    db.findOne({user: user}, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            if (doc) {
                cb(doc.franchise);
            } else {
                cb(false);
            }
            
        }
    });
}

function isServerFranchiseSet(server, cb) {
    db.findOne({guild: server}, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            if (doc) {
                cb(doc.franchise);
            } else {
                cb(false);
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

function setUserFranchise(id, user, msg, cb) {
    db.update({user: user},{user: user, franchise: id}, {upsert: true}, (err, numReplaced, upsert) => {
        console.log(numReplaced, upsert);
        cb(id, msg);
    });
}

module.exports = {
    getFranchiseId: getFranchiseId,
    setServerFranchise: setServerFranchise,
    setUserFranchise: setUserFranchise,
    getServerFranchiseId: getServerFranchiseId,
    getUserFranchiseId: getUserFranchiseId
}