import React, { useEffect, useState,useRef } from "react"
import { Form,Input,label,select,Button } from "reactstrap"
import axios from "axios";
import base_url from "../bootapi";
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import { useHistory } from "react-router";
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

const CompareCompany=()=>{

     const [data,setData]=useState([]);
     const [comp,setComp]=useState("");
     const [comp1,setComp1]=useState("");
    const [code1,setCode1]=useState("");
    const [code2,setCode2]=useState("");
     const [selectedfromDate,setSelectedfromDate]=useState(null)
    const [selectedtoDate,setSelectedtoDate]=useState(null)
     const [selectedfromTime,setSelectedfromTime]=useState(null)
     const [selectedtoTime,setSelectedtoTime]=useState(null)
     const[price1,setPrice1]=useState([])
     const[price2,setPrice2]=useState([])
    const history=useHistory()
    
    useEffect(()=>{
        axios.get(`http://localhost:9002/getcomp`).then(
            (response)=>{
                console.log("first")
              console.log(response);
              setData(response.data);
              console.log("Success");
            },(error)=>{
               console.log(error);
            }
        )
    },[])
   
       const mountedRef = useRef()   
       useEffect(()=>{
          if(mountedRef.current)
          {
           
           fun5()
          }
       },[code2])
      
    const fun3=()=>{
       
        console.log("2nd")
        data.map((data4)=>{if(data4.name==comp){console.log(data4.code);setCode1(data4.code);}})
        console.log(code1)
    }
    const fun6=()=>{
       
        data.map((data4)=>{if(data4.name==comp1){setCode2(data4.code);console.log(code2)}})
    }
    const fun4=(e)=>{
        e.preventDefault()
        console.log("Yay")
        history.push('/comparecompany')
    }
    var formdata;
    const fun5=()=>{
      console.log("hi")
         formdata=new FormData();
        console.log(code1)
        formdata.append('code1',code1)
        formdata.append('code2',code2)
        
        for (var key of formdata.entries()) {
			console.log(key[0] + ', ' + key[1])
		}
        
       

    }
    const fun8=()=>{
       
        history.push('/graph',{state:{price1:price1,price2:price2 }})
        
    }
    useEffect(()=>{
        if(mountedRef.current)
        {
         
         fun3()
         fun6()
        }
     },[comp1])
    useEffect(()=>{
       if(mountedRef.current)
       {
        console.log(price1)
        console.log(price2)
        fun8()
       }
    },[price2])
    useEffect(()=>{
mountedRef.current=true
    },[])
    
    const fun7=()=>{
      
        axios.get(`http://localhost:9003/getStock`,{params:{code1:code1,code2:code2}}).then(
            (response)=>{
              console.log(response.data);
              setPrice1(response.data[0])
              setPrice2(response.data[1])
              
            
              
              console.log("Success5");
              
              
            },(error)=>{
               console.log(error);
            }
        )
        
    }
    return(
        <div class="container" style={{backgroundColor:"lightgray"}}>
            
        <Form>
            <div class="row">
                <div class="col-sm-6">
        <label for="company"><b>Select Company </b></label></div>
        <div class="col-sm-6">
        <select id="company" name="company" class="mt-1" onChange={(e)=>{setComp(e.target.value)}}>
         {
             data.map((data2)=>{return(<option value={data2.name}>{data2.name}</option>)})
         }
        </select>
        </div>
        </div>
        <div class="row mt-2">
        <div class="col-sm-6">
        <label for="stockexchange"><b>Select StockExchange</b></label></div>
        <div class="col-sm-6">
        
        <select id="stockexchange" name="stockexchange">
            <option value="bse">BSE</option>
            <option value="nse">NSE</option>
        </select>
       </div>
        </div>
       
        <div class="row mt-2">
            <div class="col-sm-3">
        <label for="fromperiod">From Period</label></div>
        <div class="col-sm-3">
       <DatePicker selected={selectedfromDate} onChange={(date)=>{setSelectedfromDate(date)}}/></div>
       <div class="col-sm-3">
       <label for="toperiod">To Period</label>
       </div>
       <div class="col-sm-3">
        <DatePicker class="ml-1" selected={selectedtoDate} onChange={(date)=>{setSelectedtoDate(date)}}/>
        </div>
        </div>
        <div class="row mt-2">
            <div class="col-sm-3">
        <label for="fromtime">From Time</label></div>
        <div class="col-sm-3">
       <TimePicker selected={selectedfromTime} onChange={(time)=>{setSelectedfromTime(time)}}/></div>
       <div class="col-sm-3">
       <label for="totime">To Time</label></div>
       <div class="col-sm-3">
        <TimePicker selected={selectedtoTime} onChange={(time)=>{setSelectedtoTime(time)}}/></div>
        </div>
        <div class="row mt-2">
                <div class="col-sm-6">
        <label for="company"><b>Select Other Company </b></label></div>
        <div class="col-sm-6">
        <select id="company" name="company" class="mt-1" onChange={(e)=>{setComp1(e.target.value)}}>
         {
             data.map((data2)=>{return(<option value={data2.name}>{data2.name}</option>)})
         }
        </select>
        </div>
        </div>
        <div class="row mt-2">
        <div class="col-sm-6">
        <label for="stockexchange"><b>Select StockExchange</b></label></div>
        <div class="col-sm-6">
        <select id="stockexchange" name="stockexchange">
            <option value="bse">BSE</option>
            <option value="nse">NSE</option>
        </select>
        
       </div>
        </div>
       
        <div class="row mt-2">
            <div class="col-sm-3">
        <label for="fromperiod">From Period</label></div>
        <div class="col-sm-3">
       <DatePicker selected={selectedfromDate} onChange={(date)=>{setSelectedfromDate(date)}}/></div>
       <div class="col-sm-3">
       <label for="toperiod">To Period</label>
       </div>
       <div class="col-sm-3">
        <DatePicker class="ml-1" selected={selectedtoDate} onChange={(date)=>{setSelectedtoDate(date)}}/>
        </div>
        </div>
        <div class="row mt-2">
            <div class="col-sm-3">
        <label for="fromtime">From Time</label></div>
        <div class="col-sm-3">
       <TimePicker selected={selectedfromTime} onChange={(time)=>{setSelectedfromTime(time)}}/></div>
       <div class="col-sm-3">
       <label for="totime">To Time</label></div>
       <div class="col-sm-3">
        <TimePicker selected={selectedtoTime} onChange={(time)=>{setSelectedtoTime(time)}}/></div>
        </div>
        <Button class="mt-2" style={{backgroundColor:"black",color:"white"}} onClick={()=>{fun7(formdata)}}>Generate Map</Button>
       
        </Form>
        </div>

    )
}
export default CompareCompany