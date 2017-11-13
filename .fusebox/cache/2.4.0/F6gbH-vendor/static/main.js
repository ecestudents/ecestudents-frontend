module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nrequire(\"core-js/es7/reflect\");\n// Angular wants it\nrequire(\"zone.js/dist/zone\");\n// Styles\nrequire(\"./main.scss\");\nconst platform_browser_dynamic_1 = require(\"@angular/platform-browser-dynamic\");\nconst app_module_1 = require(\"./app/app.module\");\nrequire(\"@angular/platform-browser/animations\");\n//enableProdMode();\nplatform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)\n    .catch(err => console.log(err));\n",
dependencies: ["core-js/es7/reflect","zone.js/dist/zone","./main.scss","@angular/platform-browser-dynamic","./app/app.module","@angular/platform-browser/animations"],
sourceMap: {},
headerContent: undefined,
mtime: 1510588894407,
devLibsRequired : undefined,
_ : {}
}
