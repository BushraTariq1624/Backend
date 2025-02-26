import express from "express"
// app.use(express.json())
const app = express()
const port = 3000
let user =[]
//192.168.100.21:3000
app.get('/star', (req, res) => {
  res.send('Hello World!')
})
app.post('/postRequest',(req,res)=>{
  console.log(req.body);
  res.send("hello this is post request")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})