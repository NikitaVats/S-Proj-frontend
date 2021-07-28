import React from 'react'
import {Link} from 'react-router-dom'
const LoginAsUser=()=>{
return(
<div class="row">
    <div class="col-4">
        <Link to='/ipo'><h3>IPOs</h3></Link>
    </div>
    <div class="col-4">
        <Link to='/comparecompany'><h3>Compare Company</h3></Link>
    </div>
    <div class="col-4">
        <Link to='/comparesector'><h3>Compare Sectors</h3></Link>
    </div>
    



</div>

)

}
export default LoginAsUser