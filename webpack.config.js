const path = require('path');

module.exports = {
     entry: {
         interest: './js/control_interest.js', 
         eligibility: './js/control_elig.js'},
     output: {
         path: __dirname + '/bin',
         filename: "[name].bundle.js"
     },
     module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                    presets: ['es2015']
                }
        }]
    },
    resolve: {
         modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
        extensions: [".js", ".json", ".jsx", ".css"],
    }
 };