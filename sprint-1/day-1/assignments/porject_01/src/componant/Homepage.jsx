import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import Ticket from './Ticket';
import { addTodo } from '../Redux/action';
const styles = {
    container: {
      display: "flex"
    },
    box: {
      flex: "0 1 33%",
      textAlign: "center",
      borderRight: "1px solid #ccc",
      label: {
        fontWeight: 600
      }
    }
  };


function Homepage() {
    const [ticketData,setTicketData]=useState("")
    const dispatch = useDispatch();
    
    const handalAdd=()=>{
        const newData={disc: ticketData,
        "status": false}

        dispatch(addTodo(newData))
        setTicketData("")
    }
  return (
   
    <div>
   
    <input 
      type="text"
      style={{ borderRadius: "3px" }}
      value={ticketData}
      onChange={(e)=>setTicketData(e.target.value)}
    />
    <button style={{ cursor: "pointer" }} onClick={handalAdd}>
      ADD
    </button>
    <br />
    <br />
    <div style={styles.container}>
      <div style={styles.box}>
        <label style={styles.box.label}>IN-PROGRESS</label>
        {/* * show Todo tickets below */}
        <Ticket/>
      </div> 
      <div style={styles.box}>
        <label style={styles.box.label}>DONE</label>
        {/** show Done tickets below */}
      </div>
      <div style={styles.box}>
        <label style={styles.box.label}>CLOSE</label>
        {/** show Close tickets below */}
      </div>
    </div>
  </div>
  )
}

export default Homepage