import React from 'react';
import Link from 'next/link';
import { Nav_Items } from '@/public/constants';

function NavBar() {
    return (
        <nav className=' bg-white text-black p-5 shadow-sm shadow-white'>
            {Nav_Items.map((option) => (
                <Link key={option.path} href={option.path} >
                    <button className=' mx-3'>
                        {option.name}
                    </button>
                </Link>
            ))}
        </nav>
    );
}

export default NavBar;