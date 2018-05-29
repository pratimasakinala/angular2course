webpackJsonp([1,4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
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
        template: __webpack_require__(181),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lessons_lessons_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_lmnt_header_lmnt_component__ = __webpack_require__(106);
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
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_lmnt_header_lmnt_component__["a" /* HeaderLmntComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRouting */],
            __WEBPACK_IMPORTED_MODULE_5__lessons_lessons_module__["a" /* LessonsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });

var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/lessons/1/1'
    }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(182),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], HeaderLmntComponent);

//# sourceMappingURL=header-lmnt.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lessons_routing__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__week_1_week_1_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lessons_lessons_component__ = __webpack_require__(65);
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
            __WEBPACK_IMPORTED_MODULE_3__week_1_week_1_module__["a" /* Week1Module */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__lessons_lessons_component__["a" /* LessonsComponent */]
        ]
    })
], LessonsModule);

//# sourceMappingURL=lessons.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessons_lessons_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsRoutes; });


var lessonsRoutes = [
    {
        path: 'lessons/:week/:day',
        component: __WEBPACK_IMPORTED_MODULE_1__lessons_lessons_component__["a" /* LessonsComponent */],
    }
];
var LessonsRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(lessonsRoutes);
//# sourceMappingURL=lessons.routing.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(184),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], Day1Component);

//# sourceMappingURL=day-1.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(185),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], Day2Component);

//# sourceMappingURL=day-2.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(186),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], Day3Component);

//# sourceMappingURL=day-3.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(187),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], Day4Component);

//# sourceMappingURL=day-4.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__day_1_day_1_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__day_2_day_2_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__week_1_week_1_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__ = __webpack_require__(112);
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
            __WEBPACK_IMPORTED_MODULE_4__week_1_week_1_component__["a" /* Week1Component */], __WEBPACK_IMPORTED_MODULE_5__day_3_day_3_component__["a" /* Day3Component */], __WEBPACK_IMPORTED_MODULE_6__day_4_day_4_component__["a" /* Day4Component */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__week_1_week_1_component__["a" /* Week1Component */]
        ]
    })
], Week1Module);

//# sourceMappingURL=week-1.module.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
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
        template: __webpack_require__(188),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], Week1Component);

var _a;
//# sourceMappingURL=week-1.component.js.map

/***/ }),

