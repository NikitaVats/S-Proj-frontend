import React, { useState } from 'react'
import { Input,Button } from 'reactstrap'
import axios from 'axios'
import base_url from '../bootapi';
import { useHistory } from 'react-router';
const ImportData=()=>{
  
    const history=useHistory();
    const fun1=(e)=>{
        
        console.log(e.target.files[0])
        
           let formdata=new FormData();
           let k=e.target.files[0];
           formdata.append('excelfile' , e.target.files[0])

           console.log(formdata)
           fun(formdata)
           history.push('/success');
        }
    
    const fun=(data)=>{
        axios.post(`${base_url}/file`,data).then(
            (response)=>{
              console.log(response);
              console.log("Success");
            },(error)=>{
               console.log(error);
            }
        )
    }
    const fun2=()=>{

      
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
export default ImportData