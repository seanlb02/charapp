/** @type {import('next').NextConfig} */



 const withWorkbox = require("next-with-workbox");

module.exports = withWorkbox({
  workbox: {
    dest: "public",
    swDest: "sw.js",
    swSrc: "worker.js",
    force: true,
  },
});

// `next-pwa` config should be passed here
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  // disable: process.env.NODE_ENV === "development",
});

// Use `withPWA` and pass general Next.js config
module.exports = withPWA({    

  webpack5: true,
  webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
  },
  
  output: "standalone"
});

const next_config = {
  webpack: function (config, context) {
         config.watchOptions = {
             poll: 1000,
             aggregateTimeout: 300,
         };
         return config;
     },
 };

const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/300/**',
      },
    ],
  },
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'http://localhost:8000/'
      }
    ]
  }
}



module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:8000/:path*' // Proxy to Backend
      }
    ]
  }
}

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};





