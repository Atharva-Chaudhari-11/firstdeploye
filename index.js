require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/atharva',(req,res)=>{
  res.send('this is atharva here')
})
app.get('/htmltry', (req,res)=>{
  res.send("<H1>THis is the h1 tag</H1>")
})

app.get('/github',(req,res)=>{
  res.send("https://github.com/atharvachaudhari")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})