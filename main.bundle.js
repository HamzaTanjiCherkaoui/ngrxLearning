webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add-todo/add-todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".add-input {\r\n\twidth: 60%;\r\n\tfloat: left;\r\n}\r\n\r\n.add-btn {\r\n\tfloat: left;\r\n\twidth: 40%;\r\n}", "", {"version":3,"sources":["C:/Users/hamza.cherkaoui/Desktop/playGround/ngrxLearning/src/app/add-todo/add-todo.component.css"],"names":[],"mappings":"AAAA;CACC,WAAW;CACX,YAAY;CACZ;;AAED;CACC,YAAY;CACZ,WAAW;CACX","file":"add-todo.component.css","sourcesContent":[".add-input {\r\n\twidth: 60%;\r\n\tfloat: left;\r\n}\r\n\r\n.add-btn {\r\n\tfloat: left;\r\n\twidth: 40%;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-todo/add-todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" bx--col-md-3\">\n<label for=\"select-id\" class=\"bx--label\">add Todo</label>\n</div>\n<div class=\"bx--form-item bx--col-md-3\">\n\t<input type=\"text\" placeholder=\"Add todo..\"  class=\"bx--text-input add-input\" [formControl]=\"control\"  (keyup.enter)=\"add.next(control.value)\" >\n\t<button class=\"bx--btn bx--btn--primary add-btn \" type=\"button\"(click)=\"add.next(control.value)\">Add</button>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/add-todo/add-todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTodoComponent = (function () {
    function AddTodoComponent() {
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("");
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    Object.defineProperty(AddTodoComponent.prototype, "reset", {
        set: function (action) {
            this.control.reset();
        },
        enumerable: true,
        configurable: true
    });
    AddTodoComponent.prototype.ngOnInit = function () {
    };
    return AddTodoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", Object)
], AddTodoComponent.prototype, "add", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AddTodoComponent.prototype, "reset", null);
AddTodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'add-todo',
        template: __webpack_require__("../../../../../src/app/add-todo/add-todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-todo/add-todo.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], AddTodoComponent);

//# sourceMappingURL=add-todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n.box {\r\n\tbackground-color: #fff; \r\n\tpadding: 20px;\r\n}", "", {"version":3,"sources":["C:/Users/hamza.cherkaoui/Desktop/playGround/ngrxLearning/src/app/app.component.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;CACxB;AACD;CACC,uBAAuB;CACvB,cAAc;CACd","file":"app.component.css","sourcesContent":[":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.box {\r\n\tbackground-color: #fff; \r\n\tpadding: 20px;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bx--grid\">\r\n\t<div class=\"bx--row\">\r\n\t\t<div class=\"bx--col-xs-11 \">\r\n\t\t\t<br>\r\n\t\t\t<h1 class=\"text-center\"> Todo App </h1>\r\n\t\t\t<br>\r\n\t\t\t<div class=\"bx--grid bx--tile\">\r\n\t\t\t\t<div class=\"bx--row layer bx--col-xs-9\">\r\n\t\t\t\t\t<div class=\"bx--col-xs-6\">\r\n\t\t\t\t\t\t<add-todo (add)=\"addTodo($event)\" [reset]=\"addTodoSuccess$ | async\"></add-todo>\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"bx--col-xs-6\">\r\n\t\t\t\t\t\t<filter-todos [filters]=\"filters\"  [active]=\"activeFilter | async\" (changeFilter)=\"changeFilter($event)\"></filter-todos>\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<todos [todos] =\"todos | async\" (changeTodoState)=\"changeTodoState($event)\"></todos>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("../../../../../src/app/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todos_effects__ = __webpack_require__("../../../../../src/app/todos.effects.ts");
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
    function AppComponent(store, todosEffects) {
        this.store = store;
        this.todosEffects = todosEffects;
        this.filters = [{ id: "SHOW_ALL", title: "All" }, { id: "SHOW_COMPLETED", title: "Completed" }, {
                id: "SHOW_ACTIVE",
                title: "Active"
            }];
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__store__["l" /* getTodos */])());
        this.todos = store.select("todos");
        this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(function (_a) {
            var type = _a.type;
            return type === __WEBPACK_IMPORTED_MODULE_1__store__["h" /* ADD_TODO_SUCCESS */];
        });
        this.activeFilter = store.select("visibilityFilter").take(1);
    }
    AppComponent.prototype.addTodo = function (todo) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__store__["b" /* addTodo */])(todo));
    };
    AppComponent.prototype.changeFilter = function (filter) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__store__["m" /* setVisibilityFilter */])(filter));
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__store__["l" /* getTodos */])());
    };
    AppComponent.prototype.changeTodoState = function (todoToChange) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__store__["n" /* toggleTodo */])(todoToChange));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__todos_effects__["a" /* TodosEffects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__todos_effects__["a" /* TodosEffects */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("../../../../../src/app/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_carbon_components__ = __webpack_require__("../../../../carbon-components/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todos_todos_component__ = __webpack_require__("../../../../../src/app/todos/todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__todos_effects__ = __webpack_require__("../../../../../src/app/todos.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__todo_service__ = __webpack_require__("../../../../../src/app/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_todo_add_todo_component__ = __webpack_require__("../../../../../src/app/add-todo/add-todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__filter_todos_filter_todos_component__ = __webpack_require__("../../../../../src/app/filter-todos/filter-todos.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











__WEBPACK_IMPORTED_MODULE_10_carbon_components__["a" /* Modal */].init();






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__todos_todos_component__["a" /* TodosComponent */], __WEBPACK_IMPORTED_MODULE_12__todo_todo_component__["a" /* TodoComponent */], __WEBPACK_IMPORTED_MODULE_15__add_todo_add_todo_component__["a" /* AddTodoComponent */], __WEBPACK_IMPORTED_MODULE_16__filter_todos_filter_todos_component__["a" /* FilterTodosComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__todo_service__["a" /* TodoService */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["a" /* StoreModule */].forRoot({ todos: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* todos */], addTodo: __WEBPACK_IMPORTED_MODULE_2__store__["b" /* addTodo */], visibilityFilter: __WEBPACK_IMPORTED_MODULE_2__store__["c" /* visibilityFilter */] }),
            __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["a" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_13__todos_effects__["a" /* TodosEffects */]]),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] }
            ], { useHash: true })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/filter-todos/filter-todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"filter-todos.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filter-todos/filter-todos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" >\n\t<div class=\"bx--form-item\">\n\t\t<label for=\"select-id\" class=\"bx--label\">filter</label>\n\t\t<div class=\"bx--select\">\n\t\t\t<select id=\"select-id\" class=\"bx--select-input\" [formControl]=\"filter\" (change)=\"changeFilter.next(filter.value)\">\n\t\t\t\t<option class=\"bx--select-option\" *ngFor=\"let filter of filters\" [ngValue]=\"filter.id\" >{{filter.title}}</option>\n\t\t\t</select>\n\t\t\t<svg class=\"bx--select__arrow\" width=\"10\" height=\"5\" viewBox=\"0 0 10 5\" fill-rule=\"evenodd\">\n\t\t\t\t<path d=\"M10 0L5 5 0 0z\"></path>\n\t\t\t</svg>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/filter-todos/filter-todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterTodosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterTodosComponent = (function () {
    function FilterTodosComponent() {
        this.changeFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.filter = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
    }
    FilterTodosComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FilterTodosComponent.prototype, "active", {
        set: function (val) {
            this.filter.setValue(val);
        },
        enumerable: true,
        configurable: true
    });
    return FilterTodosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], FilterTodosComponent.prototype, "filters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", Object)
], FilterTodosComponent.prototype, "changeFilter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FilterTodosComponent.prototype, "active", null);
FilterTodosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'filter-todos',
        template: __webpack_require__("../../../../../src/app/filter-todos/filter-todos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/filter-todos/filter-todos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FilterTodosComponent);

//# sourceMappingURL=filter-todos.component.js.map

/***/ }),

