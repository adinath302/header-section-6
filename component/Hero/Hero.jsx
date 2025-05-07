import React from 'react'
import { FaPlay } from "react-icons/fa6";
import HeroImg from "../../../public/img.png";
import { SlideLeft, SlideRight } from '../../Utility/animation';
import { motion } from 'framer-motion';


const Herosection = () => {
    return (
        <>
            <section>
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative pbp '>

                    {/* Brand info */}

                    <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                        <div className='text-center md:text-left space-y-6'>
                            <motion.h1
                                variants={SlideRight(0.6)}
                                initial='hidden'
                                animate='visible'
                                className='text-5xl lg:text-5xl font-bold  xl:leading-normal'>Consistency with the focus gives you the
                                <span className='text-[#fb923c]'>{" "}confidence</span>
                            </motion.h1>
                            <motion.p
                                variants={SlideRight(1.2)}
                                initial='hidden'
                                animate='visible'
                                className='text-gray-600 xl:max-w-[500px] !mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</motion.p>
                            {/* button section  */}

                            <motion.div
                                variants={SlideRight(1.5)}
                                initial='hidden'
                                animate='visible'
                                className='flex justify-center gap-8 
                            items-center md:justify-start !mt-4 md:justify-start'>
                                <button className='primary-btn flex items-center gap-2'> Order Now</button>
                                <button className='flex justify-center gap-2 mt-2 items-center'><FaPlay /> Watch Now</button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Hero image */}

                    <div className='flex justify-center items-center'>
                        <motion.img
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            src={HeroImg}
                            className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosection