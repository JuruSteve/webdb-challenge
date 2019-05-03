const db = require('../data/dbConfig')

module.exports = {
    addAction,
    getActions,
    getActionById
}

function addAction(action){
    return db('actions')
            .insert(action, 'id')
}

function getActions(){
    return db('actions')
}

function getActionById(id){
    console.log(id)
    return db('actions').where({id})
}
