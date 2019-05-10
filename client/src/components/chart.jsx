import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ dates, prices }) => {
  return (
    <div>
     <Bar data={ {labels: dates,
                    datasets: [{
                    label: "BitCoin Closing Price",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: prices }]}
                } 
          />
    </div>
  )
}

export default Chart;



