import React from 'react'
import Image from 'next/image'

const CategoryProduct = () => {
    return (
        <div className='max-w-7xl mx-auto w-full py-10'>
            <div className='w-full flex justify-between items-start bg-white border-2 border-gray-400 rounded-2xl py-2.5 px-3.5'>
                <div className='flex items-center gap-0.5'>
                    <h2 className='text-[45px]'>🍚</h2>
                    <div>
                        <h2 className='text-[24px] text-[#1D271F] font-bold'>চাল</h2>
                        <p className='text-[14px] text-[#5C655E] font-semibold'>৪টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
                <div className='flex items-center gap-1.5'>
                    <span className='text-[14px] text-[#5C655E] font-semibold'>সাজান</span>
                    <select className='border-2 border-gray-400 p-1.5 rounded' name="" id="">
                        <option value="default">Default</option>
                        <option value="price">Price</option>
                    </select>
                </div>
            </div>
            <br />
            <div className=''>
                <p className='text-[14px] text-[#5C655E] font-semibold mb-2.5'>মোট ৪টি পণ্য দেখানো হচ্ছে</p>
                <div className='flex items-center gap-2.5'>
                    <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                        <div className='flex items-center gap-0.5'>
                            <h2 className='text-[45px]'>🍚</h2>
                            <div>
                                <h2 className='text-[16px] text-[#1D271F] font-bold'>স্বর্ণমাছি চাল</h2>
                                <p className='text-[12px] text-[#5C655E] font-semibold'>৪টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div>
                                <p className='text-[12px] text-[#5C655E] font-semibold'>আজকের দাম</p>
                                <h2 className='text-[20px] text-[#1D271F] font-bold'><b>১৪৮</b> টাকা</h2>
                            </div>
                            <div>
                                <span className='inline-block text-[12px] bg-[#F0F5F0] px-1.5 py-2 text-[#D03739] font-semibold rounded-2xl'>▲ ২.১%</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                        <div className='flex items-center gap-0.5'>
                            <h2 className='text-[45px]'>🍚</h2>
                            <div>
                                <h2 className='text-[16px] text-[#1D271F] font-bold'>স্বর্ণমাছি চাল</h2>
                                <p className='text-[12px] text-[#5C655E] font-semibold'>৪টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div>
                                <p className='text-[12px] text-[#5C655E] font-semibold'>আজকের দাম</p>
                                <h2 className='text-[20px] text-[#1D271F] font-bold'><b>১৪৮</b> টাকা</h2>
                            </div>
                            <div>
                                <span className='inline-block text-[12px] bg-[#F0F5F0] px-1.5 py-2 text-[#D03739] font-semibold rounded-2xl'>▲ ২.১%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryProduct