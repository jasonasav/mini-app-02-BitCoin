const axios = require('axios');

function getBitcoin(){
    return axios.get(' https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2018-09-05')
                 .then(response => response.data)
}


module.exports = {
    getBitcoin,
}
