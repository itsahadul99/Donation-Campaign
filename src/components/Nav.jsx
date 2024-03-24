import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
const Nav = () => {
    return (
        <div className='border-b-2 shadow-lg'>
            <div className="navbar bg-base-100 max-w-7xl mx-auto ">
                <div className="flex-1">
                    <img src={Logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 space-x-6 *:font-bold *:text-xl">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/donation'>Donation</NavLink>
                        <NavLink to='/statistic'>Statistics</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;