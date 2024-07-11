import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import moment from 'moment'
const Bookingscreen = () => {
    // const [room,setRoom]=useState({"name":""})
    const {roomid}=useParams()
    const {fromDate}=useParams()
    // const {toDate}=useParams()
    const {toDate}=useParams()
    // const [rid,setid]=useState()
    const firstdate = moment(fromDate,'LL')
    const lastdate = moment(toDate,'LL')
    const totaldays = moment.duration(lastdate.diff(firstdate)).asDays()+1
    const [y,sety]=useState([])
    const [status,setStatus]=useState("Pay Now")
    // const [Cancel,setCancel]=useState('')
    // const [data,setData]=useState({"name":''})
    // const totalDate=moment.duration(toDate.diff(fromDate))
    useEffect(()=>{
       fetch("http://localhost:5000/api/rooms/getallrooms", {
        method:'GET'
      }).then((res)=>{return res.json()}).then((x)=>{
        console.log(x)
        console.log({totaldays})
        sety(x.data)
        console.log("fromdate"+{fromDate})
        // console.log(props.fromDate)
        // setid(x._id)
      })
     },[])
    //  const addRoom=async(roomid)=>{
    //   const response=await fetch("http://localhost:5000/api/rooms/bookings",{
    //     method:'POST',
    //     headers:{
    //       'Content-Type':'application/json',
    //       // "auth-token":localStorage.getItem('token')
    //     },
    //    body: JSON.stringify({roomid})
    //   });
    
    //  const note=await response.json();
    //   console.log(note)
      // console.log("Adding new note");
    // const note=[ {
    //   "_id": "64dba219c5fb3b3d36aae58e",
    //   "user": "64d87d915c81c32239020ded",
    //   "title":title,
    //   "description": description,
    //   "tag": tag,
    //   "__v": 0
    // }]
    // setNotes(notes.concat(note))
    // const note=await response.json();
    // console.log(note)
    // }
    const addNote=async(roomid,fromDate,toDate,status)=>{
      const response=await fetch(`http://localhost:5000/api/rooms/bookings`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          "auth-token":localStorage.getItem('token')
        },
       body: JSON.stringify({roomid,fromDate,toDate,status})
      });
    
     const note=await response.json();
     console.log("note is"+note)
    }
     const handleClick=()=>{
      setStatus("Booked");
     console.log(roomid);
     addNote(roomid,fromDate,toDate,status)
    }
    
  
  return (
    <div>
     {
     y.filter((i)=>{
      return i._id.match(roomid)
     }).map((e)=>{
        return(
            <div style={{boxShadow:"2px 2px 5px 5px #F6F1F0",height:"470px",marginTop:"20px",marginLeft:"40px",marginRight:"40px"}}>
            <div style={{display:'flex',boxShadow:'1px 1px 1px 1px #F6F1F0'}}>
            <div style={{fontSize:"25px",marginLeft:"10px",fontFamily:"serif"}}>{e._id===roomid? e.name:""}</div>
            <div style={{fontSize:"25px",marginLeft:"900px",fontFamily:"serif"}}>Booking Details</div>
            </div>
            <div style={{display:'flex'}}>
            <div><img src={e.imageurl[0]} style={{width:"600px",height:"400px",marginLeft:"10px",boxShadow:'1px 1px 2px 2px #F6F1F0',borderRadius:"5px"}}></img></div>
            <div style={{marginLeft:"100px",fontSize:"20px",marginTop:"20px"}}>
            <div style={{borderBottom:"1px solid #F6F1F0", marginLeft:"270px"}}>
                <div style={{padding:"10px"}}><b>Name: </b>{e.name}</div>
                <div style={{padding:"10px"}}><b>From Date: </b>{fromDate}</div>
                <div style={{padding:"10px"}}><b>To Date: </b>{toDate}</div>
                <div style={{marginLeft:"10px",marginTop:"10px",fontSize:"25px"}}><b>Amount</b></div>
                </div>
                <div>
                <div style={{marginLeft:"270px",padding:"10px"}}><b>Total Days: </b>{totaldays} Days</div>
                <div style={{marginLeft:"270px",padding:"10px"}}><b>Rent Per Day:</b> Rs.{e.rentperday}</div>
                <div style={{marginLeft:"270px",padding:"10px"}}><b>Total Amount:</b> Rs.{e.rentperday*totaldays}
                </div>
                <div style={{display:'flex'}}>
                <button class='btn btn-dark' style={{marginLeft:"300px",marginTop:"10px"}} onClick={handleClick}>{status}</button>
                </div>
             </div>
            </div>
            {/* <u style={{border:"2px solid grey"}}></u> */}
             
            </div>
            </div>
        )
     })
     }
        

    </div>
  )
}

export default Bookingscreen
