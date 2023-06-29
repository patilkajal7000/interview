import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const sty={
    display: "flex",
    textAlign: "center",
    
    gap:"20px"
    
  }
  return (
    <div style={sty}>
      
      <Link to={"/"}>Home</Link>
      <Link to={"/ticket/:ticketId"}>Ticket</Link>
      
    </div>
  );
};

