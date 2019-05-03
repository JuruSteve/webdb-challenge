const db = require('../data/dbConfig')

module.exports = {
    addProject,
    getProjects,
    getProjectById
}

function addProject(proj){
    return db('projects')
            .insert(proj, 'id')
}

function getProjects(){
    return db('projects')
}

function getProjectById(id){
    return db('projects').where({id})
}
