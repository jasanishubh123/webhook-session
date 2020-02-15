const  mongoose = require("mongoose")
const URL="mongodb://webhook:webhook@139.59.5.96:27017/webhook"
//assign Promisee to mongoose
mongoose.Promise=global.Promise;

module.exports = ()=>{
    return mongoose.connect(URL,{
        useNewUrlParser:true
    }).then(()=>{
        console.log("DB connextion established")
    }).catch(err => {
        console.log("Database connection err-",err)
        process.exit()
    })
}