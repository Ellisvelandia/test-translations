/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = require("next-intl/plugin")(
  // Update the file name to i18n.js
  "./i18n.js"
);

module.exports = withNextIntl({
  nextConfig,
});
