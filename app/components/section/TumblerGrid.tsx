'use client'
import React, { useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import { StaticImageData } from 'next/image'
import item from '@/app/public/assets/item.png'
import test from '@/app/public/assets/test.jpg'




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
    console.log(products, 'products')
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <section className="bg-[#F7F6F3] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Koleksi Tumbler Kami</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((tumbler) => (
                        <div
                            key={tumbler.id}
                            className="bg-white p-4 transition-all duration-300 ease-in-out "
                            onMouseEnter={() => setHoveredId(tumbler.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => window.location.href = `/product/${tumbler.id}`}
                        >
                            <div className="relative aspect-square mb-4 overflow-hidden">
                                <img
                                    src={hoveredId === tumbler.id
                                        ? (typeof tumbler.detailImageUrl === 'string' ? tumbler.detailImageUrl : tumbler.detailImageUrl.src)
                                        : (typeof tumbler.imageUrl === 'string' ? tumbler.imageUrl : tumbler.imageUrl.src)
                                    }
                                    alt={tumbler.name}
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                />
                            </div>
                            <h3 className="text-lg font-medium mb-2">{tumbler.name}</h3>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold">
                                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(tumbler.price)}
                                </span>
                                <StarRating rating={tumbler.rating} />
                            </div>
                            {/* <button className="w-full bg-[#FF5733] text-white py-2 rounded-sm hover:bg-[#E64A2E] transition-colors text-sm">
                                Details
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TumblerGrid