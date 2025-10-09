
import { FaGithub } from "react-icons/fa";
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    return (
        <div className='navbar  bg-white shadow-sm w-full'>
            <div className="navbar-start ">

                <Link className=" flex justify-center items-center gap-2   text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold"><img className='w-10 h-10' src={Logo} alt="Logo" />Hero.IO</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal space-x-3">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#632EE3] underline font-semibold" : "text-black"}><li>Home</li></NavLink>
                    <NavLink to={'/apps'} className={({ isActive }) => isActive ? "text-[#632EE3] underline font-semibold" : "text-black"}><li>App</li></NavLink>
                    <NavLink to={'/installation'} className={({ isActive }) => isActive ? "text-[#632EE3] underline font-semibold" : "text-black"}><li>Installation</li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'https://github.com/iam-Sourov'} className="btn text-white border-none bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><FaGithub></FaGithub> Contribute</Link>
                <div className="dropdown dropdown-end md:hidden  p-1 m-1">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-black bg-transparent/10 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink className='p-1 shadow-sm m-1 rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  hover:text-white' to={'/'} > <li>Home</li></NavLink>
                        <NavLink className='p-1 shadow-sm m-1 rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  hover:text-white' to={'/apps'}><li>App</li></NavLink>
                        <NavLink className='p-1 shadow-sm m-1 rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  hover:text-white' to={'/installation'}><li>Installation</li></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;