const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: false,
    };

    // Important: return the modified config
    return config;
  },
};
