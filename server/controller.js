const Model = require('./model.js')

function getBitcoin(req, res, next){
    Model.getBitcoin()
    .then(data => res.send(data))
    .catch((err) => {console.log(err);
      res.sendStatus(500)})
}


module.exports = {
    getBitcoin,
}

