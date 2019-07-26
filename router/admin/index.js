const Router = require('koa-router')
const router = new Router()
const { mysql } = require('../../db/mysql');
router
    .get('/getUser', async (ctx, next) => {
        let con = await mysql('user').select('*')
        ctx.body = {
            code: 200,
            data: con,
            message: '恭喜你，成功！'
        }
    })
    .post('/', async (ctx, next) => {
        let con = await mysql('user').select('*')
        ctx.body = {
            code: 200,
            data: con
        }
    })

module.exports = router;