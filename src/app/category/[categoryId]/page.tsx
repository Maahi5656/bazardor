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
    const response = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const products: ICategoryProducts[] = await response.json();
    const categoryProduct = products.filter((cp)=>cp.category === categoryId)
     
    
    console.log('categoryId', params);

    console.log(products);

    const second_response = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
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
            </div>
        </div>
    )
}

export default CategoryProduct