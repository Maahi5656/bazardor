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

const PriceSection = async() => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data/bazarProducts.json`);
    const products:IProduct[]  = await response.json();

    const productPriceUp:IProduct[] = products.filter((product)=>product.change.dir === "up");
    const productPriceDown:IProduct[] = products.filter((product)=>product.change.dir === "down");

    return (
        <section>
            <br />
            <h2 className='text-[20px] text-[#1D271F] font-bold mb-3'>▲ আজ দাম বেড়েছে</h2>
            <div className='grid grid-cols-3 gap-2.5'>
                {
                    productPriceUp.map((item)=>{
                        return (
                            <Link href={`/product/${item.id}`} key={item.id}>
                                <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                                    <div className='flex items-center gap-0.5'>
                                        <h2 className='text-[45px]'>{ item.image }</h2>
                                        <div>
                                            <h2 className='text-[16px] text-[#1D271F] font-bold'>{ item.nameBn }</h2>
                                            <p className='text-[12px] text-[#5C655E] font-semibold'>প্রতি {item.unit}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-end'>
                                        <div>
                                            <p className='text-[12px] text-[#5C655E] font-semibold'>আজকের দাম</p>
                                            <h2 className='text-[20px] text-[#1D271F] font-bold'><b>{item.today}</b> টাকা</h2>
                                        </div>
                                        <div>
                                            <span className='inline-block text-[12px] bg-[#F0F5F0] px-1.5 py-2 text-[#D03739] font-semibold rounded-2xl'>▲ {item.change.pct}%</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
            <br />
            <h2 className='text-[20px] text-[#1D271F] font-bold mb-3'>▼ আজ দাম কমেছে</h2>
            <div className='grid grid-cols-3 gap-2.5'>
                {
                    productPriceDown.map((item)=>{
                        return (
                            <Link href={`/product/${item.id}`} key={item.id}>
                                <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                                    <div className='flex items-center gap-0.5'>
                                        <h2 className='text-[45px]'>{ item.image }</h2>
                                        <div>
                                            <h2 className='text-[16px] text-[#1D271F] font-bold'>{ item.nameBn }</h2>
                                            <p className='text-[12px] text-[#5C655E] font-semibold'>প্রতি {item.unit}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-end'>
                                        <div>
                                            <p className='text-[12px] text-[#5C655E] font-semibold'>আজকের দাম</p>
                                            <h2 className='text-[20px] text-[#1D271F] font-bold'><b>{item.today}</b> টাকা</h2>
                                        </div>
                                        <div>
                                            <span className='inline-block text-[12px] bg-[#F0F5F0] px-1.5 py-2 text-[#05893E] font-semibold rounded-2xl'>▼ {item.change.pct}%</span>
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

export default PriceSection