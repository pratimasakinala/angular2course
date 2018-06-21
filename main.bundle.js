webpackJsonp([0,4],Array(65).concat([
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandyLinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HandyLinksComponent = (function () {
    function HandyLinksComponent() {
    }
    HandyLinksComponent.prototype.ngOnInit = function () {
    };
    return HandyLinksComponent;
}());
HandyLinksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'handy-links',
        template: __webpack_require__(238),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [])
], HandyLinksComponent);

//# sourceMappingURL=handy-links.component.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonsComponent = (function () {
    function LessonsComponent(titleService, route, router) {
        this.titleService = titleService;
        this.route = route;
        this.router = router;
    }
    LessonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.week = +params['week'];
            switch (_this.week) {
                case 1:
                    _this.day = +params['day'];
                    break;
                case 2:
                    _this.day = +params['day'] + 4;
                    break;
                case 3:
                    _this.day = +params['day'] + 9;
                    break;
                case 4:
                    _this.day = +params['day'] + 14;
                    break;
                case 5:
                    _this.day = +params['day'] + 19;
                    break;
            }
            _this.setTitle("Angular 2+ (Day " + _this.day + ")");
        });
        // scroll to the top of the page on route change
        this.router.events.subscribe(function (event) {
            if (!(event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            _this.scrollToTop();
        });
    };
    LessonsComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    LessonsComponent.prototype.scrollToTop = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    LessonsComponent.prototype.scrollIntoView = function (event) {
        var item = document.getElementById("" + event);
        var doc = document.getElementsByTagName('body')[0];
        var count = item.offsetTop - doc.offsetTop - 180;
        window.scrollBy({ top: count, left: 0, behavior: 'smooth' });
    };
    return LessonsComponent;
}());
LessonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'lessons',
        template: __webpack_require__(240),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _c || Object])
], LessonsComponent);

var _a, _b, _c;
//# sourceMappingURL=lessons.component.js.map

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(146);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setTitle('Angular 2+');
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.showScrollButton = function () {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            document.getElementById('scroll-to-top').style.display = "block";
        }
        else {
            document.getElementById('scroll-to-top').style.display = "none";
        }
    };
    AppComponent.prototype.scrollToTop = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(237),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lessons_lessons_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handy_links_handy_links_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_lmnt_header_lmnt_component__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_lmnt_header_lmnt_component__["a" /* HeaderLmntComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRouting */],
            __WEBPACK_IMPORTED_MODULE_4__lessons_lessons_module__["a" /* LessonsModule */],
            __WEBPACK_IMPORTED_MODULE_5__handy_links_handy_links_module__["a" /* HandyLinksModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });

var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/lessons/1/1'
    }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handy_links_routing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handy_links_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandyLinksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import routing


var HandyLinksModule = (function () {
    function HandyLinksModule() {
    }
    return HandyLinksModule;
}());
HandyLinksModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__handy_links_routing__["a" /* HandyLinksRoutes */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__handy_links_component__["a" /* HandyLinksComponent */]
        ]
    })
], HandyLinksModule);

//# sourceMappingURL=handy-links.module.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handy_links_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandyLinksRoutes; });

// Components

var handyLinksRoutes = [
    {
        path: 'handy-links',
        component: __WEBPACK_IMPORTED_MODULE_1__handy_links_component__["a" /* HandyLinksComponent */],
    }
];
var HandyLinksRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(handyLinksRoutes);
//# sourceMappingURL=handy-links.routing.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLmntComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderLmntComponent = (function () {
    function HeaderLmntComponent() {
    }
    HeaderLmntComponent.prototype.ngOnInit = function () {
    };
    return HeaderLmntComponent;
}());
HeaderLmntComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'header-lmnt',
        template: __webpack_require__(239),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [])
], HeaderLmntComponent);

//# sourceMappingURL=header-lmnt.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lessons_routing__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__week_1_week_1_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__week_2_week_2_module__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__week_3_week_3_module__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__week_4_week_4_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__week_5_week_5_module__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lessons_lessons_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import routing







var LessonsModule = (function () {
    function LessonsModule() {
    }
    return LessonsModule;
}());
LessonsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__lessons_routing__["a" /* LessonsRoutes */],
            __WEBPACK_IMPORTED_MODULE_3__week_1_week_1_module__["a" /* Week1Module */],
            __WEBPACK_IMPORTED_MODULE_4__week_2_week_2_module__["a" /* Week2Module */],
            __WEBPACK_IMPORTED_MODULE_5__week_3_week_3_module__["a" /* Week3Module */],
            __WEBPACK_IMPORTED_MODULE_6__week_4_week_4_module__["a" /* Week4Module */],
            __WEBPACK_IMPORTED_MODULE_7__week_5_week_5_module__["a" /* Week5Module */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__lessons_lessons_component__["a" /* LessonsComponent */]
        ]
    })
], LessonsModule);

//# sourceMappingURL=lessons.module.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessons_lessons_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsRoutes; });

// Components

var lessonsRoutes = [
    {
        path: 'lessons/:week/:day',
        component: __WEBPACK_IMPORTED_MODULE_1__lessons_lessons_component__["a" /* LessonsComponent */],
    }
];
var LessonsRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(lessonsRoutes);
//# sourceMappingURL=lessons.routing.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day1Component = (function () {
    function Day1Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day1Component.prototype.ngOnInit = function () {
    };
    Day1Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day1Component.prototype, "scrolledTo", void 0);
Day1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-1',
        template: __webpack_require__(241),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [])
], Day1Component);

//# sourceMappingURL=day-1.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day2Component = (function () {
    function Day2Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day2Component.prototype.ngOnInit = function () {
    };
    Day2Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day2Component.prototype, "scrolledTo", void 0);
Day2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-2',
        template: __webpack_require__(242),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [])
], Day2Component);

//# sourceMappingURL=day-2.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day3Component = (function () {
    function Day3Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day3Component.prototype.ngOnInit = function () {
    };
    Day3Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day3Component.prototype, "scrolledTo", void 0);
Day3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-3',
        template: __webpack_require__(243),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [])
], Day3Component);

//# sourceMappingURL=day-3.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day4Component = (function () {
    function Day4Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day4Component.prototype.ngOnInit = function () {
    };
    Day4Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day4Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day4Component.prototype, "scrolledTo", void 0);
Day4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-4',
        template: __webpack_require__(244),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [])
], Day4Component);

//# sourceMappingURL=day-4.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__day_1_day_1_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__day_2_day_2_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__day_3_day_3_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day_4_day_4_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__week_1_week_1_component__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week1Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Week1Module = (function () {
    function Week1Module() {
    }
    return Week1Module;
}());
Week1Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__day_1_day_1_component__["a" /* Day1Component */],
            __WEBPACK_IMPORTED_MODULE_3__day_2_day_2_component__["a" /* Day2Component */],
            __WEBPACK_IMPORTED_MODULE_4__day_3_day_3_component__["a" /* Day3Component */],
            __WEBPACK_IMPORTED_MODULE_5__day_4_day_4_component__["a" /* Day4Component */],
            __WEBPACK_IMPORTED_MODULE_6__week_1_week_1_component__["a" /* Week1Component */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__week_1_week_1_component__["a" /* Week1Component */]
        ]
    })
], Week1Module);

//# sourceMappingURL=week-1.module.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Week1Component = (function () {
    function Week1Component(route) {
        this.route = route;
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Week1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.day = params['day'];
        });
    };
    Week1Component.prototype.scrollIntoView = function (event) {
        this.scrolledTo.emit(event);
    };
    return Week1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], Week1Component.prototype, "day", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Week1Component.prototype, "scrolledTo", void 0);
Week1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'week-1',
        template: __webpack_require__(245),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], Week1Component);

var _a;
//# sourceMappingURL=week-1.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day1Component = (function () {
    function Day1Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day1Component.prototype.ngOnInit = function () {
    };
    Day1Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day1Component.prototype, "scrolledTo", void 0);
Day1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-1',
        template: __webpack_require__(246),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [])
], Day1Component);

//# sourceMappingURL=day-1.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day2Component = (function () {
    function Day2Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day2Component.prototype.ngOnInit = function () {
    };
    Day2Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day2Component.prototype, "scrolledTo", void 0);
Day2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-2',
        template: __webpack_require__(247),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [])
], Day2Component);

//# sourceMappingURL=day-2.component.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day3Component = (function () {
    function Day3Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day3Component.prototype.ngOnInit = function () {
    };
    Day3Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day3Component.prototype, "scrolledTo", void 0);
Day3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-3',
        template: __webpack_require__(248),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [])
], Day3Component);

//# sourceMappingURL=day-3.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day4Component = (function () {
    function Day4Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day4Component.prototype.ngOnInit = function () {
    };
    Day4Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day4Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day4Component.prototype, "scrolledTo", void 0);
Day4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-4',
        template: __webpack_require__(249),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [])
], Day4Component);

//# sourceMappingURL=day-4.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day5Component = (function () {
    function Day5Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day5Component.prototype.ngOnInit = function () {
    };
    Day5Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day5Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day5Component.prototype, "scrolledTo", void 0);
Day5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-5',
        template: __webpack_require__(250),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [])
], Day5Component);

//# sourceMappingURL=day-5.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__week_2_week_2_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__day_1_day_1_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__day_2_day_2_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__day_5_day_5_component__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week2Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var Week2Module = (function () {
    function Week2Module() {
    }
    return Week2Module;
}());
Week2Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__week_2_week_2_component__["a" /* Week2Component */],
            __WEBPACK_IMPORTED_MODULE_3__day_1_day_1_component__["a" /* Day1Component */],
            __WEBPACK_IMPORTED_MODULE_4__day_2_day_2_component__["a" /* Day2Component */],
            __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__["a" /* Day3Component */],
            __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__["a" /* Day4Component */],
            __WEBPACK_IMPORTED_MODULE_7__day_5_day_5_component__["a" /* Day5Component */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__week_2_week_2_component__["a" /* Week2Component */]
        ]
    })
], Week2Module);

//# sourceMappingURL=week-2.module.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Week2Component = (function () {
    function Week2Component(route) {
        this.route = route;
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Week2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.day = params['day'];
        });
    };
    Week2Component.prototype.scrollIntoView = function (event) {
        this.scrolledTo.emit(event);
    };
    return Week2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], Week2Component.prototype, "day", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Week2Component.prototype, "scrolledTo", void 0);
Week2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'week-2',
        template: __webpack_require__(251),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], Week2Component);

var _a;
//# sourceMappingURL=week-2.component.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day1Component = (function () {
    function Day1Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day1Component.prototype.ngOnInit = function () {
    };
    Day1Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day1Component.prototype, "scrolledTo", void 0);
Day1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-1',
        template: __webpack_require__(252),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [])
], Day1Component);

//# sourceMappingURL=day-1.component.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day2Component = (function () {
    function Day2Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day2Component.prototype.ngOnInit = function () {
    };
    Day2Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day2Component.prototype, "scrolledTo", void 0);
Day2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-2',
        template: __webpack_require__(253),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [])
], Day2Component);

//# sourceMappingURL=day-2.component.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day3Component = (function () {
    function Day3Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day3Component.prototype.ngOnInit = function () {
    };
    Day3Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day3Component.prototype, "scrolledTo", void 0);
Day3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-3',
        template: __webpack_require__(254),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [])
], Day3Component);

//# sourceMappingURL=day-3.component.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day4Component = (function () {
    function Day4Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day4Component.prototype.ngOnInit = function () {
    };
    Day4Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day4Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day4Component.prototype, "scrolledTo", void 0);
Day4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-4',
        template: __webpack_require__(255),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [])
], Day4Component);

//# sourceMappingURL=day-4.component.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day5Component = (function () {
    function Day5Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day5Component.prototype.ngOnInit = function () {
    };
    Day5Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day5Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day5Component.prototype, "scrolledTo", void 0);
Day5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-5',
        template: __webpack_require__(256),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [])
], Day5Component);

//# sourceMappingURL=day-5.component.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__week_3_week_3_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__day_1_day_1_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__day_2_day_2_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__day_5_day_5_component__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week3Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var Week3Module = (function () {
    function Week3Module() {
    }
    return Week3Module;
}());
Week3Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__week_3_week_3_component__["a" /* Week3Component */],
            __WEBPACK_IMPORTED_MODULE_3__day_1_day_1_component__["a" /* Day1Component */],
            __WEBPACK_IMPORTED_MODULE_4__day_2_day_2_component__["a" /* Day2Component */],
            __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__["a" /* Day3Component */],
            __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__["a" /* Day4Component */],
            __WEBPACK_IMPORTED_MODULE_7__day_5_day_5_component__["a" /* Day5Component */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__week_3_week_3_component__["a" /* Week3Component */]
        ]
    })
], Week3Module);

