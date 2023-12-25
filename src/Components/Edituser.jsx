import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Edituser({user,setUser}) {
    const params=useParams()

    let navigate = useNavigate()
    let [firstname,setfirstname] = useState(user[params.id].firstname)
    let [lastname,setlastname] = useState(user[params.id].lastname)
    let [email,setemail] = useState(user[params.id].email)
    let [mobile,setmobile] = useState(user[params.id].mobile)
    let [interest,setinterest] = useState(user[params.id].interest)

    useEffect(() =>{
        if(params.id<user.length){
            setfirstname(user[params.id].firstname),
            setlastname(user[params.id].lastname),
            setemail(user[params.id].email),
            setmobile(user[params.id].mobile),
            setinterest(user[params.id].interest)
        }
        else{
            alert("Invlaid User Id" + params.id)
        }
    },[])
const handleEdit = () =>{
    let newArray = [...user]
    newArray.splice(params.id,1,{
        
            firstname,
            lastname,
            email,
            mobile,
            interest  
          
    })
}

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Add User</h1>
          </div>
          <Form>
          <Form.Group className="mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" value = {firstname} onChange={(e)=>setfirstname(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name"value = {lastname}  onChange={(e)=>setlastname(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" value = {email} onChange={(e)=>setemail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" value = {mobile} onChange={(e)=>setmobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interest</Form.Label>
            <Form.Control type="text" placeholder="Interest" value = {interest} onChange={(e)=>setinterest(e.target.value)}/>
          </Form.Group>


          <Button variant="primary" onClick={()=>handleEdit()}>
            Submit
          </Button>
        </Form>
        </div>
      </div>
  </div>
</>
}

export default Edituser