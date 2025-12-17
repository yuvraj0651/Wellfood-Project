import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="banner h-full">
                <div className="banner__inner py-[5rem] px-[1.5rem] h-full grid grid-cols-1 md:grid-cols-2">
                    <div className="banner__content flex flex-col items-start justify-center">
                        <h3 className='text-amber-500 font-[600] capitalize tracking-wide text-[1.2rem]'>start price only $25</h3>
                        <h2 className='text-white py-3 uppercase font-[700] tracking-wide text-[2rem] leading-[2.8rem]'>delicious food near your town</h2>
                        <p className='text-white tracking-wide text-[1.1rem] leading-[1.5rem]'>Welcome to our culinary sanctuary, where every dish tells a story every bite is an adventure at our food website, we invitez</p>
                        <div className="banner__button">
                            <a href="">view all menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner