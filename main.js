(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Adobe\Dev\darshurathi.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "O+Ca":
/*!*********************************!*\
  !*** ./src/app/shorten.pipe.ts ***!
  \*********************************/
/*! exports provided: ShortenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShortenPipe {
    /* transform(value:any)
     {
         if(value.length>10)
         {
           return value.substr(0,10) +' ....';
         }
        
         return value;
     }*/
    transform(value, limit, lastString) {
        if (value.length > limit) {
            return value.substr(0, limit) + ' ....' + lastString;
        }
        return value;
    }
}
ShortenPipe.ɵfac = function ShortenPipe_Factory(t) { return new (t || ShortenPipe)(); };
ShortenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shorten", type: ShortenPipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class AppComponent {
    constructor(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(256)]);
        this.honeypot = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](""); // we will use this to prevent spam
        this.submitted = false; // show and hide the success message
        this.isLoading = false; // disable the submit button if we're loading
        this.form = this.formBuilder.group({
            name: this.name,
            email: this.email,
            message: this.message,
            honeypot: this.honeypot
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.form.status == "VALID" && this.honeypot.value == "") {
            this.form.disable(); // disable the form if it's valid to disable multiple submissions
            var formData = new FormData();
            formData.append("name", this.form.get("name").value);
            formData.append("email", this.form.get("email").value);
            formData.append("message", this.form.get("message").value);
            this.isLoading = true; // sending the post request async so it's in progress
            this.submitted = false; // hide the response message on multiple submits
            this.http.post("https://script.google.com/macros/s/AKfycbz2Awihc2BZepnuUqy5g4P3CG7_jda7NMZRF6m5zF_eazO1blY/exec", formData).subscribe((response) => {
                // choose the response message
                if (response["result"] == "success") {
                    this.responseMessage = "Thanks for the message! I'll get back to you soon!";
                }
                else {
                    this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
                }
                this.form.enable(); // re enable the form after a success
                this.submitted = true; // show the response message
                this.isLoading = false; // re enable the submit button
                this.form.reset();
                console.log(response);
            }, (error) => {
                this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
                this.form.enable(); // re enable the form after a success
                this.submitted = true; // show the response message
                this.isLoading = false; // re enable the submit button
                console.log(error);
            });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 251, vars: 5, consts: [[1, "bgimg"], [1, "navbar", "navbar-expand-md", "bg-dark", "navbar-dark", "fixed-top"], [1, "container", "nav-container"], ["href", "", 1, "navbar-brand", "font-weight-bold", 2, "font-family", "'Staatliches', cursive"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsenavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsenavbar", 1, "collapse", "navbar-collapse", "text-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "", 1, "nav-link", "text-white", 2, "font-family", "'Staatliches', cursive"], ["href", "#about", 1, "nav-link", "text-white", 2, "font-family", "'Staatliches', cursive"], ["href", "#skillid", 1, "nav-link", "text-white", 2, "font-family", "'Staatliches', cursive"], ["href", "#projectid", 1, "nav-link", "text-white", 2, "font-family", "'Staatliches', cursive"], ["href", "#pricingdiv", 1, "nav-link", "text-white", 2, "font-family", "'Staatliches', cursive"], ["href", "#contactid", 1, "nav-link", "text-white", 2, "font-family", "'Staatliches', cursive"], [1, "container", "text-center", "text-white", "headerset"], [2, "font-family", "'Staatliches', cursive"], [1, "center_div"], ["id", "about", 1, "container-fluid", "py-5", "bg-light"], [1, "container"], [1, "position-relative", "d-flex", "align-items-center", "justify-content-center"], [1, "display-1", "text-uppercase", "text-white", 2, "-webkit-text-stroke", "1px #dee2e6"], [1, "position-absolute", "text-uppercase", 2, "font-family", "'Staatliches', cursive"], [1, "row", "align-items-center"], [1, "col-lg-5", "pb-4", "pb-lg-0"], ["src", "assets/darshu.jpg", "alt", "", 1, "img-fluid", "w-100"], [1, "col-lg-7"], [1, "mb-4"], [2, "font-family", "'DM Serif Display', serif"], [1, "row", "mb-3"], [1, "col-sm-6", "py-2"], [1, "text-secondary"], ["href", "#contactid", 1, "btn", "blue", "btn-outline-primary", "mr-4", 2, "font-family", "'DM Serif Display', serif"], ["id", "skillid", 1, "skills"], [1, "inner"], [1, "header"], [1, "container", "skill-container"], [1, "skill-box"], [1, "skill-title"], [1, "img"], ["src", "assets/html2.png", 1, "skill-icon"], ["src", "assets/jt.png", 1, "skill-icon"], ["src", "assets/angular.png", 1, "skill-icon"], ["src", "assets/java.png", 1, "skill-icon"], ["src", "assets/data-structure.jpg", 1, "skill-icon"], ["src", "assets/c.jpg", 1, "skill-icon"], ["id", "projectid", 1, "project-sec"], [1, "container", "headings", "text-center"], [1, "text-center", "font-weight-bold", 2, "font-family", "'Staatliches', cursive"], [1, "container", "project-container"], [1, "row"], [1, "col-md-12"], [1, "main-timeline-pro"], [1, "timeline"], ["href", "", 1, "timeline-content"], [1, "timeline-year"], [1, "title", 2, "font-family", "'Staatliches', cursive"], [1, "description", 2, "font-family", "'DM Serif Display', serif", "font-size", "medium"], ["id", "pricingdiv", 1, "pricing"], [1, "main-timeline5"], [1, "timeline-icon"], [1, "year"], [1, "timeline-content"], [1, "description", 2, "font-family", "'DM Serif Display', serif"], ["id", "contactid", 1, "contactus"], [1, "text-capitalize", "pt-1", 2, "font-family", "'DM Serif Display', serif"], [1, "container", "contact-container"], [1, "col-lg-8", "col-md-8", "col-10", "offset-lg-2", "offset-md-2", "offset-1"], ["method", "post", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Enter your Name", "id", "username", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Enter email", "id", "email", "required", "", "autocomplete", "off", 1, "form-control"], ["rows", "4", "id", "comment", "formControlName", "message", "placeholder", " message ..", "required", "", 1, "form-control"], [1, "d-flex", "justify-content-center", "form-button"], ["type", "submit", 1, "btn", "btn-primary", 2, "font-family", "'DM Serif Display', serif", 3, "disabled"], ["type", "text", 1, "hidden", 3, "formControl"], [1, "center-text", 3, "ngClass"], [1, "container-fluid", "footer", "text-white", "mt-10", "py-1", "px-sm-1", "px-md-5"], [1, "container", "text-center", "py-5"], [1, "d-flex", "justify-content-center", "mb-4"], ["href", "https://github.com/darshurathi", "target", "_blank", 1, "btn", "btn-light", "btn-social", "mr-2"], [1, "fa", "fa-github"], ["href", "#", 1, "btn", "btn-light", "btn-social", "mr-2"], [1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/darshika-rathi-01968615b/", 1, "btn", "btn-light", "btn-social", "mr-2"], [1, "fa", "fa-linkedin"], ["href", "https://leetcode.com/DRATHI/", 1, "btn", "btn-light", "btn-social"], [1, "fa-bold", "fa", "fa-code"], [1, "m-0"], ["href", "#", 1, "text-white", "font-weight-bold"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " DARSHIKA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " HOME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " ABOUT ME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " SKILLS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " PROJECT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " EXPERIENCE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " GET IN TOUCH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "HI !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " I AM DARSHIKA RATHI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " ~DEVELOPER~ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "strong", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Software Engineer @svam North Shore Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " I am proactive and creative Frontend Developer. I keep an close eye on Frontend Developement Web Standard and web performance. I am a Developer worked in svam North Shore Technology with passion for Angular 7 Developement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Darshika Rathi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Birthday: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "15 july 1996");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Degree: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "B.Tech");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Experience: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "1 year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " 7906015379");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "darshikarathi@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " MY SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " HTML 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Adept at creating the user interface and integrating data. Proficient in collaborating with web designer to build maintain & update website application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " JAVSCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " Work closely with internal developement, product management and design team. Identifying ways to improve design and developement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "1 year of experience Angular 7 Developer highly skilled in designing and testing single page application. Design and developed components. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " Core Java ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " Knowledge of Object-Oriented programming and design. Highly efficient in java and proficiency in OOPS. Better understanding in Multithreading. Knowledge of relational database SQL. Knoweldge of Collections Framework like Arrays,Vectors or HashTable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " Data Structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Good knowledge of algorithms and Data Structure. Good command over Stack, Linked-List, Queue , Binary Tree. Great command on organizing the data using right data structure. Better understanding of algorithm to solve problem in less time and space. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Great command over pointers . Good knowledge of arrays and string and their functions. Understanding of a typical memory layout of a running process. Hands on practise on controls statements and functions. Better understanding of solving puzzles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "section", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "PROJECT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Web Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "An Angular 7 based frontend project which helps client to gather requirement and to modelize the house as per the end user and getting them to calculate the effective cost by different means like material cost, furniture cost , labor cost etc, and also helping them to get the loan from third party. The third party is basically the admin which have client those are distributed according to the location. The project have two section major and minor. These sections are differ on the basis of end user requirement. In major section end user can design the whole house (like number of room you want and other thing etc) major and small construction works comes under the minor section. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Role: Neev Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " Angular project setup, CRUD operation, User control, API consumption, User role management and Permission matrix, Role management , Reactive forms, forms controls, DOM tree manipulation, Dynamic elements of UI and functionality using typescript, Creating custom, general use modules and creating services and components, components which extend the elements and modules of angular. Responsive HTML screens, Reusable components, Template design, LayoutManagement, DOM structure handling based on Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "section", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Software Engineer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " An angular 7 frontend project which helps client to modelize house as per the end user requirement and calculate the effective cost by different mean like material cost, labor cost etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, " Bachelor of technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, " Computer Science and Engineering R.K.G.I.M Ghaziabad under A.K.T.U . Scrored 62% till 8 semester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, " Intermediate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, " PCM ,Saraswati Vidhya Mandir School Muzaffarnagar under UPB -78% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "2011");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "High School");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, " PCM , Saraswati Vidhya Mandir School Muzaffarnagar under UPB -84% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "section", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, " GET IN TOUCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, " If you are intrested in my work or software talks, please feel free to drop me a message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "form", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_218_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "textarea", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "@ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, ". Darshika Rathi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Made with Love");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](218);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.honeypot);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.submitted ? "hidden" : "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.responseMessage);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".bgimg[_ngcontent-%COMP%]{\r\n    background-image:url('https://www.toogit.com/uploads/ServicesAttachments/2021/01210431007780.png');\r\n    background-size: 100% 100%;\r\n    background-attachment: fixed;\r\n    width: 100%;\r\n    height:100vh;\r\n  }\r\n   \r\n\r\n \r\n   \r\n\r\n .headerset[_ngcontent-%COMP%]{\r\n     padding-top:250px!important;\r\n     box-sizing:border-box;\r\n  }\r\n   \r\n\r\n .headerset[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n     font-size:42px;\r\n  }\r\n   \r\n\r\n .headerset[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size:82px;\r\n    font-weight:bold;\r\n  }\r\n   \r\n\r\n .headerset[_ngcontent-%COMP%]   .btn-head[_ngcontent-%COMP%]{\r\n    border:grey;\r\n  }\r\n   \r\n\r\n \r\n   \r\n\r\n .center_div[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    place-items:center;\r\n     \r\n  }\r\n   \r\n\r\n .center_div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-family: 'Chela One', cursive;\r\n   color:#fff;\r\n   margin-top:100px;\r\n   font-size:7rem;\r\n    transform: uppercase;\r\n    position: relative;\r\n }\r\n   \r\n\r\n .center_div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before{\r\n  content:' ~DEVELOPER~ ';\r\n  width:100%;\r\n  color:#16c9f6;\r\n  position: absolute;\r\n  top:0;\r\n  left:0 ;\r\n   border-right:0.4rem solid#16c9f6;\r\n  animation:slide 3s linear infinite;\r\n  -webkit-animation: slide 3s linear infinite;\r\n  overflow:hidden;\r\n }\r\n   \r\n\r\n @keyframes slide{\r\n  0%{\r\n    width:0%;\r\n    }\r\n\r\n    50%{\r\n      width:100%;\r\n    }\r\n\r\n    100%{\r\n      width:0%;\r\n    }\r\n }\r\n   \r\n\r\n @media (max-width: 700px) {\r\n    .center_div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n      font-size:3rem;\r\n   }\r\n}\r\n   \r\n\r\n \r\n   \r\n\r\n .about-img[_ngcontent-%COMP%]{\r\n  margin-left: -100px;\r\n  right: -60px;\r\n }\r\n   \r\n\r\n .display-1[_ngcontent-%COMP%]{\r\n   font-size: 160px;\r\n   font-weight: 1000;\r\n   \r\n }\r\n   \r\n\r\n .position-absolute[_ngcontent-%COMP%]{\r\n   font-weight: 700;\r\n   \r\n }\r\n   \r\n\r\n .typed-cursor[_ngcontent-%COMP%] {\r\n   font-size: 45px;\r\n   color: #ffffff;\r\n }\r\n   \r\n\r\n .blue[_ngcontent-%COMP%]{\r\n   background-color: #16c9f6;\r\n   color: #ffffff;\r\n }\r\n   \r\n\r\n .btn[_ngcontent-%COMP%]{\r\n   border: 2px solid #16c9f6;\r\n }\r\n   \r\n\r\n .btn-white[_ngcontent-%COMP%]{\r\n   background-color: #ffffff;\r\n   border:2px solid #ffffff;\r\n }\r\n   \r\n\r\n .btn-blue[_ngcontent-%COMP%]{\r\n   border: 2.4px solid #ffffff;\r\n   color: #ffffff;\r\n }\r\n   \r\n\r\n @media (max-width: 700px) {\r\n   .about-img[_ngcontent-%COMP%]{\r\n     margin-left: 20px;\r\n     right: 0px;\r\n     top: 30px;\r\n    }\r\n\r\n    .display-1[_ngcontent-%COMP%]{\r\n      font-size: 100px;\r\n      font-weight: 500;\r\n      \r\n    }\r\n }\r\n   \r\n\r\n @media(max-width:479px){\r\n  .display-1[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n    font-weight: 500;\r\n    \r\n  }\r\n }\r\n   \r\n\r\n \r\n   \r\n\r\n [_ngcontent-%COMP%]::selection{\r\n  color: #fff;\r\n  background: #ff7979;\r\n}\r\n   \r\n\r\n .projects[_ngcontent-%COMP%]{\r\n  min-height:80vh;\r\n}\r\n   \r\n\r\n .wrapper[_ngcontent-%COMP%]{\r\n  max-width: 1080px;\r\n  margin: 100px auto;\r\n  padding: 0 20px;\r\n  position: relative;\r\n \r\n}\r\n   \r\n\r\n .wrapper[_ngcontent-%COMP%]   .center-line[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 4px;\r\n  background: #fff;\r\n  left: 50%;\r\n  top: 20px;\r\n  transform: translateX(-50%);\r\n}\r\n   \r\n\r\n .wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n   \r\n\r\n .wrapper[_ngcontent-%COMP%]   .row-1[_ngcontent-%COMP%]{\r\n  justify-content: flex-start;\r\n}\r\n   \r\n\r\n .wrapper[_ngcontent-%COMP%]   .row-2[_ngcontent-%COMP%]{\r\n  justify-content: flex-end;\r\n}\r\n   \r\n\r\n .wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{\r\n  background: rgb(175, 221, 240);\r\n  border-radius: 5px;\r\n  width: calc(50% - 40px);\r\n  padding: 20px;\r\n  position: relative;\r\n}\r\n   \r\n\r\n .wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]::before{\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 15px;\r\n  width: 15px;\r\n  background: rgb(102, 75, 75);\r\n  top: 28px;\r\n  z-index: -1;\r\n  transform: rotate(45deg);\r\n}\r\n   \r\n\r\n .row-1[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]::before{\r\n  right: -7px;\r\n}\r\n   \r\n\r\n .row-2[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]::before{\r\n  left: -7px;\r\n}\r\n   \r\n\r\n .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .center-line[_ngcontent-%COMP%]   .scroll-icon[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  background: #f2f2f2;\r\n  height: 40px;\r\n  width: 40px;\r\n  text-align: center;\r\n  line-height: 40px;\r\n  border-radius: 50%;\r\n  color: #ff7979;\r\n  font-size: 17px;\r\n  box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05);\r\n}\r\n   \r\n\r\n .center-line[_ngcontent-%COMP%]   .scroll-icon[_ngcontent-%COMP%]{\r\n  bottom: 0px;\r\n  left: 50%;\r\n  font-size: 25px;\r\n  transform: translateX(-50%);\r\n}\r\n   \r\n\r\n .row-1[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n  top: 15px;\r\n  right: -60px;\r\n}\r\n   \r\n\r\n .row-2[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n  top: 15px;\r\n  left: -60px;\r\n}\r\n   \r\n\r\n .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n   \r\n\r\n .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  font-family: 'Bebas Neue', cursive;\r\n}\r\n   \r\n\r\n .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin: 10px 0 17px 0;\r\n  font-family: 'Mate SC', serif;\r\n}\r\n   \r\n\r\n .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  background: #ff7979;\r\n  color: #fff;\r\n  padding: 7px 15px;\r\n  border-radius: 5px;\r\n  \r\n  font-weight: 400;\r\n  transition: all 0.3s ease;\r\n}\r\n   \r\n\r\n .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  transform: scale(0.97);\r\n}\r\n   \r\n\r\n @media(max-width: 790px){\r\n  .wrapper[_ngcontent-%COMP%]   .center-line[_ngcontent-%COMP%]{\r\n    left: 40px;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n    margin: 30px 0 3px 60px;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .row-1[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]::before{\r\n    left: -7px;\r\n  }\r\n  .row-1[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    left: -60px;\r\n  }\r\n}\r\n   \r\n\r\n @media(max-width: 440px){\r\n  .wrapper[_ngcontent-%COMP%]   .center-line[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]::before, .row[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n    margin: 10px 0;\r\n  }\r\n}\r\n   \r\n\r\n \r\n   \r\n\r\n \r\n   \r\n\r\n .skills[_ngcontent-%COMP%]{\r\n  min-height: 100vh;\r\n  box-sizing:border-box;\r\n  background-color: #333;\r\n}\r\n   \r\n\r\n .inner[_ngcontent-%COMP%]{\r\n  padding-top:20px;\r\n \r\n}\r\n   \r\n\r\n .header[_ngcontent-%COMP%]{\r\n  text-align:center;\r\n  color:#fff;\r\n  padding:1rem;\r\n  position: relative;\r\n  margin-top:20px;\r\n}\r\n   \r\n\r\n .header[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position:absolute;\r\n  bottom: 0;\r\n  left:50%;\r\n  transform: translate(-50%);\r\n  height:4px;\r\n  width:100px;\r\n  background-color: #2ecc71;\r\n  border-radius: 2px;\r\n}\r\n   \r\n\r\n .skill-container[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns:repeat(3, 1fr);\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align:center;\r\n  grid-gap:1rem;\r\n  padding:1rem 80px;\r\n  font-size:1.2rem;\r\n  margin-top:55px;\r\n \r\n}\r\n   \r\n\r\n .skill-box[_ngcontent-%COMP%]{\r\n  padding:1rem;\r\n  color:#ddd;\r\n  cursor: pointer;\r\n}\r\n   \r\n\r\n .skill-box[_ngcontent-%COMP%]:hover    > .skill-title[_ngcontent-%COMP%]:after, .skill-box[_ngcontent-%COMP%]:hover    > .skill-title[_ngcontent-%COMP%]:before{\r\n  width:35px;\r\n}\r\n   \r\n\r\n .skill-box[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]{\r\n  transform:translateY(-10px);\r\n  \r\n}\r\n   \r\n\r\n .skill-title[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding:0.5rem;\r\n  margin-bottom: 0.5rem;\r\n  position: relative;\r\n\r\n}\r\n   \r\n\r\n .skill-title[_ngcontent-%COMP%]:after{\r\n   content: '';\r\n   position: absolute;\r\n   bottom:0;\r\n   right:50%;\r\n   width:0;\r\n   height:4px;\r\n   border-radius: 2px 0 0 2px;\r\n   background-color:#2ecc71;\r\n   transition:.5s ;\r\n\r\n}\r\n   \r\n\r\n .skill-title[_ngcontent-%COMP%]:before{\r\n  content: '';\r\n  position: absolute;\r\n  bottom:0;\r\n  left:50%;\r\n  width:0;\r\n  height:4px;\r\n  border-radius: 0 2px 2px 0;\r\n  background-color:#2ecc71;\r\n  transition:.5s ;\r\n}\r\n   \r\n\r\n .img[_ngcontent-%COMP%]{\r\n  width:90px;\r\n  height:90px;\r\n  position: relative;\r\n  border-radius: 45px;\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transform: .5s;\r\n}\r\n   \r\n\r\n .img[_ngcontent-%COMP%]:after{\r\n  content: '' ;\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width:50%;\r\n  height:90px;\r\n  background: rgba(100,100,100,0.5);\r\n  border-radius: 45px 0 0 45px;\r\n\r\n}\r\n   \r\n\r\n .skill-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color:#fff;\r\n  margin-top:0.5rem;\r\n}\r\n   \r\n\r\n .skill-icon[_ngcontent-%COMP%]{\r\n  width:50px;\r\n  z-index: 2;\r\n}\r\n   \r\n\r\n @media screen and(max-width:990px){\r\n  .skill-container[_ngcontent-%COMP%]{\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding:2rem 50px;\r\n  }\r\n\r\n   \r\n}\r\n   \r\n\r\n @media(max-width:768px){\r\n   \r\n  .skill-container[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n   .skill-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n     font-size:17px;\r\n     \r\n   }\r\n}\r\n   \r\n\r\n @media(max-width:574px){\r\n  .skill-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size:16px;\r\n  }\r\n}\r\n   \r\n\r\n \r\n   \r\n\r\n .ourservices[_ngcontent-%COMP%]{\r\n   padding:100px 0px 60px;\r\n   height:700px;\r\n\r\n }\r\n   \r\n\r\n .ourservices[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n   font-size: 50px;\r\n   font-weight:bold;\r\n }\r\n   \r\n\r\n .imgsetting[_ngcontent-%COMP%]{\r\n   border-radius: 50%;\r\n   height:100px;\r\n   width:100px;\r\n   background-color: skyblue;\r\n }\r\n   \r\n\r\n .rowsetting[_ngcontent-%COMP%]{\r\n   margin:90px 0px!important;\r\n  \r\n }\r\n   \r\n\r\n .fa-desktop[_ngcontent-%COMP%]{\r\n   margin-top:28px;\r\n }\r\n   \r\n\r\n .rowsetting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n   color:#6c757d!important;\r\n   padding:10px;\r\n   font-size:20px;\r\n\r\n }\r\n   \r\n\r\n .rowsetting[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n   margin-top:20px;\r\n   font-weight:bold;\r\n   font-size:35px;\r\n }\r\n   \r\n\r\n \r\n   \r\n\r\n .contactus[_ngcontent-%COMP%]{\r\n  width:100%;\r\n  height:100vh;\r\n  padding:80px 0;\r\n  position: relative;\r\n}\r\n   \r\n\r\n .contactus[_ngcontent-%COMP%]:before{\r\n  content:\"\";\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  background: linear-gradient(330deg, #16c9f6 55% , #fff 0%);\r\n  z-index:-1;\r\n}\r\n   \r\n\r\n .form-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  border:1px solid #50d1c0;\r\n  border-radius: 100px;\r\n  margin:0 5px;\r\n  padding:12px 35px;\r\n  outline:none;\r\n  color:#50d1c0;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height:1.4;\r\n  text-align: center;\r\n  background: transparent;\r\n}\r\n   \r\n\r\n .form-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n  color:#50d1c0;\r\n}\r\n   \r\n\r\n form[_ngcontent-%COMP%]:hover   .form-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  background: #fff;\r\n  color: #50d1c0;\r\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);\r\n}\r\n   \r\n\r\n .hidden[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n}\r\n   \r\n\r\n .visible[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n   \r\n\r\n .center-text[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n  font-style: oblique;\r\n  font-weight:bold;\r\n}\r\n   \r\n\r\n \r\n   \r\n\r\n [_ngcontent-%COMP%]::placeholder{\r\n  font-size:0.85rem;\r\n}\r\n   \r\n\r\n \r\n   \r\n\r\n .project-sec[_ngcontent-%COMP%]{\r\n    box-sizing:border-box; \r\n    min-height: 110vh;\r\n    background-color: lightgray;\r\n    \r\n }\r\n   \r\n\r\n .project-sec[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]{\r\n    padding-top:50px;\r\n  }\r\n   \r\n\r\n .project-sec[_ngcontent-%COMP%]{\r\n     background-color: #16c9f6;\r\n  }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]{\r\n  font-family: 'Titillium Web', sans-serif;\r\n  padding: 50px 0 0;\r\n  position: relative;\r\n  margin-top:100px;\r\n \r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]:before{\r\n  content: '';\r\n  background-color: #fff;\r\n  height: 100%;\r\n  width: 60%;\r\n  box-shadow: 0 0 10px #333;\r\n  transform: translateX(-50%);\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 10px;\r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{\r\n  margin: -42px 0 0 0;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:before{\r\n  content: '';\r\n  border: 20px solid #FF9B00;\r\n  height: 90%;\r\n  width: 50%;\r\n  border-radius: 100px;\r\n  position: absolute;\r\n  left: 12%;\r\n  top: 22px;\r\n  z-index: -1;\r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]{\r\n  background-color: lightgrey;\r\n  text-align: center;\r\n  width: 60%;\r\n  padding: 10px 15px 60px;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:hover{ text-decoration: none; }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%]{\r\n  color: #FF9B00;\r\n  font-size: 30px;\r\n  font-weight: 600;\r\n  margin: 0 0 10px;\r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  color: #333;\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  background-color: #FF9B00;\r\n  height: 3px;\r\n  width: 60px;\r\n  margin: 12px auto;\r\n  display: block;\r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{\r\n  color: #333;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even):before{\r\n  left: auto;\r\n  right: 12%;\r\n}\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+2):before{ border-color: #FF503B; }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+2)   .timeline-year[_ngcontent-%COMP%]{ color: #FF503B; }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+2)   .title[_ngcontent-%COMP%]:after{ background-color: #FF503B; }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+3):before{ border-color: #009CE6; }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+3)   .timeline-year[_ngcontent-%COMP%]{ color: #009CE6; }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+3)   .title[_ngcontent-%COMP%]:after{ background-color: #009CE6; }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+4):before{ border-color: #B160BD; }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+4)   .timeline-year[_ngcontent-%COMP%]{ color: #B160BD; }\r\n   \r\n\r\n .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n+4)   .title[_ngcontent-%COMP%]:after{ background-color: #B160BD; }\r\n   \r\n\r\n @media only screen and (max-width:990px){\r\n  .project-container[_ngcontent-%COMP%]{\r\n    padding-bottom: 170px;\r\n   \r\n  }\r\n   \r\n  .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:before{\r\n      left: 5%;\r\n      border-radius: 120px;\r\n  }\r\n  .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even):before{ right: 5%; }\r\n}\r\n   \r\n\r\n @media only screen and (max-width:767px){\r\n  .project-container[_ngcontent-%COMP%]{\r\n    padding-bottom: 170px;\r\n   \r\n  }\r\n\r\n   \r\n   \r\n}\r\n   \r\n\r\n @media only screen and (max-width:576px){\r\n  .project-container[_ngcontent-%COMP%]{\r\n    padding-bottom: 170px;\r\n   \r\n  }\r\n   \r\n  .main-timeline-pro[_ngcontent-%COMP%]:before{ width: 85%; }\r\n  .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{ margin: -38px 0 0 0; }\r\n  .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:before{\r\n      border-width: 8px;\r\n      border-radius: 0;\r\n      left: 0;\r\n  }\r\n  .main-timeline-pro[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(even):before{ right: 0; }\r\n  .main-timeline-pro[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]{ width: 85%; }\r\n  .main-timeline-pro[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{ font-size: 18px; }\r\n}\r\n   \r\n\r\n \r\n   \r\n\r\n .footer[_ngcontent-%COMP%]{\r\n    background-color: #333;\r\n  }\r\n   \r\n\r\n \r\n   \r\n\r\n .pricing[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height:120vh;\r\n  padding: 50px;\r\n   \r\n  position: relative;\r\n  \r\n\r\n}\r\n   \r\n\r\n .pricing[_ngcontent-%COMP%]   .main-timeline5[_ngcontent-%COMP%]{\r\n margin-top:100px;\r\n}\r\n   \r\n\r\n \r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]{   \r\n   overflow:hidden;\r\n  position:relative\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{\r\n  position:relative;\r\n  margin-top:-79px\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:first-child{\r\n  margin-top:0\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%], .main-timeline5[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{\r\n  margin:auto;\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:after, .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:before{\r\n  content:\"\";\r\n  display:block;\r\n  width:100%;\r\n  clear:both\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:before{\r\n  content:\"\";\r\n  width:100%;\r\n  height:100%;\r\n  box-shadow:-8px 0 5px -5px rgba(0,0,0,.5) inset;\r\n  position:absolute;\r\n  top:0;\r\n  right:0;\r\n  z-index:2\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%]{\r\n  width:210px;\r\n  height:210px;\r\n  border-radius:50%;\r\n  border:25px solid transparent;\r\n  border-top-color:#f44556;\r\n  border-right-color:#f44556;\r\n  z-index:1;\r\n  transform:rotate(45deg)\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{\r\n  display:block;\r\n  width:110px;\r\n  height:110px;\r\n  line-height:110px;\r\n  border-radius:50%;\r\n  background:#fff;\r\n  box-shadow:0 0 20px rgba(0,0,0,.4);\r\n  font-size:30px;\r\n  font-weight:700;\r\n  color:#f44556;\r\n  text-align:center;\r\n  transform:rotate(-45deg)\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]{\r\n  width:35%;\r\n  float:right;\r\n  background:#f44556;\r\n  padding:30px 20px;\r\n  margin:50px 0;\r\n  z-index:1;\r\n  position:relative}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:before{\r\n  content:\"\";\r\n  width:20%;\r\n  height:15px;\r\n  background:#f44556;\r\n  position:absolute;\r\n  top:50%;\r\n  left:-20%;\r\n  z-index:-1;\r\n  transform:translateY(-50%)\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  font-size:20px;\r\n  font-weight:700;\r\n  color:#fff;\r\n  margin:0 0 10px\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{\r\n  font-size:16px;\r\n  color:#fff;\r\n  line-height:24px;\r\n  margin:0\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n):before{\r\n  box-shadow:8px 0 5px -5px rgba(0,0,0,.5) inset\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-icon[_ngcontent-%COMP%]{\r\n  transform:rotate(-135deg);\r\n  border-top-color:#e97e2e;\r\n  border-right-color:#e97e2e\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .year[_ngcontent-%COMP%]{\r\n  transform:rotate(135deg);\r\n  color:#e97e2e;\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-content[_ngcontent-%COMP%]{\r\n  float:left;\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-content[_ngcontent-%COMP%]:before{\r\n  left:auto;\r\n  right:-20%;\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-content[_ngcontent-%COMP%], .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-content[_ngcontent-%COMP%]:before{\r\n  background:#e97e2e;\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(3n)   .timeline-icon[_ngcontent-%COMP%]{\r\n  border-top-color:#13afae;\r\n  border-right-color:#13afae\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(3n)   .year[_ngcontent-%COMP%]{\r\n  color:#13afae;\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(3n)   .timeline-content[_ngcontent-%COMP%], .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(3n)   .timeline-content[_ngcontent-%COMP%]:before{\r\n  background:#13afae;\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n)   .timeline-icon[_ngcontent-%COMP%]{\r\n  border-top-color:#105572;\r\n  border-right-color:#105572\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n)   .year[_ngcontent-%COMP%]{\r\n  color:#105572;\r\n}\r\n   \r\n\r\n .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n)   .timeline-content[_ngcontent-%COMP%], .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(4n)   .timeline-content[_ngcontent-%COMP%]:before{\r\n  background:#105572;\r\n}\r\n   \r\n\r\n @media only screen and (max-width:1199px){.main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{\r\n  margin-top:-103px;\r\n}\r\n.contactus[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  margin-top:55px;\r\n}\r\n.main-timeline5[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:before{\r\n  left:-18%;\r\n}\r\n.main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-content[_ngcontent-%COMP%]:before{\r\n  right:-18%;\r\n}\r\n}\r\n   \r\n\r\n @media only screen and (max-width:990px){.main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{\r\n  margin-top:-127px;\r\n}\r\n\r\n.contactus[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  margin-top:55px;\r\n}\r\n.main-timeline5[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:before{\r\n  left:-2%; \r\n}\r\n.main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-content[_ngcontent-%COMP%]:before{\r\n  right:-2%;\r\n}\r\n}\r\n   \r\n\r\n @media only screen and (max-width:767px){.main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{margin-top:0;overflow:hidden}\r\n.main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:before, .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n):before{box-shadow:none}\r\n.main-timeline5[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%], .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-icon[_ngcontent-%COMP%]{margin-top:-30px;margin-bottom:20px;position:relative;transform:rotate(135deg)}\r\n.main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .year[_ngcontent-%COMP%], .main-timeline5[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{transform:rotate(-135deg)}\r\n.main-timeline5[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%], .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-content[_ngcontent-%COMP%]{width:100%;float:none;border-radius:0 0 20px 20px;text-align:center;padding:25px 20px;margin:0 auto}\r\n.main-timeline5[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:before, .main-timeline5[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]:nth-child(2n)   .timeline-content[_ngcontent-%COMP%]:before{width:15px;height:25px;position:absolute;top:-22px;left:50%;z-index:-1;transform:translate(-50%,0)}\r\n.pricing[_ngcontent-%COMP%], .contactus[_ngcontent-%COMP%]{\r\n  height:auto;\r\n  margin-top:50px;\r\n}\r\n \r\n \r\n \r\n \r\n \r\n.ourservices[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n font-size:15px;\r\n  \r\n  }\r\n   \r\n.contactus[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n font-size:15px; \r\n  \r\n}\r\n\r\n.contactus[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  margin-top:55px;\r\n}\r\n\r\n\r\n.headerset[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size:22px;\r\n}\r\n\r\n.headerset[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-size: 42px;\r\n  font-weight:bold;\r\n}\r\n\r\n\r\n.nav-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  padding-left:20px;\r\n  color:#16c9f6 ;\r\n  font-size:30px;\r\n  letter-spacing:10px;\r\n}\r\n\r\n \r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLHFCQUFxQjs7O0NBR3RCLGNBQWM7OztDQUlkLFlBQVk7OztDQU9YLGtCQUFrQjs7O0NBQ2xCO0lBQ0Usa0dBQWtHO0lBQ2xHLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7RUFDZDs7O0NBRUE7O0lBRUU7OztDQUNGO0tBQ0csMkJBQTJCO0tBQzNCLHFCQUFxQjtFQUN4Qjs7O0NBRUE7S0FDRyxjQUFjO0VBQ2pCOzs7Q0FFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7OztDQUVBO0lBQ0UsV0FBVztFQUNiOzs7Q0FLQSxzQkFBc0I7OztDQUV0QjtJQUNFLFlBQVk7SUFDWixrQkFBa0I7O0VBRXBCOzs7Q0FDRDtFQUNDLGlDQUFpQztHQUNoQyxVQUFVO0dBQ1YsZ0JBQWdCO0dBQ2hCLGNBQWM7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCOzs7Q0FFQTtFQUNDLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsT0FBTztHQUNOLGdDQUFnQztFQUNqQyxrQ0FBa0M7RUFDbEMsMkNBQTJDO0VBQzNDLGVBQWU7Q0FDaEI7OztDQUVBO0VBQ0M7SUFDRSxRQUFRO0lBQ1I7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxRQUFRO0lBQ1Y7Q0FDSDs7O0NBR0E7SUFDRztNQUNFLGNBQWM7R0FDakI7QUFDSDs7O0NBYUEsc0JBQXNCOzs7Q0FFdEI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOzs7Q0FFQTtHQUNFLGdCQUFnQjtHQUNoQixpQkFBaUI7O0NBRW5COzs7Q0FFQTtHQUNFLGdCQUFnQjs7Q0FFbEI7OztDQUVBO0dBQ0UsZUFBZTtHQUNmLGNBQWM7Q0FDaEI7OztDQUVBO0dBQ0UseUJBQXlCO0dBQ3pCLGNBQWM7Q0FDaEI7OztDQUNBO0dBQ0UseUJBQXlCO0NBQzNCOzs7Q0FDQTtHQUNFLHlCQUF5QjtHQUN6Qix3QkFBd0I7Q0FDMUI7OztDQUNBO0dBQ0UsMkJBQTJCO0dBQzNCLGNBQWM7Q0FDaEI7OztDQUNBO0dBQ0U7S0FDRSxpQkFBaUI7S0FDakIsVUFBVTtLQUNWLFNBQVM7SUFDVjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixnQkFBZ0I7O0lBRWxCO0NBQ0g7OztDQUVBO0VBQ0M7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCOztFQUVsQjtDQUNEOzs7Q0FJQSxVQUFVOzs7Q0FDVjtFQUNDLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7OztDQUVBO0VBQ0UsZUFBZTtBQUNqQjs7O0NBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCOzs7Q0FDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsU0FBUztFQUNULDJCQUEyQjtBQUM3Qjs7O0NBQ0E7RUFDRSxhQUFhO0FBQ2Y7OztDQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOzs7Q0FDQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0NBR0E7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOzs7Q0FDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsU0FBUztFQUNULFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7OztDQUNBO0VBQ0UsV0FBVztBQUNiOzs7Q0FDQTtFQUNFLFVBQVU7QUFDWjs7O0NBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysd0ZBQXdGO0FBQzFGOzs7Q0FDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7O0NBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtBQUNkOzs7Q0FDQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0FBQ2I7OztDQUNBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOzs7Q0FDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDOzs7Q0FDQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7OztDQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7O0NBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7OztDQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOzs7Q0FDQTtFQUNFOzs7SUFHRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7O0NBV0EsT0FBTzs7O0NBSVAsU0FBUzs7O0NBQ1Q7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7O0NBRUE7RUFDRSxnQkFBZ0I7O0FBRWxCOzs7Q0FFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7Q0FFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsU0FBUztFQUNULFFBQVE7RUFDUiwwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOzs7Q0FFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTs7QUFFakI7OztDQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0FBQ2pCOzs7Q0FFQTtFQUNFLFVBQVU7QUFDWjs7O0NBRUE7RUFDRSwyQkFBMkI7O0FBRTdCOzs7Q0FFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCOztBQUVwQjs7O0NBQ0E7R0FDRyxXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLFFBQVE7R0FDUixTQUFTO0dBQ1QsT0FBTztHQUNQLFVBQVU7R0FDViwwQkFBMEI7R0FDMUIsd0JBQXdCO0dBQ3hCLGVBQWU7O0FBRWxCOzs7Q0FDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7O0NBS0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7OztDQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLDRCQUE0Qjs7QUFFOUI7OztDQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7O0NBR0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOzs7Q0FFQTtFQUNFO0lBQ0UscUNBQXFDO0lBQ3JDLGlCQUFpQjtFQUNuQjs7O0FBR0Y7OztDQUVBOztFQUVFO0lBQ0UsV0FBVztJQUNYLDBCQUEwQjtFQUM1Qjs7R0FFQztLQUNFLGNBQWM7O0dBRWhCO0FBQ0g7OztDQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7OztDQU9DLGVBQWU7OztDQUNmO0dBQ0Usc0JBQXNCO0dBQ3RCLFlBQVk7O0NBRWQ7OztDQUVBO0dBQ0UsZUFBZTtHQUNmLGdCQUFnQjtDQUNsQjs7O0NBRUE7R0FDRSxrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLFdBQVc7R0FDWCx5QkFBeUI7Q0FDM0I7OztDQUVBO0dBQ0UseUJBQXlCOztDQUUzQjs7O0NBRUE7R0FDRSxlQUFlO0NBQ2pCOzs7Q0FFQTtHQUNFLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osY0FBYzs7Q0FFaEI7OztDQUNBO0dBQ0UsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixjQUFjO0NBQ2hCOzs7Q0FHQSxhQUFhOzs7Q0FDZDtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7O0NBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCwwREFBMEQ7RUFDMUQsVUFBVTtBQUNaOzs7Q0FFQTtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7OztDQUVBO0VBQ0UsYUFBYTtBQUNmOzs7Q0FDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0NBQXNDO0FBQ3hDOzs7Q0FHQTtDQUNDLGFBQWE7QUFDZDs7O0NBQ0E7Q0FDQyxjQUFjO0FBQ2Y7OztDQUNBO0NBQ0Msa0JBQWtCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7OztDQUVBLG1CQUFtQjs7O0NBQ25CO0VBQ0UsaUJBQWlCO0FBQ25COzs7Q0FLQyxvQkFBb0I7OztDQUlwQjtJQUNHLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsMkJBQTJCOztDQUU5Qjs7O0NBQ0M7SUFDRSxnQkFBZ0I7RUFDbEI7OztDQUdBO0tBQ0cseUJBQXlCO0VBQzVCOzs7Q0FDRDtFQUNDLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7QUFFbEI7OztDQUdBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0FBQ1g7OztDQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7OztDQUNBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0FBQ2I7OztDQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOzs7Q0FDQSw0Q0FBNEMscUJBQXFCLEVBQUU7OztDQUNuRTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7O0NBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsU0FBUztBQUNYOzs7Q0FDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7O0NBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7O0NBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOzs7Q0FDQSxxREFBcUQscUJBQXFCLEVBQUU7OztDQUM1RSw2REFBNkQsY0FBYyxFQUFFOzs7Q0FDN0UsMkRBQTJELHlCQUF5QixFQUFFOzs7Q0FDdEYscURBQXFELHFCQUFxQixFQUFFOzs7Q0FDNUUsNkRBQTZELGNBQWMsRUFBRTs7O0NBQzdFLDJEQUEyRCx5QkFBeUIsRUFBRTs7O0NBQ3RGLHFEQUFxRCxxQkFBcUIsRUFBRTs7O0NBQzVFLDZEQUE2RCxjQUFjLEVBQUU7OztDQUM3RSwyREFBMkQseUJBQXlCLEVBQUU7OztDQUN0RjtFQUNFO0lBQ0UscUJBQXFCOztFQUV2Qjs7RUFFQTtNQUNJLFFBQVE7TUFDUixvQkFBb0I7RUFDeEI7RUFDQSxxREFBcUQsU0FBUyxFQUFFO0FBQ2xFOzs7Q0FDQTtFQUNFO0lBQ0UscUJBQXFCOztFQUV2Qjs7OztBQUlGOzs7Q0FHQTtFQUNFO0lBQ0UscUJBQXFCOztFQUV2Qjs7RUFFQSwyQkFBMkIsVUFBVSxFQUFFO0VBQ3ZDLDhCQUE4QixtQkFBbUIsRUFBRTtFQUNuRDtNQUNJLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsT0FBTztFQUNYO0VBQ0EscURBQXFELFFBQVEsRUFBRTtFQUMvRCxzQ0FBc0MsVUFBVSxFQUFFO0VBQ2xELDJCQUEyQixlQUFlLEVBQUU7QUFDOUM7OztDQUtBLGNBQWM7OztDQUNaO0lBQ0Usc0JBQXNCO0VBQ3hCOzs7Q0FHRixjQUFjOzs7Q0FDZDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7OztBQUdwQjs7O0NBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7OztDQUVBLGdCQUFnQjs7O0NBQ2hCO0dBQ0csZUFBZTtFQUNoQjtBQUNGOzs7Q0FDQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOzs7Q0FDQTtFQUNFO0FBQ0Y7OztDQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0FBQ1Q7OztDQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixVQUFVO0VBQ1Y7QUFDRjs7O0NBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCwrQ0FBK0M7RUFDL0MsaUJBQWlCO0VBQ2pCLEtBQUs7RUFDTCxPQUFPO0VBQ1A7QUFDRjs7O0NBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1Q7QUFDRjs7O0NBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCO0FBQ0Y7OztDQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUJBQWlCOzs7Q0FDbkI7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxTQUFTO0VBQ1QsVUFBVTtFQUNWO0FBQ0Y7OztDQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1Y7QUFDRjs7O0NBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQjtBQUNGOzs7Q0FDQTtFQUNFO0FBQ0Y7OztDQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QjtBQUNGOzs7Q0FDQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7OztDQUNBO0VBQ0UsVUFBVTtBQUNaOzs7Q0FDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztDQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7Q0FDQTtFQUNFLHdCQUF3QjtFQUN4QjtBQUNGOzs7Q0FDQTtFQUNFLGFBQWE7QUFDZjs7O0NBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7OztDQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCO0FBQ0Y7OztDQUVBO0VBQ0UsYUFBYTtBQUNmOzs7Q0FDQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0NBQ0EsMENBQTBDO0VBQ3hDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTs7O0NBQ0EseUNBQXlDO0VBQ3ZDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFFBQVE7QUFDVjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7OztDQUNBLHlDQUF5QywwQkFBMEIsWUFBWSxDQUFDLGVBQWU7QUFDL0YsZ0ZBQWdGLGVBQWU7QUFDL0Ysc0ZBQXNGLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHdCQUF3QjtBQUNwSyxvRUFBb0UseUJBQXlCO0FBQzdGLDRGQUE0RixVQUFVLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGFBQWE7QUFDL0wsMEdBQTBHLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsMkJBQTJCO0FBQzVNO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7Ozs7OztBQU1BO0NBQ0MsY0FBYzs7RUFFYjs7QUFFRjtDQUNDLGNBQWM7O0FBRWY7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7OztBQUlBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiAgIG5ldyBjb2RlIGFkZGVkICovXHJcbiAgIFxyXG5cclxuIC8qYWJvdXQgc3RhcnQqL1xyXG4gIFxyXG4gXHJcbiBcclxuIC8qYWJvdXQgZW5kKi9cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvKiAgbmV3IGNvZGUgZW5kICovXHJcbiAgLmJnaW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd3d3LnRvb2dpdC5jb20vdXBsb2Fkcy9TZXJ2aWNlc0F0dGFjaG1lbnRzLzIwMjEvMDEyMTA0MzEwMDc3ODAucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICB9XHJcbiBcclxuICAvKi5iZ2ltZyAuY29udGFpbmVyIGF7XHJcbiAgICBjb2xvcjojMTZjOWY2O1xyXG4gIH0qL1xyXG4gIC5oZWFkZXJzZXR7XHJcbiAgICAgcGFkZGluZy10b3A6MjUwcHghaW1wb3J0YW50O1xyXG4gICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJzZXQgaDJ7XHJcbiAgICAgZm9udC1zaXplOjQycHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyc2V0IGgxe1xyXG4gICAgZm9udC1zaXplOjgycHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gIH1cclxuIFxyXG4gIC5oZWFkZXJzZXQgLmJ0bi1oZWFke1xyXG4gICAgYm9yZGVyOmdyZXk7XHJcbiAgfVxyXG4gICAgXHJcbiBcclxuXHJcblxyXG4gIC8qIGhlYWRlcnNldCBuZXcgY29kZSovXHJcblxyXG4gIC5jZW50ZXJfZGl2e1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6Y2VudGVyO1xyXG4gICAgIFxyXG4gIH1cclxuIC5jZW50ZXJfZGl2IGgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2hlbGEgT25lJywgY3Vyc2l2ZTtcclxuICAgY29sb3I6I2ZmZjtcclxuICAgbWFyZ2luLXRvcDoxMDBweDtcclxuICAgZm9udC1zaXplOjdyZW07XHJcbiAgICB0cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIH1cclxuXHJcbiAuY2VudGVyX2RpdiBoMTo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6JyB+REVWRUxPUEVSfiAnO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgY29sb3I6IzE2YzlmNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowIDtcclxuICAgYm9yZGVyLXJpZ2h0OjAuNHJlbSBzb2xpZCMxNmM5ZjY7XHJcbiAgYW5pbWF0aW9uOnNsaWRlIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUgM3MgbGluZWFyIGluZmluaXRlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuIH1cclxuXHJcbiBAa2V5ZnJhbWVzIHNsaWRle1xyXG4gIDAle1xyXG4gICAgd2lkdGg6MCU7XHJcbiAgICB9XHJcblxyXG4gICAgNTAle1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCV7XHJcbiAgICAgIHdpZHRoOjAlO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuXHJcbiBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5jZW50ZXJfZGl2IGgxe1xyXG4gICAgICBmb250LXNpemU6M3JlbTtcclxuICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qYWJvdXQgbWUgcG9ydGZvbGxpbyovXHJcblxyXG4uYWJvdXQtaW1ne1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgcmlnaHQ6IC02MHB4O1xyXG4gfVxyXG4gXHJcbiAuZGlzcGxheS0xe1xyXG4gICBmb250LXNpemU6IDE2MHB4O1xyXG4gICBmb250LXdlaWdodDogMTAwMDtcclxuICAgXHJcbiB9XHJcbiAgXHJcbiAucG9zaXRpb24tYWJzb2x1dGV7XHJcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgIFxyXG4gfVxyXG4gXHJcbiAudHlwZWQtY3Vyc29yIHtcclxuICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICBjb2xvcjogI2ZmZmZmZjtcclxuIH1cclxuIFxyXG4gLmJsdWV7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMxNmM5ZjY7XHJcbiAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gfVxyXG4gLmJ0bntcclxuICAgYm9yZGVyOiAycHggc29saWQgIzE2YzlmNjtcclxuIH0gXHJcbiAuYnRuLXdoaXRle1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICBib3JkZXI6MnB4IHNvbGlkICNmZmZmZmY7XHJcbiB9XHJcbiAuYnRuLWJsdWV7XHJcbiAgIGJvcmRlcjogMi40cHggc29saWQgI2ZmZmZmZjtcclxuICAgY29sb3I6ICNmZmZmZmY7XHJcbiB9XHJcbiBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgLmFib3V0LWltZ3tcclxuICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICByaWdodDogMHB4O1xyXG4gICAgIHRvcDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlzcGxheS0xe1xyXG4gICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBcclxuICAgIH1cclxuIH1cclxuIFxyXG4gQG1lZGlhKG1heC13aWR0aDo0NzlweCl7XHJcbiAgLmRpc3BsYXktMXtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBcclxuICB9XHJcbiB9XHJcblxyXG5cclxuXHJcbiAvKnByb2plY3QqL1xyXG4gOjpzZWxlY3Rpb257XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2ZmNzk3OTtcclxufVxyXG5cclxuLnByb2plY3Rze1xyXG4gIG1pbi1oZWlnaHQ6ODB2aDtcclxufVxyXG4gXHJcbi53cmFwcGVye1xyXG4gIG1heC13aWR0aDogMTA4MHB4O1xyXG4gIG1hcmdpbjogMTAwcHggYXV0bztcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gXHJcbn1cclxuLndyYXBwZXIgLmNlbnRlci1saW5le1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi53cmFwcGVyIC5yb3d7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ud3JhcHBlciAucm93LTF7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi53cmFwcGVyIC5yb3ctMntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4gXHJcbi53cmFwcGVyIC5yb3cgc2VjdGlvbntcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTc1LCAyMjEsIDI0MCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiBjYWxjKDUwJSAtIDQwcHgpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi53cmFwcGVyIC5yb3cgc2VjdGlvbjo6YmVmb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTAyLCA3NSwgNzUpO1xyXG4gIHRvcDogMjhweDtcclxuICB6LWluZGV4OiAtMTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLnJvdy0xIHNlY3Rpb246OmJlZm9yZXtcclxuICByaWdodDogLTdweDtcclxufVxyXG4ucm93LTIgc2VjdGlvbjo6YmVmb3Jle1xyXG4gIGxlZnQ6IC03cHg7XHJcbn1cclxuLnJvdyBzZWN0aW9uIC5pY29uLFxyXG4uY2VudGVyLWxpbmUgLnNjcm9sbC1pY29ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiAjZmY3OTc5O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBib3gtc2hhZG93OiAwIDAgMCA0cHggI2ZmZiwgaW5zZXQgMCAycHggMCByZ2JhKDAsMCwwLDAuMDgpLCAwIDNweCAwIDRweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcbi5jZW50ZXItbGluZSAuc2Nyb2xsLWljb257XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLnJvdy0xIHNlY3Rpb24gLmljb257XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiAtNjBweDtcclxufVxyXG4ucm93LTIgc2VjdGlvbiAuaWNvbntcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogLTYwcHg7XHJcbn1cclxuLnJvdyBzZWN0aW9uIC5kZXRhaWxzLFxyXG4ucm93IHNlY3Rpb24gLmJvdHRvbXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5yb3cgc2VjdGlvbiAuZGV0YWlscyAudGl0bGV7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcclxufVxyXG4ucm93IHNlY3Rpb24gcHtcclxuICBtYXJnaW46IDEwcHggMCAxN3B4IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdNYXRlIFNDJywgc2VyaWY7XHJcbn1cclxuLnJvdyBzZWN0aW9uIC5ib3R0b20gYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmNzk3OTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA3cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLyogZm9udC1zaXplOiAxN3B4OyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4ucm93IHNlY3Rpb24gLmJvdHRvbSBhOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzkwcHgpe1xyXG4gIC53cmFwcGVyIC5jZW50ZXItbGluZXtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIC53cmFwcGVyIC5yb3d7XHJcbiAgICBtYXJnaW46IDMwcHggMCAzcHggNjBweDtcclxuICB9XHJcbiAgLndyYXBwZXIgLnJvdyBzZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5yb3ctMSBzZWN0aW9uOjpiZWZvcmV7XHJcbiAgICBsZWZ0OiAtN3B4O1xyXG4gIH1cclxuICAucm93LTEgc2VjdGlvbiAuaWNvbntcclxuICAgIGxlZnQ6IC02MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA0NDBweCl7XHJcbiAgLndyYXBwZXIgLmNlbnRlci1saW5lLFxyXG4gIC5yb3cgc2VjdGlvbjo6YmVmb3JlLFxyXG4gIC5yb3cgc2VjdGlvbiAuaWNvbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC53cmFwcGVyIC5yb3d7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIGVuZCovXHJcblxyXG4gXHJcblxyXG4vKnNraWxscyovXHJcbi5za2lsbHN7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5pbm5lcntcclxuICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gXHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBwYWRkaW5nOjFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxufVxyXG5cclxuLmhlYWRlcjphZnRlcntcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDo1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgaGVpZ2h0OjRweDtcclxuICB3aWR0aDoxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnNraWxsLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMywgMWZyKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGdyaWQtZ2FwOjFyZW07XHJcbiAgcGFkZGluZzoxcmVtIDgwcHg7XHJcbiAgZm9udC1zaXplOjEuMnJlbTtcclxuICBtYXJnaW4tdG9wOjU1cHg7XHJcbiBcclxufVxyXG5cclxuLnNraWxsLWJveHtcclxuICBwYWRkaW5nOjFyZW07XHJcbiAgY29sb3I6I2RkZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5za2lsbC1ib3g6aG92ZXIgPiAuc2tpbGwtdGl0bGU6YWZ0ZXIsIC5za2lsbC1ib3g6aG92ZXIgPiAuc2tpbGwtdGl0bGU6YmVmb3Jle1xyXG4gIHdpZHRoOjM1cHg7XHJcbn1cclxuXHJcbi5za2lsbC1ib3g6aG92ZXIgLmltZ3tcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgXHJcbn1cclxuXHJcbi5za2lsbC10aXRsZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOjAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG4uc2tpbGwtdGl0bGU6YWZ0ZXJ7XHJcbiAgIGNvbnRlbnQ6ICcnO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGJvdHRvbTowO1xyXG4gICByaWdodDo1MCU7XHJcbiAgIHdpZHRoOjA7XHJcbiAgIGhlaWdodDo0cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiMyZWNjNzE7XHJcbiAgIHRyYW5zaXRpb246LjVzIDtcclxuXHJcbn1cclxuLnNraWxsLXRpdGxlOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDo1MCU7XHJcbiAgd2lkdGg6MDtcclxuICBoZWlnaHQ6NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzJlY2M3MTtcclxuICB0cmFuc2l0aW9uOi41cyA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6OTBweDtcclxuICBoZWlnaHQ6OTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IC41cztcclxufVxyXG5cclxuLmltZzphZnRlcntcclxuICBjb250ZW50OiAnJyA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICB3aWR0aDo1MCU7XHJcbiAgaGVpZ2h0OjkwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsMTAwLDEwMCwwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHggMCAwIDQ1cHg7XHJcblxyXG59XHJcblxyXG4uc2tpbGwtdGl0bGUgaDN7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBtYXJnaW4tdG9wOjAuNXJlbTtcclxufVxyXG5cclxuXHJcbi5za2lsbC1pY29ue1xyXG4gIHdpZHRoOjUwcHg7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4gXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo5OTBweCl7XHJcbiAgLnNraWxsLWNvbnRhaW5lcntcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBwYWRkaW5nOjJyZW0gNTBweDtcclxuICB9XHJcblxyXG4gICBcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgIFxyXG4gIC5za2lsbC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgIC5za2lsbC1jb250YWluZXIgcHtcclxuICAgICBmb250LXNpemU6MTdweDtcclxuICAgICBcclxuICAgfVxyXG59IFxyXG4gXHJcbkBtZWRpYShtYXgtd2lkdGg6NTc0cHgpe1xyXG4gIC5za2lsbC1jb250YWluZXIgcHtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuIFxyXG5cclxuXHJcbiBcclxuXHJcbiAvKiBvdXJzZXJ2aWNlICovXHJcbiAub3Vyc2VydmljZXN7XHJcbiAgIHBhZGRpbmc6MTAwcHggMHB4IDYwcHg7XHJcbiAgIGhlaWdodDo3MDBweDtcclxuXHJcbiB9XHJcblxyXG4gLm91cnNlcnZpY2VzIGgxe1xyXG4gICBmb250LXNpemU6IDUwcHg7XHJcbiAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiB9XHJcblxyXG4gLmltZ3NldHRpbmd7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgaGVpZ2h0OjEwMHB4O1xyXG4gICB3aWR0aDoxMDBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuIH1cclxuXHJcbiAucm93c2V0dGluZ3tcclxuICAgbWFyZ2luOjkwcHggMHB4IWltcG9ydGFudDtcclxuICBcclxuIH1cclxuXHJcbiAuZmEtZGVza3RvcHtcclxuICAgbWFyZ2luLXRvcDoyOHB4O1xyXG4gfVxyXG5cclxuIC5yb3dzZXR0aW5nIHB7XHJcbiAgIGNvbG9yOiM2Yzc1N2QhaW1wb3J0YW50O1xyXG4gICBwYWRkaW5nOjEwcHg7XHJcbiAgIGZvbnQtc2l6ZToyMHB4O1xyXG5cclxuIH1cclxuIC5yb3dzZXR0aW5nIGgye1xyXG4gICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgIGZvbnQtc2l6ZTozNXB4O1xyXG4gfVxyXG5cclxuXHJcbiAvKmNvbnRhY3QgdXMqL1xyXG4uY29udGFjdHVze1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG4gIHBhZGRpbmc6ODBweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhY3R1czpiZWZvcmV7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgYm90dG9tOjA7XHJcbiAgcmlnaHQ6MDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzMwZGVnLCAjMTZjOWY2IDU1JSAsICNmZmYgMCUpO1xyXG4gIHotaW5kZXg6LTE7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbiBidXR0b257XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjNTBkMWMwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIG1hcmdpbjowIDVweDtcclxuICBwYWRkaW5nOjEycHggMzVweDtcclxuICBvdXRsaW5lOm5vbmU7XHJcbiAgY29sb3I6IzUwZDFjMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDoxLjQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1idXR0b24gYnV0dG9uOmhvdmVye1xyXG4gIGNvbG9yOiM1MGQxYzA7XHJcbn1cclxuZm9ybTpob3ZlciAuZm9ybS1idXR0b24gYnV0dG9ue1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICM1MGQxYzA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcblxyXG4uaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi52aXNpYmxlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY2VudGVyLXRleHQge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbi8qZWRpdCBwbGFjZWhvbGRlciovXHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgZm9udC1zaXplOjAuODVyZW07XHJcbn1cclxuXHJcbiBcclxuIFxyXG5cclxuIC8qdHJ5IGNvZGUgcHJvamVjdCAqL1xyXG4gIFxyXG5cclxuIFxyXG4gLnByb2plY3Qtc2Vje1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94OyBcclxuICAgIG1pbi1oZWlnaHQ6IDExMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgXHJcbiB9XHJcbiAgLnByb2plY3Qtc2VjIC5oZWFkaW5nc3tcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbiAgfVxyXG4gICBcclxuXHJcbiAgLnByb2plY3Qtc2Vje1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmM5ZjY7XHJcbiAgfVxyXG4gLm1haW4tdGltZWxpbmUtcHJve1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogNTBweCAwIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6MTAwcHg7XHJcbiBcclxufVxyXG4gXHJcbiBcclxuLm1haW4tdGltZWxpbmUtcHJvOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMzMzM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcbi5tYWluLXRpbWVsaW5lLXBybyAudGltZWxpbmV7XHJcbiAgbWFyZ2luOiAtNDJweCAwIDAgMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4ubWFpbi10aW1lbGluZS1wcm8gLnRpbWVsaW5lOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBib3JkZXI6IDIwcHggc29saWQgI0ZGOUIwMDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMiU7XHJcbiAgdG9wOiAyMnB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi5tYWluLXRpbWVsaW5lLXBybyAudGltZWxpbmUtY29udGVudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4IDYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1haW4tdGltZWxpbmUtcHJvIC50aW1lbGluZS1jb250ZW50OmhvdmVyeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuLm1haW4tdGltZWxpbmUtcHJvIC50aW1lbGluZS15ZWFye1xyXG4gIGNvbG9yOiAjRkY5QjAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuLm1haW4tdGltZWxpbmUtcHJvIC50aXRsZXtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWFpbi10aW1lbGluZS1wcm8gLnRpdGxlOmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjlCMDA7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luOiAxMnB4IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1haW4tdGltZWxpbmUtcHJvIC5kZXNjcmlwdGlvbntcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4ubWFpbi10aW1lbGluZS1wcm8gLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKTpiZWZvcmV7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMTIlO1xyXG59XHJcbi5tYWluLXRpbWVsaW5lLXBybyAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzIpOmJlZm9yZXsgYm9yZGVyLWNvbG9yOiAjRkY1MDNCOyB9XHJcbi5tYWluLXRpbWVsaW5lLXBybyAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzIpIC50aW1lbGluZS15ZWFyeyBjb2xvcjogI0ZGNTAzQjsgfVxyXG4ubWFpbi10aW1lbGluZS1wcm8gLnRpbWVsaW5lOm50aC1jaGlsZCg0bisyKSAudGl0bGU6YWZ0ZXJ7IGJhY2tncm91bmQtY29sb3I6ICNGRjUwM0I7IH1cclxuLm1haW4tdGltZWxpbmUtcHJvIC50aW1lbGluZTpudGgtY2hpbGQoNG4rMyk6YmVmb3JleyBib3JkZXItY29sb3I6ICMwMDlDRTY7IH1cclxuLm1haW4tdGltZWxpbmUtcHJvIC50aW1lbGluZTpudGgtY2hpbGQoNG4rMykgLnRpbWVsaW5lLXllYXJ7IGNvbG9yOiAjMDA5Q0U2OyB9XHJcbi5tYWluLXRpbWVsaW5lLXBybyAudGltZWxpbmU6bnRoLWNoaWxkKDRuKzMpIC50aXRsZTphZnRlcnsgYmFja2dyb3VuZC1jb2xvcjogIzAwOUNFNjsgfVxyXG4ubWFpbi10aW1lbGluZS1wcm8gLnRpbWVsaW5lOm50aC1jaGlsZCg0bis0KTpiZWZvcmV7IGJvcmRlci1jb2xvcjogI0IxNjBCRDsgfVxyXG4ubWFpbi10aW1lbGluZS1wcm8gLnRpbWVsaW5lOm50aC1jaGlsZCg0bis0KSAudGltZWxpbmUteWVhcnsgY29sb3I6ICNCMTYwQkQ7IH1cclxuLm1haW4tdGltZWxpbmUtcHJvIC50aW1lbGluZTpudGgtY2hpbGQoNG4rNCkgLnRpdGxlOmFmdGVyeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQjE2MEJEOyB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTBweCl7XHJcbiAgLnByb2plY3QtY29udGFpbmVye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE3MHB4O1xyXG4gICBcclxuICB9XHJcbiAgIFxyXG4gIC5tYWluLXRpbWVsaW5lLXBybyAudGltZWxpbmU6YmVmb3Jle1xyXG4gICAgICBsZWZ0OiA1JTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTIwcHg7XHJcbiAgfVxyXG4gIC5tYWluLXRpbWVsaW5lLXBybyAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pOmJlZm9yZXsgcmlnaHQ6IDUlOyB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAucHJvamVjdC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTcwcHg7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgIFxyXG4gICBcclxufVxyXG4gXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gIC5wcm9qZWN0LWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNzBweDtcclxuICAgXHJcbiAgfVxyXG4gICBcclxuICAubWFpbi10aW1lbGluZS1wcm86YmVmb3JleyB3aWR0aDogODUlOyB9XHJcbiAgLm1haW4tdGltZWxpbmUtcHJvIC50aW1lbGluZXsgbWFyZ2luOiAtMzhweCAwIDAgMDsgfVxyXG4gIC5tYWluLXRpbWVsaW5lLXBybyAudGltZWxpbmU6YmVmb3Jle1xyXG4gICAgICBib3JkZXItd2lkdGg6IDhweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgbGVmdDogMDtcclxuICB9XHJcbiAgLm1haW4tdGltZWxpbmUtcHJvIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbik6YmVmb3JleyByaWdodDogMDsgfVxyXG4gIC5tYWluLXRpbWVsaW5lLXBybyAudGltZWxpbmUtY29udGVudHsgd2lkdGg6IDg1JTsgfVxyXG4gIC5tYWluLXRpbWVsaW5lLXBybyAudGl0bGV7IGZvbnQtc2l6ZTogMThweDsgfVxyXG59XHJcblxyXG4gXHJcblxyXG4gXHJcbi8qZW5kIHByb2plY3QqL1xyXG4gIC5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIH1cclxuIFxyXG5cclxuLyogZWR1Y2F0aW9uICovXHJcbi5wcmljaW5ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDoxMjB2aDtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gICBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcblxyXG59XHJcbi5wcmljaW5nIC5tYWluLXRpbWVsaW5lNXtcclxuIG1hcmdpbi10b3A6MTAwcHg7XHJcbn1cclxuXHJcbi8qdGltbGluZSBzdGFydCovXHJcbi5tYWluLXRpbWVsaW5lNXsgICBcclxuICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlXHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZXtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOi03OXB4XHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpmaXJzdC1jaGlsZHtcclxuICBtYXJnaW4tdG9wOjBcclxufVxyXG4ubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lLWljb24sLm1haW4tdGltZWxpbmU1IC55ZWFye1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBib3R0b206MDtcclxuICByaWdodDowO1xyXG59XHJcbi5tYWluLXRpbWVsaW5lNSAudGltZWxpbmU6YWZ0ZXIsLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpiZWZvcmV7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBjbGVhcjpib3RoXHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpiZWZvcmV7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYm94LXNoYWRvdzotOHB4IDAgNXB4IC01cHggcmdiYSgwLDAsMCwuNSkgaW5zZXQ7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgcmlnaHQ6MDtcclxuICB6LWluZGV4OjJcclxufVxyXG4ubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lLWljb257XHJcbiAgd2lkdGg6MjEwcHg7XHJcbiAgaGVpZ2h0OjIxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIGJvcmRlcjoyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6I2Y0NDU1NjtcclxuICBib3JkZXItcmlnaHQtY29sb3I6I2Y0NDU1NjtcclxuICB6LWluZGV4OjE7XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZylcclxufVxyXG4ubWFpbi10aW1lbGluZTUgLnllYXJ7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDoxMTBweDtcclxuICBoZWlnaHQ6MTEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6MTEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG4gIGJveC1zaGFkb3c6MCAwIDIwcHggcmdiYSgwLDAsMCwuNCk7XHJcbiAgZm9udC1zaXplOjMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIGNvbG9yOiNmNDQ1NTY7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpXHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZS1jb250ZW50e1xyXG4gIHdpZHRoOjM1JTtcclxuICBmbG9hdDpyaWdodDtcclxuICBiYWNrZ3JvdW5kOiNmNDQ1NTY7XHJcbiAgcGFkZGluZzozMHB4IDIwcHg7XHJcbiAgbWFyZ2luOjUwcHggMDtcclxuICB6LWluZGV4OjE7XHJcbiAgcG9zaXRpb246cmVsYXRpdmV9XHJcbi5tYWluLXRpbWVsaW5lNSAudGltZWxpbmUtY29udGVudDpiZWZvcmV7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIHdpZHRoOjIwJTtcclxuICBoZWlnaHQ6MTVweDtcclxuICBiYWNrZ3JvdW5kOiNmNDQ1NTY7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjUwJTtcclxuICBsZWZ0Oi0yMCU7XHJcbiAgei1pbmRleDotMTtcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKVxyXG59XHJcbi5tYWluLXRpbWVsaW5lNSAudGl0bGV7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbWFyZ2luOjAgMCAxMHB4XHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC5kZXNjcmlwdGlvbntcclxuICBmb250LXNpemU6MTZweDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OjI0cHg7XHJcbiAgbWFyZ2luOjBcclxufVxyXG4ubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lOm50aC1jaGlsZCgybik6YmVmb3Jle1xyXG4gIGJveC1zaGFkb3c6OHB4IDAgNXB4IC01cHggcmdiYSgwLDAsMCwuNSkgaW5zZXRcclxufVxyXG4ubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lOm50aC1jaGlsZCgybikgLnRpbWVsaW5lLWljb257XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZSgtMTM1ZGVnKTtcclxuICBib3JkZXItdG9wLWNvbG9yOiNlOTdlMmU7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiNlOTdlMmVcclxufVxyXG4ubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lOm50aC1jaGlsZCgybikgLnllYXJ7XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpO1xyXG4gIGNvbG9yOiNlOTdlMmU7XHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50e1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50OmJlZm9yZXtcclxuICBsZWZ0OmF1dG87XHJcbiAgcmlnaHQ6LTIwJTtcclxufVxyXG4ubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lOm50aC1jaGlsZCgybikgLnRpbWVsaW5lLWNvbnRlbnQsLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50OmJlZm9yZXtcclxuICBiYWNrZ3JvdW5kOiNlOTdlMmU7XHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpudGgtY2hpbGQoM24pIC50aW1lbGluZS1pY29ue1xyXG4gIGJvcmRlci10b3AtY29sb3I6IzEzYWZhZTtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IzEzYWZhZVxyXG59XHJcbi5tYWluLXRpbWVsaW5lNSAudGltZWxpbmU6bnRoLWNoaWxkKDNuKSAueWVhcntcclxuICBjb2xvcjojMTNhZmFlO1xyXG59XHJcbi5tYWluLXRpbWVsaW5lNSAudGltZWxpbmU6bnRoLWNoaWxkKDNuKSAudGltZWxpbmUtY29udGVudCwubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lOm50aC1jaGlsZCgzbikgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3Jle1xyXG4gIGJhY2tncm91bmQ6IzEzYWZhZTtcclxufVxyXG4ubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lOm50aC1jaGlsZCg0bikgLnRpbWVsaW5lLWljb257XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjojMTA1NTcyO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjojMTA1NTcyXHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lNSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKSAueWVhcntcclxuICBjb2xvcjojMTA1NTcyO1xyXG59XHJcbi5tYWluLXRpbWVsaW5lNSAudGltZWxpbmU6bnRoLWNoaWxkKDRuKSAudGltZWxpbmUtY29udGVudCwubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lOm50aC1jaGlsZCg0bikgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3Jle1xyXG4gIGJhY2tncm91bmQ6IzEwNTU3MjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTE5OXB4KXsubWFpbi10aW1lbGluZTUgLnRpbWVsaW5le1xyXG4gIG1hcmdpbi10b3A6LTEwM3B4O1xyXG59XHJcbi5jb250YWN0dXMgZm9ybXtcclxuICBtYXJnaW4tdG9wOjU1cHg7XHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZS1jb250ZW50OmJlZm9yZXtcclxuICBsZWZ0Oi0xOCU7XHJcbn1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50OmJlZm9yZXtcclxuICByaWdodDotMTglO1xyXG59XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MHB4KXsubWFpbi10aW1lbGluZTUgLnRpbWVsaW5le1xyXG4gIG1hcmdpbi10b3A6LTEyN3B4O1xyXG59XHJcblxyXG4uY29udGFjdHVzIGZvcm17XHJcbiAgbWFyZ2luLXRvcDo1NXB4O1xyXG59XHJcbi5tYWluLXRpbWVsaW5lNSAudGltZWxpbmUtY29udGVudDpiZWZvcmV7XHJcbiAgbGVmdDotMiU7IFxyXG59XHJcbi5tYWluLXRpbWVsaW5lNSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAudGltZWxpbmUtY29udGVudDpiZWZvcmV7XHJcbiAgcmlnaHQ6LTIlO1xyXG59XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXsubWFpbi10aW1lbGluZTUgLnRpbWVsaW5le21hcmdpbi10b3A6MDtvdmVyZmxvdzpoaWRkZW59XHJcbi5tYWluLXRpbWVsaW5lNSAudGltZWxpbmU6YmVmb3JlLC5tYWluLXRpbWVsaW5lNSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKTpiZWZvcmV7Ym94LXNoYWRvdzpub25lfVxyXG4ubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lLWljb24sLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1pY29ue21hcmdpbi10b3A6LTMwcHg7bWFyZ2luLWJvdHRvbToyMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKX1cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC55ZWFyLC5tYWluLXRpbWVsaW5lNSAueWVhcnt0cmFuc2Zvcm06cm90YXRlKC0xMzVkZWcpfVxyXG4ubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lLWNvbnRlbnQsLm1haW4tdGltZWxpbmU1IC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50e3dpZHRoOjEwMCU7ZmxvYXQ6bm9uZTtib3JkZXItcmFkaXVzOjAgMCAyMHB4IDIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoyNXB4IDIwcHg7bWFyZ2luOjAgYXV0b31cclxuLm1haW4tdGltZWxpbmU1IC50aW1lbGluZS1jb250ZW50OmJlZm9yZSwubWFpbi10aW1lbGluZTUgLnRpbWVsaW5lOm50aC1jaGlsZCgybikgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3Jle3dpZHRoOjE1cHg7aGVpZ2h0OjI1cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yMnB4O2xlZnQ6NTAlO3otaW5kZXg6LTE7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDApfVxyXG4ucHJpY2luZyAsICAuY29udGFjdHVze1xyXG4gIGhlaWdodDphdXRvO1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxufVxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuLm91cnNlcnZpY2VzIHB7XHJcbiBmb250LXNpemU6MTVweDtcclxuICBcclxuICB9XHJcbiAgIFxyXG4uY29udGFjdHVzIHB7XHJcbiBmb250LXNpemU6MTVweDsgXHJcbiAgXHJcbn1cclxuXHJcbi5jb250YWN0dXMgZm9ybXtcclxuICBtYXJnaW4tdG9wOjU1cHg7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyc2V0IGgye1xyXG4gIGZvbnQtc2l6ZToyMnB4O1xyXG59XHJcblxyXG4uaGVhZGVyc2V0IGgxe1xyXG4gIGZvbnQtc2l6ZTogNDJweDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcblxyXG5cclxuLm5hdi1jb250YWluZXIgYXtcclxuICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICBjb2xvcjojMTZjOWY2IDtcclxuICBmb250LXNpemU6MzBweDtcclxuICBsZXR0ZXItc3BhY2luZzoxMHB4O1xyXG59XHJcblxyXG4gXHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gXHJcblxyXG5cclxuIFxyXG5cclxuIFxyXG5cclxuXHJcbiAiXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shorten_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shorten.pipe */ "O+Ca");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work.component */ "kH/F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _shorten_pipe__WEBPACK_IMPORTED_MODULE_6__["ShortenPipe"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "kH/F":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 2, vars: 0, template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "work works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map