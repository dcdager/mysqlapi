const { query } = require("express");

const getAll = () => {
    return  db.query('select *  from posts');
}

const getByAuthorId = (authorId) => {
    return db.query('select * from authors where id=?',
    [authorId]);
}

const getById  = (postId) => {
    return db.query('select * from posts where  id =?',[postId]);

}

const create = ({title, description, creation_date, category, author_id}) => {
    return db.query(
        'insert into posts (title, description, creation_date, category, author_id) values (?,?,?,?,?)',
        [title, description, creation_date, category, author_id]
    )

}

const update = (postId,{title, description, creation_date, category, author_id})  => {
    return db.query(
        'update posts set title=?, description = ?, creation_date = ?, category = ?, author_id= ? where id = ?',
        [title, description, creation_date, category, author_id, postId]
    )
}

const deleteById = (postId)  => { 
    return db.query('delete  from posts where  id =?',[postId]);
}

module.exports = {
    getAll,getByAuthorId, getById, create, update,deleteById
}