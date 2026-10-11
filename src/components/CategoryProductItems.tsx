"use client"

import { useState } from "react"
import Link from "next/link"

interface ICategoryProducts{
    id: number,
    slug: string,
    nameBn: string,
    category: string,
    unit: string,
    image: string,
    today: number,
    change:{
        dir: string,
        pct: number
    }        
}

const CategoryProductItems = ({products}:{products: ICategoryProducts[]}) => {
    
    const [sortOrder, setSortOrder] = useState("default");

    const productList = [...products];

    const sortedProducts = productList.sort((a,b)=>{
        
        if(sortOrder === "ascending"){
            return a.today - b.today;
        }

        if(sortOrder === "descending"){
            return b.today - a.today;
        }

        return 0;
    })
    
    return (
        <>
            <div className='w-full flex justify-between items-center gap-1.5'>
                <p className='text-[14px] text-[#5C655E] font-semibold mb-2.5'>মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
                <div className='flex items-center gap-1.5'>
                    <span className='text-[14px] text-[#5C655E] font-semibold'>সাজান</span>
                    <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)} className='border-2 border-gray-400 p-1.5 rounded' name="" id="">
                        <option value="default">Default</option>
                        <option value="ascending">কম থেকে বেশি</option>
                        <option value="descending">বেশি থেকে কম</option>
                    </select>
                </div>
            </div>
            <div className='flex items-center gap-2.5'>
                {
                    sortedProducts.map((p)=>{
                        return(
                            <Link key={p.id} href={`/product/${p.id}`}>
                                <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                                    <div className='flex items-center gap-0.5'>
                                        <h2 className='text-[45px]'>{ p.image }</h2>
                                        <div>
                                            <h2 className='text-[16px] text-[#1D271F] font-bold'>{p.nameBn}</h2>
                                            <p className='text-[12px] text-[#5C655E] font-semibold'>পণ্যের আজকের দাম ও পরিবর্তন</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-end'>
                                        <div>
                                            <p className='text-[12px] text-[#5C655E] font-semibold'>আজকের দাম</p>
                                            <h2 className='text-[20px] text-[#1D271F] font-bold'><b>{ p.today }</b> টাকা</h2>
                                        </div>
                                        <div>
                                            <span className='inline-block text-[12px] bg-[#F0F5F0] px-1.5 py-2 text-[#D03739] font-semibold rounded-2xl'>▲ ২.১%</span>
                                        </div>
                                    </div>
                                </div>
                            </Link> 
                        )
                       
                    })
                }
            </div>
        </>
    )
}

export default CategoryProductItems