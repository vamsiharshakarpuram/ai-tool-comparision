"use strict";
(self["webpackChunkai_tools_comparison"] = self["webpackChunkai_tools_comparison"] || []).push([["src_app_pages_compare-now_compare-now_component_ts"],{

/***/ 79:
/*!************************************************************!*\
  !*** ./src/app/pages/compare-now/compare-now.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompareNowComponent: () => (/* binding */ CompareNowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_tool_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/tool.service */ 1744);





const _c0 = a0 => ["/tool", a0];
const _c1 = () => [];
function CompareNowComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompareNowComponent_div_8_Template_button_click_4_listener() {
      const t_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.remove(t_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", t_r2.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", t_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r2.name);
  }
}
function CompareNowComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No tools selected yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CompareNowComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nothing to compare yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add up to 4 tools to see instant differences.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Browse Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CompareNowComponent_section_18_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", t_r4.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", t_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, t_r4.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r4.name);
  }
}
function CompareNowComponent_section_18_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r5.category);
  }
}
function CompareNowComponent_section_18_td_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2022 ", t_r6.priceRange, "");
  }
}
function CompareNowComponent_section_18_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CompareNowComponent_section_18_td_16_span_3_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", t_r6.pricing === "Free" ? "chip-green" : t_r6.pricing === "Paid" ? "chip-red" : "chip-yellow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r6.pricing, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", t_r6.priceRange);
  }
}
function CompareNowComponent_section_18_td_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const t_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("star--on", s_r7 <= t_r8.rating)("star--off", s_r7 > t_r8.rating);
  }
}
function CompareNowComponent_section_18_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CompareNowComponent_section_18_td_20_ng_container_2_Template, 3, 4, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", t_r8.rating, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", t_r8.rating / 5 * 100, "%");
  }
}
function CompareNowComponent_section_18_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", t_r9.apiAvailable ? "chip-green" : "chip-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r9.apiAvailable ? "Available" : "No API", " ");
  }
}
function CompareNowComponent_section_18_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", t_r10.hasFreeTrial ? "chip-green" : "chip-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r10.hasFreeTrial ? "Yes" : "No", " ");
  }
}
function CompareNowComponent_section_18_td_32_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r11);
  }
}
function CompareNowComponent_section_18_td_32_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CompareNowComponent_section_18_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CompareNowComponent_section_18_td_32_span_2_Template, 2, 1, "span", 47)(3, CompareNowComponent_section_18_td_32_span_3_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", t_r12.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(t_r12.tags == null ? null : t_r12.tags.length));
  }
}
function CompareNowComponent_section_18_td_36_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r13);
  }
}
function CompareNowComponent_section_18_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38)(1, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CompareNowComponent_section_18_td_36_li_2_Template, 2, 1, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 1, t_r14.pros, 0, 3));
  }
}
function CompareNowComponent_section_18_td_40_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r15);
  }
}
function CompareNowComponent_section_18_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38)(1, "ul", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CompareNowComponent_section_18_td_40_li_2_Template, 2, 1, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 1, t_r16.cons, 0, 3));
  }
}
function CompareNowComponent_section_18_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 38)(1, "div", 35)(2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Full Breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Visit Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, t_r17.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", t_r17.website, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function CompareNowComponent_section_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 22)(1, "div", 23)(2, "table", 24)(3, "thead")(4, "tr", 25)(5, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Metric");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CompareNowComponent_section_18_th_7_Template, 5, 6, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody", 28)(9, "tr")(10, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CompareNowComponent_section_18_td_12_Template, 2, 1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr")(14, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CompareNowComponent_section_18_td_16_Template, 4, 3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr")(18, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CompareNowComponent_section_18_td_20_Template, 7, 4, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr")(22, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "API");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CompareNowComponent_section_18_td_24_Template, 3, 2, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr")(26, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Free Trial");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CompareNowComponent_section_18_td_28_Template, 3, 2, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr")(30, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Best for");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CompareNowComponent_section_18_td_32_Template, 4, 2, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tr")(34, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Pros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CompareNowComponent_section_18_td_36_Template, 4, 5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr")(38, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Cons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, CompareNowComponent_section_18_td_40_Template, 4, 5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr", 32)(42, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, CompareNowComponent_section_18_td_44_Template, 6, 4, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Tip: Scroll horizontally to view all columns on smaller screens.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
  }
}
function CompareNowComponent_section_19_article_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", t_r19.priceRange, ")");
  }
}
function CompareNowComponent_section_19_article_2_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const s_r20 = ctx.$implicit;
    const t_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("star--on", s_r20 <= t_r19.rating)("star--off", s_r20 > t_r19.rating);
  }
}
function CompareNowComponent_section_19_article_2_li_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r21);
  }
}
function CompareNowComponent_section_19_article_2_li_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r22);
  }
}
function CompareNowComponent_section_19_article_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "In Compare");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "header", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 60)(6, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CompareNowComponent_section_19_article_2_span_10_Template, 2, 1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompareNowComponent_section_19_article_2_Template_button_click_11_listener() {
      const t_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.remove(t_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 65)(14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CompareNowComponent_section_19_article_2_ng_container_15_Template, 3, 4, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "section", 67)(21, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Best for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "section", 65)(28, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Key Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 72)(31, "li", 35)(32, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " API Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 35)(36, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Free Trial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 35)(40, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Highly Rated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section", 74)(44, "div")(45, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\uD83D\uDC4D Pros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ul", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CompareNowComponent_section_19_article_2_li_48_Template, 2, 1, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div")(50, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\uD83D\uDC4E Cons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, CompareNowComponent_section_19_article_2_li_53_Template, 2, 1, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "footer", 78)(55, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Full Breakdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Visit Official Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", t_r19.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", t_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, t_r19.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r19.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", t_r19.category, " \u2022 ", t_r19.pricing, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", t_r19.priceRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", t_r19.rating, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", t_r19.rating / 5 * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((t_r19.tags || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c1)).join(", ") || "General use");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](t_r19.shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", t_r19.apiAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r19.apiAvailable ? "\u2713" : "\u2717", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", t_r19.hasFreeTrial ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r19.hasFreeTrial ? "\u2713" : "\u2717", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", t_r19.rating >= 4 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r19.rating >= 4 ? "\u2713" : "\u2717", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", t_r19.pros);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", t_r19.cons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, t_r19.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", t_r19.website, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function CompareNowComponent_section_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 22)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CompareNowComponent_section_19_article_2_Template, 59, 28, "article", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("rail flex gap-6 md:grid md:grid-cols-2 lg:grid-cols-", ctx_r2.cols(), " md:gap-8 justify-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.tools());
  }
}
class CompareNowComponent {
  constructor(svc) {
    this.svc = svc;
    this.view = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('table');
    this.stars = [1, 2, 3, 4, 5];
    this.tools = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const ids = Array.from(this.svc.compareList());
      return this.svc.tools().filter(t => ids.includes(t.id));
    });
    this.cols = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => Math.min(4, Math.max(1, this.tools().length || 1)));
  }
  remove(id) {
    this.svc.toggleCompare(id);
  }
  static {
    this.ɵfac = function CompareNowComponent_Factory(t) {
      return new (t || CompareNowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tool_service__WEBPACK_IMPORTED_MODULE_0__.ToolService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CompareNowComponent,
      selectors: [["app-compare-now"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 9,
      consts: [[1, "text-4xl", "md:text-5xl", "font-black", "mb-3", "text-center", "tracking-tight"], [1, "bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-brand-600", "via-brand-500", "to-brand-700"], [1, "max-w-3xl", "mx-auto", "mb-6", "text-center", "text-slate-600", "text-lg"], [1, "sticky", "top-0", "z-30", "glass", "border-b", "border-slate-200"], [1, "max-w-7xl", "mx-auto", "px-4", "py-3", "flex", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-2", "overflow-x-auto"], ["class", "flex items-center gap-2 bg-white ring-1 ring-slate-200 rounded-xl px-2 py-1", 4, "ngFor", "ngForOf"], ["class", "text-sm text-slate-500", 4, "ngIf"], [1, "shrink-0", "flex", "items-center", "gap-2"], [1, "btn-toggle", 3, "click", "ngClass"], ["routerLink", "/tools", 1, "btn-primary"], ["class", "card text-center py-12 animate-float mt-6", 4, "ngIf"], ["class", "mt-6 animate-float", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "bg-white", "ring-1", "ring-slate-200", "rounded-xl", "px-2", "py-1"], [1, "h-6", "w-6", "rounded-md", "object-contain", "ring-1", "ring-slate-200", "bg-white", 3, "src", "alt"], [1, "text-sm", "font-semibold", "text-slate-800"], ["aria-label", "Remove from compare", 1, "remove-chip", 3, "click"], [1, "text-sm", "text-slate-500"], [1, "card", "text-center", "py-12", "animate-float", "mt-6"], [1, "text-2xl", "font-semibold", "mb-2"], [1, "text-slate-500"], ["routerLink", "/tools", 1, "btn-primary", "mt-6", "inline-flex"], [1, "mt-6", "animate-float"], [1, "overflow-x-auto"], [1, "min-w-[800px]", "w-full", "text-sm", "border-separate", "border-spacing-0"], [1, "text-left"], [1, "table-cell", "table-head", "bg-slate-100", "rounded-tl-xl"], ["class", "table-cell font-semibold text-slate-700 bg-slate-100", 4, "ngFor", "ngForOf"], [1, "divide-y", "divide-slate-200"], [1, "table-cell", "table-head"], ["class", "table-cell", 4, "ngFor", "ngForOf"], [1, "table-cell", "table-head", "rounded-bl-xl"], [1, "bg-slate-50"], [1, "mt-4", "text-xs", "text-slate-500", "text-center"], [1, "table-cell", "font-semibold", "text-slate-700", "bg-slate-100"], [1, "flex", "items-center", "gap-2"], [1, "h-6", "w-6", "rounded-md", "ring-1", "ring-slate-200", "bg-white", "object-contain", 3, "src", "alt"], [1, "hover:underline", "text-slate-900", 3, "routerLink"], [1, "table-cell"], [1, "chip", 3, "ngClass"], ["class", "text-slate-500", 4, "ngIf"], [1, "mr-2"], [4, "ngFor", "ngForOf"], [1, "text-slate-600"], [1, "kpi-bar", "mt-2", "w-48", "max-w-full"], [1, "star"], [1, "flex", "flex-wrap", "gap-2"], ["class", "chip chip-brand", 4, "ngFor", "ngForOf"], ["class", "text-slate-400", 4, "ngIf"], [1, "chip", "chip-brand"], [1, "text-slate-400"], [1, "text-green-700", "list-disc", "list-inside", "space-y-1"], [1, "text-red-700", "list-disc", "list-inside", "space-y-1"], [1, "btn-secondary", 3, "routerLink"], ["target", "_blank", "rel", "noopener", 1, "btn-primary", 3, "href"], ["class", "card-hero", 4, "ngFor", "ngForOf"], [1, "card-hero"], [1, "absolute", "-top-3", "left-4", "chip", "chip-brand"], [1, "flex", "items-center", "gap-3"], [1, "h-12", "w-12", "object-contain", "rounded-xl", "ring-2", "ring-brand-200", "bg-white", 3, "src", "alt"], [1, "min-w-0"], [1, "font-extrabold", "text-xl", "text-slate-900", "hover:text-brand-700", "hover:underline", "truncate", 3, "routerLink"], [1, "text-xs", "text-slate-500"], [4, "ngIf"], ["aria-label", "Remove from compare", 1, "ml-auto", "remove-chip", 3, "click"], [1, "mt-4"], [1, "kpi-bar", "mt-3"], [1, "mt-3"], [1, "text-sm", "text-brand-700", "font-semibold", "bg-brand-50", "ring-1", "ring-brand-100", "rounded-xl", "px-3", "py-1", "inline-block"], [1, "font-bold"], [1, "mt-3", "text-sm", "text-slate-700"], [1, "font-semibold", "text-slate-800", "mb-2"], [1, "space-y-1", "text-sm"], [1, "inline-flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", 3, "ngClass"], [1, "mt-4", "grid", "grid-cols-2", "gap-4"], [1, "font-semibold", "text-slate-800", "mb-1"], [1, "list-disc", "list-inside", "text-green-700", "space-y-1", "text-sm"], [1, "list-disc", "list-inside", "text-red-700", "space-y-1", "text-sm"], [1, "mt-6", "flex", "items-center", "justify-between", "gap-3"]],
      template: function CompareNowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Compare AI Tools ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Scan differences in a table, then dive deeper in card view. Toggle any time. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CompareNowComponent_div_8_Template, 6, 3, "div", 6)(9, CompareNowComponent_span_9_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompareNowComponent_Template_button_click_11_listener() {
            return ctx.view.set("table");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Table");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompareNowComponent_Template_button_click_13_listener() {
            return ctx.view.set("cards");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cards");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Add More");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CompareNowComponent_div_17_Template, 7, 0, "div", 11)(18, CompareNowComponent_section_18_Template, 47, 10, "section", 12)(19, CompareNowComponent_section_19_Template, 3, 4, "section", 12);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tools());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tools().length);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.view() === "table" ? "btn-toggle-on" : "btn-toggle-off");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-pressed", ctx.view() === "table");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.view() === "cards" ? "btn-toggle-on" : "btn-toggle-off");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-pressed", ctx.view() === "cards");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tools().length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tools().length && ctx.view() === "table");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tools().length && ctx.view() === "cards");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: ["@keyframes _ngcontent-%COMP%_floatUp { from { transform: translateY(6px); opacity: .85 } to { transform: translateY(0); opacity: 1 } }\n    .animate-float[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_floatUp .35s ease-out both }\n    .glass[_ngcontent-%COMP%] { backdrop-filter: blur(12px); background: linear-gradient(180deg, rgba(255,255,255,.85), rgba(255,255,255,.65)); }\n    .chip[_ngcontent-%COMP%] { white-space: nowrap; border-radius: 9999px; padding-left: 0.5rem; padding-right: 0.5rem; padding-top: 0.25rem; padding-bottom: 0.25rem; font-size: 0.75rem; line-height: 1rem; font-weight: 600 }\n    .chip-brand[_ngcontent-%COMP%] { --tw-bg-opacity: 1; background-color: rgb(238 242 255 / var(--tw-bg-opacity, 1)); --tw-text-opacity: 1; color: rgb(67 56 202 / var(--tw-text-opacity, 1)); --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); --tw-ring-opacity: 1; --tw-ring-color: rgb(199 210 254 / var(--tw-ring-opacity, 1)) }\n    .chip-green[_ngcontent-%COMP%] { --tw-bg-opacity: 1; background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1)); --tw-text-opacity: 1; color: rgb(21 128 61 / var(--tw-text-opacity, 1)); --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); --tw-ring-opacity: 1; --tw-ring-color: rgb(187 247 208 / var(--tw-ring-opacity, 1)) }\n    .chip-yellow[_ngcontent-%COMP%] { --tw-bg-opacity: 1; background-color: rgb(254 252 232 / var(--tw-bg-opacity, 1)); --tw-text-opacity: 1; color: rgb(161 98 7 / var(--tw-text-opacity, 1)); --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); --tw-ring-opacity: 1; --tw-ring-color: rgb(254 240 138 / var(--tw-ring-opacity, 1)) }\n    .chip-red[_ngcontent-%COMP%] { --tw-bg-opacity: 1; background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1)); --tw-text-opacity: 1; color: rgb(185 28 28 / var(--tw-text-opacity, 1)); --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); --tw-ring-opacity: 1; --tw-ring-color: rgb(254 202 202 / var(--tw-ring-opacity, 1)) }\n    .star[_ngcontent-%COMP%] { font-size: 1.125rem; line-height: 1.75rem; line-height: 1 }\n    .star--on[_ngcontent-%COMP%] { --tw-text-opacity: 1; color: rgb(251 191 36 / var(--tw-text-opacity, 1)) }\n    .star--off[_ngcontent-%COMP%] { --tw-text-opacity: 1; color: rgb(203 213 225 / var(--tw-text-opacity, 1)) }\n    .kpi-bar[_ngcontent-%COMP%] { height: 0.5rem; overflow: hidden; border-radius: 9999px; --tw-bg-opacity: 1; background-color: rgb(226 232 240 / var(--tw-bg-opacity, 1)) }\n    .kpi-bar[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { display: block; height: 100%; --tw-bg-opacity: 1; background-color: rgb(99 102 241 / var(--tw-bg-opacity, 1)) }\n    .rail[_ngcontent-%COMP%] { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }\n    .rail[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { scroll-snap-align: start; }\n    .btn-toggle[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: 0.5rem; border-radius: 1rem; padding-left: 0.75rem; padding-right: 0.75rem; padding-top: 0.375rem; padding-bottom: 0.375rem; font-size: 0.875rem; line-height: 1.25rem; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms }\n    .btn-toggle-on[_ngcontent-%COMP%] { --tw-bg-opacity: 1; background-color: rgb(79 70 229 / var(--tw-bg-opacity, 1)); --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity, 1)); --tw-ring-opacity: 1; --tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity, 1)) }\n    .btn-toggle-off[_ngcontent-%COMP%] { --tw-bg-opacity: 1; background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1)); --tw-text-opacity: 1; color: rgb(51 65 85 / var(--tw-text-opacity, 1)); --tw-ring-opacity: 1; --tw-ring-color: rgb(226 232 240 / var(--tw-ring-opacity, 1)) }\n    .btn-toggle-off[_ngcontent-%COMP%]:hover { --tw-bg-opacity: 1; background-color: rgb(248 250 252 / var(--tw-bg-opacity, 1)) }\n    .table-cell[_ngcontent-%COMP%] { padding: 0.75rem; vertical-align: top }\n    .table-head[_ngcontent-%COMP%] { position: sticky; left: 0px; border-right-width: 1px; --tw-border-opacity: 1; border-color: rgb(226 232 240 / var(--tw-border-opacity, 1)); --tw-bg-opacity: 1; background-color: rgb(248 250 252 / var(--tw-bg-opacity, 1)); font-weight: 600 }\n    .remove-chip[_ngcontent-%COMP%] { border-radius: 9999px; --tw-bg-opacity: 1; background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1)); padding-left: 0.5rem; padding-right: 0.5rem; padding-top: 0.25rem; padding-bottom: 0.25rem; font-size: 0.75rem; line-height: 1rem; --tw-text-opacity: 1; color: rgb(71 85 105 / var(--tw-text-opacity, 1)); transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms }\n    .remove-chip[_ngcontent-%COMP%]:hover { --tw-bg-opacity: 1; background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1)); --tw-text-opacity: 1; color: rgb(185 28 28 / var(--tw-text-opacity, 1)) }\n    .card-hero[_ngcontent-%COMP%] { position: relative; border-radius: 1rem; border-width: 1px; --tw-border-opacity: 1; border-color: rgb(226 232 240 / var(--tw-border-opacity, 1)); --tw-bg-opacity: 1; background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1)); padding: 1.5rem; --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhcmUtbm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0kscUJBQXFCLE9BQU8sMEJBQTBCLEVBQUUsYUFBYSxFQUFFLEtBQUssd0JBQXdCLEVBQUUsV0FBVyxFQUFFO0lBQ25ILGlCQUFpQixzQ0FBc0M7SUFDdkQsU0FBUywyQkFBMkIsRUFBRSxpRkFBaUYsRUFBRTtJQUNqSCxRQUFBLG1CQUFxRSxFQUFyRSxxQkFBcUUsRUFBckUsb0JBQXFFLEVBQXJFLHFCQUFxRSxFQUFyRSxvQkFBcUUsRUFBckUsdUJBQXFFLEVBQXJFLGtCQUFxRSxFQUFyRSxpQkFBcUUsRUFBckUsaUJBQXFFO0lBQy9ELGNBQUEsa0JBQXVELEVBQXZELDREQUF1RCxFQUF2RCxvQkFBdUQsRUFBdkQsaURBQXVELEVBQXZELDJHQUF1RCxFQUF2RCx5R0FBdUQsRUFBdkQsNEZBQXVELEVBQXZELG9CQUF1RCxFQUF2RCw4REFBdUQ7SUFDdkQsY0FBQSxrQkFBdUQsRUFBdkQsNERBQXVELEVBQXZELG9CQUF1RCxFQUF2RCxpREFBdUQsRUFBdkQsMkdBQXVELEVBQXZELHlHQUF1RCxFQUF2RCw0RkFBdUQsRUFBdkQsb0JBQXVELEVBQXZELDhEQUF1RDtJQUN0RCxlQUFBLGtCQUEwRCxFQUExRCw0REFBMEQsRUFBMUQsb0JBQTBELEVBQTFELGdEQUEwRCxFQUExRCwyR0FBMEQsRUFBMUQseUdBQTBELEVBQTFELDRGQUEwRCxFQUExRCxvQkFBMEQsRUFBMUQsOERBQTBEO0lBQzdELFlBQUEsa0JBQWlELEVBQWpELDREQUFpRCxFQUFqRCxvQkFBaUQsRUFBakQsaURBQWlELEVBQWpELDJHQUFpRCxFQUFqRCx5R0FBaUQsRUFBakQsNEZBQWlELEVBQWpELG9CQUFpRCxFQUFqRCw4REFBaUQ7SUFDckQsUUFBQSxtQkFBMkIsRUFBM0Isb0JBQTJCLEVBQTNCLGVBQTJCO0lBQ3ZCLFlBQUEsb0JBQXFCLEVBQXJCLG1EQUFxQjtJQUNwQixhQUFBLG9CQUFxQixFQUFyQixvREFBcUI7SUFDdkIsV0FBQSxjQUFvRCxFQUFwRCxnQkFBb0QsRUFBcEQscUJBQW9ELEVBQXBELGtCQUFvRCxFQUFwRCw2REFBb0Q7SUFDN0Msa0JBQUEsY0FBZ0MsRUFBaEMsWUFBZ0MsRUFBaEMsa0JBQWdDLEVBQWhDLDREQUFnQztJQUNsRCxRQUFRLDZCQUE2QixFQUFFLGlDQUFpQyxFQUFFO0lBQzFFLFlBQVksd0JBQXdCLEVBQUU7SUFDeEIsY0FBQSxvQkFBdUYsRUFBdkYsbUJBQXVGLEVBQXZGLFdBQXVGLEVBQXZGLG1CQUF1RixFQUF2RixxQkFBdUYsRUFBdkYsc0JBQXVGLEVBQXZGLHFCQUF1RixFQUF2Rix3QkFBdUYsRUFBdkYsbUJBQXVGLEVBQXZGLG9CQUF1RixFQUF2RiwyR0FBdUYsRUFBdkYseUdBQXVGLEVBQXZGLDRGQUF1RixFQUF2Rix3SkFBdUYsRUFBdkYsd0RBQXVGLEVBQXZGLDJCQUF1RjtJQUNwRixpQkFBQSxrQkFBNkMsRUFBN0MsMERBQTZDLEVBQTdDLG9CQUE2QyxFQUE3QyxtREFBNkMsRUFBN0Msb0JBQTZDLEVBQTdDLDREQUE2QztJQUM1QyxrQkFBQSxrQkFBK0QsRUFBL0QsNERBQStELEVBQS9ELG9CQUErRCxFQUEvRCxnREFBK0QsRUFBL0Qsb0JBQStELEVBQS9ELDhEQUErRDtJQUEvRCx3QkFBQSxrQkFBK0QsRUFBL0QsNkRBQStEO0lBQ25FLGNBQUEsZ0JBQW9CLEVBQXBCLG9CQUFvQjtJQUNwQixjQUFBLGdCQUF3RSxFQUF4RSxTQUF3RSxFQUF4RSx1QkFBd0UsRUFBeEUsc0JBQXdFLEVBQXhFLDREQUF3RSxFQUF4RSxrQkFBd0UsRUFBeEUsNERBQXdFLEVBQXhFLGlCQUF3RTtJQUN2RSxlQUFBLHFCQUErRyxFQUEvRyxrQkFBK0csRUFBL0csNERBQStHLEVBQS9HLG9CQUErRyxFQUEvRyxxQkFBK0csRUFBL0csb0JBQStHLEVBQS9HLHVCQUErRyxFQUEvRyxrQkFBK0csRUFBL0csaUJBQStHLEVBQS9HLG9CQUErRyxFQUEvRyxpREFBK0csRUFBL0csd0pBQStHLEVBQS9HLHdEQUErRyxFQUEvRywyQkFBK0c7SUFBL0cscUJBQUEsa0JBQStHLEVBQS9HLDREQUErRyxFQUEvRyxvQkFBK0csRUFBL0csa0RBQStHO0lBQ2pILGFBQUEsa0JBQTBFLEVBQTFFLG1CQUEwRSxFQUExRSxpQkFBMEUsRUFBMUUsc0JBQTBFLEVBQTFFLDREQUEwRSxFQUExRSxrQkFBMEUsRUFBMUUsNERBQTBFLEVBQTFFLGVBQTBFLEVBQTFFLGdGQUEwRSxFQUExRSxvR0FBMEUsRUFBMUUsd0dBQTBFIiwiZmlsZSI6ImNvbXBhcmUtbm93LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIEBrZXlmcmFtZXMgZmxvYXRVcCB7IGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTsgb3BhY2l0eTogLjg1IH0gdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IG9wYWNpdHk6IDEgfSB9XG4gICAgLmFuaW1hdGUtZmxvYXQgeyBhbmltYXRpb246IGZsb2F0VXAgLjM1cyBlYXNlLW91dCBib3RoIH1cbiAgICAuZ2xhc3MgeyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsLjg1KSwgcmdiYSgyNTUsMjU1LDI1NSwuNjUpKTsgfVxuICAgIC5jaGlwIHsgQGFwcGx5IHRleHQteHMgZm9udC1zZW1pYm9sZCBweC0yIHB5LTEgcm91bmRlZC1mdWxsIHdoaXRlc3BhY2Utbm93cmFwOyB9XG4gICAgLmNoaXAtYnJhbmQgeyBAYXBwbHkgYmctYnJhbmQtNTAgdGV4dC1icmFuZC03MDAgcmluZy0xIHJpbmctYnJhbmQtMjAwOyB9XG4gICAgLmNoaXAtZ3JlZW4geyBAYXBwbHkgYmctZ3JlZW4tNTAgdGV4dC1ncmVlbi03MDAgcmluZy0xIHJpbmctZ3JlZW4tMjAwOyB9XG4gICAgLmNoaXAteWVsbG93IHsgQGFwcGx5IGJnLXllbGxvdy01MCB0ZXh0LXllbGxvdy03MDAgcmluZy0xIHJpbmcteWVsbG93LTIwMDsgfVxuICAgIC5jaGlwLXJlZCB7IEBhcHBseSBiZy1yZWQtNTAgdGV4dC1yZWQtNzAwIHJpbmctMSByaW5nLXJlZC0yMDA7IH1cbiAgICAuc3RhciB7IEBhcHBseSB0ZXh0LWxnIGxlYWRpbmctbm9uZTsgfVxuICAgIC5zdGFyLS1vbiB7IEBhcHBseSB0ZXh0LWFtYmVyLTQwMDsgfVxuICAgIC5zdGFyLS1vZmYgeyBAYXBwbHkgdGV4dC1zbGF0ZS0zMDA7IH1cbiAgICAua3BpLWJhciB7IEBhcHBseSBoLTIgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTIwMCBvdmVyZmxvdy1oaWRkZW47IH1cbiAgICAua3BpLWJhciA+IHNwYW4geyBAYXBwbHkgYmxvY2sgaC1mdWxsIGJnLWJyYW5kLTUwMDsgfVxuICAgIC5yYWlsIHsgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7IC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAgIC5yYWlsID4gKiB7IHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDsgfVxuICAgIC5idG4tdG9nZ2xlIHsgQGFwcGx5IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLTJ4bCBweC0zIHB5LTEuNSB0ZXh0LXNtIHJpbmctMSB0cmFuc2l0aW9uOyB9XG4gICAgLmJ0bi10b2dnbGUtb24geyBAYXBwbHkgYmctYnJhbmQtNjAwIHRleHQtd2hpdGUgcmluZy1icmFuZC02MDA7IH1cbiAgICAuYnRuLXRvZ2dsZS1vZmYgeyBAYXBwbHkgYmctd2hpdGUgdGV4dC1zbGF0ZS03MDAgcmluZy1zbGF0ZS0yMDAgaG92ZXI6Ymctc2xhdGUtNTA7IH1cbiAgICAudGFibGUtY2VsbCB7IEBhcHBseSBwLTMgYWxpZ24tdG9wOyB9XG4gICAgLnRhYmxlLWhlYWQgeyBAYXBwbHkgc3RpY2t5IGxlZnQtMCBiZy1zbGF0ZS01MCBmb250LXNlbWlib2xkIGJvcmRlci1yIGJvcmRlci1zbGF0ZS0yMDA7IH1cbiAgICAucmVtb3ZlLWNoaXAgeyBAYXBwbHkgdGV4dC14cyBweC0yIHB5LTEgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTYwMCBob3ZlcjpiZy1yZWQtNTAgaG92ZXI6dGV4dC1yZWQtNzAwIHRyYW5zaXRpb247IH1cbiAgICAuY2FyZC1oZXJvIHsgQGFwcGx5IGJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBwLTYgcmVsYXRpdmU7IH1cbiAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcGFyZS1ub3cvY29tcGFyZS1ub3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSSxxQkFBcUIsT0FBTywwQkFBMEIsRUFBRSxhQUFhLEVBQUUsS0FBSyx3QkFBd0IsRUFBRSxXQUFXLEVBQUU7SUFDbkgsaUJBQWlCLHNDQUFzQztJQUN2RCxTQUFTLDJCQUEyQixFQUFFLGlGQUFpRixFQUFFO0lBQ2pILFFBQUEsbUJBQXFFLEVBQXJFLHFCQUFxRSxFQUFyRSxvQkFBcUUsRUFBckUscUJBQXFFLEVBQXJFLG9CQUFxRSxFQUFyRSx1QkFBcUUsRUFBckUsa0JBQXFFLEVBQXJFLGlCQUFxRSxFQUFyRSxpQkFBcUU7SUFDL0QsY0FBQSxrQkFBdUQsRUFBdkQsNERBQXVELEVBQXZELG9CQUF1RCxFQUF2RCxpREFBdUQsRUFBdkQsMkdBQXVELEVBQXZELHlHQUF1RCxFQUF2RCw0RkFBdUQsRUFBdkQsb0JBQXVELEVBQXZELDhEQUF1RDtJQUN2RCxjQUFBLGtCQUF1RCxFQUF2RCw0REFBdUQsRUFBdkQsb0JBQXVELEVBQXZELGlEQUF1RCxFQUF2RCwyR0FBdUQsRUFBdkQseUdBQXVELEVBQXZELDRGQUF1RCxFQUF2RCxvQkFBdUQsRUFBdkQsOERBQXVEO0lBQ3RELGVBQUEsa0JBQTBELEVBQTFELDREQUEwRCxFQUExRCxvQkFBMEQsRUFBMUQsZ0RBQTBELEVBQTFELDJHQUEwRCxFQUExRCx5R0FBMEQsRUFBMUQsNEZBQTBELEVBQTFELG9CQUEwRCxFQUExRCw4REFBMEQ7SUFDN0QsWUFBQSxrQkFBaUQsRUFBakQsNERBQWlELEVBQWpELG9CQUFpRCxFQUFqRCxpREFBaUQsRUFBakQsMkdBQWlELEVBQWpELHlHQUFpRCxFQUFqRCw0RkFBaUQsRUFBakQsb0JBQWlELEVBQWpELDhEQUFpRDtJQUNyRCxRQUFBLG1CQUEyQixFQUEzQixvQkFBMkIsRUFBM0IsZUFBMkI7SUFDdkIsWUFBQSxvQkFBcUIsRUFBckIsbURBQXFCO0lBQ3BCLGFBQUEsb0JBQXFCLEVBQXJCLG9EQUFxQjtJQUN2QixXQUFBLGNBQW9ELEVBQXBELGdCQUFvRCxFQUFwRCxxQkFBb0QsRUFBcEQsa0JBQW9ELEVBQXBELDZEQUFvRDtJQUM3QyxrQkFBQSxjQUFnQyxFQUFoQyxZQUFnQyxFQUFoQyxrQkFBZ0MsRUFBaEMsNERBQWdDO0lBQ2xELFFBQVEsNkJBQTZCLEVBQUUsaUNBQWlDLEVBQUU7SUFDMUUsWUFBWSx3QkFBd0IsRUFBRTtJQUN4QixjQUFBLG9CQUF1RixFQUF2RixtQkFBdUYsRUFBdkYsV0FBdUYsRUFBdkYsbUJBQXVGLEVBQXZGLHFCQUF1RixFQUF2RixzQkFBdUYsRUFBdkYscUJBQXVGLEVBQXZGLHdCQUF1RixFQUF2RixtQkFBdUYsRUFBdkYsb0JBQXVGLEVBQXZGLDJHQUF1RixFQUF2Rix5R0FBdUYsRUFBdkYsNEZBQXVGLEVBQXZGLHdKQUF1RixFQUF2Rix3REFBdUYsRUFBdkYsMkJBQXVGO0lBQ3BGLGlCQUFBLGtCQUE2QyxFQUE3QywwREFBNkMsRUFBN0Msb0JBQTZDLEVBQTdDLG1EQUE2QyxFQUE3QyxvQkFBNkMsRUFBN0MsNERBQTZDO0lBQzVDLGtCQUFBLGtCQUErRCxFQUEvRCw0REFBK0QsRUFBL0Qsb0JBQStELEVBQS9ELGdEQUErRCxFQUEvRCxvQkFBK0QsRUFBL0QsOERBQStEO0lBQS9ELHdCQUFBLGtCQUErRCxFQUEvRCw2REFBK0Q7SUFDbkUsY0FBQSxnQkFBb0IsRUFBcEIsb0JBQW9CO0lBQ3BCLGNBQUEsZ0JBQXdFLEVBQXhFLFNBQXdFLEVBQXhFLHVCQUF3RSxFQUF4RSxzQkFBd0UsRUFBeEUsNERBQXdFLEVBQXhFLGtCQUF3RSxFQUF4RSw0REFBd0UsRUFBeEUsaUJBQXdFO0lBQ3ZFLGVBQUEscUJBQStHLEVBQS9HLGtCQUErRyxFQUEvRyw0REFBK0csRUFBL0csb0JBQStHLEVBQS9HLHFCQUErRyxFQUEvRyxvQkFBK0csRUFBL0csdUJBQStHLEVBQS9HLGtCQUErRyxFQUEvRyxpQkFBK0csRUFBL0csb0JBQStHLEVBQS9HLGlEQUErRyxFQUEvRyx3SkFBK0csRUFBL0csd0RBQStHLEVBQS9HLDJCQUErRztJQUEvRyxxQkFBQSxrQkFBK0csRUFBL0csNERBQStHLEVBQS9HLG9CQUErRyxFQUEvRyxrREFBK0c7SUFDakgsYUFBQSxrQkFBMEUsRUFBMUUsbUJBQTBFLEVBQTFFLGlCQUEwRSxFQUExRSxzQkFBMEUsRUFBMUUsNERBQTBFLEVBQTFFLGtCQUEwRSxFQUExRSw0REFBMEUsRUFBMUUsZUFBMEUsRUFBMUUsZ0ZBQTBFLEVBQTFFLG9HQUEwRSxFQUExRSx3R0FBMEU7O0FBSTNGLHdpS0FBd2lLIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgQGtleWZyYW1lcyBmbG9hdFVwIHsgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpOyBvcGFjaXR5OiAuODUgfSB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMSB9IH1cbiAgICAuYW5pbWF0ZS1mbG9hdCB7IGFuaW1hdGlvbjogZmxvYXRVcCAuMzVzIGVhc2Utb3V0IGJvdGggfVxuICAgIC5nbGFzcyB7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwuODUpLCByZ2JhKDI1NSwyNTUsMjU1LC42NSkpOyB9XG4gICAgLmNoaXAgeyBAYXBwbHkgdGV4dC14cyBmb250LXNlbWlib2xkIHB4LTIgcHktMSByb3VuZGVkLWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXA7IH1cbiAgICAuY2hpcC1icmFuZCB7IEBhcHBseSBiZy1icmFuZC01MCB0ZXh0LWJyYW5kLTcwMCByaW5nLTEgcmluZy1icmFuZC0yMDA7IH1cbiAgICAuY2hpcC1ncmVlbiB7IEBhcHBseSBiZy1ncmVlbi01MCB0ZXh0LWdyZWVuLTcwMCByaW5nLTEgcmluZy1ncmVlbi0yMDA7IH1cbiAgICAuY2hpcC15ZWxsb3cgeyBAYXBwbHkgYmcteWVsbG93LTUwIHRleHQteWVsbG93LTcwMCByaW5nLTEgcmluZy15ZWxsb3ctMjAwOyB9XG4gICAgLmNoaXAtcmVkIHsgQGFwcGx5IGJnLXJlZC01MCB0ZXh0LXJlZC03MDAgcmluZy0xIHJpbmctcmVkLTIwMDsgfVxuICAgIC5zdGFyIHsgQGFwcGx5IHRleHQtbGcgbGVhZGluZy1ub25lOyB9XG4gICAgLnN0YXItLW9uIHsgQGFwcGx5IHRleHQtYW1iZXItNDAwOyB9XG4gICAgLnN0YXItLW9mZiB7IEBhcHBseSB0ZXh0LXNsYXRlLTMwMDsgfVxuICAgIC5rcGktYmFyIHsgQGFwcGx5IGgtMiByb3VuZGVkLWZ1bGwgYmctc2xhdGUtMjAwIG92ZXJmbG93LWhpZGRlbjsgfVxuICAgIC5rcGktYmFyID4gc3BhbiB7IEBhcHBseSBibG9jayBoLWZ1bGwgYmctYnJhbmQtNTAwOyB9XG4gICAgLnJhaWwgeyBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTsgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gICAgLnJhaWwgPiAqIHsgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0OyB9XG4gICAgLmJ0bi10b2dnbGUgeyBAYXBwbHkgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtMnhsIHB4LTMgcHktMS41IHRleHQtc20gcmluZy0xIHRyYW5zaXRpb247IH1cbiAgICAuYnRuLXRvZ2dsZS1vbiB7IEBhcHBseSBiZy1icmFuZC02MDAgdGV4dC13aGl0ZSByaW5nLWJyYW5kLTYwMDsgfVxuICAgIC5idG4tdG9nZ2xlLW9mZiB7IEBhcHBseSBiZy13aGl0ZSB0ZXh0LXNsYXRlLTcwMCByaW5nLXNsYXRlLTIwMCBob3ZlcjpiZy1zbGF0ZS01MDsgfVxuICAgIC50YWJsZS1jZWxsIHsgQGFwcGx5IHAtMyBhbGlnbi10b3A7IH1cbiAgICAudGFibGUtaGVhZCB7IEBhcHBseSBzdGlja3kgbGVmdC0wIGJnLXNsYXRlLTUwIGZvbnQtc2VtaWJvbGQgYm9yZGVyLXIgYm9yZGVyLXNsYXRlLTIwMDsgfVxuICAgIC5yZW1vdmUtY2hpcCB7IEBhcHBseSB0ZXh0LXhzIHB4LTIgcHktMSByb3VuZGVkLWZ1bGwgYmctc2xhdGUtMTAwIHRleHQtc2xhdGUtNjAwIGhvdmVyOmJnLXJlZC01MCBob3Zlcjp0ZXh0LXJlZC03MDAgdHJhbnNpdGlvbjsgfVxuICAgIC5jYXJkLWhlcm8geyBAYXBwbHkgYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LXhsIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHAtNiByZWxhdGl2ZTsgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_compare-now_compare-now_component_ts.js.map