import React, { Component } from 'react';
import axios from 'axios';
import Disclaimerfooter from './Disclaimerfooter.jsx'
import { Bar } from 'react-chartjs-2';
 


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        bitcoin: [],
        fakeData: { labels: ["2019-04-09", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "BitCoin Closing Price",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [5196.985, 10, 5, 2, 20, 30, 45],
        }]}
      };
      this.getBitCoinPrices = this.getBitCoinPrices.bind(this);
  };

  componentDidMount() {
    this.getBitCoinPrices()
  }

  getBitCoinPrices() {
    axios.get('/bitcoin')
      .then(res => {
        this.setState({
          bitcoin: res.data,
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
        <Disclaimerfooter disclaimer={this.state.bitcoin.disclaimer}/>
      </div>  
    )
  };
};

export default App;
