import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
    return (
        <main className=" overflow-hidden">
            <Head>
                <title>U4 - Get Started</title>
            </Head>
            <section className=" flex flex-row justify-center items-center">
                <div className=' h-screen hidden justify-center items-center md:flex md:w-1/3 lg:flex lg:w-1/2' >
                Logo
                </div>
                <div className=' h-screen flex flex-col justify-center items-center gap-0 md:gap-2 lg:gap-2 w-full md:w-2/3 lg:w-1/2'>
                    <h2 className=' text-2xl font-mono pb-2 md:pb-5 lg:pb-5'>Login Portal</h2>
                    <div className='bg-white lg:h-80 lg:w-80 md:h-80 md:w-80 w-72 h-72 rounded-lg p-8 flex flex-col gap-4 items-stretch'>
                        <label htmlFor="name" className=' font-mono text-xl text-black'>
                            ID
                        </label>
                        <input type="text" className='bg-[#D9D9D9] rounded-md px-4 text-blue-600 font-mono h-9 text-right' />
                        <label htmlFor="password" className=' font-mono text-xl text-black'>
                            Password
                        </label>
                        <input type="text" className='bg-[#D9D9D9] rounded-md px-4 text-blue-600 font-mono h-9 text-right' />
                        <Link key={'/home'} href={'/home'} className=' pt-5 flex justify-center'>
                            <button
                            className=' w-48 px-4 p-2 bg-black text-white rounded-xl'>
                            Login
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
    </main>
    );
}