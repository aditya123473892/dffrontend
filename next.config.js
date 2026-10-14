const path = require('path');
const tsconfig = require('./tsconfig.json');
const { paths } = tsconfig.compilerOptions;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'backend.matchcare.nl',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Add aliases from tsconfig paths
    if (paths) {
      Object.keys(paths).forEach(key => {
        // key could be like '@/*' or '@/'
        // The value is an array of strings, e.g. ['./src/*']
        // We need to convert to a proper alias
        const aliasPath = paths[key][0];
        // Replace '*' with '' to get the directory
        const alias = path.resolve(__dirname, aliasPath.replace('/*', ''));
        config.resolve.alias[key] = alias;
      });
    }
    return config;
  },
};

module.exports = nextConfig;
