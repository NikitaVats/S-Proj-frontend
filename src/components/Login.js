import {React,useState} from "react"
import {Button,Form,FormGroup,label,Input} from 'reactstrap';
import { useHistory } from "react-router-dom";

import { Redirect } from "react-router";
const Login=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();
    const formSubmit=()=>{
      if(username=="admin" && password=="admin123")
      {
          console.log("yes");
          alert('Good');
          history.push('/loginAsAdmin')
      }
      else if(username=="user" && password=="user123")
      {
        history.push('/loginAsUser')
      }
      else{
          console.log("No")
      }
    }
return(
<div class="row">
    <div class="col-4"></div>
    <div class="col-4">
<Form onSubmit={formSubmit}>
<FormGroup>
<label for="username">Username</label>
<Input type="username" name="username" id="username" placeholder="Enter username" onChange={(e)=>{setUsername(e.target.value)}}></Input>
</FormGroup>
<FormGroup>
<label for="password">Password</label>
<Input type="password" name="password" id="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}}></Input>
</FormGroup>
<Button type="submit">Submit</Button>


</Form>
</div>
<div class="col-4"></div>
</div>

)



}
export default Login