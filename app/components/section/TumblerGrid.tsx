'use client'
import React, { useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import { StaticImageData } from 'next/image'
import item from '@/app/public/assets/item.png'
import test from '@/app/public/assets/test.jpg'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'




interface TumblerItem {
    id: number
    name: string
    price: number
    rating: number
    imageUrl: StaticImageData | string
    detailImageUrl: StaticImageData | string
}

const tumblers: TumblerItem[] = [
    { id: 1, name: "Classic Stainless", price: 24.99, rating: 4.5, imageUrl: item, detailImageUrl: test },
    { id: 2, name: "Gradient Delight", price: 29.99, rating: 5, imageUrl: item, detailImageUrl: test },
    { id: 3, name: "Eco Bamboo", price: 34.99, rating: 4, imageUrl: item, detailImageUrl: test },
    { id: 4, name: "Sleek Noir", price: 27.99, rating: 4.5, imageUrl: item, detailImageUrl: test },
    { id: 5, name: "Pastel Dream", price: 31.99, rating: 5, imageUrl: item, detailImageUrl: test },
    { id: 6, name: "Mountain Explorer", price: 39.99, rating: 4.5, imageUrl: item, detailImageUrl: test },
]

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    return (
        <div className="flex">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <Star key={i + fullStars} className="w-4 h-4 text-gray-300" />
            ))}
        </div>
    )
}

const TumblerGrid: React.FC<{ products: TumblerItem[] }> = ({ products }) => {

    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 text-pink-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Heavenly Collection
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            onMouseEnter={() => setHoveredId(product.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Link href={`/product/${product.id}`}>
                                <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
                                    <img
                                        src={hoveredId === product.id
                                            ? (typeof product.detailImageUrl === 'string' ? product.detailImageUrl : product.detailImageUrl.src)
                                            : (typeof product.imageUrl === 'string' ? product.imageUrl : product.imageUrl.src)
                                        }
                                        alt={product.name}

                                        className="transition-opacity duration-300"
                                    />
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-pink-700">{product.name}</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-lg font-semibold text-pink-600">
                                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}
                                    </span>
                                    <StarRating rating={product.rating} />
                                </div>
                                <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors text-sm">
                                    View Details
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TumblerGrid