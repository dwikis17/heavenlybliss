'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { Leaf, Droplets, Zap } from 'lucide-react'

const BenefitItem: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            className="flex flex-col items-center text-center space-y-2"
            variants={itemVariants}
        >
            <motion.div
                className="w-12 h-12 rounded-full bg-[#F0EDE6] flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 max-w-xs">{description}</p>
        </motion.div>
    )
}

const BenefitsSection: React.FC = () => {
    const controls = useAnimation()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible")
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [controls])

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    return (
        <section ref={ref} className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    Mengapa Pakai Tumbler?
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    <BenefitItem
                        icon={<Leaf className="w-6 h-6 text-[#4CAF50]" />}
                        title="Ramah Lingkungan"
                        description="Diciptakan dari bahan berkelanjutan, mengurangi jejak lingkungan Anda."
                        delay={0}
                    />
                    <BenefitItem
                        icon={<Droplets className="w-6 h-6 text-[#2196F3]" />}
                        title="Kendali Suhu"
                        description="Tetap hangat atau dingin berjam-jam, sempurna untuk setiap tegukan."
                        delay={0.2}
                    />
                    <BenefitItem
                        icon={<Zap className="w-6 h-6 text-[#FFC107]" />}
                        title="Desain Tangguh"
                        description="Dirancang untuk bertahan lama, dengan material berkualitas tinggi yang tahan benturan."
                        delay={0.4}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default BenefitsSection