import React, { Component } from 'react';
import axios from 'axios';
import Disclaimerfooter from './Disclaimerfooter.jsx'
import Chart from './chart.jsx';
 
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        bitcoin: '',
        dates: '',
        prices:'',
      };
      this.getBitCoinPrices = this.getBitCoinPrices.bind(this);
  };

  componentDidMount() {
    this.getBitCoinPrices()
  }

  getBitCoinPrices() {
    axios.get('/bitcoin')
      .then(res => {
        var disclaimer = res.data.disclaimer
        var dates = Object.keys(res.data.bpi)
        var prices = Object.values(res.data.bpi)
        this.setState({
          bitcoin: disclaimer,
          dates: dates,
          prices: prices
        })
      })
      .catch(err => {
        res.sendStatus(500)
      })
  }

  render() {
    return (
      <div>
        <h1>BitCoinViewer</h1>
        <Chart dates={this.state.dates} prices={this.state.prices} />
        <Disclaimerfooter disclaimer={this.state.bitcoin}/>
      </div>  
    )
  };
};

export default App;
