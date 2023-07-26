'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'

import Container from "./ui/container"
import BackgroundCircles from './ui/backgroundCircles'
import Link from 'next/link'

const Hero = () => {

    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Harshit Garg",
            "Guy-who-loves-to-eat.tsx",
            "<ButLovesToCodeAndBuildMore />"
        ],
        loop: true,
        delaySpeed: 2000
    })

    return (

        <div
            className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'
        >
            <BackgroundCircles />
            <Image
                className='relative bg-[#C2D84B] rounded-full m-0 object-cover'
                alt=''
                src="/dp1.png"
                width="160"
                height="160"

            />
            <div
                className='flex flex-col items-center justify-center z-20'
            >
                <h2
                    className='text-sm uppercase text-neutral-300 pb-2 tracking-[10px] md:tracking-[15px]'
                >
                    Software Engineer
                </h2>
                <h1
                    className='text-5xl lg:text-6xl font-semibold px-10 '
                >
                    <span
                        className='mr-3'
                    >
                        {text}
                    </span>
                    <Cursor
                        cursorColor='#C2D84B'
                    />
                </h1>
                <div
                    className='grid grid-cols-2 md:grid-cols-4 pt-10 gap-2 '
                >
                    <Link
                        href="#about"
                    >
                        <button
                            className='heroButton'
                        >
                            About
                        </button>
                    </Link>
                    <Link
                        href="#experience"
                    >
                        <button
                            className='heroButton'
                        >
                            Experience
                        </button>
                    </Link>
                    <Link
                        href="#skills"
                    >
                        <button
                            className='heroButton'
                        >
                            Skills
                        </button>
                    </Link>
                    <Link
                        href="#projects"
                    >
                        <button
                            className='heroButton'
                        >
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Hero