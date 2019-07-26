
// 博客后台接口的开发
const Router = require('koa-router')
const router = new Router()
const { mysql } = require('../../db/mysql');

// 获取用户列表
router.get('/getUser', async (ctx, next) => {
    let con = await mysql('user').select('*')
    ctx.body = {
        code: 200,
        data: con,
        message: '恭喜你，成功！'
    }
})

// 后台用户登录
router.post('/login', async (ctx, next) => {
    let con = await mysql('user').select('*')
    
})
    

module.exports = router;