function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-pages-cli-cli-module"], {
  /***/
  "./src/app/homepage/pages/cli/cli.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/homepage/pages/cli/cli.module.ts ***!
    \**************************************************/

  /*! exports provided: CliModule */

  /***/
  function srcAppHomepagePagesCliCliModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CliModule", function () {
      return CliModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _libraries_libaries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./libraries/libaries.component */
    "./src/app/homepage/pages/cli/libraries/libaries.component.ts");
    /* harmony import */


    var _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./overview/overview.component */
    "./src/app/homepage/pages/cli/overview/overview.component.ts");
    /* harmony import */


    var _usages_usages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./usages/usages.component */
    "./src/app/homepage/pages/cli/usages/usages.component.ts");
    /* harmony import */


    var _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./workspaces/workspaces.component */
    "./src/app/homepage/pages/cli/workspaces/workspaces.component.ts");
    /* harmony import */


    var _scripts_scripts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./scripts/scripts.component */
    "./src/app/homepage/pages/cli/scripts/scripts.component.ts");

    var routes = [{
      path: 'overview',
      component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["CliOverviewComponent"],
      data: {
        title: 'Overview - CLI'
      }
    }, {
      path: 'monorepo',
      component: _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_7__["CliWorkspacesComponent"],
      data: {
        title: 'Monorepo - CLI'
      }
    }, {
      path: 'workspaces',
      redirectTo: 'monorepo'
    }, {
      path: 'libraries',
      component: _libraries_libaries_component__WEBPACK_IMPORTED_MODULE_4__["CliLibrariesComponent"],
      data: {
        title: 'Libraries - CLI'
      }
    }, {
      path: 'usages',
      component: _usages_usages_component__WEBPACK_IMPORTED_MODULE_6__["CliUsagesComponent"],
      data: {
        title: 'Usage - CLI'
      }
    }, {
      path: 'scripts',
      component: _scripts_scripts_component__WEBPACK_IMPORTED_MODULE_8__["CliScriptsComponent"],
      data: {
        title: 'Scripts - CLI'
      }
    }];

    var CliModule = function CliModule() {
      _classCallCheck(this, CliModule);
    };

    CliModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: CliModule
    });
    CliModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function CliModule_Factory(t) {
        return new (t || CliModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](CliModule, {
        declarations: [_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["CliOverviewComponent"], _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_7__["CliWorkspacesComponent"], _usages_usages_component__WEBPACK_IMPORTED_MODULE_6__["CliUsagesComponent"], _libraries_libaries_component__WEBPACK_IMPORTED_MODULE_4__["CliLibrariesComponent"], _scripts_scripts_component__WEBPACK_IMPORTED_MODULE_8__["CliScriptsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](CliModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          declarations: [_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["CliOverviewComponent"], _workspaces_workspaces_component__WEBPACK_IMPORTED_MODULE_7__["CliWorkspacesComponent"], _usages_usages_component__WEBPACK_IMPORTED_MODULE_6__["CliUsagesComponent"], _libraries_libaries_component__WEBPACK_IMPORTED_MODULE_4__["CliLibrariesComponent"], _scripts_scripts_component__WEBPACK_IMPORTED_MODULE_8__["CliScriptsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/cli/libraries/libaries.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/homepage/pages/cli/libraries/libaries.component.ts ***!
    \********************************************************************/

  /*! exports provided: CliLibrariesComponent */

  /***/
  function srcAppHomepagePagesCliLibrariesLibariesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CliLibrariesComponent", function () {
      return CliLibrariesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");

    var CliLibrariesComponent =
    /*#__PURE__*/
    function (_page_page_component_) {
      _inherits(CliLibrariesComponent, _page_page_component_);

      function CliLibrariesComponent() {
        _classCallCheck(this, CliLibrariesComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CliLibrariesComponent).apply(this, arguments));
      }

      return CliLibrariesComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CliLibrariesComponent.??fac = function CliLibrariesComponent_Factory(t) {
      return ??CliLibrariesComponent_BaseFactory(t || CliLibrariesComponent);
    };

    CliLibrariesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CliLibrariesComponent,
      selectors: [["app-libraries"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 218,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/cli/libraries.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "libraries"], ["routerLink", "/modules"], ["rel", "nofollow", "target", "_blank", "href", "https://npmjs.com"], ["appAnchor", "", "id", "nest-libraries"], ["appAnchor", "", "id", "creating-libraries"], [1, "language-bash"], [1, "file-tree"], [1, "item"], [1, "children"], [1, "language-javascript"], ["appAnchor", "", "id", "using-libraries"], [1, "language-typescript"], ["href", "https://docs.nestjs.com/cli/monorepo#global-compiler-options"]],
      template: function CliLibrariesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Libraries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Many applications need to solve the same general problems, or re-use a modular component in several different contexts. Nest has a few ways of addressing this, but each works at a different level to solve the problem in a way that helps meet different architectural and organizational objectives.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Nest ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " are useful for providing an execution context that enables sharing components within a single application. Modules can also be packaged with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "npm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " to create a reusable library that can be installed in different projects. This can be an effective way to distribute configurable, re-usable libraries that can be used by different, loosely connected or unafilliated organizations (e.g., by distributing/installing 3rd party libraries).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "For sharing code within closely organized groups (e.g., within company/project boundaries), it can be useful to have a more lightweight approach to sharing components. Monorepo's have arisen as a construct to enable that, and within a monorepo, a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " provides a way to share code in an easy, lightweight fashion. In a Nest monorepo, using libraries enables easy assembly of applications that share components. In fact, this encourages decomposition of monolithic applications and development processes to focus on building and composing modular components.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Nest libraries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "A Nest library is a Nest project that differs from an application in that it cannot run on its own. A library must be imported into a containing application in order for its code to execute. The built-in support for libraries described in this section is only available for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "monorepos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " (standard mode projects can achieve similar functionality using npm packages).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "For example, an organization may develop an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "AuthModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " that manages authentication by implementing company policies that govern all internal applications. Rather than build that module separately for each application, or physically packaging the code with npm and requiring each project to install it, a monorepo can define this module as a library. When organized this way, all consumers of the library module can see an up-to-date version of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "AuthModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " as it is committed. This can have significant benefits for coordinating component development and assembly, and simplifying end-to-end testing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Creating libraries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Any functionality that is suitable for re-use is a candidate for being managed as a library. Deciding what should be a library, and what should be part of an application, is an architectural design decision. Creating libraries involves more than simply copying code from an existing application to a new library. When packaged as a library, the library code must be decoupled from the application. This may require ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " time up front and force some design decisions that you may not face with more tightly coupled code. But this additional effort can pay off when the library can be used to enable more rapid application assembly across multiple applications.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "To get started with creating a library, run the following command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\nnest g library my-library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "When you run the command, the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " schematic prompts you for a prefix (AKA alias) for the library:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "\nWhat prefix would you like to use for the library (default: @app)?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "This creates a new project in your workspace called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "my-library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, ".\nA library-type project, like an application-type project, is generated into a named folder using a schematic. Libraries are managed under the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "libs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " folder of the monorepo root. Nest creates the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "libs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " folder the first time a library is created.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "The files generated for a library are slightly different from those generated for an application. Here is the contents of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "libs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " folder after executing the command above:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "libs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "my-library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "my-library.service.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "my-library.module.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "index.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "tsconfig.lib.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, " file will have a new entry for the library under the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "\"projects\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " key:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "\n...\n{\n    \"my-library\": {\n      \"type\": \"library\",\n      \"root\": \"libs/my-library\",\n      \"entryFile\": \"index\",\n      \"sourceRoot\": \"libs/my-library/src\",\n      \"compilerOptions\": {\n        \"tsConfigPath\": \"libs/my-library/tsconfig.lib.json\"\n      }\n}\n...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "There are two differences in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " metadata between libraries and applications:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "\"type\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " property is set to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "\"library\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " instead of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "\"application\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "\"entryFile\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " property is set to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "\"index\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, " instead of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "\"main\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "These differences key the build process to handle libraries appropriately. For example, a library exports its functions through the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "index.js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " file.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "As with application-type projects, libraries each have their own ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "tsconfig.lib.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " file that extends the root (monorepo-wide) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " file. You can modify this file, if necessary, to provide library-specific compiler options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "You can build the library with the CLI command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "\nnest build my-library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Using libraries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "With the automatically generated configuration files in place, using libraries is straightforward. How would we import ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "MyLibraryService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "my-library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " library into the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "my-project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " application?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "First, note that using library modules is the same as using any other Nest module. What the monorepo does is manage paths in a way that importing libraries and generating builds is now transparent. To use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "MyLibraryService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, ", we need to import its declaring module. We can modify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "my-project/src/app.module.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " as follows to import ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "MyLibraryModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "code", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "\nimport { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { MyLibraryModule } from '@app/my-library';\n\n@Module({\n  imports: [MyLibraryModule],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Notice above that we've used a path alias of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "@app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, " in the ES module ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "import");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " line, which was the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "prefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " we supplied with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "nest g library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " command above. Under the covers, Nest handles this through tsconfig path mapping. When adding a library, Nest updates the global (monorepo) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " file's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "\"paths\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " key like this:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "code", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "\n\"paths\": {\n    \"@app/my-library\": [\n        \"libs/my-library/src\"\n    ],\n    \"@app/my-library/*\": [\n        \"libs/my-library/src/*\"\n    ]\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "So, in a nutshell, the combination of the monorepo and library features has made it easy and intuitive to include library modules into applications.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "This same mechanism enables building and deploying applications that compose libraries. Once you've imported the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "MyLibraryModule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, ", running ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " handles all the module resolution automatically and bundles the app along with any library dependencies, for deployment. The default compiler for a monorepo is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, ", so the resulting distribution file is a single file that bundles all of the transpiled JavaScript files into a single file. You can also switch to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, " as described ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??CliLibrariesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](CliLibrariesComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CliLibrariesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-libraries',
          templateUrl: './libraries.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/cli/overview/overview.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/homepage/pages/cli/overview/overview.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CliOverviewComponent */

  /***/
  function srcAppHomepagePagesCliOverviewOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CliOverviewComponent", function () {
      return CliOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/components/banner-courses/banner-courses.component */
    "./src/app/shared/components/banner-courses/banner-courses.component.ts");

    var CliOverviewComponent =
    /*#__PURE__*/
    function (_page_page_component_2) {
      _inherits(CliOverviewComponent, _page_page_component_2);

      function CliOverviewComponent() {
        _classCallCheck(this, CliOverviewComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CliOverviewComponent).apply(this, arguments));
      }

      return CliOverviewComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CliOverviewComponent.??fac = function CliOverviewComponent_Factory(t) {
      return ??CliOverviewComponent_BaseFactory(t || CliOverviewComponent);
    };

    CliOverviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CliOverviewComponent,
      selectors: [["app-overview"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 363,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/cli/overview.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "overview"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/nest-cli"], ["appAnchor", "", "id", "installation"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/npm/npx"], [1, "language-bash"], ["appAnchor", "", "id", "basic-workflow"], ["rel", "nofollow", "target", "_blank", "href", "http://localhost:3000"], ["appAnchor", "", "id", "project-structure"], ["routerLink", "/cli/libraries"], ["routerLink", "/cli/monorepo"], ["id", "cli-command-syntax"], ["id", "command-overview"], ["routerLink", "/cli/usages"]],
      template: function CliOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Nest CLI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " is a command-line interface tool that helps you to initialize, develop, and maintain your Nest applications. It assists in multiple ways, including scaffolding the project, serving it in development mode, and building and bundling the application for production distribution. It embodies best-practice architectural patterns to encourage well-structured apps.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Installation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, ": In this guide we describe using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "npm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " to install packages, including the Nest CLI. Other package managers may be used at your discretion. With npm, you have several options available for managing how your OS command line resolves the location of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " CLI binary file. Here, we describe installing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " binary globally using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "-g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " option. This provides a measure of convenience, and is the approach we assume throughout the documentation. Note that installing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "any");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "npm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " package globally leaves the responsibility of ensuring they're running the correct version up to the user. It also means that if you have different projects, each will run the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "same");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " version of the CLI. A reasonable alternative is to use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "npx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " program (or similar features with other package managers) to ensure that you run a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "managed version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " of the Nest CLI. We recommend you consult the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "npx documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " and/or your DevOps support staff for more information.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Install the CLI globally using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "npm install -g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " command (see the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " above for details about global installs).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "\n$ npm install -g @nestjs/cli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Basic workflow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Once installed, you can invoke CLI commands directly from your OS command line through the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " executable. See the available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " commands by entering the following:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "\n$ nest --help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Get help on an individual command using the following construct. Substitute any command, like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, ", etc., where you see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " in the example below to get detailed help on that command:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "\n$ nest generate --help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "To create, build and run a new basic Nest project in development mode, go to the folder that should be the parent of your new project, and run the following commands:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "\n$ nest new my-nest-project\n$ cd my-nest-project\n$ npm run start:dev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "In your browser, open ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "http://localhost:3000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " to see the new application running. The app will automatically recompile and reload when you change any of the source files.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Project structure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "When you run ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "nest new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, ", Nest generates a boilerplate application structure by creating a new folder and populating an initial set of files. You can continue working in this default structure, adding new components, as described throughout this documentation. We refer to the project structure generated by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "nest new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, " as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "standard mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, ". Nest also supports an alternate structure for managing multiple projects and libraries called ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "monorepo mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Aside from a few specific considerations around how the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " process works (essentially, monorepo mode simplifies build complexities that can sometimes arise from monorepo-style project structures), and built-in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " support, the rest of the Nest features, and this documentation, apply equally to both standard and monorepo mode project structures. In fact, you can easily switch from standard mode to monorepo mode at any time in the future, so you can safely defer this decision while you're still learning about Nest.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "You can use either mode to manage multiple projects. Here's a quick summary of the differences:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Standard Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Monorepo Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Multiple projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Separate file system structure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Single file system structure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "node_modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " & ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Separate instances");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Shared across monorepo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Default compiler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Compiler settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Specified separately");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Monorepo defaults that can be overridden per project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Config files like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "tslint.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, ".prettierrc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, ", etc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Specified separately");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Shared across monorepo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, " commands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Target defaults automatically to the (only) project in the context");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Target defaults to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "default project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, " in the monorepo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Libraries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Managed manually, usually via npm packaging");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Built-in support, including path management and bundling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Read the sections on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Workspaces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Libraries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, " for more detailed information to help you decide which mode is most suitable for you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](211, "app-banner-courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "CLI command syntax");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, " commands follow the same format:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "\nnest commandOrAlias requiredArg [optionalArg] [options]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "For example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "\n$ nest new my-nest-project --dry-run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Here, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, " is the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "commandOrAlias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, ". The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, " command has an alias of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "my-nest-project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, " is the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "requiredArg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, ". If a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "requiredArg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, " is not supplied on the command line, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, " will prompt for it. Also, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "--dry-run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, " has an equivalent short-hand form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "-d");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, ". With this in mind, the following command is the equivalent of the above:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "\n$ nest n my-nest-project -d");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "Most commands, and some options, have aliases. Try running ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "nest new --help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, " to see these options and aliases, and to confirm your understanding of the above constructs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Command overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Run ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "nest <command> --help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, " for any of the following commands to see command-specific options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "See ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, " for detailed descriptions for each command.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "Command");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Alias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Scaffolds a new ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "standard mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, " application with all boilerplate files needed to run.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "Generates and/or modifies files based on a schematic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](314, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Compiles an application or workspace into an output folder.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](321, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Compiles and runs an application (or default project in a workspace).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](328, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "Imports a library that has been packaged as a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "nest library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, ", running its install schematic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "@nestjs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, " dependencies in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "\"dependencies\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, " list to their ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "@latest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, " version.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "Displays information about installed nest packages and other helpful system info.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_components_banner_courses_banner_courses_component__WEBPACK_IMPORTED_MODULE_4__["BannerCoursesComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??CliOverviewComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](CliOverviewComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CliOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-overview',
          templateUrl: './overview.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/cli/scripts/scripts.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/homepage/pages/cli/scripts/scripts.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CliScriptsComponent */

  /***/
  function srcAppHomepagePagesCliScriptsScriptsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CliScriptsComponent", function () {
      return CliScriptsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");

    var CliScriptsComponent =
    /*#__PURE__*/
    function (_page_page_component_3) {
      _inherits(CliScriptsComponent, _page_page_component_3);

      function CliScriptsComponent() {
        _classCallCheck(this, CliScriptsComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CliScriptsComponent).apply(this, arguments));
      }

      return CliScriptsComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CliScriptsComponent.??fac = function CliScriptsComponent_Factory(t) {
      return ??CliScriptsComponent_BaseFactory(t || CliScriptsComponent);
    };

    CliScriptsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CliScriptsComponent,
      selectors: [["app-scripts"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 255,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/cli/scripts.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "nest-cli-and-scripts"], ["id", "the-nest-binary"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/typescript-starter"], ["appAnchor", "", "id", "build"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/cli/overview#project-structure"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/cli/usages#nest-build"], ["appAnchor", "", "id", "execution"], ["rel", "nofollow", "target", "_blank", "href", "https://docs.nestjs.com/cli/usages#nest-start"], ["appAnchor", "", "id", "generation"], ["id", "package-scripts"], [1, "language-bash"], ["id", "backward-compatibility"], ["id", "migration"], [1, "language-typescript"]],
      template: function CliScriptsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Nest CLI and scripts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "This section provides additional background on how the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " command interacts with compilers and scripts to help DevOps personnel manage the development environment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "A Nest application is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " TypeScript application that needs to be compiled to JavaScript before it can be executed. There are various ways to accomplish the compilation step, and developers/teams are free to choose a way that works best for them. With that in mind, Nest provides a set of tools out-of-the-box that seek to do the following:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Provide a standard build/execute process, available at the command line, that \"just works\" with reasonable defaults.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Ensure that the build/execute process is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "open");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, ", so developers can directly access the underlying tools to customize them using native features and options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Remain a completely standard TypeScript/Node.js framework, so that the entire compile/deploy/execute pipeline can be managed by any external tools that the development team chooses to use.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "This goal is accomplished through a combination of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " command, a locally installed TypeScript compiler, and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " scripts. We describe how these technologies work together below. This should help you understand what's happening at each step of the build/execute process, and how to customize that behavior if necessary.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "The nest binary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " command is an OS level binary (i.e., runs from the OS command line). This command actually encompasses 3 distinct areas, described below. We recommend that you run the build (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, ") and execution (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, ") sub-commands via the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " scripts provided automatically when a project is scaffolded (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "typescript starter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " if you wish to start by cloning a repo, instead of running ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "nest new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " is a wrapper on top of the standard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " compiler (for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "standard projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, ") or the webpack compiler (for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "monorepos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "). It does not add any other compilation features or steps. The reason it exists is that most developers, especially when starting out with Nest, do not need to adjust compiler options (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " file) which can sometimes be tricky.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "See the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " documentation for more details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Execution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " simply ensures the project has been built (same as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "), then invokes the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " command in a portable, easy way to execute the compiled application. As with builds, you are free to customize this process as needed, either using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " command and its options, or completely replacing it. The entire process is a standard TypeScript application build and execute pipeline, and you are free to manage the process as such.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "See the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " documentation for more details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Generation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "nest generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " commands, as the name implies, generate new Nest projects, or components within them.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Package scripts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Running the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " commands at the OS command level requires that the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, " binary be installed globally. This is a standard feature of npm, and outside of Nest's direct control. One consequence of this is that the globally installed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, " binary is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "not");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " managed as a project dependency in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, ". For example, two different developers can be running two different versions of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " binary. The standard solution for this is to use package scripts so that you can treat the tools used in the build and execute steps as development dependencies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "When you run ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "nest new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, ", or clone the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "typescript starter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, ", Nest populates the new project's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " scripts with commands like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, ". It also installs the underlying compiler tools (such as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, ") as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "dev dependencies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "You run the build and execute scripts with commands like:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "\n$ npm run build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "and");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "\n$ npm run start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "These commands use npm's script running capabilities to execute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, " using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "locally installed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, " binary. By using these built-in package scripts, you have full dependency management over the Nest CLI commands*. This means that, by following this ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "recommended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, " usage, all members of your organization can be assured of running the same version of the commands.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "*This applies to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, " commands. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "nest new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "nest generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, " commands aren't part of the build/execute pipeline, so they operate in a different context, and do not come with built-in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, " scripts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "For most developers/teams, it is recommended to utilize the package scripts for building and executing their Nest projects. You can fully customize the behavior of these scripts via their options (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "--path");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "--webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "--webpackPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, ") and/or customize the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, " or webpack compiler options files (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, ") as needed. You are also free to run a completely custom build process to compile the TypeScript (or even to execute TypeScript directly with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "ts-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Backward compatibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Because Nest applications are pure TypeScript applications, previous versions of the Nest build/execute scripts will continue to operate. You are not required to upgrade them. You can choose to take advantage of the new ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, " commands when you are ready, or continue running previous or customized scripts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Migration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "While you are not required to make any changes, you may want to migrate to using the new CLI commands instead of using tools such as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "tsc-watch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "ts-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, ". In this case, simply install the latest version of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "@nestjs/cli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, ", both globally and locally:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "code", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "\n$ npm install -g @nestjs/cli\n$ cd  /some/project/root/folder\n$ npm install -D @nestjs/cli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "You can then replace the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "scripts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " defined in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, " with the following ones:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "code", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "\n\"build\": \"nest build\",\n\"start\": \"nest start\",\n\"start:dev\": \"nest start --watch\",\n\"start:debug\": \"nest start --debug --watch\",");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??CliScriptsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](CliScriptsComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CliScriptsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scripts',
          templateUrl: './scripts.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/cli/usages/usages.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/homepage/pages/cli/usages/usages.component.ts ***!
    \***************************************************************/

  /*! exports provided: CliUsagesComponent */

  /***/
  function srcAppHomepagePagesCliUsagesUsagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CliUsagesComponent", function () {
      return CliUsagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");

    var CliUsagesComponent =
    /*#__PURE__*/
    function (_page_page_component_4) {
      _inherits(CliUsagesComponent, _page_page_component_4);

      function CliUsagesComponent() {
        _classCallCheck(this, CliUsagesComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CliUsagesComponent).apply(this, arguments));
      }

      return CliUsagesComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CliUsagesComponent.??fac = function CliUsagesComponent_Factory(t) {
      return ??CliUsagesComponent_BaseFactory(t || CliUsagesComponent);
    };

    CliUsagesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CliUsagesComponent,
      selectors: [["app-usages"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 675,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/cli/usages.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "cli-command-reference"], ["appAnchor", "", "id", "nest-new"], [1, "language-bash"], ["id", "description"], ["id", "arguments"], ["id", "options"], ["appAnchor", "", "id", "nest-generate"], ["id", "arguments-1"], ["id", "schematics"], ["id", "options-1"], ["appAnchor", "", "id", "nest-build"], ["id", "arguments-2"], ["id", "options-2"], ["appAnchor", "", "id", "nest-start"], ["id", "arguments-3"], ["id", "options-3"], ["appAnchor", "", "id", "nest-add"], ["id", "arguments-4"], ["appAnchor", "", "id", "nest-update"], ["id", "options-4"], ["appAnchor", "", "id", "nest-info"]],
      template: function CliUsagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "CLI command reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "nest new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Creates a new (standard mode) Nest project.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n$ nest new <name> [options]\n$ nest n <name> [options]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Creates and initializes a new Nest project. Prompts for package manager.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Creates a folder with the given ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "<name>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Populates the folder with configuration files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Creates sub-folders for source code (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "/src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, ") and end-to-end tests (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "/test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Populates the sub-folders with default files for app components and tests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Arguments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Argument");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "<name>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "The name of the new project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "--dry-run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Reports changes that would be made, but does not change the filesystem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Alias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "-d");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "--skip-git");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Skip git repository initialization.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " Alias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "-g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "--skip-install");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Skip package installation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " Alias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "-s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "--package-manager [package-manager]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Specify package manager. Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "npm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "yarn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, ". Package manager must be installed globally.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, " Alias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "-p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "--language [language]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Specify programming language (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "TS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "JS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " Alias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "-l");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "--collection [collectionName]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Specify schematics collection. Use package name of installed npm package containing schematic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " Alias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "-c");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "nest generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Generates and/or modifies files based on a schematic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "\n$ nest generate <schematic> <name> [options]\n$ nest g <schematic> <name> [options]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Arguments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Argument");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "<schematic>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "schematic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "collection:schematic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " to generate. See the table below for the available schematics.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "<name>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "The name of the generated component.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Schematics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Alias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Generate a new application within a monorepo (converting to monorepo if it's a standard structure).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "lib");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Generate a new library within a monorepo (converting to monorepo if it's a standard structure).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "cl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Generate a new class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "controller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "co");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "Generate a controller declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "decorator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "d");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Generate a custom decorator.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "f");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Generate a filter declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "gateway");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "ga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Generate a gateway declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "guard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "gu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "Generate a guard declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "interface");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "Generate an interface.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "interceptor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "Generate an interceptor declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "middleware");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "mi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "Generate a middleware declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "mo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Generate a module declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "pipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "pi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Generate a pipe declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "pr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Generate a provider declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "resolver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "r");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "Generate a resolver declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "Generate a service declaration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "--dry-run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "Reports changes that would be made, but does not change the filesystem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](338, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, " Alias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, "-d");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "--project [project]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "Project that element should be added to.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](348, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, " Alias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "-p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "--flat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "Do not generate a folder for the element.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "--collection [collectionName]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "Specify schematics collection. Use package name of installed npm package containing schematic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](364, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, " Alias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "-c");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "--spec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "Enforce spec files generation (default)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "--no-spec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "Disable spec files generation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Compiles an application or workspace into an output folder.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "\n$ nest build <name> [options]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "Arguments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "Argument");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "<name>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](403, "The name of the project to build.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "--path [path]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419, "Path to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, "tsconfig");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, " file. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](423, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](424, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "-p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, "--config [path]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "Path to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "nest-cli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, " configuration file. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](436, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](439, "-c");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, "--watch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "Run in watch mode (live-reload) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](446, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "-w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, "--webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, "Use webpack for compilation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "--webpackPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, "Path to webpack configuration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "--tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "Force use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, " for compilation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](475, "Compiles and runs an application (or default project in a workspace).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "\n$ nest start <name> [options]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](480, "Arguments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "Argument");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "<name>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "The name of the project to run.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, "--path [path]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, "Path to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "tsconfig");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, " file. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](514, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "-p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "--config [path]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "Path to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](525, "nest-cli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](526, " configuration file. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](527, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "-c");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "--watch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](536, "Run in watch mode (live-reload) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](537, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](540, "-w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, "--debug [hostport]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "Run in debug mode (with --inspect flag) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](547, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "-d");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](554, "--webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](556, "Use webpack for compilation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "--webpackPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](562, "Path to webpack configuration.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](566, "--tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](567, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](568, "Force use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](569, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](570, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, " for compilation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](575, "--exec [binary]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](576, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](577, "Binary to run (default: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](579, "node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](580, "). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](581, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](582, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](584, "-e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, "nest add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](589, "Imports a library that has been packaged as a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](591, "nest library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](592, ", running its install schematic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](593, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](595, "\n$ nest add <name> [options]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](597, "Arguments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](598, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](602, "Argument");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](604, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](609, "<name>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "The name of the library to import.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](613, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](614, "nest update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](616, "Updates ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](618, "@nestjs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](619, " dependencies in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](620, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](621, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](622, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](623, "\"dependencies\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](624, " list to their ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](625, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](626, "@latest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](627, " version.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](628, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](629, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](630, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](631, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](632, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](634, "Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](635, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](636, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](637, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](638, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](639, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](640, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](641, "--force");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](642, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](643, "Do ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](644, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](645, "upgrade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](646, " instead of update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](647, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](648, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](649, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](650, "-f");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](651, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](652, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](654, "--tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](655, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](656, "Update to tagged version (use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](657, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](658, "@latest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](659, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](660, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](661, "@<tag>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](662, ", etc) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](663, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](664, "Alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](665, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](666, "-wt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](667, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](668, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](669, "nest info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](670, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](671, "Displays information about installed nest packages and other helpful system info. For example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](672, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "code", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](674, "\n _   _             _      ___  _____  _____  _     _____\n| \\ | |           | |    |_  |/  ___|/  __ \\| |   |_   _|\n|  \\| |  ___  ___ | |_     | |\\ `--. | /  \\/| |     | |\n| . ` | / _ \\/ __|| __|    | | `--. \\| |    | |     | |\n| |\\  ||  __/\\__ \\| |_ /\\__/ //\\__/ /| \\__/\\| |_____| |_\n\\_| \\_/ \\___||___/ \\__|\\____/ \\____/  \\____/\\_____/\\___/\n\n[System Information]\nOS Version : macOS High Sierra\nNodeJS Version : v8.9.0\nYARN Version : 1.5.1\n[Nest Information]\nmicroservices version : 6.0.0\nwebsockets version : 6.0.0\ntesting version : 6.0.0\ncommon version : 6.0.0\ncore version : 6.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??CliUsagesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](CliUsagesComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CliUsagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-usages',
          templateUrl: './usages.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/pages/cli/workspaces/workspaces.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/homepage/pages/cli/workspaces/workspaces.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CliWorkspacesComponent */

  /***/
  function srcAppHomepagePagesCliWorkspacesWorkspacesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CliWorkspacesComponent", function () {
      return CliWorkspacesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../page/page.component */
    "./src/app/homepage/pages/page/page.component.ts");
    /* harmony import */


    var _shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/header-anchor.directive */
    "./src/app/shared/directives/header-anchor.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CliWorkspacesComponent =
    /*#__PURE__*/
    function (_page_page_component_5) {
      _inherits(CliWorkspacesComponent, _page_page_component_5);

      function CliWorkspacesComponent() {
        _classCallCheck(this, CliWorkspacesComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CliWorkspacesComponent).apply(this, arguments));
      }

      return CliWorkspacesComponent;
    }(_page_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"]);

    CliWorkspacesComponent.??fac = function CliWorkspacesComponent_Factory(t) {
      return ??CliWorkspacesComponent_BaseFactory(t || CliWorkspacesComponent);
    };

    CliWorkspacesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CliWorkspacesComponent,
      selectors: [["app-workspaces"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 746,
      vars: 0,
      consts: [[1, "content"], ["contentReference", ""], [1, "github-links"], ["href", "https://github.com/nestjs/docs.nestjs.com/edit/master/content/cli/workspaces.md", "aria-label", "Suggest Edits", "title", "Suggest Edits"], [1, "fas", "fa-edit"], ["id", "workspaces"], ["appAnchor", "", "id", "standard-mode"], ["rel", "nofollow", "target", "_blank", "href", "https://github.com/nestjs/typescript-starter"], ["appAnchor", "", "id", "monorepo-mode"], [1, "language-bash"], [1, "file-tree"], [1, "item"], [1, "children"], [1, "error"], ["appAnchor", "", "id", "workspace-projects"], ["routerLink", "/cli/libraries"], ["href", "/cli/monorepo#cli-properties"], ["appAnchor", "", "id", "applications"], ["appAnchor", "", "id", "libraries"], ["appAnchor", "", "id", "cli-properties"], [1, "language-javascript"], ["appAnchor", "", "id", "global-compiler-options"], ["rel", "nofollow", "target", "_blank", "href", "https://webpack.js.org/"], ["appAnchor", "", "id", "global-generate-options"], ["appAnchor", "", "id", "project-specific-generate-options"], [1, "notice"], ["appAnchor", "", "id", "specified-compiler"], ["appAnchor", "", "id", "webpack-options"], ["rel", "nofollow", "target", "_blank", "href", "https://webpack.js.org/configuration/"], ["appAnchor", "", "id", "assets"], [1, "language-typescript"], ["appAnchor", "", "id", "project-properties"]],
      template: function CliWorkspacesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Workspaces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Nest has two modes for organizing code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "standard mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, ": useful for building individual project-focused applications that have their own dependencies and settings, and don't need to optimize for sharing modules, or optimizing complex builds. This is the default mode.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "monorepo mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ": this mode treats code artifacts as part of a lightweight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "monorepo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, ", and may be more appropriate for teams of developers and/or multi-project environments. It automates parts of the build process to make it easy to create and compose modular components, promotes code re-use, makes integration testing easier, makes it easy to share project-wide artifacts like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "tslint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " rules and other configuration policies, and is easier to use than alternatives like github submodules. Monorepo mode employs the concept of a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "workspace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, ", represented in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " file, to coordinate the relationship between the components of the monorepo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "It's important to note that virtually all of Nest's features are independent of your code organization mode. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "only");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " affect of this choice is how your projects are composed and how build artifacts are generated. All other functionality, from the CLI to core modules to add-on modules work the same in either mode.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Also, you can easily switch from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "standard mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "monorepo mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " at any time, so you can delay this decision until the benefits of one or the other approach become more clear.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Standard mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "When you run ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "nest new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, ", a new ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " is created for you using a built-in schematic. Nest does the following:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Create a new folder, corresponding to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " argument you provide to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "nest new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Populate that folder with default files corresponding to a minimal base-level Nest application. You can examine these files at the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "typescript-starter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " repository.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Provide additional files such as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " that configure and enable various tools for compiling, testing and serving your application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "From there, you can modify the starter files, add new components, add dependencies (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "npm install");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "), and otherwise develop your application as covered in the rest of this documentation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Monorepo mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "To enable monorepo mode, you start with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "standard mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " structure, and add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, ". A project can be a full ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " (which you add to the workspace with the command ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "nest generate app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, ") or a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " (which you add to the workspace with the command ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "nest generate library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "). We'll discuss the details of these specific types of project components below. The key point to note now is that it is the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "act of adding a project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " to an existing standard mode structure that ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "converts it");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " to monorepo mode. Let's look at an example.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "If we run:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "\nnest new my-project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "We've constructed a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "standard mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " structure, with a folder structure that looks like this:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "app.controller.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "app.service.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "app.module.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "node_modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "tslint.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "We can convert this to a monorepo mode structure as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "\ncd my-project\nnest generate app my-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "At this point, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " converts the existing structure to a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "monorepo mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " structure. This results in a few important changes. The folder structure now looks like this:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "my-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "app.controller.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "app.service.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "app.module.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "tsconfig.app.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "my-project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "app.controller.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "app.service.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "app.module.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "tsconfig.app.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "tslint.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "generate app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " schematic has reorganized the code - moving each ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " project under the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, " folder, and adding a project-specific ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "tsconfig.app.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, " file in each project's root folder. Our original ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "my-project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, " app has become the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "default project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, " for the monorepo, and is now a peer with the just-added ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "my-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, ", located under the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, " folder. We'll cover default projects below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, " The conversion of a standard mode structure to monorepo only works for projects that have followed the canonical Nest project structure. Specifically, during conversion, the schematic attempts to relocate the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, " folders in a project folder beneath the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "apps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, " folder in the root. If a project does not use this structure, the conversion will fail or produce unreliable results.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Workspace projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "A mono repo uses the concept of a workspace to manage its member entities. Workspaces are composed of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, ". A project may be either:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, ": a full Nest application including a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, " file to bootstrap the application. Aside from compile and build considerations, an application-type project within a workspace is functionally identical to an application within a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "standard mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, " structure.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, ": a library is a way of packaging a general purpose set of features (modules, providers, controllers, etc.) that can be used within other projects. A library cannot run on its own, and has no ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "main.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, " file. Read more about libraries ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "All workspaces have a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "default project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, " (which should be an application-type project). This is defined by the top-level ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "\"root\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, " property in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, " file, which points at the root of the default project (see ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "CLI properties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, " below for more details). Usually, this is the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "standard mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, " application you started with, and later converted to a monorepo using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "nest generate app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, ". When you follow these steps, this property is populated automatically.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Default projects are used by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "nest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, " commands like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, " when a project name is not supplied.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "For example, in the above monorepo structure, running");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "\n$ nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "will start up the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "my-project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, " app. To start ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "my-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, ", we'd use:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "\n$ nest start my-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "Application-type projects, or what we might informally refer to as just \"applications\", are complete Nest applications that you can run and deploy. You generate an application-type project with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "nest generate app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "This command automatically generates a project skeleton, including the standard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "src");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, " folders from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "typescript starter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, ". Unlike standard mode, an application project in a monorepo does not have any of the package dependency (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "package.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, ") or other project configuration artifacts like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, ".prettierrc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "tslint.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, ". Instead, the monorepo-wide dependencies and config files are used.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "However, the schematic does generate a project-specific ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "tsconfig.app.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, " file in the root folder of the project. This config file automatically sets appropriate build options, including setting the compilation output folder properly. The file extends the top-level (monorepo) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, " file, so you can manage global settings monorepo-wide, but override them if needed at the project level.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "Libraries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "As mentioned, library-type projects, or simply \"libraries\", are packages of Nest components that need to be composed into applications in order to run. You generate a library-type project with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "nest generate library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, ". Deciding what belongs in a library is an architectural design decision. We discuss libraries in depth in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "libraries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, " chapter.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "CLI properties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "Nest keeps the metadata needed to organize, build and deploy both standard and monorepo structured projects in the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, " file. Nest automatically adds to and updates this file as you add projects, so you usually do not have to think about it or edit its contents. However, there are some settings you may want to change manually, so it's helpful to have an overview understanding of the file.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "After running the steps above to create a monorepo, our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, "nest-cli.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, " file looks like this:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "\n{\n  \"collection\": \"@nestjs/schematics\",\n  \"sourceRoot\": \"apps/my-project/src\",\n  \"monorepo\": true,\n  \"root\": \"apps/my-project\",\n  \"compilerOptions\": {\n    \"webpack\": true,\n    \"tsConfigPath\": \"apps/my-project/tsconfig.app.json\"\n  },\n  \"projects\": {\n    \"my-project\": {\n      \"type\": \"application\",\n      \"root\": \"apps/my-project\",\n      \"entryFile\": \"main\",\n      \"sourceRoot\": \"apps/my-project/src\",\n      \"compilerOptions\": {\n        \"tsConfigPath\": \"apps/my-project/tsconfig.app.json\"\n      }\n    },\n    \"my-app\": {\n      \"type\": \"application\",\n      \"root\": \"apps/my-app\",\n      \"entryFile\": \"main\",\n      \"sourceRoot\": \"apps/my-app/src\",\n      \"compilerOptions\": {\n        \"tsConfigPath\": \"apps/my-app/tsconfig.app.json\"\n      }\n    }\n  }\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "The file is divided into sections:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "a global section with top-level properties controlling standard and monorepo-wide settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "a top level property (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "\"projects\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, ") with metadata about each project. This section is present only for monorepo-mode structures.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "The top-level properties are as follows:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, "\"collection\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, ": points at the collection of schematics used to generate components; you generally should not change this value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](400, "\"sourceRoot\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, ": points at the root of the source code for the single project in standard mode structures, or the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](403, "default project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, " in monorepo mode structures");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "\"compilerOptions\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, ": a map with keys specifying compiler options and values specifying the option setting; see details below");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "\"generateOptions\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, ": a map with keys specifying global generate options and values specifying the option setting; see details below");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, "\"monorepo\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](416, ": (monorepo only) for a monorepo mode structure, this value is always ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, "\"root\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, ": (monorepo only) points at the project root of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](424, "default project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, "Global compiler options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, "These properties specify the compiler to use as well as various options that affect ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, "any");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, " compilation step, whether as part of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, ", and regardless of the compiler, whether ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](441, " or webpack.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, "Property Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "Property Value Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](455, "webpack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "If ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, ", use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](464, "webpack compiler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, ". If ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "false");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, " or not present, use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, ". In monorepo mode, the default is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](474, " (use webpack), in standard mode, the default is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "false");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, " (use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](480, "). See below for details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "tsConfigPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](486, "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](488, "(");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "monorepo only");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](491, ") Points at the file containing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, " settings that will be used when ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "nest start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](500, " is called without a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, "project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, " option (e.g., when the default project is built or started).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "webpackConfigPath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](511, "Points at a webpack options file. If not specified, Nest looks for the file ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, "webpack.config.js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](514, ". See below for more details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](518, "deleteOutDir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](520, "boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](522, "If ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](524, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](525, ", whenever the compiler is invoked, it will first remove the compilation output directory (as configured in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](527, "tsconfig.json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, ", where the default is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "./dist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](531, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](535, "assets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](537, "array");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](539, "Enables automatically distributing non-TypeScript assets whenever a compilation step begins (asset distribution does ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, "not");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, " happen on incremental compiles in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, "--watch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](545, " mode). See below for details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, "Global generate options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "These properties specify the default generate options to be used by the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, "nest generate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, " command.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](558, "Property Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "Property Value Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](562, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "spec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "boolean ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](572, " object");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, "If the value is boolean, a value of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](576, "true");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](577, " enables ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](579, "spec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](580, " generation by default and a value of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](582, "false");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](583, " disables it. A flag passed on the CLI command line overrides this setting, as does a project-specific ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](585, "generateOptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](586, " setting (more below). If the value is an object, each key represents a schematic name, and the boolean value determines whether the default spec generation is enabled / disabled for that specific schematic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](587, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](588, "The following example uses a boolean value to specify that spec file generation should be disabled by default for all projects:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](591, "\n{\n  \"generateOptions\": {\n    \"spec\": false\n  },\n  ...\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "In the following example, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](595, "spec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](596, " file generation is disabled only for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](598, "service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](599, " schematics (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](601, "nest generate service...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](602, "):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](604, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](605, "\n{\n  \"generateOptions\": {\n    \"spec\": {\n      \"service\": false\n    }\n  },\n  ...\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "blockquote", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](608, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](609, " When specifying the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "spec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](612, " as an object, the key for the generation schematic does not currently support automatic alias handling. This means that specifying a key as for example ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](613, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](614, "service: false");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](615, " and trying to generate a service via the alias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](617, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](618, ", the spec would still be generated. To make sure both the normal schematic name and the alias work as intended, specify both the normal command name as well as the alias, as seen below.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](620, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](621, "\n{\n  \"generateOptions\": {\n    \"spec\": {\n      \"service\": false,\n      \"s\": false\n    }\n  },\n  ...\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](622, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](623, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](624, "Project-specific generate options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](625, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](626, "In addition to providing global generate options, you may also specify project-specific generate options. The project specific generate options follow the exact same format as the global generate options, but are specified directly on each project.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](627, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](628, "Project-specific generate options override global generate options.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](629, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](630, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](631, "\n{\n  \"projects\": {\n    \"cats-project\": {\n      \"generateOptions\": {\n        \"spec\": {\n          \"service\": false\n        }\n      },\n      ...\n    }\n  },\n  ...\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](632, "blockquote", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](634, "Notice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](635, " The order of precedence for generate options is as follows. Options specified on the CLI command line take precedence over project-specific options. Project-specific options override global options.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](636, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](637, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](638, "Specified compiler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](639, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](640, "The reason for the different default compilers is that for larger projects (e.g., more typical in a monorepo) webpack can have significant advantages in build times and in producing a single file bundling all project components together. If you wish to generate individual files, set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](641, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](642, "\"webpack\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](643, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](644, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](645, "false");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](646, ", which will cause the build process to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](647, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](648, "tsc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](649, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](650, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](651, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](652, "Webpack options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](654, "The webpack options file can contain standard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](655, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](656, "webpack configuration options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](657, ". For example, to tell webpack to bundle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](658, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](659, "node_modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](660, " (which are excluded by default), add the following to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](661, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](662, "webpack.config.js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](663, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](664, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](665, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](666, "\nmodule.exports = {\n  externals: [],\n};");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](667, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](668, "Since the webpack config file is a JavaScript file, you can even expose a function that takes default options and returns a modified object:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](669, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](670, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](671, "\nmodule.exports = function(options) {\n  return {\n    ...options,\n    externals: [],\n  };\n}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](672, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](674, "Assets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](675, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](676, "TypeScript compilation automatically distributes compiler output (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](677, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](678, ".js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](679, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](680, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](681, ".d.ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](682, " files) to the specified output directory. It can also be convenient to distribute non-TypeScript files, such as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](683, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](684, ".graphql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](685, " files, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](686, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](687, "images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](688, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](689, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](690, ".html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](691, " files and other assets. This allows you to treat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](692, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](693, "nest build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](694, " (and any initial compilation step) as a lightweight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](695, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](696, "development build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](697, " step, where you may be editing non-TypeScript files and iteratively compiling and testing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](698, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](699, "The value of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](700, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](701, "assets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](702, " key should be an array of elements specifying the files to be distributed. The elements can be simple strings with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](703, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](704, "glob");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](705, "-like file specs, for example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](706, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](707, "code", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](708, "\n\"assets\": [\"**/*.graphql\"]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](709, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](710, "For finer control, the elements can be objects with the following keys:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](711, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](712, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](713, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](714, "\"include\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](715, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](716, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](717, "glob");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](718, "-like file specifications for the assets to be distributed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](719, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](720, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](721, "\"exclude\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](722, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](723, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](724, "glob");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](725, "-like file specifications for assets to be ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](726, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](727, "excluded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](728, " from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](729, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](730, "include");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](731, " list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](732, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](733, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](734, "\"outDir\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](735, ": a string specifying the path (relative to the root folder) where the assets should be distributed. Defaults to the same output directory configured for compiler output.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](736, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](737, "For example:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](738, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](739, "code", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](740, "\n\"assets\": [\n  { \"include\": \"**/*.graphql\", \"exclude\": \"**/omitted.graphql\" },\n]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](741, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](742, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](743, "Project properties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](744, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](745, "This element exists only for monorepo-mode structures. You generally should not edit these properties, as they are used by Nest to locate projects and their configuration options within the monorepo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_directives_header_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      encapsulation: 2,
      changeDetection: 0
    });

    var ??CliWorkspacesComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](CliWorkspacesComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CliWorkspacesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-workspaces',
          templateUrl: './workspaces.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=homepage-pages-cli-cli-module-es5.js.map