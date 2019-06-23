const presets = [
  [
    "@babel/env",
    {
      targets: {
        node: true,
        browsers: "defaults"
      },
      useBuiltIns: "usage",
      corejs: 3
    }
  ]
];

module.exports = { presets };
