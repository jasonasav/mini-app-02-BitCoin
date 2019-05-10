import React from 'react';
import { Bar } from 'react-chartjs-2';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    chartData: { 
        labels: '',
        datasets: [{
        label: "BitCoin Closing Price",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: '',
        }]}   
    }
}

  render() {
    return (
      <div>
        <Bar data={this.state.chartData} />
      </div>  
    )
  }
};

export default Chart;