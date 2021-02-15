var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.js", "./src/styles.scss"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          //"style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "public"),
    open: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "/css/[name].css",
      chunkFilename: "/css/[id].css",
    }),
  ],
};
