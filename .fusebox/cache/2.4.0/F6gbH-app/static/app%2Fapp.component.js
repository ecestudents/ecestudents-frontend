module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst tslib_1 = require(\"tslib\");\nconst core_1 = require(\"@angular/core\");\nlet AppComponent = class AppComponent {\n};\nAppComponent = tslib_1.__decorate([\n    core_1.Component({\n        selector: 'app-root',\n        templateUrl: require('./app.component.html'),\n    })\n], AppComponent);\nexports.AppComponent = AppComponent;\n//# sourceMappingURL=app.component.js.map",
dependencies: ["tslib","@angular/core","./app.component.html"],
sourceMap: "{\"version\":3,\"file\":\"app/app.component.js\",\"sourceRoot\":\"\",\"sources\":[\"/src/app/app.component.ts\"],\"names\":[],\"mappings\":\";;;AAAA,wCAAkD;AAOlD,IAAa,YAAY,GAAzB;CAWC,CAAA;AAXY,YAAY;IAJxB,gBAAS,CAAC;QACT,QAAQ,EAAE,UAAU;QACpB,WAAW,EAAE,OAAO,CAAC,sBAAsB,CAAC;KAC7C,CAAC;GACW,YAAY,CAWxB;AAXY,oCAAY\",\"sourcesContent\":[\"import { Component, OnInit } from '@angular/core';\\nimport { Router, NavigationEnd } from '@angular/router';\\n\\n@Component({\\n  selector: 'app-root',\\n  templateUrl: require('./app.component.html'),\\n})\\nexport class AppComponent implements OnInit {/*\\n  constructor(private router: Router) {} \\n\\n     ngOnInit() {\\n         this.router.events.subscribe((evt) => {\\n             if (!(evt instanceof NavigationEnd)) {\\n                 return;\\n             }\\n             document.body.scrollTop = 0;\\n         });\\n     }*/\\n}\\n \\n \"]}",
headerContent: undefined,
mtime: 1510588457147,
devLibsRequired : undefined,
_ : {}
}
