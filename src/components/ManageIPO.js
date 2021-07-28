import React, { useEffect, useState } from "react"
import { Form,Input,label,select,Button } from "reactstrap"
import CompanyId from "./CompanyId"
import axios from "axios"
import base_url from "../bootapi"



const ManageIPO=()=>{
    const [ipo,setIpo]=useState({})
    const [data,setData]=useState([])
    const [id,setId]=useState([])
    const fun=()=>{
        setData("data");
    }
    const fun5=(data1)=>{
       const k= data1.map((dt)=>{return(dt.comp_id)})
       console.log(k)
        setId(k)
    }
    const fun2=()=>{
        Object.assign(ipo,{stockexchangeid:id});
        console.log(ipo)
        axios.post(`${base_url}/api2/postipo1`,ipo).then(
            (response)=>{
              console.log(response.data);
              var s="";
              setData(response.data);
              {
                for(let i=0;i<data.length;i++)
                {
                   s+= data[i]+" "
                }  
              }
              if(response.data!="")
              {
                  alert("Stock Exchanges with id " + s + " not present")
              }
              else{
                  alert("Successful Ipo Update")
              }
              
              console.log("Success");
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
      <label for="name">Company Id</label>
      <Input type="text" name="id" id="id" placeholder="Enter here"   onChange={(e)=>{
    setIpo({...ipo,idcomp:e.target.value })  }} value={ipo.id}></Input>
    
    <label for="total_share">Total Shares</label>
      <Input type="text" id="total_share" name="total_share" placeholder="Enter here" onChange={(e)=>{
    setIpo({...ipo,total_share:e.target.value })  }} value={ipo.total_share}></Input>
        
        
     <CompanyId parentCallback={fun5}/>
      <label for="brief">Ipo Brief</label>
      <Input type="text" name="brief"  id="brief" placeholder="Enter here"  onChange={(e)=>{
    setIpo({...ipo,brief:e.target.value })  }} value={ipo.brief}></Input>
    
      <Button onClick={fun2} > OK</Button>


  

    </Form>
    </div>
    <div class="col-sm-4"></div>
    </div>
    </div>
    )
}
export default ManageIPO