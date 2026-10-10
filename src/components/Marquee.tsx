import React from 'react'

import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headlines {
    id: string,
    nameBn: string,
    image: string,
    unit: string,
    today: string,
    markets: {
        min: number,
        max: number
    },
    change:{
        dir: string,
        pct: number
    }

}

const Marquee = async() => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data/bazarProducts.json`);
    const data = await response.json();

    const headlines: Headlines[] = data;

    return (
        <div className="bg-[#FAFCFA] border-b-gray-100 text-black py-1">
            <MarqueeText direction='right' duration={10}>
                {
                    headlines.map(h => <span className=' p-1 border-r-2 border-gray-500' key={h.id}>{h.image} { h.nameBn } {h.today}/{h.unit} {h.change.dir === "up" ? "▲" : "▼" } {h.change.pct}%</span>)
                }
            </MarqueeText>
        </div>
    )
}

export default Marquee