const router = require('express').Router()

const apiRoutes = require('./api')
const view = require('./view')

router.use('/', view)
router.use('/api', apiRoutes)

module.exports = router