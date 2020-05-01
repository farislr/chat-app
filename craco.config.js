module.exports = {
  babel: {
    presets: [
      [
        '@emotion/babel-preset-css-prop',
        {
          autoLabel: true,
          labelFormat: '[local]',
          useBuiltIns: false,
          throwIfNamespace: true,
        },
      ],
    ],
    plugins: [],
  },
  plugins: [{ plugin: require('@semantic-ui-react/craco-less') }],
}
