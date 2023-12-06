const jsonServer = require('json-server')
const empServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router("db.json")
const port = 3000 || process.env.port
empServer.use(middleware)
empServer.use(router)
empServer.listen(port,()=>{
    console.log(`Employee Portal Server started at ${port}, and waiting for request...`);
})