import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Useradd({user,setUser}) {

  let [firstname,setfirstname] = useState("")
  let [lastname,setlastname] = useState("")
  let [email,setemail] = useState("")
  let [mobile,setmobile] = useState("")
  let [interest,setinterest] = useState("")

  let navigate = useNavigate()
  let handleSubmit = () =>{

    let newArray = [...user]
      
    newArray.push({
              firstname,
              lastname,
              email,
              mobile,
              interest  
            })
        setUser(newArray)
        navigate('/Dashboard')

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
                    <Form.Control type="text" placeholder="First name" onChange={(e)=>setfirstname(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" onChange={(e)=>setlastname(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" onChange={(e)=>setmobile(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Interest</Form.Label>
                    <Form.Control type="text" placeholder="Interest" onChange={(e)=>setinterest(e.target.value)}/>
                  </Form.Group>


                  <Button variant="primary" onClick={()=>handleSubmit()}>
                    Submit
                  </Button>
                </Form>
                </div>
              </div>
          </div>
  </>
}
export default Useradd