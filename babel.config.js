module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
  ],
  plugins: [
    ['emotion', {
      sourceMap: true,
      autoLabel: true,
    }],
    ['module-resolver', {
      root: ['.'],
      alias: { '@': './src' },
    }],
  ],
};
