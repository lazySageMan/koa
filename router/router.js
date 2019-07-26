const Router = require('koa-router');
const router = new Router();

const admin = require('./admin');
const business = require('./business');
router.get('/', async (ctx, next) => {
    ctx.body = 'index';
})
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/business', business.routes(), business.allowedMethods())

module.exports = router;