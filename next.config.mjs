/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-dev.12t1.sbs',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.12t1.sbs',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'i.12t1.sbs',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