/***/ "../../../../../src/app/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_TODOS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_TODOS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ADD_TODO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ADD_TODO_ERROR; });
/* unused harmony export SET_VISIBILITY_FILTER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TOGGLE_TODO_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TOGGLE_TODO_STATE_SUCCESS; });
/* harmony export (immutable) */ __webpack_exports__["l"] = getTodos;
/* harmony export (immutable) */ __webpack_exports__["a"] = todos;
/* harmony export (immutable) */ __webpack_exports__["b"] = addTodo;
/* harmony export (immutable) */ __webpack_exports__["n"] = toggleTodo;
/* harmony export (immutable) */ __webpack_exports__["m"] = setVisibilityFilter;
/* harmony export (immutable) */ __webpack_exports__["c"] = visibilityFilter;
/// reducers 
/// reducers 
var GET_TODOS = "GET_TODOS";
var GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
var GET_TODOS_ERROR = "GET_TODOS_ERROR";
var ADD_TODO = "ADD_TODO";
var ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
var ADD_TODO_ERROR = "ADD_TODO_ERROR";
var SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
var TOGGLE_TODO_STATE = "TOGGLE_TODO_STATE";
var TOGGLE_TODO_STATE_SUCCESS = "TOGGLE_TODO_STATE_SUCCESS";
function getTodos() {
    return {
        type: GET_TODOS
    };
}
var initialState = {
    data: [],
    pending: false,
    error: null
};
function todos(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case GET_TODOS:
            return Object.assign({}, state, { pending: true, error: null });
        case GET_TODOS_SUCCESS:
            return Object.assign({}, state, { data: payload, pending: false, error: false });
        case GET_TODOS_ERROR:
            return Object.assign({}, state, { pending: true, error: "Error" });
        case ADD_TODO:
            return Object.assign({}, state, { pending: true, error: null });
        case ADD_TODO_SUCCESS:
            return Object.assign({}, state, {
                data: state.data.concat([payload]),
                pending: false
            });
        case TOGGLE_TODO_STATE:
            return Object.assign({}, state, { pending: true, error: null });
        case TOGGLE_TODO_STATE_SUCCESS:
            return Object.assign({}, state, {
                data: state.data
                    .map(function (todo) {
                    if (todo.id == payload.id)
                        return Object.assign({}, todo, { completed: !todo.completed });
                    return todo;
                }),
                pending: false, error: null
            });
        default:
            return state;
    }
}
function addTodo(title) {
    return { type: ADD_TODO, payload: title };
}
function toggleTodo(changedTodo) {
    return { type: TOGGLE_TODO_STATE, payload: changedTodo };
}
function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: filter
    };
}
function visibilityFilter(state, action) {
    if (state === void 0) { state = "SHOW_ALL"; }
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload;
        default:
            return state;
    }
}
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/app/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = (function () {
    function TodoService() {
    }
    // old getTodos function
    // getTodos(){
    // 	return Observable.timer(1000)
    // 	.mapTo ([
    // 		{id:1,title : "Learn ngrx/store" , completed : false},
    // 		{id:2,title : "Learn ngrx/effects" , completed : true}
    // 		])
    // }
    TodoService.prototype.addTodo = function (data) {
        var title = data.payload;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(1000)
            .mapTo({ id: Math.random(), title: title, completed: false });
    };
    TodoService.prototype.removeTodo = function (id) {
    };
    TodoService.prototype.getTodos = function (filter) {
        var todos = [{ id: 1, title: "Learn ngrx/store", completed: true }, {
                id: 2,
                title: "Learn ngrx/effects",
                completed: false,
            }];
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(2000)
            .mapTo(this.getVisibleTodos(todos, filter));
    };
    TodoService.prototype.getVisibleTodos = function (todos, filter) {
        if (filter === "SHOW_ALL") {
            return todos;
        }
        else if (filter === "SHOW_COMPLETED") {
            return todos.filter(function (t) { return t.completed; });
        }
        else {
            return todos.filter(function (t) { return !t.completed; });
        }
    };
    TodoService.prototype.toggleTodo = function (data) {
        console.log(data.payload);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(1000)
            .mapTo(data.payload);
    };
    return TodoService;
}());
TodoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TodoService);

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".crossed {\r\n\ttext-decoration: line-through;\r\n}", "", {"version":3,"sources":["C:/Users/hamza.cherkaoui/Desktop/playGround/ngrxLearning/src/app/todo/todo.component.css"],"names":[],"mappings":"AAAA;CACC,8BAA8B;CAC9B","file":"todo.component.css","sourcesContent":[".crossed {\r\n\ttext-decoration: line-through;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<br>\r\n\t<div class=\"bx--tile col-md-8 col-lg-offset-2 clearfix\" >\r\n\t<div class=\" col-md-10\">\r\n\t<p  [ngClass]=\"{'crossed': todo.completed }\">{{todo.title}}</p>\r\n\t</div>\r\n\t<div class=\"col-md-2\">\r\n\r\n\t\t<button class=\"bx--btn bx--btn--primary\" type=\"button\" *ngIf=\"!todo.completed\" (click)= \"Toggle.next(todo)\">Complete</button>\r\n\t\t<button class=\"bx--btn bx--btn--secondary\" type=\"button\" *ngIf=\"todo.completed\" (click)= \"Toggle.next(todo)\">re-open</button>\r\n\t</div>\r\n\t</div>\r\n\t<br>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = (function () {
    function TodoComponent() {
        this.Toggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    return TodoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], TodoComponent.prototype, "todo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", Object)
], TodoComponent.prototype, "Toggle", void 0);
TodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'todo',
        template: __webpack_require__("../../../../../src/app/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo/todo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoComponent);

//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/todos.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("../../../../../src/app/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_service__ = __webpack_require__("../../../../../src/app/todo.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodosEffects = (function () {
    function TodosEffects(action$, todoService, store) {
        var _this = this;
        this.action$ = action$;
        this.todoService = todoService;
        this.store = store;
        // old simple getTodos
        // @Effect() getTodos$ = this.action$
        // .ofType(GET_TODOS)
        // .switchMap(payload =>
        //   this.todoService.getTodos()
        //   .map(todos => ( { type : GET_TODOS_SUCCESS , payload : todos}))
        //   .catch( () => Observable.of({type : GET_TODOS_ERROR})));
        this.getTodos$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__store__["d" /* GET_TODOS */])
            .withLatestFrom(this.store.select("visibilityFilter"), function (action, filter) { return filter; })
            .switchMap(function (filter) {
            return _this.todoService.getTodos(filter)
                .map(function (todos) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__store__["e" /* GET_TODOS_SUCCESS */], payload: todos }); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_4__store__["f" /* GET_TODOS_ERROR */] }); });
        });
        this.addTodo$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__store__["g" /* ADD_TODO */])
            .switchMap(function (payload) {
            return _this.todoService.addTodo(payload)
                .map(function (todo) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__store__["h" /* ADD_TODO_SUCCESS */], payload: todo }); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_4__store__["i" /* ADD_TODO_ERROR */] }); });
        });
        this.toggleTodo$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__store__["j" /* TOGGLE_TODO_STATE */])
            .switchMap(function (payload) {
            return _this.todoService.toggleTodo(payload)
                .map(function (todo) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__store__["k" /* TOGGLE_TODO_STATE_SUCCESS */], payload: todo }); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_4__store__["i" /* ADD_TODO_ERROR */] }); });
        });
    }
    return TodosEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], TodosEffects.prototype, "getTodos$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], TodosEffects.prototype, "addTodo$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], TodosEffects.prototype, "toggleTodo$", void 0);
TodosEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__todo_service__["a" /* TodoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], TodosEffects);

var _a, _b, _c;
//# sourceMappingURL=todos.effects.js.map

/***/ }),

/***/ "../../../../../src/app/todos/todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"todos.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todos/todos.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t<div *ngIf=\"todos.pending\" data-loading class=\"bx--loading bx--loading--small center-block\">\n\t\t<svg class=\" bx--loading__svg \" viewBox=\"-75 -75 150 150 \">\n\t\t\t<title>Loading</title>\n\t\t\t<circle cx=\"0 \" cy=\"0 \" r=\"37.5 \" />\n\t\t</svg>\n\t</div> \n\n\t<todo [todo] = \"todo\" *ngFor=\" let todo of todos.data\" (Toggle)=\"changeTodoState.next($event)\"></todo>\n\t<p *ngIf=\"todos.error\">{{todos.error}}</p>"

/***/ }),

/***/ "../../../../../src/app/todos/todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodosComponent = (function () {
    function TodosComponent() {
        this.changeTodoState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    TodosComponent.prototype.ngOnInit = function () { };
    TodosComponent.prototype.ToggleTodo = function (newState, id) {
        this.changeTodoState.next({ newState: newState, id: id });
    };
    return TodosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], TodosComponent.prototype, "todos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", Object)
], TodosComponent.prototype, "changeTodoState", void 0);
TodosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'todos',
        template: __webpack_require__("../../../../../src/app/todos/todos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todos/todos.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], TodosComponent);

//# sourceMappingURL=todos.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map