import Image from "next/image";

// Define an array of brand logos with verified sources
const brands = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/100px-Zara_Logo.svg.png", alt: "Zara Logo", width: 80, height: 30 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Asos.svg/1024px-Asos.svg.png", alt: "ASOS Logo", width: 90, height: 25 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sephora_logo.svg/1024px-Sephora_logo.svg.png", alt: "Sephora Logo", width: 100, height: 20 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/150px-H%26M-Logo.svg.png", alt: "H&M Logo", width: 60, height: 30 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png", alt: "Amazon Logo", width: 95, height: 30 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/150px-Adidas_Logo.svg.png", alt: "Adidas Logo", width: 70, height: 45 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/150px-Logo_NIKE.svg.png", alt: "Nike Logo", width: 80, height: 30 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Glossier_Logo_noir.png", alt: "Glossier Logo", width: 100, height: 20 },
];

export default function TrustedBrands() {
  return (
    <div className="section-trusted">
      <div className="page-padding">
        <div className="container-normal">
          <div className="trusted_wrapper">
            <div className="w-layout-grid trusted-grid">
              <div className="trusted-content">
                <h3 className="heading-2 transition">Trusted by fast-moving <br />brands &amp; e-commerce</h3>
                <div className="inline-flex items-center justify-center mt-10">
                  <div className="mr-10">
                    <div className="text-4xl font-semibold text-blue-700">+140%</div>
                    <div className="uppercase text-base font-semibold py-2">Avg Annual Growth</div>
                  </div>
                  <div className="border-l-2 border-gray-200 mx-10"></div>
                  <div className="ml-10">
                    <div className="text-4xl font-semibold text-blue-700">+25%</div>
                    <div className="uppercase text-base font-semibold py-2">Avg Conv Rate</div>
                  </div>
                </div>
              </div>
              <div className="company_wrapper">
                <div className="w-layout-grid company-grid">
                  {/* Map over the brands array to display logos */}
                  {brands.map((brand, i) => (
                    <Image
                      key={i}
                      src={brand.src}
                      loading="lazy"
                      alt={brand.alt}
                      className="company-image" // Consider adjusting styles if needed
                      width={brand.width} // Use brand-specific width
                      height={brand.height} // Use brand-specific height
                      style={{ objectFit: 'contain' }} // Helps maintain aspect ratio within bounds
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
