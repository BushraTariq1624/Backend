
import express from "express"
console.log("sdbcakjna");
const app = express()
const port = 3000
//192.168.141.245:3000
app.get('/', (req, res) => {
    console.log(req.ip)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})