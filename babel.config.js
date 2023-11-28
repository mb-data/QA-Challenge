module.exports = {
  presets:[
      "@babel/preset-env",
      "@babel/preset-react",
      
      
  ],
  rules: 
    {
      
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: { presets: ['@babel/env','@babel/preset-react'] },
    }
}