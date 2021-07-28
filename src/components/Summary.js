import React, { useState } from "react"
import axios  from "axios";
import base_url from "../bootapi";
import { useHistory } from "react-router";

const Summary=()=>{
    const history=useHistory();
    const [comp1,setComp1]=useState("");
    const [bse,setBse]=useState("");
    const [num,setNum]=useState("");
    const [date,setDate]=useState("");
    const fun3=()=>{
        history.push('/loginAsAdmin');
    }
    const getData=()=>{
        
        axios.get(`${base_url}/api3/comp1`).then(
            (response)=>{
              console.log(response.data);
              setComp1(response.data[0]);
              setBse(response.data[1]);
              setNum(response.data[2]);
              setDate(response.data[3]);
              console.log("Success1");
            },(error)=>{
               console.log(error);
            }
        )
    }
    return(
        <div>
        <h2>Summary Of Upload</h2>

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h4>Company Code</h4>
                </div>
                <div class="col-sm">
                 <h5> {getData()} {comp1}</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <h4>Company StockExchange</h4>
                </div>
                <div class="col-sm">
                 <h5>  {bse}</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <h4>No of rows</h4>
                </div>
                <div class="col-sm">
                 <h5> {num}</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <h4>Date</h4>
                </div>
                <div class="col-sm">
                 <h5> {date}</h5>
                </div>
            </div>
            </div>
         <button onClick={fun3}> OK</button>
        </div>
    )
}
export default Summary