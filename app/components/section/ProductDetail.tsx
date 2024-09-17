'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Home } from 'lucide-react'
import Link from 'next/link'
import ReactPixel from 'react-facebook-pixel'
import { motion } from 'framer-motion'
import Image from 'next/image'
const ProductDetail: React.FC<{ product: any }> = ({ product }) => {
    React.useEffect(() => {
        ReactPixel.init('555810740108543', undefined, { autoConfig: true, debug: false });
        ReactPixel.pageView();
    }, []);

    const handleWhatsAppClick = () => {
        ReactPixel.track('Contact', {
            content_name: product.name,
            content_category: product.category,
            value: product.price,
            currency: 'IDR',
        })
        console.log('WhatsApp contact initiated for:', product.name)
    }

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [selectedSize, setSelectedSize] = useState('')
    const [isFavorite, setIsFavorite] = useState(false)



    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        )
    }

    const handleAddToCart = () => {
        handleWhatsAppClick()
        const initialMessage = `Halo, saya ingin memesan ${product.name} dengan ukuran ${selectedSize}.`
        const encodedMessage = encodeURIComponent(initialMessage);
        window.open(`https://wa.me/6285121004010?text=${encodedMessage}`, '_blank');

    }
    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors">
                    <Home className="w-5 h-5 mr-2" />
                    <span>Back to Home</span>
                </Link>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={product.images[currentImageIndex] || ''}
                        alt={`${product.name} - Image ${currentImageIndex + 1}`}
                        width={600}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-lg"

                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                    />
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
                    >
                        <ChevronLeft className="w-6 h-6 text-pink-600" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
                    >
                        <ChevronRight className="w-6 h-6 text-pink-600" />
                    </button>
                    <div className="flex justify-center mt-4 space-x-2">
                        {product.images.map((_: any, index: number) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-pink-500' : 'bg-pink-200'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-pink-800">{product.name}</h1>
                    <p className="text-2xl font-semibold text-pink-600">
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}
                    </p>
                    <p className="text-gray-600">{product.description}</p>

                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-pink-700">Select Size:</h2>
                        <div className="flex space-x-2">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border rounded-md ${selectedSize === size
                                        ? 'bg-pink-500 text-white border-pink-500'
                                        : 'border-gray-300 text-gray-700 hover:border-pink-500'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 flex items-center justify-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-pink-600"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            <span>Buy Now</span>
                        </button>
                        {/* <button
                            onClick={handleToggleFavorite}
                            className={`p-3 rounded-full transition duration-300 ease-in-out ${isFavorite ? 'bg-pink-100 text-pink-500' : 'bg-gray-100 text-gray-500'
                                }`}
                        >
                            <Heart className="w-6 h-6" fill={isFavorite ? 'currentColor' : 'none'} />
                        </button> */}
                    </div>

                    <div className="border-t border-pink-100 pt-6 mt-6">
                        <h2 className="text-lg font-semibold mb-2 text-pink-700">Product Details:</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            {product.subtext.map((detail: any) => (
                                <li key={detail}>{detail}</li>
                            ))}
                            {/* <li>Material: 95% Cotton, 5% Elastane</li>
                            <li>Care Instructions: Machine wash cold, tumble dry low</li>
                            <li>Fit: True to size, relaxed fit</li>
                            <li>Made in: Ethical manufacturing facility in Indonesia</li>
                            <li>Model is wearing size S and is 175cm tall</li> */}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ProductDetail