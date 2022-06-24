import React from 'react';
import Tbody from "./components/Tbody";
import {useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup} from 'reactstrap';
function App() {
    const [users,setUsers] =useState([
        {id:1,firstName:"Mark",lastName:"Otto",userName:"@mdo",count:12,active:true},
        {id:2,firstName:"Jacob",lastName:"Thorton",userName:"@fat",count:10,active:false},
        {id:3,firstName:"Larry",lastName:"Thebird",userName:"@twitter",count:18,active:true},
        {id:4,firstName:"lensor",lastName:"Parry",userName:"@trope",count:23,active:false},
        {id:5,firstName:"Uel",lastName:"Nelson",userName:"@ticer",count:43,active:true},
    ])
    const [user]=useState( {id:users.length,firstName:" ",lastName:" ",userName:" ",count:" ",active:" "})
    const [sUser,setSuser]=useState( Number)
    const [checkedActive,setCheckedActive]=useState( false)
    const [serachText,setSearchText]=useState( "")
    const [modal, setmodal] = useState(false)
    const [modal2, setmodal2] = useState(false)
    const toggle = () => {
        setmodal(!modal)
    }
    const toggle2 = () => {
        setmodal2(!modal2)
    }
    const countP = (index) => {
        users[index].count = parseInt(users[index].count) + 1
        setUsers([...users])
    }
    const countM = (index) => {
        users[index].count = parseInt(users[index].count) - 1
        setUsers([...users])
    }

    const changeActive = (index) => {
        users[index].active = !users[index].active
        setUsers([...users])
    }
    const deleteUser = (id) => {
        for(let i = 0; i < users.length; i++) {
            if(users[i].id === id ){
                users.splice(i, 1)
            }
        }
        setUsers([...users])
    }
    const changeForm = (event) => {
        event.preventDefault()
        user.firstName = event.target[0].value
        user.lastName = event.target[1].value
        user.userName = event.target[2].value
        user.count = parseInt(event.target[3].value)
        user.active = Boolean(event.target[4].checked)
        users.push(user)
        setUsers([...users])
        toggle()
    }
    const selectUser = (index) => {
      setSuser(index)
    }
    const changeUser = (event) => {
        event.preventDefault()
        users[sUser].firstName=event.target[0].value
        users[sUser].lastName = event.target[1].value
        users[sUser].userName = event.target[2].value
        users[sUser].count = parseInt(event.target[3].value)
        users[sUser].active = Boolean(event.target[4].checked)
        setUsers([...users])
        toggle2()
    }
    const sText =(event)=>{
        setSearchText(event.target.value)
    }
    return (
        <div className={"container"}>
            <div className="row mt-3">
               <div className="col-12  align-items-center">
                        <div className="d-flex align-items-center">

                            <input  onChange={sText} placeholder={"search"} className={"d-inline form-control w-25 me-4"} type="search"/>
                            <input id={"active"} onChange={()=>setCheckedActive(prevState => !prevState)} className={"form-check-input me-2"} type="checkbox"/>  <label htmlFor="active">active</label>
                        </div>
                      <button onClick={toggle} className={"btn btn-outline-dark float-end "}>Add</button>
                   <Modal isOpen={modal} toggle={toggle}>
                       <ModalHeader toggle={toggle}>Add user</ModalHeader>
                       <ModalBody>
                           <Form onSubmit={changeForm} id={"addUser"}>
                               <FormGroup>
                                   <Label for="firstName">FirstName</Label>
                                   <Input required={true} type="text" id="firstName" placeholder="FirstName"/>
                               </FormGroup>
                               <FormGroup>
                                   <Label for="lastName">LastName</Label>
                                   <Input required={true} type="text" id="LastName" placeholder="LastName"/>
                               </FormGroup>

                               <FormGroup>
                                   <Label for="phone">UserName</Label>
                                   <Input required={true} type="text" id="phone" placeholder="Username"/>
                               </FormGroup>
                               <FormGroup>
                                   <Label for="count">Count</Label>
                                   <Input required={true} type="number" id="count" placeholder="Count"/>
                               </FormGroup>
                               <FormGroup check>
                                   <Label check>
                                       <Input  type="checkbox"/>{' '}
                                       Active
                                   </Label>
                               </FormGroup>
                           </Form>
                       </ModalBody>
                       <ModalFooter>
                           <Button color="primary"  form={"addUser"}>Save</Button>{' '}
                           <Button color="secondary" onClick={toggle}>Cancel</Button>
                       </ModalFooter>
                   </Modal>
               </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>Count</th>
                            <th>Active</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <Tbody serachText={serachText} checkedActive={checkedActive} toggle2={toggle2} selectUser={selectUser} users={users} deleteUser={deleteUser}  countP={countP} countM={countM}
                               changeActive={changeActive}/>
                    </table>
                    <Modal isOpen={modal2} toggle={toggle2}>
                        <ModalHeader toggle={toggle2}>Add user</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={changeUser} id={"changeUser"}>
                                <FormGroup>
                                    <Label for="firstName">FirstName</Label>
                                    <Input defaultValue={users[sUser].firstName} type="text" id="firstName" placeholder="FirstName"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastName">LastName</Label>
                                    <Input defaultValue={users[sUser].lastName} type="text" id="lastName" placeholder="LastName"/>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="phone">UserName</Label>
                                    <Input defaultValue={users[sUser].userName} type="text" id="phone" placeholder="Username"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="count">Count</Label>
                                    <Input defaultValue={users[sUser].count} type="number" id="count" placeholder="Count"/>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input defaultChecked={users[sUser].active} type="checkbox"/>{' '}
                                        Active
                                    </Label>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary"  form={"changeUser"}>Save</Button>{' '}
                            <Button color="secondary" onClick={toggle2}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default App;