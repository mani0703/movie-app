"use client"
import React from 'react'
import Mcard from '../components/mcard'
import { useState, useEffect } from 'react'

const page = () => {

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
            <div className='bg-black flex items-center justify-center py-2.5 '>
                <input className='bg-white w-[700px] h-[50px] rounded-full text-xl px-[20px] z-10' type="text" placeholder='search movie name' />
            </div>
            <div className='w-full h-[50vh] bg-blue-400'></div>
            <div className='grid grid-cols-6 gap-8 p-[20px] bg-black'>
              
                    {Img.length > 0
                        ? Img.map((image, index) => <Mcard key={index} imageUrl={image} />)
                        : <p>Loading...</p>}
                    <div className='text-white'>show all</div>
               
            </div>

        </div>
    )
}

export default page
