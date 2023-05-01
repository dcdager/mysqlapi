const { getAll, getByAuthorId, getById, create, update, deleteById } = require('../../models/posts.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
    const [posts] = await getAll();
    res.json(posts);
    } catch (error) {
    res.json({fatal: error.message});
    }

})

router.get('/author', async (req, res) => {
        

    try {
        const [items] = await getAll();
        
        for(let post of items) {
            const [author] = await getByAuthorId(post.author_id);
            post.author = author;
        }
       
        res.send({     
            items
        });
    } catch (error) {
        res.json({fatal: error.message});
    }
    
})

router.get('/:postId', async (req, res) => {
    const {postId} = req.params;
    try {
       const [result] = await getById(postId);
       if (result.length===0) {
            return res.json({ fatal: 'No existe un post con ese ID'});
       }
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message});
    }
})

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [post] = await getById(result.insertId);
        res.json(post[0]);

    } catch (error) {
        res.json({fatal: error.message});
    }
}
)


router.put('/:postId', async (req, res) => {
    try {
    const {postId} = req.params;
    await update(postId, req.body);
    const [post] = await getById(postId)
    res.json(post[0]);
    } catch (error) {
    res.json({fatal: error.message});
}

})

router.delete('/:postId', async (req, res) => {

    const {postId} = req.params;
    try {
    const [post] = await getById(postId)
    await deleteById(postId);
    res.json(post[0]);
    } catch(error){
        res.json({fatal: error.message});
    }

})


module.exports = router;