!function(t){"use strict";t.Placeholders={Utils:{addEventListener:function(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0},inArray:function(t,e){for(var r=0,a=t.length;r<a;r++)if(t[r]===e)return!0;return!1},moveCaret:function(t,e){var r;t.createTextRange?((r=t.createTextRange()).move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))},changeType:function(t,e){try{return t.type=e,!0}catch(t){return!1}}}}}(this),function(t){"use strict";var l,o,c,e,s,d,r,g,a,n,u,i=["text","search","url","tel","email","password","number","textarea"],v=[27,33,34,35,36,37,38,39,40,8,46],p="placeholdersjs",b=new RegExp("(?:^|\\s)"+p+"(?!\\S)"),m="data-placeholder-value",h="data-placeholder-active",f="data-placeholder-type",A="data-placeholder-submit",y="data-placeholder-bound",E="data-placeholder-maxlength",x=document.createElement("input"),L=document.getElementsByTagName("head")[0],T=document.documentElement,N=t.Placeholders,S=N.Utils;function w(){}function B(){try{return document.activeElement}catch(t){}}function C(t,e){var r=!!e&&t.value!==e,e=t.value===t.getAttribute(m);return!(!r&&!e||"true"!==t.getAttribute(h))&&(t.removeAttribute(h),t.value=t.value.replace(t.getAttribute(m),""),t.className=t.className.replace(b,""),e=t.getAttribute(E),0<=parseInt(e,10)&&(t.setAttribute("maxLength",e),t.removeAttribute(E)),(e=t.getAttribute(f))&&(t.type=e),!0)}function k(t){var e=t.getAttribute(m);return!(""!==t.value||!e)&&(t.setAttribute(h,"true"),t.value=e,t.className+=" "+p,t.getAttribute(E)||(t.setAttribute(E,t.maxLength),t.removeAttribute("maxLength")),t.getAttribute(f)?t.type="text":"password"===t.type&&S.changeType(t,"text")&&t.setAttribute(f,"password"),!0)}function I(t,e){var r,a,n,u,i;if(t&&t.getAttribute(m))e(t);else for(a=t?t.getElementsByTagName("input"):l,n=t?t.getElementsByTagName("textarea"):o,i=0,u=(r=a?a.length:0)+(n?n.length:0);i<u;i++)e(i<r?a[i]:n[i-r])}function R(t){I(t,C)}function V(t){var e,r,a,n,u,i;t.form&&("string"==typeof(g=t.form)&&(g=document.getElementById(g)),g.getAttribute(A)||(S.addEventListener(g,"submit",(e=g,function(){R(e)})),g.setAttribute(A,"true"))),S.addEventListener(t,"focus",(r=t,function(){c&&r.value===r.getAttribute(m)&&"true"===r.getAttribute(h)?S.moveCaret(r,0):C(r)})),S.addEventListener(t,"blur",(a=t,function(){k(a)})),c&&(S.addEventListener(t,"keydown",(i=t,function(t){if(s=i.value,"true"===i.getAttribute(h)&&s===i.getAttribute(m)&&S.inArray(v,t.keyCode))return t.preventDefault&&t.preventDefault(),!1})),S.addEventListener(t,"keyup",(u=t,function(){C(u,s),""===u.value&&(u.blur(),S.moveCaret(u,0))})),S.addEventListener(t,"click",(n=t,function(){n===B()&&n.value===n.getAttribute(m)&&"true"===n.getAttribute(h)&&S.moveCaret(n,0)}))),t.setAttribute(y,"true"),t.setAttribute(m,d),!c&&t===B()||k(t)}if(N.nativeSupport=void 0!==x.placeholder,!N.nativeSupport){for(l=document.getElementsByTagName("input"),o=document.getElementsByTagName("textarea"),c="false"===T.getAttribute("data-placeholder-focus"),e="false"!==T.getAttribute("data-placeholder-live"),(x=document.createElement("style")).type="text/css",T=document.createTextNode("."+p+" { color:#ccc; }"),x.styleSheet?x.styleSheet.cssText=T.nodeValue:x.appendChild(T),L.insertBefore(x,L.firstChild),u=0,n=l.length+o.length;u<n;u++)a=u<l.length?l[u]:o[u-l.length],(d=(d=a.attributes.placeholder)&&d.nodeValue)&&S.inArray(i,a.type)&&V(a);r=setInterval(function(){for(u=0,n=l.length+o.length;u<n;u++)a=u<l.length?l[u]:o[u-l.length],(d=a.attributes.placeholder)?(d=d.nodeValue)&&S.inArray(i,a.type)&&(a.getAttribute(y)||V(a),d===a.getAttribute(m)&&("password"!==a.type||a.getAttribute(f))||("password"===a.type&&!a.getAttribute(f)&&S.changeType(a,"text")&&a.setAttribute(f,"password"),a.value===a.getAttribute(m)&&(a.value=d),a.setAttribute(m,d))):a.getAttribute(h)&&(C(a),a.removeAttribute(m));e||clearInterval(r)},100)}S.addEventListener(t,"beforeunload",function(){N.disable()}),N.disable=N.nativeSupport?w:R,N.enable=N.nativeSupport?w:function(t){I(t,k)}}(this);