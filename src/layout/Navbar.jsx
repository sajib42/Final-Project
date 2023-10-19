
import { Link } from 'react-router-dom';
import logo from "./.././img/LOGo.png"
import logo2 from "./.././img/LOGO2.png"

import { useContext } from 'react';
import { userContext } from './../Firebase/LoginContext';

const Navbar = () => {
    const { user, logOut } = useContext(userContext)
    const logOutBtn = () => logOut();
    return (
        <div>
            <nav >
                <div className="navbar bg-base-100 flex  ">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/productAdd"}>Add Product</Link></li>
                                <li><Link to={"/cart"}>Cart</Link></li>
                                <li><Link to={"/about"}>Feedback</Link></li>
                                <li><Link to={"/blog"}>Blog</Link></li>
                            </ul>
                        </div>
                        {/* <a className="btn btn-ghost normal-case text-xl">Z-Gear</a> */}
                        <div>
                            <img className='w-28 hidden md:block   ' src={logo} alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/productAdd"}> Product +</Link></li>
                            <li><Link to={"/cart"}>My Cart</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={"/blog"}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        {
                            user ?
                                <>
                                    <div className='flex  items-center gap-2 ' >
                                        <div className='text-end'>
                                            <p className='font-medium '>{user?.displayName}</p>
                                            <p className='text-xs hidden md:block  '>{user.email}</p>
                                        </div>
                                        <div className='w-10 '>
                                            <img className="w-full rounded-full" src={user.photoURL} alt="" />

                                        </div>
                                        <div>
                                            <Link onClick={logOutBtn} to={""} className='btn  bg-[#111827] text-white' >LogOut</Link>
                                        </div>

                                    </div>
                                </>
                                :
                                <>
                                    <div className='flex items-center gap-2'>
                                        <Link to={"/login"} className='btn  bg-[#111827] text-white' >LogIn</Link>
                                    </div>
                                </>
                        }
                        {/* <Link to={'/login'}> <a className="btn btm-nav-sm">Login</a></Link> */}
                    </div>

                </div>

            </nav>

        </div>
    );
};

export default Navbar;