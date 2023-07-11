const mix = require('laravel-mix');

mix
  .sass('static/resources/styles/style.scss', 'style.css')
  .js('static/resources/scripts/main.js', 'main.js')
  .js('static/resources/scripts/product.js', 'product.js')
  .js('static/resources/scripts/vendor.js', 'vendor.js')
  .setPublicPath('static/dist/')
