const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// 다른 os에서도 동작하도록 하기위해

module.exports = {
  mode: "development",
  //   모드
  entry: "./src/app.js",
  //   진입점
  output: {
    path: path.resolve(__dirname, "dist"),
    //디렉토리명
    filename: "bundle.js",
    // 파일 이름
  },
  //   결과물
  module: {
    rules: [
      {
        test: /\.js$/,
        //   정규식으로 매칭되는 file을 loader에게 보내줌
        exclude: /node_modules/,
        // 제외하는 경로
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
    // 규칙
  },
  // 변환과정 정의 (트랜스파일러)
  plugins: [
    new HtmlWebpackPlugin({
      title: "2.3 setup webpack & babel",
      template: "index.html",
    }),
  ],
  // 모듈에서 반환된 반환값에 후처리 (콘솔 제거 등)
  devServer: {
    port: 9999,
    compress: true,
  },
};
