"use client"

import React from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { authClient } from '@/lib/auth-client'

const NavButtons = () => {

    const { data:session } = authClient.useSession();
    const user = session?.user;

    console.log("Session User Data", user);

    return (
        <>
            {
                user ? (
                    <div className="flex items-center gap-2">
                        <Link href={"/profile"}>
                            <div className="avatar">
                              <div className="ring-primary ring-offset-base-100 w-15 rounded-full ring-2 ring-offset-2">
                                <img className="w-15 rounded-full" alt="Tailwind-CSS-Avatar-component" src={user?.image as string} />
                              </div>
                            </div>
                        </Link>
                        <h2 className="font-bold">{ user?.name }</h2>
                    </div>                
                ) : (
                    <div className='flex items-center gap-2.5'>
                        <Link href='/signin' className='text-[#1D271F] text-[14px] font-semibold'><b>সাইন ইন</b></Link>
                        <Link href="/signup" className='bg-[#05893E] px-2.5 py-3.5 text-white text-[14px] font-semibold rounded'>সাইন আপ</Link>
                    </div>
                )
            }        
        </>


    )
}

export default NavButtons