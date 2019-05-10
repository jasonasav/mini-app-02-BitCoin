import React from 'react';
import { Line } from 'react-chartjs-2';


const Chart = ({ dates, prices }) => {
  return (
    <div>
     <Line data={ {labels: dates,
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



