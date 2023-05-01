const { query } = require("express");

const getAll = () => {
    return  db.query('select *  from authors');
}

const getById  = (authorId) => {
    return db.query('select * from authors where  id =?',[authorId]);

}

const create = ({name,  email,image}) => {
    return db.query(
        'insert into authors (name,  email, image) values (?,?,?)',
        [name,  email,image]
    )

}

const update = (authorId,{name,  email,image})  => {
    return db.query(
        'update authors set name=?, email = ?, image = ? where id = ?',
        [name,  email,image, authorId]
    )
}

const deleteById = (authorId)  => { 
    return db.query('delete  from authors where  id =?',[authorId]);
}


module.exports = {
    getAll, getById,create,update,deleteById
}