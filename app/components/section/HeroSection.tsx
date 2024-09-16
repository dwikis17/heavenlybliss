'use client'
import React from 'react'
import { motion } from 'framer-motion'
import item from '@/app/public/assets/test.jpg'

const HeroSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    }

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95, transition: { duration: 0.2 } }
    }

    return (
        <motion.div
            className="bg-[#F7F6F3] min-h-screen flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-6">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold tracking-tighter"
                            variants={itemVariants}
                        >
                            Rasakan Kesempurnaan,
                            <br />
                            <motion.span
                                className="text-[#FF5733]"
                                variants={itemVariants}
                            >
                                Nikmati Setiap Teguknya
                            </motion.span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-600 max-w-[600px]"
                            variants={itemVariants}
                        >
                            Jelajahi keindahan tumbler ramah lingkungan kami—diciptakan untuk mereka yang menghargai keanggunan di setiap perjalanan.
                        </motion.p>
                        <motion.button
                            onClick={() => window.location.href = '#list'}
                            className="bg-[#FF5733] text-white hover:bg-[#E64A2E] px-8 py-4 text-lg rounded-full transition duration-300 ease-in-out"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Lihat Produk
                        </motion.button>
                    </div>
                    <motion.div
                        className="relative h-[400px] md:h-[600px]"
                        variants={imageVariants}
                    >
                        <motion.img
                            src={item.src}
                            alt="Tumbler Unggulan"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default HeroSection