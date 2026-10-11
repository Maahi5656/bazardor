

import Image from 'next/image'
import Link from 'next/link'

import CategoryProductItems from '@/components/CategoryProductItems'

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

interface ICategory{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

interface ICategoryPageProps{
    params: Promise<{categoryId: string}>;
}

const CategoryProduct = async({params}:ICategoryPageProps) => {

    const { categoryId } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data/bazarProducts.json`);
    const products: ICategoryProducts[] = await response.json();
    const categoryProduct = products.filter((cp)=>cp.category === categoryId)
     
    
    console.log('categoryId', params);

    console.log(products);

    const second_response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data/bazarCategories.json`)
    const category: ICategory[] = await second_response.json();
    const categoryItem = category.find((c)=>c.id  === categoryId)


    return (
        <div className='max-w-7xl mx-auto w-full py-10'>
            <div className='w-full flex justify-between items-start bg-white border-2 border-gray-400 rounded-2xl py-2.5 px-3.5'>
                <div className='flex items-center gap-0.5'>
                    {/* <h2 className='text-[45px]'>🍚</h2> */}
                    <h2 className='text-[45px]'>{categoryItem?.icon}</h2>
                    <div>
                        <h2 className='text-[24px] text-[#1D271F] font-bold'>{ categoryItem?.nameBn }</h2>
                        <p className='text-[14px] text-[#5C655E] font-semibold'>{categoryProduct.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
            </div>
            <br />
            <div className=''>
                <CategoryProductItems products={categoryProduct} />
                {/* <div className='w-full flex justify-between items-center gap-1.5'>
                    <p className='text-[14px] text-[#5C655E] font-semibold mb-2.5'>মোট {categoryProduct.length}টি পণ্য দেখানো হচ্ছে</p>
                    <div className='flex items-center gap-1.5'>
                        <span className='text-[14px] text-[#5C655E] font-semibold'>সাজান</span>
                        <select className='border-2 border-gray-400 p-1.5 rounded' name="" id="">
                            <option value="default">Default</option>
                            <option value="ascending">কম থেকে বেশি</option>
                            <option value="descending">বেশি থেকে কম</option>
                        </select>
                    </div>
                </div>
                <div className='flex items-center gap-2.5'>
                    {
                        categoryProduct.map((cp)=>{
                            return (
                                <Link key={cp.id} href={`/product/${cp.id}`}>
                                    <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                                        <div className='flex items-center gap-0.5'>
                                            <h2 className='text-[45px]'>{ cp.image }</h2>
                                            <div>
                                                <h2 className='text-[16px] text-[#1D271F] font-bold'>{cp.nameBn}</h2>
                                                <p className='text-[12px] text-[#5C655E] font-semibold'>৪টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-end'>
                                            <div>
                                                <p className='text-[12px] text-[#5C655E] font-semibold'>আজকের দাম</p>
                                                <h2 className='text-[20px] text-[#1D271F] font-bold'><b>{ cp.today }</b> টাকা</h2>
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
                </div> */}
            </div>
        </div>
    )
}

export default CategoryProduct