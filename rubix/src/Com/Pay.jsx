/* eslint-disable no-unused-vars */
import React from 'react'

const Pay = () => {
    return (
        <div>
            <div className='bg-[#fdfafa] flex justify-evenly items-center p-12' >
                <div className=''>
                    <img className='h-20 ml-16' src="./public/image/Airo.png" alt="" />
                    <h1 className='font-bold text-[20px]'>Free Worldwide Shipping</h1>
                    <h1 className='ml-6 mt-2' >On all orders over $75.00</h1>
                    <h2 className='hover:text-[#ba933e] font-bold mt-2 ml-16'>Learn More</h2>
                </div>
                <div className=''>
                    <img className='h-20 ml-12' src="./public/image/Card.png" alt="" />
                    <h1 className='font-bold text-[20px] ml-5'>100% Payment Secure</h1>
                    <h1 className='mt-2' >We ensure secure payment with PEV</h1>
                    <h2 className='hover:text-[#ba933e] font-bold mt-2 ml-20'>Learn More</h2>
                </div>
                <div className=''>
                    <img className='h-20 ml-12' src="./public/image/Return.png" alt="" />
                    <h1 className='font-bold text-[20px] ml-14'>30 Days Return</h1>
                    <h1 className='mt-2' >Return it within 20 day for an exchange</h1>
                    <h2 className='hover:text-[#ba933e] font-bold mt-2 ml-20'>Learn More</h2>
                </div>
            </div>
            <div className=''>
                <div className='flex justify-center items-center text-[30px] mt-5'>
                    <h1 className='font-bold'>From Our Blog </h1>
                </div>
                <div className='flex justify-center items-center mt-2'>
                    <p>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget</p>
                </div>
            </div>
        </div>
    )
}

export default Pay