const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const db = require('./mysql')
db.connect(err =>{
    if(err)console.log(err.message)
    else console.log("koneksi berhasil")
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

app.get("/makanan", (req,res)=>{
    db.query('select * from makanan', (err, results)=>{
        res.send({
            results
        })
    })
})


app.listen(port, () =>{
    console.log(`Server di port ${port}`)
})
