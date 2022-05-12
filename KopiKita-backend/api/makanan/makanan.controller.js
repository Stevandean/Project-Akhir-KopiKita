const {
    get
} = require('./makanan.service')

module.exports = {
    controllerGet: (req, res) => {
        get((err, results)=>{
            if(err){
                console.log(err)
                return
            } else{
                return res.json({
                    success: 1,
                    data:results
                })
            }
        })
    }
}