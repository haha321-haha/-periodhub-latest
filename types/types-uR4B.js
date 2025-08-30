// next.config.js
const isStaticExport = process.env.STATIC_EXPORT === "true";

if (isStaticExport) {
    console.log("⚠️ Static Export Mode: Redirects are disabled");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: isStaticExport? "export" : undefined,
    reactStrictMode: true,
    images: {
        unoptimized: true,
        domains: ["images.unsplash.com"]
    },
    trailingSlash: true,
    async redirects() {
        if (isStaticExport) {
            return [];
        }

        return process.env.NODE_ENV === "production"
           ? [
                {
                    source: "/",
                    destination: "/directory",
                    permanent: false
                }
            ]
            : [];
    }
};

module.exports = nextConfig;