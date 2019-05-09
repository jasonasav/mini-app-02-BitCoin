import React, { Component } from 'react';
import axios from 'axios';
import Disclaimerfooter from './Disclaimerfooter.jsx'
import { Bar } from 'react-chartjs-2';
 


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        bitcoin: [],
        fakeData: {labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
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
          bitcoin: res.data
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
            <Disclaimerfooter disclaimer={this.state.bitcoin.disclaimer}/>
            <Bar data={this.state.fakeData} />

        </div>
        
      )
  };
};

export default App;
