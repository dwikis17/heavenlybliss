'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Minus, Plus, MessageCircle, Home } from 'lucide-react'
import Link from 'next/link'
import ReactPixel from 'react-facebook-pixel'



const ProductDetail: React.FC<{ product: any }> = ({ product }) => {
    React.useEffect(() => {
        ReactPixel.init('1036336657769911', undefined, { autoConfig: true, debug: false });
        ReactPixel.pageView();
    }, []);
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const handleWhatsAppClick = () => {
        ReactPixel.track('Contact', {
            content_name: product.name,
            content_category: product.category,
            value: product.price,
            currency: 'IDR',
        })
        console.log('WhatsApp contact initiated for:', product.name)
    }

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

    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-[#FF5733] hover:text-[#E64A2E] transition-colors">
                    <Home className="w-5 h-5 mr-2" />
                    <span>Back to Home</span>
                </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Image Slider */}
                <div className="relative">
                    <img
                        src={product.images[currentImageIndex]}
                        alt={`${product.name} - Image ${currentImageIndex + 1}`}
                        className="w-full h-auto rounded-lg"
                    />
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="flex justify-center mt-4 space-x-2">
                        {product.images.map((_: any, index: number) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-[#FF5733]' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-2xl font-semibold text-[#FF5733]"> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</p>
                    <p className="text-gray-600">{product.description}</p>

                    {/* Quantity Selector */}
                    {/* <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Quantity:</span>
                        <button onClick={decrementQuantity} className="p-1 rounded-full border border-gray-300">
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold">{quantity}</span>
                        <button onClick={incrementQuantity} className="p-1 rounded-full border border-gray-300">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div> */}


                    <a
                        href="https://wa.me/+6285121004010"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsAppClick}
                        className="flex items-center text-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-[#1EBF55]"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>Beli</span>
                    </a>

                    {/* Additional Information */}
                    <div className="border-t border-gray-200 pt-6 mt-6">
                        <h2 className="text-lg font-semibold mb-2">Product Features:</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Double-wall vacuum insulation</li>
                            <li>18/8 food-grade stainless steel</li>
                            <li>BPA-free and phthalate-free</li>
                            <li>Keeps drinks cold for 24 hours, hot for 12 hours</li>
                            <li>Sweat-free exterior</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail