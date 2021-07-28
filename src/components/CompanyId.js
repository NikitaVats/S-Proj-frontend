import{ React ,useState} from "react"
import { Input,label,Button } from "reactstrap"
import { Container,Paper,Box, Grid, TextField,IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
const CompanyId=(props)=>{

    
    const temp={comp_id:""}
    const [ id,setId]=useState([temp])
    const fun=()=>{
        setId([...id,temp])
    }
    const fun1=(e,index)=>{
        console.log(index)
        const updatedid=id.map((id1,key)=>{if(key==index){return(Object.assign(id1,{comp_id:e.target.value}))}else{return id1}})
        console.log(updatedid)
        setId(updatedid)
    }
    const fun3=(index)=>{
        console.log(id)
        const k=[...id]
       k.splice(index,1);
        setId(k)
        
    }
    const sendBackData=()=>{
        props.parentCallback(id)
    }
    return(
       
        <Container>
            <Paper component={Box}>
                {
                    
                    id.map((id1,index)=>{
                        console.log(id);
                        
                       return(
                        <Grid container key={index}>
                        <Grid item md={4}>
                            <label for="id"> StockExchange Id </label>
                            <TextField
                           
                            placeholder="Enter id" onChange={(e)=>{fun1(e,index);}} value={id1.comp_id} >
     
                            </TextField>
                        </Grid>
                        <Grid item md={4}>
                         <IconButton onClick={()=>{fun3(index)}}>
                             <DeleteIcon />
                         </IconButton>
                         
     
                          
                        </Grid>
                        <Grid item md={4}>
                            <IconButton onClick={sendBackData}>
                                <DoneIcon/>

                               
                            </IconButton>
                        </Grid>
                        </Grid>)
                    })
                }
                
              
              
            </Paper>
            <Button onClick={fun}> Add more</Button>
        </Container>

    )
}
export default CompanyId

