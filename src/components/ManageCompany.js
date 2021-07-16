import { Button } from 'reactstrap'
import React from 'react'
import { useHistory } from 'react-router'

const ManageCompany=()=>{
    const history=useHistory();
    const fun=()=>{
        history.push('/createnewcomp')
    }
    return(
        <div>
  <Button onClick={fun}> Create New Company</Button>
  </div>
    )
}
export default ManageCompany