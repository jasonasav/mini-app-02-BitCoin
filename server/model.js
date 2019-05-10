const axios = require('axios');

function getBitcoin(){
    return axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
                 .then(response => response.data)
}


module.exports = {
    getBitcoin,
}
