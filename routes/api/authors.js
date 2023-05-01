const { getAll, getById,create,update,deleteById} = require('../../models/authors.model');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        const [items] = await getAll();
       
        res.send({
            items
        });
    } catch (error) {
        res.json({fatal: error.message});
    }
    
})

router.get('/:authorId', async (req, res) => {
    const {authorId} = req.params;
    try {
       const [result] = await getById(authorId);
       if (result.length===0) {
            return res.json({ fatal: 'No existe un author con ese ID'});
       }
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message});
    }
})

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [author] = await getById(result.insertId);
        res.json(author[0]);

    } catch (error) {
        res.json({fatal: error.message});
    }
}
)

router.put('/:authorId', async (req, res) => {
    try {
    const {authorId} = req.params;
    await update(authorId, req.body);
    const [author] = await getById(authorId)
    res.json(author[0]);
    } catch (error) {
    res.json({fatal: error.message});
}

})

router.delete('/:authorId', async (req, res) => {

    const {authorId} = req.params;
    try {
    const [author] = await getById(authorId)
    await deleteById(authorId);
    res.json(author[0]);
    } catch(error){
        res.json({fatal: error.message});
    }

})

module.exports = router;  