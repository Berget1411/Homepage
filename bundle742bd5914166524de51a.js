"use strict";
(self["webpackChunkhomepage"] = self["webpackChunkhomepage"] || []).push([["bundle"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");

var projects = document.querySelectorAll('.project');
var links = document.querySelectorAll('.project .links img');
var showProject = function showProject(e) {
  projects.forEach(function (project) {
    if (project.contains(e.target)) return;
    if (project !== e.target) project.classList.add('hide-project');
  });
};
projects.forEach(function (project) {
  return project.addEventListener('mouseover', showProject);
});
var showAllProjects = function showAllProjects() {
  projects.forEach(function (project) {
    return project.classList.remove('hide-project');
  });
};
projects.forEach(function (project) {
  return project.addEventListener('mouseleave', showAllProjects);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* common reused styles */
/* CSS fonts */
/* CSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

html {
  color-scheme: dark light;
}

img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}

:root {
  --primary-color: white;
  --secondary-color: black;
  --white-color: white;
  --first-gradient-color: #0ea5e9;
  --second-gradient-color: #075985;
}

body {
  background-color: var(--primary-color);
  font-family: "Robot", sans-serif;
}

h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.about-me {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  padding: 100px 0px 60px 0px;
}

.diagonal::after {
  content: "";
  width: auto;
  background: linear-gradient(45deg, var(--first-gradient-color), var(--second-gradient-color));
  position: absolute;
  z-index: -1;
  inset: 0;
  transform: skewY(var(--skew-angle));
}

.profile {
  position: relative;
  flex: 1;
}

.profile-picture {
  border-radius: 15px;
}

.profile-name {
  bottom: 0;
  text-align: end;
  padding: 10px;
  font-size: 2.2em;
  color: var(--primary-color);
}

.card {
  flex: 2;
  max-width: 800px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  padding: 1rem;
}
.card h1 {
  font-size: 2.4em;
  padding: 15px 0px;
}

.diagonal {
  --skew-angle: -5deg;
  position: relative;
}

.links {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  padding: 15px 0px;
}
.links img {
  height: 30px;
  width: 30px;
  transition: transform 0.2s;
  pointer-events: all;
}
.links img:hover {
  transform: scale(1.1);
}

.project-image {
  object-fit: cover;
}

.my-projects {
  margin-top: 50px !important;
  max-width: 1000px;
  margin: auto;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.project {
  background-color: rgb(202, 202, 202);
  padding: 20px;
  border-radius: 20px;
  transition: transform 0.2s, filter 0.2s;
}
.project > * {
  pointer-events: none;
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-title {
  font-size: 1.6em;
}

.hide-project {
  transform: scale(0.95);
  filter: brightness(0.8);
}

.view-more-projects {
  margin: 10px 0px 60px 0px;
  gap: 10px;
}
.view-more-projects p {
  font-size: 1.2em;
  font-weight: bold;
}
.view-more-projects img {
  cursor: pointer;
}

footer {
  padding-top: 100px;
  padding-bottom: 50px;
}

.contact {
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
.contact .left {
  margin-top: 30px;
  flex: 2;
}
.contact .left ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contact .left ul .email-phone {
  display: flex;
  align-items: center;
  gap: 10px;
}
.contact .left ul .email-phone img {
  height: 26px;
  width: 26px;
}
.contact .right {
  flex: 3;
}
.contact .right img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
}

@media (max-width: 1140px) {
  .about-me {
    flex-direction: column;
    gap: 20px;
    margin: 0px 20px;
  }
  .profile {
    display: flex;
    flex-direction: column-reverse;
  }
  .profile-name {
    text-align: center;
  }
  .card {
    border-radius: 15px;
  }
  .my-projects {
    max-width: 800px;
  }
  .contact {
    max-width: 800px;
  }
}
@media (max-width: 840px) {
  .about-me {
    flex-direction: column;
    gap: 20px;
  }
  .profile {
    display: flex;
    flex-direction: column-reverse;
  }
  .profile-name {
    text-align: center;
  }
  .card {
    border-radius: 15px;
  }
  .my-projects {
    max-width: 400px;
  }
  .contact {
    max-width: 400px;
  }
  .contact h2 {
    font-size: 1.8em;
  }
}
@media (max-width: 500px) {
  .my-projects {
    max-width: 250px;
  }
  .contact {
    justify-content: center;
    max-width: 400px;
  }
  .contact .right {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["/* common reused styles */\r\n\r\n@mixin icon-size($pixel) {\r\n  height: $pixel;\r\n  width: $pixel;\r\n}\r\n\r\n@mixin flex-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* CSS fonts */\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap');\r\n\r\n/* CSS Reset */\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font: inherit;\r\n}\r\n\r\nhtml {\r\n  color-scheme: dark light;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg,\r\nvideo {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\n:root {\r\n  --primary-color: white;\r\n  --secondary-color: black;\r\n  --white-color: white;\r\n  --first-gradient-color: #0ea5e9;\r\n  --second-gradient-color: #075985;\r\n}\r\n\r\nbody {\r\n  background-color: var(--primary-color);\r\n  font-family: 'Robot', sans-serif;\r\n}\r\n\r\nh2 {\r\n  font-size: 2em;\r\n  margin-bottom: 20px;\r\n}\r\n","@use './index.scss';\r\n\r\n.about-me {\r\n  @include index.flex-center;\r\n  max-width: 1100px;\r\n  margin: auto;\r\n  padding: 100px 0px 60px 0px;\r\n}\r\n\r\n.diagonal::after {\r\n  content: '';\r\n  width: auto;\r\n  background: linear-gradient(\r\n    45deg,\r\n    var(--first-gradient-color),\r\n    var(--second-gradient-color)\r\n  );\r\n  position: absolute;\r\n  z-index: -1;\r\n  inset: 0;\r\n  transform: skewY(var(--skew-angle));\r\n}\r\n\r\n.profile {\r\n  position: relative;\r\n  flex: 1;\r\n}\r\n\r\n.profile-picture {\r\n  border-radius: 15px;\r\n}\r\n\r\n.profile-name {\r\n  bottom: 0;\r\n  text-align: end;\r\n  padding: 10px;\r\n\r\n  font-size: 2.2em;\r\n  color: var(--primary-color);\r\n}\r\n\r\n.card {\r\n  flex: 2;\r\n  max-width: 800px;\r\n  background-color: var(--primary-color);\r\n  color: var(--secondary-color);\r\n  border-bottom-right-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n  padding: 1rem;\r\n\r\n  h1 {\r\n    font-size: 2.4em;\r\n    padding: 15px 0px;\r\n  }\r\n}\r\n\r\n.diagonal {\r\n  --skew-angle: -5deg;\r\n  position: relative;\r\n}\r\n\r\n.links {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  gap: 20px;\r\n  padding: 15px 0px;\r\n\r\n  img {\r\n    @include index.icon-size(30px);\r\n    transition: transform 0.2s;\r\n    pointer-events: all;\r\n\r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }\r\n  }\r\n}\r\n\r\n.project-image {\r\n  object-fit: cover;\r\n}\r\n\r\n.my-projects {\r\n  margin-top: 50px !important;\r\n  max-width: 1000px;\r\n  margin: auto;\r\n}\r\n\r\n.projects {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n\r\n  gap: 20px;\r\n}\r\n\r\n.project {\r\n  background-color: rgb(202, 202, 202);\r\n  padding: 20px;\r\n  border-radius: 20px;\r\n\r\n  transition:\r\n    transform 0.2s,\r\n    filter 0.2s;\r\n\r\n  & > * {\r\n    pointer-events: none;\r\n  }\r\n}\r\n\r\n.project-top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.project-title {\r\n  font-size: 1.6em;\r\n}\r\n\r\n.hide-project {\r\n  transform: scale(0.95);\r\n  filter: brightness(0.8);\r\n}\r\n\r\n.view-more-projects {\r\n  margin: 10px 0px 60px 0px;\r\n  gap: 10px;\r\n\r\n  p {\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n  }\r\n\r\n  img {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\nfooter {\r\n  padding-top: 100px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.contact {\r\n  max-width: 1000px;\r\n  margin: auto;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 30px;\r\n\r\n  .left {\r\n    margin-top: 30px;\r\n    flex: 2;\r\n    ul {\r\n      list-style: none;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 20px;\r\n\r\n      .email-phone {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 10px;\r\n        img {\r\n          @include index.icon-size(26px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .right {\r\n    flex: 3;\r\n    img {\r\n      max-width: 100%;\r\n      max-height: 100%;\r\n      border-radius: 20px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 1140px) {\r\n  .about-me {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin: 0px 20px;\r\n  }\r\n\r\n  .profile {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .profile-name {\r\n    text-align: center;\r\n  }\r\n\r\n  .card {\r\n    border-radius: 15px;\r\n  }\r\n\r\n  .my-projects {\r\n    max-width: 800px;\r\n  }\r\n\r\n  .contact {\r\n    max-width: 800px;\r\n  }\r\n}\r\n\r\n@media (max-width: 840px) {\r\n  .about-me {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  .profile {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .profile-name {\r\n    text-align: center;\r\n  }\r\n\r\n  .card {\r\n    border-radius: 15px;\r\n  }\r\n\r\n  .my-projects {\r\n    max-width: 400px;\r\n  }\r\n  .contact {\r\n    max-width: 400px;\r\n\r\n    h2 {\r\n      font-size: 1.8em;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .my-projects {\r\n    max-width: 250px;\r\n  }\r\n\r\n  .contact {\r\n    justify-content: center;\r\n    max-width: 400px;\r\n\r\n    .right {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=bundle742bd5914166524de51a.js.map