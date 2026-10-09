import React from 'react'

import Link from 'next/link'

const SignUpPage = () => {
    return (
        <div className='w-full flex justify-center mx-auto py-5'>
            <div>
                <h2 className='text-[24px] text-[#1D271F] font-bold text-center'>অ্যাকাউন্ট তৈরি করুন</h2>
                <p className='text-[14px] text-[#5C655E] font-semibold text-center'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                <br />
                <div className='bg-white border border-gray-400 max-w-2xl rounded-2xl p-5'>
                    <form>
                        <div className='mb-2.5'>
                            <label className='block text-[14px] text-[#1D271F] mb-1.5 font-semibold'>নাম</label>
                            <input className='w-full py-2 px-2.5 border-2 border-[#E1E8E1] rounded' type="text" placeholder='যেমন: রহিম উদ্দিন' />
                        </div>
                        <div className='mb-2.5'>
                            <label className='block text-[14px] text-[#1D271F] mb-1.5 font-semibold'>ইমেইল</label>
                            <input className='w-full py-2 px-2.5 border-2 border-[#E1E8E1] rounded' type="text" placeholder='you@example.com' />
                        </div>
                        <div className='mb-2.5'>
                            <label className='block text-[14px] text-[#1D271F] mb-1.5 font-semibold'>পাসওয়ার্ড</label>
                            <input className='w-full py-2 px-2.5 border-2 border-[#E1E8E1] rounded' type="password" placeholder='কমপক্ষে ৮ অক্ষর' />
                        </div>
                        <div className='mb-2.5'>
                            <label className='block text-[14px] text-[#1D271F] mb-1.5 font-semibold'>পাসওয়ার্ড নিশ্চিত করুন</label>
                            <input className='w-full py-2 px-2.5 border-2 border-[#E1E8E1] rounded' type="password" placeholder='আবার লিখুন' />
                        </div>
                        <div className='mb-2.5'>
                            <button className="text-[14px] text-white font-semibold py-2.5 bg-[#05893E] w-full border-0 cursor-pointer rounded" type="submit">অ্যাকাউন্ট তৈরি করুন</button>
                        </div>
                    </form>
                    <div className='flex gap-2.5 mb-2.5'>
                        <button className='bg-white border border-gray-500 rounded px-2.5 py-2 w-[50%] cursor-pointer'>Google দিয়ে চালিয়ে যান</button>
                        <button className='bg-white border border-gray-500 rounded px-2.5 py-2 w-[50%] cursor-pointer'>GitHub দিয়ে চালিয়ে যান</button>
                    </div>
                    <div className='text-center'>
                        <p className='text-[14px] text-[#1D271F] font-semibold'>অ্যাকাউন্ট আছে? <Link href='/singin' className="text-[14px] text-[#05893E] font-semibold">সাইন ইন করুন</Link> </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUpPage