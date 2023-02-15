import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllData, removeOneData, showAllDetails } from '../../store/userSlice';

function DeleteModal({show,setShow}) {
  const dispatch=useDispatch()
  const {id} = useSelector((state) => state.users.userData.showDetails);
  console.log(id,"ididid")
   const deleteData=()=>{
    if(id!=0){
      dispatch(removeOneData(id))
    }else{
      dispatch(removeAllData())
    }
    InitialState(0, "none")
   }

    const InitialState = (id, type) => {
    const data = { id: id, type: type };
    dispatch(showAllDetails(data));
    setShow(false)
  };

  return (
    <>
      <Modal show={show} onHide={()=>setShow(false)} animation={true}  centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Are ! you sure <p style={{color:"red"}} >Delete</p> this data</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteData}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeleteModal