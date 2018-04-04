const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        loader: require.resolve("file-loader"),
        query: {
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "hig-react": path.resolve(
        __dirname,
        "../../packages/react/src/hig-react.js"
      ),
      "hig-vanilla": path.resolve(
        __dirname,
        "../../packages/vanilla/src/index.js"
      )
    }
  }
};
