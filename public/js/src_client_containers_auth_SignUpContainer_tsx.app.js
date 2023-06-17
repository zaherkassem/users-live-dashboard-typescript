"use strict";
(self["webpackChunkusers_live_dashboard"] = self["webpackChunkusers_live_dashboard"] || []).push([["src_client_containers_auth_SignUpContainer_tsx"],{

/***/ "./src/client/actions/commonAction.tsx":
/*!*********************************************!*\
  !*** ./src/client/actions/commonAction.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   clearList: () => (/* binding */ clearList),
/* harmony export */   destroy: () => (/* binding */ destroy),
/* harmony export */   failure: () => (/* binding */ failure),
/* harmony export */   fetch: () => (/* binding */ fetch),
/* harmony export */   selectItem: () => (/* binding */ selectItem),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _constants_actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionType */ "./src/client/constants/actionType.tsx");

const failure = (error) => {
    return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__.ENTITY_FAILURE,
        error: error
    };
};
const add = (entity, data) => {
    return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__.ENTITY_CREATE,
        entity: entity,
        data: data
    };
};
const update = (entity, data) => {
    return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__.ENTITY_UPDATE,
        entity: entity,
        data: data
    };
};
const fetch = (entity, data) => {
    return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__.ENTITY_FETCH,
        entity: entity,
        data: data
    };
};
const destroy = (entity, id) => {
    return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__.ENTITY_DELETE,
        entity: entity,
        id: id
    };
};
const selectItem = (entity, data) => {
    return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__.SELECT_ENTITY_ITEM,
        entity: entity,
        data: data
    };
};
const clearList = (entity) => {
    return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ENTITY_LIST,
        entity: entity
    };
};


/***/ }),

/***/ "./src/client/actions/crudAction.tsx":
/*!*******************************************!*\
  !*** ./src/client/actions/crudAction.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroyItem: () => (/* binding */ destroyItem),
/* harmony export */   fetchAll: () => (/* binding */ fetchAll),
/* harmony export */   fetchById: () => (/* binding */ fetchById),
/* harmony export */   storeItem: () => (/* binding */ storeItem),
/* harmony export */   submitForm: () => (/* binding */ submitForm),
/* harmony export */   updateItem: () => (/* binding */ updateItem)
/* harmony export */ });
/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/history */ "./src/client/utils/history.tsx");
/* harmony import */ var _commonAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonAction */ "./src/client/actions/commonAction.tsx");
/* harmony import */ var _services_httpService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/httpService */ "./src/client/services/httpService.tsx");

/**
 * Import all commonAction as an object.
 */

/**
 * Import all httpService as an object.
 */

/**
 * CRUD actions for the application.
 * Every time an action that requires the API is called, it first dispatch an "apiRequest" action.
 *
 * entity = 'Users'
 */
const fetchAll = (entity, data) => {
    return (dispatch) => {
        return _services_httpService__WEBPACK_IMPORTED_MODULE_2__.fetchEntity(entity).then((response) => {
            dispatch(_commonAction__WEBPACK_IMPORTED_MODULE_1__.fetch(entity, response.data));
        })
            .catch((error) => {
            dispatch(_commonAction__WEBPACK_IMPORTED_MODULE_1__.failure(error));
        });
    };
};
const fetchById = (entity, id) => {
    return (dispatch) => {
        return _services_httpService__WEBPACK_IMPORTED_MODULE_2__.fetchEntityById(entity, id).then((response) => {
            dispatch(_commonAction__WEBPACK_IMPORTED_MODULE_1__.selectItem(entity, response.data));
        })
            .catch((error) => {
            dispatch(_commonAction__WEBPACK_IMPORTED_MODULE_1__.failure(error));
        });
    };
};
const storeItem = (entity, data) => {
    return (dispatch) => {
        return _services_httpService__WEBPACK_IMPORTED_MODULE_2__.storeEntity(entity, data).then((response) => {
            _utils_history__WEBPACK_IMPORTED_MODULE_0__["default"].back();
        })
            .catch((error) => {
            dispatch(_commonAction__WEBPACK_IMPORTED_MODULE_1__.failure(error));
        });
    };
};
const updateItem = (entity, data, id) => {
    return (dispatch) => {
        return _services_httpService__WEBPACK_IMPORTED_MODULE_2__.updateEntity(entity, data, id).then((response) => {
            _utils_history__WEBPACK_IMPORTED_MODULE_0__["default"].back();
        })
            .catch((error) => {
            dispatch(_commonAction__WEBPACK_IMPORTED_MODULE_1__.failure(error));
        });
    };
};
const destroyItem = (entity, id, data) => {
    return (dispatch) => {
        return _services_httpService__WEBPACK_IMPORTED_MODULE_2__.destroyEntity(entity, id).then((response) => {
            dispatch(fetchAll(entity, data));
        })
            .catch((error) => {
            dispatch(_commonAction__WEBPACK_IMPORTED_MODULE_1__.failure(error));
        });
    };
};
const submitForm = (entity, data, id) => {
    return (dispatch) => {
        if (id) {
            dispatch(updateItem(entity, data, id));
        }
        else {
            dispatch(storeItem(entity, data));
        }
    };
};


