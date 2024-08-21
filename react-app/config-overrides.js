const { override, addWebpackResolve } = require('customize-cra');

module.exports = override(
    addWebpackResolve({
        fallback: {
            "buffer": require.resolve("buffer"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util"),
            "url": require.resolve("url"),
            "https": require.resolve("https-browserify"),
            "querystring": require.resolve("querystring-es3"),
            "http": require.resolve("stream-http"),
            "os": require.resolve("os-browserify/browser"),
            "path": require.resolve("path-browserify"),
            "assert": require.resolve("assert")
        }
    })
);
