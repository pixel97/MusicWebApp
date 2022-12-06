import '../login/index.css';
import {Link} from "react-router-dom";
import RegisterComponent from '../register';

const LoginComponent = () => {
 return (
    
    <div className='wd-login-html'>
    <div class="wd-login-body">
    <section class="Form my-3 mx-5">
            <div class="container mb-5 wd-login-container">
                <div class="row g-0 wd-login-row">
                    <div class="col-lg-5 d-none d-lg-block wd-login-img">
                        <img src="/images/music-sym1.jpg" alt="" class="img-fluid wd-login-imgf"/>
                    </div>
                    <div class="col-lg-7 px-5 pt-5">
                        <form className='wd-login-form'>
                            <div class="row pt-3 pb-1 wd-login-row">
                                <h3>Log in</h3>
                            </div>
                            <div class="row wd-login-row">
                                <h6 class="lead">Welcome back! Please enter your details.</h6> 
                            </div>
                            <div class="row wd-login-row">
                                <div class="col-lg-12 pt-3">
                                    <label for="emailid" class="form-label">Email</label>
                                </div>
                                <div class="col-lg-12">
                                    <input type="email" placeholder="Email" class="form-control" id="emailid"/> 
                                </div>
                            </div>
                            <div class="row wd-login-row">
                                <div class="col-lg-12 pt-3">
                                    <label for="password" class="form-label">Password</label>
                                </div>
                                <div class="col-lg-12">
                                    <input type="password" placeholder="********" class="form-control" id="password"/> 
                                </div>
                            </div>
                            <div class="row wd-login-row">
                                <div class="col-lg-12 pt-4 pb-3 text-center">
                                    <button type="button" class="wd-login-button">Login</button> 
                                </div>
                            </div>
                            <div class="row wd-login-row">
                                <div class="col text-center pt-3">
                                    <p>Don't have an account? 
                                        <Link to="/bookmyconcert/register">
                                            &nbsp;Register
                                        </Link>
                                        </p>
                                </div>
                            </div>
                            
                        </form>

                    </div>
                </div>
            </div>
        </section>
     </div>
     </div>
 );
};

export default LoginComponent;