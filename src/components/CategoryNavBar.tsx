import Image from 'next/image'
import Link from 'next/link'

interface ICategory{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}

const CategoryNavBar = async() => {

    const response = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
    const categories: ICategory[] = await response.json();

    console.log(categories);

    return (
        <div className='border-b-2 border-b-gray-100 bg-[#FAFCFA] w-full py-3'>
            <ul className='max-w-7xl mx-auto w-full flex justify-start items-center gap-5'>
                {
                    categories.map(category=>(
                    <li className='w-fit flex' key={category.id}>
                        <Link className='flex gap-1 items-center' href={`/category/${category.id}`}>
                            <p className='text-[12p] font-semibold'>{ category.icon }</p>
                            <p className='text-[12p] font-semibold'>{ category.nameBn }</p>                        
                        </Link>

                    </li>))
                }
            </ul>
        </div>

    )
}

export default CategoryNavBar