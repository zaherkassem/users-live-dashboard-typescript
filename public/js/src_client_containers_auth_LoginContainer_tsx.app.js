"use strict";
(self["webpackChunkusers_live_dashboard"] = self["webpackChunkusers_live_dashboard"] || []).push([["src_client_containers_auth_LoginContainer_tsx"],{

/***/ "./src/client/components/auth/LoginForm.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/auth/LoginForm.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var _common_form_renderText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/form/renderText */ "./src/client/components/common/form/renderText.tsx");



const LoginForm = (props) => {
    const { handleSubmit, onSubmit, errorMessage } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { className: "main" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: "wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "heading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "text text-large" }, "Sign In"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "text text-normal" },
                        "Don't have an account? ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "/signup", className: "text text-links" }, "Signup")))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { name: "signin", className: "form", method: "post", onSubmit: handleSubmit(onSubmit) },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "text", name: "email", component: _common_form_renderText__WEBPACK_IMPORTED_MODULE_1__["default"], label: "Username", placeholder: "Username" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "password", name: "password", placeholder: "Password", component: _common_form_renderText__WEBPACK_IMPORTED_MODULE_1__["default"], label: "Password" })),
                    errorMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" }, errorMessage)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-control" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "submit", name: "submit", className: "input-submit", value: "Sign In" })))))));
};
const validateLogin = (values) => {
    const errors = {};
    const requiredFields = ['email', 'password'];
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
    form: 'LoginForm',
    validate: validateLogin, // ←Callback function for client-side validation
})(LoginForm));


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

/***/ "./src/client/containers/auth/LoginContainer.tsx":
/*!*******************************************************!*\
  !*** ./src/client/containers/auth/LoginContainer.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authService */ "./src/client/services/authService.tsx");
/* harmony import */ var _components_auth_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/auth/LoginForm */ "./src/client/components/auth/LoginForm.tsx");


// import { bindActionCreators } from 'redux';


