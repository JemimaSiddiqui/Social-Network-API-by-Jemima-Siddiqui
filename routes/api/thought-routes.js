// Require express router
const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

// /api/thoughts 
router.route('/').get(getAllThoughts); // <GET>

// /api/thoughts/:id 
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); // <GET, PUT, DELETE>

// /api/thoughts/:userId 
router.route('/:userId').post(createThoughts); // <POST>

// /api/thoughts/:thoughtId/reactions 
router.route('/:thoughtId/reactions').post(addReaction); // <POST>

// /api/thoughts/:thoughtId/reactionId 
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction); //<DELETE>

module.exports = router;