/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'links.papareact.com',
      'i.pinimg.com',
      'i.imgur.com',
      'wallpapercave.com'
    ]
  },
  env:{
    mapbox_key: process.env.MAPBOX_KEY
  }
};

export default nextConfig;
