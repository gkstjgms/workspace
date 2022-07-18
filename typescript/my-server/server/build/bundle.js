/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controller/TodoItemController.ts":
/*!******************************************!*\
  !*** ./controller/TodoItemController.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoItemController = void 0;
class TodoItemController {
}
exports.TodoItemController = TodoItemController;


/***/ }),

/***/ "./entity/entity.ts":
/*!**************************!*\
  !*** ./entity/entity.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const todoEntity_1 = __webpack_require__(/*! ./todoEntity */ "./entity/todoEntity.ts");
const Entity = [todoEntity_1.todoEntity];
exports.default = Entity;


/***/ }),

/***/ "./entity/todoEntity.ts":
/*!******************************!*\
  !*** ./entity/todoEntity.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.todoEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let todoEntity = class todoEntity {
};
__decorate([
    typeorm_1.Column({ primary: true, type: "int", name: "id" }),
    typeorm_1.Generated("increment"),
    __metadata("design:type", Number)
], todoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "text", nullable: false }) // todo
    ,
    __metadata("design:type", String)
], todoEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.Column("tinyint", { name: "done", nullable: true }) // check
    ,
    __metadata("design:type", Boolean)
], todoEntity.prototype, "done", void 0);
todoEntity = __decorate([
    typeorm_1.Index("No_UNIQUE", ["id"], { unique: true }),
    typeorm_1.Entity("myTodoList", { schema: "myTodoList" })
], todoEntity);
exports.todoEntity = todoEntity;


/***/ }),

/***/ "./routes/todoItem.ts":
/*!****************************!*\
  !*** ./routes/todoItem.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const TodoItemController_1 = __webpack_require__(/*! ../controller/TodoItemController */ "./controller/TodoItemController.ts");
const TodoItem = [
    {
        method: "post",
        route: "/addTodo",
        controller: TodoItemController_1.TodoItemController,
        action: "addTodo",
    },
    {
        method: "get",
        route: "/getTodo",
        controller: TodoItemController_1.TodoItemController,
        action: "getTodo",
    },
    {
        method: "put",
        route: "/putTodo",
        controller: TodoItemController_1.TodoItemController,
        action: "putTodo",
    },
    {
        method: "delete",
        route: "/deleteTodo",
        controller: TodoItemController_1.TodoItemController,
        action: "deleteTodo",
    },
];
const Routes = [...TodoItem];
exports.default = Routes;


/***/ }),

/***/ "@godaddy/terminus":
/*!************************************!*\
  !*** external "@godaddy/terminus" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@godaddy/terminus");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");;

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");;

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const express = __webpack_require__(/*! express */ "express");
const cors = __webpack_require__(/*! cors */ "cors");
const morgan = __webpack_require__(/*! morgan */ "morgan");
const todoItem_1 = __webpack_require__(/*! ../routes/todoItem */ "./routes/todoItem.ts");
const entity_1 = __webpack_require__(/*! ../entity/entity */ "./entity/entity.ts");
const process_1 = __webpack_require__(/*! process */ "process");
const terminus_1 = __webpack_require__(/*! @godaddy/terminus */ "@godaddy/terminus");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
const connectionOptions = [];
connectionOptions.push({
    type: "mysql",
    username: process.env.INTERNAL_AUTH ? process.env.INTERNAL_AUTH : "root",
    password: process.env.INTERNAL_PASSWORD
        ? process.env.INTERNAL_PASSWORD
        : "tj3gms4!",
    database: process.env.INTERNAL_DATABASE
        ? process.env.INTERNAL_DATABASE
        : "myTodoList",
    logging: true,
    entities: entity_1.default,
});
const run = async (options) => {
    try {
        const connection = await typeorm_1.createConnections(options);
        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(express.static("../../client/build"));
        app.use(morgan(`":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"`, {}));
        todoItem_1.default.forEach((route) => {
            app[route.method](route.route, (req, res, next) => {
                const result = new route.controller()[route.action](req, res, next);
                if (result instanceof Promise) {
                    result
                        .catch((ex) => {
                        res.json(ex.message);
                    })
                        .then((result) => result !== null && result !== undefined
                        ? res.send(result)
                        : undefined);
                }
                else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        });
        const port = 8000;
        const server = app.listen(port);
        const onSignal = async () => {
            connection.forEach(async (c) => await c.close());
        };
        const onHealthCheck = async () => {
            return true;
        };
        server.on("error", (err) => {
            process_1.exit(1);
        });
        terminus_1.createTerminus(server, {
            signal: "SIGINT",
            healthChecks: {
                "/_health/liveness": onHealthCheck,
            },
            onSignal: onSignal,
        });
        connectionOptions.forEach((op, index) => {
            console.info(`---Server ConnectionOptions---`);
            console.info(`Typeorm type: ${op.type}`);
        });
        console.info(`My server has started on port ${port}`);
    }
    catch (ex) {
        console.error(ex.message);
        process_1.exit(1);
    }
};
run(connectionOptions);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=bundle.js.map