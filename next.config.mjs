/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
            protocol: "https",
            hostname: "cdn.prod.website-files.com",
            port: "",
            pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
