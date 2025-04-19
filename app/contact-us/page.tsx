"use client";

import Header from "@/components/header";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        workEmail: "",
        phoneNumber: "",
        companyName: "",
        companyWebsite: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <div className="page-wrapper bg-gray-50">
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-12 my-40 flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                    <div className="mb-6">
                        <Image 
                            src="/logo/growthmkt-logo.png" 
                            alt="Growth Marketing Logo"
                            width={160} 
                            height={40} 
                        />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Are You Held Back by the Lack of Design & Dev Talent?</h1>
                    <p className="text-lg mb-6">
                        Schedule a 15-min discovery call with one of our outsourcing experts and learn how 
                        Growmodo can help you scale your agency or marketing team today.
                    </p>
                    <div className="mt-8">
                        <p className="font-medium mb-2">Some clients:</p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="w-24 grayscale hover:grayscale-0 transition-all">
                                <Image 
                                    src="/logos/gucci-logo.png" 
                                    alt="Gucci" 
                                    width={96} 
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-24 grayscale hover:grayscale-0 transition-all">
                                <Image 
                                    src="/logos/prada-logo.png" 
                                    alt="Prada" 
                                    width={96} 
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-24 grayscale hover:grayscale-0 transition-all">
                                <Image 
                                    src="/logos/armani-logo.png" 
                                    alt="Armani" 
                                    width={96} 
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-24 grayscale hover:grayscale-0 transition-all">
                                <Image 
                                    src="/logos/versace-logo.png" 
                                    alt="Versace" 
                                    width={96} 
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-24 grayscale hover:grayscale-0 transition-all">
                                <Image 
                                    src="/logos/valentino-logo.png" 
                                    alt="Valentino" 
                                    width={96} 
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-24 grayscale hover:grayscale-0 transition-all">
                                <Image 
                                    src="/logos/kiko-milano-logo.png" 
                                    alt="Kiko Milano" 
                                    width={96} 
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-1/2">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="workEmail" className="block mb-2">
                                    Work Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="workEmail"
                                    name="workEmail"
                                    value={formData.workEmail}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="flex">
                                    <div className="bg-gray-100 border border-gray-300 rounded-l-md p-2 flex items-center">
                                        <span className="mr-1">🇺🇸</span>
                                        <span>+1</span>
                                    </div>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="flex-1 border border-gray-300 rounded-r-md p-2"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="companyName" className="block mb-2">
                                    Company Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="companyWebsite" className="block mb-2">
                                    Company Website <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="url"
                                    id="companyWebsite"
                                    name="companyWebsite"
                                    value={formData.companyWebsite}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label className="block mb-2">
                                    Please verify yourself via CAPTCHA <span className="text-red-500">*</span>
                                </label>
                                <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                            >
                                Contact Us <span className="ml-2">→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}