import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        bitcoin: []
          
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
        </div>
        
      )
  };
};

export default App;
