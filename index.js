const plugins = [
  "@babel/plugin-proposal-function-bind",
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-transform-react-display-name",
  "@babel/plugin-proposal-logical-assignment-operators",
  [
    "@babel/plugin-proposal-optional-chaining",
    {
      loose: false,
    },
  ],
  [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    {
      loose: false,
    },
  ],
  "@babel/plugin-proposal-do-expressions",
  [
    "@babel/plugin-proposal-decorators",
    {
      legacy: true,
    },
  ],
  "@babel/plugin-proposal-function-sent",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-numeric-separator",
  "@babel/plugin-proposal-throw-expressions",
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-syntax-import-meta",
  [
    "@babel/plugin-proposal-class-properties",
    {
      loose: false,
    },
  ],
  "@babel/plugin-proposal-json-strings",
  "transform-undefined-to-void",
];

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions"],
        },
        modules: false,
        shippedProposals: true,
      },
    ],
    [
      "@babel/preset-react",
      {
        throwIfNamespace: true,
        runtime: "automatic",
      },
    ],
  ],

  plugins,

  env: {
    development: {
      plugins: [...plugins],
    },
    production: {
      plugins: [
        ...plugins,
        [
          "transform-react-remove-prop-types",
          {
            mode: "wrap",
          },
        ],
      ],
    },
    test: {
      plugins: [...plugins, "babel-plugin-transform-es2015-modules-commonjs"],
    },
  },
};
