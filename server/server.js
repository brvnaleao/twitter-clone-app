const express = require('express')
const cors = require('cors')

var bodyParser = require('body-parser');
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send("dasd")
    
})
app.post('/test', (req, res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})

app.listen(1231, () =>{
    console.log('linstening no http://localhost:1231')
})