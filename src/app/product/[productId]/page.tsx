interface IProducts{
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
    lastMonth: number,
    change:{
        dir: string,
        pct: number
    },
    markets:{
        market: string,
        division: string,
        min: number,
        max: number
    }[]
}

interface IProductsProps{
    params: Promise<{productId: string}>;
}

const ProductDetails = async({params}:IProductsProps) => {

    const { productId } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data/bazarProducts.json`);
    const products: IProducts[] = await response.json();

    console.log("product id", productId);
    
    console.log("Product ",products);

    const productItem = products.find((p)=>p.id === Number(productId));

    console.log("productDetails",productItem);

    const priceChange = productItem ? productItem?.today - productItem?.yesterday : 0;
    let priceInfo = "";

    if(priceChange>0){
        priceInfo = `গতকালের তুলনায় আজ দাম বেড়েছে . ${priceChange} টাকা`
    }else if(priceChange<0){
        priceInfo = `গতকালের তুলনায় আজ দাম কমেছে . ${-(priceChange)} টাকা`
    }else if(priceChange === 0){
        priceInfo = "গতকালকের তুলনায় আজ দাম বাড়েনি বা কমেনি।"
    }

    const averagePrice = productItem ? ((productItem.lastWeek+productItem.lastMonth)/2) : 0

    return (
        <div className='max-w-7xl mx-auto w-full py-10'>
            <div className='w-full flex justify-between items-start bg-white border-2 border-gray-400 rounded-2xl py-2.5 px-3.5'>
                <div className='flex items-center gap-1.5'>
                    <h2 className='text-[45px] bg-[#F0F5F0] p-2 rounded-2xl'>{ productItem?.image }</h2>
                    <div>
                        <p className='text-[14px] text-[#5C655E] font-semibold mb-1'>{ productItem?.nameBn }</p>
                        <h2 className='text-[24px] text-[#1D271F] font-bold mb-1'>প্রতি { productItem?.unit } { productItem?.categoryNameBn }</h2> 
                        <p className='text-[14px] text-[#1D271F] font-semibold'>{ priceInfo }</p>                       
                    </div>
                </div>
                <div className='flex flex-col items-center bg-[#F0F5F0] px-2.5 py-1.5 rounded-2xl'>
                    <p className='text-[12px] text-[#5C655E] font-semibold'>আজকের দাম</p>
                    <h2 className='text-[24px] text-[#1D271F] font-bold'>{ productItem?.today }</h2>
                    <p className='text-[14px] text-[#5C655E] font-semibold'>টাকা/{productItem?.unit}</p>
                    <span className='inline-block text-[12px] py-0.5 text-[#D03739] font-semibold'>▲ { productItem?.change.pct }%</span>
                </div>
            </div>
            <br />
            <div className='w-full bg-white border-2 border-gray-400 rounded-2xl gap-2.5 py-2.5 px-3.5'>
                <h2 className='text-[18px] text-[#1D271F] mb-2.5 font-bold'>দামের সারসংক্ষেপ</h2>
                <div className='grid grid-cols-3 gap-2.5'>
                    <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                        <p className='text-[12px] text-[#1D271F] font-medium'>সর্বনিম্ন দাম</p>
                        <h2 className='text-[24px] text-[#1A9951] font-bold'>{ productItem?.lastMonth } টাকা</h2>
                        <p className='text-[12px] text-[#5C655E] font-medium'>সবচেয়ে কম দামের বাজার</p>
                    </div>
                    <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                        <p className='text-[12px] text-[#1D271F] font-medium'>সর্বাধিক দাম</p>
                        <h2 className='text-[24px] text-[#1A9951] font-bold'>{ productItem?.lastWeek } টাকা</h2>
                        <p className='text-[12px] text-[#1D271F] font-medium'>সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    <div className='bg-white border-2 border-gray-400 p-2.5 rounded-2xl'>
                        <p className='text-[12px] text-[#1D271F] font-medium'>গড় দাম</p>
                        <h2 className='text-[24px] text-[#1A9951] font-bold'>{ averagePrice } টাকা</h2>
                        <p className='text-[12px] text-[#1D271F] font-medium'>প্রতি কেজি-এর হিসাবে</p>
                    </div>
                </div>
                <br />
                <h2 className='text-[18px] text-[#1D271F] mb-2.5 font-bold'>বাজারভিত্তিক আজকের দাম</h2>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table className="w-full min-w-[700px] border-collapse text-left text-sm text-[#26352c]">
                      {/* Table Header */}
                      <thead className="bg-[#f8fbf8] text-[#7b847d]">
                        <tr className="border-b border-[#e4eae4]">
                          <th className="px-3 py-3 font-medium">
                            <b>বাজার</b>
                          </th>
                          <th className="px-3 py-3 font-medium">
                            <b>বিভাগ</b>
                          </th>
                          <th className="px-3 py-3 text-right font-medium">
                            <b>সর্বনিম্ন</b>
                          </th>
                          <th className="px-3 py-3 text-right font-medium">
                            <b>সর্বাধিক</b>
                          </th>
                          <th className="px-3 py-3 text-right font-medium">
                            <b>গড়</b>
                          </th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {
                            productItem?.markets.map((element, index) => {
                                return (
                                    <tr key={index} className="border-b border-[#dce4dc] bg-[#f9fbf9] hover:bg-[#eaf3eb]">
                                      <th className="whitespace-nowrap px-3 py-3 font-medium">
                                        { element.market }
                                      </th>
                                      <td className="whitespace-nowrap px-3 py-3">
                                        { element.division }
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-3 text-right">
                                        { element.min } টাকা
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-3 text-right">
                                        { element.max } টাকা
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-3 text-right font-bold">
                                        { (element.min+element.max)/2 } টাকা
                                      </td>
                                    </tr>
                                )                                
                            }) 
                        }
                      </tbody>
                    </table>
                </div>
            </div>
           
        </div>
    )
}

export default ProductDetails