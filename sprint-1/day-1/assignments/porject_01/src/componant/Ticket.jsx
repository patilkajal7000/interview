import React from 'react'
const styles = {
    ticket: {
      border: "1px solid #ccc",
      borderRadius: "3px",
      minHeight: "7em",
      padding: "0.5em",
      margin: "0.5em",
      fontWeight: "normal",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  };
function Ticket() {
    const desc="kuhiendhkehifkewnhfkwhfhweihih"
  return (
    // <div>Ticket</div>
    <div style={styles.ticket}>
    {/* Ticket description */}
    <div>{desc}</div>
    {/* Ticket actions [Done/Not Fix/Close]. Modify to display them properly */}
    <div>
      <button>Done</button>
      <button>Not Fix</button>
      <button>Close</button>
    </div>
  </div>
  )
}

export default Ticket