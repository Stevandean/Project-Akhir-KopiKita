const {
    controllerGet
} = require('./makanan.controller')

const router = require('express').Router();

router.get('/', controllerGet)

module.exports = router