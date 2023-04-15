import React from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='bg-slate-800 p-5 fixed top-0 left-0 right-0 z-50'>
      <nav className='flex justify-between w-9/12 mx-auto items-center'>
        <NavLink to='/' className='text-white text-2xl font-bold'>
            bookMyshow
        </NavLink>

        <div className='flex justify-center items-center gap-x-4'>
            <div>
                <select className='py-2 rounded-xl px-4 text-white bg-slate-800'>
                    <option>Delhi-NCR</option>
                    <option>Mumbai</option>
                    <option>Banglore</option>
                </select>
            </div>


            <div className='text-white'>
                {
                    !isLoggedIn && 
                    <NavLink to='/login'>
                        <button>Login</button> 
                    </NavLink>
                    
                }

                {
                    isLoggedIn &&
                    <NavLink to='/'>
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success('Log out successfully');
                        }}>Log Out</button>
                    </NavLink>
                }
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
