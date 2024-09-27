const db = require('../../data/db-config');


function getAll(){
    return null
}

function getBy(){
    return null
}

async function add(resource){
    const [id] = await db('resources').insert(resource)
    return db('resources').where('id', id).first()
}

async function remove(id){
    return db('resources').where('id', id).del()
}

module.exports = {
    getAll,
    getBy,
    add,
    remove
}