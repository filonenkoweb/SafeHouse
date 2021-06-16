"use strict";function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}new Swiper(".intro__slider",{slidesPerView:1,pagination:{el:".intro__dots",clickable:!0},navigation:{nextEl:".intro__next",prevEl:".intro__prev"},loop:!0,speed:800,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{0:{slidesPerView:1},380:{slidesPerView:1.3,spaceBetween:15},520:{slidesPerView:1.5,spaceBetween:15},576:{slidesPerView:1.9,spaceBetween:15},769:{slidesPerView:1}}});var _step,tabBtns=document.querySelectorAll(".services__item"),tabContent=document.querySelectorAll(".services__content"),_iterator=_createForOfIteratorHelper(tabBtns);try{var _loop=function(){var e=_step.value;e.addEventListener("click",(function(){var t,r=e.getAttribute("data-tab"),a=document.querySelector(r),n=_createForOfIteratorHelper(tabContent);try{for(n.s();!(t=n.n()).done;){t.value.classList.remove("active")}}catch(e){n.e(e)}finally{n.f()}a.classList.add("active")}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}var _step2,tableBtns=document.querySelectorAll(".price__btn"),allTables=document.querySelectorAll(".price__table"),_iterator2=_createForOfIteratorHelper(tableBtns);try{var _loop2=function(){var e=_step2.value;e.addEventListener("click",(function(){var t,r=e.getAttribute("data-btn"),a=_createForOfIteratorHelper(allTables);try{for(a.s();!(t=a.n()).done;){t.value.classList.remove("active")}}catch(e){a.e(e)}finally{a.f()}var n,o=_createForOfIteratorHelper(tableBtns);try{for(o.s();!(n=o.n()).done;){n.value.classList.remove("active")}}catch(e){o.e(e)}finally{o.f()}document.querySelector(r).classList.add("active"),e.classList.add("active")}))};for(_iterator2.s();!(_step2=_iterator2.n()).done;)_loop2()}catch(e){_iterator2.e(e)}finally{_iterator2.f()}var menuList=document.querySelector(".menu__list");document.addEventListener("click",(function(e){var t=e.target,r=t==menuList||menuList.contains(t),a=t==burger,n=menu.classList.contains("active");r||a||!n||(menu.classList.remove("active"),document.body.classList.remove("acitve"),burger.classList.remove("active"))}));var burger=document.querySelector(".burger"),menu=document.querySelector(".menu");burger.addEventListener("click",(function(){burger.classList.toggle("active"),menu.classList.toggle("active"),document.body.classList.toggle("lock")}));