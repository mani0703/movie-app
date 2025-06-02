import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>

            <div className='w-full p-2 items-center flex justify-between fixed'>

                {/* <div className='menu bg-red-700 text-xl px-3 py-1.5 rounded-lg'>Menu</div> */}

                <div className='flex gap-4'>

                    {/* 1 circle */}

                    <div className='w-[50px] h-[50px] bg-transparent flex items-center justify-center rounded-full cursor-pointer'>
                        <img src="logo.png" alt="" />
                    </div>

                    {/* 2 circle */}

                    <div className='nav flex items-center justify-center bg-black text-white rounded-full w-[50px] h-[50px] overflow-hidden hover:w-[500px] duration-1000'>
                        <menu className='flex items-center justify-center gap-2'>
                            <li className='btn'><Link href="/">Home</Link></li>
                            <li className='btn'><Link href="/explore">Explore</Link></li>
                            <li className='btn'>+</li>
                            <li className='btn'><Link href="/categories">Categories</Link></li>
                            <li className='btn'><Link href="/account">Account</Link></li>
                        </menu>
                    </div>

                </div>

                <div className='w-[50px] h-[50px] bg-black rounded-full cursor-pointer flex items-center justify-center'>
                    <Link className='flex items-center justify-center' href="/account"><img className='w-[80%]' src="person.svg" alt="" /></Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar
