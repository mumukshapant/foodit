import './login.css'
import {FaUserCircle} from "react-icons/fa";
function GetStarted(){
return (

<div className='background-image container'  >
  
  <div className='content'>
  <h1 className='h1-login'>Login</h1>
  

  <div className='form-group login'>
  <FaUserCircle className='wd-icon'/>
  <input type="email" className="form-control" placeholder="Enter registered username" />

  
  <div className='btn btn-primary username mt-4 mb-3'>Submit </div>

<hr/> 

<div className='btn wd-signup mt-3'>New to FoodIt? Join Now
</div>


  </div>
  
  </div>

</div>

);
}

export default GetStarted; 