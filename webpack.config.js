var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
var ManifestPlugin = require('webpack-manifest-plugin');
const commonConfig = mode => {
  return {
    entry: {
      app: path.resolve(__dirname, "./src/index.js")
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name][hash].js"
    },
    plugins: [
      new ManifestPlugin(),
      new CleanWebpackPlugin({
        dry: false,
        verbose: true,
        cleanStaleWebpackAssets: false,
        protectWebpackAssets: false,
        cleanAfterEveryBuildPatterns: ["dist"],
        dangerouslyAllowCleanPatternsOutsideProject: true
      }), // supprime tous les fichiers du répertoire dist sans pour autant supprimer ce dossier
      new HtmlWebpackPlugin({
        hash: false,
        title: "Formation Webpack à ADP",
        entetedepage: "Bienvenue à la formation",
        template: path.resolve(__dirname, "index.html"),
        filename: path.resolve(__dirname, "./dist/index.html") //relative to root of the application
      })      
    ],
    
  };
};

const productionConfig = (mode) => commonConfig(mode);
const developmentConfig = (mode) => {
  const config = {

    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. Good for complex setups.
      historyApiFallback: true,
      // Display only errors to reduce the amount of output.
      stats: "errors-only",
      // Parse host and port from env to allow customization.
      //
      // If you use Docker, Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: "localhost", // process.env.HOST, // Defaults to `localhost`
      port: 8084, // process.env.PORT, // Defaults to 8080
      // overlay: true captures only errors
      overlay: {
        errors: true,
        warnings: true
      }
    },
  };
  return Object.assign({}, commonConfig(mode), config);
};

module.exports = (env, argv) => {
  //console.log('---> env',env , "--->__dirname:",__dirname ,'process:',JSON.stringify(process.env));
  if (argv.mode === "production") {
    console.log("---> production");
    return productionConfig(argv.mode);
   
  }
  // console.log('---> dev',argv.mode);
  return developmentConfig(argv.mode);
};
