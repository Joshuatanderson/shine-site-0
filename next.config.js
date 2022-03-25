/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    rules: {
        "react/no-unescaped-entities": "off",
        ignoreBuildErrors: "true",
    },
};

module.exports = nextConfig;
