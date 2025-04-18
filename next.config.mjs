/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BOOK_A_CALL: "https://cal.com/growthmkt/first-call",
    },
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.prod.website-files.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "logowik.com",
                port: "",
                pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