const LoginContainer = () => {
    // const errorMessage = useSelector((state:any) => state.auth.errorMessage) as any;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const submitForm = (formProps) => {
        dispatch(_services_authService__WEBPACK_IMPORTED_MODULE_2__.login(formProps));
    };
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_auth_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], { onSubmit: submitForm });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginContainer);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NsaWVudF9jb250YWluZXJzX2F1dGhfTG9naW5Db250YWluZXJfdHN4LmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNvQjtBQUNLO0FBQ25EO0FBQ0EsWUFBWSx1Q0FBdUM7QUFDbkQsWUFBWSxnREFBbUIsV0FBVyxtQkFBbUI7QUFDN0QsUUFBUSxnREFBbUIsVUFBVSx3QkFBd0I7QUFDN0QsWUFBWSxnREFBbUIsY0FBYyxzQkFBc0I7QUFDbkUsZ0JBQWdCLGdEQUFtQixVQUFVLHNCQUFzQjtBQUNuRSxvQkFBb0IsZ0RBQW1CLFNBQVMsOEJBQThCO0FBQzlFLG9CQUFvQixnREFBbUIsUUFBUSwrQkFBK0I7QUFDOUU7QUFDQSx3QkFBd0IsZ0RBQW1CO0FBQzNDLDRCQUE0QixnREFBbUIsUUFBUSwrQ0FBK0M7QUFDdEcsZ0JBQWdCLGdEQUFtQixXQUFXLHFGQUFxRjtBQUNuSSxvQkFBb0IsZ0RBQW1CLFVBQVUsNEJBQTRCO0FBQzdFLHdCQUF3QixnREFBbUIsQ0FBQyxrREFBSyxJQUFJLHdDQUF3QywrREFBVSw4Q0FBOEM7QUFDckosb0JBQW9CLGdEQUFtQixVQUFVLDRCQUE0QjtBQUM3RSx3QkFBd0IsZ0RBQW1CLENBQUMsa0RBQUssSUFBSSx3RUFBd0UsK0RBQVUscUJBQXFCO0FBQzVKLHFDQUFxQyxnREFBbUIsVUFBVSw0QkFBNEI7QUFDOUYsb0JBQW9CLGdEQUFtQixVQUFVLDRCQUE0QjtBQUM3RSx3QkFBd0IsZ0RBQW1CLFlBQVksNkVBQTZFO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNkNBQTZDLElBQUk7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxzREFBUztBQUN4QjtBQUNBO0FBQ0EsQ0FBQyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2lCO0FBQy9CO0FBQ0Esc0JBQXNCLCtDQUErQyxvQkFBb0I7QUFDekYsWUFBWSxnREFBbUIsQ0FBQywyQ0FBYztBQUM5QyxRQUFRLGdEQUFtQixZQUFZLHVEQUF1RDtBQUM5RixRQUFRLGdEQUFtQiwwQkFBMEIsaUhBQWlIO0FBQ3RLO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDZ0I7QUFDMUMsWUFBWSxxQkFBcUI7QUFDeUI7QUFDRjtBQUN4RDtBQUNBO0FBQ0EscUJBQXFCLHdEQUFXO0FBQ2hDO0FBQ0EsaUJBQWlCLHdEQUFpQjtBQUNsQztBQUNBLFdBQVcsZ0RBQW1CLENBQUMsa0VBQVMsSUFBSSxzQkFBc0I7QUFDbEU7QUFDQSxpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2Vycy1saXZlLWRhc2hib2FyZC8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9hdXRoL0xvZ2luRm9ybS50c3giLCJ3ZWJwYWNrOi8vdXNlcnMtbGl2ZS1kYXNoYm9hcmQvLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY29tbW9uL2Zvcm0vcmVuZGVyVGV4dC50c3giLCJ3ZWJwYWNrOi8vdXNlcnMtbGl2ZS1kYXNoYm9hcmQvLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYXV0aC9Mb2dpbkNvbnRhaW5lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCByZW5kZXJUZXh0IGZyb20gJy4uL2NvbW1vbi9mb3JtL3JlbmRlclRleHQnO1xuY29uc3QgTG9naW5Gb3JtID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIG9uU3VibWl0LCBlcnJvck1lc3NhZ2UgfSA9IHByb3BzO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm1haW5cIiwgeyBjbGFzc05hbWU6IFwibWFpblwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIHsgY2xhc3NOYW1lOiBcIndyYXBwZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaGVhZGluZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0IHRleHQtbGFyZ2VcIiB9LCBcIlNpZ24gSW5cIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiBcInRleHQgdGV4dC1ub3JtYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiL3NpZ251cFwiLCBjbGFzc05hbWU6IFwidGV4dCB0ZXh0LWxpbmtzXCIgfSwgXCJTaWdudXBcIikpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBuYW1lOiBcInNpZ25pblwiLCBjbGFzc05hbWU6IFwiZm9ybVwiLCBtZXRob2Q6IFwicG9zdFwiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0KG9uU3VibWl0KSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImlucHV0LWNvbnRyb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJlbWFpbFwiLCBjb21wb25lbnQ6IHJlbmRlclRleHQsIGxhYmVsOiBcIlVzZXJuYW1lXCIsIHBsYWNlaG9sZGVyOiBcIlVzZXJuYW1lXCIgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImlucHV0LWNvbnRyb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIG5hbWU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIiwgY29tcG9uZW50OiByZW5kZXJUZXh0LCBsYWJlbDogXCJQYXNzd29yZFwiIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImlucHV0LWNvbnRyb2xcIiB9LCBlcnJvck1lc3NhZ2UpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJpbnB1dC1jb250cm9sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwic3VibWl0XCIsIG5hbWU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJpbnB1dC1zdWJtaXRcIiwgdmFsdWU6IFwiU2lnbiBJblwiIH0pKSkpKSkpO1xufTtcbmNvbnN0IHZhbGlkYXRlTG9naW4gPSAodmFsdWVzKSA9PiB7XG4gICAgY29uc3QgZXJyb3JzID0ge307XG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBbJ2VtYWlsJywgJ3Bhc3N3b3JkJ107XG4gICAgcmVxdWlyZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKCF2YWx1ZXNbZmllbGRdKSB7XG4gICAgICAgICAgICBlcnJvcnNbZmllbGRdID0gJyhUaGUgJyArIGZpZWxkICsgJyBmaWVsZCBpcyByZXF1aXJlZC4pJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgICAgIGVycm9ycy5lbWFpbCA9ICcoSW52YWxpZCBlbWFpbCBhZGRyZXNzLiknO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3JzO1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogJ0xvZ2luRm9ybScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlTG9naW4sIC8vIOKGkENhbGxiYWNrIGZ1bmN0aW9uIGZvciBjbGllbnQtc2lkZSB2YWxpZGF0aW9uXG59KShMb2dpbkZvcm0pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuO1xuY29uc3QgcmVuZGVyVGV4dCA9ICh7IG5hbWUsIHBsYWNlaG9sZGVyLCBpbnB1dCwgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgaW52YWxpZCB9IH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IG5hbWUsIGNsYXNzTmFtZTogXCJpbnB1dC1sYWJlbFwiLCBoaWRkZW46IHRydWUgfSwgbGFiZWwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6IHR5cGUsIG5hbWU6IG5hbWUsIGlkOiBuYW1lLCBjbGFzc05hbWU6IFwiaW5wdXQtZmllbGRcIiwgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCBlcnJvcjogdG91Y2hlZCAmJiBpbnZhbGlkIH0sIGlucHV0KSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW5kZXJUZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgYXV0aFNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aFNlcnZpY2UnO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F1dGgvTG9naW5Gb3JtJztcbmNvbnN0IExvZ2luQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IGVycm9yTWVzc2FnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmF1dGguZXJyb3JNZXNzYWdlKSBhcyBhbnk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZm9ybVByb3BzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGF1dGhTZXJ2aWNlLmxvZ2luKGZvcm1Qcm9wcykpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9naW5Gb3JtLCB7IG9uU3VibWl0OiBzdWJtaXRGb3JtIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IExvZ2luQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9