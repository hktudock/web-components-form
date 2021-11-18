const mix = require('laravel-mix');

mix.browserSync(
    {
        server: "public",
        port: 8123
    }
).js('resources/js/app.js', 'public/js')
	.postCss('resources/css/app.css', 'public/css')
    .vue()
    .sourceMaps()
;
