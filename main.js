(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getCardList()])}},{key:"_getInfo",value:function(){return function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}},{key:"getCardList",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._getInfo())}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._getInfo())}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getInfo())}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getInfo())}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getInfo())}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this._headers}).then(this._getInfo())}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._getInfo())}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getInfo())}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o){var i=r.handleCardClick,u=r.addLike,a=r.deleteLike,c=r.handleDeleteCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=t,this._cardLikes=t.likes,this._cardId=t._id,this._cardOwnerId=this._card.owner._id,this._cardName=t.name,this._cardLink=t.link,this._userId=o,this._template=n,this._handleCardClick=i,this._addLike=u,this._deleteLike=a,this._handleDeleteCardClick=c}var t,r;return t=e,(r=[{key:"_getElement",value:function(){return document.querySelector(this._template).content.querySelector(".element").cloneNode(!0)}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_isLiked",value:function(){var e=this;this._cardLikes.forEach((function(t){t._id===e._userId&&e._likeButton.classList.add("element__button-like_active")}))}},{key:"setLikesQuantity",value:function(e){this._likeCounter.textContent=e.likes.length}},{key:"addLike",value:function(){this._likeButton.classList.add("element__button-like_active")}},{key:"deleteLike",value:function(){this._likeButton.classList.remove("element__button-like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._image.addEventListener("click",(function(){e._handleCardClick(e._card)})),this._deleteButton.addEventListener("click",this._handleDeleteCardClick),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__button-like_active")?e._deleteLike(e._card):e._addLike(e._card)}))}},{key:"generateCard",value:function(){return this._element=this._getElement(),this._deleteButton=this._element.querySelector(".element__button-delete"),this._likeButton=this._element.querySelector(".element__button-like"),this._likeCounter=this._element.querySelector(".element__like-count"),this._image=this._element.querySelector(".element__image"),this._title=this._element.querySelector(".element__title"),this._setEventListeners(),this._title.textContent=this._card.name,this._image.alt=this._card.name,this._image.src=this._card.link,this._cardOwnerId!=this._userId&&this._deleteButton.remove(),this._isLiked(),this._likeCounter.textContent=this._cardLikes.length,this._element}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_hasNotInputValues",value:function(){return this._inputList.every((function(e){return 0===e.value.length}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)||this._hasNotInputValues(this._inputList)?this.disableSubmitButton(this._buttonElement,this._inactiveButtonClass):this._enableSubmitButton(this._buttonElement,this._inactiveButtonClass)}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._handleEscClose=this._handleEscClose.bind(this),this._submitButton=this._popup.querySelector(".popup__button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__button-close")&&e.close()}))}}])&&u(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},l(e,t,n||e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n._submitButtonText=n._submitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;l(h(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){l(h(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonText}}])&&s(t.prototype,n),u}(a);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},m(e,t,n||e)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popup=document.querySelector(t._popupSelector),t._image=t._popup.querySelector(".popup__view-card-photo"),t._name=t._popup.querySelector(".popup__view-card-caption"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._name.textContent=t,this._image.alt=t,this._image.src=n,m(k(u.prototype),"open",this).call(this)}}])&&y(t.prototype,n),u}(a);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},S(e,t,n||e)}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function C(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function u(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=r,n._submitButtonText=n._submitButton.textContent,n._form=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"open",value:function(e){this._data=e,S(O(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;S(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._data),e.close()}))}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Удаление...":this._submitButtonText}}])&&E(t.prototype,n),u}(a);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}}])&&B(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q,T,R=function(){function e(t){var n=t.name,r=t.about,o=t.avatar,i=t.id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o),this._id=document.querySelector(i)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar,this._id=e._id}}])&&P(t.prototype,n),e}(),x=document.querySelector(".profile__avatar-edit"),U=document.querySelector(".popup__form_type_avatar"),A=(document.querySelector(".popup__input_type_avatar-link"),document.querySelector(".profile__button-edit")),D=document.querySelector(".popup__form_type_profile"),V=document.querySelector(".popup__input_type_username"),F=document.querySelector(".popup__input_type_about"),N=document.querySelector(".profile__button-add"),H=document.querySelector(".popup__form_type_card"),J=document.querySelector(".elements"),M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{authorization:"8640dfea-edcf-4553-ad3c-1569bb70c97f","Content-Type":"application/json"}});new i(M,D).enableValidation();var z=new i(M,H);z.enableValidation();var $=new i(M,U);$.enableValidation();var K=new j({renderer:function(e){K.addItem(X(e,q))}},J);G.getAppInfo().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo(o),q=o._id,K.renderItems(i)})).catch((function(e){return console.log("Ошибка загрузки данных с сервера: ".concat(e))}));var W=new R({name:".profile__username",about:".profile__about",avatar:".profile__avatar-image"});function X(e,t){var n=new r(e,"#element-template",{handleCardClick:Y.open.bind(Y),addLike:function(e){G.addLike(e).then((function(e){n.setLikesQuantity(e),n.addLike(e)})).catch((function(e){return console.log("Произошла ошибка: ".concat(e))}))},deleteLike:function(e){G.deleteLike(e).then((function(e){n.setLikesQuantity(e),n.deleteLike(e)})).catch((function(e){return console.log("Произошла ошибка: ".concat(e))}))},handleDeleteCardClick:function(){T=n,te.open(e)}},t);return n.generateCard()}var Y=new g(".popup_type_view-card");Y.setEventListeners();var Z=new _(".popup_type_edit-profile",{submitForm:function(e){Z.renderLoading(!0),G.updateUserInfo(e).then((function(e){W.setUserInfo(e),Z.close()})).catch((function(e){return console.log("Произошла ошибка: ".concat(e))})).finally((function(){Z.renderLoading(!1)}))}});Z.setEventListeners();var ee=new _(".popup_type_add-card",{submitForm:function(e){ee.renderLoading(!0),G.addCard(e).then((function(e){ee.close(),K.addItem(X(e,q))})).catch((function(e){return console.log("Произошла ошибка: ".concat(e))})).finally((function(){ee.renderLoading(!1)}))}});ee.setEventListeners();var te=new I(".popup_type_delete-card",{submitForm:function(e){te.renderLoading(!0),G.deleteCard(e._id).then((function(){T.removeCard(),te.close()})).catch((function(e){return console.log("Произошла ошибка: ".concat(e))})).finally((function(){te.renderLoading(!1)}))}});te.setEventListeners();var ne=new _(".popup_type_avatar",{submitForm:function(e){ne.renderLoading(!0),G.changeAvatar(e).then((function(e){W.setUserInfo(e),ne.close()})).catch((function(e){return console.log("Произошла ошибка: ".concat(e))})).finally((function(){ne.renderLoading(!1)}))}});ne.setEventListeners(),A.addEventListener("click",(function(){var e=W.getUserInfo();V.value=e.name,F.value=e.about,Z.open()})),N.addEventListener("click",(function(){ee.open(),z.disableSubmitButton()})),x.addEventListener("click",(function(){ne.open(),$.disableSubmitButton()}))})();