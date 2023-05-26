const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
app.get('/',(req, res)=>{
    res.send("Hello Node API")
})

app.listen(8000, ()=>{
    console.log(`Node API app is running on port 8000`)
})