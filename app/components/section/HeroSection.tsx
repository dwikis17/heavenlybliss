'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-white text-gray-800">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    className="max-w-3xl mx-auto space-y-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Heavenly Bliss
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Unleash your inner goddess with our heavenly, sexy lingerie. Crafted to make you feel irresistible, every piece is designed to celebrate your beauty and confidence.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-lg font-medium">
                            Explore Collection
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}