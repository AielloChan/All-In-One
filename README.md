# All In One
用 Gulp 将 js、css、images、html 全部打包到一个 html 文件中。

如果你要将一个第三方的页面（包含许多 js、css 以及 image 资源）用作 webpack 中 htmlWebpackPlugin 的模版，这个做法会很有效：

1. 在 Google Chrme 上打开要使用的第三方页面，右键选择**保存页面**，然后选择**完整保存**（会将页内所有资源保存下来），将保存的页面放到 `src` 目录下;
2. 执行 `npm install && npm start` 后，在 dist 中便是打包好的 html 文件。