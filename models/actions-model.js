const db = require('../data/dbConfig')

module.exports = {
    addAction,
    getActions
}

function addAction(action){
    return db('actions')
            .insert(action, 'id')
}

function getActions(){
    return db('actions')
}
