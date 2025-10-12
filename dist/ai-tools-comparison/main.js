"use strict";
(self["webpackChunkai_tools_comparison"] = self["webpackChunkai_tools_comparison"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AppComponent {
  constructor() {
    this.year = new Date().getFullYear();
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 1,
      consts: [[1, "border-b", "bg-white", "sticky", "top-0", "z-50"], [1, "container"], [1, "flex", "items-center", "justify-between", "py-4"], ["routerLink", "/", 1, "flex", "items-center", "gap-2", "font-semibold", "text-lg"], [1, "inline-flex", "h-8", "w-8", "items-center", "justify-center", "rounded-xl", "bg-brand-600", "text-white"], [1, "hidden", "md:flex", "items-center", "gap-6"], ["routerLink", "/tools", 1, "hover:text-brand-700"], ["routerLink", "/compare", 1, "hover:text-brand-700"], ["routerLink", "/favorites", 1, "hover:text-brand-700"], ["routerLink", "/blog", 1, "hover:text-brand-700"], ["routerLink", "/about", 1, "hover:text-brand-700"], ["routerLink", "/contact", 1, "hover:text-brand-700"], ["routerLink", "/tools", 1, "btn-primary"], [1, "container", "py-8"], [1, "mt-16", "border-t"], [1, "container", "py-8", "text-sm", "text-slate-600"], [1, "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-4"], ["href", "#", 1, "hover:text-brand-700"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AI");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tools Compare ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 5)(8, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tools");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Compare");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Favorites");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Compare Tools Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "main", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "footer", 14)(25, "div", 15)(26, "div", 16)(27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17)(30, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Privacy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " AI Tools Compare. All rights reserved.");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = [{
  path: '',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.component */ 5047)).then(m => m.HomeComponent),
  title: 'AI Tools — Find the Best Tool'
}, {
  path: 'tools',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tools_tools_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tools/tools.component */ 9319)).then(m => m.ToolsComponent),
  title: 'Browse Tools'
}, {
  path: 'compare',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_compare_compare_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/compare/compare.component */ 8551)).then(m => m.CompareComponent),
  title: 'Compare Tools'
}, {
  path: 'compare-now',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_compare-now_compare-now_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/compare-now/compare-now.component */ 79)).then(m => m.CompareNowComponent),
  title: 'Compare Now'
}, {
  path: 'favorites',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_favorites_favorites_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/favorites/favorites.component */ 147)).then(m => m.FavoritesComponent),
  title: 'Favorites'
}, {
  path: 'blog',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_blog_blog_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/blog/blog.component */ 4453)).then(m => m.BlogComponent),
  title: 'Blog'
}, {
  path: 'about',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.component */ 1311)).then(m => m.AboutComponent),
  title: 'About'
}, {
  path: 'contact',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact_contact_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.component */ 2951)).then(m => m.ContactComponent),
  title: 'Contact'
}, {
  path: 'tool/:slug',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tool-detail_tool-detail_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tool-detail/tool-detail.component */ 2803)).then(m => m.ToolDetailComponent),
  title: 'Tool Details'
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js */ 4124);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_2__);






(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_4__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.provideAnimations)()]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map