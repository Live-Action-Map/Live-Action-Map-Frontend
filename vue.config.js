// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://10.2.0.30:25568",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
