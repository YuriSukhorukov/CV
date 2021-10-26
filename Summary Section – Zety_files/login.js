"undefined"==typeof clearInvalidPswd&&(clearInvalidPswd=!1),"undefined"==typeof loginAttemptsBeforeCaptcha&&(loginAttemptsBeforeCaptcha=null),"undefined"==typeof loginAttemptsBeforeForgotPswd&&(loginAttemptsBeforeForgotPswd=null),function(e){("object"!=typeof exports||"undefined"==typeof module)&&"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})}function s(e){return e&&void 0!==e.length}function n(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function r(n,o){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e,t=1===n._state?o.onFulfilled:o.onRejected;if(null!==t){try{e=t(n._value)}catch(e){return void c(o.promise,e)}a(o.promise,e)}else(1===n._state?a:c)(o.promise,n._value)})):n._deferreds.push(o)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void u((o=n,r=e,function(){o.apply(r,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}var o,r}function c(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)r(e,e._deferreds[t]);e._deferreds=null}function u(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}var t=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(o,e){var t=new this.constructor(n);return r(this,new function(e,t,n){this.onFulfilled="function"==typeof o?o:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(0,e,t)),t},i.prototype.finally=e,i.all=function(t){return new i(function(r,i){if(!s(t))return i(new TypeError("Promise.all accepts an array"));var a=Array.prototype.slice.call(t);if(0===a.length)return r([]);for(var c=a.length,e=0;a.length>e;e++)!function t(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if("function"==typeof o)return o.call(e,function(e){t(n,e)},i),0}a[n]=e,0==--c&&r(a)}catch(e){i(e)}}(e,a[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(r){return new i(function(e,t){if(!s(r))return t(new TypeError("Promise.race accepts an array"));for(var n=0,o=r.length;n<o;n++)i.resolve(r[n]).then(e,t)})},i._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){t(e,0)},i._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in o?o.Promise.prototype.finally||(o.Promise.prototype.finally=e):o.Promise=i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var n=0,o=this.length;n<o;++n)e.call(t,this[n],n,this)}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),o=1;o<arguments.length;o++){var r=arguments[o];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},writable:!0,configurable:!0}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})});var LOGIN=LOGIN||{};function showLoginModal(e,t){targetUrlToRevertFromAccountsGlobal=e,showAccountsCcpaGlobal=t;e=LOGIN.common.userStatus();e&&e.IsUserLoggedIn&&!showAccountsCcpaGlobal||(LOGIN.Events&&"function"==typeof LOGIN.Events.showView?LOGIN.Events.showView():(document.getElementById("accountsTempOvelay")?document.getElementById("accountsTempOvelay").style.display="block":((t=document.createElement("div")).id="accountsTempOvelay",t.style="position: fixed; display: block; width: 100 %; height: 100 %; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 1000; cursor: pointer;",(e=document.createElement("img")).style="position: absolute;top:50%;left:50%;font-size:50px;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);",e.src=LOGIN.common.getHostURL()+"/Content/Images/",-1<document.domain.indexOf("live")?e.src+="l.gif":-1<document.domain.indexOf("-now")?e.src+="r.gif":e.src+="m.gif",t.appendChild(e),document.body.appendChild(t)),LOGIN.Accounts.loadView().then(function(e){var t=setInterval(function(){LOGIN.Events&&"function"==typeof LOGIN.Events.showView&&(LOGIN.Events.showView(),document.getElementsByTagName("body")[0].style.overflow="hidden",document.getElementById("accountsTempOvelay")&&(document.getElementById("accountsTempOvelay").style.display="none"),clearInterval(t))},100)})))}function accountsLogout(e,t){LOGIN.Accounts.logOut().then(function(){"undefined"!=typeof analytics&&analytics&&analytics.reset&&analytics.reset(),"undefined"!=typeof mixpanel&&mixpanel&&mixpanel.reset&&mixpanel.reset(),"function"==typeof postLogoutMethod&&postLogoutMethod(t)})}function GetUserStatus(e){return LOGIN.common.userStatus()}function onloadAccountsCaptchCallback(){LOGIN.Accounts.Captcha.loaded=!0}function getQuerystring(e,t){null==t&&(t=""),e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");e=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return null==e?t:e[1]}function onXingAuthLogin(e){e.user?(output="Successful login for "+e.user.display_name,LOGIN.Accounts.loginXingUserValidate(e)):e.error&&alert(e.error)}LOGIN.postLoginRedirectURL,LOGIN.productCD,LOGIN.Accounts=function(c){c.SubDomain="",c.gateWay="/signin",c.gateWayPattern="^/(nl)\\b",c.localCheck=!0,c.AccountsPagePath=["/signin","/membership/","/mobile/forgotpassword"],c.builderPaths={".zety.com":"builder",".zety.fr":"app"},c.currentlyOnAccountsPage=function(){var e=document.domain.substring(0,document.domain.indexOf("."));if(0<c.SubDomain.length&&-1<e.indexOf(c.SubDomain))return!0;if(0<c.gateWay.length&&0==location.pathname.toLowerCase().indexOf(c.gateWay))return!0;for(var t=0;t<c.AccountsPagePath.length;t++)if(0==location.pathname.toLowerCase().indexOf(c.AccountsPagePath[t]))return!0;return!1},c.setup=function(e,t,n){LOGIN.postLoginRedirectURL=e,LOGIN.productCD=t,n&&c.loadView()},c.clearPasswordField=function(){document.querySelector("[type='password']")&&(document.querySelector("[type='password']").value="")};function e(e,t,n){(e=document.getElementById(e))&&e.addEventListener(t,n)}function t(){e("btnSignup","click",function(){event.preventDefault();var e=document.getElementById("widget-user-fn").value,t=document.getElementById("widget-user-ln").value;document.querySelectorAll(".widget-error-text").forEach(function(e){e.classList.add("hide")});var n,o=LOGIN.validation.validateCredentials("widget-user-mail","email").value,r=LOGIN.validation.validateCredentials("widget-user-pwd","password").value;LOGIN.validation.isValidForm()&&LOGIN.Accounts.Captcha.validateCaptcha(!0)&&(n=!(n=document.getElementById("chkOptinResponse"))||1==n.checked?1:0,document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="block"),c.registerUser(e,t,o,r,null,null,n,null,null,null,null,null,null,!0,!0).then(function(e){if(!e||"NEWLY_CREATED"!=e.status&&"SUCCESS"!=e.status&&"EXISTING_USER"!=e.status&&"USER_SWAP"!=e.status)e&&"INVALID_CREDENTIALS"==e.status?(document.getElementById("err-invalid-credentials-signup").classList.remove("hide"),clearInvalidPswd&&c.clearPasswordField(),LOGIN.Accounts.Captcha.logFailAttempt(!0)):e&&"INVALID_PASSWORD"==e.status?(document.getElementById("err-invalid-passwrod-signup").classList.remove("hide"),clearInvalidPswd&&c.clearPasswordField(),LOGIN.Accounts.Captcha.logFailAttempt(!0)):e&&"ZETY_USER_FOUND"==e.status&&(location.href=e.RedirectUrl);else if(0<document.getElementsByClassName("_widget-user-popup").length)i(e);else{var t=e.redirectUrl;if("object"==typeof headerfooter&&"function"==typeof headerfooter.loginuser&&headerfooter.loginuser(),location.href!=t)return void(location.href=t);LOGIN.common.closeLoginModel(),"NEWLY_CREATED"==e.status?"function"==typeof postRegisterMethod&&postRegisterMethod(!0,targetUrlToRevertFromAccountsGlobal,e.userid,e.redirectUrl||""):"function"==typeof postLoginMethod&&postLoginMethod(targetUrlToRevertFromAccountsGlobal,e.userid,e.redirectUrl||"")}document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="none")},function(t){document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="none");try{var e=JSON.stringify(t);console.log(e)}catch(e){console.log(t)}}))}),e("btnSignIn","click",function(){event.preventDefault(),document.querySelectorAll(".widget-error-text").forEach(function(e){e.classList.add("hide")});var e,t=LOGIN.validation.validateCredentials("widget-user-email","email").value,n=LOGIN.validation.validateCredentials("widget-user-password","password").value;LOGIN.validation.isValidForm()&&LOGIN.Accounts.Captcha.validateCaptcha(!1)?(document.getElementById("captchaValidationErr")&&document.getElementById("captchaValidationErr").classList.add("d-none"),document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="block"),e=!(e=document.getElementById("chkOptinResponse"))||1==e.checked?1:0,c.loginUser(t,n,null,null,e,null,null,null,null,null,null,!0,!0).then(function(e){if(!e||"NEWLY_CREATED"!=e.status&&"SUCCESS"!=e.status&&"EXISTING_USER"!=e.status&&"USER_SWAP"!=e.status)e&&"INVALID_CREDENTIALS"==e.status?(document.getElementById("err-invalid-credentials").classList.remove("hide"),clearInvalidPswd&&c.clearPasswordField(),LOGIN.Accounts.Captcha.logFailAttempt(!1)):e&&"INVALID_PASSWORD"==e.status?(document.getElementById("err-invalid-passwrod").classList.remove("hide"),clearInvalidPswd&&c.clearPasswordField(),LOGIN.Accounts.Captcha.logFailAttempt(!1)):e&&"INVALID_USER"==e.status?(document.getElementById("err-invalid-user").classList.remove("hide"),LOGIN.Accounts.Captcha.logFailAttempt(!1)):e&&"HLM_MPR_USR"==e.status?location.href=e.redirectUrl:e&&"ZETY_USER_FOUND"==e.status?location.href=e.RedirectUrl:e&&"PASSWORD_EXPIRED"==e.status&&(alert("Your password has expired. We have sent you an email to reset your password. Please check your email and follow the directions provided to retrieve your password."),document.getElementById("err-password-expire").classList.remove("hide"));else if(0<document.getElementsByClassName("_widget-user-popup").length)i(e);else{var t=e.redirectUrl;if("object"==typeof headerfooter&&"function"==typeof headerfooter.loginuser&&headerfooter.loginuser(),location.href!=t)return void(location.href=t);LOGIN.common.closeLoginModel(),"NEWLY_CREATED"==e.status?"function"==typeof postRegisterMethod&&postRegisterMethod(!0,targetUrlToRevertFromAccountsGlobal,e.userid,e.redirectUrl||""):"function"==typeof postLoginMethod&&postLoginMethod(targetUrlToRevertFromAccountsGlobal,e.userid,e.redirectUrl||"")}document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="none")},function(){document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="none")})):LOGIN.Accounts.Captcha.validateCaptcha(!1)||document.getElementById("captchaValidationErr")&&document.getElementById("captchaValidationErr").classList.remove("d-none")}),e("btn-fb-login","click",function(){n("FCBK")}),e("btn-save-preferences","click",function(){event.preventDefault();for(var e=document.querySelectorAll('input[data-name][type="checkbox"]'),t={},n=0;n<e.length;n++)t[e[n].attributes["data-name"].value]=e[n].checked;LOGIN.common.ajax("/email/preferences","POST",JSON.stringify(t),"text json",!0,"application/json; charset=utf-8",function(e){document.getElementById("txt-preferences-saved").classList.remove("hide-response-message"),setTimeout(function(){document.getElementById("txt-preferences-saved").classList.add("hide-response-message")},3e3)},function(e,t){})}),function(){for(var t=document.querySelectorAll('input[data-name][type="checkbox"]'),e=0;e<t.length;e++)t[e].onclick=function(){if("UnSubscribeAll"==this.attributes["data-name"].value){if(this.checked){for(var e=0;e<t.length;e++)t[e].attributes.checked=!1;this.attributes.checked=!0}}else document.getElementById("chk-remove-all").attributes.checked=!1}}(),e("btn-google-login","click",function(){n("GGLE")}),e("btn-linkedin-login","click",function(){n("LKDN")}),e("btn-pole-emploi-login","click",function(){n("PLEP")}),e("btn-fb-signup","click",function(){n("FCBK")}),e("btn-google-signup","click",function(){n("GGLE")}),e("btnSubmitMail","click",function(){event.preventDefault();var e=LOGIN.validation.validateCredentials("widget-user-forgot-mail","email").value;LOGIN.validation.isValidForm()&&(document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="block"),c.forgotPassword(e,null,"",null,!0).then(function(e){document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="none")},function(){document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="none")}))}),e("btn-ResetPassword","click",function(){event.preventDefault();var e=document.getElementById("password").value,t=document.getElementById("confirm-password").value;LOGIN.validation.validatePassword(e,t)&&(document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="block"),c.resetPassword(e).then(function(e){location.href=e.redirectUrl},function(e){document.getElementById("signin-accounts-loader")&&(document.getElementById("signin-accounts-loader").style.display="none")}))}),e("createGuestUser","click",function(){c.createGuest(null,null,function(e){})}),e("registerGuestUser","click",function(){var e,t,n,o,r=LOGIN.common.userStatus();r.User&&r.User.UserId&&(e=document.getElementById("widget-user-fn").value,t=document.getElementById("widget-user-ln").value,n=document.getElementById("widget-user-mail").value,o=document.getElementById("widget-user-pwd").value,c.registerGuest(r.User.UserId,n,o,e,t,null,0,null,null,function(e){}))})}function n(e){"GGLE"===e?c.loginGoogle().then(function(e){0<document.getElementsByClassName("_widget-user-popup").length?i(e):location.href=e.redirectUrl}):"LKDN"===e?c.loginLinkedIn().then(function(e){0<document.getElementsByClassName("_widget-user-popup").length?i(e):location.href=e.redirectUrl}):"PLEP"===e?c.loginPoleEmploi().then(function(e){0<document.getElementsByClassName("_widget-user-popup").length?i(e):location.href=e.redirectUrl}):c.loginFB().then(function(e){0<document.getElementsByClassName("_widget-user-popup").length?i(e):location.href=e.redirectUrl})}var i=function(e){LOGIN.common.closeLoginModel(),"object"==typeof headerfooter&&"function"==typeof headerfooter.loginuser&&headerfooter.loginuser(),"NEWLY_CREATED"==e.status?"function"==typeof postRegisterMethod&&postRegisterMethod(!0,targetUrlToRevertFromAccountsGlobal,e.userid,e.redirectUrl||""):"function"==typeof postLoginMethod&&postLoginMethod(targetUrlToRevertFromAccountsGlobal,e.userid,e.redirectUrl||"")};c.IsNetworkLegacyUser=function(e){return new Promise(function(t,n){LOGIN.common.ajax("/users/isnetworklegacy","POST",JSON.stringify({email:e}),"text json",!0,"application/json; charset=utf-8",function(e){t(e)},function(e,t){n(e,t)})})},c.resetPassword=function(e,t){var o={password:LOGIN.common.encodePassword(e)};return new Promise(function(t,n){LOGIN.common.ajax("/accounts/v4/resetpassword","POST",JSON.stringify(o),"text json",!0,"application/json; charset=utf-8",function(e){e.status?t(e):(alert(e.message),n(e.message,e.message))},function(e,t){n(e,t)})})},c.forgotPassword=function(e,t,n,o,r,i){var a={Email:e,RedirectUrl:n||LOGIN.common.getQueryStringValue("redirectURL"),ProductCD:t||LOGIN.common.getProductCD(),resetPageUrl:i||""};return r=r||!1,new Promise(function(t,n){LOGIN.common.ajax("/accounts/v4/forgotpassword","POST",JSON.stringify(a),"text json",!0,"application/json; charset=utf-8",function(e){e&&(c.currentlyOnAccountsPage()||r)&&("SUCCESS"===e.Status?(document.getElementById("user-not-exist-msg").classList.add("hide"),document.getElementById("widget-success").classList.remove("hide"),document.getElementById("forgot-password-form").classList.add("hide"),document.getElementById("widget-p2").classList.add("hide")):"USER_NOT_EXIST"===e.Status?document.getElementById("user-not-exist-msg").classList.remove("hide"):"ERROR"===e.Status&&document.getElementById("user-not-exist-msg").classList.add("hide")),t(e)},function(e){n(e)})})},c.registerUser=function(e,t,n,o,r,i,a,c,s,l,u,d,m,f,g){m=m||location.href,g=g||f||!1;var p={FirstName:e,LastName:t,UserName:n,Password:LOGIN.common.encodePassword(o),ProductCD:r||LOGIN.common.getProductCD(),Product:LOGIN.common.getProduct(i),OptinResponse:a,OtherTraits:c,PreviousEmail:s,Provider:u,PUID:d,OtherProperties:l,GAClientID:LOGIN.common.getGAClientId(),MixPanelContextualProprties:LOGIN.common.getMixpanelContextProps(),OriginatingURL:encodeURIComponent(m),Referrer:encodeURIComponent(document.referrer),CalledFromAccountsUI:f||!1};return new Promise(function(t,n){LOGIN.common.ajax("/accounts/v"+(g?"5":"4")+"/register","POST",JSON.stringify(p),"text json",!0,"application/json; charset=utf-8",function(e){I(e),t(e)},function(e,t){n(e,t)})})},c.loginUser=function(e,t,n,o,r,i,a,c,s,l,u,d,m){u=u||location.href,m=m||d||!1;var f={UserName:e,Password:LOGIN.common.encodePassword(t),ProductCD:n||LOGIN.common.getProductCD(),Product:LOGIN.common.getProduct(o),OptinResponse:r,OtherTraits:i,PreviousEmail:a,Provider:s,PUID:l,OtherProperties:c,GAClientID:LOGIN.common.getGAClientId(),MixPanelContextualProprties:LOGIN.common.getMixpanelContextProps(),OriginatingURL:encodeURIComponent(u),Referrer:encodeURIComponent(document.referrer),CalledFromAccountsUI:d||!1};return new Promise(function(t,n){LOGIN.common.ajax("/accounts/v"+(m?"5":"4")+"/login","POST",JSON.stringify(f),"text json",!0,"application/json; charset=utf-8",function(e){I(e),t(e)},function(e,t){n(e,t)})})},c.xingUserModel=null,c.xingPortalCallback=null,c.loginXingUser=function(e,t,n,o,r,i,a,c,s){RenderXing(s),a=a||location.href,this.xingUserModel={UserName:"",Password:"dummy",ProductCD:e||LOGIN.common.getProductCD(),Product:LOGIN.common.getProduct(t),OptinResponse:n,OtherTraits:o,PreviousEmail:r,OtherProperties:i,GAClientID:LOGIN.common.getGAClientId(),MixPanelContextualProprties:LOGIN.common.getMixpanelContextProps(),OriginatingURL:encodeURIComponent(a),Referrer:encodeURIComponent(document.referrer)},this.xingPortalCallback=c},c.loginXingUserValidate=function(e){null==this.xingUserModel&&(this.xingUserModel={UserName:e.user.active_email,Password:"dummyPass",ProductCD:LOGIN.common.getProductCD(),Product:LOGIN.common.getProduct(),GAClientID:LOGIN.common.getGAClientId(),MixPanelContextualProprties:LOGIN.common.getMixpanelContextProps(),OriginatingURL:encodeURIComponent(location.href),Referrer:encodeURIComponent(document.referrer)});e={UserStr:JSON.stringify(e.user),Model:this.xingUserModel};LOGIN.common.ajax("/accounts/v1/xing/login","POST",JSON.stringify(e),"text json",!0,"application/json; charset=utf-8",function(e){null!=LOGIN.Accounts.xingPortalCallback?(I(e),LOGIN.Accounts.xingPortalCallback(e)):"VALIDATION_FAILED"==e.status?alert("Please use different way of login"):location.href=e.redirectUrl},function(e,t){console.log(e),console.log(t)})},c.RenderXing=function(e){var t,n,o;(t=document).getElementById("lwx")||((n=t.createElement("script")).type="xing/login",o=document.createTextNode('{"consumer_key": "3450ff1787738c92fdc7","size": "xlarge"}'),n.appendChild(o),e=e||"divBtnXing",t.getElementById(e).appendChild(n),(n=t.createElement("script")).id="lwx",n.src="https://www.xing-share.com/plugins/login.js",t.getElementsByTagName("head")[0].appendChild(n))};var s=0;c.createGuest=function(i,a,e){return e=e||location.href,new Promise(function(n,o){var r;s<3&&(r={ProductCD:i||LOGIN.common.getProductCD(),MixPanelContextualProperties:a||LOGIN.common.getMixpanelContextProps(),OriginatingURL:encodeURIComponent(e),Referrer:encodeURIComponent(document.referrer),FireOnlyEvents:!1,GAClientID:LOGIN.common.getGAClientId()},LOGIN.common.ajax("/accounts/v4/createguestuser","POST",JSON.stringify(r),"text json",!0,"application/json; charset=utf-8",function(e){var t;n(e),e.EventFired||(LOGIN.common.setCookie("mixPanelEventsPending","1",null,10),t=setInterval(function(){var e=LOGIN.common.readCookie("mixPanelEventsPending");e&&"1"==e&&("undefined"==typeof analytics||"undefined"==typeof mixpanel||void 0===mixpanel.get_distinct_id)||(r.FireOnlyEvents=!0,LOGIN.common.ajax("/accounts/v4/createguestuser","POST",JSON.stringify(r),"text json",!0,"application/json; charset=utf-8"),window.clearInterval(t))},1e3))},function(e,t){s+=1,setTimeout(function(){c.createGuest(i,a),o(e,t)},2e3)}))})},c.registerGuest=function(o,r,i,a,c,s,l,u,d,m,f,g,p,h){return h=h||location.href,new Promise(function(t,n){var e=LOGIN.common.userStatus();e&&e.User&&0==e.User.Role?(e={FirstName:a,LastName:c,UserName:r,Password:LOGIN.common.encodePassword(i),GuestUserID:o,ProductCD:s||LOGIN.common.getProductCD(),Product:LOGIN.common.getProduct(l),OptinResponse:u,PreviousEmail:d,OtherTraits:m,Provider:g,PUID:p,OtherProperties:f,GAClientID:LOGIN.common.getGAClientId(),MixPanelContextualProprties:LOGIN.common.getMixpanelContextProps(),OriginatingURL:encodeURIComponent(h),Referrer:encodeURIComponent(document.referrer)},LOGIN.common.ajax("/accounts/v4/registerguestuser","POST",JSON.stringify(e),"text json",!0,"application/json; charset=utf-8",function(e){I(e),t(e)},function(e,t){n(e,t)})):n(new Error("Not a valid guest."))})},c.loginFB=function(r,i,a,c,s,l,u){return new Promise(function(t,e){d("FCBK",r,i,a,c,s,l,u);var n=0;500<n&&e(new Error("Please try again"));var o=setInterval(function(){var e=LOGIN.common.readCookie("externaluserstatus");e&&(LOGIN.common.deleteCookie("externaluserstatus"),LOGIN.common.deleteCookie("private_mx_acc"),clearInterval(o),I(e),t(JSON.parse(e)),LOGIN.common.deleteCookie("private_mx_acc")),n+=1},200)})},c.loginGoogle=function(r,i,a,c,s,l,u){return new Promise(function(t,e){d("GGLE",r,i,a,c,s,l,u);var n=0;500<n&&e(new Error("Please try again"));var o=setInterval(function(){var e=LOGIN.common.readCookie("externaluserstatus");e&&(LOGIN.common.deleteCookie("externaluserstatus"),clearInterval(o),I(e),t(JSON.parse(e)),LOGIN.common.deleteCookie("private_mx_acc")),n+=1},200)})},c.loginLinkedIn=function(r,i,a,c,s,l,u){return new Promise(function(t,e){d("LKDN",r,i,a,c,s,l,u);var n=0;500<n&&e(new Error("Please try again"));var o=setInterval(function(){var e=LOGIN.common.readCookie("externaluserstatus");e&&(LOGIN.common.deleteCookie("externaluserstatus"),clearInterval(o),I(e),t(JSON.parse(e)),LOGIN.common.deleteCookie("private_mx_acc")),n+=1},200)})},c.loginPoleEmploi=function(r,i,a,c,s,l,u){return new Promise(function(t,e){d("PLEP",r,i,a,c,s,l,u);var n=0;500<n&&e(new Error("Please try again"));var o=setInterval(function(){var e=LOGIN.common.readCookie("externaluserstatus");e&&(LOGIN.common.deleteCookie("externaluserstatus"),clearInterval(o),I(e),t(JSON.parse(e)),LOGIN.common.deleteCookie("private_mx_acc")),n+=1},200)})};var d=function(e,t,n,o,r,i,a,c){n=n||LOGIN.common.getProductCD(),o=LOGIN.common.getProduct(o),i=i?encodeURIComponent(JSON.stringify(i)):"",a=a?encodeURIComponent(JSON.stringify(a)):"",r=r||"",t=t||location.href,c=void 0===c||isNaN(c)?1:c;var s="";LOGIN.common.isAnswerBase()&&(s=LOGIN.common.getQueryStringValue("redirect_uri")),LOGIN.common.readCookie("mixpanelprops")||LOGIN.common.setCookie("private_mx_acc",LOGIN.common.getMixpanelContextProps(),null,180);c=LOGIN.common.getHostURL()+"/accounts/v4/externalloginrequest?provider="+e+"&state="+e+"|"+encodeURIComponent(s)+"|"+n+"|"+LOGIN.common.isAnswerBase()+"|true|"+encodeURIComponent(t)+"|"+LOGIN.common.getGAClientId()+"|"+o+"|"+r+"|"+i+"|"+a+"|"+c+"|"+encodeURIComponent(document.referrer);return window.externalWindowRef=window.open(c,e,"width=900,height=500,left=100"),window.externalWindowRef};c.loginGoogleToken=function(e,t,n,o,r,i,a,c){t=t||location.href;var s={FirstName:"",LastName:"",UserName:"dummy@dummy.com",Password:"dummyPass",ProductCD:n||LOGIN.common.getProductCD(),Product:LOGIN.common.getProduct(o),OptinResponse:c,PreviousEmail:r,OtherTraits:i,Provider:"GGLE",OtherProperties:a,GAClientID:LOGIN.common.getGAClientId(),MixPanelContextualProprties:LOGIN.common.getMixpanelContextProps(),OriginatingURL:encodeURIComponent(t),Referrer:encodeURIComponent(document.referrer),IdToken:e};return new Promise(function(t,n){LOGIN.common.ajax("/accounts/v4/googleonetap","POST",JSON.stringify(s),"text json",!0,"application/json; charset=utf-8",function(e){I(e),t(e)},function(e,t){n(e,t)})})},c.getClaims=function(e,o){return new Promise(function(t,n){e=!!e,o=!!o,LOGIN.common.ajax("/accounts/v4/getclaims","POST",JSON.stringify({decryptOnlyAuthCookie:e,includeRedirectUrl:o}),"",!0,"application/json",function(e){e.claims.hasOwnProperty("forceRedirect")?window.location=e.claims.forceRedirect:t(e)},function(e){n(e)})})};var o=null;c.logOut=function(){return null==o||5<(new Date-o)/1e3?new Promise(function(t,n){o=new Date,LOGIN.common.ajax("/accounts/v4/logout","POST","","text json",!0,"application/json; charset=utf-8",function(e){o=new Date,localStorage.removeItem("toupv"),t(e)},function(e,t){n(e,t)})}):new Promise(function(e,t){e()})},c.logOutV2=function(){return null==o||5<(new Date-o)/1e3?new Promise(function(t,n){o=new Date,LOGIN.common.ajax("/accounts/logout?isAjax=true","GET","","text json",!0,"application/json; charset=utf-8",function(e){o=new Date,localStorage.removeItem("toupv"),t(e),window.location=e.targ},function(e,t){n(e,t)})}):new Promise(function(e,t){e()})},c.loadView=function(){return new Promise(function(n,o){LOGIN.common.ajax("/v4?isAjax=true","GET","","",!0,"application/json",function(e){var t=document.createElement("div");t.style.zIndex=1e3,t.innerHTML=e,document.body.appendChild(t),document.querySelector("._widget-user-popup").style.zIndex=1e3,LOGIN.common.loadScript(LOGIN.common.getHostURL()+"/scripts/app/login.bindevents.min.js"),LOGIN.common.loadScript("https://www.google.com/recaptcha/api.js?onload=onloadAccountsCaptchCallback&render=explicit"),n(e)},function(e,t){o(e,t)})})},c.validateSession=function(e,t){e=e||location.href,t=t||!1,LOGIN.common.ajax("/accounts/v4/validateusersession?originatingUrl="+encodeURIComponent(e)+"&referrer="+encodeURIComponent(document.referrer)+"&forceRefresh="+t,"GET","","",!0,"application/json",function(e){})},c.init=function(){t()},c.Captcha={loaded:!1,cookieSignInName:"accountSignInAttempt",cookieSignUpName:"accountSignUpAttempt",signInDivId:"divSignInCaptcha",signUpDivId:"divSignUpCaptcha",signInWidgetKey:-1,signUpWidgetKey:-1,secretKey:function(){return document.querySelector("#hdnAccountsGglCaptchaKeyClientSide").value},completeReset:function(){this.resetLoginAttempt(!0),this.resetLoginAttempt(!1)},resetLoginAttempt:function(e){var t=e?this.signUpDivId:this.signInDivId;e?(this.signUpWidgetKey=-1,LOGIN.common.setCookie(this.cookieSignUpName,0)):(this.signInWidgetKey=-1,LOGIN.common.setCookie(this.cookieSignInName,0)),document.querySelector("#"+t+"Message").classList.add("hide");e=document.querySelector("#"+t);e&&e.remove();e=document.createElement("div");e.id=t;t=document.querySelector("#"+t+"ParentDiv");t.insertBefore(e,t.firstChild)},logFailAttempt:function(e){var t,n,o,r,i,a;this.loaded&&(i=e?this.cookieSignUpName:this.cookieSignInName,t=e?this.signUpDivId:this.signInDivId,n=e?this.signUpWidgetKey:this.signInWidgetKey,o=0,(r=LOGIN.common.readCookie(i))&&(o=parseInt(r)),LOGIN.common.setCookie(i,++o),r=loginAttemptsBeforeCaptcha||4,i=loginAttemptsBeforeForgotPswd||r+1,r<=o&&(-1==n?(n=grecaptcha.render(t,{sitekey:this.secretKey(),callback:function(e){}}),document.querySelector("#"+t+"Message").classList.remove("hide"),e?this.signUpWidgetKey=n:this.signInWidgetKey=n):i<=o?(this.resetLoginAttempt(e),"function"==typeof Event?a=new Event("click"):(a=document.createEvent("Event")).initEvent("click",!0,!0),document.querySelector("#forgot-pass-link")?document.querySelector("#forgot-pass-link").click():(e?document.querySelector(".js-for-forgot-pwd-signup"):document.querySelector(".js-for-forgot-pwd-signin")).dispatchEvent(a)):grecaptcha.reset(n)))},validateCaptcha:function(e){if(this.loaded){e=e?this.signUpWidgetKey:this.signInWidgetKey;if(-1<e){if(0==grecaptcha.getResponse(e).length)return!1;grecaptcha.reset(e)}}return!0}};var I=function(e){e&&e.hasOwnProperty("status")&&("NEWLY_CREATED"==e.status||"SUCCESS"==e.status||"EXISTING_USER"==e.status||"USER_SWAP"==e.status)&&localStorage.setItem("toupv","1")};return c}(LOGIN.Accounts||{}),LOGIN.common=function(f){var g=function(e,t){var n,o="",r=t;for(n in r)"object"==typeof r[n]?o+=g(e,r[n]):r.hasOwnProperty(n)&&(o+=e+"["+n+"]="+r[n]+"&");return o};return f.ajax=function(e,t,n,o,r,i,a,c,s,l){var u,d,m=f.getHostURL();e=m?m+e:e,LOGIN.Accounts.localCheck&&0==document.domain.indexOf("local")&&(0<e.indexOf("?")?e+="&l=1":e+="?l=1"),(u=new XMLHttpRequest).open(t,e,r),u.withCredentials=!0,n?(u.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),d=JSON.parse(n),r=(r=(r=Object.keys(d).map(function(e){var t="";return"object"==typeof d[e]?t+=g(e,d[e]):t+=e+"="+d[e]+"&",t}).join("&")).replace("&&","&")).match("&$")?r.substring(0,r.length-1):r,n=encodeURI(r),u.send(n)):u.send(),u.onload=function(){if(4==u.readyState&&200==u.status){if(a)if(l)a(JSON.parse(u.responseText),l);else try{a(JSON.parse(u.responseText))}catch(e){a(u.responseText)}}else if(4==u.readyState&&400==u.status&&c)try{c(JSON.parse(u.responseText))}catch(e){c(u.responseText)}},u.onerror=function(){c&&c()}},f.getHostURL=function(){if(0<LOGIN.Accounts.SubDomain.length&&-1<document.domain.indexOf(LOGIN.Accounts.SubDomain))return"https://"+document.domain+LOGIN.Accounts.gateWay;var t=document.domain.substring(0,document.domain.indexOf(".")),n=!1;["local","dev","qa-iso","stg-iso","iso","qa","reg","perf","stg","pen","pseudo"].forEach(function(e){!n&&-1<t.indexOf(e)&&(n=!0,"local"!=e&&"dev"!=e&&"pseudo"!=e||(e="undefined"!=typeof RDL&&RDL&&RDL.QA_IDENTIFIER?RDL.QA_IDENTIFIER:"qa"),t=e+(0<LOGIN.Accounts.SubDomain.length?"-"+LOGIN.Accounts.SubDomain:""))}),n||(t=0<LOGIN.Accounts.SubDomain.length?LOGIN.Accounts.SubDomain:"www");var e=f.cookieDomain();return"https://"+(t=0===LOGIN.Accounts.SubDomain.length&&LOGIN.Accounts.builderPaths.hasOwnProperty(e)?"www"==t?LOGIN.Accounts.builderPaths[e]:t+"-"+LOGIN.Accounts.builderPaths[e]:t)+e+LOGIN.Accounts.gateWay},f.readCookie=function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null},f.deleteCookie=function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;secure;domain="+f.cookieDomain()},f.setCookie=function(e,t,n,o){var r,i="";n?((r=new Date).setTime(r.getTime()+24*n*60*60*1e3),i="; expires="+r.toUTCString()):o&&((r=new Date).setTime(r.getTime()+1e3*o),i="; expires="+r.toUTCString()),document.cookie=e+"="+t+i+"; path=/;secure;domain="+f.cookieDomain()},f.cookieDomain=function(){return document.domain.slice(document.domain.indexOf(".")).replace(/\//g,"")},f.getProductCD=function(){var e=f.getQueryStringValue("productCD");return e=(e=e||LOGIN.productCD)||""},f.getProduct=function(e){var t=f.readCookie("targetURL");if(t&&-1<t.indexOf("jobs."))return"Jobs";t=f.getQueryStringValue("targ");return t&&-1<t.indexOf("jobs.")?"Jobs":e||(LOGIN.common.isAnswerBase()?"Answerbase":"")},f.getQueryStringValue=function(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))},f.userStatus=function(){var e=LOGIN.common.readCookie("UserStatus");return e=e?JSON.parse(e):{}},f.closeLoginModel=function(){document.querySelector("._widget-user-popup")&&(document.querySelector("._widget-user-popup").classList.add("_widget-hide"),document.getElementsByTagName("body")[0].style.overflow="")},f.loadScript=function(e,t){var n=document.createElement("script");n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,t&&t())}:n.onload=function(){t&&t()},n.src=e,document.getElementsByTagName("head")[0].appendChild(n)},f.isAnswerBase=function(){return-1<location.search.toLowerCase().indexOf("client_id=lcaab")},f.getGAClientId=function(){var t="";if("undefined"!=typeof ga&&window.ga&&ga(function(e){t=e.get("clientId")}),""==t)try{t=ga.getAll()[0].get("clientId")}catch(e){}return t},f.getMixpanelContextProps=function(){var e,t,n="";return"undefined"!=typeof mixpanel&&void 0!==mixpanel.get_distinct_id&&((e=mixpanel._.info.properties()).hasOwnProperty("$browser_version")&&(e.$browser_version=Math.floor(e.$browser_version)),t=mixpanel.persistence.properties(),n=JSON.stringify(Object.assign(e,t)),(e=JSON.parse(n)).hasOwnProperty("$current_url")&&(t=(t=e.$current_url).split("?")[0],e.$current_url=t,n=JSON.stringify(e))),encodeURIComponent(n)},f.encodePassword=function(e){return encodeURIComponent(e)},f}(LOGIN.common||{}),LOGIN.validation=function(r){return r.validateEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},r.validatePassword=function(e,t){var n,o=!0;return document.querySelectorAll("[data-errormessage]")&&0<document.querySelectorAll("[data-errormessage]").length&&document.querySelectorAll("[data-errormessage]").forEach(function(e,t){"widget-user-mail"!=e.attributes["data-errormessage"].value&&"widget-user-email"!=e.attributes["data-errormessage"].value&&e.classList.add("hide")}),e.length<6||0==e.replace(/\s/g,"").length?(o=!1,(n=document.querySelectorAll('[data-errormessage="password"]')[0])&&n.classList.remove("hide")):void 0===t||0!=t.length&&e===t?((n=document.querySelectorAll('[data-errormessage="password"]')[0])&&n.classList.add("hide"),(n=document.querySelectorAll('[data-errormessage="confirm-password"]')[0])&&n.classList.add("hide")):(o=!1,(n=document.querySelectorAll('[data-errormessage="confirm-password"]')[0])&&n.classList.remove("hide")),o},r.validateName=function(e){var t=new RegExp("^[a-zA-Z' ]+$");return!(""!=e&&!t.test(e))},r.validatePhone=function(e){var t=new RegExp("^[0-9]*$");return!(""!=e&&!t.test(e))},r.isValidForm=function(){var e=!0,t=document.querySelectorAll("[data-errormessage]");if(0<t.length)for(var n=0;n<t.length;n++)var o=t[n],e=e&&!(o.offsetWidth||o.offsetHeight||o.getClientRects().length);return e},r.validateCredentials=function(e,t){var n=!0,o=document.getElementById(e).value;switch(t){case"email":r.validateEmail(o)||(n=!1);break;case"password":r.validatePassword(o)||(n=!1);break;case"firstname":case"lastname":o&&100<o.length&&(n=!1)}e=document.querySelectorAll('[data-errormessage="'+e+'"]')[0];return e&&(n?e.classList.add("hide"):e.classList.remove("hide")),{isValid:n,value:o}},r}(LOGIN.validation||{}),function(){0<LOGIN.Accounts.gateWayPattern.length&&((t=new RegExp(LOGIN.Accounts.gateWayPattern).exec(location.pathname))&&(LOGIN.Accounts.gateWay=t[0]+LOGIN.Accounts.gateWay));var e=LOGIN.common.readCookie("acc_session"),t=LOGIN.common.readCookie("UserStatus");!e&&t&&LOGIN.Accounts.validateSession(location.href)}();