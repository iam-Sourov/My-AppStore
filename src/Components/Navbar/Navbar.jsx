
import { FaGithub } from "react-icons/fa";
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className='navbar shadow-sm w-full'>
            <div className="navbar-start ">
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/apps'}><li>App</li></NavLink>
                        <NavLink to={'/installation'}><li>Installation</li></NavLink>

                    </ul>
                </div>
                <Link className=" flex justify-center items-center gap-2   text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "><img className='w-10 h-10' src={Logo} alt="Logo" />Hero.IO</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal space-x-3">
                    <NavLink to={'/'}><li>Home</li></NavLink>
                    <NavLink to={'/apps'}><li>App</li></NavLink>
                    <NavLink to={'/installation'}><li>Installation</li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><FaGithub></FaGithub>Contribute</button>
            </div>
        </div>
    );
};

export default Navbar;