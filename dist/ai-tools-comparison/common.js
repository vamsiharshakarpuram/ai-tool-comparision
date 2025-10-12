"use strict";
(self["webpackChunkai_tools_comparison"] = self["webpackChunkai_tools_comparison"] || []).push([["common"],{

/***/ 1744:
/*!******************************************!*\
  !*** ./src/app/services/tool.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolService: () => (/* binding */ ToolService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class ToolService {
  constructor() {
    this._tools = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    this._favorites = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(new Set());
    this._compare = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(new Set());
    this.tools = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this._tools());
    this.favorites = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this._favorites());
    this.compareList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => this._compare());
    const fav = localStorage.getItem('favorites');
    const cmp = localStorage.getItem('compare');
    if (fav) this._favorites.set(new Set(JSON.parse(fav)));
    if (cmp) this._compare.set(new Set(JSON.parse(cmp)));
    // Load tools from assets
    fetch('assets/data/tools.json').then(r => r.json()).then(data => this._tools.set(data)).catch(err => console.error('Failed to load tools.json', err));
  }
  getBySlug(slug) {
    return this._tools().find(t => t.slug === slug);
  }
  toggleFavorite(id) {
    const set = new Set(this._favorites());
    set.has(id) ? set.delete(id) : set.add(id);
    this._favorites.set(set);
    localStorage.setItem('favorites', JSON.stringify(Array.from(set)));
  }
  toggleCompare(id) {
    const set = new Set(this._compare());
    if (set.has(id)) set.delete(id);else {
      if (set.size >= 4) {
        alert('You can compare up to 4 tools.');
        return;
      }
      set.add(id);
    }
    this._compare.set(set);
    localStorage.setItem('compare', JSON.stringify(Array.from(set)));
  }
  clearCompare() {
    this._compare.set(new Set());
    localStorage.setItem('compare', JSON.stringify([]));
  }
  static {
    this.ɵfac = function ToolService_Factory(t) {
      return new (t || ToolService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToolService,
      factory: ToolService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map