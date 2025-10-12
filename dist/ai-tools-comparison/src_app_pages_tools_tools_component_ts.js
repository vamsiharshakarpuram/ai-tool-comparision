"use strict";
(self["webpackChunkai_tools_comparison"] = self["webpackChunkai_tools_comparison"] || []).push([["src_app_pages_tools_tools_component_ts"],{

/***/ 1745:
/*!*********************************************************!*\
  !*** ./src/app/components/filters/filters.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersComponent: () => (/* binding */ FiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function FiltersComponent_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1);
  }
}
class FiltersComponent {
  constructor() {
    this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.categories = ['Text AI', 'Image AI', 'Video AI', 'Code AI', 'Productivity AI', 'Voice AI'];
    this.state = {};
  }
  emit(key, value) {
    this.state[key] = value;
    this.changed.emit({
      ...this.state
    });
  }
  static {
    this.ɵfac = function FiltersComponent_Factory(t) {
      return new (t || FiltersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FiltersComponent,
      selectors: [["app-filters"]],
      outputs: {
        changed: "changed"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 41,
      vars: 1,
      consts: [[1, "card"], [1, "grid", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "block", "text-sm", "font-medium", "mb-1"], [1, "w-full", "rounded-xl", "ring-1", "ring-slate-200", "p-2", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "search", "placeholder", "Search tools...", 1, "w-full", "rounded-xl", "ring-1", "ring-slate-200", "p-2", 3, "input"], [3, "value"]],
      template: function FiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FiltersComponent_Template_select_change_5_listener($event) {
            return ctx.emit("category", $event.target.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FiltersComponent_option_8_Template, 2, 2, "option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pricing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FiltersComponent_Template_select_change_12_listener($event) {
            return ctx.emit("pricing", $event.target.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Free");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Freemium");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div")(22, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Min Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FiltersComponent_Template_select_change_24_listener($event) {
            return ctx.emit("rating", $event.target.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Any");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div")(38, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FiltersComponent_Template_input_input_40_listener($event) {
            return ctx.emit("q", $event.target.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgFor],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4129:
/*!*************************************************************!*\
  !*** ./src/app/components/tool-card/tool-card.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolCardComponent: () => (/* binding */ ToolCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_tool_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/tool.service */ 1744);




const _c0 = a0 => ["/tool", a0];
function ToolCardComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Compared");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ToolCardComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+ ", p_r1, "");
  }
}
function ToolCardComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u2212 ", ctx_r1.tool.cons[0], "");
  }
}
class ToolCardComponent {
  constructor(svc) {
    this.svc = svc;
    this.isCompared = false;
  }
  onImgError(event) {
    event.target.src = 'assets/logos/default.png';
  }
  static {
    this.ɵfac = function ToolCardComponent_Factory(t) {
      return new (t || ToolCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tool_service__WEBPACK_IMPORTED_MODULE_0__.ToolService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ToolCardComponent,
      selectors: [["app-tool-card"]],
      inputs: {
        tool: "tool",
        isCompared: "isCompared"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 23,
      vars: 16,
      consts: [[1, "card", "group", "h-full", "flex", "flex-col", "cursor-pointer", "transition-all", "duration-300", "hover:scale-105", "hover:shadow-2xl", "bg-gradient-to-br", "from-brand-50", "to-white", "relative"], ["class", "absolute top-2 right-2 bg-brand-600 text-white text-xs px-3 py-1 rounded-full shadow z-10 animate-bounce", 4, "ngIf"], [1, "flex", "items-center", "gap-4", "mb-2"], [1, "flex", "items-center", "justify-center", "h-16", "w-16", "rounded-xl", "ring-2", "ring-brand-200", "bg-gradient-to-tr", "from-brand-100", "to-brand-50", "shadow-lg"], [1, "tool-logo", "object-contain", "bg-white", 2, "width", "56px", "height", "56px", "max-width", "56px", "max-height", "56px", "display", "block", "margin", "auto", "padding", "4px", "border-radius", "0.75rem", "box-shadow", "0 2px 8px rgba(0,0,0,0.04)", 3, "src", "alt"], [1, "flex-1"], [1, "font-semibold", "text-lg", "group-hover:text-brand-700", "transition", 3, "routerLink"], [1, "text-xs", "text-slate-600", "mt-1"], [1, "badge"], [1, "mt-3", "text-base", "text-slate-700", "flex-1", "font-medium"], [1, "mt-4", "flex", "flex-wrap", "items-center", "gap-2"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mt-6", "flex", "items-center", "justify-between", "gap-2"], [1, "btn-secondary", "w-1/2", 3, "click"], [1, "btn-primary", "w-1/2", 3, "click"], [1, "absolute", "top-2", "right-2", "bg-brand-600", "text-white", "text-xs", "px-3", "py-1", "rounded-full", "shadow", "z-10", "animate-bounce"], [1, "pill", "bg-green-50", "text-green-700"], [1, "pill", "bg-red-50", "text-red-700"]],
      template: function ToolCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToolCardComponent_span_1_Template, 2, 0, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ToolCardComponent_ng_container_15_Template, 3, 1, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ToolCardComponent_ng_container_17_Template, 3, 1, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolCardComponent_Template_button_click_19_listener() {
            return ctx.svc.toggleCompare(ctx.tool.id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Add to Compare");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolCardComponent_Template_button_click_21_listener() {
            return ctx.svc.toggleFavorite(ctx.tool.id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCompared);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.tool.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.tool.name + " logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.tool.slug));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tool.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tool.category);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tool.pricing);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tool.shortDescription);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](16, 10, ctx.tool.pros, 0, 2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tool.cons.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9319:
/*!************************************************!*\
  !*** ./src/app/pages/tools/tools.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolsComponent: () => (/* binding */ ToolsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_tool_card_tool_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/tool-card/tool-card.component */ 4129);
/* harmony import */ var _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/filters/filters.component */ 1745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tool.service */ 1744);







function ToolsComponent_ng_container_4_app_tool_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-tool-card", 7);
  }
  if (rf & 2) {
    const tool_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tool", tool_r2)("isCompared", ctx_r2.isCompared(tool_r2.id));
  }
}
function ToolsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ToolsComponent_ng_container_4_app_tool_card_1_Template, 1, 2, "app-tool-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.filtered());
  }
}
function ToolsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No tools match your filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ToolsComponent_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", t_r5.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", t_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](t_r5.name);
  }
}
function ToolsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ToolsComponent_div_7_ng_container_2_Template, 5, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Compare Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolsComponent_div_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.clearCompare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.compareTools());
  }
}
class ToolsComponent {
  constructor(svc) {
    this.svc = svc;
    this.state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)({});
    this.filtered = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
      const s = this.state();
      return this.svc.tools().filter(t => {
        return (!s['category'] || t.category === s['category']) && (!s['pricing'] || t.pricing === s['pricing']) && (!s['rating'] || t.rating >= Number(s['rating'])) && (!s['q'] || t.name.toLowerCase().includes(s['q'].toLowerCase()) || t.shortDescription.toLowerCase().includes(s['q'].toLowerCase()));
      });
    });
    this.compareTools = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
      const ids = Array.from(this.svc.compareList());
      return this.svc.tools().filter(t => ids.includes(t.id));
    });
  }
  isCompared(id) {
    return this.svc.compareList().has(id);
  }
  clearCompare() {
    this.svc.clearCompare();
  }
  onFilters(v) {
    this.state.set(v);
  }
  static {
    this.ɵfac = function ToolsComponent_Factory(t) {
      return new (t || ToolsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ToolsComponent,
      selectors: [["app-tools"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 3,
      consts: [["empty", ""], [1, "text-2xl", "font-bold", "mb-4"], [3, "changed"], [1, "mt-6", "grid-auto"], [4, "ngIf", "ngIfElse"], ["class", "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white rounded-2xl shadow-lg ring-1 ring-brand-200 px-6 py-3 flex items-center gap-4 animate-fade-in", 4, "ngIf"], [3, "tool", "isCompared", 4, "ngFor", "ngForOf"], [3, "tool", "isCompared"], [1, "card"], [1, "fixed", "bottom-4", "left-1/2", "-translate-x-1/2", "z-50", "bg-white", "rounded-2xl", "shadow-lg", "ring-1", "ring-brand-200", "px-6", "py-3", "flex", "items-center", "gap-4", "animate-fade-in"], [1, "flex", "items-center", "gap-2"], [4, "ngFor", "ngForOf"], ["routerLink", "/compare-now", 1, "btn-primary", "ml-4"], [1, "btn-secondary", "ml-2", 3, "click"], [1, "flex", "flex-col", "items-center"], [1, "h-10", "w-10", "rounded-xl", "ring-2", "ring-brand-200", "object-cover", "shadow", 3, "src", "alt"], [1, "text-xs", "font-semibold", "mt-1"]],
      template: function ToolsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Browse Tools");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-filters", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changed", function ToolsComponent_Template_app_filters_changed_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onFilters($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ToolsComponent_ng_container_4_Template, 2, 1, "ng-container", 4)(5, ToolsComponent_ng_template_5_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ToolsComponent_div_7_Template, 7, 1, "div", 5);
        }
        if (rf & 2) {
          const empty_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filtered().length)("ngIfElse", empty_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.compareTools().length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_tool_card_tool_card_component__WEBPACK_IMPORTED_MODULE_0__.ToolCardComponent, _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_1__.FiltersComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tools_tools_component_ts.js.map