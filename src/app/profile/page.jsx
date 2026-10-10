import React from 'react'

import Image from 'next/image'

const ProfilePage = () => {
    return (
        <div className='w-full flex justify-center mx-auto py-5'>
            <div className='max-w-5xl w-full'>
                <h2 className='text-[24px] text-[#1D271F] font-bold text-left'>আমার প্রোফাইল</h2>
                <p className='text-[14px] text-[#5C655E] font-semibold text-left'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                <br />   
                <div className='flex justify-between bg-white border border-gray-400 rounded-2xl p-5'>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <Image src={'/logo-icon.png'} width={45} height={45} alt='profile-photo' />
                        </div>
                        <div>
                            <h2 className='text-[20px] text-[#1D271F] font-bold text-left'>আমার প্রোফাইল</h2>
                            <p className='text-[16px] text-[#5C655E] font-semibold text-left'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-transparent text-[#D03739] font-bold border-2 border-[#D03739] rounded-2xl py-2 px-2.5'>↩ সাইন আউট</button>
                    </div>
                </div>  
                <br />
                <div className='bg-white border border-gray-400 rounded-2xl p-5'>
                    <h2 className='text-[20px] text-[#1D271F] font-bold text-left mb-2.5'>তথ্য</h2>
                    <br />
                    <form>
                        <div className='mb-2.5'>
                            <label className='block text-[14px] text-[#1D271F] mb-1.5 font-semibold'>নাম</label>
                            <input className='w-full py-2 px-2.5 border-2 border-[#E1E8E1] rounded' type="text" placeholder='যেমন: রহিম উদ্দিন' />
                        </div>    
                        <div className='mb-2.5'>
                            <button className="text-[14px] text-white font-semibold py-2.5 bg-[#05893E] w-full border-0 cursor-pointer rounded" type="submit">আপডেট</button>                        
                        </div>                    
                    </form>
                </div>           
            </div>
        </div>
    )
}

export default ProfilePage