'use client'

import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Source_Code_Pro } from 'next/font/google'

const font = Source_Code_Pro({ 
    weight: '400',
    subsets: ['latin']
})

const Header = () => {
    return (
        <header
            className="sticky top-0 py-2 flex flex-row items-start xl:items-center justify-between max-w-7xl mx-auto z-20"
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
                <Link
                    href="/"
                >
                    <p
                        className={`${font.className} p-3 text-[#C2D84B] hover:text-[#d6ed55] text-xl font-semibold`}
                    >
                        &lt;hg/&gt;
                    </p>
                </Link>
                <SocialIcon
                    url='https://www.linkedin.com/in/harshitgarg-mercuryhg007/'
                    target='__blank'
                    fgColor='currentColor'
                    bgColor='transparent'
                    className='text-neutral-400 hover:text-[#C2D84B]'
                />   
                <SocialIcon
                    url='https://github.com/MercuryHG007'
                    target='__blank'
                    fgColor='currentColor'
                    bgColor='transparent'
                    className='text-neutral-400 hover:text-[#C2D84B]'
                />
                <SocialIcon
                    url='https://www.instagram.com/mercurianpixoral/'
                    target='__blank'
                    fgColor='currentColor'
                    bgColor='transparent'
                    className='text-neutral-400 hover:text-[#C2D84B]'
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
                className="flex items-center justify-evenly group cursor-pointer text-neutral-400"
            >
                <SocialIcon
                    network='email'
                    url='mailto:ggharshit1@gmail.com'
                    fgColor='currentColor'
                    bgColor='transparent'
                    className='cursor-pointer group-hover:text-[#C2D84B]'
                />
                <p
                    className='hidden lg:inline-flex text-sm mx-3 group-hover:text-[#C2D84B] uppercase'
                >
                    Get in touch
                </p>
            </motion.div>
        </header>
    )
}

export default Header