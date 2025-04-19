import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="bg-gray-900 py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-4xl text-white font-semibold antialiased">No Fluffy Strategies. Just Boost Your Growth with AI</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="flex flex-col items-start space-y-6">
                <Link href="/" aria-current="page" className="block" >
                  <h2 className="text-2xl logo-text font-bold text-white">growth mkt</h2>
                </Link>
                <Link href={process.env.BOOK_A_CALL || "#"} target="_blank" className="mt-10 px-6 py-3 text-base bg-transparent text-white border border-white hover:bg-slate-200">Book a Discovery Call</Link>
              </div>
              <div>
                <div>
                  <h6 className="text-base font-semibold text-white mb-4">Quick Links</h6>
                  <a href="/showcase" className="text-base block text-gray-300 hover:text-white py-1 transition">
                    Showcase
                  </a>
                  <a href="/pricing" className="text-base block text-gray-300 hover:text-white py-1 transition">
                    Pricing
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <h6 className="text-lg font-semibold text-white mb-4">Resources</h6>
                  <Link href="/guides" className="text-base block text-gray-300 hover:text-white py-1 transition">
                    Growth Marketing
                  </Link>
                  <a href="/products" className="text-base block text-gray-300 hover:text-white py-1 transition">
                    AI-Tool
                  </a>
                  <a href="" className="text-base block text-gray-300 hover:text-white py-1 transition">
                    FAQ
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
                  <a href="https://www.linkedin.com/company/growth-marketing-srl" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white py-1 transition">
                    <span className="text-base"><IoLogoLinkedin /></span>
                    <span className="text-base">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-700 pt-8">
              <div>
                <div className="text-gray-400 text-sm">Copyright © <span>{currentYear}</span> Growth Marketing srl. All Rights Reserved.</div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-end text-sm">
                <a title="Terms and Conditions" href="/terms-and-conditions" className="text-gray-400 hover:text-white transition">
                  Terms &amp; Conditions
                </a>
                <a title="Privacy Policy" href="/privacy-policy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
                <a title="Cookie Policy" href="/cookie-policy" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </a>
                <a title="Data Preferences" href="#data-preferences" className="text-gray-400 hover:text-white transition">
                  Data Preferences
                </a>
                <a href="/imprint" className="text-gray-400 hover:text-white transition">
                  Imprint
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
}
