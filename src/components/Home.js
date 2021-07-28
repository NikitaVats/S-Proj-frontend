import React from 'react';
import {Button} from 'reactstrap';
import Signup from './Signup'
import Login from './Login'
import Show1 from './Show1'
import LoginAsAdmin from './LoginAsAdmin'
import LoginAsUser from './LoginAsUser'
import ImportData from './ImportData'
import ManageCompany from './ManageCompany'
import ManageExchange from './ManageExchange'
import UpdateIPODetails from './UpdateIPODetails'
import Summary from './Summary'
import CreateNewCompany from './CreateNewCompany'
import ShowComp from './ShowComp'
import CompareCompany from './CompareCompany'
import CompareSector from './CompareSector'
import Graph from './Graph'
import IPO from './IPO'
import ManageIPO from './ManageIPO'
import {Card,CardBody,CardText} from 'reactstrap'

import {Route,Switch,BrowserRouter,Link,useHistory} from 'react-router-dom'
const Home=()=>{

  const history=useHistory();
  const fun=()=>{
     return(
      <div>
        <h1>Hi</h1>
      </div>
     )
  }
    return(
     
        <div style={{ backgroundImage: "url(/stock.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",overflow:"hidden",width:"100%",backgroundPosition:"center" }} >
         
         
          <BrowserRouter>  
          <Card style={{backgroundColor:"white"}}>
    <ul>
     <li ><Link to="/signup"><h1> Signup</h1></Link></li>
     <l1><Link to="/login"><h1>Login</h1></Link></l1>

    </ul>
    </Card>

  <Switch>
  <Route path="/manageexchange">
      <ManageExchange />
    </Route>
  <Route path="/manageipo">
      <ManageIPO />
    </Route>
  <Route path="/graph">
      <Graph />
    </Route>
  <Route path="/loginAsUser">
      <LoginAsUser />
    </Route>
  <Route path="/comparecompany">
      <CompareCompany />
    </Route>
    <Route path="/comparesector">
      <CompareSector />
    </Route>
    <Route path="/ipo">
      <IPO />
    </Route>
    <Route path="/showComp">
      <ShowComp />
    </Route>
  <Route path="/showComp">
      <ShowComp />
    </Route>
  <Route path="/createnewcomp">
      <CreateNewCompany />
    </Route>
  <Route path="/success">
      <Summary />
    </Route>
  <Route path="/importData">
      <ImportData />
    </Route>
    <Route path="/manageCompany">
      <ManageCompany />
    </Route>
    <Route path="/manageExchange">
      <ManageExchange />
    </Route>
    <Route path="/updateIpoDetails">
      <UpdateIPODetails />
    </Route>
  <Route path="/loginAsAdmin">
      <LoginAsAdmin />
    </Route>
    <Route path="/show">
      <Show1 />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    </Switch>
    </BrowserRouter>
          </div>

        
    )

}
export default Home