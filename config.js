export default {
    server: {
        port: 8000
    },
    dir: {
        srcDir: __dirname + '/src/',
        buildDir: './__build__/',
        distDir: __dirname + '/dist/',
        cssDir: 'css/',
        imgDir: 'img/',
        jsDir: 'js/',
        sassDir: 'sass/',
        fontsDir: 'fonts/'
    },
    fonts: {
        formats: 'woff woff2',
        custom: {
            'Open Sans': [400, 600],
            'Tungsten': [700]            
        }
    },
    css: {
        autoprefixer: ['last 5 versions','> 98%']
    },
    javascript: {
        entry: ['index.js'],
        babel: { presets: ['es2015', 'stage-0'] }
    }
};
