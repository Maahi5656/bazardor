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

    const response = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await response.json();

    const headlines: Headlines[] = data;

    return (
        <div className="bg-[#F0F5F0] text-black py-1">
            <MarqueeText direction='right' duration={10}>
                {
                    headlines.map(h => <span className=' p-1 border-r-2 border-gray-500' key={h.id}>{h.image} { h.nameBn } {h.today}/{h.unit} {h.change.dir === "up" ? "▲" : "▼" } {h.change.pct}%</span>)
                }
            </MarqueeText>
        </div>
    )
}

export default Marquee