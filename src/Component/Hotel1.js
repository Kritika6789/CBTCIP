import React  from 'react'
import {
  Link
} from "react-router-dom";
// import Bookingscreen from './Bookingscreen';
// import Bookingscreen from './Bookingscreen';
// import Bookingscreen from './Bookingscreen';

const Hotel1 = (props) => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const [text,setText]=useState()
  //  const handleClick=()=>{
  //   console.log(props.i.name)
  //   setText(props.i.name)
  //  }
 
  return (
    <div>
      <div style={{boxShadow:"2px 2px 5px 5px #F6F1F0",height:"215px",width:"900px",marginLeft:"150px",marginRight:"120px",marginBottom:"15px",marginTop:"15px",boxShadow:"2px 2px 2px 2px #D3D3D3",borderRadius:"5px"}}>
  <div className='picimage' style={{display:'flex'}}>
    <div className='pic'><img src={props.i.imageurl[0]} alt='' style={{width:"200px",height:"180px",marginLeft:"20px"}}></img></div>
    <div className='pic' style={{marginLeft:"20px",marginTop:"20px"}}>
    <h4 style={{fontFamily:"'Comfortaa',display"}}>{props.i.name}</h4>
    <p style={{fontSize:"16px"}}>MaxCount : {props.i.maxCount}</p>
    <p style={{fontSize:"16px"}}>Contact No : {props.i.phoneNumber}</p>

    <p style={{fontSize:"16px"}}>Type : {props.i.type} </p>
    <span style={{display:'flex'}}>
    
    <span><button class='btn btn-primary' style={{marginLeft:"400px",marginBottom:"90px"}} onClick={()=>{props.updatenote(props.i)}}>View Details</button></span>
    <Link to={`/room/${props.i._id}/${props.fromDate}/${props.toDate}`}><span><button class='btn btn-primary' style={{marginBottom:"50px",marginLeft:"10px"}}>Book Now</button></span></Link>
    </span>
    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:"480px",marginBottom:"30px"}}>
  View Details
</button>
 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{props.i.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img src={props.i.imageurl} alt=''></img>
        <div style={{fontSize:"15px"}}>{props.i.description}</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
    </div>
  </div>
 
</div>
    </div>
  )
}

export default Hotel1
