const db = require('../../mysql')
module.exports = {
    get: (callBack) => {
        db.query(`select * from makanan`,[],(err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null, results)
            }
        }) 
    }
}