import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {

    const date = new Date().toLocaleDateString("bn-BD",{
        dateStyle: "full",
    });

    return (
        <div className='flex justify-between items-start bg-[#E1E8E1] py-3.5 px-5 rounded-2xl'>
            <div>
                <span className='inline-block text-[#05893E] bg-[#e1f1e7] py-2 px-2.5 rounded-2xl'>{ date }</span>
                <h1 className='text-[36px] font-bold text-[#1D271F] mb-2'>আজকের বাজারের দাম এক নজরে</h1>
                <p className='text-[16px] font-medium text-[#1D271F] mb-3.5'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <Link href='#allProducts' className='text-[14px] font-semibold text-white bg-[#05893E] py-2 px-4 rounded' >সব পণ্য দেখুন</Link>
            </div>
            <div>
                <Image src={'/bazar-hero.png'} width={315} height={263} alt='banner-image' />
            </div>
        </div>
    )
}

export default Banner