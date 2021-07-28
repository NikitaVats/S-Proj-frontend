import React, { useEffect, useState } from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useHistory, useLocation } from 'react-router-dom'

const Graph=(props)=>{
   
    const location=useLocation()
    const [data1,setData1]=useState([])
    useEffect(()=>{console.log(location.state);console.log(location.state.state.price1.price)},[])
    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: location.state.state.price1,
            
          },
          {
            data:location.state.state.price2
          }
        ]
      };
    return(
        <div>
           
            
        <HighchartsReact highcharts={Highcharts} options={options} />
        
        </div>
    )
}
export default Graph