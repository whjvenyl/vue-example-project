webpackJsonp([1],{"/AdF":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("n0Nb"),n=e("MsOJ"),i=e("VU/8"),l=i(a.a,n.a,null,null,null);t.default=l.exports},DccK:function(s,t,e){"use strict";var a=e("c/Tr"),n=e.n(a);t.a={name:"pwa-configuration",mounted:function(){var s=this,t=n()(document.getElementsByClassName("title")),e=t.filter(function(t){return t.innerHTML===s.$route.query.title})[0];e?e.scrollIntoView():scroll(0,0)},data:function(){return{}},methods:{}}},MsOJ:function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("back-nav",{attrs:{title:"ESLint"}}),s._m(0)],1)},n=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[s._v("In this section of the tutorial we'll discuss linting with ESLint...")]),e("div",{staticClass:"title is-4"},[s._v("Configure ESLint")]),e("div",{staticClass:"content"},[s._v("Most projects I've seen prefer the "),e("a",{attrs:{href:"https://standardjs.com/"}},[s._v("Standard")]),s._v(' preset (aka "The one without semicolons") so I\'ve selected that for this example project.\nVue also has some recommended rules that you can add via the beta '),e("code",[s._v("eslint-plugin-vue")]),s._v(" , but I did not use this plugin yet because unfortunately Pug templates are not working at the moment (see "),e("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/issues/165"}},[s._v("issue #165")]),s._v(").")]),e("div",{staticClass:"content"},[s._v("Now open up your "),e("code",[s._v("eslintrc.js ")]),s._v("file and you'll see what Vue cli generated for this project:")]),e("strong",{staticClass:"app-italic"},[s._v("eslintrc.js ")]),e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs javascript"},[e("span",{staticClass:"hljs-comment"},[s._v("// http://eslint.org/docs/user-guide/configuring")]),s._v("\n\n"),e("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".exports = {\n  root: "),e("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n  parser: "),e("span",{staticClass:"hljs-string"},[s._v("'babel-eslint'")]),s._v(",\n  parserOptions: {\n    sourceType: "),e("span",{staticClass:"hljs-string"},[s._v("'module'")]),s._v("\n  },\n  env: {\n    browser: "),e("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n  },\n  "),e("span",{staticClass:"hljs-comment"},[s._v("// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style")]),s._v("\n  extends: "),e("span",{staticClass:"hljs-string"},[s._v("'standard'")]),s._v(",\n  "),e("span",{staticClass:"hljs-comment"},[s._v("// required to lint *.vue files")]),s._v("\n  plugins: [\n    "),e("span",{staticClass:"hljs-string"},[s._v("'html'")]),s._v("\n  ],\n  "),e("span",{staticClass:"hljs-comment"},[s._v("// add your custom rules here")]),s._v("\n  "),e("span",{staticClass:"hljs-string"},[s._v("'rules'")]),s._v(": {\n    "),e("span",{staticClass:"hljs-comment"},[s._v("// allow paren-less arrow functions")]),s._v("\n    "),e("span",{staticClass:"hljs-string"},[s._v("'arrow-parens'")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n    "),e("span",{staticClass:"hljs-comment"},[s._v("// allow async-await")]),s._v("\n    "),e("span",{staticClass:"hljs-string"},[s._v("'generator-star-spacing'")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n    "),e("span",{staticClass:"hljs-comment"},[s._v("// allow debugger during development")]),s._v("\n    "),e("span",{staticClass:"hljs-string"},[s._v("'no-debugger'")]),s._v(": process.env.NODE_ENV === "),e("span",{staticClass:"hljs-string"},[s._v("'production'")]),s._v(" ? "),e("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(" : "),e("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n  }\n}\n")])]),e("div",{staticClass:"content"},[e("ul",[e("li",[s._v(" The parser is Babel's ESLint plugin (we'll talk about Babel and its configuration later in this tutorial).\nWe're using the "),e("code",[s._v("Standard")]),s._v(" preset.")]),e("li",[e("code",[s._v("env.browser")]),s._v("to true so we can use browser globals (such as "),e("code",[s._v("window")]),s._v(" or "),e("code",[s._v("localStorage")]),s._v(") and the linter will not complain that it is undefined. ")]),e("li",[s._v(" Some small customizations added.")])])]),e("div",{staticClass:"title is-6"},[s._v("ESLint Ignore File")]),e("div",{staticClass:"content"},[s._v("You can tell ESLint to "),e("a",{attrs:{href:"http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories"}},[s._v("ignore specific files and directories")]),s._v(" by using an "),e("code",[s._v(".eslintignore ")]),s._v("file in your project’s root directory: ")]),e("strong",{staticClass:"app-italic"},[s._v(".eslintignore")]),e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs"},[s._v("build/"),e("span",{staticClass:"hljs-keyword"},[s._v("*")]),s._v(".js\nconfig/"),e("span",{staticClass:"hljs-keyword"},[s._v("*")]),s._v(".js")])])])])}],i={render:a,staticRenderFns:n};t.a=i},XgH4:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("DccK"),n=e("eXBR"),i=e("VU/8"),l=i(a.a,n.a,null,null,null);t.default=l.exports},eXBR:function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("back-nav",{attrs:{title:"PWA Configuration"}}),s._m(0)],1)},n=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[s._v("In this section of the tutorial we'll discuss what's involved in a PWA...")]),e("div",{staticClass:"title is-4"},[s._v("Understanding PWA")]),e("div",{staticClass:"content"},[s._v("There's lots of information available on the Web about PWA's so I won't try to duplicate that\nhere. Here's some of the links you can take a look at:  "),e("ul",[e("li",[e("a",{attrs:{href:"https://developers.google.com/web/progressive-web-apps/"}},[s._v("Google Main Page for PWA")])]),e("li",[e("a",{attrs:{href:"https://developers.google.com/web/progressive-web-apps/checklist"}},[s._v("Google's PWA checklist")])]),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/Apps/Progressive"}},[s._v("PWA on MDN")])])])]),e("div",{staticClass:"content"},[s._v("In summary, a PWA is an app that can easily be added to the homescreen and used without a browser bar.  \nPWA's can also be tuned to do more offline. The app feels and acts more like a Native app.  ")]),e("div",{staticClass:"title is-4"},[s._v("The Manifest")]),e("div",{staticClass:"content"},[s._v("The Manifest file is used to configure your PWA (not to be confused with your \nWebpack Chunk Manifest file). The file gets copied from your "),e("code",[s._v("static")]),s._v("folder (and also the icons in "),e("code",[s._v("static/img/")]),s._v(" ):")]),e("strong",{staticClass:"app-italic"},[s._v("static/manifest.json ")]),e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs javascript"},[s._v("{\n  "),e("span",{staticClass:"hljs-string"},[s._v('"name"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"vue-example-project"')]),s._v(",\n  "),e("span",{staticClass:"hljs-string"},[s._v('"short_name"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"example"')]),s._v(",\n  "),e("span",{staticClass:"hljs-string"},[s._v('"icons"')]),s._v(": [\n    {\n      "),e("span",{staticClass:"hljs-string"},[s._v('"src"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"/vue-example-project/static/img/icons/android-chrome-192x192.png"')]),s._v(",\n      "),e("span",{staticClass:"hljs-string"},[s._v('"sizes"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"192x192"')]),s._v(",\n      "),e("span",{staticClass:"hljs-string"},[s._v('"type"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"image/png"')]),s._v("\n    },\n    {\n      "),e("span",{staticClass:"hljs-string"},[s._v('"src"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"/vue-example-project/static/img/icons/android-chrome-512x512.png"')]),s._v(",\n      "),e("span",{staticClass:"hljs-string"},[s._v('"sizes"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"512x512"')]),s._v(",\n      "),e("span",{staticClass:"hljs-string"},[s._v('"type"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"image/png"')]),s._v("\n    }\n  ],\n  "),e("span",{staticClass:"hljs-string"},[s._v('"start_url"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"/vue-example-project/"')]),s._v(",\n  "),e("span",{staticClass:"hljs-string"},[s._v('"scope"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"/vue-example-project/"')]),s._v(",\n  "),e("span",{staticClass:"hljs-string"},[s._v('"display"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"standalone"')]),s._v(",\n  "),e("span",{staticClass:"hljs-string"},[s._v('"background_color"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"#000000"')]),s._v(",\n  "),e("span",{staticClass:"hljs-string"},[s._v('"theme_color"')]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v('"#00d1b2"')]),s._v("\n}\n")])]),e("div",{staticClass:"title is-4"},[s._v("The Service Worker")]),e("div",{staticClass:"content"},[s._v("The Service Worker allows for offline mode and is generated by the Webpack plugin: ")]),e("strong",{staticClass:"app-italic"},[s._v("build/webpack.prod.conf.js ")]),e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs javascript"},[e("span",{staticClass:"hljs-comment"},[s._v("// ...")]),s._v("\n\n  plugins: [\n\n    "),e("span",{staticClass:"hljs-comment"},[s._v("// ...")]),s._v("\n\n    "),e("span",{staticClass:"hljs-comment"},[s._v("// service worker caching")]),s._v("\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" SWPrecacheWebpackPlugin({\n      cacheId: "),e("span",{staticClass:"hljs-string"},[s._v("'vue-example-project'")]),s._v(",   "),e("span",{staticClass:"hljs-comment"},[s._v("// <-- Update this id for your app.")]),s._v("\n      filename: "),e("span",{staticClass:"hljs-string"},[s._v("'service-worker.js'")]),s._v(",\n      staticFileGlobs: ["),e("span",{staticClass:"hljs-string"},[s._v("'dist/**/*.{js,html,css}'")]),s._v("],\n      minify: "),e("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n      stripPrefix: "),e("span",{staticClass:"hljs-string"},[s._v("'dist/'")]),s._v("\n    })\n")])]),e("div",{staticClass:"content"},[s._v("After you "),e("code",[s._v("npm run build")]),s._v(" for production you'll see it appear in your "),e("code",[s._v("/dist")]),s._v("folder.")]),e("div",{staticClass:"title is-4"},[s._v("The View Port")]),e("div",{staticClass:"content"},[s._v("The proper view port (so that both desktop and mobile devices scale correctly) has been set\nvia a meta tag in "),e("code",[s._v("index.html")])]),e("strong",{staticClass:"app-italic"},[s._v("index.html")]),e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs html"},[e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-title"},[s._v("meta")]),s._v(" "),e("span",{staticClass:"hljs-attribute"},[s._v("name")]),s._v("="),e("span",{staticClass:"hljs-value"},[s._v('"viewport"')]),s._v(" "),e("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v("="),e("span",{staticClass:"hljs-value"},[s._v('"width=device-width, initial-scale=1"')]),s._v(">")]),s._v("\n")])]),e("div",{staticClass:"title is-4"},[s._v("Setting Up HTTPS")]),e("div",{staticClass:"content"},[s._v("To take full advantage of a PWA (so that mobile devices will correctly consider your app a PWA\nand service works can work) \nyou will need to serve your app over HTTPS.")]),e("div",{staticClass:"title is-6"},[s._v("Create your own Self-Signed SSL for testing on your localhost")]),e("div",{staticClass:"content"},[s._v("You can read how to set up SSL on your localhost nginx server here: "),e("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04"}},[s._v("https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04")]),s._v(".")]),e("div",{staticClass:"title is-6"},[s._v("CloudFlare Free HTTPS ")]),e("div",{staticClass:"content"},[s._v("CloudFlare offers free HTTPS. Here are the steps you'll need to take: "),e("ul",[e("li",[s._v(" 1. Make sure you setup your-name.github.io to allow for your-custom-domain. You'll go\nto settings in your-name.github.io repo and add www.your-custom-domain.com there. You'll\nalso need to add a file named "),e("code",[s._v("CNAME ")]),s._v("that contains www.your-custom-domain.com.")]),e("li",[s._v("2. Sign up for free CloudFlare account for www.your-custom-domain.com. ")]),e("li",[s._v("3. Go to CloudFlares DNS tab: ")]),e("ul",[e("li",[s._v(" 3.1 Copy CloudFlare's nameservers and go to your registrar (where you purchased your-custom-domain)\nand add them there so your registrar will now point to CloudFlare's NameServers to resolve.")]),e("li",[s._v(" 3.2 Add a flat CNAME rule, for example: "),e("code",[s._v("CNAME * your-name.github.io")]),s._v(" .")])]),e("li",[s._v(' 4. Make sure you have turned on SSL. See the section "Domain Summary" in the Overview tab. \nMake sure you have it set for '),e("code",[s._v("full")]),s._v(" .")]),e("li",[s._v(" 5. Go to CloudFlare's Page Rules tab and add the rule "),e("code",[s._v("http://*.your-custom-domain.com/* ")]),s._v("with settings as "),e("code",[s._v("Always Use HTTPS")])]),e("li",[s._v("6. Wait for a few hours (up to 24) and then Github should pick it up and it should work.")]),e("li",[s._v('7. Turn off CloudFlare cacheing temporarily by turning on "Dev" mode so you can see changes immediately reflected online.')])])]),e("div",{staticClass:"title is-4"},[s._v("Install Banners and Add to Home Screen")]),e("div",{staticClass:"content"},[s._v('You can read about install banners and "Add to Home Screen" here (includes notes on "testing"\nfor them as well): '),e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/"}},[s._v(" https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/")]),s._v("Basically, it's just a popup indication from the mobile device that allows users to more easily\nadd your app to their homescreen (allows for shortcut and opens without a browser bar).\nThe restrictions are: "),e("ul",[e("li",[s._v("Has a web app manifest file with:")]),e("ul",[e("li",[s._v("a short_name (used on the home screen)")]),e("li",[s._v("a name (used in the banner)")]),e("li",[s._v("a 144x144 png icon (the icon declarations must include a mime type of image/png)")]),e("li",[s._v("a start_url that loads")])]),e("li",[s._v("Has a service worker registered on your site.")]),e("li",[s._v("Is served over HTTPS (a requirement for using service worker).")]),e("li",[s._v("Is visited at least twice, with at least five minutes between visits.")])])]),e("strong",{staticClass:"app-italic"},[s._v("index.html")]),e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs html"},[e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-title"},[s._v("meta")]),s._v(" "),e("span",{staticClass:"hljs-attribute"},[s._v("name")]),s._v("="),e("span",{staticClass:"hljs-value"},[s._v('"viewport"')]),s._v(" "),e("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v("="),e("span",{staticClass:"hljs-value"},[s._v('"width=device-width, initial-scale=1"')]),s._v(">")])])])])])}],i={render:a,staticRenderFns:n};t.a=i},n0Nb:function(s,t,e){"use strict";var a=e("c/Tr"),n=e.n(a);t.a={name:"editors",mounted:function(){var s=this,t=n()(document.getElementsByClassName("title")),e=t.filter(function(t){return t.innerHTML===s.$route.query.title})[0];e?e.scrollIntoView():scroll(0,0)},data:function(){return{}},methods:{}}}});
//# sourceMappingURL=eslint.0fca23bc410448d535bf.js.map