import React, { useEffect, useState } from "react"
import { Form,Input,label,select,Button } from "reactstrap"

import axios from "axios"
import base_url from "../bootapi"

const ManageExchange=()=>{
    const [exchange,setExchange]=useState({})
    const [ id,setId]=useState([])
    const [data,setData]=useState([])
    const fun5=(data1)=>{
        const k= data1.map((dt)=>{return(dt.comp_id)})
        console.log(k)
         setId(k)
     }
     const fun2=()=>{
        Object.assign(exchange,{ipoid:id});
        axios.post(`${base_url}/api2/postexchange`,exchange).then(
            (response)=>{
            
              console.log("Success");
              alert('Successfully Uploaded Stock Exchange')
            },(error)=>{
               console.log(error);
            }
        )
        
    }
    return(
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
    <div id="container">
       <Form method="post" >
      
        
       <label for="name">StockExchange Name</label>
       <select name="name" id="name">
       <option value="bse">BSE</option>
       <option value="nse">NSE</option>
       </select>
      <label for="brief">StockExchange Brief</label>
      <Input type="text" name="brief"  id="brief" placeholder="Enter here"  onChange={(e)=>{
    setExchange({...exchange,brief:e.target.value })  }} value={exchange.brief}></Input>
    <label for="bcontact">Contact</label>
      <Input type="text" name="contact"  id="contact" placeholder="Enter here"  onChange={(e)=>{
    setExchange({...exchange,contact:e.target.value })  }} value={exchange.contact} ></Input>
    
      <Button onClick={fun2} > OK</Button>


  

    </Form>
    </div>
    <div class="col-sm-4"></div>
    </div>
    </div>
    )
}
export default ManageExchange