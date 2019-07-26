const Router = require('koa-router')
const router = new Router()
router.get('/', async (ctx, next) => {
    ctx.body = 'business'
})

module.exports = router;