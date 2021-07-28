import React, { useState } from 'react'
import { Input,Button } from 'reactstrap'
import axios from 'axios'
import base_url from '../bootapi';
import { useHistory } from 'react-router';
const ImportData=()=>{
  
    const history=useHistory();
    const [excel,setExcel]=useState("")
    const [excel1,setExcel1]=useState("")
    const [obj,setObj]=useState({});
    const [data,setData]=useState([])
    const fun1=(e)=>{
        
        console.log(e.target.files[0])
        
           let formdata=new FormData();
           
           let k=e.target.files[0];
           formdata.append('excelfile' , e.target.files[0])
           formdata.append('comp_code' , excel)
           formdata.append('stockexchangeid' , excel1)
           
           console.log(formdata)
           
           fun(formdata)
          
        }
    
    const fun=(data)=>{
        axios.post(`${base_url}/api2/file`,data).then(
            (response)=>{
              console.log(response.data);
              setData(response.data)
            
           
              console.log("Success");
              
            },(error)=>{
               console.log(error);
            }
        )
    }
    const fun2=(e)=>{
      e.preventDefault();
      console.log(typeof(data[0].date))
      for(let i=0;i<data.length;i++)
      {
      axios.get(`${base_url}/api2/getdata`,{params:{data1:excel,data2:excel1,price:data[i].price,date:data[i].date,time:data[i].time}}).then(
        (response)=>{
            console.log(excel)
          console.log(response.data);
          setData(response.data)
          console.log("Success");
          history.push('/success')
        },(error)=>{
           console.log(error);
        }
    )
      
      
    }
}
    return(
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
   <h3> Import Excel</h3>


<div class="container">
   <div class="row ">
   <form name="fileupload1"  enctype="multipart/form-data" onSubmit={fun2} >
   <div class="col-sm">
           
           <label for="stockexchangeid">StockExchange Id</label>
           <input type="text" name="stockexchangeid" id="stockexchangeid" onChange={(e)=>{setExcel1(e.target.value)}}></input>
           <label for="compcode">Company Code</label>
           </div>
           <div class="col-sm">
           
   <input type="text" name="compcode" id="compcode" onChange={(e)=>{setExcel(e.target.value)}}></input>
   </div>
       <div class="col-sm">
           
   <label for="file1">Choose excel file to be uploaded</label>
   </div>
   <div class="col-sm">
   <Input type="file" id="excelfile" name="excelfile" onChange={fun1}></Input>
   </div>
   <div class="col-sm">
   <Button type="submit"> Upload</Button>
   </div>
   </form>
   </div>
   </div>
   </div>
   <div class="col-sm"></div>
   
   </div>
    )
}
export default ImportData;