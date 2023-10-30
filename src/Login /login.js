import './login.css';
import { Link, Route } from 'react-router-dom';
import GetStarted from './loginscreen';
import { useNavigate } from 'react-router-dom';


function Login(){
    const navigate = useNavigate();
    return (
        <div>

        <div className="container">
        <div className="d-md-flex align-items-center justify-content-between">

        <div className="box-1">
            <img src="https://i.pinimg.com/564x/16/d4/f6/16d4f69d3d8b5cd5c8cad6811369a257.jpg"/>
        </div>

            <div class=" box-2 d-flex flex-column h-100">
                <div className="mt-5">
                    <p className="wd-create-account"><h1>FoodIt.</h1></p>
                    <p className="text-muted"><h4>Life is too short to eat boring food !</h4></p>
                    <div className="d-flex flex-column ">
                        
                        <div className="">
                            <p className="text-muted mt-3">Already have an account?</p>

<div>       

         <div className="btn btn-primary"  onClick={() => navigate('/Login/loginscreen')}>Get Started</div>


</div>
<p className="text-muted mt-5">Don't have an account?</p>

                            <div className="btn wd-signup">Signup</div>

                        </div>
                    </div>
                </div>
                <div >
                    <p className="text-muted mt-3">By registering, you agree with our </p><p className='wd-tnc'>Terms & Conditions.
                    </p>
                </div>
            </div>






        </div>
        </div>




        </div>

    );
}

export default Login