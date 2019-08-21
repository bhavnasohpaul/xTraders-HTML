module.exports = {
  watch: true,
  entry: ['./app.js', './scss/app.scss'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          // {
					// 	loader: 'file-loader',
					// 	options: {
					// 		name: 'css/[name].css',
					// 	}
          // },
          {
            loader:'style-loader'
          },
					{
						loader: 'css-loader?-url'
					},
					{
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
					},
					{
						loader: 'sass-loader'
					}
        ]
      }
    ]
  }
};