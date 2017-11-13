module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nrequire(\"core-js/es7/reflect\");\n// Angular wants it\nrequire(\"zone.js/dist/zone\");\n// Styles\nrequire(\"./main.scss\");\nconst platform_browser_dynamic_1 = require(\"@angular/platform-browser-dynamic\");\nconst app_module_1 = require(\"./app/app.module\");\nrequire(\"@angular/platform-browser/animations\");\n//enableProdMode();\nplatform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)\n    .catch(err => console.log(err));\n//# sourceMappingURL=main.js.map",
dependencies: ["core-js/es7/reflect","zone.js/dist/zone","./main.scss","@angular/platform-browser-dynamic","./app/app.module","@angular/platform-browser/animations"],
sourceMap: "{\"version\":3,\"file\":\"main.js\",\"sourceRoot\":\"\",\"sources\":[\"/src/main.ts\"],\"names\":[],\"mappings\":\";;AAAA,+BAA6B;AAC7B,mBAAmB;AACnB,6BAA2B;AAC3B,SAAS;AACT,uBAAqB;AAErB,gFAA2E;AAC3E,iDAA6C;AAG7C,gDAA8C;AAE9C,mBAAmB;AACnB,iDAAsB,EAAE,CAAC,eAAe,CAAC,sBAAS,CAAC;KAC9C,KAAK,CAAC,GAAG,IAAI,OAAO,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"import 'core-js/es7/reflect';\\n// Angular wants it\\nimport 'zone.js/dist/zone';\\n// Styles\\nimport \\\"./main.scss\\\";\\n\\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\\nimport { AppModule } from './app/app.module';\\nimport { enableProdMode } from '@angular/core';\\n\\nimport '@angular/platform-browser/animations';\\n\\n//enableProdMode();\\nplatformBrowserDynamic().bootstrapModule(AppModule)\\n    .catch(err => console.log(err));\\n\"]}",
headerContent: undefined,
mtime: 1510588894407,
devLibsRequired : undefined,
_ : {}
}
