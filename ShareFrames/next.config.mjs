/** @type {import('next').NextConfig} */

const nextConfig = {
    images:{
      remotePatterns: [
        {
          protocol: "https",
          hostname: "bafybeifpwdujuhkmyt5evas75uwqogzg77kveqpqsqulebnl5qjghetnvm.ipfs.w3s.link",
        }
      ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
  
};

export default nextConfig;
