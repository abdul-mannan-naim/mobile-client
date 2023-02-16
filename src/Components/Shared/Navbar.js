import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)
    let { pathname } = useLocation()
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem("accessToken")
    }


    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between border-2 border-y-rose-500 shadow-xl text-rose-300 font-bold  ">
                <div className="navbar-start  ">
                    <div className="dropdown">
                        {pathname.includes('dashboard') &&
                            <label for="dashboard-control"
                                class="btn btn-circle text-primary hover:bg-white bg-white border-1 drawer-button lg:hidden"> ❯
                            </label>}
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/products'> Products </NavLink></li>
                            <li><NavLink to='/answers'> Answers   </NavLink></li>
                            {
                                user && <li><NavLink to="/dashboard ">  Dashboard  </NavLink></li>
                            }

                            {user ? <> <button onClick={logOut} > Sign Out </button> </> : <><li><NavLink to="/signup ">  Sign Up  </NavLink></li>
                                <li><NavLink to="/login ">  Login </NavLink></li></>}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                         <p className='bg-primary text-white p-2 rounded-xl font-bold '>Solis</p>  </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/products'> Products </NavLink></li>
                        <li><NavLink to='/answers'> Answers   </NavLink></li>
                        {
                            user && <li><NavLink to="/dashboard ">  Dashboard  </NavLink></li>
                        }
                        {user ? <> <button onClick={logOut} > Sign Out </button> </> : <><li><NavLink to="/signup ">  Sign Up  </NavLink></li>
                            <li><NavLink to="/login ">  Login </NavLink></li></>}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;