/***/ }),

/***/ "./src/client/components/auth/SignUpForm.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/auth/SignUpForm.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var _common_form_renderText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/form/renderText */ "./src/client/components/common/form/renderText.tsx");



const SignUpForm = (props) => {
    const { handleSubmit, onSubmit, errorMessage } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { className: "main" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: "wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "heading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "text text-large" }, "Sign Up"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text text-normal" },
                        "Already have an account? ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "/", className: "text text-links" }, "Login")))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { name: "signup", className: "form", method: "post", onSubmit: handleSubmit(onSubmit) },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "text", name: "first_name", component: _common_form_renderText__WEBPACK_IMPORTED_MODULE_1__["default"], label: "First Name", placeholder: "First Name" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "text", name: "last_name", component: _common_form_renderText__WEBPACK_IMPORTED_MODULE_1__["default"], label: "Last Name", placeholder: "Last Name" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "text", name: "email", component: _common_form_renderText__WEBPACK_IMPORTED_MODULE_1__["default"], label: "Email", placeholder: "Email" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "password", name: "password", component: _common_form_renderText__WEBPACK_IMPORTED_MODULE_1__["default"], placeholder: "Password" })),
                    errorMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" }, errorMessage)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "submit", name: "submit", className: "input-submit", value: "Sign up" })))))));
};
const validateSignUp = (values) => {
    const errors = {};
    const requiredFields = ['first_name', 'last_name', 'email', 'password'];
    requiredFields.forEach((field) => {
        if (!values[field]) {
            errors[field] = '(The ' + field + ' field is required.)';
        }
    });
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '(Invalid email address.)';
    }
    return errors;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_form__WEBPACK_IMPORTED_MODULE_3__["default"])({
    form: 'SignUpForm',
    validate: validateSignUp, // ←Callback function for client-side validation
})(SignUpForm));


/***/ }),

/***/ "./src/client/components/common/form/renderText.tsx":
/*!**********************************************************!*\
  !*** ./src/client/components/common/form/renderText.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

;
const renderText = ({ name, placeholder, input, label, type, meta: { touched, invalid } }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: name, className: "input-label", hidden: true }, label),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", Object.assign({ type: type, name: name, id: name, className: "input-field", placeholder: placeholder, error: touched && invalid }, input))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderText);


/***/ }),

/***/ "./src/client/constants/entity.tsx":
/*!*****************************************!*\
  !*** ./src/client/constants/entity.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USERS: () => (/* binding */ USERS)
/* harmony export */ });
const USERS = 'users';


/***/ }),

/***/ "./src/client/containers/auth/SignUpContainer.tsx":
/*!********************************************************!*\
  !*** ./src/client/containers/auth/SignUpContainer.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/entity */ "./src/client/constants/entity.tsx");
/* harmony import */ var _actions_crudAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/crudAction */ "./src/client/actions/crudAction.tsx");
/* harmony import */ var _components_auth_SignUpForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/auth/SignUpForm */ "./src/client/components/auth/SignUpForm.tsx");





