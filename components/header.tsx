'use client'

import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header
            className="sticky top-0 py-2 px-5 flex flex-row items-start xl:items-center justify-between max-w-7xl mx-auto z-20"
        >
            {/* SOCIAL ICONS */}
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5, //seconds
                }}
                className="flex justify-evenly items-center"
            >
                <SocialIcon
                    url='https://www.linkedin.com/in/harshitgarg-mercuryhg007/'
                    target='__blank'
                    fgColor='gray'
                    bgColor='transparent'
                />   
                <SocialIcon
                    url='https://github.com/MercuryHG007'
                    target='__blank'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/mercurianpixoral/'
                    target='__blank'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
            
            {/* CONTACT ME */}
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5, //seconds
                }}
                className="flex items-center justify-evenly text-gray-300 cursor-pointer"
            >
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    url='mailto:ggharshit1@gmail.com'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p
                    className='hidden lg:inline-flex text-sm text-gray-400 uppercase'
                >
                    Get in touch
                </p>
            </motion.div>
        </header>
    )
}

export default Header