import React from 'react'
import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Useradd from './Components/Useradd'
import Edituser from './Components/Edituser'


function App() {
  let [user,setUser]= useState([
    {
      firstname:"Gokul",
      lastname:"murugan",
      email:"gokul@gmail.com",
      mobile: "9863542444",
      interest:"cricket"
    },
    {
      firstname:"Suresh",
      lastname:"kumar",
      email:"kumar@gmail.com",
      mobile: "89734644234",
      interest:"volleyball"
    },
    {
      firstname:"Balaji",
      lastname:"hasan",
      email:"balaji@gmail.com",
      mobile: "7845566797",
      interest:"football"
    }
  ])
  return <>
  <BrowserRouter>
   <div id="wrapper">
      <Sidebar/>
      <Routes>
            <Route path='/Dashboard' element={<Dashboard user={user} setUser={setUser}/>}/>
            <Route path='/Useradd' element={<Useradd user={user} setUser={setUser}/>}/>
            <Route path='/Edituser/:id' element={<Edituser user={user} setUser={setUser}/>}/>
            <Route path='*' element={<Navigate to ='/dashboard'/>} />

      </Routes>
      
   </div>
   </BrowserRouter>
  </>
}

export default App