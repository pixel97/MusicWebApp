import '../register/index.css';
import {Link} from "react-router-dom";

const RegisterComponent = () => {
 return (
    <div class="wd-register-html">
    <div class="wd-register-body mt-3">
    <section class="Form my-5 mx-5">
            <div class="container mb-5 wd-register-container">
                <div class="row g-0 wd-register-row">
                    <div class="col-lg-5 d-none d-lg-block wd-register-img">
                        <img src="/images/music-sym1.jpg" alt="" class="img-fluid wd-register-imgf"/>
                    </div>
                    <div class="col-lg-7 px-3 pt-3">
                        <form class="wd-register-form">
                            <div class="row pt-3 pb-1 wd-register-row">
                                <h3>Sign Up</h3>
                            </div>
                            <div class="row wd-register-row">
                                <h6 class="lead">Let's get started!</h6> 
                            </div>
                            <div class="row wd-register-row">
                                <div class="col-lg-6 pt-3">
                                    <label for="firstname" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="firstname"/>
                                </div>
                                <div class="col-lg-6 pt-3">
                                    <label for="lastname" class="form-label">Last Name</label> 
                                    <input type="text" class="form-control" id="lastname"/>
                                </div>
                            </div>
                            <div class="row wd-register-row">
                                <div class="col-lg-12 pt-2">
                                    <label for="inputState" class="form-label">Role</label>
                                    <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>User</option>
                                    <option>Admin</option>
                                    <option>Dealer</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row wd-register-row">
                                <div class="col-lg-12 pt-2">
                                    <label for="emailid" class="form-label">Email</label>
                                </div>
                                <div class="col-lg-12">
                                    <input type="email" class="form-control" id="emailid"/> 
                                </div>
                            </div>
                            <div class="row wd-register-row">
                                <div class="col-lg-12 pt-2">
                                    <label for="password" class="form-label">Password</label>
                                </div>
                                <div class="col-lg-12">
                                    <input type="password" class="form-control" id="password"/> 
                                </div>
                            </div>
                            <div class="row wd-register-row">
                                <div class="col-lg-12 pt-4 pb-3 text-center">
                                    <button type="button" class="wd-register-button">Register</button> 
                                </div>
                            </div>
                            <div class="row wd-register-row">
                                <div class="col text-center pt-2">
                                    <p>Already have an account? 
                                        <Link to={'/login'}>
                                            Log in
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

export default RegisterComponent;