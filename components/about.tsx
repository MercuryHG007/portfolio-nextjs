'use client'

import { motion } from "framer-motion"

import Heading from "./ui/heading"
import Container from "./ui/container"

const About = () => {
    return (
        <Container>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-col md:flex-row relative h-screen text-center md:text-left px-10 justify-between mx-auto items-center"
            >
                <div
                    className="flex flex-col gap-6"
                >
                    <Heading
                        title="About"
                    />
                    <div
                        className="w-56 h-56 md:w-64 md:h-80 xl:w-[500px] xl:h-[600px] flex items-center justify-center "
                    >
                        <motion.img
                            initial={{
                                x: -200,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{
                                once: true
                            }}

                            className='bg-[#C2D84B] rounded-full md:rounded-lg w-56 h-56 md:w-64 md:h-80 xl:w-[500px] xl:h-[600px] object-cover'
                            alt="img"
                            src='/dp1.png'
                        />
                    </div>
                </div>
                <div
                    className="h-[400px] lg:h-auto space-y-5 md:space-y-10 pt-4 px-0 md:px-10 "
                >
                    <h4
                        className="text-4xl font-semibold "
                    >
                        Here is a {" "}
                        <span className="underline decoration-[#C2D84B]/50">little</span>
                        {" "}background!
                    </h4>
                    <p
                        className="text-justify text-sm lg:text-lg "
                    >
                        Hello, I&apos;m Harshit Garg, a passionate and innovative software engineer with a flair for problem-solving and a keen eye for detail. I thrive on challenges and love to delve into the world of technology to create cutting-edge solutions. My journey in the world of programming began with curiosity and has led me to become a proficient full-stack developer, continuously learning and evolving as the industry advances.
                    </p>
                </div>
            </motion.div>
        </Container>
    )
}

export default About