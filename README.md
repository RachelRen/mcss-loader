# mcss-loader
[MCSS] plugin for webpack

## Installation
```
npm install webpack-mcss-loader --save-dev
```

## Usage
```
module: {
  rules: [
      {
        test: /\.mcss$/,
        use: [ {
          loader: 'webpack-mcss-loader'
        } ]

      },
  ]
},
```
