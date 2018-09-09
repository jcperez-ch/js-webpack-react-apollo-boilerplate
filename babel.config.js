module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ["emotion", { "sourceMap": true, "autoLabel": true }],
    ['module-resolver', {
      root: ['.'],
      alias: { '@': './src' }
    }]
  ]
};
