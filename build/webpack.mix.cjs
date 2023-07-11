const mix = require('laravel-mix');

mix
  .sass('static/resources/styles/style.scss', 'style.css')
  .js('static/resources/scripts/main.js', 'main.js')
  .setPublicPath('static/dist/')
