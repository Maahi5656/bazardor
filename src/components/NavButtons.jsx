import React from 'react'
import Link from 'next/link'

const NavButtons = () => {
    return (
        <div className='flex items-center gap-2.5'>
            <Link href='#' className='text-[#1D271F] text-[14px] font-semibold'><b>সাইন ইন</b></Link>
            <Link href="#" className='bg-[#05893E] px-2.5 py-3.5 text-white text-[14px] font-semibold rounded'>সাইন আপ</Link>
        </div>
    )
}

export default NavButtons