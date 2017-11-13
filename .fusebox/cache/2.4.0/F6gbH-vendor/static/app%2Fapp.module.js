module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst tslib_1 = require(\"tslib\");\n//modules\nconst platform_browser_1 = require(\"@angular/platform-browser\");\nconst core_1 = require(\"@angular/core\");\nconst router_1 = require(\"@angular/router\");\n//components\nconst app_component_1 = require(\"./app.component\");\n/*import { HomepageComponent } from './pages/homepage/component';\nimport { ICComponent } from './pages/ic/component';\nimport { FooterComponent } from './parts/footer/component';\nimport { HeaderComponent } from './parts/header/component';\n*/\n//routes\nconst appRoutes = [\n    //{ path: '',               component: HomepageComponent },\n    //{ path: 'ic',             component: ICComponent },\n    { path: '**', redirectTo: '' }\n];\nlet AppModule = class AppModule {\n};\nAppModule = tslib_1.__decorate([\n    core_1.NgModule({\n        declarations: [\n            app_component_1.AppComponent,\n        ],\n        imports: [\n            platform_browser_1.BrowserModule,\n            router_1.RouterModule.forRoot(appRoutes),\n        ],\n        providers: [],\n        bootstrap: [app_component_1.AppComponent]\n    })\n], AppModule);\nexports.AppModule = AppModule;\n//# sourceMappingURL=app.module.js.map",
dependencies: ["tslib","@angular/platform-browser","@angular/core","@angular/router","./app.component"],
sourceMap: {},
headerContent: undefined,
mtime: 1510588539855,
devLibsRequired : undefined,
_ : {}
}
