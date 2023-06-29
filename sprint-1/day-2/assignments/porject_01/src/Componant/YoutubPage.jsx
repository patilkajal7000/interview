import React from 'react'

function YoutubPage({id,title,thumbnailUrl,views,videoUrl,description,handelLink}) {
  return (
    <div style={{width:"90%",border: "2px solid black", display: "flex", gap: "20px", margin: "auto" }} onClick={()=>handelLink(id)}>
      
      <div style={{width:"60%"}}>
        <img src={thumbnailUrl} alt="" style={{width:"100%",padding:"10px"}}/>
        <p>Views:{views}</p>
      </div>
      <div style={{width:"40%"}}>
        
        <h5>{title}</h5>
        
      </div>
    </div>
  )
}

export default YoutubPage