const SignUpContainer = () => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const submitForm = (formProps) => {
        dispatch(_actions_crudAction__WEBPACK_IMPORTED_MODULE_3__.submitForm(_constants_entity__WEBPACK_IMPORTED_MODULE_2__.USERS, formProps, 0));
    };
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_auth_SignUpForm__WEBPACK_IMPORTED_MODULE_4__["default"], { onSubmit: submitForm });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpContainer);


/***/ }),

/***/ "./src/client/services/httpService.tsx":
/*!*********************************************!*\
  !*** ./src/client/services/httpService.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroyEntity: () => (/* binding */ destroyEntity),
/* harmony export */   fetchEntity: () => (/* binding */ fetchEntity),
/* harmony export */   fetchEntityById: () => (/* binding */ fetchEntityById),
/* harmony export */   storeEntity: () => (/* binding */ storeEntity),
/* harmony export */   updateEntity: () => (/* binding */ updateEntity)
/* harmony export */ });
/* harmony import */ var _utils_httpUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/httpUtil */ "./src/client/utils/httpUtil.tsx");
/* harmony import */ var _utils_serializeUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/serializeUtil */ "./src/client/utils/serializeUtil.tsx");
// Import custom utils


const fetchEntity = (entityName) => {
    return (0,_utils_httpUtil__WEBPACK_IMPORTED_MODULE_0__.fetch)(entityName.toLowerCase());
};
const fetchEntityById = (entityName, dataId) => {
    return (0,_utils_httpUtil__WEBPACK_IMPORTED_MODULE_0__.fetch)((0,_utils_serializeUtil__WEBPACK_IMPORTED_MODULE_1__.getPathParam)(entityName.toLowerCase(), dataId));
};
const storeEntity = (entityName, data) => {
    return (0,_utils_httpUtil__WEBPACK_IMPORTED_MODULE_0__.store)(entityName.toLowerCase(), data);
};
const updateEntity = (entityName, data, dataId) => {
    return (0,_utils_httpUtil__WEBPACK_IMPORTED_MODULE_0__.update)((0,_utils_serializeUtil__WEBPACK_IMPORTED_MODULE_1__.getPathParam)(entityName.toLowerCase(), dataId), data);
};
const destroyEntity = (entityName, dataId) => {
    return (0,_utils_httpUtil__WEBPACK_IMPORTED_MODULE_0__.destroy)((0,_utils_serializeUtil__WEBPACK_IMPORTED_MODULE_1__.getPathParam)(entityName.toLowerCase(), dataId));
};


/***/ }),

/***/ "./src/client/utils/httpBaseUtil.tsx":
/*!*******************************************!*\
  !*** ./src/client/utils/httpBaseUtil.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpBase: () => (/* binding */ httpBase)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ "./src/client/config/config.tsx");
/* harmony import */ var _storageUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageUtil */ "./src/client/utils/storageUtil.tsx");



