import React, { useEffect, useState } from 'react'
import axios from "axios"
import ReactPlayer from 'react-player'
import YoutubPage from './YoutubPage'

// Render a YouTube video player

const YouTube = () => {
  
  const[data,setData]=useState([])
  const[link,setLink]=useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
//   const[load,setLoad]=useState(false)


  useEffect(()=>{
   axios.get("http://localhost:4500/link")
   .then((res)=>setData(res.data))

  },[])
  const handelLink=(id)=>{
    const result = data.filter((word)=>{
        if(id===word.id){
            // setLoad(true)
            return word
        }
    }); 
    console.log(result[0].videoUrl)
    setLink(result[0].videoUrl)
    
  }

  console.log(link)
    return (
        <><h1>Well-Come To MyYouTube</h1>
            <div style={{ width: "90%", display: "flex", gap: "10px", margin: "auto" }}>

                <div style={{ width: "60%", height: "500px",
                 border: "2px solid black" ,
                 padding:"20px"
            
                }}><ReactPlayer url={link}
                    playing={true}
                    controls={true}
                    width='100%'
                    height='100%'
                    volume={1}
                /></div>

                <div style={{ width: "40%", height: "500px", 
                // border: "2px solid blue"
                 }}>
                    {data?.map((res)=><YoutubPage handelLink={handelLink} {...res}/>)}
                </div>
            </div>
        </>
    )
}

export default YouTube