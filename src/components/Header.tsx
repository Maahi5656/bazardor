import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import NavButtons from './NavButtons'
import CategoryNavBar from './CategoryNavBar'
import Marquee from './Marquee'

const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD",{
        dateStyle: "full",
    });

    // console.log(categories);

    return (
        <header>
            <div className='border-b py-2 bg-[#F3FBF4] border-b-gray-100'>
                <div className="max-w-7xl mx-auto w-full flex justify-between items-center py-3">
                    <Link href={'/'}>
                        <div className="flex items-center gap-2">
                            <Image className='bg-[#05893E] p-2.5 rounded-2xl' src={'/logo-icon.png'} width={45} height={45} alt='logo' />
                            <div>
                                <span className='block text-[20px] text-[#1D271F] font-bold'>বাজার দর</span>
                                <span className='block text-[12px] text-[#1D271F] font-light'>{ date }</span>
                            </div>                        
                        </div>
                    </Link>
                    <NavButtons />
                </div>
            </div>
            <CategoryNavBar />
            <Marquee />
        </header>


    )
}

export default Header