//# sourceMappingURL=week-3.module.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Week3Component = (function () {
    function Week3Component(route) {
        this.route = route;
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Week3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.day = params['day'];
        });
    };
    Week3Component.prototype.scrollIntoView = function (event) {
        this.scrolledTo.emit(event);
    };
    return Week3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], Week3Component.prototype, "day", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Week3Component.prototype, "scrolledTo", void 0);
Week3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'week-3',
        template: __webpack_require__(257),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], Week3Component);

var _a;
//# sourceMappingURL=week-3.component.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day1Component = (function () {
    function Day1Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day1Component.prototype.ngOnInit = function () {
    };
    Day1Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day1Component.prototype, "scrolledTo", void 0);
Day1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-1',
        template: __webpack_require__(258),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], Day1Component);

//# sourceMappingURL=day-1.component.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day2Component = (function () {
    function Day2Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day2Component.prototype.ngOnInit = function () {
    };
    Day2Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day2Component.prototype, "scrolledTo", void 0);
Day2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-2',
        template: __webpack_require__(259),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [])
], Day2Component);

//# sourceMappingURL=day-2.component.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day3Component = (function () {
    function Day3Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day3Component.prototype.ngOnInit = function () {
    };
    Day3Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day3Component.prototype, "scrolledTo", void 0);
Day3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-3',
        template: __webpack_require__(260),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], Day3Component);

//# sourceMappingURL=day-3.component.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day4Component = (function () {
    function Day4Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day4Component.prototype.ngOnInit = function () {
    };
    Day4Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day4Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day4Component.prototype, "scrolledTo", void 0);
Day4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-4',
        template: __webpack_require__(261),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], Day4Component);

//# sourceMappingURL=day-4.component.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day5Component = (function () {
    function Day5Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day5Component.prototype.ngOnInit = function () {
    };
    Day5Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day5Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day5Component.prototype, "scrolledTo", void 0);
Day5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-5',
        template: __webpack_require__(262),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], Day5Component);

//# sourceMappingURL=day-5.component.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__week_4_week_4_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__day_1_day_1_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__day_2_day_2_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__day_5_day_5_component__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week4Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var Week4Module = (function () {
    function Week4Module() {
    }
    return Week4Module;
}());
Week4Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__week_4_week_4_component__["a" /* Week4Component */],
            __WEBPACK_IMPORTED_MODULE_3__day_1_day_1_component__["a" /* Day1Component */],
            __WEBPACK_IMPORTED_MODULE_4__day_2_day_2_component__["a" /* Day2Component */],
            __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__["a" /* Day3Component */],
            __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__["a" /* Day4Component */],
            __WEBPACK_IMPORTED_MODULE_7__day_5_day_5_component__["a" /* Day5Component */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__week_4_week_4_component__["a" /* Week4Component */]
        ]
    })
], Week4Module);

//# sourceMappingURL=week-4.module.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Week4Component = (function () {
    function Week4Component(route) {
        this.route = route;
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Week4Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.day = params['day'];
        });
    };
    Week4Component.prototype.scrollIntoView = function (event) {
        this.scrolledTo.emit(event);
    };
    return Week4Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], Week4Component.prototype, "day", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Week4Component.prototype, "scrolledTo", void 0);
Week4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'week-4',
        template: __webpack_require__(263),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], Week4Component);

var _a;
//# sourceMappingURL=week-4.component.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day1Component = (function () {
    function Day1Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day1Component.prototype.ngOnInit = function () {
    };
    Day1Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day1Component.prototype, "scrolledTo", void 0);
Day1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'day-1',
        template: __webpack_require__(264),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [])
], Day1Component);

//# sourceMappingURL=day-1.component.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day2Component = (function () {
    function Day2Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day2Component.prototype.ngOnInit = function () {
    };
    Day2Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day2Component.prototype, "scrolledTo", void 0);
Day2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-day-2',
        template: __webpack_require__(265),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], Day2Component);

//# sourceMappingURL=day-2.component.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day3Component = (function () {
    function Day3Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day3Component.prototype.ngOnInit = function () {
    };
    Day3Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day3Component.prototype, "scrolledTo", void 0);
Day3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-day-3',
        template: __webpack_require__(266),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [])
], Day3Component);

//# sourceMappingURL=day-3.component.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day4Component = (function () {
    function Day4Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day4Component.prototype.ngOnInit = function () {
    };
    Day4Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day4Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day4Component.prototype, "scrolledTo", void 0);
Day4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-day-4',
        template: __webpack_require__(267),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [])
], Day4Component);

//# sourceMappingURL=day-4.component.js.map

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day5Component = (function () {
    function Day5Component() {
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Day5Component.prototype.ngOnInit = function () {
    };
    Day5Component.prototype.scrollIntoView = function (id) {
        this.scrolledTo.emit(id);
    };
    return Day5Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Day5Component.prototype, "scrolledTo", void 0);
Day5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-day-5',
        template: __webpack_require__(268),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], Day5Component);

//# sourceMappingURL=day-5.component.js.map

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__week_5_week_5_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__day_1_day_1_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__day_2_day_2_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__day_5_day_5_component__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week5Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var Week5Module = (function () {
    function Week5Module() {
    }
    return Week5Module;
}());
Week5Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__week_5_week_5_component__["a" /* Week5Component */],
            __WEBPACK_IMPORTED_MODULE_3__day_1_day_1_component__["a" /* Day1Component */],
            __WEBPACK_IMPORTED_MODULE_4__day_2_day_2_component__["a" /* Day2Component */],
            __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__["a" /* Day3Component */],
            __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__["a" /* Day4Component */],
            __WEBPACK_IMPORTED_MODULE_7__day_5_day_5_component__["a" /* Day5Component */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__week_5_week_5_component__["a" /* Week5Component */]
        ]
    })
], Week5Module);

//# sourceMappingURL=week-5.module.js.map

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Week5Component = (function () {
    function Week5Component(route) {
        this.route = route;
        this.scrolledTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Week5Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.day = params['day'];
        });
    };
    Week5Component.prototype.scrollIntoView = function (event) {
        this.scrolledTo.emit(event);
    };
    return Week5Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], Week5Component.prototype, "day", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], Week5Component.prototype, "scrolledTo", void 0);
Week5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'week-5',
        template: __webpack_require__(269),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], Week5Component);

