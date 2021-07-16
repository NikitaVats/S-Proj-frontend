import axios from "axios"
import {React,  useState } from "react"
import { useHistory } from "react-router"
import { Button, Form,Input } from "reactstrap"
import base_url from "../bootapi"

const CreateNewCompany=()=>{ 
    const history=useHistory();
    const [comp,setComp]=useState();
    const [sector,setSector]=useState();
    const fun=(e)=>{
        e.preventDefault();
       fun1(comp,sector);
       
       history.push('/showComp');
    }
    const fun1=(data,datas)=>{
        axios.post(`${base_url}/uploadcomp`,data).then(
            (response)=>{
              console.log(response);
              console.log("Success");
            },(error)=>{
               console.log(error);
            }
        )
        axios.post(`${base_url}/uploadsector`,datas).then(
          (response)=>{
            console.log(response);
            console.log("Success");
          },(error)=>{
             console.log(error);
          }
      )
    }
    return(
        <div class="container">
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
    <Form method="post" >
      <label for="name">Company Name</label>
      <Input type="text" name="name" id="name" placeholder="Enter here"  onChange={(e)=>{
    setComp({...comp,name:e.target.value })  }}></Input>
    <label for="turnover">Turnover</label>
      <Input type="text" name="turnover"  id="turnover" placeholder="Enter here"  onChange={(e)=>{
    setComp({...comp,turnover:e.target.value })  }}></Input>
    <label for="sector_name">Sector Name</label>
      <Input type="text" name="sector_name"  id="sector_name" placeholder="Enter here"  onChange={(e)=>{
    setSector({...sector,sector_name:e.target.value })  }}></Input>
    <label for="brief">Sector Brief</label>
      <Input type="text" name="brief"  id="brief" placeholder="Enter here"  onChange={(e)=>{
    setSector({...sector,brief:e.target.value })  }}></Input>
      <label for="ceo">CEO</label>
      <Input type="text" name="ceo" id="ceo" placeholder="Enter here" onChange={(e)=>{
    setComp({...comp,ceo:e.target.value })  }}></Input>
      <label for="bod">Board Of Directors</label>
      <Input type="text" name="bod" id="bod" placeholder="Enter here" onChange={(e)=>{
    setComp({...comp,bod:e.target.value })  }}></Input>
      
      <label for="writeup">Writeup</label>
      <Input type="text" name="writeup" id="writeup" placeholder="Enter here" onChange={(e)=>{
    setComp({...comp,writeup:e.target.value })  }}></Input>
      <Button type="submit" onClick={fun}> OK</Button>


    </Form>
    </div>
    <div class="col-sm-4"></div>
    </div>
    </div>
    )
}
export default CreateNewCompany