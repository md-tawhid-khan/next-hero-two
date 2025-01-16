/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.themealdb.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '**',
          },
        ],
        domains: ['lh3.googleusercontent.com']
      },
      // redirects:async ()=>{
      //   return[
      //     {
      //       source: '/about',
      //       destination: '/',
      //       permanent: true,
      //     },
      //   ]
      // }
};

export default nextConfig;
