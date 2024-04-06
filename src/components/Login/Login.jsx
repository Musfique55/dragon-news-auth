import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(loginUser);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email,password)
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
                    <h1 className="text-4xl font-semibold text-center mb-12">Login Yor Account</h1>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[rgb(64,63,63)]">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-[rgb(243,243,243)]" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[rgb(64,63,63)]">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Ente your password" className="input input-bordered bg-[rgb(243,243,243)]" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[rgb(64,63,63)] text-white w-full">Login</button>
                        </div>
                    </form>
                    <p className="text-[rgb(112,111,111)] text-base font-semibold text-center mt-3">
                    Dont’t Have An Account ? <Link to='/register' className="text-[rgb(255,140,71)]">Register</Link> 
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;