const httpBase = () => {
    const api = axios__WEBPACK_IMPORTED_MODULE_2__["default"].create({
        baseURL: `${_config_config__WEBPACK_IMPORTED_MODULE_0__.API_URL}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': (0,_storageUtil__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)(_config_config__WEBPACK_IMPORTED_MODULE_0__.JWT_TOKEN)
        },
        responseType: 'json'
    });
    api.interceptors.response.use((response) => {
        return response;
    }, error => {
        if (401 === error.response.status) {
            // redirect to login page
        }
        if (404 === error.response.status) {
            // redirect to 404 page
        }
        if (500 === error.response.status) {
            // redirect to 500 page
        }
        return Promise.reject(error);
    });
    return api;
};


/***/ }),

/***/ "./src/client/utils/httpUtil.tsx":
/*!***************************************!*\
  !*** ./src/client/utils/httpUtil.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroy: () => (/* binding */ destroy),
/* harmony export */   fetch: () => (/* binding */ fetch),
/* harmony export */   store: () => (/* binding */ store),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _httpBaseUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpBaseUtil */ "./src/client/utils/httpBaseUtil.tsx");

const fetch = (endpoint) => {
    return (0,_httpBaseUtil__WEBPACK_IMPORTED_MODULE_0__.httpBase)()
        .get(endpoint);
};
const store = (endpoint, data) => {
    return (0,_httpBaseUtil__WEBPACK_IMPORTED_MODULE_0__.httpBase)()
        .post(endpoint, data);
};
const update = (endpoint, data) => {
    return (0,_httpBaseUtil__WEBPACK_IMPORTED_MODULE_0__.httpBase)()
        .put(endpoint, data);
};
const destroy = (endpoint) => {
    return (0,_httpBaseUtil__WEBPACK_IMPORTED_MODULE_0__.httpBase)()
        .delete(endpoint);
};


/***/ }),

/***/ "./src/client/utils/serializeUtil.tsx":
/*!********************************************!*\
  !*** ./src/client/utils/serializeUtil.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPathParam: () => (/* binding */ getPathParam),
/* harmony export */   getQueryParam: () => (/* binding */ getQueryParam)
/* harmony export */ });
function getQueryParam(data) {
    if (typeof (data) !== 'object') {
        return '?' + data;
    }
    var str = [];
    for (var p in data) {
        if (data[p] && data.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
        }
    }
    return '?' + str.join('&');
}
function getPathParam(...args) {
    var params = [];
    for (var a in args) {
        params.push(args[a]);
    }
    return params.join('/');
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9jb250YWluZXJzX2F1dGhfU2lnblVwQ29udGFpbmVyX3RzeC5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMko7QUFDcEo7QUFDUDtBQUNBLGNBQWMsaUVBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGNBQWMsZ0VBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsY0FBYyxnRUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxjQUFjLCtEQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGNBQWMsZ0VBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsY0FBYyxxRUFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsY0FBYyxvRUFBaUI7QUFDL0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DdUM7QUFDdkM7QUFDQTtBQUNBO0FBQytDO0FBQy9DO0FBQ0E7QUFDQTtBQUN1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsZUFBZSw4REFBdUI7QUFDdEMscUJBQXFCLGdEQUFrQjtBQUN2QyxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUIsa0RBQW9CO0FBQ3pDLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBLGVBQWUsa0VBQTJCO0FBQzFDLHFCQUFxQixxREFBdUI7QUFDNUMsU0FBUztBQUNUO0FBQ0EscUJBQXFCLGtEQUFvQjtBQUN6QyxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQSxlQUFlLDhEQUF1QjtBQUN0QyxZQUFZLHNEQUFPO0FBQ25CLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixrREFBb0I7QUFDekMsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0EsZUFBZSwrREFBd0I7QUFDdkMsWUFBWSxzREFBTztBQUNuQixTQUFT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QyxxREFBUztBQUNyRCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUIwQztBQUNuQztBQUNQLFdBQVcsdURBQVE7QUFDbkI7QUFDQTtBQUNPO0FBQ1AsV0FBVyx1REFBUTtBQUNuQjtBQUNBO0FBQ087QUFDUCxXQUFXLHVEQUFRO0FBQ25CO0FBQ0E7QUFDTztBQUNQLFdBQVcsdURBQVE7QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZXJzLWxpdmUtZGFzaGJvYXJkLy4vc3JjL2NsaWVudC9hY3Rpb25zL2NvbW1vbkFjdGlvbi50c3giLCJ3ZWJwYWNrOi8vdXNlcnMtbGl2ZS1kYXNoYm9hcmQvLi9zcmMvY2xpZW50L2FjdGlvbnMvY3J1ZEFjdGlvbi50c3giLCJ3ZWJwYWNrOi8vdXNlcnMtbGl2ZS1kYXNoYm9hcmQvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYXV0aC9TaWduVXBGb3JtLnRzeCIsIndlYnBhY2s6Ly91c2Vycy1saXZlLWRhc2hib2FyZC8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9jb21tb24vZm9ybS9yZW5kZXJUZXh0LnRzeCIsIndlYnBhY2s6Ly91c2Vycy1saXZlLWRhc2hib2FyZC8uL3NyYy9jbGllbnQvY29uc3RhbnRzL2VudGl0eS50c3giLCJ3ZWJwYWNrOi8vdXNlcnMtbGl2ZS1kYXNoYm9hcmQvLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYXV0aC9TaWduVXBDb250YWluZXIudHN4Iiwid2VicGFjazovL3VzZXJzLWxpdmUtZGFzaGJvYXJkLy4vc3JjL2NsaWVudC9zZXJ2aWNlcy9odHRwU2VydmljZS50c3giLCJ3ZWJwYWNrOi8vdXNlcnMtbGl2ZS1kYXNoYm9hcmQvLi9zcmMvY2xpZW50L3V0aWxzL2h0dHBCYXNlVXRpbC50c3giLCJ3ZWJwYWNrOi8vdXNlcnMtbGl2ZS1kYXNoYm9hcmQvLi9zcmMvY2xpZW50L3V0aWxzL2h0dHBVdGlsLnRzeCIsIndlYnBhY2s6Ly91c2Vycy1saXZlLWRhc2hib2FyZC8uL3NyYy9jbGllbnQvdXRpbHMvc2VyaWFsaXplVXRpbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU5USVRZX0ZBSUxVUkUsIEVOVElUWV9DUkVBVEUsIEVOVElUWV9VUERBVEUsIEVOVElUWV9GRVRDSCwgRU5USVRZX0RFTEVURSwgU0VMRUNUX0VOVElUWV9JVEVNLCBDTEVBUl9FTlRJVFlfTElTVCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlJztcbmV4cG9ydCBjb25zdCBmYWlsdXJlID0gKGVycm9yKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogRU5USVRZX0ZBSUxVUkUsXG4gICAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IGFkZCA9IChlbnRpdHksIGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBFTlRJVFlfQ1JFQVRFLFxuICAgICAgICBlbnRpdHk6IGVudGl0eSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IChlbnRpdHksIGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBFTlRJVFlfVVBEQVRFLFxuICAgICAgICBlbnRpdHk6IGVudGl0eSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IGZldGNoID0gKGVudGl0eSwgZGF0YSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEVOVElUWV9GRVRDSCxcbiAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBkZXN0cm95ID0gKGVudGl0eSwgaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBFTlRJVFlfREVMRVRFLFxuICAgICAgICBlbnRpdHk6IGVudGl0eSxcbiAgICAgICAgaWQ6IGlkXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgc2VsZWN0SXRlbSA9IChlbnRpdHksIGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRUxFQ1RfRU5USVRZX0lURU0sXG4gICAgICAgIGVudGl0eTogZW50aXR5LFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgY2xlYXJMaXN0ID0gKGVudGl0eSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IENMRUFSX0VOVElUWV9MSVNULFxuICAgICAgICBlbnRpdHk6IGVudGl0eVxuICAgIH07XG59O1xuIiwiaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vdXRpbHMvaGlzdG9yeSc7XG4vKipcbiAqIEltcG9ydCBhbGwgY29tbW9uQWN0aW9uIGFzIGFuIG9iamVjdC5cbiAqL1xuaW1wb3J0ICogYXMgY29tbW9uQWN0aW9uIGZyb20gJy4vY29tbW9uQWN0aW9uJztcbi8qKlxuICogSW1wb3J0IGFsbCBodHRwU2VydmljZSBhcyBhbiBvYmplY3QuXG4gKi9cbmltcG9ydCAqIGFzIGh0dHBTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2h0dHBTZXJ2aWNlJztcbi8qKlxuICogQ1JVRCBhY3Rpb25zIGZvciB0aGUgYXBwbGljYXRpb24uXG4gKiBFdmVyeSB0aW1lIGFuIGFjdGlvbiB0aGF0IHJlcXVpcmVzIHRoZSBBUEkgaXMgY2FsbGVkLCBpdCBmaXJzdCBkaXNwYXRjaCBhbiBcImFwaVJlcXVlc3RcIiBhY3Rpb24uXG4gKlxuICogZW50aXR5ID0gJ1VzZXJzJ1xuICovXG5leHBvcnQgY29uc3QgZmV0Y2hBbGwgPSAoZW50aXR5LCBkYXRhKSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gaHR0cFNlcnZpY2UuZmV0Y2hFbnRpdHkoZW50aXR5KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goY29tbW9uQWN0aW9uLmZldGNoKGVudGl0eSwgcmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goY29tbW9uQWN0aW9uLmZhaWx1cmUoZXJyb3IpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgZmV0Y2hCeUlkID0gKGVudGl0eSwgaWQpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBodHRwU2VydmljZS5mZXRjaEVudGl0eUJ5SWQoZW50aXR5LCBpZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGNvbW1vbkFjdGlvbi5zZWxlY3RJdGVtKGVudGl0eSwgcmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goY29tbW9uQWN0aW9uLmZhaWx1cmUoZXJyb3IpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgc3RvcmVJdGVtID0gKGVudGl0eSwgZGF0YSkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgcmV0dXJuIGh0dHBTZXJ2aWNlLnN0b3JlRW50aXR5KGVudGl0eSwgZGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goY29tbW9uQWN0aW9uLmZhaWx1cmUoZXJyb3IpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IChlbnRpdHksIGRhdGEsIGlkKSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gaHR0cFNlcnZpY2UudXBkYXRlRW50aXR5KGVudGl0eSwgZGF0YSwgaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGNvbW1vbkFjdGlvbi5mYWlsdXJlKGVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IGRlc3Ryb3lJdGVtID0gKGVudGl0eSwgaWQsIGRhdGEpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBodHRwU2VydmljZS5kZXN0cm95RW50aXR5KGVudGl0eSwgaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaEFsbChlbnRpdHksIGRhdGEpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGNvbW1vbkFjdGlvbi5mYWlsdXJlKGVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHN1Ym1pdEZvcm0gPSAoZW50aXR5LCBkYXRhLCBpZCkgPT4ge1xuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVJdGVtKGVudGl0eSwgZGF0YSwgaWQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHN0b3JlSXRlbShlbnRpdHksIGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCByZW5kZXJUZXh0IGZyb20gJy4uL2NvbW1vbi9mb3JtL3JlbmRlclRleHQnO1xuY29uc3QgU2lnblVwRm9ybSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBvblN1Ym1pdCwgZXJyb3JNZXNzYWdlIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIHsgY2xhc3NOYW1lOiBcIm1haW5cIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCB7IGNsYXNzTmFtZTogXCJ3cmFwcGVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImhlYWRpbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBjbGFzc05hbWU6IFwidGV4dCB0ZXh0LWxhcmdlXCIgfSwgXCJTaWduIFVwXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0IHRleHQtbm9ybWFsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiL1wiLCBjbGFzc05hbWU6IFwidGV4dCB0ZXh0LWxpbmtzXCIgfSwgXCJMb2dpblwiKSkpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG5hbWU6IFwic2lnbnVwXCIsIGNsYXNzTmFtZTogXCJmb3JtXCIsIG1ldGhvZDogXCJwb3N0XCIsIG9uU3VibWl0OiBoYW5kbGVTdWJtaXQob25TdWJtaXQpIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXQtY29udHJvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcImZpcnN0X25hbWVcIiwgY29tcG9uZW50OiByZW5kZXJUZXh0LCBsYWJlbDogXCJGaXJzdCBOYW1lXCIsIHBsYWNlaG9sZGVyOiBcIkZpcnN0IE5hbWVcIiB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXQtY29udHJvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcImxhc3RfbmFtZVwiLCBjb21wb25lbnQ6IHJlbmRlclRleHQsIGxhYmVsOiBcIkxhc3QgTmFtZVwiLCBwbGFjZWhvbGRlcjogXCJMYXN0IE5hbWVcIiB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXQtY29udHJvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcImVtYWlsXCIsIGNvbXBvbmVudDogcmVuZGVyVGV4dCwgbGFiZWw6IFwiRW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiRW1haWxcIiB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXQtY29udHJvbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgbmFtZTogXCJwYXNzd29yZFwiLCBjb21wb25lbnQ6IHJlbmRlclRleHQsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIgfSkpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW5wdXQtY29udHJvbFwiIH0sIGVycm9yTWVzc2FnZSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImlucHV0LWNvbnRyb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgbmFtZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImlucHV0LXN1Ym1pdFwiLCB2YWx1ZTogXCJTaWduIHVwXCIgfSkpKSkpKSk7XG59O1xuY29uc3QgdmFsaWRhdGVTaWduVXAgPSAodmFsdWVzKSA9PiB7XG4gICAgY29uc3QgZXJyb3JzID0ge307XG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBbJ2ZpcnN0X25hbWUnLCAnbGFzdF9uYW1lJywgJ2VtYWlsJywgJ3Bhc3N3b3JkJ107XG4gICAgcmVxdWlyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKCF2YWx1ZXNbZmllbGRdKSB7XG4gICAgICAgICAgICBlcnJvcnNbZmllbGRdID0gJyhUaGUgJyArIGZpZWxkICsgJyBmaWVsZCBpcyByZXF1aXJlZC4pJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgICAgIGVycm9ycy5lbWFpbCA9ICcoSW52YWxpZCBlbWFpbCBhZGRyZXNzLiknO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3JzO1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogJ1NpZ25VcEZvcm0nLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVNpZ25VcCwgLy8g4oaQQ2FsbGJhY2sgZnVuY3Rpb24gZm9yIGNsaWVudC1zaWRlIHZhbGlkYXRpb25cbn0pKFNpZ25VcEZvcm0pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuO1xuY29uc3QgcmVuZGVyVGV4dCA9ICh7IG5hbWUsIHBsYWNlaG9sZGVyLCBpbnB1dCwgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgaW52YWxpZCB9IH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IG5hbWUsIGNsYXNzTmFtZTogXCJpbnB1dC1sYWJlbFwiLCBoaWRkZW46IHRydWUgfSwgbGFiZWwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6IHR5cGUsIG5hbWU6IG5hbWUsIGlkOiBuYW1lLCBjbGFzc05hbWU6IFwiaW5wdXQtZmllbGRcIiwgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCBlcnJvcjogdG91Y2hlZCAmJiBpbnZhbGlkIH0sIGlucHV0KSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW5kZXJUZXh0O1xuIiwiZXhwb3J0IGNvbnN0IFVTRVJTID0gJ3VzZXJzJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFVTRVJTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2VudGl0eSc7XG5pbXBvcnQgKiBhcyBjcnVkQWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvY3J1ZEFjdGlvbic7XG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F1dGgvU2lnblVwRm9ybSc7XG5jb25zdCBTaWduVXBDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZm9ybVByb3BzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNydWRBY3Rpb24uc3VibWl0Rm9ybShVU0VSUywgZm9ybVByb3BzLCAwKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTaWduVXBGb3JtLCB7IG9uU3VibWl0OiBzdWJtaXRGb3JtIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcENvbnRhaW5lcjtcbiIsIi8vIEltcG9ydCBjdXN0b20gdXRpbHNcbmltcG9ydCB7IGZldGNoLCBzdG9yZSwgdXBkYXRlLCBkZXN0cm95IH0gZnJvbSAnLi4vdXRpbHMvaHR0cFV0aWwnO1xuaW1wb3J0IHsgZ2V0UGF0aFBhcmFtIH0gZnJvbSAnLi4vdXRpbHMvc2VyaWFsaXplVXRpbCc7XG5leHBvcnQgY29uc3QgZmV0Y2hFbnRpdHkgPSAoZW50aXR5TmFtZSkgPT4ge1xuICAgIHJldHVybiBmZXRjaChlbnRpdHlOYW1lLnRvTG93ZXJDYXNlKCkpO1xufTtcbmV4cG9ydCBjb25zdCBmZXRjaEVudGl0eUJ5SWQgPSAoZW50aXR5TmFtZSwgZGF0YUlkKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKGdldFBhdGhQYXJhbShlbnRpdHlOYW1lLnRvTG93ZXJDYXNlKCksIGRhdGFJZCkpO1xufTtcbmV4cG9ydCBjb25zdCBzdG9yZUVudGl0eSA9IChlbnRpdHlOYW1lLCBkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHN0b3JlKGVudGl0eU5hbWUudG9Mb3dlckNhc2UoKSwgZGF0YSk7XG59O1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUVudGl0eSA9IChlbnRpdHlOYW1lLCBkYXRhLCBkYXRhSWQpID0+IHtcbiAgICByZXR1cm4gdXBkYXRlKGdldFBhdGhQYXJhbShlbnRpdHlOYW1lLnRvTG93ZXJDYXNlKCksIGRhdGFJZCksIGRhdGEpO1xufTtcbmV4cG9ydCBjb25zdCBkZXN0cm95RW50aXR5ID0gKGVudGl0eU5hbWUsIGRhdGFJZCkgPT4ge1xuICAgIHJldHVybiBkZXN0cm95KGdldFBhdGhQYXJhbShlbnRpdHlOYW1lLnRvTG93ZXJDYXNlKCksIGRhdGFJZCkpO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBUElfVVJMLCBKV1RfVE9LRU4gfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZVV0aWwnO1xuZXhwb3J0IGNvbnN0IGh0dHBCYXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6IGAke0FQSV9VUkx9YCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnWC1YU1JGLVRPS0VOJzogZ2V0TG9jYWxTdG9yYWdlKEpXVF9UT0tFTilcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbidcbiAgICB9KTtcbiAgICBhcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgaWYgKDQwMSA9PT0gZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICAvLyByZWRpcmVjdCB0byBsb2dpbiBwYWdlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKDQwNCA9PT0gZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICAvLyByZWRpcmVjdCB0byA0MDQgcGFnZVxuICAgICAgICB9XG4gICAgICAgIGlmICg1MDAgPT09IGVycm9yLnJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgICAgLy8gcmVkaXJlY3QgdG8gNTAwIHBhZ2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH0pO1xuICAgIHJldHVybiBhcGk7XG59O1xuIiwiaW1wb3J0IHsgaHR0cEJhc2UgfSBmcm9tICcuL2h0dHBCYXNlVXRpbCc7XG5leHBvcnQgY29uc3QgZmV0Y2ggPSAoZW5kcG9pbnQpID0+IHtcbiAgICByZXR1cm4gaHR0cEJhc2UoKVxuICAgICAgICAuZ2V0KGVuZHBvaW50KTtcbn07XG5leHBvcnQgY29uc3Qgc3RvcmUgPSAoZW5kcG9pbnQsIGRhdGEpID0+IHtcbiAgICByZXR1cm4gaHR0cEJhc2UoKVxuICAgICAgICAucG9zdChlbmRwb2ludCwgZGF0YSk7XG59O1xuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IChlbmRwb2ludCwgZGF0YSkgPT4ge1xuICAgIHJldHVybiBodHRwQmFzZSgpXG4gICAgICAgIC5wdXQoZW5kcG9pbnQsIGRhdGEpO1xufTtcbmV4cG9ydCBjb25zdCBkZXN0cm95ID0gKGVuZHBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGh0dHBCYXNlKClcbiAgICAgICAgLmRlbGV0ZShlbmRwb2ludCk7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXJ5UGFyYW0oZGF0YSkge1xuICAgIGlmICh0eXBlb2YgKGRhdGEpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gJz8nICsgZGF0YTtcbiAgICB9XG4gICAgdmFyIHN0ciA9IFtdO1xuICAgIGZvciAodmFyIHAgaW4gZGF0YSkge1xuICAgICAgICBpZiAoZGF0YVtwXSAmJiBkYXRhLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtwXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnPycgKyBzdHIuam9pbignJicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhdGhQYXJhbSguLi5hcmdzKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgIGZvciAodmFyIGEgaW4gYXJncykge1xuICAgICAgICBwYXJhbXMucHVzaChhcmdzW2FdKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcy5qb2luKCcvJyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=