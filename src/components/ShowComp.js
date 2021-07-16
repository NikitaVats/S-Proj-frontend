import React, { useState } from 'react'
import axios from 'axios';
import base_url from '../bootapi';
import { Card ,CardBody,CardText,CardTitle} from 'reactstrap';


const ShowComp=()=>{
    let k=1;
    const [data1,setData]=useState([]);
    const getComp=()=>{
        
        axios.get(`${base_url}/getcomp`).then(
            (response)=>{
             
              setData(response.data);
              console.log("Success2");
            },(error)=>{
               console.log(error);
            }
        )
    }
    return(
        <div >
            <h3>Companies Description</h3>
            <Card>
                <CardBody>
           
           <CardText>{data1.map((data3)=>{<div>{console.log(data3)}data3</div>})}</CardText>
           </CardBody>
           </Card>

        </div>

    )
}








export default ShowComp