module.exports = {
  css: { sourceMap: true },
  productionSourceMap: true,
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      maximumFileSizeToCacheInBytes: 500000,  
      exclude: [/\.gitkeep/, /.(?:png|jpg|jpeg|svg|txt|json)$/],
      runtimeCaching: [
        {
          // Match any request ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /.(?:png|jpg|jpeg|svg|txt|json)$/,
          // Apply a cache-first strategy.
          handler: "CacheFirst",
          options: {
            // Use a custom cache name.
            cacheName: "images"
          }
        }
      ]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}