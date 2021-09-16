const name = 'app';

// structure
const css = '/css';
const scss = '/scss';
const js = '/js';
const media = '/media';
const fonts = '/fonts';
const docs = '/docs'
const pages = '/pages';
const plugins = '/plugins';
const videos = '/video';
const html = '/html';

const output = '../../output'
const dist = output + '/dist';
const distJs = dist + js;
const distJsPages = dist + js + pages;
const distJsPlugins = dist + js + plugins;
const distCss = dist + css
const distCssPages = dist + css + pages;
const distCssPlugins = dist + css + plugins;
const distMedia = dist + media;
const distFonts = dist + fonts;
const distDocs = dist + docs;
const distHtml = output;

// Entrypoints
const scssFile = [
    `..${css}${scss}/app.scss`,
    `!..${css}${scss}/**/_*.[scss|sass]`
];

// Sources
const sRoute = '..';
const srcScss = `${sRoute}${css}${scss}/**/*.scss`;
const srcScssPages = `${sRoute}${css}${pages}/**/*.scss`;
const srcScssPlugins = `${sRoute}${css}${plugins}/**/*.scss`;
const srcJs = `${sRoute}${js}/**/*.js`;
const srcJsPages = `${sRoute}${js}${pages}/**/*.js`;
const srcJsPlugins = `${sRoute}${js}${plugins}/**/*.js`;
const srcMedia = [`${sRoute}${media}/**/*`];
const srcDocs = [`${sRoute}${docs}/**/*.{pdf;word;xlxs}`];
const srcVideos = [`${sRoute}${videos}/**/*.{mp4;webp;mov}`];
const srcFonts = `${sRoute}${fonts}/**/*.{woff,woff2,otf,ttf,gif}`;
const srcHtml = [`${sRoute}${html}/**/*.html`];
const srcHtmlPages = [`${sRoute}${html}${pages}/**/*.html`];



module.exports = {
    output,scssFile,name,
    css,scss,js,media,fonts,docs,pages,plugins,videos,html,
    dist,distJs,distJsPages,distJsPlugins,distCss,distCssPages,distCssPlugins,distMedia,distFonts,distDocs,distHtml,
    srcScss,srcScssPages,srcScssPlugins,srcJs,srcJsPages,srcJsPlugins,srcMedia,srcDocs,srcVideos,srcFonts,srcHtml,srcHtmlPages
}

