import React, { useEffect, useRef, useState } from 'react'
import Hotel1 from './Hotel1';
import moment from 'moment';
import 'antd/dist/reset.css'
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const Hotel = () => {
    // const [text,setText]=useState();
    
    const [data,setdata]=useState([]);
    const [fromDate,setfromdate]=useState();
    const [toDate,settoDate]=useState();
    const [note,setNote]=useState({"name":'',"imageurl":'http://pix1.agoda.net/hotelimages/1/-1/d821f80943f96ebda33f5a019fa94df4.jpg?s=312x',"description":"",})
    const updatenote=(x)=>{
      ref.current.click();
      setNote({name:x.name,imageurl:x.imageurl,description:x.description})
      // setNote({id:currentnote._id,etitle:currentnote.title, edescription:currentnote.description, etag:currentnote.tag})
  }
  const ref=useRef(null);
  // const refclose=useRef(null);
    // const getdata=async()=>{
    //   const response=await fetch('http//localhost:5000/api/rooms/getallrooms',{
    //     method:'GET',
    //     headers:{
    //       'Content-Type':'application/json'
    //     },
    //   });
    //   const json=await response.json();
    //   setdata(json.name);
    // }
useEffect(()=>{
  fetch("http://localhost:5000/api/rooms/getallrooms",{
    method:'GET'
  }).then((res)=>{return res.json()}).then((x)=>{
    console.log(x)
    setdata(x.data)
  })
  
 },[])
  const filterByDate=(dates)=>{
    console.log(dates[0])
    console.log(dates[0].$d);
    console.log(dates[1])
    console.log(dates[1].$d);
    console.log()
    setfromdate(moment(dates[0].$d).format('LL'));
    settoDate(moment(dates[1].$d).format('LL'));
    // console.log(moment(dates[1]));

  }
  return (
    <div style={{marginTop:"20px"}} >
    <h1 style={{textAlign:"center",fontFamily:"'Comfortaa',display"}}>Hotel Rooms</h1>
    {/* <h1>{data}</h1> */}
    {/* <input>Search</input> */}
    <div class='row mt-3'> 
    <div class='col-md-3' style={{marginLeft:"530px"}}><RangePicker format='DD-MM-YYYY' onChange={filterByDate}/></div>
    </div>
    <button type="button" ref={ref} class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{display:'none'}}>
  Load Detail
</button>
 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" style={{marginLeft:"250px"}}>
    <div class="modal-content" style={{width:"800px"}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{note.name}</h5>
        {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
      <div class="modal-body">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={note.imageurl[0]} alt="First slide" style={{width:"750px",height:"400px",marginLeft:"5px",borderRadius:"10px"}}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={note.imageurl[1]} alt="Second slide"style={{width:"750px",height:"400px",marginLeft:"5px",borderRadius:"10px"}}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={note.imageurl[2]} alt="Third slide" style={{width:"750px",height:"400px",marginLeft:"5px",borderRadius:"10px"}}/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        {/* <img src={note.imageurl[0]} alt='' ></img> */}
        <div style={{fontSize:"15px"}}>{note.description}</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
    <h1>{data?.map(i=>{
      return (
        <div>
        <Hotel1 key={note._id} i={i} updatenote={updatenote} fromDate={fromDate} toDate={toDate} />
        </div>
      )
    })}</h1>
    </div>
  )
}

export default Hotel
