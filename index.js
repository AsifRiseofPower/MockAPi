const jsonServer = require('json-server')
const index = jsonServer.create()
const router = jsonServer.router("datas.json")
const middle = jsonServer.defaults()
const port = process.env.PORT  || 3000

index.use(middle)
index.use(router)
index.listen(port)
