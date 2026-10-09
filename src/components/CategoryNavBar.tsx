

import React from 'react'
// import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ICategory{
    id: string,
    slug: string,
    nameBn: string,
    icon: string,
}

const CategoryNavBar = async() => {

    const response = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const categories:ICategory[] = await response.json();

    console.log(categories);

    return (
        <div className='border-b-2 border-b-gray-100 bg-[#FAFCFA] w-full py-3'>
            <div className='max-w-3xl mx-auto w-full flex justify-start items-center gap-2.5'>
                {
                    categories.map(category=>(
                    <div className='flex gap-1' key={category.id}>
                        <p className='text-[12p] font-semibold'>{ category.icon }</p>
                        <p className='text-[12p] font-semibold'>{ category.nameBn }</p>
                    </div>))
                }
            </div>
        </div>

    )
}

export default CategoryNavBar