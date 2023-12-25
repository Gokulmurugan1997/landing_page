import React from 'react'
import Tiles from './Tiles'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Dashboard({user,setUser}) {
let data = [
    {
        isProgress:false,
        title:"Earnings (Monthly)",
        value:"$40,000",
        icon:"fa-calendar",
        color:"primary"
    },
    {
        isProgress:false,
        title:"Earnings (Annual)",
        value:"$215,000",
        icon:"fa-dollar-sign",
        color:"success"
    },
    {
        isProgress:true,
        title:"Earnings (Monthly)",
        value:"50%",
        icon:"fa-clipboard",
        color:"info"
    },
    {
        isProgress:false,
        title:"Pending Requests",
        value:"18",
        icon:"fa-comments",
        color:"warning"
    }
]
const navigate=useNavigate()
const handleDelete=(i)=>{
    let newArray=[...user]
    newArray.splice(i,1)
    setUser(newArray)
}
  return <>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className="row">
                            {
                                data.map((e,i)=>
                                {
                                    return<Tiles key={i}
                                    isProgress={e.isProgress}
                                    title={e.title}
                                    value={e.value}
                                    icon={e.icon}
                                    color={e.color}
                                    />
                                })
                            }
                  </div>
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">User List</h1>
                        </div>
                        <div className='row'>
                        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
          <th>mobile</th>
          <th>interest</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
     {
         user.map((e,i)=>{
            return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.interest}</td>
                <td>
                <Button variant='info' onClick={()=>navigate(`/Edituser/${i}`)}>Edit</Button>
                &nbsp;
                <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
                </td>
            </tr>
         })
     }
      </tbody>
    </Table>
                        </div>
                  </div>
                </div>
            </div>
  </>
}

export default Dashboard