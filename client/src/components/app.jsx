import React, { Component } from 'react';
import axios from 'axios';
import Disclaimerfooter from './Disclaimerfooter.jsx'
// import Chart from './chart.jsx';
import { Bar } from 'react-chartjs-2';
 
// function createDates(dates) {
  
// }

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        bitcoin: [],
        fakeData: { labels: ["2019-04-09", "ggg", "ggg", "April", "May", "June", "July"],
        datasets: [{
        label: "BitCoin Closing Price",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [5190, 6000, 2433, 2434, 4320, 3430, 4500],
        }]},
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
        <Bar data={this.state.fakeData} />
        {/* <Chart dates={Object.keys(this.state.bitcoin.bpi)} price={Object.values(this.state.bitcoin.bpi)} /> */}
        <Disclaimerfooter disclaimer={this.state.bitcoin}/>
      </div>  
    )
  };
};

export default App;
