console.log("sabckjab")
import express from "express"
import path from "path"
const app = express()
const port = 3000
const __dirname = path.resolve()

//192.168.228.238:3000
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.static(path.join(__dirname,'application/dist')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})