var _a;
//# sourceMappingURL=week-5.component.js.map

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".scroll-to-top {\n    background-color: lightgrey;\n    color: #7A1501;\n    border: none;\n    border-radius: 50%;\n    position: fixed;\n    outline: none;\n    bottom: 20px;\n    right: 30px;\n    cursor: pointer;\n    font-size: 18px;\n    padding: 10px 14px;\n    transition: all .2s ease-in-out;\n    display: none;\n}\n\n.scroll-to-top:hover {\n    transform: scale(1.1);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".header {\n\tposition: fixed;\n\twidth: 100%;\n\tz-index: 100;\n}\n\n.header .header-background {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tposition: absolute;\n\topacity: 1;\n\ttransition: opacity 100ms ease;\n}\n\n.header.has-bg {\n\tpadding-bottom: 15px;\n}\n\n.header.has-bg .header-background {\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tz-index: 1;\n}\n\n.header.has-bg.hide-bg .header-background {\n\topacity: 0;\n}\n\n.header .header-inside {\n\tmax-width: 1170px;\n\tmargin: 0 auto;\n\tpadding-top: 10px;\n\tposition: relative;\n    z-index: 10;\n}\n\n.header .header-cta {\n\tfloat: right;\n\tfont-size: 1.25em;\n\theight: 75px;\n\tline-height: 75px;\n}\n\n.header .header-cta a {\n    color: #fff;\n    font-weight: 700;\n    text-transform: uppercase;\n    background: tranparent;\n    border: 4px solid #fcda0c;\n    border-radius: 10px;\n    display: inline-block;\n    padding: 7px 10px;\n    line-height: normal;\n    text-decoration: none;\n\tdisplay: block;\n\n\tposition: relative;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n\n.header .header-cta a:hover {\n    background: #fcda0c;\n}\n\n.header .logo {\n\tmargin-bottom: 10px;\n}\n\n.header .nav {\n\tdisplay: block;\n\twidth: 100%;\n\ttext-align: center;\n\tbackground: #000;\n\tcolor: #fff;\n\t-webkit-border-bottom-right-radius: 10px;\n\t-webkit-border-bottom-left-radius: 10px;\n\t-moz-border-radius-bottomright: 10px;\n\t-moz-border-radius-bottomleft: 10px;\n\tborder-bottom-right-radius: 10px;\n\tborder-bottom-left-radius: 10px;\n}\n\n.header .mobile-nav {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n.header .mobile-nav .mobile-nav-icon {\n\tpadding: 15px 15px;\n\tfont-size: 2em;\n\tcolor: white;\n\tcursor: pointer;\n\tz-index: 110;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n.header .mobile-nav .mobile-nav-icon:hover {\n\tcolor: #fcda0c;\n}\n\n.header .mobile-nav .mobile-nav-menu {\n\tposition: fixed;\n\tz-index: 100;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\tbackground: rgba(0,0,0,.9);\n\tcolor: white;\n\twidth: 0px;\n\toverflow: hidden;\n transition: width 100ms ease;\n\tfont-size: 1.5em;\n}\n\n.header .mobile-nav .mobile-nav-menu > ul {\n\tpadding: 10px;\n\tpadding-right: 100px;\n}\n\n.header .mobile-nav .mobile-nav-menu > ul > li {\n\twidth: 100%;\n\twhite-space: nowrap;\n\tmargin-bottom: 10px;\n}\n\n.header .mobile-nav .mobile-nav-menu ul li ul.sub-menu {\n\tpadding-left: 30px;\n}\n\n.header .mobile-nav .mobile-nav-menu ul li ul.sub-menu li {\n\twhite-space: normal;\n}\n\n.header .mobile-nav .mobile-nav-menu a {\n\tcolor: white;\n}\n\nbody.menu-active .header .mobile-nav .mobile-nav-menu {\n\twidth: 100%;\n}\n\nhtml.menu-active,\nbody.menu-active {\n\toverflow-y: hidden;\n}\n\n.header .nav > ul {\n\tdisplay: inline-block;\n\tmargin: 0 auto;\n\twidth: 100%;\n\tfont-size: 1em;\n\tpadding: 0 10px;\n}\n\n.header .nav a {\n\tcolor: #fff;\n\ttext-decoration: none;\n transition: background-color 250ms ease;\n}\n\n.header .nav > ul {\n\tmargin: 0 auto;\n\ttext-align: center;\n}\n\n.header .nav ul li {\n\tdisplay: inline-block;\n\tposition: relative;\n}\n\n.header .nav ul li a {\n\tdisplay: block;\n}\n\n.header .nav > ul > li > a {\n\ttext-transform: uppercase;\n\tpadding: .8em 1em;\n\tfont-size: 1.3em;\n}\n\n.header .nav > ul > li > a:focus,\n.header .nav > ul > li > a:active,\n.header .nav > ul > li > a:hover {\n\tbackground: #222;\n}\n\n.header .nav > ul > li .sub-menu {\n\theight: 0;\n\toverflow: hidden;\n\tposition: absolute;\n\tbackground-color: #a11b12;\n    border: 1px solid #a11b12;\n\tfont-size: 14px;\n\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n\ttext-align: left;\n transition: opacity 250ms ease;\n\n\t-webkit-border-radius: 10px;\n\t-webkit-border-top-left-radius: 0;\n\t-moz-border-radius: 10px;\n\t-moz-border-radius-topleft: 0;\n\tborder-radius: 10px;\n\tborder-top-left-radius: 0;\n\tmin-width: 100%;\n}\n\n\n.header .nav > ul > li.menu-item-has-children:hover > .sub-menu {\n\theight: auto;\n\toverflow: auto;\n\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n\n.header .nav > ul > li.menu-item-has-children > .sub-menu li {\n\tdisplay: block;\n}\n\n.header .nav > ul > li.menu-item-has-children > .sub-menu li a {\n\tdisplay: block;\n\twhite-space: nowrap;\n\tpadding: 1em;\n\tfont-weight: normal;\n}\n\n.header .nav > ul > li.menu-item-has-children > .sub-menu li a:hover,\n.header .nav > ul > li.menu-item-has-children > .sub-menu li a:focus,\n.header .nav > ul > li.menu-item-has-children > .sub-menu li a:active {\n\tcolor: #FFD202;\n}\n\n.sub-menu {\n\twidth: 400px;\n}\n\n.padding-0 {\n\tpadding: 0 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */
/***/ (function(module, exports) {

module.exports = "<div (window:scroll)=\"showScrollButton()\">\n    <header-lmnt></header-lmnt>\n    <main class=\"content container\">\n        <router-outlet></router-outlet>\n    </main>\n    <button class=\"btn scroll-to-top\" \n            id=\"scroll-to-top\" \n            title=\"Go to top\" \n            (click)=\"scrollToTop()\">\n    <i class=\"fa fa-chevron-up\"></i>      \n    </button>\n</div>"

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = "<div class=\"links\">\n  <div class=\"row\">\n    <h1 class=\"col-md-12 text-center hdr\">Handy Links</h1>\n  </div>\n  <div class=\"course-container container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 week-header\">\n        <h2 class=\"text-left\">Resources</h2>\n      </div>\n      <div class=\"col-md-12 link-list\">\n        <ul>\n          <li>\n            Generating and Setting up SSH Keys \n            <a href=\"https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/\" target=\"_blank\">https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/</a>\n          </li>\n          <li>\n            Git Repository linking\n            <a href=\"https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/\" target=\"_blank\">https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/</a>\n          </li>\n          <li>\n            Git Commands Cheatsheet\n            <a href=\"https://www.git-tower.com/blog/git-cheat-sheet\" target=\"_blank\">https://www.git-tower.com/blog/git-cheat-sheet</a>\n          </li>\n          <li>\n            Git Branching \n            <a href=\"https://www.atlassian.com/git/tutorials/using-branches\" target=\"_blank\">https://www.atlassian.com/git/tutorials/using-branches</a>\n            <a href=\"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell\" target=\"_blank\">https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell</a>\n            <a href=\"https://www.atlassian.com/git/tutorials/merging-vs-rebasing\" target=\"_blank\">https://www.atlassian.com/git/tutorials/merging-vs-rebasing</a>\n          </li>\n          <li>\n            Bootstrap\n            <a href=\"https://getbootstrap.com/docs/3.3/css/\" target=\"_blank\">https://getbootstrap.com/docs/3.3/css/</a>\n          </li>\n          <li>\n            <b>Angular:</b> <br>\n            Lifecycle Hooks\n            <a href=\"https://ng2.codecraft.tv/components/lifecycle-hooks/\" target=\"_blank\">https://ng2.codecraft.tv/components/lifecycle-hooks/</a>\n            Templates\n            <a href=\"https://lishman.io/angular-2-templates\" target=\"_blank\">https://lishman.io/angular-2-templates</a>\n            Built-in Directives\n            <a href=\"https://codecraft.tv/courses/angular/built-in-directives/overview/\" target=\"_blank\">https://codecraft.tv/courses/angular/built-in-directives/overview/</a>\n            Renderer2\n            <a href=\"https://alligator.io/angular/using-renderer2/\" target=\"_blank\">https://alligator.io/angular/using-renderer2/</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"course-container container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 week-header\">\n        <h2 class=\"text-left\">Tools &amp; Practice</h2>\n      </div>\n      <div class=\"col-md-12 link-list\">\n        <ul>\n          <li>\n            Learn Git\n            <a href=\"https://www.codecademy.com/learn/learn-git\" target=\"_blank\">https://www.codecademy.com/learn/learn-git</a>\n          </li>\n          <li>\n            Typescript\n            <a href=\"https://www.udemy.com/typescript/learn/v4/content\">https://www.udemy.com/typescript/learn/v4/content</a>\n            <a href=\"https://www.typescriptlang.org/docs/home.html\">https://www.typescriptlang.org/docs/home.html</a>\n          </li>\n          <li>\n            Bootstrap\n            <a href=\"https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/\" target=\"_blank\">https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: add below links -->\n<!-- https://angular.io/api/core/Renderer2 -->\n"

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = "<header class=\"clear has-bg header\" role=\"banner\">\n  <div class=\"header-background\" style=\"background-image: url(https://geekwiseacademy.com/wp-content/uploads/2017/04/header-bg.jpg);\"></div>\n  <div class=\"header-inside\">\n    <!-- Header Link -->\n    <div class=\"header-cta\">\n      <a class=\"bg-transition\" [routerLink]=\"['']\">\n        Angular 2+</a>\n    </div>\n    <!-- logo -->\n    <div class=\"logo\">\n      <a href=\"https://geekwiseacademy.com\" target=\"_blank\">\n        <img src=\"https://geekwiseacademy.com/wp-content/themes/geekwise_v3/img/geekwise_logo.png\" alt=\"Logo\" class=\"logo-img\">\n      </a>\n    </div>\n    <!-- /logo -->\n    <nav class=\"mobile-nav\" role=\"navigation\">\n      <span class=\"mobile-nav-icon glyphicon glyphicon-menu-hamburger\"></span>\n      <div class=\"mobile-nav-menu\">\n        <ul>\n          <!-- <li id=\"menu-item-29\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-28\"><a href=\"index.html\">Course Outline</a></li> -->\n          <li id=\"menu-item-28\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-26\"><a [routerLink]=\"['handy-links']\">Handy Links</a></li>\n          <li id=\"menu-item-30\" class=\"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-10 current_page_item menu-item-has-children menu-item-30\"><a>Lessons</a>\n            <ul class=\"sub-menu\">\n              <div class=\"row\">\n                <div class=\"col-sm-3 padding-0\">\n                  <ul class=\"padding-0\">\n                    <li id=\"menu-item-1000132\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000132\"><a [routerLink]=\"['lessons/1/1']\">Day 1</a></li>\n                    <li id=\"menu-item-1000133\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000133\"><a [routerLink]=\"['lessons/1/2']\">Day 2</a></li>\n                    <li id=\"menu-item-1000134\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000134\"><a [routerLink]=\"['lessons/1/3']\">Day 3</a></li>\n                    <li id=\"menu-item-1000136\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000136\"><a [routerLink]=\"['lessons/1/4']\">Day 4</a></li>\n                  </ul>\n                </div>\n                <div class=\"col-sm-3 padding-0\">\n                  <ul class=\"padding-0\">\n                    <li id=\"menu-item-1000137\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000137\"><a [routerLink]=\"['lessons/2/1']\">Day 5</a></li>\n                    <li id=\"menu-item-1000138\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000138\"><a [routerLink]=\"['lessons/2/2']\">Day 6</a></li>\n                    <li id=\"menu-item-1000139\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000139\"><a [routerLink]=\"['lessons/2/3']\">Day 7</a></li>\n                    <li id=\"menu-item-1000140\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000140\"><a [routerLink]=\"['lessons/2/4']\">Day 8</a></li>\n                    <li id=\"menu-item-1000141\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000141\"><a [routerLink]=\"['lessons/2/5']\">Day 9</a></li>\n                  </ul>\n                </div>\n                <div class=\"col-sm-3 padding-0\">\n                  <ul class=\"padding-0\">\n                    <li id=\"menu-item-1000142\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000142\"><a [routerLink]=\"['lessons/3/1']\">Day 10</a></li>\n                    <li id=\"menu-item-1000143\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000143\"><a [routerLink]=\"['lessons/3/2']\">Day 11</a></li>\n                    <li id=\"menu-item-1000144\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000144\"><a [routerLink]=\"['lessons/3/3']\">Day 12</a></li>\n                    <li id=\"menu-item-1000145\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000145\"><a [routerLink]=\"['lessons/3/4']\">Day 13</a></li>\n                    <li id=\"menu-item-1000146\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000146\"><a [routerLink]=\"['lessons/3/5']\">Day 14</a></li>\n                  </ul>\n                </div>\n                <div class=\"col-sm-3 padding-0\">\n                  <ul class=\"padding-0\">\n                    <li id=\"menu-item-1000147\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000142\"><a [routerLink]=\"['lessons/4/1']\">Day 15</a></li>\n                    <li id=\"menu-item-1000148\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000143\"><a [routerLink]=\"['lessons/4/2']\">Day 16</a></li>\n                    <li id=\"menu-item-1000149\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000144\"><a [routerLink]=\"['lessons/4/3']\">Day 17</a></li>\n                    <li id=\"menu-item-1000150\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000145\"><a [routerLink]=\"['lessons/4/4']\">Day 18</a></li>\n                    <!-- <li id=\"menu-item-1000151\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000146\"><a [routerLink]=\"['lessons/4/5']\">Day 19</a></li> -->\n                  </ul>\n                </div>\n              </div>\n              <!-- <li id=\"menu-item-1000144\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000144\"><a href=\"final.html\">Final Project</a></li> -->\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <!-- nav -->\n    <nav class=\"nav\" role=\"navigation\">\n      <ul>\n        <!-- <li class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-24\"><a href=\"index.html\">Course Outline</a></li> -->\n        <li class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-26\"><a [routerLink]=\"['handy-links']\">Handy Links</a></li>\n        <li class=\"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-10 current_page_item menu-item-has-children menu-item-30\"><a>Lessons</a>\n          <ul class=\"sub-menu\">\n            <div class=\"row\">\n              <div class=\"col-sm-3 padding-0\">\n                <ul class=\"padding-0\">\n                  <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000132\"><a [routerLink]=\"['lessons/1/1']\">Day 1</a></li>\n                  <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000133\"><a [routerLink]=\"['lessons/1/2']\">Day 2</a></li>\n                  <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000134\"><a [routerLink]=\"['lessons/1/3']\">Day 3</a></li>\n                  <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000136\"><a [routerLink]=\"['lessons/1/4']\">Day 4</a></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-3 padding-0\">\n                <ul class=\"padding-0\">\n                  <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000137\"><a [routerLink]=\"['lessons/2/1']\">Day 5</a></li>\n                  <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000138\"><a [routerLink]=\"['lessons/2/2']\">Day 6</a></li>\n                  <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000139\"><a [routerLink]=\"['lessons/2/3']\">Day 7</a></li>\n                  <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000140\"><a [routerLink]=\"['lessons/2/4']\">Day 8</a></li>\n                  <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000141\"><a [routerLink]=\"['lessons/2/5']\">Day 9</a></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-3 padding-0\">\n                <ul class=\"padding-0\">\n                  <li id=\"menu-item-1000142\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000142\"><a [routerLink]=\"['lessons/3/1']\">Day 10</a></li>\n                  <li id=\"menu-item-1000143\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000143\"><a [routerLink]=\"['lessons/3/2']\">Day 11</a></li>\n                  <li id=\"menu-item-1000144\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000144\"><a [routerLink]=\"['lessons/3/3']\">Day 12</a></li>\n                  <li id=\"menu-item-1000145\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000145\"><a [routerLink]=\"['lessons/3/4']\">Day 13</a></li>\n                  <li id=\"menu-item-1000146\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000146\"><a [routerLink]=\"['lessons/3/5']\">Day 14</a></li>\n                </ul>\n              </div>\n              <div class=\"col-sm-3 padding-0\">\n                <ul class=\"padding-0\">\n                  <li id=\"menu-item-1000147\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000142\"><a [routerLink]=\"['lessons/4/1']\">Day 15</a></li>\n                  <li id=\"menu-item-1000148\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000143\"><a [routerLink]=\"['lessons/4/2']\">Day 16</a></li>\n                  <li id=\"menu-item-1000149\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000144\"><a [routerLink]=\"['lessons/4/3']\">Day 17</a></li>\n                  <li id=\"menu-item-1000150\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000145\"><a [routerLink]=\"['lessons/4/4']\">Day 18</a></li>\n                  <!-- <li id=\"menu-item-1000151\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000146\"><a [routerLink]=\"['lessons/4/5']\">Day 19</a></li> -->\n                </ul>\n              </div>\n            </div>\n            <!-- <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000144\"><a href=\"final.html\">Final Project</a></li> -->\n          </ul>\n        </li>\n      </ul>\n    </nav>\n    <!-- /nav -->\n  </div>\n</header>"

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1 class=\"col-md-12 text-center hdr\">Day {{this.day}}</h1>\n</div>\n<div [ngSwitch]=\"week\">\n  <week-1 *ngSwitchCase=\"1\" (scrolledTo)=\"scrollIntoView($event)\"></week-1>\n  <week-2 *ngSwitchCase=\"2\" (scrolledTo)=\"scrollIntoView($event)\"></week-2>\n  <week-3 *ngSwitchCase=\"3\" (scrolledTo)=\"scrollIntoView($event)\"></week-3>      \n  <week-4 *ngSwitchCase=\"4\" (scrolledTo)=\"scrollIntoView($event)\"></week-4>  \n  <week-5 *ngSwitchCase=\"5\" (scrolledTo)=\"scrollIntoView($event)\"></week-5>    \n</div>"

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\" \n          (click)=\"scrollIntoView('intro')\"> Introductions</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('angular')\"> What is Angular?</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('spa')\"> What are SPAs?</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('framework')\"> Angular Framework</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('cli')\"> Angular CLI</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('basics')\"> The Basics</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('git-branching')\"> Git Branching & Pull Requests</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('typescript')\"> What is Typescript?</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Introductions -->\n<div class=\"row\" id=\"intro\">\n  <h2 class=\"col-md-3\">Introductions</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>Who am I?</li>\n      <li>Who are you?</li>\n    </ul>\n  </div>\n</div>\n<!-- End Introductions -->\n\n<!-- What is Angular -->\n<div class=\"row\" id=\"angular\">\n  <h2 class=\"col-md-3\">What is Angular?</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Angular is a Typescript-based open-source front-end web application framework that allows you to create reactive SPAs.</p>\n  </div>\n</div>\n<!-- End What is Angular -->\n\n<!-- What are SPAs -->\n<div class=\"row\" id=\"spa\">\n  <h2 class=\"col-md-3\">What are SPAs?</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Single Page Applications (SPAs) are web applications where the page never changes but is rewritten. There is only one HTML file and a bunch of JS code we get from the server. Every change is rendered in the browser. This approach avoids interruption of user experience between successive pages making application behave more like a desktop application.</p>\n  </div>\n</div>\n<!-- End What are SPAs -->\n\n<!-- Angular Framework -->\n<div class=\"row\" id=\"framework\">\n  <h2 class=\"col-md-3\">Angular Framework</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">There are various versions of Angular framework available.</p>\n    <img src=\"./assets/angular-framework.png\" alt=\"angular framework versions\" class=\"screenshot\">\n    <p class=\"point\">Angular 1 was the first Angular framework (released in 2009). It was the first to make single-page-applications and better way of making DOM (Document Object Model) manipulations popular back in the day.</p>\n    <p class=\"point\">Angular 2 (2015-2016) was a complete rewrite of Angular 1 to fix many issues mainly performance issues.</p>\n    <img src=\"./assets/angular-framework-evolution.png\" alt=\"angular 2 evolution\" class=\"screenshot\">\n    <p class=\"point\">Angular 4, 5 and 6 are the latest versions of Angular 2. So in general, we refer to Angular 2 and higher as just \"Angular\". Angular 1, however, is not related to these version. Therefore Angular 1 is called \"AngularJS\".</p>\n    <img src=\"./assets/angular-vs-angularjs.png\" alt=\"angular vs angularJs\" class=\"screenshot\">\n    <p class=\"point\">Currently 6 is the latest version<!-- (which we will be learning) -->. It is not a complete rewrite for every version. These are incremental improvements of Angular 2.</p>\n    <img src=\"./assets/angular2.png\" alt=\"angular latest\" class=\"screenshot\">\n  </div>\n</div>\n<!-- End Angular Framework -->\n\n<!-- Angular CLI -->\n<div class=\"row\" id=\"cli\">\n  <h2 class=\"col-md-3\">Angular CLI</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Angular projects are more elaborate in regards to their build workflow, there are couple of files that need to be converted before they can run in browser. Angular CLI (Command Line Interface) is the recommended and best way of creating Angular projects as it does all of that work for us and heavily optimizes our code.</p>\n    <br>\n    <p class=\"point\">In order to make use of Angular CLI, we need to make sure we have NodeJS, npm and CLI installed globally on our machine.</p>\n    <br>\n    <ul class=\"point\">\n      <li>\n        <b>Installing or Updating NodeJS -</b>\n        <br> \n        Go <a href=\"https://nodejs.org/en/\" target=\"_blank\">here</a> and download the latest version\n      </li>\n      <br>\n      <li>\n        <b>Installing or Updating npm -</b> \n        <br>\n        Run <code>[sudo] npm install -g npm</code> (sudo maybe required for Mac/Linux)\n      </li>\n      <br>\n      <li>\n        <b>Installing the CLI -</b> \n        <br>\n        If you have an older version of Angular CLI already installed on your device and want to upgrade, run:\n        <br>\n        <code>\n          npm uninstall -g angular-cli\n        </code>\n        <br>\n        <code>\n          npm cache clean\n        </code>\n        <br>\n        <code>npm install -g @angular/cli/@latest</code>\n        <br>\n        Otherwise just run <code>npm install -g @angular/cli/@latest</code>\n      </li>\n      <br>\n      <li>\n        <b>Creating a new project -</b>\n        <br>\n        <p>Open your terminal/command line and navigate into a folder where you want to create the new project using the <code>cd</code> command.</p>\n        <p>Run <code>ng new my-first-app</code> (project name cannot be test as it is a reserved word).</p>\n        <p>Navigate into the project. <code>cd my-first-app</code></p>\n        <p>Run <code>ng serve</code> (to bring up a development server to run your build so you can see it in the browser)</p>\n        <p>Go to <a href=\"http://localhost:4200/\" target=\"_blank\">http://localhost:4200/</a> to see the default angular application the CLI created.</p>\n      </li>\n      <img src=\"./assets/common-cli-issues.png\" alt=\"common issues\" class=\"screenshot\">\n    </ul>\n  </div>\n</div>\n<!-- End Angular CLI -->\n\n<!-- The Basics -->\n<div class=\"row\" id=\"basics\">\n  <h2 class=\"col-md-3\">The Basics</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <h3>Bootstrap:</h3>\n      <p>Stop your server (if it is running). <br> Then run <code>npm install --save bootstrap@3</code>. This is the first step of adding bootstrap to our project. <br> Next step is to edit <i>angular-cli.json</i> file to add \"node_modules/boostrap/dist/bootstrap.min.css\" to the styles array. <br> Re-run <code>ng serve</code>.</p>\n    </div>\n    <div class=\"point\">\n      <h3>How does an angular app get loaded and started?</h3>\n    </div>\n  </div>\n</div>\n<!-- End The Basics -->\n\n<!-- Git Branching & Pull Requests -->\n<div class=\"row\" id=\"git-branching\">\n  <h2 class=\"col-md-3\">Git Branching & Pull Requests</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">A branch in Git is simply a lightweight movable pointer to commits. The default branch name in Git is <i>master</i>.</p>\n    <p class=\"point\">Basic Git commands related to branching:</p>\n    <ul class=\"point\">\n      <li><code>git branch</code> - lists all available branches</li>\n      <li><code>git branch <i>branch-name</i></code> - creates a new branch called <i>branch-name</i> which has a copy of the snapshot of its parent branch (branch you ran this command from)</li>\n      <li><code>git checkout <i>branch-name</i></code> - switches to <i>branch-name</i> branch</li>\n      <li><code>git checkout -b <i>branch-name</i></code> - combines the functionality of last two commands</li>\n      <li><code>git branch -d <i>branch-name</i></code> - deleted <i>branch-name</i> branch</li>\n    </ul>\n    <p class=\"point\">NOTE: all of the above commands are only for local branches.</p>\n    <p class=\"point\">Read more <a href=\"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell\" target=\"_blank\">here</a> and <a href=\"https://www.atlassian.com/git/tutorials/using-branches\" target=\"_blank\">here</a>.</p>\n  </div>\n</div>\n<!-- End Git Branching & Pull Requests -->\n\n<!-- Typescript -->\n<div class=\"row\" id=\"typescript\">\n  <h2 class=\"col-md-3\">Typescript</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">We have come across the word Typescript before in the definition of Angular. But what does it mean?</p>\n    <p class=\"point\">Typescript is a superset of Javascript. It primarily provides optional static typing, classes and interfaces. It compiles to idiomatic (normal) JavaScript, can dramatically improve your productivity by enabling rich tooling experiences, all while maintaining your existing code and continuing to use the same JavaScript libraries you already love. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.</p>\n    <img src=\"./assets/typescript.png\" alt=\"typescript\" class=\"screenshot\">\n    <p class=\"point\">TypeScript makes it easier to write cross-platform, application scale, JavaScript that runs in any browser or in any host.</p>\n    <p class=\"point\">Let's go to <a href=\"https://www.typescriptlang.org/play/\" target=\"_blank\">Typescript playground</a> to see what it does.</p>\n    <br>\n    <div class=\"point\"> <!-- Types -->\n      <h3>Types:</h3>\n      <p>The Type system represents the different types of values supported by the language. It checks for the validity of the supplied values, before they are stored or manipulated by the program. It further allows for richer code hinting and automated documentation too.</p>\n      <p>Built-in types -</p>\n      <ul>\n        <li>\n          <b>Number -</b> Can be used to represent both integers and floats.\n        </li>\n        <li>\n          <b>String -</b> Represents a sequence of Unicode characters.\n        </li>\n        <li>\n          <b>Boolean -</b> Represents logical values (ture or false).\n        </li>\n        <li>\n          <b>Null -</b> Represents an intentional absence of an object value.\n        </li>\n        <li>\n          <b>Undefined -</b> Denotes value given to all uninitialized variables.\n        </li>\n      </ul>\n      <p>Null and undefined - Are they the same?</p>\n    </div> <!-- End Types -->\n    <div class=\"point\"> <!-- Class -->\n      <h3>Class:</h3>\n      <p>A class defines a blueprint of what an object should look like and act like and then implements that blueprint by initialising class properties and defining methods.</p>\n      <p>A class definition can include the following -</p>\n      <ul>\n        <li>\n          <b>Fields -</b> A field is any variable declared in a class. Fields represent data pertaining to objects.\n        </li>\n        <li>\n          <b>Constructors -</b> Responsible for allocating memory for the objects of the class.\n        </li>\n        <li>\n          <b>Functions -</b> Functions represent actions an object can take. They are also at times reffered to as methods.\n        </li>\n      </ul>\n      <p>These components put together are termed as the data members of the class.</p>\n    </div> <!-- End Class -->\n  </div>\n</div>\n<!-- End Typescript -->\n"

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('typescript-continued')\">Typescript Continued</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('first-app')\"> Editing the first app</li>\n      <li class=\"link\" \n        (click)=\"scrollIntoView('components')\"> Components</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('databinding')\"> Databinding</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Typescript Continued -->\n<div class=\"row\" id=\"typescript-continued\">\n  <h2 class=\"col-md-3\">Typescript Continued</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\"> <!-- Class -->\n      <p>Class Inheritance:</p>\n      <p>A derived class that derives from the base class uses the <code>extends</code> keyword. Derived classes are often called <i>subclasses</i>, and base classes are often called <i>superclasses</i>.</p>\n    </div> <!-- End Class -->\n    <div class=\"point\"> <!-- Interface -->\n      <h3>Interface</h3>\n      <p>An interface is a group of related properties and methods that describe an object, but neither provides implementation nor initialisation for them. Unlike classes, an interface is a virtual structure that only exists within the context of TypeScript. The TypeScript compiler uses interfaces solely for type-checking purposes.</p>\n    </div><!-- End Interface -->\n    <div class=\"point\"> <!-- Generics -->\n      <h3>Generics</h3>\n      <p>With generics, TypeScript enables you to write code that can act on a variety of data types instead of being limited to a single one. Why do we need them at all?</p>\n    </div><!-- End Generics -->\n    <div class=\"point\"> <!-- Module -->\n      <h3>Modules:</h3>\n      <p>The word modules refers to small units of independent, reusable code that <i>export</i>s specific objects, making them avaibale for other modules to require in their programs. Modules are highly self-contained with distict functionality, allowing them to be shuffled, removed, or added as necessary, without disrupting the system as a whole. They provide the possibility to group related logic, encapsulate it, structure your code and prevent pollution of the global namespace.</p>\n    </div> <!-- End Module -->\n  </div>\n</div>\n<!-- End Typescript Continued -->\n\n<!-- Editing the first app -->\n<div class=\"row\" id=\"first-app\">\n  <h2 class=\"col-md-3\">Editing the first app</h2>\n  <div class=\"col-md-9\">\n    <!-- <p class=\"point\">Open an IDE of your choice. I use <a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code.</a></p> -->\n    <p class=\"point\">Add <a href=\"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag\" target=\"_blank\">Auto Rename Tag</a> and <a href=\"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer\" target=\"_blank\">Bracket Pair Colorizer</a> packages to VS Code.</p>\n  </div>\n</div>\n<!-- End Editing the first app -->\n\n<!-- Components -->\n<div class=\"row\" id=\"components\">\n  <h2 class=\"col-md-3\">Components</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Components are key features in Angular. We build our application by composing a bunch of components. We start with AppComponent (root component) which holds our entire application.</p>\n    <img src=\"./assets/components.png\" alt=\"components\" class=\"screenshot\">\n    <div class=\"point\">\n      <p>A component consists of the following -</p>\n      <ul>\n        <li>\n          <b>Template -</b> contains the HTML that needs to be rendered in the view for the application. Also includes binding and directives.\n        </li>\n        <li>\n          <b>Class -</b> contains properties and methods. This has the code which is used to support the view. It is defined in Typescript.\n        </li>\n        <li>\n          <b>Metadata -</b> has the extra data defined for the class. It is defined with a decorator.\n        </li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p>Lets take a look at -</p>\n      <ul>\n        <li><b>Creating new component</b></li>\n        <li>\n          <b>Understanding AppModule and Component Declaration -</b>\n          Angular uses components to build web pages & modules to bundle different pieces (components) into packages. AppModule basically gives Angular information about which features does the app have & uses.\n        </li>\n        <li><b>Using a new Component</b></li>\n        <li><b>Creating Components with CLI & nesting Components</b></li>\n        <li><b>Working with Component Template</b></li>\n        <li><b>Component Styles</b></li>\n        <li><b>Component Selector</b></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Components -->\n\n<!-- Databinding -->\n<div class=\"row\" id=\"databinding\">\n  <h2 class=\"col-md-3\">Databinding</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Databinding is the process that establishes a connection between the application UI and business logic.</p>\n    <img src=\"./assets/databinding.png\" alt=\"databinding\" class=\"screenshot\">\n    <img src=\"./assets/databinding-combination.png\" alt=\"databinding combination\" class=\"screenshot\">\n    <div class=\"point\">\n      <ul>\n        <li>\n          <b>String interpolation -</b> Any expression that can be resolved to a string in the end is the only condition for a string interpolation syntax.\n        </li>\n        <li>\n          <b>Property binding</b>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Databinding -->\n"

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('assignments')\"> Assignments</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('asgmt-1')\"> Practicing Typescript</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('asgmt-2')\"> Practicing Components</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assignments -->\n<div class=\"row\" id=\"assignments\">\n  <h2 class=\"col-md-3\">Assignments</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>For each assignment listed below:</p>\n      <ul>\n        <li>Create a new Angular project for every practice (unless stated otherwise).</li>\n        <li>Push up to Github before making any changes to the project.</li>\n        <li>Create a new branch (give appropriate name) and complete the instructions outlined in the practice in that branch.</li>\n        <li>Explain why you chose the approach you took? Which problems did you encounter? (add these to a Readme file).</li>\n        <li>Create a Pull Request between your branch and master.</li>\n        <li>Share the link to your PR with me or tag me as a reviewer (GH username: <code>pratimasakinala</code>).</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Assignments -->\n\n<!-- Practicing Typescript -->\n<div class=\"row\" id=\"asgmt-1\">\n  <h2 class=\"col-md-3\">Practicing Typescript</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <!-- https://basarat.gitbooks.io/typescript/docs/classes.html -->\n      <p><b>Practice 1 (Class & Class Inheritance):</b></p>\n      <ul>\n        <li>Create a class <i>Point</i>.</li>\n        <li>Define <i>x</i> and <i>y</i> fields of type number.</li>\n        <li>Define a constructor that sets these fields.</li>\n        <li>Create a method <i>add</i> that takes in an argument (newPoint) of type Point.</li>\n        <li><i>add</i> method should return a new Point generated having x value to be the sum of existing point's x and newPoint's x. Same with the y value.</li>\n        <li>Create two variables <i>p1</i> and <i>p2</i> which are instances of Point class.</li>\n        <li>Create a third variable <i>p3</i> which adds <i>p2</i> to <i>p1</i> (p1.add(p2)). Print this variable's value to the console.</li>\n      </ul>\n      <hr>\n      <ul>\n        <li>Create a derived class <i>Point3D</i> (base class = Point).</li>\n        <li>Add <i>z</i> field of type number.</li>\n        <li>Setup the constructor to set x and y fields in the base class and z field.</li>\n        <li>Create a method <i>add</i> that takes in an argument (new3DPoint) of type Point3D.</li>\n        <li>In this method, add respective fields of existing point3D and new3DPoint and return the value.</li>\n        <li>Create two variables <i>p3D1</i> and <i>p3D2</i> which are instances of Point3D class.</li>\n        <li>Create a third variable <i>p3D3</i> which adds <i>p3D2</i> to <i>p3D1</i>. Print this variable's value to the console.</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <!-- https://www.tutorialspoint.com/typescript/typescript_interfaces.htm -->\n      <p><b>Practice 2 (Interface):</b></p>\n      <ul>\n        <li>Create an interface <i>Person</i>.</li>\n        <li>Define firstName, lastName fields and sayHi method, all of string type.</li>\n        <li>Create a <i>customer</i> variable that is of Person type.</li>\n        <li>Set some values to the fields. Set sayHi method to return \"Hi there\" message.</li>\n        <li>Create an <i>employee</i> variable that is also of type Person.</li>\n        <li>Set some values to the fields with sayHi returning \"Hello!!\" message.</li>\n        <li>Print both customer and employee variables to the console.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Practicing Typescript -->\n\n<!-- Practicing Components -->\n<div class=\"row\" id=\"asgmt-2\">\n  <h2 class=\"col-md-3\">Practicing Components</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>Create three new Components: <i>WarningMessage</i> (manually), <i>SuccessMessage</i> (using CLI) and <i>DangerMessage</i> (either).</li>\n      <li>For WarningMessage Component: \n        <ul>\n          <li>use inline template and external styles.</li>\n          <li>use default selector.</li>\n        </ul>\n      </li>\n      <li>For SuccessMessage Component: \n        <ul>\n          <li>use external template and inline styles.</li>\n          <li>use attribute selector.</li>\n        </ul>\n      </li>\n      <li>For DangerMessage Component: \n        <ul>\n          <li>use external or internal template and styles.</li>\n          <li>use class selector.</li>\n        </ul>\n      </li>\n      <li>Output them next to each other in the AppComponent.</li>\n      <li>Output an appropriate warning, success or danger message in these Components.</li>\n      <li>Style the Components appropriately.</li>\n    </ul>\n    <hr>\n    <p class=\"point\">Feel free to create more components, nest them into each other!</p>\n    <hr>\n    <p class=\"point\"><b>Additional challenge:</b> Add a button in AppComponent that randomly picks which component to display.</p>\n  </div>\n</div>\n<!-- End Practicing Components -->\n"

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"> Assingments Solutions</li>\n      <li class=\"link\" \n        (click)=\"scrollIntoView('databinding-continued')\"> Databinding Continued</li>\n      <li class=\"link\" \n        (click)=\"scrollIntoView('built-in-directives')\"> Built-in Directives</li>\n      <li class=\"link\" \n        (click)=\"scrollIntoView('course-proj-basics')\"> Course Project - The Basics</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Databinding -->\n<div class=\"row\" id=\"databinding-continued\">\n  <h2 class=\"col-md-3\">Databinding Continued</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>\n        <b>Event Binding</b>\n      </li>\n      <li>\n        <b>Two-way databinding</b>\n      </li>\n    </ul>\n  </div>\n</div>\n<!-- End Databinding -->\n\n<!-- Built-in Directives -->\n<div class=\"row\" id=\"built-in-directives\">\n  <h2 class=\"col-md-3\">Built-in Directives</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">A Directive is an instruction in the DOM. Components are directives with template. There are many other directives that don't have a template. We will look at creating custom directives later. But for now let's take a look at built-in angular directives.</p>\n    <p class=\"point\"><b>*ngIf -</b> This is a structural directive. It evaluates the expression and then renders the then or else template in its place when expression is truthy or falsy respectively.</p>\n    <div class=\"point\">\n      <b>ngStyle -</b> This is a attribute directive. The styles are updated according to the value of the expression evaluation: \n      <ul>\n        <li><i>keys</i> are style names with an optional suffix (ie 'top.px', 'font-style.em'),</li> \n        <li><i>values</i> are the values assigned to those properties (expressed in the given unit).</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <b>ngClass -</b> The CSS classes are updated as follows, depending on the type of the expression evaluation:\n      <ul>\n        <li><i>string -</i> the CSS classes listed in the string (space delimited) are added,</li> \n        <li><i>Array -</i> the CSS classes declared as Array elements are added,</li> \n        <li><i>Object -</i> keys are CSS classes that get added when the expression given in the value evaluates to a truthy value, otherwise they are removed.</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <b>*ngFor -</b> This is a structural directive. It allows us to build data presentation lists and tables in our HTML templates. It lets you specify an iterable object to iterate over and the name to refer to each item by inside the scope. It also provides other values that can be aliased to local variables:\n      <ul>\n        <li><i>index -</i> position of the current item in the iterable starting at 0</li>\n        <li><i>first -</i> true if the current item is the first item in the iterable</li>\n        <li><i>last -</i> true if the current item is the last item in the iterable</li>\n        <li><i>even -</i> true if the current index is an even number</li>\n        <li><i>odd -</i> true if the current index is an odd number</li>        \n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Built-in Directives -->\n  \n<!-- Course Project - The Basics -->\n<div class=\"row\" id=\"course-proj-basics\">\n  <h2 class=\"col-md-3\">Course Project - The Basics</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Build a recipe book & shopping list app. We will be able to manage our recipes, view them in detail and also manage our shopping list and even push ingredients from a recipe directly into the shopping list.</p>\n    <div class=\"point\">\n      <p>Steps to build the application: </p>\n      <ul>\n        <li>\n          <b>Planning -</b>\n          <img src=\"./assets/project-planning.png\" alt=\"project planning models\" class=\"screenshot\">\n        </li>\n        <li><b>Setting up the application</b></li>\n        <li><b>Creating the components</b></li>\n        <li><b>Using the components</b></li>\n        <br>\n        <li>Continued...</li>\n      </ul>\n    </div>   \n  </div>\n</div>\n<!-- End Course Project - The Basics -->\n"

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"day\">\n  <day-1 *ngSwitchCase=\"1\" (scrolledTo)=\"scrollIntoView($event)\"></day-1>\n  <day-2 *ngSwitchCase=\"2\" (scrolledTo)=\"scrollIntoView($event)\"></day-2>\n  <day-3 *ngSwitchCase=\"3\" (scrolledTo)=\"scrollIntoView($event)\"></day-3>\n  <day-4 *ngSwitchCase=\"4\" (scrolledTo)=\"scrollIntoView($event)\"></day-4>  \n</div>"

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\" \n        (click)=\"scrollIntoView('course-proj-basics')\"> Course Project - The Basics Continued</li>\n      <li class=\"link\" \n        (click)=\"scrollIntoView('git-rebasing')\"> Git Rebasing</li>\n      <li class=\"link\" \n        (click)=\"scrollIntoView('bootstrap')\"> Bootstrap</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Course Project - The Basics -->\n<div class=\"row\" id=\"course-proj-basics\">\n  <h2 class=\"col-md-3\">Course Project - The Basics Continued</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>Continue building the application: </p>\n      <ul>\n        <li><b>Adding a navigation bar</b></li>\n        <li><b>Working on Recipe feature</b></li>\n        <li><b>Working on Shopping List feature</b></li>\n      </ul>\n    </div>   \n  </div>\n</div>\n<!-- End Course Project - The Basics -->\n\n<!-- Git Rebasing -->\n<div class=\"row\" id=\"git-rebasing\">\n  <h2 class=\"col-md-3\">Git Rebasing</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Git rebase in its simplest form is a command which will merge another branch into the branch where you are currently working, and move all of the local commits that are ahead of the rebased branch to the top of the history on that. <br> Read more <a href=\"https://www.atlassian.com/git/tutorials/merging-vs-rebasing\" target=\"_blank\">here</a>.</p>\n  </div>\n</div>\n<!-- End Git Rebasing -->\n\n<!-- Bootstrap -->\n<div class=\"row\" id=\"bootstrap\">\n  <h2 class=\"col-md-3\">Bootstrap</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Understanding Bootstrap Grid System and more <a href=\"https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/\" target=\"_blank\">here</a>.</p>\n  </div>\n</div>\n<!-- End Bootstrap -->\n"

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('assignments')\"> Assignments</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('asgmt-1')\"> Practicing Databinding</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assignments -->\n<div class=\"row\" id=\"assignments\">\n  <h2 class=\"col-md-3\">Assignments</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point text-justify\">\n      <code>\n        <b>NOTE:</b> Complete <i>Practicing Components</i> assignment mentioned <a href=\"https://pratimasakinala.github.io/angular2course/#/lessons/1/3\" target=\"_blank\">here</a>. Then continue working on below assignments.\n      </code>\n    </p>\n    <div class=\"point\">\n      <p>For each assignment listed below:</p>\n      <ul>\n        <li>Create a new Angular project (unless stated otherwise).</li>\n        <li>Push up to Github before making any changes to the project.</li>\n        <li>Create a new branch (give appropriate name) and complete the instructions outlined in that branch.</li>\n        <li>Explain why you chose the approach you took? Which problems did you encounter? (add these to a Readme file).</li>\n        <li>Create a Pull Request between your branch and master.</li>\n        <li>Share the link to your PR with me or tag me as a reviewer (GH username: <code>pratimasakinala</code>).</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Assignments -->\n\n<!-- Practicing Databinding -->\n<div class=\"row\" id=\"asgmt-1\">\n  <h2 class=\"col-md-3\">Practicing Databinding</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p><b>Practice 1 (String Interpolation):</b></p>\n      <ul>\n        <li>Create a <i>heading</i> property in AppComponent and set it to \"Person Details\".</li>\n        <li>Create a <i>person</i> property of type any.</li>\n        <li>Set <i>person</i> to be an object consisting of name (empty object) and gender (empty string) keys.</li>\n        <li>The name key in <i>person</i> should have <i>first</i> and <i>last</i> keys (both of type string and set to some default values).</li>\n        <li>In the template, display the heading followed by a paragraph.</li>\n        <li>\n          Output below message in the paragraph-\n          <br>\n          <code>\n            Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <br> \n            City:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <br>\n          </code>\n        </li>\n        <li>In the Name section in the paragraph above, display 'Mr' or 'Mrs' based on the gender of the person. (for example: Mr John Doe)</li>\n        <li>In the City section, check if <i>person</i> property has a <i>address</i> key. If it exists, display its value. Otherwise leave the text blank.</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Practice 2 (String Interpolation):</b></p>\n      <ul>\n        <li>Create two properties (<i>first</i> and <i>second</i>) of type number in AppComponent and set some default values.</li>\n        <li>Output these properties in the template.</li>\n        <li>Output the sum of these properties in the template (Sum of numbers: ___).</li>\n        <li>Output the largest of these property values in the template (Largest of numbers: ___).</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Practice 3 (Property Binding):</b></p>\n      <ul>\n        <li>Create a class <i>Person</i> (fields: name, gender and rating).</li>\n        <li>Set appropriate types to above fields.</li>\n        <li>Create two properties <i>female</i> and <i>male</i>.</li>\n        <li>Set these properties to be instances of Person class (initialize with appropriate values (gender: 'f' for female) and (gender: 'm' for male)).</li>\n        <li>Create a <i>person</i> property.</li>\n        <li>Create a method that randomly pick between <i>female</i> and <i>male</i> properties and sets it to <i>person</i> property.</li>\n        <li>In the template:\n          <ul>\n            <li>Use property binding to set an h1 tag's content (textContent) to be \"Name: ___ \". Fill in the blank with <i>person</i>'s name.</li>\n            <li>Add two buttons below the h1. One should say \"Male\" and other \"Female\".</li>\n            <li>These buttons should be disabled if <i>person</i>'s gender is male or female respectively.</li>\n            <li>On clicking the buttons, <i>person</i> should be set to the opposite gender.</li>\n            <li>(For example, if person is originally set to female, only Male button should be enabled. And on clicking this button, person should be set to male. And hence the button should be disabled.)</li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Practice 4:</b></p>\n      <ul>\n        <li>Call this project <i>monster-fight</i>.</li>\n        <li>Work on each of below sections in separate branches (appropriately named).</li>\n        <li>\n          <p><b>String Interpolation:</b></p>\n          <ul>\n            <li>Create a <i>monsterName</i> property of type string in AppComponent.</li>\n            <!-- <li>Add an Input field which updates a property <i>monsterName</i> via Two-Way-Binding.</li> -->\n            <li>Output the <i>monsterName</i> property in a paragraph<!-- below the input-->.</li>\n          </ul>\n        </li>\n        <li>\n          <p><b>Property Binding:</b></p>\n          <ul>\n            <li>Add a button (below the paragraph) which may only be clicked if the <i>monsterName</i> is NOT an empty string.</li>\n            <li>Upon clicking the button, generate a random power value for the monster and store it in a property (appropriately named).</li>\n            <li>Display a message (with monsterName and power included) below the button for all monsters created.</li>\n            <li>Test functionality by adding/removing value of monsterName property.</li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Practicing Databinding -->\n"

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"> Assingments Solutions</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('recap-typescript')\"> Typescript Recap</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('recap-components')\"> Components Recap</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('recap-built-in-directives')\"> Built-in Directives Recap</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Typescript Recap -->\n<div class=\"row\" id=\"recap-typescript\">\n  <h2 class=\"col-md-3\">Typescript Recap</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p><b>Types:</b></p>\n      <ul>\n        <li>What are the different types in typescript?</li>\n        <li>\n          Null vs Undefined-\n          <ul>\n            <li>Something hasn't been initialized: <code>undefined</code>.</li>\n            <li>Something is currently unavailable: <code>null</code>.</li>\n          </ul>\n        </li>\n        <li>Array type?</li>\n        <li><b>Practice: </b>Create a variable for each type and set some default values to them.</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n        <p><b>Class:</b></p>\n        <ul>\n          <li>What is a class?</li>\n          <li>What can a class definition include?</li>\n          <li>What is class inheritance?</li>\n          <li>Subclass and Superclass?</li>\n          <li>Private, Public and Protected.</li>\n          <li>\n            <b>Practice:</b>\n            <ul>\n              <li>Create a class <i>CarBrand</i> that has make field.</li>\n              <li>Create a variable <i>ford</i> that is an instance of <i>CarBrand</i>.</li>\n              <li>Print the value of <i>ford</i>'s <i>make</i> property.</li>\n              <li>Create a derived class <i>Car</i> that has model and year fields.</li>\n              <li>Add a <i>getDetails</i> method to <i>Car</i> which return a simple string including the make, model and year of the car.</li>\n              <li>Create a variable <i>honda</i> that is an instance of <i>Car</i> and set \"honda\" as the <i>make</i> with other values of your choice.</li>\n              <li>Print the value of <i>honda</i>'s <i>make</i> property.</li>\n              <li>Now set <i>make</i> field of <i>CarBrand</i> to be private.</li>\n              <li>Do the console logs still work?</li>\n              <li>What about when <i>make</i> is set to protected?</li>\n            </ul>\n          </li>\n        </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Interface:</b></p>\n      <ul>\n        <li>What is an interface?</li>\n        <li>How is it different from a class?</li>\n        <li>\n          <b>Practice:</b>\n          <ul>\n            <li>Create an interface <i>Fighter</i> which has name and points fields of types string and number respectively.</li>\n            <li>Create two variables <i>fighter1</i> and <i>fighter2</i> that are of type <i>Fighter</i> and set some default values to them.</li>\n            <li>Print both these variables.</li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Module:</b></p>\n      <ul>\n        <li>What are modules?</li>\n        <li>\n          <b>Practice:</b>\n          <ul>\n            <li>Create a module <i>Vehicle</i> which has a class <i>Sedan</i>.</li>\n            <li><i>Sedan</i> class has make, model and year fields.</li>\n            <li><i>Vehicle</i> also has a variable <i>honda</i> which is an instance of <i>Sedan</i> class.</li>\n            <li>Create a variable <i>ford</i> and set it to be a new instance of Sedan class.</li>\n            <li>Did it work?</li>\n            <li>Export the <i>Sedan</i> class and try again.</li>\n            <li>Print the value of <i>ford</i> and <i>honda</i>.</li>\n            <li>What happened now and why?</li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Typescript Recap -->\n\n<!-- Components Recap -->\n<div class=\"row\" id=\"recap-components\">\n  <h2 class=\"col-md-3\">Components Recap</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>What does a component consist of?</li>\n      <li>How does angular know that a component class is special?</li>\n      <li>Command to create a new component?</li>\n      <li>Ways to select a component?</li>\n      <li>Ways to link a template?</li>\n      <li>Ways to link styles for the template?</li>  \n      <li>\n        <b>Practice:</b>\n        <ul>\n          <li>Create a new component <i>GreetingMessage</i> manually.</li>\n          <li>Use default selector, external template and external styles.</li>\n          <li>Display some text in the template and style it.</li>\n          <li>Display this component in AppComponent.</li>\n          <li>Now use attribute selector and make appropriate changes.</li>\n          <li>Now use class selector and make appropriate changes.</li>\n          <li>Use inline template and inline styles.</li>\n        </ul>\n      </li>    \n    </ul>\n  </div>\n</div>\n<!-- End Components Recap -->\n\n<!-- Built-in Directives Recap -->\n<div class=\"row\" id=\"recap-built-in-directives\">\n  <h2 class=\"col-md-3\">Built-in Directives Recap</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>What is a directive?</li>\n      <li>Two types of directives?</li>\n      <li>Some of basic built-in directives?</li>\n      <li>\n        <b>Practice:</b>\n        <ul>\n          <!-- ngIf -->\n          <li><b>ngIf-</b></li>\n          <li>Create a property <i>displayParagraph</i> of type boolean and set it to <code>false</code> by default.</li>\n          <li>Display a paragraph with any text of your choice.</li>\n          <li>Add a condition (ngIf) on the above paragraph to check the value of <i>displayParagraph</i>.</li>\n          <li>The paragraph should be displayed if <i>displayParagraph</i> is true.</li>\n          <li>Now set the value of <i>displayParagraph</i> to <code>true</code> and observe the change in template.</li>\n          <!-- end ngIf -->   \n\n          <br>\n          \n          <!-- ngStyle -->          \n          <li><b>ngStyle-</b></li>\n          <li>\n            Use ngStyle to set\n            <br>\n            <ul>\n              <li>\n                <code>position: absolute;<br>right: 0;<br>top: 0;</code>\n              </li>\n            </ul> \n            properties of the above paragraph.\n          </li>\n          <!-- end ngStyle -->          \n          \n          <br>\n          \n          <!-- ngClass -->          \n          <li><b>ngClass-</b></li>\n          <li>Create a css class <i>color-red</i> that sets the color to red.</li>\n          <li>Create another css class <i>background-yellow</i> that sets the background-color to yellow.</li>\n          <li>Create another css class <i>hide-text</i> that sets the display property to none.</li>\n          <li>Add a new paragraph with any text below the existing paragraph.</li>\n          <li>Add <i>color-red</i> and <i>background-yellow</i> classes using string assignments to ngClass.</li>\n          <li>Create another paragraph with any text and add <i>color-red</i> and <i>background-yellow</i> classes using array assignemnt to ngClass.</li>\n          <li>\n            Create another paragraph with some text and add <i>color-red</i> and <i>background-yellow</i> classes using object assignment to ngClass. To this paragraph, add <i>hide-text</i> class if <i>displayParagraph</i> is true.\n          </li>\n          <!-- end ngClass -->\n\n          <br>\n\n          <!-- ngFor -->\n          <li><b>ngFor-</b></li>\n          <li>Create a property <i>users</i> which is an array of objects.</li>\n          <li>Each user object consists of a name and age property.</li>\n          <li>Create some dummy data in the users array. (create a class maybe? or not.)</li>\n          <li>Display each user's details (name and age used in proper sentence) as a list item in an unordered list under the previously added paragraphs in the template.</li>\n          <!-- end ngFor -->          \n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>\n<!-- End Built-in Directives Recap -->\n"

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('assignments')\"> Assignments</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('asgmt-1')\"> Practicing Built-in Directives</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('asgmt-2')\"> Practicing Components & Databinding</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('learn-bootstrap')\"> Learn Bootstrap</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assignments -->\n<div class=\"row\" id=\"assignments\">\n  <h2 class=\"col-md-3\">Assignments</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>For each assignment listed below:</p>\n      <ul>\n        <li>Create a new Angular project (unless stated otherwise).</li>\n        <li>Push up to Github before making any changes to the project.</li>\n        <li>Create a new branch (give appropriate name) and complete the instructions outlined in that branch.</li>\n        <li>Explain why you chose the approach you took? Which problems did you encounter? (add these to a Readme file).</li>\n        <li>Create a Pull Request between your branch and master.</li>\n        <li>Share the link to your PR with me or tag me as a reviewer (GH username: <code>pratimasakinala</code>).</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Assignments -->\n\n<!-- Practicing Built-in Directives -->\n<div class=\"row\" id=\"asgmt-1\">\n  <h2 class=\"col-md-3\">Practicing Built-in Directives</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p><b>Practice 1:</b></p>\n      <ul>\n        <li>Add a button which says 'Display Details'.</li>\n        <li>Add a paragraph with any content of your choice.</li>\n        <li>Toggle the displaying of that paragraph with the button created in the first step.</li>\n        <li>When the paragraph is displayed, change the button text to 'Hide Details'.</li>\n        <li>Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number).</li>\n        <li>Starting at the 10th log item, give all future log items a green background (via ngClass) and white color (ngStyle).</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Practice 2:</b></p>\n      <ul>\n        <li>Continue working on the <i>monster-fight</i> project.</li>\n        <li>Create a new branch.</li>\n        <li>Create a <i>hero</i> property.</li>\n        <li>Add a new input that sets <i>hero</i>'s name key.</li>\n        <li>Add a button which may only be clicked if the hero's name is NOT an empty string.</li>\n        <li>Once this button is clicked, generate random power for hero and remove/hide both the input and button (added in the previous two steps) from the DOM.</li>\n        <li>Looping though the array of monsters, style the display message such that if the monster's power is greater than hero's, add danger styling.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Practicing Built-in Directives -->\n\n<!-- Practicing Components & Databinding -->\n<div class=\"row\" id=\"asgmt-2\">\n  <h2 class=\"col-md-3\">Practicing Components & Directives</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>Create three new components(manually or with CLI): <i>GameControl</i>, <i>Odd</i> and <i>Even</i>.</li>\n      <li>The GameControl Component should have buttons to start and stop the game.</li>\n      <li>When starting the game, an event (holding a incrementing number) should get emitted each second.</li>\n      <li>The event should be listenable from outside the component.</li>\n      <li>When stopping the game, no more events should get emitted.</li>\n      <li>A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers).</li>\n      <li>Simply output <i>Odd - NUMBER</i> or <i>Even - NUMBER</i> in the two components.</li>\n      <li>Style the element holding your output text differently in both components.</li>\n    </ul>\n  </div>\n</div>\n<!-- End Practicing Components & Databinding -->\n\n<!-- Learn Bootstrap -->\n<div class=\"row\" id=\"learn-bootstrap\">\n  <h2 class=\"col-md-3\">Learn Bootstrap</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Go through practice and other material listed on Handy Links section for Bootstrap.</p>\n  </div>\n</div>\n<!-- End Learn Bootstrap -->\n"

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('recap')\"> Recap explainations</li>      \n    </ul>\n  </div>\n</div>\n\n<!-- Recap explainations -->\n<div class=\"row\" id=\"recap\">\n  <h2 class=\"col-md-3\">Recap explainations</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Explain recap of topics from Day 7.</p>\n  </div>\n</div>\n<!-- Recap explainations -->\n"

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"day\">\n  <day-1 *ngSwitchCase=\"1\" (scrolledTo)=\"scrollIntoView($event)\"></day-1>\n  <day-2 *ngSwitchCase=\"2\" (scrolledTo)=\"scrollIntoView($event)\"></day-2>\n  <day-3 *ngSwitchCase=\"3\" (scrolledTo)=\"scrollIntoView($event)\"></day-3>\n  <day-4 *ngSwitchCase=\"4\" (scrolledTo)=\"scrollIntoView($event)\"></day-4> \n  <day-5 *ngSwitchCase=\"5\" (scrolledTo)=\"scrollIntoView($event)\"></day-5>  \n  <h1 *ngSwitchDefault class=\"text-center\" style=\"color: #7A1501\">Coming Soon!</h1>   \n</div>"

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('recap-directives')\"> Built-in Directives Recap</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('debugging')\"> Debugging</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('cmp-db-deep-dive')\"> Components & Databinding Deep Dive</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Built-in Directives Recap -->\n<div class=\"row\" id=\"recap-directives\">\n  <h2 class=\"col-md-3\">Built-in Directives Recap</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Explain ngClass, ngStyle built-in directives.</p>\n  </div>\n</div>\n<!-- End Built-in Directives Recap -->\n\n<!-- Debugging -->\n<div class=\"row\" id=\"debugging\">\n  <h2 class=\"col-md-3\">Debugging</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>Understanding Angular error message</li>\n      <li>Debugging in browser using sourcemaps</li>\n      <li>Using Augury</li>\n    </ul>\n  </div>\n</div>\n<!-- End Debugging -->\n\n<!-- Components & Databinding Deep Dive -->\n<div class=\"row\" id=\"cmp-db-deep-dive\">\n  <h2 class=\"col-md-3\">Components & Databinding Deep Dive</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Clone <a href=\"https://github.com/pratimasakinala/cmp-databinding\" target=\"_blank\">this</a> project.</p>\n    <ul class=\"point\">\n      <li>Splitting App into Components</li>\n      <li>Property and event binding -\n        <img src=\"./assets/property-event-binding.png\" alt=\"property & event binding\" class=\"screenshot\">\n      </li>\n      <li>Understanding View Encapsulation</li>\n      <li>Local references in Templates</li>\n      <li>Accessing template & DOM with @ViewChild</li>\n      <li>Using <i>ng-content</i></li>\n      <li>Component Lifecycle -\n        <img src=\"./assets/component-lifecycle.png\" alt=\"component lifecycle\" class=\"screenshot\">\n      </li>\n      <li>Accessing <i>ng-content</i> with @ContentChild</li>\n    </ul>\n  </div>\n</div>\n<!-- End Components & Databinding Deep Dive -->\n\n"

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('assignments')\"> Assignments</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assignments -->\n<div class=\"row\" id=\"assignments\">\n  <h2 class=\"col-md-3\">Assignments</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point text-justify\">\n      <code>\n        Complete assignments from Day 8.\n      </code>\n    </p>\n  </div>\n</div>\n<!-- End Assignments -->\n"

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"> Assingments Solutions</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assingments Solutions -->\n<div class=\"row\" id=\"asgmt\">\n  <h2 class=\"col-md-3\">Assingments Solutions</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Solve assignments from Day 8.</p>\n  </div>\n</div>\n<!-- End Assingments Solutions -->"

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('course-proj-cmp-db')\"> Course Project - Components & Databinding</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Course Project - Components & Databinding -->\n<div class=\"row\" id=\"course-proj-cmp-db\">\n  <h2 class=\"col-md-3\">Course Project - Components & Databinding</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>Fine tune the course project. Here are the tasks we will do: </p>\n      <ul>\n        <li>Navigate between recipe and shopping list.</li>\n        <li>Select recipe and load it into the details section.</li>\n        <li>Add ingredients to the list.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Course Project - Components & Databinding -->\n"

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('assignments')\"> Assignments</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('asgmt-1')\"> Practicing Databinding</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assignments -->\n<div class=\"row\" id=\"assignments\">\n  <h2 class=\"col-md-3\">Assignments</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>For each assignment listed below:</p>\n      <ul>\n        <li>Create a new Angular project (unless stated otherwise).</li>\n        <li>Push up to Github before making any changes to the project.</li>\n        <li>Create a new branch (give appropriate name) and complete the instructions outlined in that branch.</li>\n        <li>Explain why you chose the approach you took? Which problems did you encounter? (add these to a Readme file).</li>\n        <li>Create a Pull Request between your branch and master.</li>\n        <li>Share the link to your PR with me or tag me as a reviewer (GH username: <code>pratimasakinala</code>).</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Assignments -->\n\n<!-- Practicing Databinding -->\n<div class=\"row\" id=\"asgmt-1\">\n  <h2 class=\"col-md-3\">Practicing Databinding</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p><b>Practice 1 (Passing Data to nested component):</b></p>\n      <ul>\n        <li>Create two components: <i>ParentComponent</i> (manually) and <i>ChildComponent</i> (using CLI).</li>\n        <li>In <i>ParentComponent</i>, add a header (h1) with text \"I'm a Container Component\".</li>\n        <li>Display <i>ChildComponent</i> below this header.</li>\n        <li>In <i>ChildComponent</i>, create a property <i>title</i> and set it to \"I'm a nested component\".</li>\n        <li>Display a header (h2) with the value of <i>title</i> in <i>ChildComponent</i> template (use inline template).</li>\n        <li>Run the project to make sure the components load with proper data.</li>\n        <li>Modify <i>ChildComponent</i> such that the <i>title</i> property is no longer hard-coded to the string value. But it takes any value passed into it from <i>ParentComponent</i>.</li>\n        <li>Create a <i>childTitle</i> property in <i>ParentComponent</i> and set it to \"Text passed to child\".</li>\n        <li>Update the <i>ParentComponent</i> template to bind to <i>title</i> property of <i>ChildComponent</i> and pass in <i>childTitle</i> property into it.</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Practice 2 (Passing Data from nested component):</b></p>\n      <ul>\n        <li>Continue working on the same project that was created in Practice 1 above.</li>\n        <li>Add a button in <i>ChildComponent</i> below the header with text \"Click me!\".</li>\n        <li>On clicking this button, execute a method <i>notifyParent</i> that emits the event to <i>ParentComponent</i>.</li>\n        <li>In <i>ParentComponent</i> template, listen to the event (created in <i>ChildComponent</i>) and execute a method <i>onNotify</i> (which prints the message in console).</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Practice 3:</b></p>\n      <ul>\n        <li>Continue working on the monster project.</li>\n        <li>Create a new branch.</li>\n        <li>Break down the AppComponent into smaller Components.</li>\n        <li>Pass necessary property/event into and out of these new Components.</li>\n      </ul>\n      <hr>\n      <p><b>Additional challenge:</b></p>\n      <ul>\n        <li>Add a 'Fight' button next to each monster message.</li>\n        <li>Upon clicking this button, do Math calculations to see if the hero survived the fight.</li>\n        <li>If the hero dies, clear the monster list and display 'You Lost!' message and bring back the input for hero and reset the game.</li>\n        <li>If the hero survives and the monster has:\n          <ul>\n            <li>no more power, remove the monster from the list</li>\n            <li>some power left, keep the monster in the list</li>\n          </ul>\n          and let the player continue.\n        </li>\n        <li>Make any style changes you need/want to.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Practicing Databinding -->\n"

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"day\">\n  <day-1 *ngSwitchCase=\"1\" (scrolledTo)=\"scrollIntoView($event)\"></day-1>\n  <day-2 *ngSwitchCase=\"2\" (scrolledTo)=\"scrollIntoView($event)\"></day-2>\n  <day-3 *ngSwitchCase=\"3\" (scrolledTo)=\"scrollIntoView($event)\"></day-3>\n  <day-4 *ngSwitchCase=\"4\" (scrolledTo)=\"scrollIntoView($event)\"></day-4> \n  <day-5 *ngSwitchCase=\"5\" (scrolledTo)=\"scrollIntoView($event)\"></day-5>  \n  <h1 *ngSwitchDefault class=\"text-center\" style=\"color: #7A1501\">Coming Soon!</h1>   \n</div>"

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"> Assingments Solutions</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assingments Solutions -->\n<div class=\"row\" id=\"asgmt\">\n  <h2 class=\"col-md-3\">Assingments Solutions</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Solve assignments from Day 14.</p>\n  </div>\n</div>\n<!-- End Assingments Solutions -->"

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('assignments')\"> Assignments</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('rebuild-recipe-book')\">Rebuild Recipe Book Application</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assignments -->\n<div class=\"row\" id=\"assignments\">\n  <h2 class=\"col-md-3\">Assignments</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>For each assignment listed below:</p>\n      <ul>\n        <li>Create a new Angular project (unless stated otherwise).</li>\n        <li>Push up to Github before making any changes to the project.</li>\n        <li>Create a new branch (give appropriate name) and complete the instructions outlined in that branch.</li>\n        <li>Explain why you chose the approach you took? Which problems did you encounter? (add these to a Readme file).</li>\n        <li>Create a Pull Request between your branch and master.</li>\n        <li>Share the link to your PR with me or tag me as a reviewer (GH username: <code>pratimasakinala</code>).</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Assignments -->\n\n<!-- Rebuild Recipe Book Application -->\n<div class=\"row\" id=\"rebuild-recipe-book\">\n  <h2 class=\"col-md-3\">Rebuild Recipe Book Application</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Rebuild our recipe book application from scratch using instructions starting on Day 4 - Course Project (The Basics). </p>\n  </div>\n</div>\n<!-- End Rebuild Recipe Book Application -->"

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('directive')\"> Directives</li>  \n      <li class=\"link\"\n          (click)=\"scrollIntoView('course-project-dir')\"> Course Project - Directives</li> \n    </ul>\n  </div>\n</div>\n\n<!-- Directives -->\n<div class=\"row\" id=\"directive\">\n  <h2 class=\"col-md-3\">Directives</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Attribute vs Structural Directives: </p>\n    <img src=\"./assets/attribute-vs-structural-dir.png\" alt=\"attribute vs structural directives\" class=\"screenshot\">\n    <div class=\"point\">\n      <p>Clone <a href=\"https://github.com/pratimasakinala/directives\" target=\"_blank\">this</a> project to learn:</p>\n      <ul>\n        <li>Recap of some built-in directives.</li>\n        <li>Create Basic Attribute directive.</li>\n        <li>Using Renderer (Learn more <a href=\"https://angular.io/api/core/Renderer2\" target=\"_blank\">here</a>).</li>\n        <li>HostListener & HostBinding.</li>\n        <li>Binding to directive properties.</li>\n        <li>Behind the scenes of structural directive.</li>\n        <li>Building a Structural directive.</li>\n        <li>Understanding ngSwitch.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Directives -->\n\n<!-- Course Project - Directives -->\n<div class=\"row\" id=\"course-project-dir\">\n  <h2 class=\"col-md-3\">Course Project - Directives</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Enhance the app to open the dropdowns which currently don't work.</p>\n  </div>\n</div>\n<!-- End Course Project - Directives -->\n"

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('assignments')\"> Assignments</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('asgmt-1')\"> Practicing Nested Loops</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('asgmt-2')\"> Continue Rebuilding Recipe Book Application</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assignments -->\n<div class=\"row\" id=\"assignments\">\n  <h2 class=\"col-md-3\">Assignments</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>For each assignment listed below:</p>\n      <ul>\n        <li>Create a new Angular project (unless stated otherwise).</li>\n        <li>Push up to Github before making any changes to the project.</li>\n        <li>Create a new branch (give appropriate name) and complete the instructions outlined in that branch.</li>\n        <li>Explain why you chose the approach you took? Which problems did you encounter? (add these to a Readme file).</li>\n        <li>Create a Pull Request between your branch and master.</li>\n        <li>Share the link to your PR with me or tag me as a reviewer (GH username: <code>pratimasakinala</code>).</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Assignments -->\n\n<!-- Practicing Nested Loops -->\n<div class=\"row\" id=\"asgmt-1\">\n  <h2 class=\"col-md-3\">Practicing Nested Loops</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p><b>Practice 1:</b></p>\n      <ul>\n        <li>Create a <i>bools</i> property that is of type array of boolean values.</li>\n        <li>Assign <code>true, false</code> as values of <i>bools</i> array.</li>\n        <hr>\n        <li>Create a <i>nums</i> property that is of type array of numeric values.</li>\n        <li>Assign <code>1, 2.5, 5</code> as values of <i>nums</i> array.</li>   \n        <hr>         \n        <li>Create a <i>strs</i> property that is of type array of string values.</li>\n        <li>Assign <code>hi, there</code> as values of <i>strs</i> array.</li>\n        <hr>      \n        <li>Create a <i>test</i> property that is of type object.</li>\n        <li>Assign <code>id: 1, name: 'test'</code> as value of <i>test</i> object.</li> \n        <li>Create a <i>user</i> property that is of type object.</li>\n        <li>Assign <code>id: 2, name: 'user'</code> as value of <i>user</i> object.</li>\n        <li>Create a <i>objs</i> property that is of type array of object values.</li>\n        <li>Assign <i>test</i> and <i>user</i> properties as values of <i>objs</i> array.</li>\n        <hr>      \n        <li>Create a <i>types</i> property that is of type array of any values.</li>\n        <li>Assign <i>bools</i>, <i>nums</i>, <i>strs</i> and <i>objs</i> properties as values of <i>objs</i> array.</li>             \n        <hr>      \n        <li>Create a <i>getTypeof</i> method that takes in an argument and returns <code>typeof</code> of the argument.</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Practice 2:</b></p>\n      <ul>\n        <li>Continue working on above project.</li>\n        <li>Create a new branch (branch off of previous branch).</li>\n        <li>In the template, display \"Types\" in a header element.</li>\n        <li>Create an un-ordered list under the header with a li tag.</li>\n        <li>Loop through <i>types</i> (call variable <i>type</i> & capture the index).</li>\n        <li>Inside above li, add a paragraph that has <code>text-transform: capitalize</code> style applied.</li>\n        <li>This paragraph should display the <i>typeof</i> of <i>type</i> variable (use getTypeof method).</li>\n        <li>Along with the paragraph, add an un-ordered list (inside the above li) which loops through each element in the <i>type</i> variable (call variable <i>val</i>.</li>\n        <li>Inside above li, do a ternary check.</li>\n        <li>The ternary condition: <code>typeof of <i>val</i> is 'object'</code>.</li>\n        <li>If this condition is true, display <i>id</i> and <i>name</i> of <i>val</i> variable.</li>\n        <li>Else display <i>val</i> variable.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Practicing Nested Loops -->\n\n<!-- Continue Rebuilding Recipe Book Application -->\n<div class=\"row\" id=\"asgmt-2\">\n  <h2 class=\"col-md-3\">Continue Rebuilding Recipe Book Application</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Continue rebuild our recipe book application from scratch using instructions starting on Day 4 - Course Project (The Basics). </p>\n  </div>\n</div>\n<!-- End Continue Rebuilding Recipe Book Application -->\n"

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('services')\"> Services & Dependency Injection</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('course-proj-srv-dependency')\"> Course Project - Services & Dependency Injection</li> \n    </ul>\n  </div>\n</div>\n\n<!-- Services & Dependency Injection -->\n<div class=\"row\" id=\"services\">\n  <h2 class=\"col-md-3\">Services & Dependency Injection</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Services are JavaScript functions, which are responsible for performing a single task. Services may have their associated properties and the methods, which can be included in the component.</p>\n    <img src=\"./assets/services.png\" alt=\"services\" class=\"screenshot\">\n    <p class=\"point\">Clone <a href=\"https://github.com/pratimasakinala/services\" target=\"_blank\">this</a> project.</p>\n    <ul class=\"point\">\n      <li>Creating a logging service.</li>\n      <li>Injecting LoggingService into Components.</li>\n      <li>Creating a data service.</li>\n      <li>\n        Hierarchical Injector-\n        <img src=\"./assets/hierarchical-injector.png\" alt=\"hierarchical-injector\" class=\"screenshot\">\n      </li>\n      <li>Injecting Services into Services.</li>\n      <li>Using Services for cross-component communication.</li>\n    </ul>\n  </div>\n</div>\n<!-- End Services & Dependency Injection -->\n\n<!-- Course Project - Services & Dependency Injection -->\n<div class=\"row\" id=\"course-proj-srv-dependency\">\n  <h2 class=\"col-md-3\">Course Project - Services & Dependency Injection</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>Lets add services to our recipe-book application.</p>\n      <img src=\"./assets/services-for-app.png\" alt=\"services for app\" class=\"screenshot\">\n      <ul>\n        <li>Setting up the services.</li>\n        <li>Managing recipes in a recipe service.</li>\n        <li>Using a service for cross-component communication.</li>\n        <li>Adding shopping list service.</li>\n        <li>Using services for \"Push Notifications\".</li>\n        <li>Adding ingredients to recipes.</li>\n        <li>Passing ingredients from recipes to the shopping-list.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Course Project - Services & Dependency Injection -->\n"

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"day\">\n  <day-1 *ngSwitchCase=\"1\" (scrolledTo)=\"scrollIntoView($event)\"></day-1>\n  <day-2 *ngSwitchCase=\"2\" (scrolledTo)=\"scrollIntoView($event)\"></day-2>\n  <day-3 *ngSwitchCase=\"3\" (scrolledTo)=\"scrollIntoView($event)\"></day-3>\n  <day-4 *ngSwitchCase=\"4\" (scrolledTo)=\"scrollIntoView($event)\"></day-4> \n  <!-- <day-5 *ngSwitchCase=\"5\" (scrolledTo)=\"scrollIntoView($event)\"></day-5>   -->\n  <h1 *ngSwitchDefault class=\"text-center\" style=\"color: #7A1501\">Coming Soon!</h1>   \n</div>"

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('routing')\"> Routing</li> \n    </ul>\n  </div>\n</div>\n\n<!-- Routing -->\n<div class=\"row\" id=\"routing\">\n  <h2 class=\"col-md-3\">Routing</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Angular ships with its own router which allows us to change the URL and still only use one page but then exchange major parts of that page.</p>\n    <ul class=\"point\">\n      <li>Why do we need a Router?</li>\n      <li>Understanding the <a href=\"https://github.com/pratimasakinala/angular-routing\" target=\"_blank\">example</a> project.</li>\n      <li>Setting up and Loading Routes.</li>\n      <li>Navigating with Router Links.</li>\n      <li>Understanding Navigation Paths.</li>\n      <li>Styling active Router Links.</li>\n      <li>Navigating Programmatically.</li>\n      <li>Using Relative Paths in Programmatic Navigation.</li>\n      <li>Passing Parameters to Routes.</li>\n      <li>Fetching Route Parameters.</li>\n      <li>Fetching Route Parameters reactively.</li>\n      <li>Important note about Route Observables.</li>\n      <li>Passing Query Params and Fragments.</li>\n      <li>Retrieving Query Params and Fragments.</li>\n      <li>Practicing & some common Gotchas.</li>   \n      <li>Setting up Child (nested) routes.</li>   \n    </ul>\n  </div>\n</div>\n<!-- End Routing -->"

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('assignments')\"> Assignments</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('asgmt-1')\"> Practicing Services</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assignments -->\n<div class=\"row\" id=\"assignments\">\n  <h2 class=\"col-md-3\">Assignments</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>For each assignment listed below:</p>\n      <ul>\n        <li>Create a new Angular project (unless stated otherwise).</li>\n        <li>Push up to Github before making any changes to the project.</li>\n        <li>Create a new branch (give appropriate name) and complete the instructions outlined in that branch.</li>\n        <li>Explain why you chose the approach you took? Which problems did you encounter? (add these to a Readme file).</li>\n        <li>Create a Pull Request between your branch and master.</li>\n        <li>Share the link to your PR with me or tag me as a reviewer (GH username: <code>pratimasakinala</code>).</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Assignments -->\n\n<!-- Practicing Services -->\n<div class=\"row\" id=\"asgmt-1\">\n  <h2 class=\"col-md-3\">Practicing Services</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Clone <a href=\"https://github.com/pratimasakinala/services-assignment\" target=\"_blank\">this</a> project and follow the instructions mentioned in AppComponent's template.</p>\n  </div>\n</div>\n<!-- End Practicing Services -->"

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = "<p>\n  day-3 works!\n</p>\n"

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = "<p>\n  day-4 works!\n</p>\n"

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = "<p>\n  day-5 works!\n</p>\n"

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"day\">\n  <!-- <day-1 *ngSwitchCase=\"1\" (scrolledTo)=\"scrollIntoView($event)\"></day-1>\n  <day-2 *ngSwitchCase=\"2\" (scrolledTo)=\"scrollIntoView($event)\"></day-2>\n  <day-3 *ngSwitchCase=\"3\" (scrolledTo)=\"scrollIntoView($event)\"></day-3>\n  <day-4 *ngSwitchCase=\"4\" (scrolledTo)=\"scrollIntoView($event)\"></day-4> \n  <day-5 *ngSwitchCase=\"5\" (scrolledTo)=\"scrollIntoView($event)\"></day-5>   -->\n  <h1 *ngSwitchDefault class=\"text-center\" style=\"color: #7A1501\">Coming Soon!</h1>   \n</div>"

/***/ }),
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ })
]),[320]);
//# sourceMappingURL=main.bundle.js.map