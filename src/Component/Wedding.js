import React, { useState } from 'react'
import p1 from './image/11_11zon.jpg'
import p2 from './image/1000_F_285163203_idtMHwkK28kxOGOLmDW1sFB206dlc40B.jpg'
import p3 from './image/174497831_475032563948448_1725355284291847079_n.avif'
import p4 from './image/348446020_757333689456617_7715297782752124736_n.heic_11zon.jpg'
import p5 from './image/1554703171wedding-decor.jpg'
import p6 from './image/Carnival-1.webp'
import p7 from './image/wedding-decoration.jpg'
import p8 from './image/unnamed.jpg'
import p9 from './image/Stylish-Floral-Wedding-Decoration.jpg'
import p10 from './image/mandap.jpg'
import p11 from './image/image1-4.jpg'
import p12 from './image/content.jpg'
const Wedding = () => {
  const [cost,setcost]=useState(1000)
  return (
    <div>
    <h1 style={{textAlign:"center",fontFamily:"'Comfortaa',display",margin:"20px"}}>Wedding Decoration</h1>
    <div style={{marginLeft:"70px"}}>
      <div>
      <span><img src={p1} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px",position:'relative'}}></img>
     </span>
      <span><img src={p2} alt=""  style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      <span ><img src={p3} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      <span ><img src={p4} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      </div>
      <div style={{display:'flex'}}>
        <div style={{marginLeft:"100px"}}><h3>Rs.{cost}</h3></div>
        <div style={{marginLeft:"200px"}}><h3>Rs.{cost}</h3></div>
        <div style={{marginLeft:"220px"}}><h3>Rs.{cost}</h3></div>
        <div style={{marginLeft:"200px"}}><h3>Rs.{cost}</h3></div>
      </div>
      <div>
        <button style={{marginLeft:"100px",padding:"10px",marginTop:"10px"}} class='btn btn-primary' onClick={()=>{setcost(1000)}}>Add to cart</button>
        <button style={{marginLeft:"200px",padding:"10px"}} class='btn btn-primary'>Add to cart</button>
        <button style={{marginLeft:"200px",padding:"10px"}} class='btn btn-primary'>Add to cart</button>
        <button style={{marginLeft:"200px",padding:"10px"}} class='btn btn-primary'>Add to cart</button>

      </div>
      <div>
      <span  ><img src={p5} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      <span  ><img src={p6} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      <span ><img src={p7} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      <span  ><img src={p8} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      </div>
      <div>
        <button style={{marginLeft:"100px",padding:"10px",marginTop:"10px"}} class='btn btn-primary'>Add to cart</button>
        <button style={{marginLeft:"200px",padding:"10px"}} class='btn btn-primary'>Add to cart</button>
        <button style={{marginLeft:"200px",padding:"10px"}} class='btn btn-primary'>Add to cart</button>
        <button style={{marginLeft:"200px",padding:"10px"}} class='btn btn-primary'>Add to cart</button>

      </div>
      <div>
      <span ><img src={p9} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      <span ><img src={p10} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      <span ><img src={p11} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      <span ><img src={p12} alt="" style={{width:"300px",height:"300px",paddingLeft:"20px",paddingTop:"20px"}}></img></span>
      </div>
      <div>
      <button style={{marginLeft:"100px",padding:"10px",marginTop:"10px"}} class='btn btn-primary'>Add to cart</button>
        <button style={{marginLeft:"200px",padding:"10px"}} class='btn btn-primary'>Add to cart</button>
        <button style={{marginLeft:"200px",padding:"10px"}} class='btn btn-primary'>Add to cart</button>
        <button style={{marginLeft:"200px",padding:"10px"}} class='btn btn-primary'>Add to cart</button>

      </div>
      <div style={{marginLeft:"500px",marginTop:"50px"}}><h1>Total Cost</h1></div>

    </div>
    </div>
  )
}

export default Wedding
