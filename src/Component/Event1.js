import React from 'react'
import p1 from './image/hall.jpg'
import p2 from './image/hotel2.jpg'
import p3 from './image/palace.jpg'
import p4 from './image/card.jpg'
// import p5 from './image/wedding.jpg'
import p7 from './image/haldi2.jpg'
import p6 from './image/haldi.webp'
import { useState } from 'react'
import {
  Link
} from "react-router-dom";
const Event1 = () => {
 
  // const [border1,setborder1]=useState({borderStyle: '',
  //   borderWidth: ''})
    const [border2,setborder2]=useState({borderStyle: '',
      borderWidth: '',borderColor:'',transform:''})
      const [border3,setborder3]=useState({borderStyle: '',
        borderWidth: '',borderColor:'',transform:''})
        const [border4,setborder4]=useState({borderStyle: '',
          borderWidth: '',borderColor:'',transform:''})
          // const [border5,setborder5]=useState({borderStyle: '',
          //   borderWidth: ''})
            const [border6,setborder6]=useState({borderStyle: '',
              borderWidth: '',borderColor:'',transform:''})

        // const handleborder1=()=>{
        //   setborder1({borderStyle: 'solid',
        //     borderWidth: '5px'})
        // }
        // const leaveborder1=()=>{
        //   setborder1({borderStyle: '',
        //     borderWidth:''})
        // }
        const handleborder2=()=>{
          setborder2({borderStyle: 'solid',
            borderWidth: '5px',borderColor:'white',transform:'scale(1.12)'})
        }
        const leaveborder2=()=>{
          setborder2({borderStyle: '',
            borderWidth:'',borderColor:'',transform:''})
        } 
        const handleborder3=()=>{
          setborder3({borderStyle: 'solid',
            borderWidth: '5px',borderColor:'white',transform:'scale(1.12)'})
        }
        const leaveborder3=()=>{
          setborder3({borderStyle: '',
            borderWidth:'',borderColor:'',transform:''})
        } 
        const handleborder4=()=>{
          setborder4({borderStyle: 'solid',
            borderWidth: '5px',borderColor:'white',transform:'scale(1.12)'})
        }
        const leaveborder4=()=>{
          setborder4({borderStyle: '',
            borderWidth:'',borderColor:'',transform:''})
        } 
        // const handleborder5=()=>{
        //   setborder5({borderStyle: 'solid',
        //     borderWidth: '5px'})
        // }
        // const leaveborder5=()=>{
        //   setborder5({borderStyle: '',
        //     borderWidth:''})
        // }
        const handleborder6=()=>{
          setborder6({borderStyle: 'solid',
            borderWidth: '5px',borderColor:'white',transform:'scale(1.12)'})
        }
        const leaveborder6=()=>{
          setborder6({borderStyle: '',
            borderWidth:'',borderColor:'',transform:''})
        }
  return (
    
    <div>
     <div style={{position:'relative'}}>
      <img src={p1} alt="" style={{height:"500px", width:"1500px",opacity:0.7,margin:"0px"}}/>
     <div><h2 style={{position:'absolute',top:"150px",left:"250px",fontSize:"100px",textAlign:"center",justifyContent:"center",color:'#850547', fontFamily: `'Brush Script MT', cursive`}}>Manage Your Event Online</h2></div>
     <button type="button" class="btn btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off" style={{position:'absolute',top:"300px",left:"600px",paddingLeft:"30px",paddingRight:"30px",paddingTop:"20px",paddingBottom:"20px",borderRadius:"30px",fontFamily:'serif',color:"black",fontWeight:'bolder',fontSize:"20px"}}>
CONTACT US
</button>
     </div>
     <div style={{fontFamily:"'Comfortaa',display",fontSize:"30px",margin:"90px"}}> Eventer is the ideal partner for planning, installing, and servicing all fixed audio-visual, multimedia, and lighting installations. We are the official distributor and trusted partner of the most modern AV solutions and products. We operate in Europe and the Middle East.</div>
     <div style={{display:'flex',margin:"50px"}}>
  <div><img src ={p7} alt="" style={{width:"300px",height:"300px",marginLeft:"20px"}}></img></div>
  <div style={{fontFamily:"'Comfortaa',display",fontSize:"25px",padding:"20px"}}>Event management services encompass a wide range of activities and responsibilities to ensure the successful planning, organization, and execution of events. These services can be tailored for various types of events, such as corporate meetings, conferences, trade shows, weddings, parties, and other social or cultural gatherings. Here are the key components of event management services:</div>
</div>
<div style={{backgroundColor:"#1A1951",height:"500px"}}>
 <h1 style={{fontFamily:"'Comfortaa',display",paddingLeft:"20px",textAlign:"center",textDecorationLine:'underline',textDecorationColor:'red',textUnderlineOffset:'20px',padding:'20px',textSizeAdjust:'10px',color:'white'}}>Find Out What We Can Create Together</h1>
    <div style={{marginTop:"40px"}}>
     <span style={{padding:"0px"}} className='pic'><Link to='/getdata' style={{padding:"0px"}}><img src={p6} alt=""  style={{width:"300px",height:"300px",margin:"0px",marginLeft:"20px",borderStyle:border6.borderStyle,borderWidth:border6.borderWidth,borderColor:border6.borderColor,transform:border6.transform,display:'inline-block',transition:'0.3s all ease-in-out'}} onMouseEnter={handleborder6} onMouseLeave={leaveborder6}/></Link></span>
      {/* <span style={{padding:"0px"}} className='pic'><img src={p1} alt=""  style={{width:"300px",height:"300px",borderStyle:border1.borderStyle,borderWidth:border1.borderWidth}} onMouseEnter={handleborder1} onMouseLeave={leaveborder1}/></span> */}
   <span style={{padding:"0px"}} className='pic'><Link to='/rooms'><img src={p2} alt=""  style={{width:"330px",height:"300px",borderStyle:border2.borderStyle,borderWidth:border2.borderWidth,borderColor:border2.borderColor,transition:'0.3s all ease-in-out',transform:border2.transform,margin:"0px"}} onMouseEnter={handleborder2} onMouseLeave={leaveborder2}/></Link></span>
      <span style={{padding:"0px"}} className='pic'><img src={p3} alt="" style={{width:"310px",height:"300px",borderStyle:border3.borderStyle,borderWidth:border3.borderWidth,borderColor:border3.borderColor,transition:'0.3s all ease-in-out',transform:border3.transform,margin:"0px"}} onMouseEnter={handleborder3} onMouseLeave={leaveborder3}/></span>
      <span style={{padding:"0px"}} className='pic'><img src={p4} alt=""  style={{width:"330px",height:"300px",borderStyle:border4.borderStyle,borderWidth:border4.borderWidth,borderColor:border4.borderColor,transition:'0.3s all ease-in-out',transform:border4.transform,margin:"0px"}} onMouseEnter={handleborder4} onMouseLeave={leaveborder4}/></span>
      {/* <span style={{padding:"0px"}} className='pic'><img src={p5} alt=""  style={{width:"300px",height:"300px",borderStyle:border5.borderStyle,borderWidth:border5.borderWidth}} onMouseEnter={handleborder5} onMouseLeave={leaveborder5}/></span> */}
      </div>    
</div>
 <div style={{fontFamily:"'Comfortaa',display",paddingLeft:"20px",textAlign:"center",fontSize:"40px",marginTop:"40px"}}>Fill out the form to get your quote started.</div>
 <div style={{textAlign:'center',fontFamily:"'Comfortaa',display",fontSize:"20px",margin:"20px",justifyContent:'center'}}>This form is designed to help us understand your needs and begin creating a quote for you.

Don’t worry if you don’t have all the information right now. Just provide as much detail as you can. Keep in mind that new information you provide later might affect pricing, particularly for services. Once we receive your responses, we’ll start on your quote and contact you if we need any additional details.

We look forward to working with you!</div>
<Link  to='/signin'><button type="button" class="btn btn-primary" style={{marginLeft:"500px"}}>Sign Up to manage your event online</button></Link>
  </div>
  )
}

export default Event1
