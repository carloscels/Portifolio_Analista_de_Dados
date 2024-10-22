"use strict";
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 6356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ fadeIn)
/* harmony export */ });
const fadeIn = (direction, delay)=>{
    return {
        hidden: {
            y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
            opacity: 0,
            x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
            transition: {
                type: "tween",
                duration: 1.5,
                delay: delay,
                ease: [
                    0.25,
                    0.6,
                    0.3,
                    0.8
                ]
            }
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: delay,
                ease: [
                    0.25,
                    0.25,
                    0.25,
                    0.75
                ]
            }
        }
    };
};


/***/ })

};
;