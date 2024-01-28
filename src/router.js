const router = require("express").Router();
const clientController = require('./controllers/clients');

router.get('/client', clientController.find);
router.get('/client/:id', clientController.findById);
router.post('/client', clientController.create);
router.put('/client/:id', clientController.update);
router.delete('/client/:id', clientController.remove);
router.get('/optimized-route', clientController.optimizedRoute);

module.exports = router;