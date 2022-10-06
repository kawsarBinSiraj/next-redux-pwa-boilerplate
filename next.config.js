/** @type {import('next').NextConfig} */

/**
 * description :- nextConfig
 * created_at:- 05/10/2022 16:29:28
 */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

/**
 * description :- next-pwa
 * created_at:- 05/10/2022 16:29:36
 */
const withPWA = require('next-pwa')({
	dest: 'public',
});

// module exports
module.exports = withPWA({
	nextConfig,
});
