import React from "react"
import {Link} from 'react-router-dom'
const LoginAsAdmin=()=>{
return(
<div class="row">
    <div class="col-3">
        <Link to='/importdata'><h3>Import Data</h3></Link>
    </div>
    <div class="col-3">
        <Link to='/manageCompany'><h3>Manage Company</h3></Link>
    </div>
    <div class="col-3">
        <Link to='/manageexchange'><h3>Manage Exchange</h3></Link>
    </div>
    <div class="col-3">
        <Link to='/manageipo'><h3>Update IPO Details</h3></Link>
    </div>



</div>

)

}
export default LoginAsAdmin