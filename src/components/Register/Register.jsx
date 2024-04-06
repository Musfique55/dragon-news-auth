import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../Shared/Header/Navbar";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        // const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
        // console.log(name,url);      
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero-content flex-col">
                <div className=" shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 py-10 px-20">
                <h1 className="text-4xl font-semibold text-center mb-12">Register Your Account</h1>
                <hr />
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-xl text-[rgb(64,63,63)]">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[rgb(243,243,243)]" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-xl text-[rgb(64,63,63)]">Photo Url</span>
                    </label>
                    <input type="text" name="url" placeholder="Enter your url" className="input input-bordered bg-[rgb(243,243,243)]" required />
                    </div>
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
                    </div>
                    <div className="mt-5">
                        <input className="mr-2" type="checkbox" name="agreement" id="agreement"/>
                        <label htmlFor="agreement">Accept terms & conditions</label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-[rgb(64,63,63)] text-white w-full">Register</button>
                    </div>
                </form>
                <p className="text-[rgb(112,111,111)] text-base font-semibold text-center mt-3">
                Already Have An Account ? <Link to='/login' className="text-[rgb(255,140,71)]">Login</Link> 
                </p>
                </div>
            </div>
        </div>
    );
};

export default Register;