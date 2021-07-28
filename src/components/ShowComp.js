import React, { useEffect, useState } from 'react'
import axios from 'axios';
import base_url from '../bootapi';
import { Card ,CardBody,CardText,CardTitle} from 'reactstrap';


const ShowComp=()=>{
  
    
    const [data1,setData]=useState([]);
    useEffect(()=>{
      getComp();
     },[])
    const getComp=()=>{
        
        axios.get(`${base_url}/api3/getcomp`).then(
            (response)=>{
             
                console.log(response.data)
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
            
            
           <div> { data1.map((data3)=>{return(<Card style={{backgroundColor:"lightgray"}}><CardBody><CardText><div class="row"><div class="col-sm-4">{data3.name} </div>     <div class="col-sm-4">{data3.stockexchange}</div>  <div class="col-sm-4">{ data3.writeup}</div></div></CardText></CardBody></Card>)})} </div>
           

        </div>

    )
}








export default ShowComp