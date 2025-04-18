import Image from "next/image";
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
              <div className="max-w-4xl">
                <h2 className="text-4xl md:text-6xl text-white font-semibold antialiased">No Fluffy Strategies. Just Boost Your Growth with AI</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="flex flex-col items-start space-y-6">
                <Link href="/" aria-current="page" className="block" >
                  <Image src="/logo/growthmkt-logo.png" width={512} height={512} loading="lazy" alt="Logo Growth Marketing" className="w-40" />
                </Link>
                <Link href={process.env.BOOK_A_CALL || "#"} target="_blank" className="mt-10 px-6 py-3 bg-slate-100 font-semibold text-black rounded shadow hover:bg-slate-200 transition">Book a Discovery Call</Link>
              </div>
              <div>
                <div>
                  <h6 className="text-lg font-semibold text-white mb-4">Quick Links</h6>
                  <a href="/talents" className="block text-gray-300 hover:text-white py-1 transition">
                    Talents
                  </a>
                  <a href="/showcase" className="block text-gray-300 hover:text-white py-1 transition">
                    Showcase
                  </a>
                  <a href="/pricing" className="block text-gray-300 hover:text-white py-1 transition">
                    Pricing
                  </a>
                  <a href="https://www.careers.growmodo.com/" target="_blank" className="block text-gray-300 hover:text-white py-1 transition">
                    Careers
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <h6 className="text-lg font-semibold text-white mb-4">Resources</h6>
                  <Link href="/guides" className="block text-gray-300 hover:text-white py-1 transition">
                    Reica
                  </Link>
                  <a href="/products" className="block text-gray-300 hover:text-white py-1 transition">
                    AI-Tool
                  </a>
                  <a href="https://help.growmodo.com/growmodo/hSJAVvZpApN9LerBNa9fs9" target="_blank" className="block text-gray-300 hover:text-white py-1 transition">
                    FAQ
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
                  <a href="https://www.linkedin.com/company/growth-marketing-srl" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white py-1 transition">
                    <span className="text-2xl"><IoLogoLinkedin /></span>
                    <span>LinkedIn</span>
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
      
      <div className="bg-gray-900 py-8 md:hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <Link href="/" aria-current="page" className="block">
                <Image src="/logo/logo-icon-64x64.png" width={64} height={32} loading="lazy" alt="Reica Logo" className="w-16" />
              </Link>
              <div className="text-gray-400 text-xs">© <span>{currentYear}</span> Reica. All Rights Reserved.</div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-xs">
                <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition">
                  Terms &amp; Conditions
                </a>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="/cookie-policy" className="text-gray-400 hover:text-white transition">
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
