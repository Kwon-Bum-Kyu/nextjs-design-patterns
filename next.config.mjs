/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/flux",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
