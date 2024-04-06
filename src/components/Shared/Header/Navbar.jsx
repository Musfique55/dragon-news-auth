import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import defaultUser from '../../../assets/user.png'

const Navbar = () => {
    const {user,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <div className='px-20'>
            <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/About">About</NavLink>
                                <NavLink to="/Carrer">Career</NavLink>
                            </ul>
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 flex gap-5 text-[rgb(112,111,111)] text-lg">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/About">About</NavLink>
                                <NavLink to="/Carrer">Career</NavLink>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <img src={defaultUser} alt="" className='h-[41px] w-[41px] mr-3' />
                            {
                                user ? 
                                 <button onClick={logout} className="bg-[rgb(64,63,63)] px-12 py-4 text-white">Logout</button> : 
                                 <button onClick={handleLogin} className="bg-[rgb(64,63,63)] px-12 py-4 text-white">Login</button>
                            }
                        </div>
            </div>
        </div>
    );
};

export default Navbar;