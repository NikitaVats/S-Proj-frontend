import {React,useState} from 'react';
import {Button,Form,FormGroup,label,Input} from 'reactstrap';
import axios from 'axios'
import base_url from '../bootapi';

const Signup=()=>{

    
    const [user,setUser]=useState({username:"",email:"",password:"",mobno:""});
    const [type,setType]=useState("");
    
   
   
        
    
    const handleForm=(e)=>{
        
   e.preventDefault();
   console.log({type})
   postData(user);
    }
    const postData=(data)=>{
     axios.post(`${base_url}/api5/${type}`,data).then(
         (response)=>{
           console.log(response);
           console.log("Success");
           alert("Registration Succesful")
         },(error)=>{
            console.log(error);
         }
     )
    }
  
    return(
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
        <Form className="bg-primary mr-2"  onSubmit={handleForm} method="post" >
            <FormGroup>
                <label for="username">User Name</label>
                <Input type="text"   name="username" id="username" placeholder="Enter name" onChange={(e)=>{
    setUser({...user,username:e.target.value })  }}></Input>

            </FormGroup>
            <FormGroup>
                <label for="password">Password</label>
                <Input type="password"  name="password" id="password" placeholder="Enter name" onChange={(e)=>{
    setUser({...user,password:e.target.value})
}}></Input>
            </FormGroup>
            <FormGroup>
                <label for="email">Email</label>
                <Input type="email" name="email" id="email" placeholder="Enter name" onChange={(e)=>{setUser({...user,email:e.target.value})}}></Input>
            </FormGroup>
            <FormGroup>
                <label for="mobno">Mobile No</label>
                <Input type="text"  name="mobno" id="mobno" placeholder="Enter name" onChange={(e)=>{setUser({...user,mobno:e.target.value})}}></Input>
            </FormGroup>
            <FormGroup>
            
               <Input type="radio" name="admin" id="admin" value="admin" onChange={(e)=>{setType(e.target.value)}} ></Input>
               <label for="admin" >admin</label>

            </FormGroup>
            <FormGroup>
            
               <Input type="radio" name="user" id="user" value="user" onChange={(e)=>{setType(e.target.value)}}></Input>
               <label for="user">user</label>

            </FormGroup>
            <Button class="bg-secondary" type="submit"> Submit</Button>


        </Form>
        </div>
        <div class="col-4"></div>
        </div>
    )

}
export default Signup