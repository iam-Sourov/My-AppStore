import { FaGithub } from "react-icons/fa";
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    return (
        <div className='navbar bg-base-100 shadow-md w-full px-4 sm:px-6 lg:px-8'>
            <div className="navbar-start ">
                <Link to="/" className="flex justify-center items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    <img className='w-10 h-10' src={Logo} alt="Logo" />
                    <span>Hero.IO</span>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal space-x-7 text-lg">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "text-primary underline font-semibold" : "text-content-primary"}><li>Home</li></NavLink>
                    <NavLink to={'/apps'} className={({ isActive }) => isActive ? "text-primary underline font-semibold" : "text-content-primary"}><li>Apps</li></NavLink>
                    <NavLink to={'/installation'} className={({ isActive }) => isActive ? "text-primary underline font-semibold" : "text-content-primary"}><li>Installation</li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'https://github.com/iam-Sourov'} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white hidden sm:flex"><FaGithub /> Contribute</Link>
                <div className="dropdown dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink></li>
                        <li><NavLink to={'/apps'} className={({ isActive }) => isActive ? "text-primary" : ""}>Apps</NavLink></li>
                        <li><NavLink to={'/installation'} className={({ isActive }) => isActive ? "text-primary" : ""}>Installation</NavLink></li>
                        <li className="sm:hidden"><Link to={'https://github.com/iam-Sourov'} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"><FaGithub /> Contribute</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;