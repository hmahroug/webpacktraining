 
var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = { 
    entry: {
        app: path.resolve((__dirname), './src/index.js'),
      }, 
    output: {
      path: path.resolve(__dirname,'./dist'),
      filename: '[name][hash].js',           
    },
    plugins:[
      new CleanWebpackPlugin({
        dry: false,
        verbose: true,
        cleanStaleWebpackAssets: false,
        protectWebpackAssets: false,
        cleanAfterEveryBuildPatterns: ["dist"],
        dangerouslyAllowCleanPatternsOutsideProject: true
      }) // supprime tous les fichiers du répertoire dist sans pour autant supprimer ce dossier
    ]
}
