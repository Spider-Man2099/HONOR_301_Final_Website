import '../App.css'
import React, {useRef, useEffect} from 'react'; 
import Chart from 'chart.js/auto'
import {Line} from 'react-chartjs-2'
import { CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "white",
      borderColor: "red",
      hoverBackgroundColor: "blue",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const options = {
   responsive: true,
   options: {
    plugins: {
          legend: true, 
      },
    },
};
export default function Money(){

  
  return(
    
    <div>
        <Line options={options} data={data} height={100}/>
    </div>
  );
  
}