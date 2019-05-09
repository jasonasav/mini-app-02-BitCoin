const axios = require('axios');

function getBitcoin(){
    return axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
                 .then(response => response.data)
}


module.exports = {
    getBitcoin,
}


// function bitcoinControllerGet(req, res, next){
//   bitcoinModelGet()
//   .then(data => res.send(data))
//   .catch((err) => {console.log(err);
//     res.sendStatus(500)})
// }

// function bitcoinModelGet(){
//   return axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
//             .then(response => response.data)
// }

// (req, res) => {
//   axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
//   .then((data) => {res.send(data.data)})
//   .catch((err) => {console.log(err);
//                    res.sendStatus(500)})
// }