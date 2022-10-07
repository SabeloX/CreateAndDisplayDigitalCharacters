"use strict";
(() => {
var exports = {};
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_connections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);

const handler = async (request, response)=>{
    const method = request.method;
    const catchError = (error)=>response.status(400).json({
            error
        });
    if (method === "GET") {
        const { Character  } = await (0,_utils_connections__WEBPACK_IMPORTED_MODULE_0__/* .connect */ .$)();
        const characters = await Character.find({}).catch(catchError);
        response.status(200).json({
            characters
        });
    } else {
        catchError({
            message: "Request Not Found!",
            name: "BAD METHOD ERROR"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ }),

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ connect)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./utils/connections.ts

const { DATABASE  } = process.env || "mongodb+srv://SabeloX:HyO4kAJzDmdl8g8H@cluster0.izvrj.mongodb.net/charactersDB?retryWrites=true&w=majority";
const connect = async ()=>{
    const connection = await external_mongoose_default().connect(DATABASE).catch((error)=>console.log(error));
    console.log("Connected to Database");
    const CharacterSchema = new (external_mongoose_default()).Schema({
        name: String,
        description: String,
        date: {
            type: Date,
            default: new Date()
        }
    });
    const Character = (external_mongoose_default()).models.Character || external_mongoose_default().model("Character", CharacterSchema);
    return {
        connection,
        Character
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(992));
module.exports = __webpack_exports__;

})();