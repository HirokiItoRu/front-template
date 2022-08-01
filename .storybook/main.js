const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: ["../public"],
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": path.resolve(__dirname, "../components"),
      "@/contexts": path.resolve(__dirname, "../contexts"),
      "@/hooks": path.resolve(__dirname, "../hooks"),
      "@/pages": path.resolve(__dirname, "../pages"),
      "@/styles": path.resolve(__dirname, "../styles"),
      "@/mocks": path.resolve(__dirname, "../mocks"),
    };
    return {
      ...config,
      resolve: {
          ...config.resolve,
          alias: {
              ...config.resolve.alias,
          },
      },
    };
  }
}