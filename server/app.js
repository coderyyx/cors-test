const Koa = require('koa')
const Router = require('koa-router');
const cors = require('koa2-cors');
const app = new Koa()

const   PORT = process.argv.slice(2)[0]
const router = new Router()

app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url} ....`);
    // apply all request
    ctx.set({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Content-Type,Authorization,Accept',
        'Access-Control-Allow-Methods': 'GET,POST,DELETE',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    })
    await next(); 
});

// app.use(cors({
//     origin: function(ctx) {
//       if (ctx.url === '/test') {
//         return false;
//       }
//       return 'http://localhost:3000';
//     },
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 5,
//     credentials: true,
//     allowMethods: ['GET', 'POST', 'DELETE'],
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
//   }));

router.get('/index', async ( ctx )=>{
    let html = `
      <ul>
        <li><a href="/page/helloworld">/page/helloworld</a></li>
        <li><a href="/page/404">/page/404</a></li>
      </ul>
    `
    ctx.body = html
  })
  router.post('/users', async ( ctx )=>{
    ctx.body = 'post-->'
  })
  
app
.use(router.routes())
.use(router.allowedMethods({throw: true}));

app.listen(PORT, () => {
console.log('[demo] route-use-middleware is starting at port' + PORT)
})