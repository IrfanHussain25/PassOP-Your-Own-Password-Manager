import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 flex justify-between items-center px-4 h-20 text-white'>
            <div className='logo font-bold text-2xl'>
                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>OP&gt;</span>
            </div>
            {/* <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href="/">Home</a>
                    <a className='hover:font-bold' href="#">About</a>
                    <a className='hover:font-bold' href="#">Contact</a>
                </li>
            </ul> */}

            <button className='text-white bg-green-500 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
                <img className='invert w-10 p-1' src="/github.svg" alt="github" />
                <span className='font-bold px-2'>Github</span>
            </button>
        </nav>
    )
}

export default Navbar
