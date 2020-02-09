 
var path = require("path");
module.exports = { 
    entry: {
        app: path.resolve((__dirname), './src/index.js'),
      }, 
    output: {
      path: path.resolve(__dirname,'./dist'),
      filename: '[name].js',           
    },
}
