"use client"
import React from 'react'
import Mcard from './mcard'
import { useState, useEffect } from 'react'

const Recommended = () => {

    const [Img, setImg] = useState([])


    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch('/api');
                const data = await res.json();
                setImg(data.images);
                console.log(Img)
            } catch (err) {
                console.error('Error fetching images:', err);
            }
        };

        fetchImages();
    }, []);


    return (
        <div>
            <div className="w-full bg-black card-holder">
                <div className="text-white text-2xl px-5 py-3">
                    <span>Recommended Movies</span>
                </div>
                <div className="py-2 px-20 flex items-center overflow-scroll no-scrollbar gap-2.5">
                    {Img.length > 0
                        ? Img.map((image, index) => <Mcard key={index} imageUrl={image} />)
                        : <p>Loading...</p>}
                    <div className='text-white'>show all</div>
                </div>
            </div>
        </div>
    )
}

export default Recommended