/***/ 115:
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

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".scroll-to-top {\n    background-color: lightgrey;\n    color: #7A1501;\n    border: none;\n    border-radius: 50%;\n    position: fixed;\n    outline: none;\n    bottom: 20px;\n    right: 30px;\n    cursor: pointer;\n    font-size: 18px;\n    padding: 10px 14px;\n    transition: all .2s ease-in-out;\n    display: none;\n}\n\n.scroll-to-top:hover {\n    transform: scale(1.1);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".header {\n\tposition: fixed;\n\twidth: 100%;\n\tz-index: 100;\n}\n\n.header .header-background {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tposition: absolute;\n\topacity: 1;\n\ttransition: opacity 100ms ease;\n}\n\n.header.has-bg {\n\tpadding-bottom: 15px;\n}\n\n.header.has-bg .header-background {\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tz-index: 1;\n}\n\n.header.has-bg.hide-bg .header-background {\n\topacity: 0;\n}\n\n.header .header-inside {\n\tmax-width: 1170px;\n\tmargin: 0 auto;\n\tpadding-top: 10px;\n\tposition: relative;\n    z-index: 10;\n}\n\n.header .header-cta {\n\tfloat: right;\n\tfont-size: 1.25em;\n\theight: 75px;\n\tline-height: 75px;\n}\n\n.header .header-cta a {\n    color: #fff;\n    font-weight: 700;\n    text-transform: uppercase;\n    background: tranparent;\n    border: 4px solid #fcda0c;\n    border-radius: 10px;\n    display: inline-block;\n    padding: 7px 10px;\n    line-height: normal;\n    text-decoration: none;\n\tdisplay: block;\n\n\tposition: relative;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n\n.header .header-cta a:hover {\n    background: #fcda0c;\n}\n\n.header .logo {\n\tmargin-bottom: 10px;\n}\n\n.header .nav {\n\tdisplay: block;\n\twidth: 100%;\n\ttext-align: center;\n\tbackground: #000;\n\tcolor: #fff;\n\t-webkit-border-bottom-right-radius: 10px;\n\t-webkit-border-bottom-left-radius: 10px;\n\t-moz-border-radius-bottomright: 10px;\n\t-moz-border-radius-bottomleft: 10px;\n\tborder-bottom-right-radius: 10px;\n\tborder-bottom-left-radius: 10px;\n}\n\n.header .mobile-nav {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n.header .mobile-nav .mobile-nav-icon {\n\tpadding: 15px 15px;\n\tfont-size: 2em;\n\tcolor: white;\n\tcursor: pointer;\n\tz-index: 110;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n}\n\n.header .mobile-nav .mobile-nav-icon:hover {\n\tcolor: #fcda0c;\n}\n\n.header .mobile-nav .mobile-nav-menu {\n\tposition: fixed;\n\tz-index: 100;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\tbackground: rgba(0,0,0,.9);\n\tcolor: white;\n\twidth: 0px;\n\toverflow: hidden;\n transition: width 100ms ease;\n\tfont-size: 1.5em;\n}\n\n.header .mobile-nav .mobile-nav-menu > ul {\n\tpadding: 10px;\n\tpadding-right: 100px;\n}\n\n.header .mobile-nav .mobile-nav-menu > ul > li {\n\twidth: 100%;\n\twhite-space: nowrap;\n\tmargin-bottom: 10px;\n}\n\n.header .mobile-nav .mobile-nav-menu ul li ul.sub-menu {\n\tpadding-left: 30px;\n}\n\n.header .mobile-nav .mobile-nav-menu ul li ul.sub-menu li {\n\twhite-space: normal;\n}\n\n.header .mobile-nav .mobile-nav-menu a {\n\tcolor: white;\n}\n\nbody.menu-active .header .mobile-nav .mobile-nav-menu {\n\twidth: 100%;\n}\n\nhtml.menu-active,\nbody.menu-active {\n\toverflow-y: hidden;\n}\n\n.header .nav > ul {\n\tdisplay: inline-block;\n\tmargin: 0 auto;\n\twidth: 100%;\n\tfont-size: 1em;\n\tpadding: 0 10px;\n}\n\n.header .nav a {\n\tcolor: #fff;\n\ttext-decoration: none;\n transition: background-color 250ms ease;\n}\n\n.header .nav > ul {\n\tmargin: 0 auto;\n\ttext-align: center;\n}\n\n.header .nav ul li {\n\tdisplay: inline-block;\n\tposition: relative;\n}\n\n.header .nav ul li a {\n\tdisplay: block;\n}\n\n.header .nav > ul > li > a {\n\ttext-transform: uppercase;\n\tpadding: .8em 1em;\n\tfont-size: 1.3em;\n}\n\n.header .nav > ul > li > a:focus,\n.header .nav > ul > li > a:active,\n.header .nav > ul > li > a:hover {\n\tbackground: #222;\n}\n\n.header .nav > ul > li .sub-menu {\n\theight: 0;\n\toverflow: hidden;\n\tposition: absolute;\n\tbackground-color: #a11b12;\n    border: 1px solid #a11b12;\n\tfont-size: 14px;\n\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n\tfilter: alpha(opacity=0);\n\topacity: 0;\n\ttext-align: left;\n transition: opacity 250ms ease;\n\n\t-webkit-border-radius: 10px;\n\t-webkit-border-top-left-radius: 0;\n\t-moz-border-radius: 10px;\n\t-moz-border-radius-topleft: 0;\n\tborder-radius: 10px;\n\tborder-top-left-radius: 0;\n\tmin-width: 100%;\n}\n\n\n.header .nav > ul > li.menu-item-has-children:hover > .sub-menu {\n\theight: auto;\n\toverflow: auto;\n\t-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\tfilter: alpha(opacity=100);\n\topacity: 1;\n}\n\n.header .nav > ul > li.menu-item-has-children > .sub-menu li {\n\tdisplay: block;\n}\n\n.header .nav > ul > li.menu-item-has-children > .sub-menu li a {\n\tdisplay: block;\n\twhite-space: nowrap;\n\tpadding: 1em;\n\tfont-weight: normal;\n}\n\n.header .nav > ul > li.menu-item-has-children > .sub-menu li a:hover,\n.header .nav > ul > li.menu-item-has-children > .sub-menu li a:focus,\n.header .nav > ul > li.menu-item-has-children > .sub-menu li a:active {\n\tcolor: #FFD202;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div (window:scroll)=\"showScrollButton()\">\n    <header-lmnt></header-lmnt>\n    <main class=\"content container\">\n        <router-outlet></router-outlet>\n    </main>\n    <button class=\"btn scroll-to-top\" \n            id=\"scroll-to-top\" \n            title=\"Go to top\" \n            (click)=\"scrollToTop()\">\n    <i class=\"fa fa-chevron-up\"></i>      \n    </button>\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<header class=\"clear has-bg header\" role=\"banner\">\n  <div class=\"header-background\" style=\"background-image: url(https://geekwiseacademy.com/wp-content/uploads/2017/04/header-bg.jpg);\"></div>\n  <div class=\"header-inside\">\n    <!-- Header Link -->\n    <div class=\"header-cta\">\n      <a class=\"bg-transition\" [routerLink]=\"['']\">\n        Angular 2+</a>\n    </div>\n    <!-- logo -->\n    <div class=\"logo\">\n      <a href=\"https://geekwiseacademy.com\" target=\"_blank\">\n        <img src=\"https://geekwiseacademy.com/wp-content/themes/geekwise_v3/img/geekwise_logo.png\" alt=\"Logo\" class=\"logo-img\">\n      </a>\n    </div>\n    <!-- /logo -->\n    <!-- TODO: edit nav options -->\n    <nav class=\"mobile-nav\" role=\"navigation\">\n      <span class=\"mobile-nav-icon glyphicon glyphicon-menu-hamburger\"></span>\n      <div class=\"mobile-nav-menu\">\n        <ul>\n          <!-- <li id=\"menu-item-29\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-28\"><a href=\"index.html\">Course Outline</a></li>\n          <li id=\"menu-item-28\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-26\"><a href=\"links.html\">Handy Links</a></li> -->\n          <li id=\"menu-item-30\" class=\"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-10 current_page_item menu-item-has-children menu-item-30\"><a>Lessons</a>\n            <ul class=\"sub-menu\">\n              <li id=\"menu-item-1000132\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000132\"><a [routerLink]=\"['lessons/1/1']\">Day 1</a></li>\n              <!-- <li id=\"menu-item-1000133\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000133\"><a [routerLink]=\"['lessons/1/2']\">Day 2</a></li>\n              <li id=\"menu-item-1000134\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000134\"><a [routerLink]=\"['lessons/1/3']\">Day 3</a></li>\n              <li id=\"menu-item-1000136\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000136\"><a [routerLink]=\"['lessons/1/4']\">Day 4</a></li>\n              <li id=\"menu-item-1000137\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000137\"><a href=\"five.html\">Day 5</a></li>\n              <li id=\"menu-item-1000138\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000138\"><a href=\"six.html\">Day 6</a></li>\n              <li id=\"menu-item-1000139\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000139\"><a href=\"seven.html\">Day 7</a></li>\n              <li id=\"menu-item-1000140\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000140\"><a href=\"eight.html\">Day 8</a></li>\n              <li id=\"menu-item-1000141\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000141\"><a href=\"nine.html\">Day 9</a></li>\n              <li id=\"menu-item-1000142\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000142\"><a href=\"ten.html\">Day 10</a></li>\n              <li id=\"menu-item-1000143\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000143\"><a href=\"eleven.html\">Day 11</a></li>\n              <li id=\"menu-item-1000144\" class=\"menu-item menu-item-type- menu-item-object- menu-item-1000144\"><a href=\"final.html\">Final Project</a></li> -->\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <!-- nav -->\n    <nav class=\"nav\" role=\"navigation\">\n      <ul>\n        <!-- <li class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-24\"><a href=\"index.html\">Course Outline</a></li>\n        <li class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-26\"><a href=\"links.html\">Handy Links</a></li> -->\n        <li class=\"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-10 current_page_item menu-item-has-children menu-item-30\"><a>Lessons</a>\n          <ul class=\"sub-menu\">\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000132\"><a [routerLink]=\"['lessons/1/1']\">Day 1</a></li>\n            <!-- <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000133\"><a [routerLink]=\"['lessons/1/2']\">Day 2</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000134\"><a [routerLink]=\"['lessons/1/3']\">Day 3</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000136\"><a [routerLink]=\"['lessons/1/4']\">Day 4</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000137\"><a href=\"five.html\">Day 5</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000138\"><a href=\"six.html\">Day 6</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000139\"><a href=\"seven.html\">Day 7</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000140\"><a href=\"eight.html\">Day 8</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000141\"><a href=\"nine.html\">Day 9</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000142\"><a href=\"ten.html\">Day 10</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000143\"><a href=\"eleven.html\">Day 11</a></li>\n            <li class=\"menu-item menu-item-type- menu-item-object- menu-item-1000144\"><a href=\"final.html\">Final Project</a></li> -->\n          </ul>\n        </li>\n      </ul>\n    </nav>\n    <!-- /nav -->\n  </div>\n</header>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1 class=\"col-md-12 text-center hdr\">Day {{this.day}}</h1>\n</div>\n<div [ngSwitch]=\"week\">\n  <week-1 *ngSwitchCase=\"1\" (scrolledTo)=\"scrollIntoView($event)\"></week-1>\n</div>\n\n<!-- TODO: add handy links page with below links -->\n<!-- https://www.udemy.com/typescript/learn/v4/content -->\n<!-- https://angular.io/api/core/Renderer2 -->"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\" \n          (click)=\"scrollIntoView('intro')\"> Introductions</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('angular')\"> What is Angular?</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('spa')\"> What are SPAs?</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('framework')\"> Angular Framework</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('cli')\"> Angular CLI</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('typescript')\"> What is Typescript?</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('git-branching')\"> Git Branching & Pull Requests</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('first-app')\"> Editing the first app</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('basics')\"> The Basics</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('components')\"> Components</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Introductions -->\n<div class=\"row\" id=\"intro\">\n  <h2 class=\"col-md-3\">Introductions</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>Who am I?</li>\n      <li>Who are you?</li>\n    </ul>\n  </div>\n</div>\n<!-- End Introductions -->\n\n<!-- What is Angular -->\n<div class=\"row\" id=\"angular\">\n  <h2 class=\"col-md-3\">What is Angular?</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Angular is a Typescript-based open-source front-end web application framework that allows you to create reactive SPAs.</p>\n  </div>\n</div>\n<!-- End What is Angular -->\n\n<!-- What are SPAs -->\n<div class=\"row\" id=\"spa\">\n  <h2 class=\"col-md-3\">What are SPAs?</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Single Page Applications (SPAs) are web applications where the page never changes but is rewritten. There is only one HTML file and a bunch of JS code we get from the server. Every change is rendered in the browser. This approach avoids interruption of user experience between successive pages making application behave more like a desktop application.</p>\n  </div>\n</div>\n<!-- End What are SPAs -->\n\n<!-- Angular Framework -->\n<div class=\"row\" id=\"framework\">\n  <h2 class=\"col-md-3\">Angular Framework</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">There are various versions of Angular framework available.</p>\n    <img src=\"./assets/angular-framework.png\" alt=\"angular framework versions\" class=\"screenshot\">\n    <p class=\"point\">Angular 1 was the first Angular framework (released in 2009). It was the first to make single-page-applications and better way of making DOM (Document Object Model) manipulations popular back in the day.</p>\n    <p class=\"point\">Angular 2 (2015-2016) was a complete rewrite of Angular 1 to fix many issues mainly performance issues.</p>\n    <img src=\"./assets/angular-framework-evolution.png\" alt=\"angular 2 evolution\" class=\"screenshot\">\n    <p class=\"point\">Angular 4, 5 and 6 are the latest versions of Angular 2. So in general, we refer to Angular 2 and higher as just \"Angular\". Angular 1, however, is not related to these version. Therefore Angular 1 is called \"AngularJS\".</p>\n    <img src=\"./assets/angular-vs-angularjs.png\" alt=\"angular vs angularJs\" class=\"screenshot\">\n    <p class=\"point\">Currently 6 is the latest version<!-- (which we will be learning) -->. It is not a complete rewrite for every version. These are incremental improvements of Angular 2.</p>\n    <img src=\"./assets/angular2.png\" alt=\"angular latest\" class=\"screenshot\">\n  </div>\n</div>\n<!-- End Angular Framework -->\n\n<!-- Angular CLI -->\n<div class=\"row\" id=\"cli\">\n  <h2 class=\"col-md-3\">Angular CLI</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Angular projects are more elaborate in regards to their build workflow, there are couple of files that need to be converted before they can run in browser. Angular CLI (Command Line Interface) is the recommended and best way of creating Angular projects as it does all of that work for us and heavily optimizes our code.</p>\n    <br>\n    <p class=\"point\">In order to make use of Angular CLI, we need to make sure we have NodeJS, npm and CLI installed globally on our machine.</p>\n    <br>\n    <ul class=\"point\">\n      <li>\n        <b>Installing or Updating NodeJS -</b>\n        <br> \n        Go <a href=\"https://nodejs.org/en/\" target=\"_blank\">here</a> and download the latest version\n      </li>\n      <br>\n      <li>\n        <b>Installing or Updating npm -</b> \n        <br>\n        Run <code>[sudo] npm install -g npm</code> (sudo maybe required for Mac/Linux)\n      </li>\n      <br>\n      <li>\n        <b>Installing the CLI -</b> \n        <br>\n        Run <code>npm install -g @angular/cli/@latest</code>\n      </li>\n      <br>\n      <li>\n        <b>Creating a new project -</b>\n        <br>\n        <p>Open your terminal/command line and navigate into a folder where you want to create the new project using the <code>cd</code> command.</p>\n        <p>Run <code>ng new my-first-app</code> (project name cannot be test as it is a reserved word).</p>\n        <p>Navigate into the project. <code>cd my-first-app</code></p>\n        <p>Run <code>ng serve</code> (to bring up a development server to run your build so you can see it in the browser)</p>\n        <p>Go to <a href=\"http://localhost:4200/\" target=\"_blank\">http://localhost:4200/</a> to see the default angular application the CLI created.</p>\n      </li>\n      <img src=\"./assets/common-cli-issues.png\" alt=\"common issues\" class=\"screenshot\">\n    </ul>\n  </div>\n</div>\n<!-- End Angular CLI -->\n\n<!-- Typescript -->\n<div class=\"row\" id=\"typescript\">\n  <h2 class=\"col-md-3\">Typescript</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">We have come across the word Typescript before in the definition of Angular. But what does it mean?</p>\n    <p class=\"point\">Typescript is a superset of Javascript. It primarily provides optional static typing, classes and interfaces. It compiles to idiomatic (normal) JavaScript, can dramatically improve your productivity by enabling rich tooling experiences, all while maintaining your existing code and continuing to use the same JavaScript libraries you already love. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.</p>\n    <img src=\"./assets/typescript.png\" alt=\"typescript\" class=\"screenshot\">\n    <p class=\"point\">TypeScript makes it easier to write cross-platform, application scale, JavaScript that runs in any browser or in any host.</p>\n    <p class=\"point\">Let's go to <a href=\"https://www.typescriptlang.org/play/\" target=\"_blank\">Typescript playground</a> to see what it does.</p>\n    <br>\n    <div class=\"point\"> <!-- Types -->\n      <h3>Types:</h3>\n      <p>The Type system represents the different types of values supported by the language. It checks for the validity of the supplied values, before they are stored or manipulated by the program. It further allows for richer code hinting and automated documentation too.</p>\n      <p>Built-in types -</p>\n      <ul>\n        <li>\n          <b>Number -</b> Can be used to represent both integers and floats.\n        </li>\n        <li>\n          <b>String -</b> Represents a sequence of Unicode characters.\n        </li>\n        <li>\n          <b>Boolean -</b> Represents logical values (ture or false).\n        </li>\n        <li>\n          <b>Null -</b> Represents an intentional absence of an object value.\n        </li>\n        <li>\n          <b>Undefined -</b> Denotes value given to all uninitialized variables.\n        </li>\n      </ul>\n      <p>Null and undefined - Are they the same?</p>\n    </div> <!-- End Types -->\n    <div class=\"point\"> <!-- Class -->\n      <h3>Class:</h3>\n      <p>A class defines a blueprint of what an object should look like and act like and then implements that blueprint by initialising class properties and defining methods.</p>\n      <p>A class definition can include the following -</p>\n      <ul>\n        <li>\n          <b>Fields -</b> A field is any variable declared in a class. Fields represent data pertaining to objects.\n        </li>\n        <li>\n          <b>Constructors -</b> Responsible for allocating memory for the objects of the class.\n        </li>\n        <li>\n          <b>Functions -</b> Functions represent actions an object can take. They are also at times reffered to as methods.\n        </li>\n      </ul>\n      <p>These components put together are termed as the data members of the class.</p>\n      <p>Inheritance:</p>\n      <p>A derived class that derives from the base class uses the <code>extends</code> keyword. Derived classes are often called <i>subclasses</i>, and base classes are often called <i>superclasses</i>.</p>\n    </div> <!-- End Class -->\n    <div class=\"point\"> <!-- Interface -->\n      <h3>Interface</h3>\n      <p>An interface is a group of related properties and methods that describe an object, but neither provides implementation nor initialisation for them. Unlike classes, an interface is a virtual structure that only exists within the context of TypeScript. The TypeScript compiler uses interfaces solely for type-checking purposes.</p>\n    </div><!-- End Interface -->\n    <div class=\"point\"> <!-- Generics -->\n      <h3>Generics</h3>\n      <p>With generics, TypeScript enables you to write code that can act on a variety of data types instead of being limited to a single one. Why do we need them at all?</p>\n    </div><!-- End Generics -->\n    <div class=\"point\"> <!-- Module -->\n      <h3>Modules:</h3>\n      <p>The word modules refers to small units of independent, reusable code that <i>export</i>s specific objects, making them avaibale for other modules to require in their programs. Modules are highly self-contained with distict functionality, allowing them to be shuffled, removed, or added as necessary, without disrupting the system as a whole. They provide the possibility to group related logic, encapsulate it, structure your code and prevent pollution of the global namespace.</p>\n    </div> <!-- End Module -->\n  </div>\n</div>\n<!-- End Typescript -->\n\n<!-- Git Branching & Pull Requests -->\n<div class=\"row\" id=\"git-branching\">\n    <h2 class=\"col-md-3\">Git Branching & Pull Requests</h2>\n    <div class=\"col-md-9\">\n      <!-- TODO: add content here -->\n      <p class=\"point\">A branch in Git is simply a lightweight movable pointer to commits. The default branch name in Git is <i>master</i>.</p>\n      <p class=\"point\">Basic Git commands related to branching:</p>\n      <ul class=\"point\">\n        <li><code>git branch</code> - lists all available branches</li>\n        <li><code>git branch <i>branch-name</i></code> - creates a new branch called <i>branch-name</i> which has a copy of the snapshot of its parent branch (branch you ran this command from)</li>\n        <li><code>git checkout <i>branch-name</i></code> - switches to <i>branch-name</i> branch</li>\n        <li><code>git checkout -b <i>branch-name</i></code> - combines the functionality of last two commands</li>\n        <li><code>git branch -d <i>branch-name</i></code> - deleted <i>branch-name</i> branch</li>\n      </ul>\n      <p class=\"point\">NOTE: all of the above commands are only for local branches.</p>\n    </div>\n</div>\n<!-- End Git Branching & Pull Requests -->\n\n<!-- Editing the first app -->\n<div class=\"row\" id=\"first-app\">\n  <h2 class=\"col-md-3\">Editing the first app</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Open an IDE of your choice. I use <a href=\"https://code.visualstudio.com/\" target=\"_blank\">Visual Studio Code.</a></p>\n    <p class=\"point\">Add <a href=\"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag\" target=\"_blank\">Auto Rename Tag</a> and <a href=\"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer\" target=\"_blank\">Bracket Pair Colorizer</a> packages.</p>\n  </div>\n</div>\n<!-- End Editing the first app -->\n\n<!-- The Basics -->\n<div class=\"row\" id=\"basics\">\n  <h2 class=\"col-md-3\">The Basics</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <h3>Bootstrap:</h3>\n      <p>Stop your server (if it is running). <br> Then run <code>npm install --save bootstrap@3</code>. This is the first step of adding bootstrap to our project. <br> Next step is to edit <i>angular-cli.json</i> file to add \"node_modules/boostrap/dist/bootstrap.min.css\" to the styles array. <br> Re-run <code>ng serve</code>.</p>\n    </div>\n    <div class=\"point\">\n      <h3>How does an angular app get loaded and started?</h3>\n    </div>\n  </div>\n</div>\n<!-- End The Basics -->\n\n<!-- Components -->\n<div class=\"row\" id=\"components\">\n  <h2 class=\"col-md-3\">Components</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Components are key features in Angular. We build our application by composing a bunch of components. We start with AppComponent (root component) which holds our entire application.</p>\n    <img src=\"./assets/components.png\" alt=\"components\" class=\"screenshot\">\n    <div class=\"point\">\n      <p>A component consists of the following -</p>\n      <ul>\n        <li>\n          <b>Template -</b> contains the HTML that needs to be rendered in the view for the application. Also includes binding and directives.\n        </li>\n        <li>\n          <b>Class -</b> contains properties and methods. This has the code which is used to support the view. It is defined in Typescript.\n        </li>\n        <li>\n          <b>Metadata -</b> has the extra data defined for the class. It is defined with a decorator.\n        </li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p>Lets take a look at -</p>\n      <ul>\n        <li><b>Creating new component</b></li>\n        <li>\n          <b>Understanding AppModule and Component Declaration -</b>\n          Angular uses components to build web pages & modules to bundle different pieces (components) into packages. AppModule basically gives Angular information about which features does the app have & uses.\n        </li>\n        <li><b>Using a new Component</b></li>\n        <li><b>Creating Components with CLI & nesting Components</b></li>\n        <li><b>Working with Component Template</b></li>\n        <li><b>Component Styles</b></li>\n        <li><b>Component Selector</b></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Components -->\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\" \n          (click)=\"scrollIntoView('databinding')\"> Databinding</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('built-in-directives')\"> Built-in Directives</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('course-proj-basics')\"> Course Project - The Basics</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('cmp-db-deep-dive')\"> Components & Databinding Deep Dive</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Databinding -->\n<div class=\"row\" id=\"databinding\">\n  <h2 class=\"col-md-3\">Databinding</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Databinding is the process that establishes a connection between the application UI and business logic.</p>\n    <img src=\"./assets/databinding.png\" alt=\"databinding\" class=\"screenshot\">\n    <img src=\"./assets/databinding-combination.png\" alt=\"databinding combination\" class=\"screenshot\">\n    <div class=\"point\">\n      <ul>\n        <li>\n          <b>String interpolation -</b> Any expression that can be resolved to a string in the end is the only condition for a string interpolation syntax.\n        </li>\n        <li>\n          <b>Property binding</b>\n        </li>\n        <li>\n          <b>Event Binding</b>\n        </li>\n        <li>\n          <b>Two-way databinding</b>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Databinding -->\n\n<!-- Built-in Directives -->\n<div class=\"row\" id=\"built-in-directives\">\n  <h2 class=\"col-md-3\">Built-in Directives</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">A Directive is an instruction in the DOM. Components are directives with template. There are many other directives that don't have a template. We will look at creating custom directives later. But for now let's take a look at built-in angular directives.</p>\n    <p class=\"point\"><b>*ngIf -</b> This is a structural directive. It evaluates the expression and then renders the then or else template in its place when expression is truthy or falsy respectively.</p>\n    <div class=\"point\">\n      <b>ngStyle -</b> This is a attribute directive. The styles are updated according to the value of the expression evaluation: \n      <ul>\n        <li><i>keys</i> are style names with an optional suffix (ie 'top.px', 'font-style.em'),</li> \n        <li><i>values</i> are the values assigned to those properties (expressed in the given unit).</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <b>ngClass -</b> The CSS classes are updated as follows, depending on the type of the expression evaluation:\n      <ul>\n        <li><i>string -</i> the CSS classes listed in the string (space delimited) are added,</li> \n        <li><i>Array -</i> the CSS classes declared as Array elements are added,</li> \n        <li><i>Object -</i> keys are CSS classes that get added when the expression given in the value evaluates to a truthy value, otherwise they are removed.</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <b>*ngFor -</b> This is a structural directive. It allows us to build data presentation lists and tables in our HTML templates. It lets you specify an iterable object to iterate over and the name to refer to each item by inside the scope. It also provides other values that can be aliased to local variables:\n      <ul>\n        <li><i>index -</i> position of the current item in the iterable starting at 0</li>\n        <li><i>first -</i> true if the current item is the first item in the iterable</li>\n        <li><i>last -</i> true if the current item is the last item in the iterable</li>\n        <li><i>even -</i> true if the current index is an even number</li>\n        <li><i>odd -</i> true if the current index is an odd number</li>        \n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Built-in Directives -->\n\n<!-- Course Project - The Basics -->\n<div class=\"row\" id=\"course-proj-basics\">\n  <h2 class=\"col-md-3\">Course Project - The Basics</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Build a recipe book & shopping list app. We will be able to manage our recipes, view them in detail and also manage our shopping list and even push ingredients from a recipe directly into the shopping list.</p>\n    <div class=\"point\">\n      <p>Steps to build the application: </p>\n      <ul>\n        <li>\n          <b>Planning -</b>\n          <img src=\"./assets/project-planning.png\" alt=\"project planning models\" class=\"screenshot\">\n        </li>\n        <li><b>Setting up the application</b></li>\n        <li><b>Creating the components</b></li>\n        <li><b>Using the components</b></li>\n        <li><b>Adding a navigation bar</b></li>\n        <li><b>Working on Recipe feature</b></li>\n        <li><b>Working on Shopping List feature</b></li>\n      </ul>\n    </div>   \n  </div>\n</div>\n<!-- End Course Project - The Basics -->\n\n<!-- Components & Databinding Deep Dive -->\n<div class=\"row\" id=\"cmp-db-deep-dive\">\n  <h2 class=\"col-md-3\">Components & Databinding Deep Dive</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Clone <a href=\"https://github.com/pratimasakinala/cmp-databinding\" target=\"_blank\">this</a> project.</p>\n    <ul class=\"point\">\n      <li>Splitting App into Components</li>\n      <li>Property and event binding -\n        <img src=\"./assets/property-event-binding.png\" alt=\"property & event binding\" class=\"screenshot\">\n      </li>\n      <li>Understanding View Encapsulation</li>\n      <li>Local references in Templates</li>\n      <li>Accessing template & DOM with @ViewChild</li>\n      <li>Using <i>ng-content</i></li>\n      <li>Component Lifecycle -\n        <img src=\"./assets/component-lifecycle.png\" alt=\"component lifecycle\" class=\"screenshot\">\n      </li>\n      <li>Accessing <i>ng-content</i> with @ContentChild</li>\n    </ul>\n  </div>\n</div>\n<!-- End Components & Databinding Deep Dive -->\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\"\n          (click)=\"scrollIntoView('assignments')\"> Assignments</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('asgmt-1')\"> Practicing Components</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('asgmt-2')\"> Practicing Databinding</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('asgmt-3')\"> Practicing Directives</li>\n      <li class=\"link\" \n          (click)=\"scrollIntoView('asgmt-4')\"> Practicing Components & Databinding</li>\n    </ul>\n  </div>\n</div>\n\n<!-- Assignments -->\n<div class=\"row\" id=\"assignments\">\n  <h2 class=\"col-md-3\">Assignments</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>For each assignment listed below:</p>\n      <ul>\n        <li>Create a new Angular project.</li>\n        <li>Push up to Github before making any changes to the project.</li>\n        <li>Create a new branch (give appropriate name) and complete the instructions outlined in that branch.</li>\n        <li>Explain why you chose the approach you took? Which problems did you encounter? (add these to a Readme file).</li>\n        <li>Create a Pull Request between your branch and master.</li>\n        <li>Share the link to your PR with me or tag me as a reviewer (GH username: <code>pratimasakinala</code>).</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Assignments -->\n\n<!-- Practicing Components -->\n<div class=\"row\" id=\"asgmt-1\">\n  <h2 class=\"col-md-3\">Practicing Components</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>Create three new Components: <i>WarningMessage</i> (manually), <i>SuccessMessage</i> (using CLI) and <i>DangerMessage</i> (either).</li>\n      <li>For WarningMessage Component: \n        <ul>\n          <li>use internal template and external styles.</li>\n          <li>use default selector.</li>\n        </ul>\n      </li>\n      <li>For SuccessMessage Component: \n        <ul>\n          <li>use external template and inline styles.</li>\n          <li>use attribute selector.</li>\n        </ul>\n      </li>\n      <li>For DangerMessage Component: \n        <ul>\n          <li>use external or internal template and styles.</li>\n          <li>use class selector.</li>\n        </ul>\n      </li>\n      <li>Output them next to each other in the AppComponent.</li>\n      <li>Output a warning, success or danger message in the Components.</li>\n      <li>Style the Components appropriately.</li>\n    </ul>\n    <hr>\n    <p class=\"point\">Feel free to create more components, nest them into each other!</p>\n    <hr>\n    <p class=\"point\"><b>Additional challenge:</b> Add a button in AppComponent that randomly picks which component to display.</p>\n  </div>\n</div>\n<!-- End Practicing Components -->\n\n<!-- Practicing Databinding -->\n<div class=\"row\" id=\"asgmt-2\">\n  <h2 class=\"col-md-3\">Practicing Databinding</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>Add an Input field which updates a property <i>monsterName</i> via Two-Way-Binding.</li>\n      <li>Output the monsterName property in a paragraph below the input.</li>\n      <li>Add a button which may only be clicked if the monsterName is NOT an empty string.</li>\n      <li>Upon clicking the button, generate a random power value for the monster and store it in an array.</li>\n      <li>Display a message (with monsterName and power included) below the button for all monsters created.</li>\n    </ul>\n  </div>\n</div>\n<!-- End Practicing Databinding -->\n\n<!-- Practicing Directives -->\n<div class=\"row\" id=\"asgmt-3\">\n  <h2 class=\"col-md-3\">Practicing Directives</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p><b>Practice 1:</b></p>\n      <ul>\n        <li>Add a button which says 'Display Details'.</li>\n        <li>Add a paragraph with any content of your choice.</li>\n        <li>Toggle the displaying of that paragraph with the button created in the first step.</li>\n        <li>Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number).</li>\n        <li>Starting at the 10th log item, give all future log items a green background (via ngClass) and white color (ngStyle).</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Practice 2:</b></p>\n      <ul>\n        <li>Continue working on the project created while practicing databinding above.</li>\n        <li>Create a new branch.</li>\n        <li>Add a new input that binds to <i>hero</i>'s name property.</li>\n        <li>Add a button which may only be clicked if the hero's name is NOT an empty string.</li>\n        <li>Once this button is clicked, generate random power for hero and remove/hide both the input and button (added in the previous two steps) from the DOM.</li>\n        <li>Looping though the array of monsters, style the display message such that if the monster's power is greater than hero's, add danger styling.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Practicing Directives -->\n\n<!-- Practicing Components & Directives -->\n<div class=\"row\" id=\"asgmt-4\">\n  <h2 class=\"col-md-3\">Practicing Components & Directives</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p><b>Practice 1:</b></p>\n      <ul>\n        <li>Continue working on the monster project.</li>\n        <li>Create a new branch.</li>\n        <li>Break down the AppComponent into smaller Components.</li>\n        <li>Pass necessary property/event into and out of these new Components.</li>\n      </ul>\n      <hr>\n      <p><b>Additional challenge:</b></p>\n      <ul>\n        <li>Add a 'Fight' button next to each monster message.</li>\n        <li>Upon clicking this button, do Math calculations to see if the hero survived the fight.</li>\n        <li>If the hero dies, clear the monster list and display 'You Lost!' message and bring back the input for hero and reset the game.</li>\n        <li>If the hero survives and the monster has:\n          <ul>\n            <li>no more power, remove the monster from the list</li>\n            <li>some power left, keep the monster in the list</li>\n          </ul>\n          and let the player continue.\n        </li>\n        <li>Make any style changes you need/want to.</li>\n      </ul>\n    </div>\n    <div class=\"point\">\n      <p><b>Practice 2:</b></p>\n      <ul>\n        <li>Create three new components(manually or with CLI): <i>GameControl</i>, <i>Odd</i> and <i>Even</i>.</li>\n        <li>The GameControl Component should have buttons to start and stop the game.</li>\n        <li>When starting the game, an event (holding a incrementing number) should get emitted each second.</li>\n        <li>The event should be listenable from outside the component.</li>\n        <li>When stopping the game, no more events should get emitted.</li>\n        <li>A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers).</li>\n        <li>Simply output <i>Odd - NUMBER</i> or <i>Even - NUMBER</i> in the two components.</li>\n        <li>Style the element holding your output text differently in both components.</li>\n      </ul>\n  </div>\n  </div>\n</div>\n<!-- End Practicing Components & Directives -->\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h2 class=\"col-md-3\">Concepts</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li class=\"link\" \n        (click)=\"scrollIntoView('debugging')\"> Debugging</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('course-proj-cmp-db')\"> Course Project - Components & Databinding</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('directive')\"> Directives</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('directive')\"> Course Project - Directives</li>\n      <li class=\"link\"\n          (click)=\"scrollIntoView('services')\"> Services</li>\n      <!-- services & dependency injection; routing; observables; Forms; pipes; http; authentication; optimizations & ngModules; deployment; animations & testing -->\n    </ul>\n  </div>\n</div>\n\n<!-- Debugging -->\n<div class=\"row\" id=\"debugging\">\n  <h2 class=\"col-md-3\">Debugging</h2>\n  <div class=\"col-md-9\">\n    <ul class=\"point\">\n      <li>Understanding Angular error message</li>\n      <li>Debugging in browser using sourcemaps</li>\n      <li>Using Augury</li>\n    </ul>\n  </div>\n</div>\n<!-- End Debugging -->\n\n<!-- Course Project - Components & Databinding -->\n<div class=\"row\" id=\"course-proj-cmp-db\">\n  <h2 class=\"col-md-3\">Course Project - Components & Databinding</h2>\n  <div class=\"col-md-9\">\n    <div class=\"point\">\n      <p>Fine tune the course project. Here are the tasks we will do: </p>\n      <ul>\n        <li>Navigate between recipe and shopping list.</li>\n        <li>Select recipe and load it into the details section.</li>\n        <li>Add ingredients to the list.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Course Project - Components & Databinding -->\n\n<!-- Directives -->\n<div class=\"row\" id=\"directive\">\n  <h2 class=\"col-md-3\">Directives</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Attribute vs Structural Directives: </p>\n    <img src=\"./assets/attribute-vs-structural-dir.png\" alt=\"attribute vs structural directives\" class=\"screenshot\">\n    <div class=\"point\">\n      <p>Clone <a href=\"https://github.com/pratimasakinala/directives\" target=\"_blank\">this</a> project to learn:</p>\n      <ul>\n        <li>Recap of some built-in directives.</li>\n        <li>Create Basic Attribute directive.</li>\n        <li>Using Renderer (Learn more <a href=\"https://angular.io/api/core/Renderer2\" target=\"_blank\">here</a>).</li>\n        <li>HostListener & HostBinding.</li>\n        <li>Binding to directive properties.</li>\n        <li>Behind the scenes of structural directive.</li>\n        <li>Building a Structural directive.</li>\n        <li>Understanding ngSwitch.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- End Directives -->\n\n<!-- Course Project - Directives -->\n<div class=\"row\" id=\"course-project-dir\">\n  <h2 class=\"col-md-3\">Course Project - Directives</h2>\n  <div class=\"col-md-9\">\n    <p class=\"point\">Enhance the app to open the dropdowns which currently don't work.</p>\n  </div>\n</div>\n<!-- End Course Project - Directives -->\n\n<!-- Services -->\n<div class=\"row\" id=\"services\">\n  <h2 class=\"col-md-3\">Services</h2>\n  <div class=\"col-md-9\"></div>\n</div>\n<!-- End Services -->\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"day\">\n  <day-1 *ngSwitchCase=\"1\" (scrolledTo)=\"scrollIntoView($event)\"></day-1>\n  <day-2 *ngSwitchCase=\"2\" (scrolledTo)=\"scrollIntoView($event)\"></day-2>\n  <day-3 *ngSwitchCase=\"3\" (scrolledTo)=\"scrollIntoView($event)\"></day-3>\n  <day-4 *ngSwitchCase=\"4\" (scrolledTo)=\"scrollIntoView($event)\"></day-4>  \n</div>"

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
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
            _this.week = params['week'];
            _this.day = params['day'];
            _this.setTitle("Angular 2+ (Day " + _this.day + ")");
        });
        // scroll to the top of the page on route change
        this.router.events.subscribe(function (event) {
            if (!(event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */])) {
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
        template: __webpack_require__(183),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LessonsComponent);

var _a, _b, _c;
//# sourceMappingURL=lessons.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 93;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[239]);
//# sourceMappingURL=main.bundle.js.map