import React from 'react'
import { Facebook, Instagram, Twitter, Send } from 'lucide-react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Tumbler Shop</h2>
                        <p className="text-gray-600 mb-4">Elevate your drink experience with our premium, eco-friendly tumblers.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#FF5733]">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#FF5733]">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#FF5733]">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-600 hover:text-[#FF5733]">Home</a></li>
                            <li><a href="/#list" className="text-gray-600 hover:text-[#FF5733]">Shop</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#FF5733]">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#FF5733]">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-600 mb-4">Stay updated with our latest offers and products.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-grow px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FF5733]"
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#FF5733] text-white rounded-r-md hover:bg-[#E64A2E] focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:ring-offset-2"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
                    <p>&copy; 2023 Tumbler Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer