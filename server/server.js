const express = require('express')
const cors = require('cors')
const monk = require('monk')

const db = monk('localhost/meower')

const mews = db.get('mews')


var bodyParser = require('body-parser');
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/mews', (req, res) =>{
    mews.find().then(mews => {
        res.status(200).json(mews)
    })
    
})

function isValidMew(mew){
    return mew.name && mew.name.toString().trim() !== '' &&
    mew.content && mew.content.toString().trim() !== '';
}

app.post('/mews', (req, res)=>{
    if(isValidMew(req.body)){
        const mew = {
            name: req.body.name.toString(),
            content: req.body.content.toString(),
            created: new Date()
        }


        mews.insert(mew).then(createdMew =>{
            res.status(200).json(createdMew)
        })

    }else{
        res.status(422);
        res.json({
            message: "Hey! Name and Content are required" 
        })
    }
})

app.listen(1231, () =>{
    console.log('linstening on http://localhost:1231')
})