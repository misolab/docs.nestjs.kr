(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-pages-faq-faq-module"],{

/***/ "./src/app/homepage/pages/faq/faq.module.ts":
/*!**************************************************!*\
  !*** ./src/app/homepage/pages/faq/faq.module.ts ***!
  \**************************************************/
/*! exports provided: FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _global_prefix_global_prefix_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-prefix/global-prefix.component */ "./src/app/homepage/pages/faq/global-prefix/global-prefix.component.ts");
/* harmony import */ var _http_adapter_http_adapter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-adapter/http-adapter.component */ "./src/app/homepage/pages/faq/http-adapter/http-adapter.component.ts");
/* harmony import */ var _hybrid_application_hybrid_application_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hybrid-application/hybrid-application.component */ "./src/app/homepage/pages/faq/hybrid-application/hybrid-application.component.ts");
/* harmony import */ var _multiple_servers_multiple_servers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multiple-servers/multiple-servers.component */ "./src/app/homepage/pages/faq/multiple-servers/multiple-servers.component.ts");
/* harmony import */ var _request_lifecycle_request_lifecycle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-lifecycle/request-lifecycle.component */ "./src/app/homepage/pages/faq/request-lifecycle/request-lifecycle.component.ts");











const routes = [
    {
        path: 'global-prefix',
        component: _global_prefix_global_prefix_component__WEBPACK_IMPORTED_MODULE_4__["GlobalPrefixComponent"],
        data: { title: 'Global prefix - FAQ' },
    },
    {
        path: 'hybrid-application',
        component: _hybrid_application_hybrid_application_component__WEBPACK_IMPORTED_MODULE_6__["HybridApplicationComponent"],
        data: { title: 'Hybrid application - FAQ' },
    },
    {
        path: 'multiple-servers',
        component: _multiple_servers_multiple_servers_component__WEBPACK_IMPORTED_MODULE_7__["MultipleServersComponent"],
        data: { title: 'HTTPS & Multiple Servers - FAQ' },
    },
    {
        path: 'http-adapter',
        component: _http_adapter_http_adapter_component__WEBPACK_IMPORTED_MODULE_5__["HttpAdapterComponent"],
        data: { title: 'HTTP adapter - FAQ' },
    },
    {
        path: 'request-lifecycle',
        component: _request_lifecycle_request_lifecycle_component__WEBPACK_IMPORTED_MODULE_8__["RequestLifecycleComponent"],
        data: { title: 'Request lifecycle - FAQ' },
    },
];
class FaqModule {
}
FaqModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: FaqModule });
FaqModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function FaqModule_Factory(t) { return new (t || FaqModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](FaqModule, { declarations: [_global_prefix_global_prefix_component__WEBPACK_IMPORTED_MODULE_4__["GlobalPrefixComponent"],
        _hybrid_application_hybrid_application_component__WEBPACK_IMPORTED_MODULE_6__["HybridApplicationComponent"],
        _multiple_servers_multiple_servers_component__WEBPACK_IMPORTED_MODULE_7__["MultipleServersComponent"],
        _http_adapter_http_adapter_component__WEBPACK_IMPORTED_MODULE_5__["HttpAdapterComponent"],
        _request_lifecycle_request_lifecycle_component__WEBPACK_IMPORTED_MODULE_8__["RequestLifecycleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](FaqModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                declarations: [
                    _global_prefix_global_prefix_component__WEBPACK_IMPORTED_MODULE_4__["GlobalPrefixComponent"],
                    _hybrid_application_hybrid_application_component__WEBPACK_IMPORTED_MODULE_6__["HybridApplicationComponent"],
                    _multiple_servers_multiple_servers_component__WEBPACK_IMPORTED_MODULE_7__["MultipleServersComponent"],
                    _http_adapter_http_adapter_component__WEBPACK_IMPORTED_MODULE_5__["HttpAdapterComponent"],
                    _request_lifecycle_request_lifecycle_component__WEBPACK_IMPORTED_MODULE_8__["RequestLifecycleComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/faq/global-prefix/global-prefix.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/homepage/pages/faq/global-prefix/global-prefix.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GlobalPrefixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPrefixComponent", function() { return GlobalPrefixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");



class GlobalPrefixComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
GlobalPrefixComponent.??fac = function GlobalPrefixComponent_Factory(t) { return ??GlobalPrefixComponent_BaseFactory(t || GlobalPrefixComponent); };
GlobalPrefixComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GlobalPrefixComponent, selectors: [["app-global-prefix"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 21, vars: 0, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/global-prefix.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "global-prefix"], [1, "language-typescript"]], template: function GlobalPrefixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Global prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "To set a prefix for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "every route");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " registered in an HTTP application, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "setGlobalPrefix()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " method of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "INestApplication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " instance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\nconst app = await NestFactory.create(AppModule);\napp.setGlobalPrefix('v1');");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
const ??GlobalPrefixComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](GlobalPrefixComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GlobalPrefixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-prefix',
                templateUrl: './global-prefix.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/faq/http-adapter/http-adapter.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/homepage/pages/faq/http-adapter/http-adapter.component.ts ***!
  \***************************************************************************/
/*! exports provided: HttpAdapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpAdapterComponent", function() { return HttpAdapterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");





class HttpAdapterComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
HttpAdapterComponent.??fac = function HttpAdapterComponent_Factory(t) { return ??HttpAdapterComponent_BaseFactory(t || HttpAdapterComponent); };
HttpAdapterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HttpAdapterComponent, selectors: [["app-http-adapter"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 100, vars: 4, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/http-adapter.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "http-adapter"], ["appAnchor", "", "id", "outside-application-context-strategy"], [1, "filename"], ["app568c9abaaced10a531b325f7919e8f5ddd1fe67e", ""], [1, "language-typescript"], ["appAnchor", "", "id", "in-context-strategy"], ["app7f4ef169529df7ebc38a560a8351839ac3373e8c", ""], [1, "info"]], template: function HttpAdapterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "HTTP adapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Occasionally, you may want to access the underlying HTTP server, either within the Nest application context or from the outside.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Every native (platform-specific) HTTP server/library (e.g., Express and Fastify) instance is wrapped in an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "adapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, ". The adapter is registered as a globally available provider that can be retrieved from the application context, as well as injected into other providers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Outside application context strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "To get a reference to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "HttpAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " from outside of the application context, call the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "getHttpAdapter()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "app-tabs", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\nconst app = await NestFactory.create(ApplicationModule);\nconst httpAdapter = app.getHttpAdapter();");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "In-context strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "To get a reference to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "HttpAdapterHost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " from within the application context, inject it using the same technique as any other existing provider (e.g., using constructor injection).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "app-tabs", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\nexport class CatsService {\n  constructor(private readonly adapterHost: HttpAdapterHost) {}\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "\n@Dependencies(HttpAdapterHost)\nexport class CatsService {\n  constructor(adapterHost) {\n    this.adapterHost = adapterHost;\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "blockquote", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "HttpAdapterHost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "@nestjs/core");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " package.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "HttpAdapterHost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " an actual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "HttpAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, ". To get the actual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "HttpAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " instance, simply access the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "httpAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " property.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "\nconst adapterHost = app.get(HttpAdapterHost);\nconst httpAdapter = adapterHost.httpAdapter;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "httpAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " is the actual instance of the HTTP adapter used by the underlying framework. It is an instance of either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "ExpressAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "FastifyAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " (both classes extend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "AbstractHttpAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "The adapter object exposes several useful methods to interact with the HTTP server. However, if you want to access the library instance (e.g., the Express instance) directly, call the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "getInstance()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "\nconst instance = httpAdapter.getInstance();");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", _r369.isJsActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("hide", !_r369.isJsActive);
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]], encapsulation: 2, changeDetection: 0 });
const ??HttpAdapterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](HttpAdapterComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpAdapterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-http-adapter',
                templateUrl: './http-adapter.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/faq/hybrid-application/hybrid-application.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/homepage/pages/faq/hybrid-application/hybrid-application.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HybridApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HybridApplicationComponent", function() { return HybridApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");



class HybridApplicationComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
HybridApplicationComponent.??fac = function HybridApplicationComponent_Factory(t) { return ??HybridApplicationComponent_BaseFactory(t || HybridApplicationComponent); };
HybridApplicationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HybridApplicationComponent, selectors: [["app-hybrid-application"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 21, vars: 0, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/hybrid-application.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "hybrid-application"], [1, "language-typescript"]], template: function HybridApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Hybrid application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "A hybrid application is one that both listens for HTTP requests, as well as makes use of connected microservices. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "INestApplication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " instance can be connected with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "INestMicroservice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " instances through the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "connectMicroservice()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " method. To connect multiple microservice instances, simply pass additional microservice configuration objects as arguments in a comma-separated list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\nconst app = await NestFactory.create(AppModule);\nconst microservice = app.connectMicroservice({\n  transport: Transport.TCP,\n});\n\nawait app.startAllMicroservicesAsync();\nawait app.listen(3001);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
const ??HybridApplicationComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](HybridApplicationComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HybridApplicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hybrid-application',
                templateUrl: './hybrid-application.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/faq/multiple-servers/multiple-servers.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/homepage/pages/faq/multiple-servers/multiple-servers.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MultipleServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleServersComponent", function() { return MultipleServersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class MultipleServersComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
MultipleServersComponent.??fac = function MultipleServersComponent_Factory(t) { return ??MultipleServersComponent_BaseFactory(t || MultipleServersComponent); };
MultipleServersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MultipleServersComponent, selectors: [["app-multiple-servers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 60, vars: 0, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/multiple-servers.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "https"], [1, "language-typescript"], ["appAnchor", "", "id", "multiple-simultaneous-servers"], [1, "info"], [1, ""], ["routerLink", "/graphql/subscriptions"]], template: function MultipleServersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "HTTPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "To create an application that uses the HTTPS protocol, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "httpsOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " property in the options object passed to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "create()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " method of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "NestFactory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " class:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "code", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\nconst httpsOptions = {\n  key: fs.readFileSync('./secrets/private-key.pem'),\n  cert: fs.readFileSync('./secrets/public-certificate.pem'),\n};\nconst app = await NestFactory.create(ApplicationModule, {\n  httpsOptions,\n});\nawait app.listen(3000);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "If you use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "FastifyAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, ", create the application as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "code", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\nconst app = await NestFactory.create<NestFastifyApplication>(\n  ApplicationModule,\n  new FastifyAdapter({ https: httpsOptions }),\n);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Multiple simultaneous servers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "The following recipe shows how to instantiate a Nest application that listens on multiple ports (for example, on a non-HTTPS port and an HTTPS port) simultaneously.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "code", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\nconst httpsOptions = {\n  key: fs.readFileSync('./secrets/private-key.pem'),\n  cert: fs.readFileSync('./secrets/public-certificate.pem'),\n};\n\nconst server = express();\nconst app = await NestFactory.create(\n  ApplicationModule,\n  new ExpressAdapter(server),\n);\nawait app.init();\n\nhttp.createServer(server).listen(3000);\nhttps.createServer(httpsOptions, server).listen(443);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "blockquote", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "ExpressAdapter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " is imported from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "@nestjs/platform-express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " package. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "http");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "https");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " packages are native Node.js packages.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "blockquote", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " This recipe does not work with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "GraphQL Subscriptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2, changeDetection: 0 });
const ??MultipleServersComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MultipleServersComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MultipleServersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multiple-servers',
                templateUrl: './multiple-servers.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/pages/faq/request-lifecycle/request-lifecycle.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/homepage/pages/faq/request-lifecycle/request-lifecycle.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RequestLifecycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestLifecycleComponent", function() { return RequestLifecycleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page/page.component */ "./src/app/homepage/pages/page/page.component.ts");
/* harmony import */ var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/header-anchor.directive */ "./src/app/shared/directives/header-anchor.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class RequestLifecycleComponent extends _page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
}
RequestLifecycleComponent.??fac = function RequestLifecycleComponent_Factory(t) { return ??RequestLifecycleComponent_BaseFactory(t || RequestLifecycleComponent); };
RequestLifecycleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RequestLifecycleComponent, selectors: [["app-request-lifecycle"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], decls: 145, vars: 0, consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/faq/request-lifecycle.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "request-lifecycle"], ["appAnchor", "", "id", "middleware"], ["routerLink", "/middleware"], ["appAnchor", "", "id", "guard"], [1, "language-typescript"], [1, "info"], ["appAnchor", "", "id", "interceptors"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/ReactiveX/rxjs"], ["appAnchor", "", "id", "pipes"], ["appAnchor", "", "id", "filters"], ["appAnchor", "", "id", "summary"]], template: function RequestLifecycleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Request lifecycle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Nest applications handle requests and produce responses in a sequence we refer to as the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "request lifecycle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, ". With the use of middleware, pipes, guards, and interceptors, it can be challenging to track down where a particular piece of code executes during the request lifecycle, especially as global, controller level, and route level components come into play. In general, a request flows through middleware to guards, then to interceptors, then to pipes and finally back to interceptors on the return path (as the response is generated).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Middleware is executed in a particular sequence. First, Nest runs globally bound middleware (such as middleware bound with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "app.use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, ") and then it runs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "module bound middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, ", which are determined on paths. Middleware are run sequentially in the order they are bound, similar to the way middleware in Express works.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Guard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Guard execution starts with global guards, then proceeds to controller guards, and finally to route guards. As with middleware, guards run in the order in which they are bound. For example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n@UseGuards(Guard1, Guard2)\n@Controller('cats')\nexport class CatsController {\n  constructor(private readonly catsService: CatsService) {}\n\n  @UseGuards(Guard3)\n  @Get()\n  getCats(): Cats[] {\n    return this.catsService.getCats();\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Guard1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " will execute before ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Guard2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " and both will execute before ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Guard3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "blockquote", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " When speaking about globally bound vs controller or locally bound, the difference is where the guard (or other component is bound). If you are using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "app.useGlobalGuard()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " or providing the component via a module, it is globally bound. Otherwise, it is bound to a controller if the decorator precedes a controller class, or to a route if the decorator proceeds a route declaration.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Interceptors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Interceptors, for the most part, follow the same pattern as guards, with one catch: as interceptors return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "RxJS Observables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, ", the observables will be resolved in a first in last out manner. So inbound requests will go through the standard global, controller, route level resolution, but the response side of the request (i.e., after returning from the controller method handler) will be resolved from route to controller to global. Also, any errors thrown by pipes, controllers, or services can be read in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "catchError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " operator of an interceptor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Pipes follow the standard global to controller to route bound sequence, with the same first in first out in regards to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "@usePipes()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " parameters. However, at a route parameter level, if you have multiple pipes running, they will run in the order of the last parameter with a pipe to the first. This also applies to the route level and controller level pipes. For example, if we have the following controller:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "\n@UsePipes(GeneralValidationPipe)\n@Controller('cats')\nexport class CatsController {\n  constructor(private readonly catsService: CatsService) {}\n\n  @UsePipes(RouteSpecificPipe)\n  @Patch(':id')\n  updateCat(\n    @Body() body: UpdateCatDTO, \n    @Param() params: UpdateCatParams, \n    @Query() query: UpdateCatQuery,\n  ) {\n    return this.catsService.updateCat(body, params, query);\n  }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "then the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "GeneralValidationPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " will run for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "query");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, ", then the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "params");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, ", and then the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " objects before moving on to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "RouteSpecificPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, ", which follows the same order. If any parameter-specific pipes were in place, they would run (again, from the last to first parameter) after the controller and route level pipes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Filters are the only component that do not resolve global first. Instead, filters resolve from the lowest level possible, meaning execution starts with any route bound filters and proceeding next to controller level, and finally to global filters. Note that exceptions cannot be passed from filter to filter; if a route level filter catches the exception, a controller or global level filter cannot catch the same exception. The only way to achieve an effect like this is to use inheritance between the filters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "blockquote", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " Filters are only executed if any uncaught exception occurs during the request process. Caught exceptions, such as those caught with a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "try/catch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " will not trigger Exception Filters to fire. As soon as an uncaught exception is encountered, the rest of the lifecycle is ignored and the request skips straight to the filter.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "In general, the request lifecycle looks like the following: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Incoming request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Globally bound middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Module bound middleware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Global guards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Controller guards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Route guards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Global interceptors (pre-controller)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Controller interceptors (pre-controller)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Route interceptors (pre-controller)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Global pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Controller pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Route pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Route parameter pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Controller (method handler)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Service (if exists)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Route interceptor (post-request)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Controller interceptor (post-request)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Global interceptor (post-request)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Exception filters (route, then controller, then global) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Server response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2, changeDetection: 0 });
const ??RequestLifecycleComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](RequestLifecycleComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RequestLifecycleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request-lifecycle',
                templateUrl: './request-lifecycle.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=homepage-pages-faq-faq-module-es2015.js.map