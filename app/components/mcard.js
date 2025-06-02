
import React from 'react'

const Mcard = ({ imageUrl }) => {

    {/* https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON */ }

    return (
        <div>
            <p id='card' className="w-[250px] h-[320px] rounded-[10px] bg-purple-400 overflow-hidden">
                <img className='w-full h-full' src={imageUrl} alt="poster" />
            </p>
        </div>
    )
}

export default Mcard
