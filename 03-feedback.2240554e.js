function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,b=function(){return c.Date.now()};function g(e,t,n){var o,r,a,i,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,l=t,i=e.apply(a,n)}function S(e){return l=e,f=setTimeout(L,t),c?y(e):i}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=a}function L(){var e=b();if(j(e))return O(e);f=setTimeout(L,function(e){var n=t-(e-u);return s?d(n,a-(e-l)):n}(e))}function O(e){return f=void 0,g&&o?y(e):(o=r=void 0,i)}function T(){var e=b(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(L,t),y(u)}return void 0===f&&(f=setTimeout(L,t)),i}return t=p(t)||0,v(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(p(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?i:O(b())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form"),emailLabel:document.querySelector('[name="email"]'),messageLabel:document.querySelector('[name="message"]')},S={};localStorage.getItem("feedback-form-state")&&(y.emailLabel.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,y.messageLabel.value=JSON.parse(localStorage.getItem("feedback-form-state")).message),y.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(S)})),y.form.addEventListener("input",e(t)((function(){S[y.emailLabel.name]=y.emailLabel.value,S[y.messageLabel.name]=y.messageLabel.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));
//# sourceMappingURL=03-feedback.2240554e.js.map