const req = require("../node_modules/request-promise")
const url ="http://gateway.hajanaone.com/services/send.php"
const key = "13fa65a5fb3c6f01e4c782d9409afa72"
function sendSMS(numero ,mensaje){
    var opts ={
        uri:url,
        qs:{
            "key":key,
            "number":numero,
            "message":mensaje,
            "devices":68
        }
    }
    return req(opts)
}
module.exports={
    sendSMS
}