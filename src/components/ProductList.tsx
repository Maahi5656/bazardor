import Link from "next/link"

interface IProduct{
    id: number,
    slug: string,
    nameBn: string,
    category: string,
    categoryNameBn: string,
    categoryIcon: string,
    unit: string,
    image: string,
    today: number,
    yesterday: number,
    lastWeek: number,
    lastMonth: number
    change: {
        dir: string,
        pct: number,
    },
    markets: {
        market:	string,
        division:	string,
        min: number,
        max: number
    }
}

const ProductList = async() => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data/bazarProducts.json`);
    const products: IProduct[] = await response.json();

    return (
        <section className='py-7' id="allProducts">
            <h2 className='text-[20px] text-[#1D271F] font-bold mb-1'>সব পণ্য</h2>
            <p className='text-[14px] font-medium text-[#1D271F] mb-3.5'>মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
            <div className='grid grid-cols-3 gap-2.5'>
                {
                    products.map((product)=>{
                        return (
                            <Link href={`/product/${product.id}`} key={product.id}>
                                <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                                    <div className='flex items-center gap-0.5'>
                                        <h2 className='text-[45px]'>{ product.image }</h2>
                                        <div>
                                            <h2 className='text-[16px] text-[#1D271F] font-bold'>{ product.nameBn }</h2>
                                            <p className='text-[12px] text-[#5C655E] font-semibold'>প্রতি { product.unit }</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-end'>
                                        <div>
                                            <p className='text-[12px] text-[#5C655E] font-semibold'>আজকের দাম</p>
                                            <h2 className='text-[20px] text-[#1D271F] font-bold'><b>{ product.today }</b> টাকা</h2>
                                        </div>
                                        <div>
                                            {
                                                product.change.dir === "up" ? (
                                                    <span className='inline-block text-[12px] bg-[#F0F5F0] px-1.5 py-2 text-[#D03739] font-semibold rounded-2xl'>▲ {product.change.pct}%</span>
                                                ) : <span className='inline-block text-[12px] bg-[#F0F5F0] text-[#05893E] px-1.5 py-2  font-semibold rounded-2xl'>▼ {product.change.pct}%</span>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ProductList