# mcss-loader
[MCSS] plugin for webpack

## Installation
```
npm install mcss-loader
```

## Usage
```
module: {
  rules: [
      {
        test: /\.mcss$/,
        use: [ {
          loader: 'mcss-loader'
        } ]

      },
  ]
},
```
