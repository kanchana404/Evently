/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    images:{
       domains:['utfs.io'],
       remotePatterns: [
        {
            protocol:'https',
            hostname:'utfs.io',
            port:'',

        }
       ]
    }
};

export default nextConfig;
