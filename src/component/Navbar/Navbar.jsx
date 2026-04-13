import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/timeline">Timeline</Link></li>
        <li><Link href="/stats">Stats</Link></li>
    </>

    return (
        <div className='shadow-xl bg-base-300 sticky top-0 z-50'>
            <div className="navbar container m-auto">

                <div className="navbar-start">

                    <div className="dropdown">

                        <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {links}
                        </ul>

                    </div>

                    <Link href="/" className="btn hidden sm:flex btn-ghost font-extrabold text-3xl">FrKeeper</Link>

                </div>

                <Link href="/" className="btn sm:hidden btn-ghost font-extrabold text-xl ">FrKeeper</Link>

                <div className="navbar-end hidden sm:flex">

                    <ul className="menu menu-horizontal px-1 text-xl font-medium">
                        
                        {links}

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;