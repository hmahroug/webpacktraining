var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
var ManifestPlugin = require("webpack-manifest-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
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
      new ExtractTextPlugin({
        filename: '[name].css',
        }),
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
    module: {
      rules: [
        {
          test: /\.json$/,
          // loader: 'json-loader'
          loader: 'raw-loader'
        },
        {
          test: /\.css$/,
           use: ExtractTextPlugin.extract({
             fallback: "style-loader",
             use: ["css-loader","postcss-loader"]
           })
        },
        {
          test: /\.less$/,
           use: ExtractTextPlugin.extract({
             fallback: "style-loader",
             use: ["css-loader","postcss-loader",'less-loader']
           })
        },
        {
          test: /\.(jpg|png|svg)$/,
          // loader: "file-loader",
          // options: {
          //   name: "[name].[hash].[ext]",
          //   outputPath: "images"
          // }
          use: [
  
              { loader: 'file-loader',
              options: {
                  outputPath: "images",
                 // name: "[name].[hash].[ext]",
                 name(file) {
                 //    console.log("-->Env:", process.env.NODE_ENV);
                    console.log("--> --> Env:",mode);
                  if (mode === 'development') {
                    return 'A-[path][name].[ext]';
                  }
  
                  return 'B-[contenthash].[ext]';
                },
              }},
              {
                loader: 'image-webpack-loader',
                options: {
  
                  mozjpeg: {
                    progressive: true,
                    quality: 100
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  // the webp option will enable WEBP
                  webp: {
                    quality: 100
                  }
                }
              },
            ],
        },
        {
                   test: /\.(woff|woff2|eot|ttf|otf)$/,
                   use: [
                      'file-loader',
                    ],
                 },
        // {
        //           test: /\.(png|svg|jpg|gif)$/,
        //            use: [
        //              'file-loader',
        //            ],
        //          },
        //{ test: /\.less$/i, loader: extractLESS.extract(['css-loader','less-loader'])},
        // {
        //   test: /\.less$/,
        //   use: [
        //     {
        //       loader: 'style-loader', // creates style nodes from JS strings
        //     },
        //     {
        //       loader: 'css-loader', // translates CSS into CommonJS
        //     },
        //     {
        //       loader: 'less-loader', // compiles Less to CSS
        //     },
        //   ],
        // },
      ]
    }
  };
};

const productionConfig = mode => commonConfig(mode);
const developmentConfig = mode => {
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
    }
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
