var paths = require('./constants');

var name = '/starter'
var nodeModules = './node_modules/';

var jsFiles =  [
    `${nodeModules}jquery/dist/jquery.min.js`,
    `${nodeModules}popper.js/dist/umd/popper.min.js`,
    `${nodeModules}bootstrap/dist/js/bootstrap.min.js`,
    `${nodeModules}slick-carousel/slick/slick.min.js`,
    `${nodeModules}bootstrap-select/dist/js/bootstrap-select.min.js`,
    `..${paths.js}/app/vendors/**/*.js`,
    `..${paths.js}/app/common/**/*.js`,
]

var pluginFiles = [
    `${nodeModules}sweetalert2/dist/sweetalert2.min.js`,
]


//dynamic export
var others = [
    {
        file:[
            `${nodeModules}slick-carousel/slick/ajax-loader.gif`,
            `${nodeModules}slick-carousel/slick/fonts/**/*`
        ],
        dist:paths.distFonts + '/slick',
    },
    {
        file:[
            `${nodeModules}bootstrap-icons/font/fonts/**/**`,
        ],
        dist:paths.distFonts + '/bi',
    },
]

module.exports = {
    name,jsFiles,pluginFiles,others
}