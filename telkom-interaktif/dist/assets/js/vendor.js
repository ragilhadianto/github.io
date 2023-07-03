/*!
 * fullPage 3.1.0
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){"function"==typeof define&&define.amd?define((function(){return e.fullpage=o(t,n),e.fullpage})):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,(function(e,t){"use strict";var n="active",o="fp-completely",r="fp-section",i="."+r,l=i+".active",a=".fp-tableCell",s=".fp-slide",c=".fp-slides",u=".fp-slidesContainer";function f(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function d(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function v(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=v(e[r],o[r]))}return e}function p(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function h(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function g(){return e.innerWidth}function m(e,t){var n;for(n in e=A(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function w(e,t,n){for(var o=e[n];o&&!X(o,t);)o=o[n];return o}function b(e,t){return w(e,t,"previousElementSibling")}function S(e,t){return w(e,t,"nextElementSibling")}function y(e){return e.previousElementSibling}function E(e){return e.nextElementSibling}function L(e){return e[e.length-1]}function x(e,t){e=O(e)?e[0]:e;for(var n=null!=t?d(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function A(e){return O(e)?e:[e]}function T(e){e=A(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function k(e){e=A(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function O(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function M(e,t){e=A(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function C(e,t){e=A(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function H(e,t){t.appendChild(e)}function I(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function B(e,t){I(e,t,!0)}function N(e,t){for("string"==typeof t&&(t=_(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function R(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function z(e,t){return e&&1===e.nodeType?X(e,t)?e:z(e.parentNode,t):null}function j(e,t){D(e,e.nextSibling,t)}function P(e,t){D(e,e,t)}function D(e,t,n){O(n)||("string"==typeof n&&(n=_(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function V(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function W(e){return Array.prototype.filter.call(e.parentNode.children,(function(t){return t!==e}))}function Y(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function F(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function U(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function X(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function K(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function _(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function $(e){e=A(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function q(e,t,n){for(var o=e[n],r=[];o;)(X(o,t)||null==t)&&r.push(o),o=o[n];return r}function Q(e,t){return q(e,t,"nextElementSibling")}function G(e,t){return q(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:d,deepExtend:v,hasClass:p,getWindowHeight:h,css:m,until:w,prevUntil:b,nextUntil:S,prev:y,next:E,last:L,index:x,getList:A,hide:T,show:k,isArrayOrList:O,addClass:M,removeClass:C,appendTo:H,wrap:I,wrapAll:B,wrapInner:N,unwrap:R,closest:z,after:j,before:P,insertBefore:D,getScrollTop:V,siblings:W,preventDefault:Y,isFunction:F,trigger:U,matches:X,toggle:K,createElementFromHTML:_,remove:$,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:q,nextAll:Q,prevAll:G,showError:f},function(w,A){var O=A&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(A.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1,I=d("html, body"),D=d("html")[0],q=d("body")[0];if(!p(D,"fp-enabled")){var J={};A=v({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof w?d(w)[0]:w,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},A);var Z,ee,te,ne,oe=!1,re=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ie="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,le="string"==typeof w?d(w)[0]:w,ae=h(),se=g(),ce=!1,ue=!0,fe=!0,de=[],ve={m:{up:!0,down:!0,left:!0,right:!0}};ve.k=v({},ve.m);var pe,he,ge,me,we,be,Se,ye,Ee,Le=function(){var t;t=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"};return t}(),xe={touchmove:"ontouchmove"in e?"touchmove":Le.move,touchstart:"ontouchstart"in e?"touchstart":Le.down},Ae=!1;try{var Te=Object.defineProperty({},"passive",{get:function(){Ae=!0}});e.addEventListener("testPassive",null,Te),e.removeEventListener("testPassive",null,Te)}catch(e){}var ke,Oe,Me,Ce=v({},A),He=!1,Ie=!0,Be=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];Mn(),e.fp_easings=v(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),le&&(J.version="3.1.0",J.setAutoScrolling=Ue,J.setRecordHistory=Xe,J.setScrollingSpeed=Ke,J.setFitToSection=_e,J.setLockAnchors=function(e){A.lockAnchors=e},J.setMouseWheelScrolling=$e,J.setAllowScrolling=qe,J.setKeyboardScrolling=Ge,J.moveSectionUp=Je,J.moveSectionDown=Ze,J.silentMoveTo=et,J.moveTo=tt,J.moveSlideRight=nt,J.moveSlideLeft=ot,J.fitToSection=mt,J.reBuild=rt,J.setResponsive=lt,J.getFullpageData=function(){return A},J.destroy=function(n){Ue(!1,"internal"),qe(!0),Qe(!1),Ge(!1),M(le,"fp-destroyed"),[we,me,he,be,Se,Ee,ge,Me].forEach((function(e){clearTimeout(e)})),e.removeEventListener("scroll",gt),e.removeEventListener("hashchange",Yt),e.removeEventListener("resize",ln),t.removeEventListener("keydown",Ut),t.removeEventListener("keyup",Kt),["click","touchstart"].forEach((function(e){t.removeEventListener(e,at)})),["mouseenter","touchstart","mouseleave","touchend"].forEach((function(e){t.removeEventListener(e,ct,!0)})),n&&(An(0),d("img[data-src], source[data-src], audio[data-src], iframe[data-src]",le).forEach((function(e){Bt(e,"src")})),d("img[data-srcset]").forEach((function(e){Bt(e,"srcset")})),$(d("#fp-nav, .fp-slidesNav, .fp-controlArrow")),m(d(i),{height:"","background-color":"",padding:""}),m(d(s),{width:""}),m(le,{height:"",position:"","-ms-touch-action":"","touch-action":""}),m(I,{overflow:"",height:""}),C(D,"fp-enabled"),C(q,"fp-responsive"),q.className.split(/\s+/).forEach((function(e){0===e.indexOf("fp-viewing")&&C(q,e)})),d(i+", "+s).forEach((function(e){A.scrollOverflowHandler&&A.scrollOverflow&&A.scrollOverflowHandler.remove(e),C(e,"fp-table active "+o),e.getAttribute("data-fp-styles")&&e.setAttribute("style",e.getAttribute("data-fp-styles")),p(e,r)&&!He&&e.removeAttribute("data-anchor")})),un(le),[a,u,c].forEach((function(e){d(e,le).forEach((function(e){R(e)}))})),m(le,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[r,"fp-slide","fp-slidesContainer"].forEach((function(e){C(d("."+e),e)})))},J.getActiveSection=function(){return new Bn(d(l)[0])},J.getActiveSlide=function(){return Ct(d(".fp-slide.active",d(l)[0])[0])},J.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<d(A.sectionSelector,le).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<d(A.sectionSelector,le).length;t++)e.push(0);return e}(),options:A,setAutoScrolling:Ue},J.shared={afterRenderActions:ht,isNormalScrollElement:!1},e.fullpage_api=J,A.$&&Object.keys(J).forEach((function(e){A.$.fn.fullpage[e]=J[e]})),function(){A.css3&&(A.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}());A.scrollBar=A.scrollBar||A.hybrid,function(){if(!A.anchors.length){var e=d(A.sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",le);e.length&&e.length===d(A.sectionSelector,le).length&&(He=!0,e.forEach((function(e){A.anchors.push(e.getAttribute("data-anchor").toString())})))}if(!A.navigationTooltips.length){var t=d(A.sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",le);t.length&&t.forEach((function(e){A.navigationTooltips.push(e.getAttribute("data-tooltip").toString())}))}}(),function(){m(le,{height:"100%",position:"relative"}),M(le,"fullpage-wrapper"),M(D,"fp-enabled"),ae=h(),C(le,"fp-destroyed"),M(d(A.sectionSelector,le),r),M(d(A.slideSelector,le),"fp-slide");for(var e=d(i),o=0;o<e.length;o++){var a=o,c=e[o],u=d(s,c),f=u.length;c.setAttribute("data-fp-styles",c.getAttribute("style")),dt(c,a),vt(c,a),f>0?ft(c,u,f):A.verticalCentered&&vn(c)}A.fixedElements&&A.css3&&d(A.fixedElements).forEach((function(e){q.appendChild(e)}));A.navigation&&function(){var e=t.createElement("div");e.setAttribute("id","fp-nav");var o=t.createElement("ul");e.appendChild(o),H(e,q);var r=d("#fp-nav")[0];M(r,"fp-"+A.navigationPosition),A.showActiveTooltip&&M(r,"fp-show-active");for(var a="",s=0;s<d(i).length;s++){var c="";A.anchors.length&&(c=A.anchors[s]),a+='<li><a href="#'+c+'"><span class="fp-sr-only">'+pt(s,"Section")+"</span><span></span></a>";var u=A.navigationTooltips[s];void 0!==u&&""!==u&&(a+='<div class="fp-tooltip fp-'+A.navigationPosition+'">'+u+"</div>"),a+="</li>"}d("ul",r)[0].innerHTML=a;var f=d("li",d("#fp-nav")[0])[x(d(l)[0],i)];M(d("a",f),n)}();void d('iframe[src*="youtube.com/embed/"]',le).forEach((function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)})),A.scrollOverflow&&(pe=A.scrollOverflowHandler.init(A))}(),qe(!0),Qe(!0),Ue(A.autoScrolling,"internal"),sn(),En(),"complete"===t.readyState&&Wt();e.addEventListener("load",Wt),A.scrollOverflow||ht();!function(){for(var e=1;e<4;e++)Ee=setTimeout(ut,350*e)}()}(),e.addEventListener("scroll",gt),e.addEventListener("hashchange",Yt),e.addEventListener("focus",Gt),e.addEventListener("blur",Jt),e.addEventListener("resize",ln),t.addEventListener("keydown",Ut),t.addEventListener("keyup",Kt),["click","touchstart"].forEach((function(e){t.addEventListener(e,at)})),A.normalScrollElements&&(["mouseenter","touchstart"].forEach((function(e){st(e,!1)})),["mouseleave","touchend"].forEach((function(e){st(e,!0)}))));var Ne=!1,Re=0,ze=0,je=0,Pe=0,De=0,Ve=(new Date).getTime(),We=0,Ye=0,Fe=ae;return J}function Ue(e,t){e||An(0),On("autoScrolling",e,t);var n=d(l)[0];if(A.autoScrolling&&!A.scrollBar)m(I,{overflow:"hidden",height:"100%"}),Xe(Ce.recordHistory,"internal"),m(le,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&An(n.offsetTop);else if(m(I,{overflow:"visible",height:"initial"}),Xe(!!A.autoScrolling&&Ce.recordHistory,"internal"),m(le,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Ht(n.offsetTop);o.element.scrollTo(0,o.options)}}function Xe(e,t){On("recordHistory",e,t)}function Ke(e,t){On("scrollingSpeed",e,t)}function _e(e,t){On("fitToSection",e,t)}function $e(n){n?(!function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",i=!!Ae&&{passive:!1};"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",xt,i):t[n](o+r,xt,i)}(),le.addEventListener("mousedown",_t),le.addEventListener("mouseup",$t)):(t.addEventListener?(t.removeEventListener("mousewheel",xt,!1),t.removeEventListener("wheel",xt,!1),t.removeEventListener("MozMousePixelScroll",xt,!1)):t.detachEvent("onmousewheel",xt),le.removeEventListener("mousedown",_t),le.removeEventListener("mouseup",$t))}function qe(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){kn(e,t,"m")})):kn(e,"all","m")}function Qe(e){e?($e(!0),function(){if(re||ie){A.autoScrolling&&(q.removeEventListener(xe.touchmove,bt,{passive:!1}),q.addEventListener(xe.touchmove,bt,{passive:!1}));var e=A.touchWrapper;e.removeEventListener(xe.touchstart,Et),e.removeEventListener(xe.touchmove,St,{passive:!1}),e.addEventListener(xe.touchstart,Et),e.addEventListener(xe.touchmove,St,{passive:!1})}}()):($e(!1),function(){if(re||ie){A.autoScrolling&&(q.removeEventListener(xe.touchmove,St,{passive:!1}),q.removeEventListener(xe.touchmove,bt,{passive:!1}));var e=A.touchWrapper;e.removeEventListener(xe.touchstart,Et),e.removeEventListener(xe.touchmove,St,{passive:!1})}}())}function Ge(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){kn(e,t,"k")})):(kn(e,"all","k"),A.keyboardScrolling=e)}function Je(){var e=b(d(l)[0],i);e||!A.loopTop&&!A.continuousVertical||(e=L(d(i))),null!=e&&kt(e,null,!0)}function Ze(){var e=S(d(l)[0],i);e||!A.loopBottom&&!A.continuousVertical||(e=d(i)[0]),null!=e&&kt(e,null,!1)}function et(e,t){Ke(0,"internal"),tt(e,t),Ke(Ce.scrollingSpeed,"internal")}function tt(e,t){var n=gn(e);void 0!==t?mn(e,t):null!=n&&kt(n)}function nt(e){At("right",e)}function ot(e){At("left",e)}function rt(t){if(!p(le,"fp-destroyed")){ce=!0,ae=h(),se=g();for(var n=d(i),o=0;o<n.length;++o){var r=n[o],u=d(c,r)[0],f=d(s,r);A.verticalCentered&&m(d(a,r),{height:pn(r)+"px"}),m(r,{height:ae+"px"}),f.length>1&&on(u,d(".fp-slide.active",u)[0])}A.scrollOverflow&&pe.createScrollBarForAll();var v=x(d(l)[0],i);v&&et(v+1),F(A.afterResize)&&t&&A.afterResize.call(le,e.innerWidth,e.innerHeight),F(A.afterReBuild)&&!t&&A.afterReBuild.call(le)}}function it(){return p(q,"fp-responsive")}function lt(e){var t=it();e?t||(Ue(!1,"internal"),_e(!1,"internal"),T(d("#fp-nav")),M(q,"fp-responsive"),F(A.afterResponsive)&&A.afterResponsive.call(le,e),A.scrollOverflow&&pe.createScrollBarForAll()):t&&(Ue(Ce.autoScrolling,"internal"),_e(Ce.autoScrolling,"internal"),k(d("#fp-nav")),C(q,"fp-responsive"),F(A.afterResponsive)&&A.afterResponsive.call(le,e))}function at(e){var t=e.target;t&&z(t,"#fp-nav a")?Zt.call(t,e):X(t,".fp-tooltip")?Xt.call(t):X(t,".fp-controlArrow")?Qt.call(t,e):X(t,".fp-slidesNav a")||null!=z(t,".fp-slidesNav a")?en.call(t,e):z(t,A.menu+" [data-menuanchor]")&&tn.call(t,e)}function st(e,n){t["fp_"+e]=n,t.addEventListener(e,ct,!0)}function ct(e){var n=e.type,o=!1,r=A.scrollOverflow,i="mouseleave"===n?e.toElement||e.relatedTarget:e.target;if(i==t||!i)return Qe(!0),void(r&&A.scrollOverflowHandler.setIscroll(i,!0));("touchend"===n&&(Ie=!1,setTimeout((function(){Ie=!0}),800)),"mouseenter"!==n||Ie)&&(A.normalScrollElements.split(",").forEach((function(e){if(!o){var t=X(i,e),n=z(i,e);(t||n)&&(J.shared.isNormalScrollElement||(Qe(!1),r&&A.scrollOverflowHandler.setIscroll(i,!1)),J.shared.isNormalScrollElement=!0,o=!0)}})),!o&&J.shared.isNormalScrollElement&&(Qe(!0),r&&A.scrollOverflowHandler.setIscroll(i,!0),J.shared.isNormalScrollElement=!1))}function ut(){var e=h(),t=g();ae===e&&se===t||(ae=e,se=t,rt(!0))}function ft(e,o,r){var a=100*r,f=100/r,v=t.createElement("div");v.className="fp-slides",B(o,v);var p=t.createElement("div");p.className="fp-slidesContainer",B(o,p),m(d(u,e),{width:a+"%"}),r>1&&(A.controlArrows&&function(e){var t=[_('<div class="fp-controlArrow fp-prev"></div>'),_('<div class="fp-controlArrow fp-next"></div>')];j(d(c,e)[0],t),"#fff"!==A.controlArrowColor&&(m(d(".fp-controlArrow.fp-next",e),{"border-color":"transparent transparent transparent "+A.controlArrowColor}),m(d(".fp-controlArrow.fp-prev",e),{"border-color":"transparent "+A.controlArrowColor+" transparent transparent"}));A.loopHorizontal||T(d(".fp-controlArrow.fp-prev",e))}(e),A.slidesNavigation&&function(e,t){H(_('<div class="fp-slidesNav"><ul></ul></div>'),e);var o=d(".fp-slidesNav",e)[0];M(o,"fp-"+A.slidesNavPosition);for(var r=0;r<t;r++){var i=d(s,e)[r];H(_('<li><a href="#"><span class="fp-sr-only">'+pt(r,"Slide",i)+"</span><span></span></a></li>"),d("ul",o)[0])}m(o,{"margin-left":"-"+o.innerWidth/2+"px"}),M(d("a",d("li",o)[0]),n)}(e,r)),o.forEach((function(e){m(e,{width:f+"%"}),A.verticalCentered&&vn(e)}));var h=d(".fp-slide.active",e)[0];null!=h&&(0!==x(d(l),i)||0===x(d(l),i)&&0!==x(h))?xn(h,"internal"):M(o[0],n)}function dt(e,t){t||null!=d(l)[0]||M(e,n),ne=d(l)[0],m(e,{height:ae+"px"}),A.paddingTop&&m(e,{"padding-top":A.paddingTop}),A.paddingBottom&&m(e,{"padding-bottom":A.paddingBottom}),void 0!==A.sectionsColor[t]&&m(e,{"background-color":A.sectionsColor[t]}),void 0!==A.anchors[t]&&e.setAttribute("data-anchor",A.anchors[t])}function vt(e,t){void 0!==A.anchors[t]&&p(e,n)&&fn(A.anchors[t],t),A.menu&&A.css3&&null!=z(d(A.menu)[0],".fullpage-wrapper")&&d(A.menu).forEach((function(e){q.appendChild(e)}))}function pt(e,t,n){var o="Section"===t?A.anchors[e]:n.getAttribute("data-anchor");return A.navigationTooltips[e]||o||t+" "+(e+1)}function ht(){var e,t,n=d(l)[0];M(n,o),Rt(n),Nt(),jt(n),A.scrollOverflow&&A.scrollOverflowHandler.afterLoad(),e=Ft(),t=gn(e.section),e.section&&t&&(void 0===t||x(t)!==x(ne))||!F(A.afterLoad)||Ot("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:x(n,i)}),F(A.afterRender)&&Ot("afterRender")}function gt(){var e;if(!ce&&(!A.autoScrolling||A.scrollBar)){var t=V(),r=function(e){var t=e>Re?"down":"up";return Re=e,We=e,t}(t),a=0,s=t+h()/2,c=q.offsetHeight-h()===t,u=d(i);if(c)a=u.length-1;else if(t)for(var f=0;f<u.length;++f){u[f].offsetTop<=s&&(a=f)}else a=0;if(function(e){var t=d(l)[0].offsetTop,n=t+h();if("up"==e)return n>=V()+h();return t<=V()}(r)&&(p(d(l)[0],o)||(M(d(l)[0],o),C(W(d(l)[0]),o))),!p(e=u[a],n)){Ne=!0;var v,g,m=d(l)[0],w=x(m,i)+1,b=dn(e),S=e.getAttribute("data-anchor"),y=x(e,i)+1,E=d(".fp-slide.active",e)[0],L={activeSection:m,sectionIndex:y-1,anchorLink:S,element:e,leavingSection:w,direction:b};E&&(g=E.getAttribute("data-anchor"),v=x(E)),fe&&(M(e,n),C(W(e),n),F(A.onLeave)&&Ot("onLeave",L),F(A.afterLoad)&&Ot("afterLoad",L),Dt(m),Rt(e),jt(e),fn(S,y-1),A.anchors.length&&(Z=S),bn(v,g,S,y)),clearTimeout(be),be=setTimeout((function(){Ne=!1}),100)}A.fitToSection&&(clearTimeout(Se),Se=setTimeout((function(){A.fitToSection&&d(l)[0].offsetHeight<=ae&&mt()}),A.fitToSectionDelay))}}function mt(){fe&&(ce=!0,kt(d(l)[0]),ce=!1)}function wt(e){if(ve.m[e]){var t="down"===e?Ze:Je;if(A.scrollOverflow){var n=A.scrollOverflowHandler.scrollable(d(l)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!A.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function bt(e){A.autoScrolling&&yt(e)&&ve.m.up&&Y(e)}function St(t){var n=z(t.target,i)||d(l)[0];if(yt(t)){A.autoScrolling&&Y(t);var o=Ln(t);Pe=o.y,De=o.x,d(c,n).length&&Math.abs(je-De)>Math.abs(ze-Pe)?!oe&&Math.abs(je-De)>g()/100*A.touchSensitivity&&(je>De?ve.m.right&&nt(n):ve.m.left&&ot(n)):A.autoScrolling&&fe&&Math.abs(ze-Pe)>e.innerHeight/100*A.touchSensitivity&&(ze>Pe?wt("down"):Pe>ze&&wt("up"))}}function yt(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Et(e){if(A.fitToSection&&(ke=!1),yt(e)){var t=Ln(e);ze=t.y,je=t.x}}function Lt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function xt(t){var n=(new Date).getTime(),o=p(d(".fp-completely")[0],"fp-normal-scroll");if(!ve.m.down&&!ve.m.up)return Y(t),!1;if(A.autoScrolling&&!te&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;de.length>149&&de.shift(),de.push(Math.abs(r)),A.scrollBar&&Y(t);var s=n-Ve;if(Ve=n,s>200&&(de=[]),fe)Lt(de,10)>=Lt(de,70)&&a&&wt(i<0?"down":"up");return!1}A.fitToSection&&(ke=!1)}function At(e,t){var n=null==t?d(l)[0]:t,o=d(c,n)[0];if(!(null==o||oe||d(s,o).length<2)){var r=d(".fp-slide.active",o)[0],i=null;if(null==(i="left"===e?b(r,s):S(r,s))){if(!A.loopHorizontal)return;var a=W(r);i="left"===e?a[a.length-1]:a[0]}oe=!J.test.isTesting,on(o,i,e)}}function Tt(){for(var e=d(".fp-slide.active"),t=0;t<e.length;t++)xn(e[t],"internal")}function kt(e,t,o){if(null!=e){var r,a,s={element:e,callback:t,isMovementUp:o,dtop:function(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=n>We,i=o-ae+t,l=A.bigSectionsDestination;return t>ae?(r||l)&&"bottom"!==l||(o=i):(r||ce&&null==E(e))&&(o=i),We=o,o}(e),yMovement:dn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:x(e,i),activeSlide:d(".fp-slide.active",e)[0],activeSection:d(l)[0],leavingSection:x(d(l),i)+1,localIsResizing:ce};if(!(s.activeSection==e&&!ce||A.scrollBar&&V()===s.dtop&&!p(e,"fp-auto-height"))){if(null!=s.activeSlide&&(r=s.activeSlide.getAttribute("data-anchor"),a=x(s.activeSlide)),!s.localIsResizing){var c=s.yMovement;if(void 0!==o&&(c=o?"up":"down"),s.direction=c,F(A.onLeave)&&!1===Ot("onLeave",s))return}A.autoScrolling&&A.continuousVertical&&void 0!==s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=function(e){e.isMovementUp?P(d(l)[0],Q(e.activeSection,i)):j(d(l)[0],G(e.activeSection,i).reverse());return An(d(l)[0].offsetTop),Tt(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=dn(e.element),e}(s)),s.localIsResizing||Dt(s.activeSection),A.scrollOverflow&&A.scrollOverflowHandler.beforeLeave(),M(e,n),C(W(e),n),Rt(e),A.scrollOverflow&&A.scrollOverflowHandler.onLeave(),fe=J.test.isTesting,bn(a,r,s.anchorLink,s.sectionIndex),function(e){var t=A.scrollingSpeed<700,n=t?700:A.scrollingSpeed;if(A.css3&&A.autoScrolling&&!A.scrollBar){hn("translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)",!0),A.scrollingSpeed?(clearTimeout(me),me=setTimeout((function(){It(e),fe=!t}),A.scrollingSpeed)):It(e)}else{var o=Ht(e.dtop);J.test.top=-e.dtop+"px",m(I,{"scroll-behavior":"unset"}),Cn(o.element,o.options,A.scrollingSpeed,(function(){A.scrollBar?setTimeout((function(){It(e)}),30):(It(e),fe=!t)}))}t&&(clearTimeout(Me),Me=setTimeout((function(){fe=!0}),n))}(s),Z=s.anchorLink,fn(s.anchorLink,s.sectionIndex)}}}function Ot(e,t){var n,o=function(e,t){var n;n=A.v2compatible?{afterRender:function(){return[le]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:Mt(d(l)[0]),slide:Ct(d(".fp-slide.active",d(l)[0])[0])}},onLeave:function(){return{origin:Mt(t.activeSection),destination:Mt(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:Mt(t.section),origin:Ct(t.prevSlide),destination:Ct(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}};return n[e]()}(e,t);if(A.v2compatible){if(!1===A[e].apply(o[0],o.slice(1)))return!1}else if(U(le,e,o),!1===A[e].apply(o[Object.keys(o)[0]],(n=o,Object.keys(n).map((function(e){return n[e]})))))return!1;return!0}function Mt(e){return e?new Bn(e):null}function Ct(e){return e?new Nn(e):null}function Ht(t){var n={};return A.autoScrolling&&!A.scrollBar?(n.options=-t,n.element=d(".fullpage-wrapper")[0]):(n.options=t,n.element=e),n}function It(e){!function(e){null!=e.wrapAroundElements&&(e.isMovementUp?P(d(i)[0],e.wrapAroundElements):j(d(i)[d(i).length-1],e.wrapAroundElements),An(d(l)[0].offsetTop),Tt())}(e),F(A.afterLoad)&&!e.localIsResizing&&Ot("afterLoad",e),A.scrollOverflow&&A.scrollOverflowHandler.afterLoad(),e.localIsResizing||jt(e.element),M(e.element,o),C(W(e.element),o),Nt(),fe=!0,F(e.callback)&&e.callback()}function Bt(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Nt(){var e=d(".fp-auto-height")[0]||it()&&d(".fp-auto-height-responsive")[0];A.lazyLoading&&e&&d(i+":not(.active)").forEach((function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<ae&&n>0||o>2&&o<ae)&&Rt(e)}))}function Rt(e){A.lazyLoading&&d("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Vt(e)).forEach((function(t){if(["src","srcset"].forEach((function(n){var o=t.getAttribute("data-"+n);null!=o&&o&&(Bt(t,n),t.addEventListener("load",(function(){zt(e)})))})),X(t,"source")){var n=z(t,"video, audio");n&&(n.load(),n.onloadeddata=function(){zt(e)})}}))}function zt(e){A.scrollOverflow&&(clearTimeout(Oe),Oe=setTimeout((function(){p(q,"fp-responsive")||pe.createScrollBar(e)}),200))}function jt(e){var t=Vt(e);d("video, audio",t).forEach((function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()})),d('iframe[src*="youtube.com/embed/"]',t).forEach((function(e){e.hasAttribute("data-autoplay")&&Pt(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Pt(e)}}))}function Pt(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Dt(e){var t=Vt(e);d("video, audio",t).forEach((function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()})),d('iframe[src*="youtube.com/embed/"]',t).forEach((function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function Vt(e){var t=d(".fp-slide.active",e);return t.length&&(e=t[0]),e}function Wt(){var e=Ft(),t=e.section,n=e.slide;t&&(A.animateAnchor?mn(t,n):et(t,n))}function Yt(){if(!Ne&&!A.lockAnchors){var e=Ft(),t=e.section,n=e.slide,o=void 0===Z,r=void 0===Z&&void 0===n&&!oe;t&&t.length&&(t&&t!==Z&&!o||r||!oe&&ee!=n)&&mn(t,n)}}function Ft(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function Ut(e){clearTimeout(ye);var n=t.activeElement,o=e.keyCode;if(9===o)!function(e){var n=e.shiftKey,o=t.activeElement,r=qt(Vt(d(l)[0]));function a(e){return Y(e),r[0]?r[0].focus():null}if(function(e){var n=qt(t),o=n.indexOf(t.activeElement),r=e.shiftKey?o-1:o+1,l=n[r],a=Ct(z(l,s)),c=Mt(z(l,i));return!a&&!c}(e))return;o?null==z(o,l+","+l+" .fp-slide.active")&&(o=a(e)):a(e);(!n&&o==r[r.length-1]||n&&o==r[0])&&Y(e)}(e);else if(!X(n,"textarea")&&!X(n,"input")&&!X(n,"select")&&"true"!==n.getAttribute("contentEditable")&&""!==n.getAttribute("contentEditable")&&A.keyboardScrolling&&A.autoScrolling){[40,38,32,33,34].indexOf(o)>-1&&Y(e),te=e.ctrlKey,ye=setTimeout((function(){!function(e){var n=e.shiftKey,o=t.activeElement,r=X(o,"video")||X(o,"audio");if(!fe&&[37,39].indexOf(e.keyCode)<0)return;switch(e.keyCode){case 38:case 33:ve.k.up&&Je();break;case 32:if(n&&ve.k.up&&!r){Je();break}case 40:case 34:ve.k.down&&(32===e.keyCode&&r||Ze());break;case 36:ve.k.up&&tt(1);break;case 35:ve.k.down&&tt(d(i).length);break;case 37:ve.k.left&&ot();break;case 39:ve.k.right&&nt();break;default:;}}(e)}),150)}}function Xt(){U(y(this),"click")}function Kt(e){ue&&(te=e.ctrlKey)}function _t(e){2==e.which&&(Ye=e.pageY,le.addEventListener("mousemove",nn))}function $t(e){2==e.which&&le.removeEventListener("mousemove",nn)}function qt(e){return[].slice.call(d('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e)).filter((function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent}))}function Qt(){var e=z(this,i);p(this,"fp-prev")?ve.m.left&&ot(e):ve.m.right&&nt(e)}function Gt(){ue=!0}function Jt(){ue=!1,te=!1}function Zt(e){Y(e);var t=x(z(this,"#fp-nav li"));kt(d(i)[t])}function en(e){Y(e);var t=d(c,z(this,i))[0];on(t,d(s,t)[x(z(this,"li"))])}function tn(e){!d(A.menu)[0]||!A.lockAnchors&&A.anchors.length||(Y(e),tt(this.getAttribute("data-menuanchor")))}function nn(e){A.autoScrolling&&(fe&&(e.pageY<Ye&&ve.m.up?Je():e.pageY>Ye&&ve.m.down&&Ze()),Ye=e.pageY)}function on(e,t,o){var r=z(e,i),l={slides:e,destiny:t,direction:o,destinyPos:{left:t.offsetLeft},slideIndex:x(t),section:r,sectionIndex:x(r,i),anchorLink:r.getAttribute("data-anchor"),slidesNav:d(".fp-slidesNav",r)[0],slideAnchor:yn(t),prevSlide:d(".fp-slide.active",r)[0],prevSlideIndex:x(d(".fp-slide.active",r)[0]),localIsResizing:ce};l.xMovement=function(e,t){if(e==t)return"none";if(e>t)return"left";return"right"}(l.prevSlideIndex,l.slideIndex),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(fe=!1),A.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&F(A.onSlideLeave)&&!1===Ot("onSlideLeave",l)?oe=!1:(M(t,n),C(W(t),n),l.localIsResizing||(Dt(l.prevSlide),Rt(t)),!A.loopHorizontal&&A.controlArrows&&(K(d(".fp-controlArrow.fp-prev",r),0!==l.slideIndex),K(d(".fp-controlArrow.fp-next",r),null!=E(t))),p(r,n)&&!l.localIsResizing&&bn(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(A.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";J.test.translate3dH[t.sectionIndex]=r,m(cn(d(u,e)),Tn(r)),we=setTimeout((function(){n&&rn(t)}),A.scrollingSpeed)}else J.test.left[t.sectionIndex]=Math.round(o.left),Cn(e,Math.round(o.left),A.scrollingSpeed,(function(){n&&rn(t)}))}(e,l,!0))}function rn(e){var t,o;t=e.slidesNav,o=e.slideIndex,A.slidesNavigation&&null!=t&&(C(d(".active",t),n),M(d("a",d("li",t)[o]),n)),e.localIsResizing||(F(A.afterSlideLoad)&&Ot("afterSlideLoad",e),fe=!0,jt(e.destiny)),oe=!1}function ln(){clearTimeout(he),he=setTimeout((function(){for(var e=0;e<4;e++)ge=setTimeout(an,200*e)}),200)}function an(){if(ce=!0,sn(),re){var e=t.activeElement;if(!X(e,"textarea")&&!X(e,"input")&&!X(e,"select")){var n=h();Math.abs(n-Fe)>20*Math.max(Fe,n)/100&&(rt(!0),Fe=n)}}else ut();ce=!1}function sn(){var t=A.responsive||A.responsiveWidth,n=A.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?lt(o||r):t?lt(o):n&&lt(r)}function cn(e){var t="all "+A.scrollingSpeed+"ms "+A.easingcss3;return C(e,"fp-notransition"),m(e,{"-webkit-transition":t,transition:t})}function un(e){return M(e,"fp-notransition")}function fn(e,t){var o;o=e,d(A.menu).forEach((function(e){A.menu&&null!=e&&(C(d(".active",e),n),M(d('[data-menuanchor="'+o+'"]',e),n))})),function(e,t){A.navigation&&null!=d("#fp-nav")[0]&&(C(d(".active",d("#fp-nav")[0]),n),M(e?d('a[href="#'+e+'"]',d("#fp-nav")[0]):d("a",d("li",d("#fp-nav")[0])[t]),n))}(e,t)}function dn(e){var t=x(d(l)[0],i),n=x(e,i);return t==n?"none":t>n?"up":"down"}function vn(e){if(!p(e,"fp-table")){var n=t.createElement("div");n.className="fp-tableCell",n.style.height=pn(e)+"px",M(e,"fp-table"),N(e,n)}}function pn(e){var t=ae;if(A.paddingTop||A.paddingBottom){var n=e;p(n,r)||(n=z(e,i));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=ae-o}return t}function hn(e,t){t?cn(le):un(le),m(le,Tn(e)),J.test.translate3d=e,setTimeout((function(){C(le,"fp-notransition")}),10)}function gn(e){var t=d(i+'[data-anchor="'+e+'"]',le)[0];if(!t){var n=void 0!==e?e-1:0;t=d(i)[n]}return t}function mn(e,t){var o=gn(e);if(null!=o){var r=function(e,t){var n=d(s+'[data-anchor="'+e+'"]',t)[0];return null==n&&(e=void 0!==e?e:0,n=d(s,t)[e]),n}(t,o);yn(o)===Z||p(o,n)?wn(r):kt(o,(function(){wn(r)}))}}function wn(e){null!=e&&on(z(e,c),e)}function bn(e,t,n,o){var r="";A.anchors.length&&!A.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),ee=t,Sn(r+"/"+t)):null!=e?(ee=t,Sn(n)):Sn(n)),En()}function Sn(t){if(A.recordHistory)location.hash=t;else if(re||ie)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function yn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=x(e);return null==t&&(t=n),t}function En(){var e=d(l)[0],t=d(".fp-slide.active",e)[0],n=yn(e),o=yn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");q.className=q.className.replace(i,""),M(q,"fp-viewing-"+r)}function Ln(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,ie&&yt(e)&&A.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function xn(e,t){Ke(0,"internal"),void 0!==t&&(ce=!0),on(z(e,c),e),void 0!==t&&(ce=!1),Ke(Ce.scrollingSpeed,"internal")}function An(e){var t=Math.round(e);if(A.css3&&A.autoScrolling&&!A.scrollBar)hn("translate3d(0px, -"+t+"px, 0px)",!1);else if(A.autoScrolling&&!A.scrollBar)m(le,{top:-t+"px"}),J.test.top=-t+"px";else{var n=Ht(t);Hn(n.element,n.options)}}function Tn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function kn(e,t,n){"all"!==t?ve[n][t]=e:Object.keys(ve[n]).forEach((function(t){ve[n][t]=e}))}function On(e,t,n){A[e]=t,"internal"!==n&&(Ce[e]=t)}function Mn(){var e=A.licenseKey,t="font-size: 15px;background:yellow;";O?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(f("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),f("error","https://github.com/alvarotrigo/fullPage.js#options")),p(D,"fp-enabled")?f("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(A.continuousVertical&&(A.loopTop||A.loopBottom)&&(A.continuousVertical=!1,f("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!A.scrollOverflow||!A.scrollBar&&A.autoScrolling||f("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!A.continuousVertical||!A.scrollBar&&A.autoScrolling||(A.continuousVertical=!1,f("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),A.scrollOverflow&&null==A.scrollOverflowHandler&&(A.scrollOverflow=!1,f("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),Be.forEach((function(e){A[e]&&f("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)})),A.anchors.forEach((function(e){var t=[].slice.call(d("[name]")).filter((function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()})),n=[].slice.call(d("[id]")).filter((function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()}));if(n.length||t.length){f("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||t.length)&&f("error",'"'+e+'" is is being used by another element `'+o+"` property")}})))}function Cn(t,n,o,r){var i=function(t){return t.self!=e&&p(t,"fp-slides")?t.scrollLeft:!A.autoScrolling||A.scrollBar?V():t.offsetTop}(t),l=n-i,a=0;ke=!0;var s=function(){if(ke){var c=n;a+=20,o&&(c=e.fp_easings[A.easing](a,i,l,o)),Hn(t,c),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function Hn(t,n){!A.autoScrolling||A.scrollBar||t.self!=e&&p(t,"fp-slides")?t.self!=e&&p(t,"fp-slides")?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function In(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=x(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Bn(e){In.call(this,e,i)}function Nn(e){In.call(this,e,s)}Mn()}})),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){n=e.extend({},n,{$:e});new t(this[0],n)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
/*!
 * fullPage 3.1.0 - Extensions 0.2.2
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(an,cn){"use strict";var sn="fullpage-wrapper",un="."+sn,fn="fp-responsive",dn="fp-notransition",vn="fp-destroyed",pn="fp-enabled",hn="fp-viewing",gn="active",mn="."+gn,Sn="fp-completely",bn="fp-section",wn="."+bn,yn=wn+mn,En="fp-tableCell",xn="."+En,Ln="fp-auto-height",An="fp-normal-scroll",Mn="fp-nav",Tn="#"+Mn,On="fp-tooltip",kn="fp-slide",Cn="."+kn,Hn=Cn+mn,zn="fp-slides",Rn="."+zn,In="fp-slidesContainer",Nn="."+In,Bn="fp-table",jn="fp-slidesNav",Pn="."+jn,Yn=Pn+" a",e="fp-controlArrow",Wn="."+e,Dn="fp-prev",Vn=Wn+".fp-prev",Zn=Wn+".fp-next";function Xn(e,t){an.console&&an.console[e]&&an.console[e]("fullPage: "+t)}function Gn(e,t){return(t=1<arguments.length?t:cn)?t.querySelectorAll(e):null}function Un(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=Un(e[r],o[r]))}return e}function Fn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function _n(){return"innerHeight"in an?an.innerHeight:cn.documentElement.offsetHeight}function Qn(){return an.innerWidth}function Jn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!yo(o,t);)o=o[n];return o}function Kn(e,t){return n(e,t,"previousElementSibling")}function $n(e,t){return n(e,t,"nextElementSibling")}function qn(e,t){if(null==t)return e.previousElementSibling;var n=qn(e);return n&&yo(n,t)?n:null}function eo(e,t){if(null==t)return e.nextElementSibling;var n=eo(e);return n&&yo(n,t)?n:null}function to(e){return e[e.length-1]}function no(e,t){e=io(e)?e[0]:e;for(var n=null!=t?Gn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return io(e)?e:[e]}function oo(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ro(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function io(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function lo(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function ao(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function co(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||cn.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function so(e,t){o(e,t,!0)}function uo(e,t){for("string"==typeof t&&(t=xo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function fo(e){for(var t=cn.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function vo(e,t){return e&&1===e.nodeType?yo(e,t)?e:vo(e.parentNode,t):null}function po(e,t){r(e,e.nextSibling,t)}function ho(e,t){r(e,e,t)}function r(e,t,n){io(n)||("string"==typeof n&&(n=xo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function go(){var e=cn.documentElement;return(an.pageYOffset||e.scrollTop)-(e.clientTop||0)}function mo(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function So(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function bo(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function wo(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof an.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=cn.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function yo(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Eo(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function xo(e){var t=cn.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Lo(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function i(e,t,n){for(var o=e[n],r=[];o;)(yo(o,t)||null==t)&&r.push(o),o=o[n];return r}function Ao(e,t){return i(e,t,"nextElementSibling")}function Mo(e,t){return i(e,t,"previousElementSibling")}function To(e,t){e.insertBefore(t,e.firstChild)}return an.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||an;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),an.fp_utils={$:Gn,deepExtend:Un,hasClass:Fn,getWindowHeight:_n,css:Jn,until:n,prevUntil:Kn,nextUntil:$n,prev:qn,next:eo,last:to,index:no,getList:l,hide:oo,show:ro,isArrayOrList:io,addClass:lo,removeClass:ao,appendTo:co,wrap:o,wrapAll:so,wrapInner:uo,unwrap:fo,closest:vo,after:po,before:ho,insertBefore:r,getScrollTop:go,siblings:mo,preventDefault:So,isFunction:bo,trigger:wo,matches:yo,toggle:Eo,createElementFromHTML:xo,remove:Lo,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:i,nextAll:Ao,prevAll:Mo,showError:Xn,prependTo:To,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Fn(e,t);o&&null==n||!n?ao(e,t):(!o&&null==n||n)&&lo(e,t)}}},function(e,b){var n=b&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(b.licenseKey)||-1<cn.domain.indexOf("alvarotrigo.com"),s=Gn("html, body"),c=Gn("html")[0],g=Gn("body")[0];if(!Fn(c,pn)){var m={};b=Un({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:an.fp_scrolloverflow?an.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?Gn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},b);var S,l,u,o,a=!1,r=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),i="ontouchstart"in an||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?Gn(e)[0]:e,y=_n(),f=Qn(),E=!1,t=!0,x=!0,d=[],v={m:{up:!0,down:!0,left:!0,right:!0}};v.k=Un({},v.m);var p,h,L,A,M,T,O,k,C,H,z=Vt(),R={touchmove:"ontouchmove"in an?"touchmove":z.move,touchstart:"ontouchstart"in an?"touchstart":z.down},I=!1,N=!Fn(g,ot("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),B='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',j=!1;try{var P=Object.defineProperty({},"passive",{get:function(){j=!0}});an.addEventListener("testPassive",null,P),an.removeEventListener("testPassive",null,P)}catch(e){}var Y,W,D,V=Un({},b),Z=!1,X=!0,G={};en(),an.fp_easings=Un(an.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(m.version="3.1.0",m.setAutoScrolling=re,m.setRecordHistory=ie,m.setScrollingSpeed=le,m.setFitToSection=ae,m.setLockAnchors=function(e){b.lockAnchors=e},m.setMouseWheelScrolling=ce,m.setAllowScrolling=se,m.setKeyboardScrolling=fe,m.moveSectionUp=de,m.moveSectionDown=ve,m.silentMoveTo=pe,m.moveTo=he,m.moveSlideRight=ge,m.moveSlideLeft=me,m.fitToSection=ze,m.reBuild=Se,m.setResponsive=we,m.getFullpageData=function(){return{options:b,internals:{container:w,canScroll:x,isScrollAllowed:v,getDestinationPosition:Ve,isTouch:i,c:at,getXmovement:Ht,removeAnimation:Ot,getTransforms:Ut,lazyLoad:Ke,addAnimation:Tt,performHorizontalMove:xt,landscapeScroll:wt,silentLandscapeScroll:Xt,keepSlidesPosition:De,silentScroll:Gt,styleSlides:Me,styleSection:Oe,scrollHandler:He,getEventsPage:Zt,getMSPointer:Vt,isReallyTouch:Be,usingExtension:Qt,toggleControlArrows:yt,touchStartHandler:je,touchMoveHandler:Ne}}},m.destroy=function(e){wo(w,"destroy",e),re(!1,"internal"),se(!0),ue(!1),fe(!1),lo(w,vn),[M,A,h,T,O,C,L,D].forEach(function(e){clearTimeout(e)}),an.removeEventListener("scroll",He),an.removeEventListener("hashchange",ut),an.removeEventListener("resize",Lt),cn.removeEventListener("keydown",dt),cn.removeEventListener("keyup",vt),["click","touchstart"].forEach(function(e){cn.removeEventListener(e,ye)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){cn.removeEventListener(e,xe,!0)}),Jt("dragAndMove","destroy"),e&&(Gt(0),Gn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){Qe(e,"src")}),Gn("img[data-srcset]").forEach(function(e){Qe(e,"srcset")}),Lo(Gn(Tn+", "+Pn+", "+Wn)),Jn(Gn(wn),{height:"","background-color":"",padding:""}),Jn(Gn(Cn),{width:""}),Jn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Jn(s,{overflow:"",height:""}),ao(c,pn),ao(g,fn),g.className.split(/\s+/).forEach(function(e){0===e.indexOf(hn)&&ao(g,e)}),Gn(wn+", "+Cn).forEach(function(e){b.scrollOverflowHandler&&b.scrollOverflow&&b.scrollOverflowHandler.remove(e),ao(e,Bn+" "+gn+" "+Sn);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Fn(e,bn)&&!Z&&e.removeAttribute("data-anchor")}),_t(w),[xn,Nn,Rn].forEach(function(e){Gn(e,w).forEach(function(e){fo(e)})}),an.scrollTo(0,0),[bn,kn,In].forEach(function(e){ao(Gn("."+e),e)}))},m.getActiveSection=function(){return new rn(Gn(yn)[0])},m.getActiveSlide=function(){return Ue(Gn(Hn,Gn(yn)[0])[0])},m.landscapeScroll=wt,m.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Gn(b.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<Gn(b.sectionSelector,w).length;t++)e.push(0);return e}(),options:b,setAutoScrolling:re},m.shared={afterRenderActions:Ce,isNormalScrollElement:!1},an.fullpage_api=m,an.fullpage_extensions=!0,b.$&&Object.keys(m).forEach(function(e){b.$.fn.fullpage[e]=m[e]}),Ae("continuousHorizontal"),Ae("scrollHorizontally"),Ae("resetSliders"),Ae("interlockedSlides"),Ae("responsiveSlides"),Ae("fadingEffect"),Ae("dragAndMove"),Ae("offsetSections"),Ae("scrollOverflowReset"),Ae("parallax"),Ae("cards"),Ae("dropEffect"),Jt("dragAndMove","init"),b.css3&&(b.css3=function(){var e,t=cn.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",cn.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=an.getComputedStyle(t).getPropertyValue(n[o]));return cn.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),b.scrollBar=b.scrollBar||b.hybrid,function(){if(!b.anchors.length){var e="[data-anchor]",t=Gn(b.sectionSelector.split(",").join(e+",")+e,w);t.length&&t.length===Gn(b.sectionSelector,w).length&&(Z=!0,t.forEach(function(e){b.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!b.navigationTooltips.length){var n="[data-tooltip]",o=Gn(b.sectionSelector.split(",").join(n+",")+n,w);o.length&&o.forEach(function(e){b.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Jn(w,{height:"100%",position:"relative"}),lo(w,sn),lo(c,pn),y=_n(),ao(w,vn),lo(Gn(b.sectionSelector,w),bn),lo(Gn(b.slideSelector,w),kn),Jt("parallax","init");for(var e=Gn(wn),t=0;t<e.length;t++){var n=t,o=e[t],r=Gn(Cn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),Oe(o,n),l=o,a=n,void 0!==b.anchors[a]&&Fn(l,gn)&&kt(b.anchors[a],a),b.menu&&b.css3&&null!=vo(Gn(b.menu)[0],un)&&Gn(b.menu).forEach(function(e){g.appendChild(e)}),0<i?Me(o,r,i):b.verticalCentered&&zt(o)}var l,a;b.fixedElements&&b.css3&&Gn(b.fixedElements).forEach(function(e){g.appendChild(e)}),b.navigation&&function(){var e=cn.createElement("div");e.setAttribute("id",Mn);var t=cn.createElement("ul");e.appendChild(t),co(e,g);var n=Gn(Tn)[0];lo(n,"fp-"+b.navigationPosition),b.showActiveTooltip&&lo(n,"fp-show-active");for(var o="",r=0;r<Gn(wn).length;r++){var i="";b.anchors.length&&(i=b.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ke(r,"Section")+"</span><span></span></a>";var l=b.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+On+" fp-"+b.navigationPosition+'">'+l+"</div>"),o+="</li>"}Gn("ul",n)[0].innerHTML=o,lo(Gn("a",Gn("li",Gn(Tn)[0])[no(Gn(yn)[0],wn)]),gn)}(),Gn('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),Jt("fadingEffect","apply"),Jt("dropEffect","init"),Jt("cards","init"),b.scrollOverflow&&(p=b.scrollOverflowHandler.init(b))}(),se(!0),ue(!0),re(b.autoScrolling,"internal"),Mt(),Dt(),"complete"===cn.readyState&&st(),an.addEventListener("load",st),b.scrollOverflow||Ce(),function(){for(var e=1;e<4;e++)C=setTimeout(Le,350*e)}(),N||at("l"),an.addEventListener("scroll",He),an.addEventListener("hashchange",ut),an.addEventListener("focus",mt),an.addEventListener("blur",St),an.addEventListener("resize",Lt),cn.addEventListener("keydown",dt),cn.addEventListener("keyup",vt),["click","touchstart"].forEach(function(e){cn.addEventListener(e,ye)}),b.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ee(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ee(e,!0)})),Jt("dragAndMove","turnOffTouch"));var U,F,_,Q=!1,J=0,K=0,$=0,q=0,ee=(new Date).getTime(),te=0,ne=0,oe=y;return m}function re(e,t){e||Gt(0),qt("autoScrolling",e,t);var n=Gn(yn)[0];if(b.autoScrolling&&!b.scrollBar)Jn(s,{overflow:"hidden",height:"100%"}),ie(V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Gt(n.offsetTop);else if(Jn(s,{overflow:"visible",height:"initial"}),ie(!!b.autoScrolling&&V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"","touch-action":""}),_t(w),null!=n){var o=Fe(n.offsetTop);o.element.scrollTo(0,o.options)}wo(w,"setAutoScrolling",e)}function ie(e,t){qt("recordHistory",e,t)}function le(e,t){"internal"!==t&&Qt("fadingEffect")&&m.fadingEffect.update(e),Qt("cards")&&m.cards.update(e),qt("scrollingSpeed",e,t)}function ae(e,t){qt("fitToSection",e,t)}function ce(e){e?(function(){var e,t="";an.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in cn.createElement("div")?"wheel":void 0!==cn.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!j&&{passive:!1};"DOMMouseScroll"==n?cn[e](t+"MozMousePixelScroll",Ye,o):cn[e](t+n,Ye,o)}(),w.addEventListener("mousedown",pt),w.addEventListener("mouseup",ht)):(cn.addEventListener?(cn.removeEventListener("mousewheel",Ye,!1),cn.removeEventListener("wheel",Ye,!1),cn.removeEventListener("MozMousePixelScroll",Ye,!1)):cn.detachEvent("onmousewheel",Ye),w.removeEventListener("mousedown",pt),w.removeEventListener("mouseup",ht))}function se(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ft(t,e,"m")}):Ft(t,"all","m"),wo(w,"setAllowScrolling",{value:t,directions:e})}function ue(e){e?(ce(!0),function(){if((r||i)&&(!Qt("dragAndMove")||"mouseonly"===b.dragAndMove)){b.autoScrolling&&(g.removeEventListener(R.touchmove,Ie,{passive:!1}),g.addEventListener(R.touchmove,Ie,{passive:!1}));var e=b.touchWrapper;e.removeEventListener(R.touchstart,je),e.removeEventListener(R.touchmove,Ne,{passive:!1}),e.addEventListener(R.touchstart,je),e.addEventListener(R.touchmove,Ne,{passive:!1})}}()):(ce(!1),function(){if(r||i){b.autoScrolling&&(g.removeEventListener(R.touchmove,Ne,{passive:!1}),g.removeEventListener(R.touchmove,Ie,{passive:!1}));var e=b.touchWrapper;e.removeEventListener(R.touchstart,je),e.removeEventListener(R.touchmove,Ne,{passive:!1})}}())}function fe(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ft(t,e,"k")}):(Ft(t,"all","k"),b.keyboardScrolling=t)}function de(){var e=Kn(Gn(yn)[0],wn);e||!b.loopTop&&!b.continuousVertical||(e=to(Gn(wn))),null!=e&&Ze(e,null,!0)}function ve(){var e=$n(Gn(yn)[0],wn);e||!b.loopBottom&&!b.continuousVertical||(e=Gn(wn)[0]),null!=e&&Ze(e,null,!1)}function pe(e,t){le(0,"internal"),he(e,t),le(V.scrollingSpeed,"internal")}function he(e,t){var n=Nt(e);void 0!==t?Bt(e,t):null!=n&&Ze(n)}function ge(e){We("right",e)}function me(e){We("left",e)}function Se(e){if(!Fn(w,vn)){E=!0,y=_n(),f=Qn();for(var t=Gn(wn),n=0;n<t.length;++n){var o=t[n],r=Gn(Rn,o)[0],i=Gn(Cn,o);b.verticalCentered&&Jn(Gn(xn,o),{height:Rt(o)+"px"}),Jn(o,{height:Te(o)+"px"}),1<i.length&&wt(r,Gn(Hn,r)[0])}b.scrollOverflow&&p.createScrollBarForAll();var l=no(Gn(yn)[0],wn);!l||Qt("fadingEffect")||Qt("dropEffect")||pe(l+1),E=!1,bo(b.afterResize)&&e&&b.afterResize.call(w,an.innerWidth,an.innerHeight),bo(b.afterReBuild)&&!e&&b.afterReBuild.call(w),wo(w,"afterRebuild")}}function be(){return Fn(g,fn)}function we(e){var t=be();e?t||(re(!1,"internal"),ae(!1,"internal"),oo(Gn(Tn)),lo(g,fn),bo(b.afterResponsive)&&b.afterResponsive.call(w,e),Jt("responsiveSlides","toSections"),wo(w,"afterResponsive",e),b.scrollOverflow&&p.createScrollBarForAll()):t&&(re(V.autoScrolling,"internal"),ae(V.autoScrolling,"internal"),ro(Gn(Tn)),ao(g,fn),bo(b.afterResponsive)&&b.afterResponsive.call(w,e),Jt("responsiveSlides","toSlides"),wo(w,"afterResponsive",e))}function ye(e){var t=e.target;t&&vo(t,Tn+" a")?function(e){So(e);var t=no(vo(this,Tn+" li"));Ze(Gn(wn)[t])}.call(t,e):yo(t,".fp-tooltip")?function(){wo(qn(this),"click")}.call(t):yo(t,Wn)?function(){var e=vo(this,wn);Fn(this,Dn)?v.m.left&&me(e):v.m.right&&ge(e)}.call(t,e):yo(t,Yn)||null!=vo(t,Yn)?function(e){So(e);var t=Gn(Rn,vo(this,wn))[0],n=Gn(Cn,t)[no(vo(this,"li"))];wt(t,n)}.call(t,e):vo(t,b.menu+" [data-menuanchor]")&&function(e){!Gn(b.menu)[0]||!b.lockAnchors&&b.anchors.length||(So(e),he(this.getAttribute("data-menuanchor")))}.call(t,e)}function Ee(e,t){cn["fp_"+e]=t,cn.addEventListener(e,xe,!0)}function xe(e){var t=e.type,o=!1,r=b.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==cn||!i)return ue(!0),void(r&&b.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(X=!1,setTimeout(function(){X=!0},800)),("mouseenter"!==t||X)&&(b.normalScrollElements.split(",").forEach(function(e){if(!o){var t=yo(i,e),n=vo(i,e);(t||n)&&(m.shared.isNormalScrollElement||(ue(!1),r&&b.scrollOverflowHandler.setIscroll(i,!1)),m.shared.isNormalScrollElement=!0,o=!0)}}),!o&&m.shared.isNormalScrollElement&&(ue(!0),r&&b.scrollOverflowHandler.setIscroll(i,!0),m.shared.isNormalScrollElement=!1))}function Le(){var e=_n(),t=Qn();y===e&&f===t||(y=e,f=t,Se(!0))}function Ae(e){var t=["NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],n=ot(t[0]),o=ot(t[1]),r=void 0!==b[n+o],i="fp_"+e+"Extension";G[e]=r?b[n+o]:b[e+o],m[e]=void 0!==an[i]?new an[i]:null,m[e]&&m[e].c(e)}function Me(e,t,n){var o=100*n,r=100/n,i=cn.createElement("div");i.className=zn,so(t,i);var l,a,c=cn.createElement("div");c.className=In,so(t,c),Jn(Gn(Nn,e),{width:o+"%"}),1<n&&(b.controlArrows&&(l=e,a=[xo('<div class="fp-controlArrow fp-prev"></div>'),xo('<div class="fp-controlArrow fp-next"></div>')],po(Gn(Rn,l)[0],a),"#fff"!==b.controlArrowColor&&(Jn(Gn(Zn,l),{"border-color":"transparent transparent transparent "+b.controlArrowColor}),Jn(Gn(Vn,l),{"border-color":"transparent "+b.controlArrowColor+" transparent transparent"})),b.loopHorizontal||oo(Gn(Vn,l))),b.slidesNavigation&&function(e,t){co(xo('<div class="'+jn+'"><ul></ul></div>'),e);var n=Gn(Pn,e)[0];lo(n,"fp-"+b.slidesNavPosition);for(var o=0;o<t;o++){var r=Gn(Cn,e)[o];co(xo('<li><a href="#"><span class="fp-sr-only">'+ke(o,"Slide",r)+"</span><span></span></a></li>"),Gn("ul",n)[0])}Jn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),lo(Gn("a",Gn("li",n)[0]),gn)}(e,n)),t.forEach(function(e){Jn(e,{width:r+"%"}),b.verticalCentered&&zt(e)});var s=Gn(Hn,e)[0];null!=s&&(0!==no(Gn(yn),wn)||0===no(Gn(yn),wn)&&0!==no(s))?(Xt(s,"internal"),lo(s,"fp-initial")):lo(t[0],gn)}function Te(e){return b.offsetSections&&m.offsetSections?Math.round(m.offsetSections.getWindowHeight(e)):_n()}function Oe(e,t){t||null!=Gn(yn)[0]||lo(e,gn),o=Gn(yn)[0],Jn(e,{height:Te(e)+"px"}),b.paddingTop&&Jn(e,{"padding-top":b.paddingTop}),b.paddingBottom&&Jn(e,{"padding-bottom":b.paddingBottom}),void 0!==b.sectionsColor[t]&&Jn(e,{"background-color":b.sectionsColor[t]}),void 0!==b.anchors[t]&&e.setAttribute("data-anchor",b.anchors[t])}function ke(e,t,n){var o="Section"===t?b.anchors[e]:n.getAttribute("data-anchor");return b.navigationTooltips[e]||o||t+" "+(e+1)}function Ce(){var e,t,n=Gn(yn)[0];lo(n,Sn),Ke(n),Je(),qe(n),b.scrollOverflow&&b.scrollOverflowHandler.afterLoad(),e=ft(),t=Nt(e.section),e.section&&t&&(void 0===t||no(t)!==no(o))||!bo(b.afterLoad)||Xe("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:no(n,wn)}),bo(b.afterRender)&&Xe("afterRender"),wo(w,"afterRender")}function He(){var e;if(wo(w,"onScroll"),!E&&(!b.autoScrolling||b.scrollBar||Qt("dragAndMove"))&&!$t()){var t=Qt("dragAndMove")?Math.abs(m.dragAndMove.getCurrentScroll()):go(),n=0,o=t+_n()/2,r=(Qt("dragAndMove")?m.dragAndMove.getDocumentHeight():g.offsetHeight-_n())===t,i=Gn(wn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Fn(e=i[n],gn)){Q=!0;var a,c,s=Gn(yn)[0],u=no(s,wn)+1,f=Ct(e),d=e.getAttribute("data-anchor"),v=no(e,wn)+1,p=Gn(Hn,e)[0],h={activeSection:s,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(c=p.getAttribute("data-anchor"),a=no(p)),x&&(lo(e,gn),ao(mo(e),gn),Jt("parallax","afterLoad"),bo(b.onLeave)&&Xe("onLeave",h),bo(b.afterLoad)&&Xe("afterLoad",h),Qt("resetSliders")&&m.resetSliders.apply({localIsResizing:E,leavingSection:u}),tt(s),Ke(e),qe(e),kt(d,v-1),b.anchors.length&&(S=d),Pt(a,c,d)),clearTimeout(T),T=setTimeout(function(){Q=!1},100)}b.fitToSection&&(clearTimeout(O),O=setTimeout(function(){b.fitToSection&&Gn(yn)[0].offsetHeight<=y&&ze()},b.fitToSectionDelay))}}function ze(){x&&(E=!0,Ze(Gn(yn)[0]),E=!1)}function Re(e){if(v.m[e]){var t="down"===e?ve:de;if(Qt("scrollHorizontally")&&(t=m.scrollHorizontally.getScrollSection(e,t)),b.scrollOverflow){var n=b.scrollOverflowHandler.scrollable(Gn(yn)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!b.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Ie(e){b.autoScrolling&&Be(e)&&v.m.up&&So(e)}function Ne(e){var t=vo(e.target,wn)||Gn(yn)[0];if(Be(e)){b.autoScrolling&&So(e);var n=Zt(e);$=n.y,q=n.x,Gn(Rn,t).length&&Math.abs(K-q)>Math.abs(J-$)?!a&&Math.abs(K-q)>Qn()/100*b.touchSensitivity&&(q<K?v.m.right&&ge(t):v.m.left&&me(t)):b.autoScrolling&&x&&Math.abs(J-$)>an.innerHeight/100*b.touchSensitivity&&($<J?Re("down"):J<$&&Re("up"))}}function Be(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function je(e){if(b.fitToSection&&(Y=!1),Be(e)){var t=Zt(e);J=t.y,K=t.x}}function Pe(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Ye(e){var t=(new Date).getTime(),n=Fn(Gn(".fp-completely")[0],An);if(!v.m.down&&!v.m.up)return So(e),!1;if(b.autoScrolling&&!u&&!n){var o=(e=e||an.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<d.length&&d.shift(),d.push(Math.abs(o)),b.scrollBar&&So(e);var a=t-ee;if(ee=t,200<a&&(d=[]),x&&!Kt()){var c=Pe(d,10);Pe(d,70)<=c&&l&&Re(r<0?"down":"up")}return!1}b.fitToSection&&(Y=!1)}function We(e,t){var n=null==t?Gn(yn)[0]:t,o=Gn(Rn,n)[0];if(!(null==o||Kt()||a||Gn(Cn,o).length<2)){var r=Gn(Hn,o)[0],i=null;if(null==(i="left"===e?Kn(r,Cn):$n(r,Cn))){if(!b.loopHorizontal)return;var l=mo(r);i="left"===e?l[l.length-1]:l[0]}a=!m.test.isTesting,wt(o,i,e)}}function De(){for(var e=Gn(Hn),t=0;t<e.length;t++)Xt(e[t],"internal")}function Ve(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Qt("dragAndMove")&&m.dragAndMove.isGrabbing?m.dragAndMove.isScrollingDown():te<n,i=o-y+t,l=b.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==eo(e))&&(o=i),b.offsetSections&&m.offsetSections&&(o=m.offsetSections.getSectionPosition(r,o,e)),te=o}function Ze(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:Ve(e),yMovement:Ct(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:no(e,wn),activeSlide:Gn(Hn,e)[0],activeSection:Gn(yn)[0],leavingSection:no(Gn(yn),wn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||b.scrollBar&&go()===i.dtop&&!Fn(e,Ln))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=no(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,void 0!==an.fp_dropEffectExtension&&m.dropEffect.onLeave(i),bo(b.onLeave)&&!1===Xe("onLeave",i))return}var a;Jt("parallax","apply",i),Jt("cards","apply",i),Jt("dropEffect","apply",i),b.autoScrolling&&b.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((c=i).isMovementUp?ho(Gn(yn)[0],Ao(c.activeSection,wn)):po(Gn(yn)[0],Mo(c.activeSection,wn).reverse()),Gt(Gn(yn)[0].offsetTop),De(),c.wrapAroundElements=c.activeSection,c.dtop=c.element.offsetTop,c.yMovement=Ct(c.element),c.leavingSection=no(c.activeSection,wn)+1,c.sectionIndex=no(c.element,wn),wo(Gn(un)[0],"onContinuousVertical",c),i=c),Qt("scrollOverflowReset")&&m.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||tt(i.activeSection),b.scrollOverflow&&b.scrollOverflowHandler.beforeLeave(),Qt("dropEffect")&&b.dropEffect||(lo(e,gn),ao(mo(e),gn)),Ke(e),b.scrollOverflow&&b.scrollOverflowHandler.onLeave(),x=m.test.isTesting,Pt(r,o,i.anchorLink,i.sectionIndex),function(e){var t=b.scrollingSpeed<700,n=t?700:b.scrollingSpeed;if(b.css3&&b.autoScrolling&&!b.scrollBar){var o="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";It(o,!0),b.scrollingSpeed?(clearTimeout(A),A=setTimeout(function(){_e(e),x=!t},b.scrollingSpeed)):_e(e)}else{var r=Fe(e.dtop);m.test.top=-e.dtop+"px",Jn(s,{"scroll-behavior":"unset"}),tn(r.element,r.options,b.scrollingSpeed,function(){b.scrollBar?setTimeout(function(){_e(e)},30):(_e(e),x=!t)})}t&&(clearTimeout(D),D=setTimeout(function(){x=!0},n))}(i),S=i.anchorLink,kt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?Gn(wn).length-1:0)}}var c}function Xe(e,t){var n,o,r,i,l=(o=e,r=t,(i=b.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Ge(Gn(yn)[0]),slide:Ue(Gn(Hn,Gn(yn)[0])[0])}},onLeave:function(){return{origin:Ge(r.activeSection),destination:Ge(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Ge(r.section),origin:Ue(r.prevSlide),destination:Ue(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(b.v2compatible){if(!1===b[e].apply(l[0],l.slice(1)))return!1}else if(wo(w,e,l),!1===b[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Ge(e){return e?new rn(e):null}function Ue(e){return e?new ln(e):null}function Fe(e){var t={};return b.autoScrolling&&!b.scrollBar?(t.options=-e,t.element=Gn(un)[0]):(t.options=e,t.element=an),t}function _e(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?ho(Gn(wn)[0],t.wrapAroundElements):po(Gn(wn)[Gn(wn).length-1],t.wrapAroundElements),Gt(Gn(yn)[0].offsetTop),De(),t.sectionIndex=no(t.element,wn),t.leavingSection=no(t.activeSection,wn)+1),bo(b.afterLoad)&&!e.localIsResizing&&Xe("afterLoad",e),b.scrollOverflow&&b.scrollOverflowHandler.afterLoad(),Jt("parallax","afterLoad"),Jt("dropEffect","afterLoad"),Jt("scrollOverflowReset","reset"),Qt("resetSliders")&&m.resetSliders.apply(e),e.localIsResizing||qe(e.element),lo(e.element,Sn),ao(mo(e.element),Sn),Je(),x=!0,bo(e.callback)&&e.callback()}function Qe(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Je(){var e=Gn(".fp-auto-height")[0]||be()&&Gn(".fp-auto-height-responsive")[0];b.lazyLoading&&e&&Gn(wn+":not("+mn+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<y&&0<n||2<o&&o<y)&&Ke(e)})}function Ke(o){b.lazyLoading&&Gn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",nt(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(Qe(n,e),n.addEventListener("load",function(){$e(o)}))}),yo(n,"source")){var e=vo(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){$e(o)})}})}function $e(e){b.scrollOverflow&&(clearTimeout(W),W=setTimeout(function(){Fn(g,fn)||p.createScrollBar(e)},200))}function qe(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&et(e),e.onload=function(){e.hasAttribute("data-autoplay")&&et(e)}})}function et(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function tt(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function nt(e){var t=Gn(Hn,e);return t.length&&(e=t[0]),e}function ot(e){var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",c=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");c<e.length;)t=s.indexOf(e.charAt(c++))<<2|(r=s.indexOf(e.charAt(c++)))>>4,n=(15&r)<<4|(i=s.indexOf(e.charAt(c++)))>>2,o=(3&i)<<6|(l=s.indexOf(e.charAt(c++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function rt(g){var m=void 0!==G[g]&&G[g].length,e=[],S=!1;return io(G[g])?e=G[g]:e.push(G[g]),e.forEach(function(e){var t=function(){if(cn.domain.length){for(var e=cn.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN","NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],o=ot(n[0]),r=ot(n[1]),i=ot(n[2]),l=ot(n[3]),a=ot(n[4]),c=ot(n[5]),s=void 0!==b[a+c];m=m||s;var u=[o,r,i].indexOf(t)<0&&0!==t.length;if(!m&&!s&&u)return!1;var f=m?ot(e):"",d=1<(f=f.split("_")).length&&-1<f[1].indexOf(g,f[1].length-g.length),v=1<f.length&&-1<f[1].toLowerCase().indexOf(a),p=f[0].indexOf(t,f[0].length-t.length)<0,h=d||v;S=S||!(p&&u&&l!=f[0])&&h||!u}),S}function it(e){e.forEach(function(e){if(e.removedNodes[0]&&e.removedNodes[0].isEqualNode(F)){clearTimeout(_);var t=ot("bDIwc2V0VGltZW91dDAzbA==");_=an[t](lt,900)}})}function lt(){I=!1}function at(e){if(F=cn.createElement("div"),U=ot("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),N||(U=U.replace("extensions/","").replace("Extension","")),F.innerHTML=U,F=F.firstChild,"MutationObserver"in an&&new MutationObserver(it).observe(cn.body,{childList:!0,subtree:!1}),(!N||Qt(e)&&m[e])&&(!rt(e)||!N)){ct();var t=ot("MzQ1c2V0SW50ZXJ2YWwxMjM=");an[t](ct,2e3)}}function ct(){F&&(I||(Math.random()<.5?To(g,F):co(F,g),I=!0),F.setAttribute("style",ot("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,ot("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function st(){var e=ft(),t=e.section,n=e.slide;t&&(b.animateAnchor?Bt(t,n):pe(t,n))}function ut(e){if(!Q&&!b.lockAnchors){var t=ft(),n=t.section,o=t.slide,r=void 0===S,i=void 0===S&&void 0===o&&!a;n&&n.length&&(n&&n!==S&&!r||i&&!Kt()||!a&&l!=o&&!Kt())&&Bt(n,o)}}function ft(){var e,t,n=an.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function dt(e){clearTimeout(k);var t=cn.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,c=e.shiftKey,s=cn.activeElement,u=gt(nt(Gn(yn)[0]));function f(e){return So(e),u[0]?u[0].focus():null}(t=e,n=gt(cn),o=n.indexOf(cn.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Ue(vo(i,Cn)),a=Ge(vo(i,wn)),l||a)&&(s?null==vo(s,yn+","+yn+" "+Hn)&&(s=f(e)):f(e),(!c&&s==u[u.length-1]||c&&s==u[0])&&So(e))}(e):yo(t,"textarea")||yo(t,"input")||yo(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!b.keyboardScrolling||!b.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&So(e),u=e.ctrlKey,k=setTimeout(function(){!function(e){var t=e.shiftKey,n=cn.activeElement,o=yo(n,"video")||yo(n,"audio");if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:v.k.up&&de();break;case 32:if(t&&v.k.up&&!o){de();break}case 40:case 34:v.k.down&&(32===e.keyCode&&o||ve());break;case 36:v.k.up&&he(1);break;case 35:v.k.down&&he(Gn(wn).length);break;case 37:v.k.left&&me();break;case 39:v.k.right&&ge()}}(e)},150))}function vt(e){t&&(u=e.ctrlKey)}function pt(e){2==e.which&&(ne=e.pageY,w.addEventListener("mousemove",bt))}function ht(e){2==e.which&&w.removeEventListener("mousemove",bt)}function gt(e){return[].slice.call(Gn(B,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function mt(){t=!0}function St(){u=t=!1}function bt(e){b.autoScrolling&&(x&&(e.pageY<ne&&v.m.up?de():e.pageY>ne&&v.m.down&&ve()),ne=e.pageY)}function wt(e,t,n){var o=vo(e,wn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:no(t),section:o,sectionIndex:no(o,wn),anchorLink:o.getAttribute("data-anchor"),slidesNav:Gn(Pn,o)[0],slideAnchor:Wt(t),prevSlide:Gn(Hn,o)[0],prevSlideIndex:no(Gn(Hn,o)[0]),localIsResizing:E};r.xMovement=Ht(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(x=!1),Jt("parallax","applyHorizontal",r),Jt("cards","apply",r),Jt("dropEffect","apply",r),b.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&bo(b.onSlideLeave)&&!1===Xe("onSlideLeave",r)?a=!1:(Qt("dropEffect")&&b.dropEffect||(lo(t,gn),ao(mo(t),gn)),r.localIsResizing||(tt(r.prevSlide),Ke(t)),yt(r),Fn(o,gn)&&!r.localIsResizing&&Pt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),m.continuousHorizontal&&m.continuousHorizontal.apply(r),$t()?Et(r):xt(e,r,!0),b.interlockedSlides&&m.interlockedSlides&&(Qt("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||m.interlockedSlides.apply(r)))}function yt(e){!b.loopHorizontal&&b.controlArrows&&(Eo(Gn(Vn,e.section),0!==e.slideIndex),Eo(Gn(Zn,e.section),null!=eo(e.destiny)))}function Et(e){var t,n;m.continuousHorizontal&&m.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,b.slidesNavigation&&null!=t&&(ao(Gn(mn,t),gn),lo(Gn("a",Gn("li",t)[n]),gn)),e.localIsResizing||(Jt("parallax","afterSlideLoads"),Jt("scrollOverflowReset","setPrevious",e.prevSlide),Jt("scrollOverflowReset","reset"),bo(b.afterSlideLoad)&&Xe("afterSlideLoad",e),x=!0,qe(e.destiny)),a=!1,Qt("interlockedSlides")&&m.interlockedSlides.apply(e)}function xt(e,t,n){var o=t.destinyPos;if(b.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";m.test.translate3dH[t.sectionIndex]=r,Qt("dragAndMove")&&void 0!==t.isInterlockedSlide||Tt(Gn(Nn,e)),Jn(Gn(Nn,e),Ut(r)),M=setTimeout(function(){n&&Et(t)},b.scrollingSpeed)}else m.test.left[t.sectionIndex]=Math.round(o.left),tn(e,Math.round(o.left),b.scrollingSpeed,function(){n&&Et(t)})}function Lt(){clearTimeout(h),h=setTimeout(function(){for(var e=0;e<4;e++)L=setTimeout(At,200*e)},200)}function At(){if(E=!0,wo(w,"onResize"),Mt(),r){var e=cn.activeElement;if(!yo(e,"textarea")&&!yo(e,"input")&&!yo(e,"select")){var t=_n();Math.abs(t-oe)>20*Math.max(oe,t)/100&&(Se(!0),oe=t)}}else Le();E=!1}function Mt(){var e=b.responsive||b.responsiveWidth,t=b.responsiveHeight,n=e&&an.innerWidth<e,o=t&&an.innerHeight<t;e&&t?we(n||o):e?we(n):t&&we(o)}function Tt(e){var t="all "+b.scrollingSpeed+"ms "+b.easingcss3;return ao(e,dn),Jn(e,{"-webkit-transition":t,transition:t})}function Ot(e){return lo(e,dn)}function kt(e,t){var n,o,r,i;n=e,Gn(b.menu).forEach(function(e){b.menu&&null!=e&&(ao(Gn(mn,e),gn),lo(Gn('[data-menuanchor="'+n+'"]',e),gn))}),o=e,r=t,i=Gn(Tn)[0],b.navigation&&null!=i&&"none"!==i.style.display&&(ao(Gn(mn,Gn(Tn)[0]),gn),lo(o?Gn('a[href="#'+o+'"]',Gn(Tn)[0]):Gn("a",Gn("li",Gn(Tn)[0])[r]),gn))}function Ct(e){var t=no(Gn(yn)[0],wn),n=no(e,wn);return t==n?"none":n<t?"up":"down"}function Ht(e,t){return e==t?"none":t<e?"left":"right"}function zt(e){if(!Fn(e,Bn)){var t=cn.createElement("div");t.className=En,t.style.height=Rt(e)+"px",lo(e,Bn),uo(e,t)}}function Rt(e){var t=Te(e);if(b.paddingTop||b.paddingBottom){var n=e;Fn(n,bn)||(n=vo(e,wn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function It(e,t){t?Tt(w):Ot(w),clearTimeout(H),Jn(w,Ut(e)),m.test.translate3d=e,H=setTimeout(function(){ao(w,dn)},10)}function Nt(e){var t=Gn(wn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=Gn(wn)[n]}return t}function Bt(e,t){var n=Nt(e);if(null!=n){var o,r,i,l=(null==(i=Gn(Cn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=Gn(Cn,r)[o]),i);Wt(n)===S||Fn(n,gn)?jt(l):Ze(n,function(){jt(l)})}}function jt(e){null!=e&&wt(vo(e,Rn),e)}function Pt(e,t,n,o){var r="";b.anchors.length&&!b.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Yt(r+"/"+(l=t))):(null!=e&&(l=t),Yt(n))),Dt()}function Yt(e){if(b.recordHistory)location.hash=e;else if(r||i)an.history.replaceState(void 0,void 0,"#"+e);else{var t=an.location.href.split("#")[0];an.location.replace(t+"#"+e)}}function Wt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=no(e);return null==t&&(t=n),t}function Dt(){var e=Gn(yn)[0],t=Gn(Hn,e)[0],n=Wt(e),o=Wt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+hn+"-[^\\s]+\\b","g");g.className=g.className.replace(i,""),lo(g,hn+"-"+r)}function Vt(){return an.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Zt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,i&&Be(e)&&b.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Xt(e,t){le(0,"internal"),void 0!==t&&(E=!0),wt(vo(e,Rn),e),void 0!==t&&(E=!1),le(V.scrollingSpeed,"internal")}function Gt(e){var t=Math.round(e);if(b.css3&&b.autoScrolling&&!b.scrollBar)It("translate3d(0px, -"+t+"px, 0px)",!1);else if(b.autoScrolling&&!b.scrollBar)Jn(w,{top:-t+"px"}),m.test.top=-t+"px";else{var n=Fe(t);nn(n.element,n.options)}}function Ut(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ft(t,e,n){"all"!==e?v[n][e]=t:Object.keys(v[n]).forEach(function(e){v[n][e]=t})}function _t(e){return Jn(e,{"-webkit-transition":"none",transition:"none"})}function Qt(e){return null!==b[e]&&"[object Array]"===Object.prototype.toString.call(b[e])?b[e].length&&m[e]:b[e]&&m[e]}function Jt(e,t,n){if(Qt(e))return m[e][t](n)}function Kt(){return Qt("dragAndMove")&&m.dragAndMove.isAnimating}function $t(){return Qt("dragAndMove")&&m.dragAndMove.isGrabbing}function qt(e,t,n){b[e]=t,"internal"!==n&&(V[e]=t)}function en(){var e=b.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(Xn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Xn("error","https://github.com/alvarotrigo/fullPage.js#options")),Fn(c,pn)?Xn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(b.continuousVertical&&(b.loopTop||b.loopBottom)&&(b.continuousVertical=!1,Xn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!b.scrollOverflow||!b.scrollBar&&b.autoScrolling||Xn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!b.continuousVertical||!b.scrollBar&&b.autoScrolling||(b.continuousVertical=!1,Xn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),b.scrollOverflow&&null==b.scrollOverflowHandler&&(b.scrollOverflow=!1,Xn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),b.anchors.forEach(function(t){var e=[].slice.call(Gn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(Gn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Xn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Xn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function tn(t,n,o,r){var e,i=(e=t).self!=an&&Fn(e,zn)?e.scrollLeft:!b.autoScrolling||b.scrollBar?go():e.offsetTop,l=n-i,a=0;Y=!0;var c=function(){if(Y){var e=n;a+=20,o&&(e=an.fp_easings[b.easing](a,i,l,o)),nn(t,e),a<o?setTimeout(c,20):void 0!==r&&r()}else a<o&&r()};c()}function nn(e,t){!b.autoScrolling||b.scrollBar||e.self!=an&&Fn(e,zn)?e.self!=an&&Fn(e,zn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function on(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=no(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function rn(e){on.call(this,e,wn)}function ln(e){on.call(this,e,Cn)}en()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Velocity=t()}(this,(function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function n(e){return!0===e||!1===e}function r(e){return"[object Function]"===Object.prototype.toString.call(e)}function i(e){return!(!e||!e.nodeType)}function o(e){return"number"==typeof e}function a(t){if(!t||"object"!==(void 0===t?"undefined":e(t))||t.nodeType||"[object Object]"!==Object.prototype.toString.call(t))return!1;var n=Object.getPrototypeOf(t);return!n||n.hasOwnProperty("constructor")&&n.constructor===Object}function l(e){return"string"==typeof e}function u(e){return e&&o(e.length)&&r(e.velocity)}function s(e){return e&&e!==window&&o(e.length)&&!l(e)&&!r(e)&&!i(e)&&(0===e.length||i(e[0]))}function c(e){return Array.prototype.slice.call(e,0)}function f(e,t,n,r){e&&Object.defineProperty(e,t,{configurable:!r,writable:!r,value:n})}function d(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value;if(void 0!==u&&u==u)return u}}catch(e){i=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw o}}}var v=Date.now?Date.now:function(){return(new Date).getTime()};function p(e,t){e instanceof Element&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(\\s|$)","gi")," "))}var y={};function g(e,t){var n=e[0],i=e[1];l(n)?r(i)?y[n]&&!function(e,t){return Object.prototype.propertyIsEnumerable.call(e,t)}(y,n)?console.warn("VelocityJS: Trying to override internal 'registerAction' callback",n):!0===t?f(y,n,i):y[n]=i:console.warn("VelocityJS: Trying to set 'registerAction' callback to an invalid value:",n,i):console.warn("VelocityJS: Trying to set 'registerAction' name to an invalid value:",n)}g(["registerAction",g],!0);var h={fast:200,normal:400,slow:600},m={};function w(e){var t=e[0],n=e[1];l(t)?r(n)?m[t]?console.warn("VelocityJS: Trying to override 'registerEasing' callback",t):m[t]=n:console.warn("VelocityJS: Trying to set 'registerEasing' callback to an invalid value:",t,n):console.warn("VelocityJS: Trying to set 'registerEasing' name to an invalid value:",t)}function b(e,t,n,r){return t+e*(n-t)}function S(e){return Math.min(Math.max(e,0),1)}function x(e,t){return 1-3*t+3*e}function k(e,t){return 3*t-6*e}function O(e){return 3*e}function E(e,t,n){return((x(t,n)*e+k(t,n))*e+O(t))*e}function _(e,t,n){return 3*x(t,n)*e*e+2*k(t,n)*e+O(t)}function T(){for(var e=4,t=.001,n=1e-7,r=10,i=11,o=1/(i-1),a=("Float32Array"in window),l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];if(4===u.length){for(var c=0;c<4;++c)if("number"!=typeof u[c]||isNaN(u[c])||!isFinite(u[c]))return;var f=S(u[0]),d=u[1],v=S(u[2]),p=u[3],y=a?new Float32Array(i):new Array(i),g=!1,h="generateBezier("+[f,d,v,p]+")",m=function(e,t,n,r){return g||O(),0===e?t:1===e?n:f===d&&v===p?t+e*(n-t):t+E(k(e),d,p)*(n-t)};return m.getControlPoints=function(){return[{x:f,y:d},{x:v,y:p}]},m.toString=function(){return h},m}function w(t,n){for(var r=0;r<e;++r){var i=_(n,f,v);if(0===i)return n;n-=(E(n,f,v)-t)/i}return n}function b(){for(var e=0;e<i;++e)y[e]=E(e*o,f,v)}function x(e,t,i){var o=void 0,a=void 0,l=0;do{(o=E(a=t+(i-t)/2,f,v)-e)>0?i=a:t=a}while(Math.abs(o)>n&&++l<r);return a}function k(e){for(var n=i-1,r=0,a=1;a!==n&&y[a]<=e;++a)r+=o;--a;var l=r+(e-y[a])/(y[a+1]-y[a])*o,u=_(l,f,v);return u>=t?w(e,l):0===u?l:x(e,r,r+o)}function O(){g=!0,f===d&&v===p||b()}}g(["registerEasing",w],!0),w(["linear",b]),w(["swing",function(e,t,n){return t+(.5-Math.cos(e*Math.PI)/2)*(n-t)}]),w(["spring",function(e,t,n){return t+(1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e))*(n-t)}]);var M=T(.42,0,1,1),V=T(0,0,.58,1),q=T(.42,0,.58,1);function N(e){return-e.tension*e.x-e.friction*e.v}function A(e,t,n){var r={x:e.x+n.dx*t,v:e.v+n.dv*t,tension:e.tension,friction:e.friction};return{dx:r.v,dv:N(r)}}function L(e,t){var n={dx:e.v,dv:N(e)},r=A(e,.5*t,n),i=A(e,.5*t,r),o=A(e,t,i),a=1/6*(n.dx+2*(r.dx+i.dx)+o.dx),l=1/6*(n.dv+2*(r.dv+i.dv)+o.dv);return e.x=e.x+a*t,e.v=e.v+l*t,e}w(["ease",T(.25,.1,.25,1)]),w(["easeIn",M]),w(["ease-in",M]),w(["easeOut",V]),w(["ease-out",V]),w(["easeInOut",q]),w(["ease-in-out",q]),w(["easeInSine",T(.47,0,.745,.715)]),w(["easeOutSine",T(.39,.575,.565,1)]),w(["easeInOutSine",T(.445,.05,.55,.95)]),w(["easeInQuad",T(.55,.085,.68,.53)]),w(["easeOutQuad",T(.25,.46,.45,.94)]),w(["easeInOutQuad",T(.455,.03,.515,.955)]),w(["easeInCubic",T(.55,.055,.675,.19)]),w(["easeOutCubic",T(.215,.61,.355,1)]),w(["easeInOutCubic",T(.645,.045,.355,1)]),w(["easeInQuart",T(.895,.03,.685,.22)]),w(["easeOutQuart",T(.165,.84,.44,1)]),w(["easeInOutQuart",T(.77,0,.175,1)]),w(["easeInQuint",T(.755,.05,.855,.06)]),w(["easeOutQuint",T(.23,1,.32,1)]),w(["easeInOutQuint",T(.86,0,.07,1)]),w(["easeInExpo",T(.95,.05,.795,.035)]),w(["easeOutExpo",T(.19,1,.22,1)]),w(["easeInOutExpo",T(1,0,0,1)]),w(["easeInCirc",T(.6,.04,.98,.335)]),w(["easeOutCirc",T(.075,.82,.165,1)]),w(["easeInOutCirc",T(.785,.135,.15,.86)]);var J={};function I(e,t){return o(e)?e:l(e)?h[e.toLowerCase()]||parseFloat(e.replace("ms","").replace("s","000")):null==t?void 0:I(t)}function j(e){if(n(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'cache' to an invalid value:",e)}function C(e){if(r(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'begin' to an invalid value:",e)}function P(e,t){if(r(e))return e;null==e||t||console.warn("VelocityJS: Trying to set 'complete' to an invalid value:",e)}function z(e){var t=I(e);if(!isNaN(t))return t;null!=e&&console.error("VelocityJS: Trying to set 'delay' to an invalid value:",e)}function F(e,t){var n=I(e);if(!isNaN(n)&&n>=0)return n;null==e||t||console.error("VelocityJS: Trying to set 'duration' to an invalid value:",e)}function H(e,t,n){if(l(e))return m[e];if(r(e))return e;if(Array.isArray(e)){if(1===e.length)return i=e[0],J[i]||(J[i]=function(e,t,n){return 0===e?t:1===e?n:t+Math.round(e*i)*(1/i)*(n-t)});if(2===e.length)return function e(t,n,r){var i={x:-1,v:0,tension:parseFloat(t)||500,friction:parseFloat(n)||20},o=[0],a=null!=r,l=0,u=void 0,s=void 0;for(u=a?(l=e(i.tension,i.friction))/r*.016:.016;s=L(s||i,u),o.push(1+s.x),l+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return a?function(e,t,n){return 0===e?t:1===e?n:t+o[Math.floor(e*(o.length-1))]*(n-t)}:l}(e[0],e[1],t);if(4===e.length)return T.apply(null,e)||!1}var i;null==e||n||console.error("VelocityJS: Trying to set 'easing' to an invalid value:",e)}function R(e){if(!1===e)return 0;var t=parseInt(e,10);if(!isNaN(t)&&t>=0)return Math.min(t,60);null!=e&&console.warn("VelocityJS: Trying to set 'fpsLimit' to an invalid value:",e)}function B(e){switch(e){case!1:return 0;case!0:return!0;default:var t=parseInt(e,10);if(!isNaN(t)&&t>=0)return t}null!=e&&console.warn("VelocityJS: Trying to set 'loop' to an invalid value:",e)}function W(e){if(r(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'progress' to an invalid value:",e)}function $(e,t){if(!1===e||l(e))return e;null==e||t||console.warn("VelocityJS: Trying to set 'queue' to an invalid value:",e)}function G(e){switch(e){case!1:return 0;case!0:return!0;default:var t=parseInt(e,10);if(!isNaN(t)&&t>=0)return t}null!=e&&console.warn("VelocityJS: Trying to set 'repeat' to an invalid value:",e)}function Q(e){if(o(e))return e;null!=e&&console.error("VelocityJS: Trying to set 'speed' to an invalid value:",e)}function D(e){if(n(e))return e;null!=e&&console.error("VelocityJS: Trying to set 'sync' to an invalid value:",e)}var U=void 0,Z=void 0,Y=void 0,X=void 0,K=void 0,ee=void 0,te=void 0,ne=void 0,re=void 0,ie=void 0,oe=void 0,ae=void 0,le=void 0,ue=void 0,se=void 0,ce=void 0,fe=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,null,[{key:"reset",value:function(){U=!0,Z=void 0,Y=void 0,X=0,K=400,ee=H("swing",400),te=60,ne=0,ie=980/60,oe=!0,ae=!0,le="",ue=0,se=1,ce=!0}},{key:"cache",get:function(){return U},set:function(e){void 0!==(e=j(e))&&(U=e)}},{key:"begin",get:function(){return Z},set:function(e){void 0!==(e=C(e))&&(Z=e)}},{key:"complete",get:function(){return Y},set:function(e){void 0!==(e=P(e))&&(Y=e)}},{key:"delay",get:function(){return X},set:function(e){void 0!==(e=z(e))&&(X=e)}},{key:"duration",get:function(){return K},set:function(e){void 0!==(e=F(e))&&(K=e)}},{key:"easing",get:function(){return ee},set:function(e){void 0!==(e=H(e,K))&&(ee=e)}},{key:"fpsLimit",get:function(){return te},set:function(e){void 0!==(e=R(e))&&(te=e,ie=980/e)}},{key:"loop",get:function(){return ne},set:function(e){void 0!==(e=B(e))&&(ne=e)}},{key:"mobileHA",get:function(){return re},set:function(e){n(e)&&(re=e)}},{key:"minFrameTime",get:function(){return ie}},{key:"promise",get:function(){return oe},set:function(e){void 0!==(e=function(e){if(n(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'promise' to an invalid value:",e)}(e))&&(oe=e)}},{key:"promiseRejectEmpty",get:function(){return ae},set:function(e){void 0!==(e=function(e){if(n(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'promiseRejectEmpty' to an invalid value:",e)}(e))&&(ae=e)}},{key:"queue",get:function(){return le},set:function(e){void 0!==(e=$(e))&&(le=e)}},{key:"repeat",get:function(){return ue},set:function(e){void 0!==(e=G(e))&&(ue=e)}},{key:"repeatAgain",get:function(){return ue}},{key:"speed",get:function(){return se},set:function(e){void 0!==(e=Q(e))&&(se=e)}},{key:"sync",get:function(){return ce},set:function(e){void 0!==(e=D(e))&&(ce=e)}}]),e}();Object.freeze(fe),fe.reset();var de=[],ve={},pe=new Set,ye=[],ge=new Map;function he(e){var t=e.velocityData;if(t)return t;for(var n=e.ownerDocument.defaultView,r=0,i=0;i<ye.length;i++){var o=ye[i];l(o)?e instanceof n[o]&&(r|=1<<i):e instanceof o&&(r|=1<<i)}var a={types:r,count:0,computedStyle:null,cache:{},queueList:{},lastAnimationList:{},lastFinishList:{},window:n};return Object.defineProperty(e,"velocityData",{value:a}),a}var me=window&&window===window.window,we=me&&void 0!==window.pageYOffset,be={isClient:me,isMobile:me&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isGingerbread:me&&/Android 2\.3\.[3-7]/i.test(navigator.userAgent),prefixElement:me&&document.createElement("div"),windowScrollAnchor:we,scrollAnchor:we?window:!me||document.documentElement||document.body.parentNode||document.body,scrollPropertyLeft:we?"pageXOffset":"scrollLeft",scrollPropertyTop:we?"pageYOffset":"scrollTop",className:"velocity-animating",isTicking:!1,first:void 0,last:void 0,firstNew:void 0};function Se(e){var t=be.last;e._prev=t,e._next=void 0,t?t._next=e:be.first=e,be.last=e,be.firstNew||(be.firstNew=e);var n=e.element;he(n).count++||function(e,t){e instanceof Element&&(e.classList?e.classList.add(t):(p(e,t),e.className+=(e.className.length?" ":"")+t))}(n,be.className)}function xe(e,t,n){var r=he(e);if(!1!==n&&(r.lastAnimationList[n]=t),!1===n)Se(t);else{l(n)||(n="");var i=r.queueList[n];if(i){for(;i._next;)i=i._next;i._next=t,t._prev=i}else null===i?r.queueList[n]=t:(r.queueList[n]=null,Se(t))}}function ke(e){var t=e._next,n=e._prev,r=null==e.queue?e.options.queue:e.queue;(be.firstNew===e&&(be.firstNew=t),be.first===e?be.first=t:n&&(n._next=t),be.last===e?be.last=n:t&&(t._prev=n),r)&&(he(e.element)&&(e._next=e._prev=void 0))}var Oe={};function Ee(e){var t=e.options,n=d(e.queue,t.queue),r=d(e.loop,t.loop,fe.loop),i=d(e.repeat,t.repeat,fe.repeat),o=8&e._flags;if(o||!r&&!i){var a=e.element,u=he(a);if(--u.count||o||p(a,be.className),t&&++t._completed===t._total){!o&&t.complete&&(!function(e){var t=e.complete||e.options.complete;if(t)try{var n=e.elements;t.call(n,n,e)}catch(e){setTimeout((function(){throw e}),1)}}(e),t.complete=null);var s=t._resolver;s&&(s(e.elements),delete t._resolver)}!1!==n&&(o||(u.lastFinishList[n]=e.timeStart+d(e.duration,t.duration,fe.duration)),function(e,t,n){if(!1!==t){l(t)||(t="");var r=he(e),i=r.queueList[t];i?(r.queueList[t]=i._next||null,n||Se(i)):null===i&&delete r.queueList[t]}}(a,n)),ke(e)}else i&&!0!==i?e.repeat=i-1:r&&!0!==r&&(e.loop=r-1,e.repeat=d(e.repeatAgain,t.repeatAgain,fe.repeatAgain)),r&&(e._flags^=64),!1!==n&&(he(e.element).lastFinishList[n]=e.timeStart+d(e.duration,t.duration,fe.duration)),e.timeStart=e.ellapsedTime=e.percentComplete=0,e._flags&=-5}function _e(e){var t=e[0],n=e[1],i=e[2];if((!l(t)||window[t]instanceof Object)&&(l(t)||t instanceof Object))if(l(n))if(r(i)){var o=ye.indexOf(t),a=3;if(o<0&&!l(t))if(ge.has(t))o=ye.indexOf(ge.get(t));else for(var u in window)if(window[u]===t){(o=ye.indexOf(u))<0&&(o=ye.push(u)-1,de[o]={},ge.set(t,u));break}if(o<0&&(o=ye.push(t)-1,de[o]={}),de[o][n]=i,l(e[a])){var s=e[a++],c=ve[s];c||(c=ve[s]=[]),c.push(i)}!1===e[a]&&pe.add(n)}else console.warn("VelocityJS: Trying to set 'registerNormalization' callback to an invalid value:",n,i);else console.warn("VelocityJS: Trying to set 'registerNormalization' name to an invalid value:",n);else console.warn("VelocityJS: Trying to set 'registerNormalization' constructor to an invalid value:",t)}function Te(e){var t=e[0],n=e[1],r=ye.indexOf(t);if(r<0&&!l(t))if(ge.has(t))r=ye.indexOf(ge.get(t));else for(var i in window)if(window[i]===t){r=ye.indexOf(i);break}return r>=0&&de[r].hasOwnProperty(n)}function Me(e,t){for(var n=he(e),r=void 0,i=ye.length-1,o=n.types;!r&&i>=0;i--)o&1<<i&&(r=de[i][t]);return r}function Ve(e,t,n,r){var i=pe.has(t),o=!i&&he(e);(i||o&&o.cache[t]!==n)&&(i||(o.cache[t]=n||void 0),(r=r||Me(e,t))&&r(e,n),$t.debug>=2&&console.info('Set "'+t+'": "'+n+'"',e))}function qe(e){if(e.indexOf("calc(")>=0){for(var t=e.split(/([\(\)])/),n=0,r=0;r<t.length;r++){var i=t[r];switch(i){case"(":n++;break;case")":n--;break;default:n&&"0"===i[0]&&(t[r]=i.replace(/^0[a-z%]+ \+ /,""))}}return t.join("").replace(/(?:calc)?\(([0-9\.]+[a-z%]+)\)/g,"$1")}return e}g(["registerNormalization",_e]),g(["hasNormalization",Te]);var Ne={};function Ae(e){var t=Ne[e];return t||(Ne[e]=e.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()})))}var Le=/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi,Je=/#([a-f\d])([a-f\d])([a-f\d])/gi,Ie=/(rgba?\(\s*)?(\b[a-z]+\b)/g,je=/rgb(a?)\(([^\)]+)\)/gi,Ce=/\s+/g,Pe={};function ze(e,t,n,r){return"rgba("+parseInt(t,16)+","+parseInt(n,16)+","+parseInt(r,16)+",1)"}function Fe(e){return e.replace(Le,ze).replace(Je,(function(e,t,n,r){return ze(0,t+t,n+n,r+r)})).replace(Ie,(function(e,t,n){return Pe[n]?(t||"rgba(")+Pe[n]+(t?"":",1)"):e})).replace(je,(function(e,t,n){return"rgba("+n.replace(Ce,"")+(t?"":",1")+")"}))}function He(e,t,n){if("border-box"===We(e,"boxSizing").toString().toLowerCase()===n){var r="width"===t?["Left","Right"]:["Top","Bottom"],i=["padding"+r[0],"padding"+r[1],"border"+r[0]+"Width","border"+r[1]+"Width"],o=0,a=!0,l=!1,u=void 0;try{for(var s,c=i[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var f=s.value,d=parseFloat(We(e,f));isNaN(d)||(o+=d)}}catch(e){l=!0,u=e}finally{try{!a&&c.return&&c.return()}finally{if(l)throw u}}return n?-o:o}return 0}function Re(e,t){return e.getBoundingClientRect()[t]+He(e,t,!0)+"px"}function Be(e,t){var n=he(e),r=n.computedStyle?n.computedStyle:n.window.getComputedStyle(e,null),i=0;if(n.computedStyle||(n.computedStyle=r),"none"===r.display)switch(t){case"width":case"height":return Ve(e,"display","auto"),i=Re(e,t),Ve(e,"display","none"),String(i)}if((i=r[t])||(i=e.style[t]),"auto"===i)switch(t){case"width":case"height":i=Re(e,t);break;case"top":case"left":case"right":case"bottom":var o=We(e,"position");if("fixed"===o||"absolute"===o){i=e.getBoundingClientRect[t]+"px";break}default:i="0px"}return i?String(i):""}function We(e,t,n,r){var i=he(e),o=void 0;return pe.has(t)&&(r=!0),!r&&i&&null!=i.cache[t]?o=i.cache[t]:(n=n||Me(e,t))&&(o=n(e),i&&(i.cache[t]=o)),$t.debug>=2&&console.info('Get "'+t+'": "'+o+'"',e),o}var $e=/^#([A-f\d]{3}){1,2}$/i,Ge={function:function(e,t,n,r,i,o){return e.call(t,r,n.length,i)},number:function(e,t,n,r,i,o){return String(e)+function(e){for(var t in ve)if(ve[t].includes(e))return t;return""}(o.fn)},string:function(e,t,n,r,i,o){return Fe(e)},undefined:function(e,t,n,r,i,o){return Fe(We(t,i,o.fn)||"")}};function Qe(t,n){var i=t.tweens=Object.create(null),a=t.elements,u=t.element,s=a.indexOf(u),c=he(u),f=d(t.queue,t.options.queue),v=d(t.options.duration,fe.duration);for(var p in n)if(n.hasOwnProperty(p)){var y=Ae(p),g=Me(u,y),h=n[p];if(!g&&"tween"!==y){$t.debug&&console.log('Skipping "'+p+'" due to a lack of browser support.');continue}if(null==h){$t.debug&&console.log('Skipping "'+p+'" due to no value supplied.');continue}var w=i[y]={},b=void 0,S=void 0;if(w.fn=g,r(h)&&(h=h.call(u,s,a.length,a)),Array.isArray(h)){var x=h[1],k=h[2];b=h[0],l(x)&&(/^[\d-]/.test(x)||$e.test(x))||r(x)||o(x)?S=x:l(x)&&m[x]||Array.isArray(x)?(w.easing=H(x,v),S=k):S=x||k}else b=h;w.end=Ge[void 0===b?"undefined":e(b)](b,u,a,s,y,w),null==S&&!1!==f&&void 0!==c.queueList[f]||(w.start=Ge[void 0===S?"undefined":e(S)](S,u,a,s,y,w),Ye(y,w,v))}}var De=/((?:[+\-*/]=)?(?:[+-]?\d*\.\d+|[+-]?\d+)[a-z%]*|(?:.(?!$|[+-]?\d|[+\-*/]=[+-]?\d))+.|.)/g,Ue=/^([+\-*/]=)?([+-]?\d*\.\d+|[+-]?\d+)(.*)$/;function Ze(e,t){for(var n=e.length,r=[],i=[],o=void 0,a=0;a<n;a++){if(!l(e[a]))return;""===e[a]?r[a]=[""]:r[a]=c(e[a].match(De)),i[a]=0,o=o||r[a].length>1}for(var u=[],s=u.pattern=[],f=function(e){if(l(s[s.length-1]))s[s.length-1]+=e;else if(e){s.push(e);for(var t=0;t<n;t++)u[t].push(null)}},d=function(){if(!(o||s.length>1)){for(var r="display"===t,i="visibility"===t,a=0;a<n;a++){var l=e[a];u[a][0]=l,u[a].easing=H(r&&"none"===l||i&&"hidden"===l||!r&&!i?"at-end":"at-start",400)}return s[0]=!1,u}},v=!0,p=0;p<n;p++)u[p]=[];for(;v;){for(var y=[],g=[],h=void 0,m=!1,w=!1,b=0;b<n;b++){var S=i[b]++,x=r[b][S];if(!x){if(b)return;for(;b<n;b++){var k=i[b]++;if(r[b][k])return d()}v=!1;break}var O=x.match(Ue);if(O){if(h)return d();var E=parseFloat(O[2]),_=O[3],T=O[1]?O[1][0]+_:void 0,M=T||_;E&&!g.includes(M)&&g.push(M),_||(E?w=!0:m=!0),y[b]=T?[E,M,!0]:[E,M]}else{if(y.length)return d();if(h){if(h!==x)return d()}else h=x}}if(h)f(h);else if(g.length)if(2===g.length&&m&&!w&&g.splice(g[0]?1:0,1),1===g.length){var V=g[0];switch(V[0]){case"+":case"-":case"*":case"/":return void(t&&console.error('Velocity: The first property must not contain a relative function "'+t+'":',e))}s.push(!1);for(var q=0;q<n;q++)u[q].push(y[q][0]);f(V)}else{f("calc(");for(var N=s.length-1,A=0;A<g.length;A++){var L=g[A],J=L[0],I="*"===J||"/"===J,j=I||"+"===J||"-"===J;I&&(s[N]+="(",f(")")),A&&f(" "+(j?J:"+")+" "),s.push(!1);for(var C=0;C<n;C++){var P=y[C],z=P[1]===L?P[0]:3===P.length?u[C-1][u[C-1].length-1]:I?1:0;u[C].push(z)}f(j?L.substring(1):L)}f(")")}}for(var F=0,R=0;F<s.length;F++){var B=s[F];l(B)?R&&B.indexOf(",")>=0?R++:B.indexOf("rgb")>=0&&(R=1):R&&(R<4?s[F]=!0:R=0)}return u}function Ye(e,t,n,r){var i=t.start,o=t.end;if(l(o)&&l(i)){var a=Ze([i,o],e);if(!a&&r){var u=i.match(/\d\.?\d*/g)||["0"],s=u.length,c=0;a=Ze([o.replace(/\d+\.?\d*/g,(function(){return u[c++%s]})),o],e)}if(a)switch($t.debug&&console.log("Velocity: Sequence found:",a),a[0].percent=0,a[1].percent=1,t.sequence=a,t.easing){case m["at-start"]:case m.during:case m["at-end"]:a[0].easing=a[1].easing=t.easing}}}function Xe(e){if(be.firstNew===e&&(be.firstNew=e._next),!(1&e._flags)){var t=e.element,n=e.tweens;d(e.options.duration,fe.duration);for(var r in n){var i=n[r];if(null==i.start){var o=We(e.element,r);l(o)?(i.start=Fe(o),Ye(r,i,0,!0)):Array.isArray(o)||console.warn("bad type",i,r,o)}$t.debug&&console.log('tweensContainer "'+r+'": '+JSON.stringify(i),t)}e._flags|=1}}function Ke(e){var t=e.begin||e.options.begin;if(t)try{var n=e.elements;t.call(n,n,e)}catch(e){setTimeout((function(){throw e}),1)}}function et(e){var t=e.progress||e.options.progress;if(t)try{var n=e.elements,r=e.percentComplete,i=e.options,o=e.tween;t.call(n,n,r,Math.max(0,e.timeStart+(null!=e.duration?e.duration:null!=i.duration?i.duration:fe.duration)-st),void 0!==o?o:String(100*r),e)}catch(e){setTimeout((function(){throw e}),1)}}function tt(){var e=!0,t=!1,n=void 0;try{for(var r,i=rt[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){et(r.value)}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}rt.clear();var o=!0,a=!1,l=void 0;try{for(var u,s=nt[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){Ee(u.value)}}catch(e){a=!0,l=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw l}}nt.clear()}var nt=new Set,rt=new Set,it=function(){var e=window.performance||{};if("function"!=typeof e.now){var t=e.timing&&e.timing.navigationStart?e.timing.navigationStart:v();e.now=function(){return v()-t}}return e}(),ot=function(e){return setTimeout(e,Math.max(0,1e3/60-(it.now()-st)))},at=window.requestAnimationFrame||ot,lt=void 0,ut=void 0,st=0;try{(ut=new Worker(URL.createObjectURL(new Blob(["("+function(){var e=this,t=void 0;this.onmessage=function(n){switch(n.data){case!0:t||(t=setInterval((function(){e.postMessage(!0)}),1e3/30));break;case!1:t&&(clearInterval(t),t=0);break;default:e.postMessage(n.data)}}}+")()"])))).onmessage=function(e){!0===e.data?ct():tt()},be.isMobile||void 0===document.hidden||document.addEventListener("visibilitychange",(function(){ut.postMessage(be.isTicking&&document.hidden)}))}catch(e){}function ct(e){if(!lt){if(lt=!0,!1!==e){var t=it.now(),n=st?t-st:1e3/60,r=fe.speed,i=fe.easing,o=fe.duration,a=void 0,l=void 0;if(n>=fe.minFrameTime||!st){for(st=t;be.firstNew;)Xe(be.firstNew);for(a=be.first;a&&a!==be.firstNew;a=a._next){var u=a.element,s=he(u);if(u.parentNode&&s){var c=a.options,f=a._flags,d=a.timeStart;if(!d){var v=null!=a.queue?a.queue:c.queue;d=t-n,!1!==v&&(d=Math.max(d,s.lastFinishList[v]||0)),a.timeStart=d}16&f?a.timeStart+=n:2&f||(a._flags|=2,c._ready++)}else ke(a)}for(a=be.first;a&&a!==be.firstNew;a=l){var p=a._flags;if(l=a._next,2&p&&!(16&p)){var y=a.options;if(32&p&&y._ready<y._total)a.timeStart+=n;else{var g=null!=a.speed?a.speed:null!=y.speed?y.speed:r,h=a.timeStart;if(!(4&p)){var m=null!=a.delay?a.delay:y.delay;if(m){if(h+m/g>t)continue;a.timeStart=h+=m/(m>0?g:1)}a._flags|=4,0==y._started++&&(y._first=a,y.begin&&(Ke(a),y.begin=void 0))}1!==g&&(a.timeStart=h+=Math.min(n,t-h)*(1-g));var w=null!=a.easing?a.easing:null!=y.easing?y.easing:i,S=a.ellapsedTime=t-h,x=null!=a.duration?a.duration:null!=y.duration?y.duration:o,k=a.percentComplete=$t.mock?1:Math.min(S/x,1),O=a.tweens,E=64&p;for(var _ in(a.progress||y._first===a&&y.progress)&&rt.add(a),1===k&&nt.add(a),O){var T=O[_],M=T.sequence,V=M.pattern,q="",N=0;if(V){for(var A=(T.easing||w)(k,0,1,_),L=0,J=0;J<M.length-1;J++)M[J].percent<A&&(L=J);for(var I=M[L],j=M[L+1]||I,C=(k-I.percent)/(j.percent-I.percent),P=E?1-C:C,z=j.easing||w||b;N<V.length;N++){var F=I[N];if(null==F)q+=V[N];else{var H=j[N];if(F===H)q+=F;else{var R=z(P,F,H,_);q+=!0!==V[N]?R:Math.round(R)}}}"tween"!==_?(1===k&&(q=qe(q)),Ve(a.element,_,q,T.fn)):a.tween=q}else console.warn("VelocityJS: Missing pattern:",_,JSON.stringify(T[_])),delete O[_]}}}}(rt.size||nt.size)&&(document.hidden?ut?ut.postMessage(""):setTimeout(tt,1):tt())}}be.first?(be.isTicking=!0,document.hidden?ut?!1===e&&ut.postMessage(!0):ot(ct):at(ct)):(be.isTicking=!1,st=0,document.hidden&&ut&&ut.postMessage(!1)),lt=!1}}function ft(e,t,n){if(Xe(e),void 0===t||t===d(e.queue,e.options.queue,n)){if(!(4&e._flags)){var r=e.options;0==r._started++&&(r._first=e,r.begin&&(Ke(e),r.begin=void 0)),e._flags|=4}for(var i in e.tweens){var o=e.tweens[i],a=o.sequence,l=a.pattern,u="",s=0;if(l)for(var c=a[a.length-1];s<l.length;s++){var f=c[s];u+=null==f?l[s]:f}Ve(e.element,i,u,o.fn)}Ee(e)}}g(["finish",function(e,t,n){var r=$(e[0],!0),i=fe.queue,o=!0===e[void 0===r?0:1];if(u(t)&&t.velocity.animations){var a=!0,l=!1,s=void 0;try{for(var c,f=t.velocity.animations[Symbol.iterator]();!(a=(c=f.next()).done);a=!0){ft(c.value,r,i)}}catch(e){l=!0,s=e}finally{try{!a&&f.return&&f.return()}finally{if(l)throw s}}}else{for(;be.firstNew;)Xe(be.firstNew);for(var d,v=be.first;v&&(o||v!==be.firstNew);v=d||be.firstNew)d=v._next,t&&!t.includes(v.element)||ft(v,r,i)}n&&(u(t)&&t.velocity.animations&&t.then?t.then(n._resolver):n._resolver(t))}],!0);var dt={isExpanded:1,isReady:2,isStarted:4,isStopped:8,isPaused:16,isSync:32,isReverse:64};function vt(e,t,n,r){void 0!==t&&t!==d(e.queue,e.options.queue,n)||(r?e._flags|=16:e._flags&=-17)}function pt(e,t,n,r){var i=0===r.indexOf("pause"),o="false"!==(r.indexOf(".")>=0?r.replace(/^.*\./,""):void 0)&&$(e[0]),a=fe.queue;if(u(t)&&t.velocity.animations){var l=!0,s=!1,c=void 0;try{for(var f,d=t.velocity.animations[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){vt(f.value,o,a,i)}}catch(e){s=!0,c=e}finally{try{!l&&d.return&&d.return()}finally{if(s)throw c}}}else for(var v=be.first;v;)t&&!t.includes(v.element)||vt(v,o,a,i),v=v._next;n&&(u(t)&&t.velocity.animations&&t.then?t.then(n._resolver):n._resolver(t))}function yt(t,n,r,i){var s=t[0],c=t[1];if(!s)return console.warn("VelocityJS: Cannot access a non-existant property!"),null;if(void 0===c&&!a(s)){if(Array.isArray(s)){if(1===n.length){var f={},d=!0,v=!1,p=void 0;try{for(var y,g=s[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var h=y.value;f[h]=Fe(We(n[0],h))}}catch(e){v=!0,p=e}finally{try{!d&&g.return&&g.return()}finally{if(v)throw p}}return f}var m=[],w=!0,b=!1,S=void 0;try{for(var x,k=n[Symbol.iterator]();!(w=(x=k.next()).done);w=!0){var O=x.value,E={},_=!0,T=!1,M=void 0;try{for(var V,q=s[Symbol.iterator]();!(_=(V=q.next()).done);_=!0){var N=V.value;E[N]=Fe(We(O,N))}}catch(e){T=!0,M=e}finally{try{!_&&q.return&&q.return()}finally{if(T)throw M}}m.push(E)}}catch(e){b=!0,S=e}finally{try{!w&&k.return&&k.return()}finally{if(b)throw S}}return m}if(1===n.length)return Fe(We(n[0],s));var A=[],L=!0,J=!1,I=void 0;try{for(var j,C=n[Symbol.iterator]();!(L=(j=C.next()).done);L=!0){var P=j.value;A.push(Fe(We(P,s)))}}catch(e){J=!0,I=e}finally{try{!L&&C.return&&C.return()}finally{if(J)throw I}}return A}var z=[];if(a(s)){for(var F in s)if(s.hasOwnProperty(F)){var H=!0,R=!1,B=void 0;try{for(var W,$=n[Symbol.iterator]();!(H=(W=$.next()).done);H=!0){var G=W.value,Q=s[F];l(Q)||o(Q)?Ve(G,F,s[F]):(z.push('Cannot set a property "'+F+'" to an unknown type: '+(void 0===Q?"undefined":e(Q))),console.warn('VelocityJS: Cannot set a property "'+F+'" to an unknown type:',Q))}}catch(e){R=!0,B=e}finally{try{!H&&$.return&&$.return()}finally{if(R)throw B}}}}else if(l(c)||o(c)){var D=!0,U=!1,Z=void 0;try{for(var Y,X=n[Symbol.iterator]();!(D=(Y=X.next()).done);D=!0){Ve(Y.value,s,String(c))}}catch(e){U=!0,Z=e}finally{try{!D&&X.return&&X.return()}finally{if(U)throw Z}}}else z.push('Cannot set a property "'+s+'" to an unknown type: '+(void 0===c?"undefined":e(c))),console.warn('VelocityJS: Cannot set a property "'+s+'" to an unknown type:',c);r&&(z.length?r._rejecter(z.join(", ")):u(n)&&n.velocity.animations&&n.then?n.then(r._resolver):r._resolver(n))}function gt(e,t,n){Xe(e),void 0!==t&&t!==d(e.queue,e.options.queue,n)||(e._flags|=8,Ee(e))}g(["option",function(e,t,n,r){var i=e[0],o=r.indexOf(".")>=0?r.replace(/^.*\./,""):void 0,a="false"!==o&&$(o,!0),l=void 0,s=e[1];if(!i)return console.warn("VelocityJS: Cannot access a non-existant key!"),null;if(u(t)&&t.velocity.animations)l=t.velocity.animations;else{l=[];for(var c=be.first;c;c=c._next)t.indexOf(c.element)>=0&&d(c.queue,c.options.queue)===a&&l.push(c);if(t.length>1&&l.length>1){for(var f=1,v=l[0].options;f<l.length;)if(l[f++].options!==v){v=null;break}v&&(l=[l[0]])}}if(void 0===s){var p=[],y=dt[i],g=!0,h=!1,m=void 0;try{for(var w,b=l[Symbol.iterator]();!(g=(w=b.next()).done);g=!0){var S=w.value;void 0===y?p.push(d(S[i],S.options[i])):p.push(0==(S._flags&y))}}catch(e){h=!0,m=e}finally{try{!g&&b.return&&b.return()}finally{if(h)throw m}}return 1===t.length&&1===l.length?p[0]:p}var x=void 0;switch(i){case"cache":s=j(s);break;case"begin":s=C(s);break;case"complete":s=P(s);break;case"delay":s=z(s);break;case"duration":s=F(s);break;case"fpsLimit":s=R(s);break;case"loop":s=B(s);break;case"percentComplete":x=!0,s=parseFloat(s);break;case"repeat":case"repeatAgain":s=G(s);break;default:if("_"!==i[0]){var k=parseFloat(s);s===String(k)&&(s=k);break}case"queue":case"promise":case"promiseRejectEmpty":case"easing":case"started":return void console.warn("VelocityJS: Trying to set a read-only key:",i)}if(void 0===s||s!=s)return console.warn("VelocityJS: Trying to set an invalid value:"+i+"="+s+" ("+e[1]+")"),null;var O=!0,E=!1,_=void 0;try{for(var T,M=l[Symbol.iterator]();!(O=(T=M.next()).done);O=!0){var V=T.value;x?V.timeStart=st-d(V.duration,V.options.duration,fe.duration)*s:V[i]=s}}catch(e){E=!0,_=e}finally{try{!O&&M.return&&M.return()}finally{if(E)throw _}}n&&(u(t)&&t.velocity.animations&&t.then?t.then(n._resolver):n._resolver(t))}],!0),g(["pause",pt],!0),g(["resume",pt],!0),g(["property",yt],!0),g(["reverse",function(e,t,n,r){throw new SyntaxError("VelocityJS: The 'reverse' action is built in and private.")}],!0),g(["stop",function(e,t,n,r){var i=$(e[0],!0),o=fe.queue,a=!0===e[void 0===i?0:1];if(u(t)&&t.velocity.animations){var l=!0,s=!1,c=void 0;try{for(var f,d=t.velocity.animations[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){gt(f.value,i,o)}}catch(e){s=!0,c=e}finally{try{!l&&d.return&&d.return()}finally{if(s)throw c}}}else{for(;be.firstNew;)Xe(be.firstNew);for(var v,p=be.first;p&&(a||p!==be.firstNew);p=v||be.firstNew)v=p._next,t&&!t.includes(p.element)||gt(p,i,o)}n&&(u(t)&&t.velocity.animations&&t.then?t.then(n._resolver):n._resolver(t))}],!0),g(["style",yt],!0),g(["tween",function(e,t,n,r){var i=void 0;if(t){if(1!==t.length)throw new Error("VelocityJS: Cannot tween more than one element!")}else{if(!e.length)return console.info('Velocity(<element>, "tween", percentComplete, property, end | [end, <easing>, <start>], <easing>) => value\nVelocity(<element>, "tween", percentComplete, {property: end | [end, <easing>, <start>], ...}, <easing>) => {property: value, ...}'),null;t=[document.body],i=!0}var u=e[0],s={elements:t,element:t[0],queue:!1,options:{duration:1e3},tweens:null},c={},f=e[1],v=void 0,p=void 0,y=e[2],g=0;if(l(e[1])?Oe&&Oe[e[1]]?(p=Oe[e[1]],f={},y=e[2]):(v=!0,f=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e[1],e[2]),y=e[3]):Array.isArray(e[1])&&(v=!0,f={tween:e[1]},y=e[2]),!o(u)||u<0||u>1)throw new Error("VelocityJS: Must tween a percentage from 0 to 1!");if(!a(f))throw new Error("VelocityJS: Cannot tween an invalid property!");if(i)for(var h in f)if(f.hasOwnProperty(h)&&(!Array.isArray(f[h])||f[h].length<2))throw new Error("VelocityJS: When not supplying an element you must force-feed values: "+h);var m=H(d(y,fe.easing),400);for(var w in p?Yt(s,p):Qe(s,f),s.tweens){var S=s.tweens[w],x=S.sequence,k=x.pattern,O="",E=0;if(g++,k){for(var _=(S.easing||m)(u,0,1,w),T=0,M=0;M<x.length-1;M++)x[M].percent<_&&(T=M);for(var V=x[T],q=x[T+1]||V,N=(u-V.percent)/(q.percent-V.percent),A=q.easing||b;E<k.length;E++){var L=V[E];if(null==L)O+=k[E];else{var J=q[E];if(L===J)O+=L;else{var I=A(N,L,J,w);O+=!0===k[E]?Math.round(I):I}}}c[w]=O}}if(v&&1===g)for(var j in c)if(c.hasOwnProperty(j))return c[j];return c}],!0);var ht={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgrey:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,grey:8421504,green:32768,greenyellow:11403055,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgrey:13882323,lightgreen:9498256,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};for(var mt in ht)if(ht.hasOwnProperty(mt)){var wt=ht[mt];Pe[mt]=Math.floor(wt/65536)+","+Math.floor(wt/256%256)+","+wt%256}function bt(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}function St(e){return 1-bt(1-e)}!function(e,t){w([e,function(e,n,r){return 0===e?n:1===e?r:Math.pow(e,2)*((t+1)*e-t)*(r-n)}])}("easeInBack",1.7),function(e,t){w([e,function(e,n,r){return 0===e?n:1===e?r:(Math.pow(--e,2)*((t+1)*e+t)+1)*(r-n)}])}("easeOutBack",1.7),function(e,t){t*=1.525,w([e,function(e,n,r){return 0===e?n:1===e?r:.5*((e*=2)<1?Math.pow(e,2)*((t+1)*e-t):Math.pow(e-2,2)*((t+1)*(e-2)+t)+2)*(r-n)}])}("easeInOutBack",1.7),w(["easeInBounce",function(e,t,n){return 0===e?t:1===e?n:St(e)*(n-t)}]),w(["easeOutBounce",function(e,t,n){return 0===e?t:1===e?n:bt(e)*(n-t)}]),w(["easeInOutBounce",function(e,t,n){return 0===e?t:1===e?n:(e<.5?.5*St(2*e):.5*bt(2*e-1)+.5)*(n-t)}]);var xt=2*Math.PI;function kt(e,t){return function(n,r){if(void 0===r)return He(n,e,t)+"px";Ve(n,e,parseFloat(r)-He(n,e,t)+"px")}}!function(e,t,n){w([e,function(e,r,i){return 0===e?r:1===e?i:-t*Math.pow(2,10*(e-=1))*Math.sin((e-n/xt*Math.asin(1/t))*xt/n)*(i-r)}])}("easeInElastic",1,.3),function(e,t,n){w([e,function(e,r,i){return 0===e?r:1===e?i:(t*Math.pow(2,-10*e)*Math.sin((e-n/xt*Math.asin(1/t))*xt/n)+1)*(i-r)}])}("easeOutElastic",1,.3),function(e,t,n){w([e,function(e,r,i){if(0===e)return r;if(1===e)return i;var o=n/xt*Math.asin(1/t);return((e=2*e-1)<0?t*Math.pow(2,10*e)*Math.sin((e-o)*xt/n)*-.5:t*Math.pow(2,-10*e)*Math.sin((e-o)*xt/n)*.5+1)*(i-r)}])}("easeInOutElastic",1,.3*1.5),w(["at-start",function(e,t,n){return 0===e?t:n}]),w(["during",function(e,t,n){return 0===e||1===e?t:n}]),w(["at-end",function(e,t,n){return 1===e?n:t}]),_e(["Element","innerWidth",kt("width",!0)]),_e(["Element","innerHeight",kt("height",!0)]),_e(["Element","outerWidth",kt("width",!1)]),_e(["Element","outerHeight",kt("height",!1)]);var Ot=/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i,Et=/^(li)$/i,_t=/^(tr)$/i,Tt=/^(table)$/i,Mt=/^(tbody)$/i;function Vt(e,t){return function(n,r){if(null==r)return We(n,"client"+e,null,!0),We(n,"scroll"+e,null,!0),n["scroll"+t]+"px";var i=parseFloat(r);switch(r.replace(String(i),"")){case"":case"px":n["scroll"+t]=i;break;case"%":var o=parseFloat(We(n,"client"+e)),a=parseFloat(We(n,"scroll"+e));n["scroll"+t]=Math.max(0,a-o)*i/100}}}_e(["Element","display",function(e,t){var n=e.style;if(void 0===t)return Be(e,"display");if("auto"===t){var r=e&&e.nodeName,i=he(e);t=Ot.test(r)?"inline":Et.test(r)?"list-item":_t.test(r)?"table-row":Tt.test(r)?"table":Mt.test(r)?"table-row-group":"block",i.cache.display=t}n.display=t}]),_e(["HTMLElement","scroll",Vt("Height","Top"),!1]),_e(["HTMLElement","scrollTop",Vt("Height","Top"),!1]),_e(["HTMLElement","scrollLeft",Vt("Width","Left"),!1]),_e(["HTMLElement","scrollWidth",function(e,t){if(null==t)return e.scrollWidth+"px"}]),_e(["HTMLElement","clientWidth",function(e,t){if(null==t)return e.clientWidth+"px"}]),_e(["HTMLElement","scrollHeight",function(e,t){if(null==t)return e.scrollHeight+"px"}]),_e(["HTMLElement","clientHeight",function(e,t){if(null==t)return e.clientHeight+"px"}]);var qt=/^(b(lockSize|o(rder(Bottom(LeftRadius|RightRadius|Width)|Image(Outset|Width)|LeftWidth|R(adius|ightWidth)|Spacing|Top(LeftRadius|RightRadius|Width)|Width)|ttom))|column(Gap|RuleWidth|Width)|f(lexBasis|ontSize)|grid(ColumnGap|Gap|RowGap)|height|inlineSize|le(ft|tterSpacing)|m(a(rgin(Bottom|Left|Right|Top)|x(BlockSize|Height|InlineSize|Width))|in(BlockSize|Height|InlineSize|Width))|o(bjectPosition|utline(Offset|Width))|p(adding(Bottom|Left|Right|Top)|erspective)|right|s(hapeMargin|troke(Dashoffset|Width))|t(extIndent|op|ransformOrigin)|w(idth|ordSpacing))$/;function Nt(e,t){return function(n,r){if(void 0===r)return Be(n,e)||Be(n,t);n.style[e]=n.style[t]=r}}function At(e){return function(t,n){if(void 0===n)return Be(t,e);t.style[e]=n}}var Lt=/^(webkit|moz|ms|o)[A-Z]/,Jt=be.prefixElement;if(Jt)for(var It in Jt.style)if(Lt.test(It)){var jt=It.replace(/^[a-z]+([A-Z])/,(function(e,t){return t.toLowerCase()})),Ct=qt.test(jt)?"px":void 0;_e(["Element",jt,Nt(It,jt),Ct])}else if(!Te(["Element",It])){var Pt=qt.test(It)?"px":void 0;_e(["Element",It,At(It),Pt])}function zt(e){return function(t,n){if(void 0===n)return t.getAttribute(e);t.setAttribute(e,n)}}var Ft=document.createElement("div"),Ht=/^SVG(.*)Element$/,Rt=/Element$/;function Bt(e){return function(t,n){if(void 0===n)try{return t.getBBox()[e]+"px"}catch(e){return"0px"}t.setAttribute(e,n)}}Object.getOwnPropertyNames(window).forEach((function(e){var t=Ht.exec(e);if(t&&"SVG"!==t[1])try{var n=t[1]?document.createElementNS("http://www.w3.org/2000/svg",(t[1]||"svg").toLowerCase()):document.createElement("svg");for(var i in n){var o=n[i];!l(i)||"o"===i[0]&&"n"===i[1]||i===i.toUpperCase()||Rt.test(i)||i in Ft||r(o)||_e([e,i,zt(i)])}}catch(t){console.error("VelocityJS: Error when trying to identify SVG attributes on "+e+".",t)}})),_e(["SVGElement","width",Bt("width")]),_e(["SVGElement","height",Bt("height")]),_e(["Element","tween",function(e,t){if(void 0===t)return""}]);var Wt,$t=tn;if(function(e){e.Actions=y,e.Easings=m,e.Sequences=Oe,e.State=be,e.defaults=fe,e.patch=rn,e.debug=!1,e.mock=!1,e.version="2.0.6",e.Velocity=tn}(Wt||(Wt={})),function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}}()<=8)throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");if(window){var Gt=window.jQuery,Qt=window.Zepto;rn(window,!0),rn(Element&&Element.prototype),rn(NodeList&&NodeList.prototype),rn(HTMLCollection&&HTMLCollection.prototype),rn(Gt,!0),rn(Gt&&Gt.fn),rn(Qt,!0),rn(Qt&&Qt.fn)}var Dt=function(t){if(Wt.hasOwnProperty(t))switch(void 0===t?"undefined":e(t)){case"number":case"boolean":f($t,t,{get:function(){return Wt[t]},set:function(e){Wt[t]=e}},!0);break;default:f($t,t,Wt[t],!0)}};for(var Ut in Wt)Dt(Ut);Object.freeze($t);var Zt=/(\d*\.\d+|\d+\.?|from|to)/g;function Yt(e,t){var n=e.tweens=Object.create(null),r=e.element;for(var i in t.tweens)if(t.tweens.hasOwnProperty(i)){var o=Me(r,i);if(!o&&"tween"!==i){$t.debug&&console.log("Skipping ["+i+"] due to a lack of browser support.");continue}n[i]={fn:o,sequence:t.tweens[i]}}}g(["registerSequence",function e(t){if(a(t[0]))for(var n in t[0])t[0].hasOwnProperty(n)&&e([n,t[0][n]]);else if(l(t[0])){var r=t[0],i=t[1];if(l(r))if(a(i)){Oe[r]&&console.warn("VelocityJS: Replacing named sequence:",r);var u={},s=new Array(100),c=[],f=Oe[r]={},d=F(i.duration);for(var v in f.tweens={},o(d)&&(f.duration=d),i)if(i.hasOwnProperty(v)){var p=String(v).match(Zt);if(p){var y=!0,g=!1,h=void 0;try{for(var m,w=p[Symbol.iterator]();!(y=(m=w.next()).done);y=!0){var b=m.value,S="from"===b?0:"to"===b?100:parseFloat(b);if(S<0||S>100)console.warn("VelocityJS: Trying to use an invalid value as a percentage (0 <= n <= 100):",r,S);else if(isNaN(S))console.warn("VelocityJS: Trying to use an invalid number as a percentage:",r,v,b);else for(var x in u[String(S)]||(u[String(S)]=[]),u[String(S)].push(v),i[v])c.includes(x)||c.push(x)}}catch(e){g=!0,h=e}finally{try{!y&&w.return&&w.return()}finally{if(g)throw h}}}}var k=Object.keys(u).sort((function(e,t){var n=parseFloat(e),r=parseFloat(t);return n>r?1:n<r?-1:0}));k.forEach((function(e){s.push.apply(u[e])}));var O=!0,E=!1,_=void 0;try{for(var T,M=c[Symbol.iterator]();!(O=(T=M.next()).done);O=!0){var V=T.value,q=[],N=Ae(V),A=!0,L=!1,J=void 0;try{for(var I,j=k[Symbol.iterator]();!(A=(I=j.next()).done);A=!0){var C=I.value,P=!0,z=!1,R=void 0;try{for(var B,W=u[C][Symbol.iterator]();!(P=(B=W.next()).done);P=!0){var $=i[B.value];$[N]&&q.push(l($[N])?$[N]:$[N][0])}}catch(e){z=!0,R=e}finally{try{!P&&W.return&&W.return()}finally{if(z)throw R}}}}catch(e){L=!0,J=e}finally{try{!A&&j.return&&j.return()}finally{if(L)throw J}}if(q.length){var G=Ze(q,N),Q=0;if(G){var D=!0,U=!1,Z=void 0;try{for(var Y,X=k[Symbol.iterator]();!(D=(Y=X.next()).done);D=!0){var K=Y.value,ee=!0,te=!1,ne=void 0;try{for(var re,ie=u[K][Symbol.iterator]();!(ee=(re=ie.next()).done);ee=!0){var oe=i[re.value][N];oe&&(Array.isArray(oe)&&oe.length>1&&(l(oe[1])||Array.isArray(oe[1]))&&(G[Q].easing=H(oe[1],f.duration||400)),G[Q++].percent=parseFloat(K)/100)}}catch(e){te=!0,ne=e}finally{try{!ee&&ie.return&&ie.return()}finally{if(te)throw ne}}}}catch(e){U=!0,Z=e}finally{try{!D&&X.return&&X.return()}finally{if(U)throw Z}}f.tweens[N]=G}}}}catch(e){E=!0,_=e}finally{try{!O&&M.return&&M.return()}finally{if(E)throw _}}}else console.warn("VelocityJS: Trying to set 'registerSequence' sequence to an invalid value:",r,i);else console.warn("VelocityJS: Trying to set 'registerSequence' name to an invalid value:",r)}}],!0);var Xt=void 0;try{Xt=Promise}catch(e){}var Kt=", if that is deliberate then pass `promiseRejectEmpty:false` as an option";function en(e,t){f(t,"promise",e),f(t,"then",e.then.bind(e)),f(t,"catch",e.catch.bind(e)),e.finally&&f(t,"finally",e.finally.bind(e))}function tn(){var e,t=fe,v=arguments.length<=0?void 0:arguments[0],p=a(v)&&(v.p||a(v.properties)&&!v.properties.names||l(v.properties)),g=0,h=void 0,m=void 0,w=void 0,b=void 0,S=void 0,x=void 0,k=void 0;(i(this)?h=[this]:s(this)?(h=c(this),u(this)&&(b=this.velocity.animations)):p?(h=c(v.elements||v.e),g++):i(v)?(h=c([v]),g++):s(v)&&(h=c(v),g++),h&&(f(h,"velocity",tn.bind(h)),b&&f(h.velocity,"animations",b)),p)?m=d(v.properties,v.p):(e=g++,m=arguments.length<=e?void 0:arguments[e]);var O="reverse"===m,E=!O&&l(m),_=E&&Oe[m],T=p?d(v.options,v.o):arguments.length<=g?void 0:arguments[g];if(a(T)&&(w=T),Xt&&d(w&&w.promise,t.promise)&&(S=new Xt((function(e,t){k=t,x=function(t){u(t)&&t.promise?(delete t.then,delete t.catch,delete t.finally,e(t),en(t.promise,t)):e(t)}})),h&&en(S,h)),S){var M=w&&w.promiseRejectEmpty,V=d(M,t.promiseRejectEmpty);h||E?m||(V?k("Velocity: No properties supplied"+(n(M)?"":Kt)+". Aborting."):x()):V?k("Velocity: No elements supplied"+(n(M)?"":Kt)+". Aborting."):x()}if(!h&&!E||!m)return S;if(E){for(var q=[],N=S&&{_promise:S,_resolver:x,_rejecter:k};g<arguments.length;){var A;q.push((A=g++,arguments.length<=A?void 0:arguments[A]))}var L=m.replace(/\..*$/,""),J=y[L];if(J){var I=J(q,h,N,m);return void 0!==I?I:h||S}if(!_)return void console.error("VelocityJS: First argument ("+m+") was not a property map, a known action, or a registered redirect. Aborting.")}var j=void 0;if(a(m)||O||_){var R={},U=t.sync;if(S&&(f(R,"_promise",S),f(R,"_rejecter",k),f(R,"_resolver",x)),f(R,"_ready",0),f(R,"_started",0),f(R,"_completed",0),f(R,"_total",0),a(w)){var Z=F(w.duration);j=void 0!==Z,R.duration=d(Z,t.duration),R.delay=d(z(w.delay),t.delay),R.easing=H(d(w.easing,t.easing),R.duration)||H(t.easing,R.duration),R.loop=d(B(w.loop),t.loop),R.repeat=R.repeatAgain=d(G(w.repeat),t.repeat),null!=w.speed&&(R.speed=d(Q(w.speed),1)),n(w.promise)&&(R.promise=w.promise),R.queue=d($(w.queue),t.queue),w.mobileHA&&!be.isGingerbread&&(R.mobileHA=!0),!0===w.drag&&(R.drag=!0),(o(w.stagger)||r(w.stagger))&&(R.stagger=w.stagger),O||(null!=w.display&&(m.display=w.display,console.error('Deprecated "options.display" used, this is now a property:',w.display)),null!=w.visibility&&(m.visibility=w.visibility,console.error('Deprecated "options.visibility" used, this is now a property:',w.visibility)));var Y=C(w.begin),X=P(w.complete),K=W(w.progress),ee=D(w.sync);null!=Y&&(R.begin=Y),null!=X&&(R.complete=X),null!=K&&(R.progress=K),null!=ee&&(U=ee)}else if(!p){var te=0;if(R.duration=F(arguments.length<=g?void 0:arguments[g],!0),void 0===R.duration?R.duration=t.duration:(j=!0,te++),!r(arguments.length<=g+te?void 0:arguments[g+te])){var ne=H(arguments.length<=g+te?void 0:arguments[g+te],d(R&&F(R.duration),t.duration),!0);void 0!==ne&&(te++,R.easing=ne)}var re=P(arguments.length<=g+te?void 0:arguments[g+te],!0);void 0!==re&&(R.complete=re),R.delay=t.delay,R.loop=t.loop,R.repeat=R.repeatAgain=t.repeat}if(O&&!1===R.queue)throw new Error("VelocityJS: Cannot reverse a queue:false animation.");!j&&_&&_.duration&&(R.duration=_.duration);var ie={options:R,elements:h,_prev:void 0,_next:void 0,_flags:U?32:0,percentComplete:0,ellapsedTime:0,timeStart:0};b=[];for(var oe=0;oe<h.length;oe++){var ae=h[oe],le=0;if(i(ae)){if(O){var ue=he(ae).lastAnimationList[R.queue];if(!(m=ue&&ue.tweens)){console.error("VelocityJS: Attempting to reverse an animation on an element with no previous animation:",ae);continue}le|=64&~(64&ue._flags)}var se=Object.assign({},ie,{element:ae,_flags:ie._flags|le});if(R._total++,b.push(se),R.stagger)if(r(R.stagger)){var ce=nn(R.stagger,ae,oe,h.length,h,"stagger");o(ce)&&(se.delay=R.delay+ce)}else se.delay=R.delay+R.stagger*oe;R.drag&&(se.duration=R.duration-R.duration*Math.max(1-(oe+1)/h.length,.75)),_?Yt(se,_):O?se.tweens=m:(se.tweens=Object.create(null),Qe(se,m)),xe(ae,se,R.queue)}}!1===be.isTicking&&ct(!1),b&&f(h.velocity,"animations",b)}return h||S}function nn(e,t,n,r,i,o){try{return e.call(t,n,r,i,o)}catch(e){console.error("VelocityJS: Exception when calling '"+o+"' callback:",e)}}function rn(e,t){try{f(e,(t?"V":"v")+"elocity",tn)}catch(e){console.warn("VelocityJS: Error when trying to add prototype.",e)}}var on,an=tn;if(function(e){e.Actions=y,e.Easings=m,e.Sequences=Oe,e.State=be,e.defaults=fe,e.patch=rn,e.debug=!1,e.mock=!1,e.version="2.0.6",e.Velocity=tn}(on||(on={})),function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}}()<=8)throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");if(window){var ln=window.jQuery,un=window.Zepto;rn(window,!0),rn(Element&&Element.prototype),rn(NodeList&&NodeList.prototype),rn(HTMLCollection&&HTMLCollection.prototype),rn(ln,!0),rn(ln&&ln.fn),rn(un,!0),rn(un&&un.fn)}var sn=function(t){if(on.hasOwnProperty(t))switch(void 0===t?"undefined":e(t)){case"number":case"boolean":f(an,t,{get:function(){return on[t]},set:function(e){on[t]=e}},!0);break;default:f(an,t,on[t],!0)}};for(var cn in on)sn(cn);return Object.freeze(an),an}));
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (a, b, c) {
      var d = function (a) {
          var b,
            c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        },
        e = function (a, b, c) {
          var d,
            e,
            f = a.cycle;
          for (d in f)
            (e = f[d]),
              (a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length]);
          delete a.cycle;
        },
        f = function (a) {
          if ("function" == typeof a) return a;
          var b = "object" == typeof a ? a : { each: a },
            c = b.ease,
            d = b.from || 0,
            e = b.base || 0,
            f = {},
            g = isNaN(d),
            h = b.axis,
            i = { center: 0.5, end: 1 }[d] || 0;
          return function (a, j, k) {
            var l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u = (k || b).length,
              v = f[u];
            if (!v) {
              if (((t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0]), !t)) {
                for (
                  r = -(1 / 0);
                  r < (r = k[t++].getBoundingClientRect().left) && u > t;

                );
                t--;
              }
              for (
                v = f[u] = [],
                  l = g ? Math.min(t, u) * i - 0.5 : d % t,
                  m = g ? (u * i) / t - 0.5 : (d / t) | 0,
                  r = 0,
                  s = 1 / 0,
                  q = 0;
                u > q;
                q++
              )
                (n = (q % t) - l),
                  (o = m - ((q / t) | 0)),
                  (v[q] = p =
                    h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o)),
                  p > r && (r = p),
                  s > p && (s = p);
              (v.max = r - s),
                (v.min = s),
                (v.v = u =
                  b.amount ||
                  b.each *
                    (t > u
                      ? u - 1
                      : h
                      ? "y" === h
                        ? u / t
                        : t
                      : Math.max(t, u / t)) ||
                  0),
                (v.b = 0 > u ? e - u : e);
            }
            return (
              (u = (v[a] - v.min) / v.max), v.b + (c ? c.getRatio(u) : u) * v.v
            );
          };
        },
        g = function (a, b, d) {
          c.call(this, a, b, d),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._repeat && this._uncache(!0),
            (this.render = g.prototype.render);
        },
        h = 1e-8,
        i = c._internals,
        j = i.isSelector,
        k = i.isArray,
        l = (g.prototype = c.to({}, 0.1, {})),
        m = [];
      (g.version = "2.1.3"),
        (l.constructor = g),
        (l.kill()._gc = !1),
        (g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf),
        (g.getTweensOf = c.getTweensOf),
        (g.lagSmoothing = c.lagSmoothing),
        (g.ticker = c.ticker),
        (g.render = c.render),
        (g.distribute = f),
        (l.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._yoyoEase = null),
            this._uncache(!0),
            c.prototype.invalidate.call(this)
          );
        }),
        (l.updateTo = function (a, b) {
          var d,
            e = this,
            f = e.ratio,
            g = e.vars.immediateRender || a.immediateRender;
          b &&
            e._startTime < e._timeline._time &&
            ((e._startTime = e._timeline._time),
            e._uncache(!1),
            e._gc
              ? e._enabled(!0, !1)
              : e._timeline.insert(e, e._startTime - e._delay));
          for (d in a) e.vars[d] = a[d];
          if (e._initted || g)
            if (b) (e._initted = !1), g && e.render(0, !0, !0);
            else if (
              (e._gc && e._enabled(!0, !1),
              e._notifyPluginsOfEnabled &&
                e._firstPT &&
                c._onPluginEvent("_onDisable", e),
              e._time / e._duration > 0.998)
            ) {
              var h = e._totalTime;
              e.render(0, !0, !1), (e._initted = !1), e.render(h, !0, !1);
            } else if (((e._initted = !1), e._init(), e._time > 0 || g))
              for (var i, j = 1 / (1 - f), k = e._firstPT; k; )
                (i = k.s + k.c), (k.c *= j), (k.s = i - k.c), (k = k._next);
          return e;
        }),
        (l.render = function (a, b, d) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var e,
            f,
            g,
            j,
            k,
            l,
            m,
            n,
            o,
            p = this,
            q = p._dirty ? p.totalDuration() : p._totalDuration,
            r = p._time,
            s = p._totalTime,
            t = p._cycle,
            u = p._duration,
            v = p._rawPrevTime;
          if (
            (a >= q - h && a >= 0
              ? ((p._totalTime = q),
                (p._cycle = p._repeat),
                p._yoyo && 0 !== (1 & p._cycle)
                  ? ((p._time = 0),
                    (p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0))
                  : ((p._time = u),
                    (p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1)),
                p._reversed ||
                  ((e = !0),
                  (f = "onComplete"),
                  (d = d || p._timeline.autoRemoveChildren)),
                0 === u &&
                  (p._initted || !p.vars.lazy || d) &&
                  (p._startTime === p._timeline._duration && (a = 0),
                  (0 > v ||
                    (0 >= a && a >= -h) ||
                    (v === h && "isPause" !== p.data)) &&
                    v !== a &&
                    ((d = !0), v > h && (f = "onReverseComplete")),
                  (p._rawPrevTime = n = !b || a || v === a ? a : h)))
              : h > a
              ? ((p._totalTime = p._time = p._cycle = 0),
                (p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0),
                (0 !== s || (0 === u && v > 0)) &&
                  ((f = "onReverseComplete"), (e = p._reversed)),
                a > -h
                  ? (a = 0)
                  : 0 > a &&
                    ((p._active = !1),
                    0 === u &&
                      (p._initted || !p.vars.lazy || d) &&
                      (v >= 0 && (d = !0),
                      (p._rawPrevTime = n = !b || a || v === a ? a : h))),
                p._initted || (d = !0))
              : ((p._totalTime = p._time = a),
                0 !== p._repeat &&
                  ((j = u + p._repeatDelay),
                  (p._cycle = (p._totalTime / j) >> 0),
                  0 !== p._cycle &&
                    p._cycle === p._totalTime / j &&
                    a >= s &&
                    p._cycle--,
                  (p._time = p._totalTime - p._cycle * j),
                  p._yoyo &&
                    0 !== (1 & p._cycle) &&
                    ((p._time = u - p._time),
                    (o = p._yoyoEase || p.vars.yoyoEase),
                    o &&
                      (p._yoyoEase ||
                        (o !== !0 || p._initted
                          ? (p._yoyoEase = o =
                              o === !0
                                ? p._ease
                                : o instanceof Ease
                                ? o
                                : Ease.map[o])
                          : ((o = p.vars.ease),
                            (p._yoyoEase = o =
                              o
                                ? o instanceof Ease
                                  ? o
                                  : "function" == typeof o
                                  ? new Ease(o, p.vars.easeParams)
                                  : Ease.map[o] || c.defaultEase
                                : c.defaultEase))),
                      (p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0))),
                  p._time > u ? (p._time = u) : p._time < 0 && (p._time = 0)),
                p._easeType && !o
                  ? ((k = p._time / u),
                    (l = p._easeType),
                    (m = p._easePower),
                    (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                    3 === l && (k *= 2),
                    1 === m
                      ? (k *= k)
                      : 2 === m
                      ? (k *= k * k)
                      : 3 === m
                      ? (k *= k * k * k)
                      : 4 === m && (k *= k * k * k * k),
                    (p.ratio =
                      1 === l
                        ? 1 - k
                        : 2 === l
                        ? k
                        : p._time / u < 0.5
                        ? k / 2
                        : 1 - k / 2))
                  : o || (p.ratio = p._ease.getRatio(p._time / u))),
            r === p._time && !d && t === p._cycle)
          )
            return void (
              s !== p._totalTime &&
              p._onUpdate &&
              (b || p._callback("onUpdate"))
            );
          if (!p._initted) {
            if ((p._init(), !p._initted || p._gc)) return;
            if (
              !d &&
              p._firstPT &&
              ((p.vars.lazy !== !1 && p._duration) ||
                (p.vars.lazy && !p._duration))
            )
              return (
                (p._time = r),
                (p._totalTime = s),
                (p._rawPrevTime = v),
                (p._cycle = t),
                i.lazyTweens.push(p),
                void (p._lazy = [a, b])
              );
            !p._time || e || o
              ? e &&
                this._ease._calcEnd &&
                !o &&
                (p.ratio = p._ease.getRatio(0 === p._time ? 0 : 1))
              : (p.ratio = p._ease.getRatio(p._time / u));
          }
          for (
            p._lazy !== !1 && (p._lazy = !1),
              p._active ||
                (!p._paused && p._time !== r && a >= 0 && (p._active = !0)),
              0 === s &&
                (2 === p._initted && a > 0 && p._init(),
                p._startAt &&
                  (a >= 0
                    ? p._startAt.render(a, !0, d)
                    : f || (f = "_dummyGS")),
                p.vars.onStart &&
                  (0 !== p._totalTime || 0 === u) &&
                  (b || p._callback("onStart"))),
              g = p._firstPT;
            g;

          )
            g.f
              ? g.t[g.p](g.c * p.ratio + g.s)
              : (g.t[g.p] = g.c * p.ratio + g.s),
              (g = g._next);
          p._onUpdate &&
            (0 > a && p._startAt && p._startTime && p._startAt.render(a, !0, d),
            b || ((p._totalTime !== s || f) && p._callback("onUpdate"))),
            p._cycle !== t &&
              (b || p._gc || (p.vars.onRepeat && p._callback("onRepeat"))),
            f &&
              (!p._gc || d) &&
              (0 > a &&
                p._startAt &&
                !p._onUpdate &&
                p._startTime &&
                p._startAt.render(a, !0, d),
              e &&
                (p._timeline.autoRemoveChildren && p._enabled(!1, !1),
                (p._active = !1)),
              !b && p.vars[f] && p._callback(f),
              0 === u &&
                p._rawPrevTime === h &&
                n !== h &&
                (p._rawPrevTime = 0));
        }),
        (g.to = function (a, b, c) {
          return new g(a, b, c);
        }),
        (g.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = 0 != c.immediateRender),
            new g(a, b, c)
          );
        }),
        (g.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              0 != d.immediateRender && 0 != c.immediateRender),
            new g(a, b, d)
          );
        }),
        (g.staggerTo = g.allTo =
          function (a, b, h, i, l, n, o) {
            var p,
              q,
              r,
              s,
              t = [],
              u = f(h.stagger || i),
              v = h.cycle,
              w = (h.startAt || m).cycle;
            for (
              k(a) ||
                ("string" == typeof a && (a = c.selector(a) || a),
                j(a) && (a = d(a))),
                a = a || [],
                p = a.length - 1,
                r = 0;
              p >= r;
              r++
            ) {
              q = {};
              for (s in h) q[s] = h[s];
              if (
                (v &&
                  (e(q, a, r),
                  null != q.duration && ((b = q.duration), delete q.duration)),
                w)
              ) {
                w = q.startAt = {};
                for (s in h.startAt) w[s] = h.startAt[s];
                e(q.startAt, a, r);
              }
              (q.delay = u(r, a[r], a) + (q.delay || 0)),
                r === p &&
                  l &&
                  (q.onComplete = function () {
                    h.onComplete &&
                      h.onComplete.apply(h.onCompleteScope || this, arguments),
                      l.apply(o || h.callbackScope || this, n || m);
                  }),
                (t[r] = new g(a[r], b, q));
            }
            return t;
          }),
        (g.staggerFrom = g.allFrom =
          function (a, b, c, d, e, f, h) {
            return (
              (c.runBackwards = !0),
              (c.immediateRender = 0 != c.immediateRender),
              g.staggerTo(a, b, c, d, e, f, h)
            );
          }),
        (g.staggerFromTo = g.allFromTo =
          function (a, b, c, d, e, f, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              g.staggerTo(a, b, d, e, f, h, i)
            );
          }),
        (g.delayedCall = function (a, b, c, d, e) {
          return new g(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0,
          });
        }),
        (g.set = function (a, b) {
          return new g(a, 0, b);
        }),
        (g.isTweening = function (a) {
          return c.getTweensOf(a, !0).length > 0;
        });
      var n = function (a, b) {
          for (var d = [], e = 0, f = a._first; f; )
            f instanceof c
              ? (d[e++] = f)
              : (b && (d[e++] = f), (d = d.concat(n(f, b))), (e = d.length)),
              (f = f._next);
          return d;
        },
        o = (g.getAllTweens = function (b) {
          return n(a._rootTimeline, b).concat(n(a._rootFramesTimeline, b));
        });
      (g.killAll = function (a, c, d, e) {
        null == c && (c = !0), null == d && (d = !0);
        var f,
          g,
          h,
          i = o(0 != e),
          j = i.length,
          k = c && d && e;
        for (h = 0; j > h; h++)
          (g = i[h]),
            (k ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              (a
                ? g.totalTime(g._reversed ? 0 : g.totalDuration())
                : g._enabled(!1, !1));
      }),
        (g.killChildTweensOf = function (a, b) {
          if (null != a) {
            var e,
              f,
              h,
              l,
              m,
              n = i.tweenLookup;
            if (
              ("string" == typeof a && (a = c.selector(a) || a),
              j(a) && (a = d(a)),
              k(a))
            )
              for (l = a.length; --l > -1; ) g.killChildTweensOf(a[l], b);
            else {
              e = [];
              for (h in n)
                for (f = n[h].target.parentNode; f; )
                  f === a && (e = e.concat(n[h].tweens)), (f = f.parentNode);
              for (m = e.length, l = 0; m > l; l++)
                b && e[l].totalTime(e[l].totalDuration()),
                  e[l]._enabled(!1, !1);
            }
          }
        });
      var p = function (a, c, d, e) {
        (c = c !== !1), (d = d !== !1), (e = e !== !1);
        for (var f, g, h = o(e), i = c && d && e, j = h.length; --j > -1; )
          (g = h[j]),
            (i ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              g.paused(a);
      };
      return (
        (g.pauseAll = function (a, b, c) {
          p(!0, a, b, c);
        }),
        (g.resumeAll = function (a, b, c) {
          p(!1, a, b, c);
        }),
        (g.globalTimeScale = function (b) {
          var d = a._rootTimeline,
            e = c.ticker.time;
          return arguments.length
            ? ((b = b || h),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d = a._rootFramesTimeline),
              (e = c.ticker.frame),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d._timeScale = a._rootTimeline._timeScale = b),
              b)
            : d._timeScale;
        }),
        (l.progress = function (a, b) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                  this._cycle * (this._duration + this._repeatDelay),
                b
              )
            : this.duration()
            ? this._time / this._duration
            : this.ratio;
        }),
        (l.totalProgress = function (a, b) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * a, b)
            : this._totalTime / this.totalDuration();
        }),
        (l.time = function (a, b) {
          if (!arguments.length) return this._time;
          this._dirty && this.totalDuration();
          var c = this._duration,
            d = this._cycle,
            e = d * (c + this._repeatDelay);
          return (
            a > c && (a = c),
            this.totalTime(
              this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a,
              b
            )
          );
        }),
        (l.duration = function (b) {
          return arguments.length
            ? a.prototype.duration.call(this, b)
            : this._duration;
        }),
        (l.totalDuration = function (a) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (a - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (l.repeat = function (a) {
          return arguments.length
            ? ((this._repeat = a), this._uncache(!0))
            : this._repeat;
        }),
        (l.repeatDelay = function (a) {
          return arguments.length
            ? ((this._repeatDelay = a), this._uncache(!0))
            : this._repeatDelay;
        }),
        (l.yoyo = function (a) {
          return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
        }),
        g
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (a, b, c) {
        var d = function (a) {
            b.call(this, a);
            var c,
              d,
              e = this,
              f = e.vars;
            (e._labels = {}),
              (e.autoRemoveChildren = !!f.autoRemoveChildren),
              (e.smoothChildTiming = !!f.smoothChildTiming),
              (e._sortChildren = !0),
              (e._onUpdate = f.onUpdate);
            for (d in f)
              (c = f[d]),
                i(c) &&
                  -1 !== c.join("").indexOf("{self}") &&
                  (f[d] = e._swapSelfInParams(c));
            i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger);
          },
          e = 1e-8,
          f = c._internals,
          g = (d._internals = {}),
          h = f.isSelector,
          i = f.isArray,
          j = f.lazyTweens,
          k = f.lazyRender,
          l = _gsScope._gsDefine.globals,
          m = function (a) {
            var b,
              c = {};
            for (b in a) c[b] = a[b];
            return c;
          },
          n = function (a, b, c) {
            var d,
              e,
              f = a.cycle;
            for (d in f)
              (e = f[d]),
                (a[d] =
                  "function" == typeof e ? e(c, b[c], b) : e[c % e.length]);
            delete a.cycle;
          },
          o = (g.pauseCallback = function () {}),
          p = function (a) {
            var b,
              c = [],
              d = a.length;
            for (b = 0; b !== d; c.push(a[b++]));
            return c;
          },
          q = function (a, b, c, d) {
            var e = "immediateRender";
            return e in b || (b[e] = !((c && c[e] === !1) || d)), b;
          },
          r = function (a) {
            if ("function" == typeof a) return a;
            var b = "object" == typeof a ? a : { each: a },
              c = b.ease,
              d = b.from || 0,
              e = b.base || 0,
              f = {},
              g = isNaN(d),
              h = b.axis,
              i = { center: 0.5, end: 1 }[d] || 0;
            return function (a, j, k) {
              var l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u = (k || b).length,
                v = f[u];
              if (!v) {
                if (
                  ((t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0]), !t)
                ) {
                  for (
                    r = -(1 / 0);
                    r < (r = k[t++].getBoundingClientRect().left) && u > t;

                  );
                  t--;
                }
                for (
                  v = f[u] = [],
                    l = g ? Math.min(t, u) * i - 0.5 : d % t,
                    m = g ? (u * i) / t - 0.5 : (d / t) | 0,
                    r = 0,
                    s = 1 / 0,
                    q = 0;
                  u > q;
                  q++
                )
                  (n = (q % t) - l),
                    (o = m - ((q / t) | 0)),
                    (v[q] = p =
                      h
                        ? Math.abs("y" === h ? o : n)
                        : Math.sqrt(n * n + o * o)),
                    p > r && (r = p),
                    s > p && (s = p);
                (v.max = r - s),
                  (v.min = s),
                  (v.v = u =
                    b.amount ||
                    b.each *
                      (t > u
                        ? u - 1
                        : h
                        ? "y" === h
                          ? u / t
                          : t
                        : Math.max(t, u / t)) ||
                    0),
                  (v.b = 0 > u ? e - u : e);
              }
              return (
                (u = (v[a] - v.min) / v.max),
                v.b + (c ? c.getRatio(u) : u) * v.v
              );
            };
          },
          s = (d.prototype = new b());
        return (
          (d.version = "2.1.3"),
          (d.distribute = r),
          (s.constructor = d),
          (s.kill()._gc = s._forcingPlayhead = s._hasPause = !1),
          (s.to = function (a, b, d, e) {
            var f = (d.repeat && l.TweenMax) || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
          }),
          (s.from = function (a, b, d, e) {
            return this.add(
              ((d.repeat && l.TweenMax) || c).from(a, b, q(this, d)),
              e
            );
          }),
          (s.fromTo = function (a, b, d, e, f) {
            var g = (e.repeat && l.TweenMax) || c;
            return (
              (e = q(this, e, d)),
              b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
            );
          }),
          (s.staggerTo = function (a, b, e, f, g, i, j, k) {
            var l,
              o,
              q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming,
              }),
              s = r(e.stagger || f),
              t = e.startAt,
              u = e.cycle;
            for (
              "string" == typeof a && (a = c.selector(a) || a),
                a = a || [],
                h(a) && (a = p(a)),
                o = 0;
              o < a.length;
              o++
            )
              (l = m(e)),
                t && ((l.startAt = m(t)), t.cycle && n(l.startAt, a, o)),
                u &&
                  (n(l, a, o),
                  null != l.duration && ((b = l.duration), delete l.duration)),
                q.to(a[o], b, l, s(o, a[o], a));
            return this.add(q, g);
          }),
          (s.staggerFrom = function (a, b, c, d, e, f, g, h) {
            return (
              (c.runBackwards = !0),
              this.staggerTo(a, b, q(this, c), d, e, f, g, h)
            );
          }),
          (s.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
            return (
              (d.startAt = c),
              this.staggerTo(a, b, q(this, d, c), e, f, g, h, i)
            );
          }),
          (s.call = function (a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
          }),
          (s.set = function (a, b, d) {
            return this.add(new c(a, 0, q(this, b, null, !0)), d);
          }),
          (d.exportRoot = function (a, b) {
            (a = a || {}),
              null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e,
              f,
              g,
              h,
              i = new d(a),
              j = i._timeline;
            for (
              null == b && (b = !0),
                j._remove(i, !0),
                i._startTime = 0,
                i._rawPrevTime = i._time = i._totalTime = j._time,
                g = j._first;
              g;

            )
              (h = g._next),
                (b && g instanceof c && g.target === g.vars.onComplete) ||
                  ((f = g._startTime - g._delay),
                  0 > f && (e = 1),
                  i.add(g, f)),
                (g = h);
            return j.add(i, 0), e && i.totalDuration(), i;
          }),
          (s.add = function (e, f, g, h) {
            var j,
              k,
              l,
              m,
              n,
              o,
              p = this;
            if (
              ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)),
              !(e instanceof a))
            ) {
              if (e instanceof Array || (e && e.push && i(e))) {
                for (
                  g = g || "normal", h = h || 0, j = f, k = e.length, l = 0;
                  k > l;
                  l++
                )
                  i((m = e[l])) && (m = new d({ tweens: m })),
                    p.add(m, j),
                    "string" != typeof m &&
                      "function" != typeof m &&
                      ("sequence" === g
                        ? (j = m._startTime + m.totalDuration() / m._timeScale)
                        : "start" === g && (m._startTime -= m.delay())),
                    (j += h);
                return p._uncache(!0);
              }
              if ("string" == typeof e) return p.addLabel(e, f);
              if ("function" != typeof e)
                throw (
                  "Cannot add " +
                  e +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              e = c.delayedCall(0, e);
            }
            if (
              (b.prototype.add.call(p, e, f),
              (e._time || (!e._duration && e._initted)) &&
                ((j = (p.rawTime() - e._startTime) * e._timeScale),
                (!e._duration ||
                  Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) -
                    e._totalTime >
                    1e-5) &&
                  e.render(j, !1, !1)),
              (p._gc || p._time === p._duration) &&
                !p._paused &&
                p._duration < p.duration())
            )
              for (n = p, o = n.rawTime() > e._startTime; n._timeline; )
                o && n._timeline.smoothChildTiming
                  ? n.totalTime(n._totalTime, !0)
                  : n._gc && n._enabled(!0, !1),
                  (n = n._timeline);
            return p;
          }),
          (s.remove = function (b) {
            if (b instanceof a) {
              this._remove(b, !1);
              var c = (b._timeline = b.vars.useFrames
                ? a._rootFramesTimeline
                : a._rootTimeline);
              return (
                (b._startTime =
                  (b._paused ? b._pauseTime : c._time) -
                  (b._reversed
                    ? b.totalDuration() - b._totalTime
                    : b._totalTime) /
                    b._timeScale),
                this
              );
            }
            if (b instanceof Array || (b && b.push && i(b))) {
              for (var d = b.length; --d > -1; ) this.remove(b[d]);
              return this;
            }
            return "string" == typeof b
              ? this.removeLabel(b)
              : this.kill(null, b);
          }),
          (s._remove = function (a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return (
              d
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (s.append = function (a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
          }),
          (s.insert = s.insertMultiple =
            function (a, b, c, d) {
              return this.add(a, b || 0, c, d);
            }),
          (s.appendMultiple = function (a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
          }),
          (s.addLabel = function (a, b) {
            return (this._labels[a] = this._parseTimeOrLabel(b)), this;
          }),
          (s.addPause = function (a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return (
              (f.vars.onComplete = f.vars.onReverseComplete = b),
              (f.data = "isPause"),
              (this._hasPause = !0),
              this.add(f, a)
            );
          }),
          (s.removeLabel = function (a) {
            return delete this._labels[a], this;
          }),
          (s.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1;
          }),
          (s._parseTimeOrLabel = function (b, c, d, e) {
            var f, g;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || (e.push && i(e))))
              for (g = e.length; --g > -1; )
                e[g] instanceof a &&
                  e[g].timeline === this &&
                  this.remove(e[g]);
            if (
              ((f =
                "number" != typeof b || c
                  ? this.duration() > 99999999999
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              "string" == typeof c)
            )
              return this._parseTimeOrLabel(
                c,
                d && "number" == typeof b && null == this._labels[c]
                  ? b - f
                  : 0,
                d
              );
            if (
              ((c = c || 0),
              "string" != typeof b || (!isNaN(b) && null == this._labels[b]))
            )
              null == b && (b = f);
            else {
              if (((g = b.indexOf("=")), -1 === g))
                return null == this._labels[b]
                  ? d
                    ? (this._labels[b] = f + c)
                    : c
                  : this._labels[b] + c;
              (c =
                parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1))),
                (b =
                  g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
            }
            return Number(b) + c;
          }),
          (s.seek = function (a, b) {
            return this.totalTime(
              "number" == typeof a ? a : this._parseTimeOrLabel(a),
              b !== !1
            );
          }),
          (s.stop = function () {
            return this.paused(!0);
          }),
          (s.gotoAndPlay = function (a, b) {
            return this.play(a, b);
          }),
          (s.gotoAndStop = function (a, b) {
            return this.pause(a, b);
          }),
          (s.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              g,
              h,
              i,
              l,
              m,
              n,
              o = this,
              p = o._time,
              q = o._dirty ? o.totalDuration() : o._totalDuration,
              r = o._startTime,
              s = o._timeScale,
              t = o._paused;
            if (
              (p !== o._time && (a += o._time - p),
              o._hasPause && !o._forcingPlayhead && !b)
            ) {
              if (a > p)
                for (d = o._first; d && d._startTime <= a && !l; )
                  d._duration ||
                    "isPause" !== d.data ||
                    d.ratio ||
                    (0 === d._startTime && 0 === o._rawPrevTime) ||
                    (l = d),
                    (d = d._next);
              else
                for (d = o._last; d && d._startTime >= a && !l; )
                  d._duration ||
                    ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)),
                    (d = d._prev);
              l &&
                ((o._time = o._totalTime = a = l._startTime),
                (n =
                  o._startTime +
                  (o._reversed ? o._duration - a : a) / o._timeScale));
            }
            if (a >= q - e && a >= 0)
              (o._totalTime = o._time = q),
                o._reversed ||
                  o._hasPausedChild() ||
                  ((f = !0),
                  (h = "onComplete"),
                  (i = !!o._timeline.autoRemoveChildren),
                  0 === o._duration &&
                    ((0 >= a && a >= -e) ||
                      o._rawPrevTime < 0 ||
                      o._rawPrevTime === e) &&
                    o._rawPrevTime !== a &&
                    o._first &&
                    ((i = !0),
                    o._rawPrevTime > e && (h = "onReverseComplete"))),
                (o._rawPrevTime =
                  o._duration || !b || a || o._rawPrevTime === a ? a : e),
                (a = q + 1e-4);
            else if (e > a)
              if (
                ((o._totalTime = o._time = 0),
                a > -e && (a = 0),
                (0 !== p ||
                  (0 === o._duration &&
                    o._rawPrevTime !== e &&
                    (o._rawPrevTime > 0 || (0 > a && o._rawPrevTime >= 0)))) &&
                  ((h = "onReverseComplete"), (f = o._reversed)),
                0 > a)
              )
                (o._active = !1),
                  o._timeline.autoRemoveChildren && o._reversed
                    ? ((i = f = !0), (h = "onReverseComplete"))
                    : o._rawPrevTime >= 0 && o._first && (i = !0),
                  (o._rawPrevTime = a);
              else {
                if (
                  ((o._rawPrevTime =
                    o._duration || !b || a || o._rawPrevTime === a ? a : e),
                  0 === a && f)
                )
                  for (d = o._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), o._initted || (i = !0);
              }
            else o._totalTime = o._time = o._rawPrevTime = a;
            if ((o._time !== p && o._first) || c || i || l) {
              if (
                (o._initted || (o._initted = !0),
                o._active ||
                  (!o._paused && o._time !== p && a > 0 && (o._active = !0)),
                0 === p &&
                  o.vars.onStart &&
                  ((0 === o._time && o._duration) ||
                    b ||
                    o._callback("onStart")),
                (m = o._time),
                m >= p)
              )
                for (
                  d = o._first;
                  d && ((g = d._next), m === o._time && (!o._paused || t));

                )
                  (d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
                    (l === d && (o.pause(), (o._pauseTime = n)),
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c)),
                    (d = g);
              else
                for (
                  d = o._last;
                  d && ((g = d._prev), m === o._time && (!o._paused || t));

                ) {
                  if (
                    d._active ||
                    (d._startTime <= p && !d._paused && !d._gc)
                  ) {
                    if (l === d) {
                      for (l = d._prev; l && l.endTime() > o._time; )
                        l.render(
                          l._reversed
                            ? l.totalDuration() -
                                (a - l._startTime) * l._timeScale
                            : (a - l._startTime) * l._timeScale,
                          b,
                          c
                        ),
                          (l = l._prev);
                      (l = null), o.pause(), (o._pauseTime = n);
                    }
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c);
                  }
                  d = g;
                }
              o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))),
                h &&
                  (o._gc ||
                    ((r === o._startTime || s !== o._timeScale) &&
                      (0 === o._time || q >= o.totalDuration()) &&
                      (f &&
                        (j.length && k(),
                        o._timeline.autoRemoveChildren && o._enabled(!1, !1),
                        (o._active = !1)),
                      !b && o.vars[h] && o._callback(h))));
            }
          }),
          (s._hasPausedChild = function () {
            for (var a = this._first; a; ) {
              if (a._paused || (a instanceof d && a._hasPausedChild()))
                return !0;
              a = a._next;
            }
            return !1;
          }),
          (s.getChildren = function (a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; )
              g._startTime < e ||
                (g instanceof c
                  ? b !== !1 && (f[h++] = g)
                  : (d !== !1 && (f[h++] = g),
                    a !== !1 &&
                      ((f = f.concat(g.getChildren(!0, b, d))),
                      (h = f.length)))),
                (g = g._next);
            return f;
          }),
          (s.getTweensOf = function (a, b) {
            var d,
              e,
              f = this._gc,
              g = [],
              h = 0;
            for (
              f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length;
              --e > -1;

            )
              (d[e].timeline === this || (b && this._contains(d[e]))) &&
                (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
          }),
          (s.recent = function () {
            return this._recent;
          }),
          (s._contains = function (a) {
            for (var b = a.timeline; b; ) {
              if (b === this) return !0;
              b = b.timeline;
            }
            return !1;
          }),
          (s.shiftChildren = function (a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; )
              e._startTime >= c && (e._startTime += a), (e = e._next);
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
          }),
          (s._kill = function (a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (
              var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1),
                d = c.length,
                e = !1;
              --d > -1;

            )
              c[d]._kill(a, b) && (e = !0);
            return e;
          }),
          (s.clear = function (a) {
            var b = this.getChildren(!1, !0, !0),
              c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; )
              b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (s.invalidate = function () {
            for (var b = this._first; b; ) b.invalidate(), (b = b._next);
            return a.prototype.invalidate.call(this);
          }),
          (s._enabled = function (a, c) {
            if (a === this._gc)
              for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next);
            return b.prototype._enabled.call(this, a, c);
          }),
          (s.totalTime = function (b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (s.duration = function (a) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== a &&
                  this.timeScale(this._duration / a),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (s.totalDuration = function (a) {
            if (!arguments.length) {
              if (this._dirty) {
                for (
                  var b, c, d = 0, e = this, f = e._last, g = 999999999999;
                  f;

                )
                  (b = f._prev),
                    f._dirty && f.totalDuration(),
                    f._startTime > g &&
                    e._sortChildren &&
                    !f._paused &&
                    !e._calculatingDuration
                      ? ((e._calculatingDuration = 1),
                        e.add(f, f._startTime - f._delay),
                        (e._calculatingDuration = 0))
                      : (g = f._startTime),
                    f._startTime < 0 &&
                      !f._paused &&
                      ((d -= f._startTime),
                      e._timeline.smoothChildTiming &&
                        ((e._startTime += f._startTime / e._timeScale),
                        (e._time -= f._startTime),
                        (e._totalTime -= f._startTime),
                        (e._rawPrevTime -= f._startTime)),
                      e.shiftChildren(-f._startTime, !1, -9999999999),
                      (g = 0)),
                    (c = f._startTime + f._totalDuration / f._timeScale),
                    c > d && (d = c),
                    (f = b);
                (e._duration = e._totalDuration = d), (e._dirty = !1);
              }
              return this._totalDuration;
            }
            return a && this.totalDuration()
              ? this.timeScale(this._totalDuration / a)
              : this;
          }),
          (s.paused = function (b) {
            if (b === !1 && this._paused)
              for (var c = this._first; c; )
                c._startTime === this._time &&
                  "isPause" === c.data &&
                  (c._rawPrevTime = 0),
                  (c = c._next);
            return a.prototype.paused.apply(this, arguments);
          }),
          (s.usesFrames = function () {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
          }),
          (s.rawTime = function (a) {
            return a &&
              (this._paused ||
                (this._repeat && this.time() > 0 && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
          }),
          d
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (a, b, c) {
        var d = function (b) {
            a.call(this, b),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !!this.vars.yoyo),
              (this._dirty = !0);
          },
          e = 1e-8,
          f = b._internals,
          g = f.lazyTweens,
          h = f.lazyRender,
          i = _gsScope._gsDefine.globals,
          j = new c(null, null, 1, 0),
          k = (d.prototype = new a());
        return (
          (k.constructor = d),
          (k.kill()._gc = !1),
          (d.version = "2.1.3"),
          (k.invalidate = function () {
            return (
              (this._yoyo = !!this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              a.prototype.invalidate.call(this)
            );
          }),
          (k.addCallback = function (a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
          }),
          (k.removeCallback = function (a, b) {
            if (a)
              if (null == b) this._kill(null, a);
              else
                for (
                  var c = this.getTweensOf(a, !1),
                    d = c.length,
                    e = this._parseTimeOrLabel(b);
                  --d > -1;

                )
                  c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
          }),
          (k.removePause = function (b) {
            return this.removeCallback(a._internals.pauseCallback, b);
          }),
          (k.tweenTo = function (a, c) {
            c = c || {};
            var d,
              e,
              f,
              g = {
                ease: j,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1,
              },
              h = (c.repeat && i.TweenMax) || b;
            for (e in c) g[e] = c[e];
            return (
              (g.time = this._parseTimeOrLabel(a)),
              (d =
                Math.abs(Number(g.time) - this._time) / this._timeScale ||
                0.001),
              (f = new h(this, d, g)),
              (g.onStart = function () {
                f.target.paused(!0),
                  f.vars.time === f.target.time() ||
                    d !== f.duration() ||
                    f.isFromTo ||
                    f
                      .duration(
                        Math.abs(f.vars.time - f.target.time()) /
                          f.target._timeScale
                      )
                      .render(f.time(), !0, !0),
                  c.onStart &&
                    c.onStart.apply(
                      c.onStartScope || c.callbackScope || f,
                      c.onStartParams || []
                    );
              }),
              f
            );
          }),
          (k.tweenFromTo = function (a, b, c) {
            (c = c || {}),
              (a = this._parseTimeOrLabel(a)),
              (c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                callbackScope: this,
              }),
              (c.immediateRender = c.immediateRender !== !1);
            var d = this.tweenTo(b, c);
            return (
              (d.isFromTo = 1),
              d.duration(Math.abs(d.vars.time - a) / this._timeScale || 0.001)
            );
          }),
          (k.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p = this,
              q = p._time,
              r = p._dirty ? p.totalDuration() : p._totalDuration,
              s = p._duration,
              t = p._totalTime,
              u = p._startTime,
              v = p._timeScale,
              w = p._rawPrevTime,
              x = p._paused,
              y = p._cycle;
            if ((q !== p._time && (a += p._time - q), a >= r - e && a >= 0))
              p._locked || ((p._totalTime = r), (p._cycle = p._repeat)),
                p._reversed ||
                  p._hasPausedChild() ||
                  ((f = !0),
                  (j = "onComplete"),
                  (k = !!p._timeline.autoRemoveChildren),
                  0 === p._duration &&
                    ((0 >= a && a >= -e) || 0 > w || w === e) &&
                    w !== a &&
                    p._first &&
                    ((k = !0), w > e && (j = "onReverseComplete"))),
                (p._rawPrevTime =
                  p._duration || !b || a || p._rawPrevTime === a ? a : e),
                p._yoyo && 1 & p._cycle
                  ? (p._time = a = 0)
                  : ((p._time = s), (a = s + 1e-4));
            else if (e > a)
              if (
                (p._locked || (p._totalTime = p._cycle = 0),
                (p._time = 0),
                a > -e && (a = 0),
                (0 !== q ||
                  (0 === s &&
                    w !== e &&
                    (w > 0 || (0 > a && w >= 0)) &&
                    !p._locked)) &&
                  ((j = "onReverseComplete"), (f = p._reversed)),
                0 > a)
              )
                (p._active = !1),
                  p._timeline.autoRemoveChildren && p._reversed
                    ? ((k = f = !0), (j = "onReverseComplete"))
                    : w >= 0 && p._first && (k = !0),
                  (p._rawPrevTime = a);
              else {
                if (
                  ((p._rawPrevTime =
                    s || !b || a || p._rawPrevTime === a ? a : e),
                  0 === a && f)
                )
                  for (d = p._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), p._initted || (k = !0);
              }
            else
              0 === s && 0 > w && (k = !0),
                (p._time = p._rawPrevTime = a),
                p._locked ||
                  ((p._totalTime = a),
                  0 !== p._repeat &&
                    ((l = s + p._repeatDelay),
                    (p._cycle = (p._totalTime / l) >> 0),
                    p._cycle &&
                      p._cycle === p._totalTime / l &&
                      a >= t &&
                      p._cycle--,
                    (p._time = p._totalTime - p._cycle * l),
                    p._yoyo && 1 & p._cycle && (p._time = s - p._time),
                    p._time > s
                      ? ((p._time = s), (a = s + 1e-4))
                      : p._time < 0
                      ? (p._time = a = 0)
                      : (a = p._time)));
            if (p._hasPause && !p._forcingPlayhead && !b) {
              if (((a = p._time), a > q || (p._repeat && y !== p._cycle)))
                for (d = p._first; d && d._startTime <= a && !m; )
                  d._duration ||
                    "isPause" !== d.data ||
                    d.ratio ||
                    (0 === d._startTime && 0 === p._rawPrevTime) ||
                    (m = d),
                    (d = d._next);
              else
                for (d = p._last; d && d._startTime >= a && !m; )
                  d._duration ||
                    ("isPause" === d.data && d._rawPrevTime > 0 && (m = d)),
                    (d = d._prev);
              m &&
                ((o =
                  p._startTime +
                  (p._reversed ? p._duration - m._startTime : m._startTime) /
                    p._timeScale),
                m._startTime < s &&
                  ((p._time = p._rawPrevTime = a = m._startTime),
                  (p._totalTime =
                    a + p._cycle * (p._totalDuration + p._repeatDelay))));
            }
            if (p._cycle !== y && !p._locked) {
              var z = p._yoyo && 0 !== (1 & y),
                A = z === (p._yoyo && 0 !== (1 & p._cycle)),
                B = p._totalTime,
                C = p._cycle,
                D = p._rawPrevTime,
                E = p._time;
              if (
                ((p._totalTime = y * s),
                p._cycle < y ? (z = !z) : (p._totalTime += s),
                (p._time = q),
                (p._rawPrevTime = 0 === s ? w - 1e-4 : w),
                (p._cycle = y),
                (p._locked = !0),
                (q = z ? 0 : s),
                p.render(q, b, 0 === s),
                b ||
                  p._gc ||
                  (p.vars.onRepeat &&
                    ((p._cycle = C),
                    (p._locked = !1),
                    p._callback("onRepeat"))),
                q !== p._time)
              )
                return;
              if (
                (A &&
                  ((p._cycle = y),
                  (p._locked = !0),
                  (q = z ? s + 1e-4 : -1e-4),
                  p.render(q, !0, !1)),
                (p._locked = !1),
                p._paused && !x)
              )
                return;
              (p._time = E),
                (p._totalTime = B),
                (p._cycle = C),
                (p._rawPrevTime = D);
            }
            if (!((p._time !== q && p._first) || c || k || m))
              return void (
                t !== p._totalTime &&
                p._onUpdate &&
                (b || p._callback("onUpdate"))
              );
            if (
              (p._initted || (p._initted = !0),
              p._active ||
                (!p._paused && p._totalTime !== t && a > 0 && (p._active = !0)),
              0 === t &&
                p.vars.onStart &&
                ((0 === p._totalTime && p._totalDuration) ||
                  b ||
                  p._callback("onStart")),
              (n = p._time),
              n >= q)
            )
              for (
                d = p._first;
                d && ((i = d._next), n === p._time && (!p._paused || x));

              )
                (d._active ||
                  (d._startTime <= p._time && !d._paused && !d._gc)) &&
                  (m === d && (p.pause(), (p._pauseTime = o)),
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c)),
                  (d = i);
            else
              for (
                d = p._last;
                d && ((i = d._prev), n === p._time && (!p._paused || x));

              ) {
                if (d._active || (d._startTime <= q && !d._paused && !d._gc)) {
                  if (m === d) {
                    for (m = d._prev; m && m.endTime() > p._time; )
                      m.render(
                        m._reversed
                          ? m.totalDuration() -
                              (a - m._startTime) * m._timeScale
                          : (a - m._startTime) * m._timeScale,
                        b,
                        c
                      ),
                        (m = m._prev);
                    (m = null), p.pause(), (p._pauseTime = o);
                  }
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c);
                }
                d = i;
              }
            p._onUpdate && (b || (g.length && h(), p._callback("onUpdate"))),
              j &&
                (p._locked ||
                  p._gc ||
                  ((u === p._startTime || v !== p._timeScale) &&
                    (0 === p._time || r >= p.totalDuration()) &&
                    (f &&
                      (g.length && h(),
                      p._timeline.autoRemoveChildren && p._enabled(!1, !1),
                      (p._active = !1)),
                    !b && p.vars[j] && p._callback(j))));
          }),
          (k.getActive = function (a, b, c) {
            var d,
              e,
              f = [],
              g = this.getChildren(a || null == a, b || null == a, !!c),
              h = 0,
              i = g.length;
            for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
            return f;
          }),
          (k.getLabelAfter = function (a) {
            a || (0 !== a && (a = this._time));
            var b,
              c = this.getLabelsArray(),
              d = c.length;
            for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
            return null;
          }),
          (k.getLabelBefore = function (a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1; )
              if (b[c].time < a) return b[c].name;
            return null;
          }),
          (k.getLabelsArray = function () {
            var a,
              b = [],
              c = 0;
            for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
            return (
              b.sort(function (a, b) {
                return a.time - b.time;
              }),
              b
            );
          }),
          (k.invalidate = function () {
            return (this._locked = !1), a.prototype.invalidate.call(this);
          }),
          (k.progress = function (a, b) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                    this._cycle * (this._duration + this._repeatDelay),
                  b
                )
              : this._time / this.duration() || 0;
          }),
          (k.totalProgress = function (a, b) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * a, b)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (k.totalDuration = function (b) {
            return arguments.length
              ? -1 !== this._repeat && b
                ? this.timeScale(this.totalDuration() / b)
                : this
              : (this._dirty &&
                  (a.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (k.time = function (a, b) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var c = this._duration,
              d = this._cycle,
              e = d * (c + this._repeatDelay);
            return (
              a > c && (a = c),
              this.totalTime(
                this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a,
                b
              )
            );
          }),
          (k.repeat = function (a) {
            return arguments.length
              ? ((this._repeat = a), this._uncache(!0))
              : this._repeat;
          }),
          (k.repeatDelay = function (a) {
            return arguments.length
              ? ((this._repeatDelay = a), this._uncache(!0))
              : this._repeatDelay;
          }),
          (k.yoyo = function (a) {
            return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
          }),
          (k.currentLabel = function (a) {
            return arguments.length
              ? this.seek(a, !0)
              : this.getLabelBefore(this._time + e);
          }),
          d
        );
      },
      !0
    ),
    (function () {
      var a = 180 / Math.PI,
        b = [],
        c = [],
        d = [],
        e = {},
        f = _gsScope._gsDefine.globals,
        g = function (a, b, c, d) {
          c === d && (c = d - (d - b) / 1e6),
            a === b && (b = a + (c - a) / 1e6),
            (this.a = a),
            (this.b = b),
            (this.c = c),
            (this.d = d),
            (this.da = d - a),
            (this.ca = c - a),
            (this.ba = b - a);
        },
        h =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        i = function (a, b, c, d) {
          var e = { a: a },
            f = {},
            g = {},
            h = { c: d },
            i = (a + b) / 2,
            j = (b + c) / 2,
            k = (c + d) / 2,
            l = (i + j) / 2,
            m = (j + k) / 2,
            n = (m - l) / 8;
          return (
            (e.b = i + (a - i) / 4),
            (f.b = l + n),
            (e.c = f.a = (e.b + f.b) / 2),
            (f.c = g.a = (l + m) / 2),
            (g.b = m - n),
            (h.b = k + (d - k) / 4),
            (g.c = h.a = (g.b + h.b) / 2),
            [e, f, g, h]
          );
        },
        j = function (a, e, f, g, h) {
          var j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w = a.length - 1,
            x = 0,
            y = a[0].a;
          for (j = 0; w > j; j++)
            (n = a[x]),
              (k = n.a),
              (l = n.d),
              (m = a[x + 1].d),
              h
                ? ((t = b[j]),
                  (u = c[j]),
                  (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                  (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
                  (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
                  (q =
                    l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
                : ((o = l - (l - k) * e * 0.5),
                  (p = l + (m - l) * e * 0.5),
                  (q = l - (o + p) / 2)),
              (o += q),
              (p += q),
              (n.c = r = o),
              0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
              (n.da = l - k),
              (n.ca = r - k),
              (n.ba = y - k),
              f
                ? ((s = i(k, y, r, l)),
                  a.splice(x, 1, s[0], s[1], s[2], s[3]),
                  (x += 4))
                : x++,
              (y = p);
          (n = a[x]),
            (n.b = y),
            (n.c = y + 0.4 * (n.d - y)),
            (n.da = n.d - n.a),
            (n.ca = n.c - n.a),
            (n.ba = y - n.a),
            f &&
              ((s = i(n.a, y, n.c, n.d)),
              a.splice(x, 1, s[0], s[1], s[2], s[3]));
        },
        k = function (a, d, e, f) {
          var h,
            i,
            j,
            k,
            l,
            m,
            n = [];
          if (f)
            for (a = [f].concat(a), i = a.length; --i > -1; )
              "string" == typeof (m = a[i][d]) &&
                "=" === m.charAt(1) &&
                (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
          if (((h = a.length - 2), 0 > h))
            return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
          for (i = 0; h > i; i++)
            (j = a[i][d]),
              (k = a[i + 1][d]),
              (n[i] = new g(j, 0, 0, k)),
              e &&
                ((l = a[i + 2][d]),
                (b[i] = (b[i] || 0) + (k - j) * (k - j)),
                (c[i] = (c[i] || 0) + (l - k) * (l - k)));
          return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
        },
        l = function (a, f, g, i, l, m) {
          var n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v = {},
            w = [],
            x = m || a[0];
          (l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
          for (o in a[0]) w.push(o);
          if (a.length > 1) {
            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
              if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
                t = !1;
                break;
              }
            t &&
              ((a = a.concat()),
              m && a.unshift(m),
              a.push(a[1]),
              (m = a[a.length - 3]));
          }
          for (b.length = c.length = d.length = 0, n = w.length; --n > -1; )
            (o = w[n]),
              (e[o] = -1 !== l.indexOf("," + o + ",")),
              (v[o] = k(a, o, e[o], m));
          for (n = b.length; --n > -1; )
            (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
          if (!i) {
            for (n = w.length; --n > -1; )
              if (e[o])
                for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)
                  (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0),
                    (d[q] = (d[q] || 0) + r * r);
            for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
          }
          for (n = w.length, q = g ? 4 : 1; --n > -1; )
            (o = w[n]),
              (p = v[o]),
              j(p, f, g, i, e[o]),
              t && (p.splice(0, q), p.splice(p.length - q, q));
          return v;
        },
        m = function (a, b, c) {
          b = b || "soft";
          var d,
            e,
            f,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = {},
            q = "cubic" === b ? 3 : 2,
            r = "soft" === b,
            s = [];
          if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1))
            throw "invalid Bezier data";
          for (m in a[0]) s.push(m);
          for (j = s.length; --j > -1; ) {
            for (
              m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0;
              l > k;
              k++
            )
              (d =
                null == c
                  ? a[k][m]
                  : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1)
                  ? c[m] + Number(o.charAt(0) + o.substr(2))
                  : Number(o)),
                r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                (i[n++] = d);
            for (l = n - q + 1, n = 0, k = 0; l > k; k += q)
              (d = i[k]),
                (e = i[k + 1]),
                (f = i[k + 2]),
                (h = 2 === q ? 0 : i[k + 3]),
                (i[n++] = o =
                  3 === q
                    ? new g(d, e, f, h)
                    : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
            i.length = n;
          }
          return p;
        },
        n = function (a, b, c) {
          for (
            var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length;
            --p > -1;

          )
            for (
              m = a[p],
                f = m.a,
                g = m.d - f,
                h = m.c - f,
                i = m.b - f,
                d = e = 0,
                k = 1;
              c >= k;
              k++
            )
              (j = o * k),
                (l = 1 - j),
                (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)),
                (n = p * c + k - 1),
                (b[n] = (b[n] || 0) + d * d);
        },
        o = function (a, b) {
          b = b >> 0 || 6;
          var c,
            d,
            e,
            f,
            g = [],
            h = [],
            i = 0,
            j = 0,
            k = b - 1,
            l = [],
            m = [];
          for (c in a) n(a[c], g, b);
          for (e = g.length, d = 0; e > d; d++)
            (i += Math.sqrt(g[d])),
              (f = d % b),
              (m[f] = i),
              f === k &&
                ((j += i),
                (f = (d / b) >> 0),
                (l[f] = m),
                (h[f] = j),
                (i = 0),
                (m = []));
          return { length: j, lengths: h, segments: l };
        },
        p = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.9",
          API: 2,
          global: !0,
          init: function (a, b, c) {
            (this._target = a),
              b instanceof Array && (b = { values: b }),
              (this._func = {}),
              (this._mod = {}),
              (this._props = []),
              (this._timeRes =
                null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
            var d,
              e,
              f,
              g,
              h,
              i = b.values || [],
              j = {},
              k = i[0],
              n = b.autoRotate || c.vars.orientToBezier;
            this._autoRotate = n
              ? n instanceof Array
                ? n
                : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]
              : null;
            for (d in k) this._props.push(d);
            for (f = this._props.length; --f > -1; )
              (d = this._props[f]),
                this._overwriteProps.push(d),
                (e = this._func[d] = "function" == typeof a[d]),
                (j[d] = e
                  ? a[
                      d.indexOf("set") ||
                      "function" != typeof a["get" + d.substr(3)]
                        ? d
                        : "get" + d.substr(3)
                    ]()
                  : parseFloat(a[d])),
                h || (j[d] !== i[0][d] && (h = j));
            if (
              ((this._beziers =
                "cubic" !== b.type &&
                "quadratic" !== b.type &&
                "soft" !== b.type
                  ? l(
                      i,
                      isNaN(b.curviness) ? 1 : b.curviness,
                      !1,
                      "thruBasic" === b.type,
                      b.correlate,
                      h
                    )
                  : m(i, b.type, j)),
              (this._segCount = this._beziers[d].length),
              this._timeRes)
            ) {
              var p = o(this._beziers, this._timeRes);
              (this._length = p.length),
                (this._lengths = p.lengths),
                (this._segments = p.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((n = this._autoRotate))
              for (
                this._initialRotations = [],
                  n[0] instanceof Array || (this._autoRotate = n = [n]),
                  f = n.length;
                --f > -1;

              ) {
                for (g = 0; 3 > g; g++)
                  (d = n[f][g]),
                    (this._func[d] =
                      "function" == typeof a[d]
                        ? a[
                            d.indexOf("set") ||
                            "function" != typeof a["get" + d.substr(3)]
                              ? d
                              : "get" + d.substr(3)
                          ]
                        : !1);
                (d = n[f][2]),
                  (this._initialRotations[f] =
                    (this._func[d]
                      ? this._func[d].call(this._target)
                      : this._target[d]) || 0),
                  this._overwriteProps.push(d);
              }
            return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
          },
          set: function (b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n = this._segCount,
              o = this._func,
              p = this._target,
              q = b !== this._startRatio;
            if (this._timeRes) {
              if (
                ((k = this._lengths),
                (l = this._curSeg),
                (m = b * this._length),
                (e = this._li),
                m > this._l2 && n - 1 > e)
              ) {
                for (j = n - 1; j > e && (this._l2 = k[++e]) <= m; );
                (this._l1 = k[e - 1]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s2 = l[(this._s1 = this._si = 0)]);
              } else if (m < this._l1 && e > 0) {
                for (; e > 0 && (this._l1 = k[--e]) >= m; );
                0 === e && m < this._l1 ? (this._l1 = 0) : e++,
                  (this._l2 = k[e]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s1 = l[(this._si = l.length - 1) - 1] || 0),
                  (this._s2 = l[this._si]);
              }
              if (
                ((c = e),
                (m -= this._l1),
                (e = this._si),
                m > this._s2 && e < l.length - 1)
              ) {
                for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= m; );
                (this._s1 = l[e - 1]), (this._si = e);
              } else if (m < this._s1 && e > 0) {
                for (; e > 0 && (this._s1 = l[--e]) >= m; );
                0 === e && m < this._s1 ? (this._s1 = 0) : e++,
                  (this._s2 = l[e]),
                  (this._si = e);
              }
              h =
                1 === b
                  ? 1
                  : (e + (m - this._s1) / (this._s2 - this._s1)) * this._prec ||
                    0;
            } else
              (c = 0 > b ? 0 : b >= 1 ? n - 1 : (n * b) >> 0),
                (h = (b - c * (1 / n)) * n);
            for (d = 1 - h, e = this._props.length; --e > -1; )
              (f = this._props[e]),
                (g = this._beziers[f][c]),
                (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a),
                this._mod[f] && (i = this._mod[f](i, p)),
                o[f] ? p[f](i) : (p[f] = i);
            if (this._autoRotate) {
              var r,
                s,
                t,
                u,
                v,
                w,
                x,
                y = this._autoRotate;
              for (e = y.length; --e > -1; )
                (f = y[e][2]),
                  (w = y[e][3] || 0),
                  (x = y[e][4] === !0 ? 1 : a),
                  (g = this._beziers[y[e][0]]),
                  (r = this._beziers[y[e][1]]),
                  g &&
                    r &&
                    ((g = g[c]),
                    (r = r[c]),
                    (s = g.a + (g.b - g.a) * h),
                    (u = g.b + (g.c - g.b) * h),
                    (s += (u - s) * h),
                    (u += (g.c + (g.d - g.c) * h - u) * h),
                    (t = r.a + (r.b - r.a) * h),
                    (v = r.b + (r.c - r.b) * h),
                    (t += (v - t) * h),
                    (v += (r.c + (r.d - r.c) * h - v) * h),
                    (i = q
                      ? Math.atan2(v - t, u - s) * x + w
                      : this._initialRotations[e]),
                    this._mod[f] && (i = this._mod[f](i, p)),
                    o[f] ? p[f](i) : (p[f] = i));
            }
          },
        }),
        q = p.prototype;
      (p.bezierThrough = l),
        (p.cubicToQuadratic = i),
        (p._autoCSS = !0),
        (p.quadraticToCubic = function (a, b, c) {
          return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }),
        (p._cssRegister = function () {
          var a = f.CSSPlugin;
          if (a) {
            var b = a._internals,
              c = b._parseToProxy,
              d = b._setPluginRatio,
              e = b.CSSPropTween;
            b._registerComplexSpecialProp("bezier", {
              parser: function (a, b, f, g, h, i) {
                b instanceof Array && (b = { values: b }), (i = new p());
                var j,
                  k,
                  l,
                  m = b.values,
                  n = m.length - 1,
                  o = [],
                  q = {};
                if (0 > n) return h;
                for (j = 0; n >= j; j++)
                  (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
                for (k in b) q[k] = b[k];
                return (
                  (q.values = o),
                  (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                  (h.data = l),
                  (h.plugin = i),
                  (h.setRatio = d),
                  0 === q.autoRotate && (q.autoRotate = !0),
                  !q.autoRotate ||
                    q.autoRotate instanceof Array ||
                    ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)),
                    (q.autoRotate =
                      null != l.end.left
                        ? [["left", "top", "rotation", j, !1]]
                        : null != l.end.x
                        ? [["x", "y", "rotation", j, !1]]
                        : !1)),
                  q.autoRotate &&
                    (g._transform || g._enableTransforms(!1),
                    (l.autoRotate = g._target._gsTransform),
                    (l.proxy.rotation = l.autoRotate.rotation || 0),
                    g._overwriteProps.push("rotation")),
                  i._onInitTween(l.proxy, q, g._tween),
                  h
                );
              },
            });
          }
        }),
        (q._mod = function (a) {
          for (var b, c = this._overwriteProps, d = c.length; --d > -1; )
            (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
        }),
        (q._kill = function (a) {
          var b,
            c,
            d = this._props;
          for (b in this._beziers)
            if (b in a)
              for (
                delete this._beziers[b], delete this._func[b], c = d.length;
                --c > -1;

              )
                d[c] === b && d.splice(c, 1);
          if ((d = this._autoRotate))
            for (c = d.length; --c > -1; ) a[d[c][2]] && d.splice(c, 1);
          return this._super._kill.call(this, a);
        });
    })(),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (a, b) {
        var c,
          d,
          e,
          f,
          g = function () {
            a.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = g.prototype.setRatio);
          },
          h = _gsScope._gsDefine.globals,
          i = {},
          j = (g.prototype = new a("css"));
        (j.constructor = g),
          (g.version = "2.1.3"),
          (g.API = 2),
          (g.defaultTransformPerspective = 0),
          (g.defaultSkewType = "compensated"),
          (g.defaultSmoothOrigin = !0),
          (j = "px"),
          (g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: "",
          });
        var k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
          w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          x = /(?:\d|\-|\+|=|#|\.)*/g,
          y = /opacity *= *([^)]*)/i,
          z = /opacity:([^;]*)/i,
          A = /alpha\(opacity *=.+?\)/i,
          B = /^(rgb|hsl)/,
          C = /([A-Z])/g,
          D = /-([a-z])/gi,
          E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          F = function (a, b) {
            return b.toUpperCase();
          },
          G = /(?:Left|Right|Width)/i,
          H = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          J = /,(?=[^\)]*(?:\(|$))/gi,
          K = /[\s,\(]/i,
          L = Math.PI / 180,
          M = 180 / Math.PI,
          N = {},
          O = { style: {} },
          P = _gsScope.document || {
            createElement: function () {
              return O;
            },
          },
          Q = function (a, b) {
            var c = P.createElementNS
              ? P.createElementNS(b || "http://www.w3.org/1999/xhtml", a)
              : P.createElement(a);
            return c.style ? c : P.createElement(a);
          },
          R = Q("div"),
          S = Q("img"),
          T = (g._internals = { _specialProps: i }),
          U = (_gsScope.navigator || {}).userAgent || "",
          V = (function () {
            var a = U.indexOf("Android"),
              b = Q("a");
            return (
              (m =
                -1 !== U.indexOf("Safari") &&
                -1 === U.indexOf("Chrome") &&
                (-1 === a || parseFloat(U.substr(a + 8, 2)) > 3)),
              (o = m && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6),
              (n = -1 !== U.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) &&
                (p = parseFloat(RegExp.$1)),
              b
                ? ((b.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(b.style.opacity))
                : !1
            );
          })(),
          W = function (a) {
            return y.test(
              "string" == typeof a
                ? a
                : (a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          X = function (a) {
            _gsScope.console && console.log(a);
          },
          Y = "",
          Z = "",
          $ = function (a, b) {
            b = b || R;
            var c,
              d,
              e = b.style;
            if (void 0 !== e[a]) return a;
            for (
              a = a.charAt(0).toUpperCase() + a.substr(1),
                c = ["O", "Moz", "ms", "Ms", "Webkit"],
                d = 5;
              --d > -1 && void 0 === e[c[d] + a];

            );
            return d >= 0
              ? ((Z = 3 === d ? "ms" : c[d]),
                (Y = "-" + Z.toLowerCase() + "-"),
                Z + a)
              : null;
          },
          _ =
            "undefined" != typeof window
              ? window
              : P.defaultView || { getComputedStyle: function () {} },
          aa = function (a) {
            return _.getComputedStyle(a);
          },
          ba = (g.getStyle = function (a, b, c, d, e) {
            var f;
            return V || "opacity" !== b
              ? (!d && a.style[b]
                  ? (f = a.style[b])
                  : (c = c || aa(a))
                  ? (f =
                      c[b] ||
                      c.getPropertyValue(b) ||
                      c.getPropertyValue(b.replace(C, "-$1").toLowerCase()))
                  : a.currentStyle && (f = a.currentStyle[b]),
                null == e ||
                (f && "none" !== f && "auto" !== f && "auto auto" !== f)
                  ? f
                  : e)
              : W(a);
          }),
          ca = (T.convertToPixels = function (a, c, d, e, f) {
            if ("px" === e || (!e && "lineHeight" !== c)) return d;
            if ("auto" === e || !d) return 0;
            var h,
              i,
              j,
              k = G.test(c),
              l = a,
              m = R.style,
              n = 0 > d,
              o = 1 === d;
            if ((n && (d = -d), o && (d *= 100), "lineHeight" !== c || e))
              if ("%" === e && -1 !== c.indexOf("border"))
                h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
              else {
                if (
                  ((m.cssText =
                    "border:0 solid red;position:" +
                    ba(a, "position") +
                    ";line-height:0;"),
                  "%" !== e &&
                    l.appendChild &&
                    "v" !== e.charAt(0) &&
                    "rem" !== e)
                )
                  m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                else {
                  if (
                    ((l = a.parentNode || P.body),
                    -1 !== ba(l, "display").indexOf("flex") &&
                      (m.position = "absolute"),
                    (i = l._gsCache),
                    (j = b.ticker.frame),
                    i && k && i.time === j)
                  )
                    return (i.width * d) / 100;
                  m[k ? "width" : "height"] = d + e;
                }
                l.appendChild(R),
                  (h = parseFloat(R[k ? "offsetWidth" : "offsetHeight"])),
                  l.removeChild(R),
                  k &&
                    "%" === e &&
                    g.cacheWidths !== !1 &&
                    ((i = l._gsCache = l._gsCache || {}),
                    (i.time = j),
                    (i.width = (h / d) * 100)),
                  0 !== h || f || (h = ca(a, c, d, e, !0));
              }
            else
              (i = aa(a).lineHeight),
                (a.style.lineHeight = d),
                (h = parseFloat(aa(a).lineHeight)),
                (a.style.lineHeight = i);
            return o && (h /= 100), n ? -h : h;
          }),
          da = (T.calculateOffset = function (a, b, c) {
            if ("absolute" !== ba(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top",
              e = ba(a, "margin" + d, c);
            return (
              a["offset" + d] - (ca(a, b, parseFloat(e), e.replace(x, "")) || 0)
            );
          }),
          ea = function (a, b) {
            var c,
              d,
              e,
              f = {};
            if ((b = b || aa(a, null)))
              if ((c = b.length))
                for (; --c > -1; )
                  (e = b[c]),
                    (-1 === e.indexOf("-transform") || Fa === e) &&
                      (f[e.replace(D, F)] = b.getPropertyValue(e));
              else
                for (c in b)
                  (-1 === c.indexOf("Transform") || Ea === c) && (f[c] = b[c]);
            else if ((b = a.currentStyle || a.style))
              for (c in b)
                "string" == typeof c &&
                  void 0 === f[c] &&
                  (f[c.replace(D, F)] = b[c]);
            return (
              V || (f.opacity = W(a)),
              (d = Ta(a, b, !1)),
              (f.rotation = d.rotation),
              (f.skewX = d.skewX),
              (f.scaleX = d.scaleX),
              (f.scaleY = d.scaleY),
              (f.x = d.x),
              (f.y = d.y),
              Ha &&
                ((f.z = d.z),
                (f.rotationX = d.rotationX),
                (f.rotationY = d.rotationY),
                (f.scaleZ = d.scaleZ)),
              f.filters && delete f.filters,
              f
            );
          },
          fa = function (a, b, c, d, e) {
            var f,
              g,
              h,
              i = {},
              j = a.style;
            for (g in c)
              "cssText" !== g &&
                "length" !== g &&
                isNaN(g) &&
                (b[g] !== (f = c[g]) || (e && e[g])) &&
                -1 === g.indexOf("Origin") &&
                ("number" == typeof f || "string" == typeof f) &&
                ((i[g] =
                  "auto" !== f || ("left" !== g && "top" !== g)
                    ? ("" !== f && "auto" !== f && "none" !== f) ||
                      "string" != typeof b[g] ||
                      "" === b[g].replace(w, "")
                      ? f
                      : 0
                    : da(a, g)),
                void 0 !== j[g] && (h = new ua(j, g, j[g], h)));
            if (d) for (g in d) "className" !== g && (i[g] = d[g]);
            return { difs: i, firstMPT: h };
          },
          ga = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          ha = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ia = function (a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase())
              return (c || aa(a))[b] || 0;
            if (a.getCTM && Qa(a)) return a.getBBox()[b] || 0;
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
              e = ga[b],
              f = e.length;
            for (c = c || aa(a, null); --f > -1; )
              (d -= parseFloat(ba(a, "padding" + e[f], c, !0)) || 0),
                (d -= parseFloat(ba(a, "border" + e[f] + "Width", c, !0)) || 0);
            return d;
          },
          ja = function (a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a)
              return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c,
              d = a.split(" "),
              e =
                -1 !== a.indexOf("left")
                  ? "0%"
                  : -1 !== a.indexOf("right")
                  ? "100%"
                  : d[0],
              f =
                -1 !== a.indexOf("top")
                  ? "0%"
                  : -1 !== a.indexOf("bottom")
                  ? "100%"
                  : d[1];
            if (d.length > 3 && !b) {
              for (
                d = a.split(", ").join(",").split(","), a = [], c = 0;
                c < d.length;
                c++
              )
                a.push(ja(d[c]));
              return a.join(",");
            }
            return (
              null == f
                ? (f = "center" === e ? "50%" : "0")
                : "center" === f && (f = "50%"),
              ("center" === e ||
                (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) &&
                (e = "50%"),
              (a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
              b &&
                ((b.oxp = -1 !== e.indexOf("%")),
                (b.oyp = -1 !== f.indexOf("%")),
                (b.oxr = "=" === e.charAt(1)),
                (b.oyr = "=" === f.charAt(1)),
                (b.ox = parseFloat(e.replace(w, ""))),
                (b.oy = parseFloat(f.replace(w, ""))),
                (b.v = a)),
              b || a
            );
          },
          ka = function (a, b) {
            return (
              "function" == typeof a && (a = a(r, q)),
              "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2))
                : parseFloat(a) - parseFloat(b) || 0
            );
          },
          la = function (a, b) {
            "function" == typeof a && (a = a(r, q));
            var c = "string" == typeof a && "=" === a.charAt(1);
            return (
              "string" == typeof a &&
                "v" === a.charAt(a.length - 2) &&
                (a =
                  (c ? a.substr(0, 2) : 0) +
                  window[
                    "inner" + ("vh" === a.substr(-2) ? "Height" : "Width")
                  ] *
                    (parseFloat(c ? a.substr(2) : a) / 100)),
              null == a
                ? b
                : c
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b
                : parseFloat(a) || 0
            );
          },
          ma = function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              i,
              j = 1e-6;
            return (
              "function" == typeof a && (a = a(r, q)),
              null == a
                ? (h = b)
                : "number" == typeof a
                ? (h = a)
                : ((e = 360),
                  (f = a.split("_")),
                  (i = "=" === a.charAt(1)),
                  (g =
                    (i
                      ? parseInt(a.charAt(0) + "1", 10) *
                        parseFloat(f[0].substr(2))
                      : parseFloat(f[0])) *
                      (-1 === a.indexOf("rad") ? 1 : M) -
                    (i ? 0 : b)),
                  f.length &&
                    (d && (d[c] = b + g),
                    -1 !== a.indexOf("short") &&
                      ((g %= e),
                      g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                    -1 !== a.indexOf("_cw") && 0 > g
                      ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e)
                      : -1 !== a.indexOf("ccw") &&
                        g > 0 &&
                        (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                  (h = b + g)),
              j > h && h > -j && (h = 0),
              h
            );
          },
          na = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          oa = function (a, b, c) {
            return (
              (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a),
              (255 *
                (1 > 6 * a
                  ? b + (c - b) * a * 6
                  : 0.5 > a
                  ? c
                  : 2 > 3 * a
                  ? b + (c - b) * (2 / 3 - a) * 6
                  : b) +
                0.5) |
                0
            );
          },
          pa = (g.parseColor = function (a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
              if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
              else {
                if (
                  ("," === a.charAt(a.length - 1) &&
                    (a = a.substr(0, a.length - 1)),
                  na[a])
                )
                  c = na[a];
                else if ("#" === a.charAt(0))
                  4 === a.length &&
                    ((d = a.charAt(1)),
                    (e = a.charAt(2)),
                    (f = a.charAt(3)),
                    (a = "#" + d + d + e + e + f + f)),
                    (a = parseInt(a.substr(1), 16)),
                    (c = [a >> 16, (a >> 8) & 255, 255 & a]);
                else if ("hsl" === a.substr(0, 3))
                  if (((c = m = a.match(s)), b)) {
                    if (-1 !== a.indexOf("=")) return a.match(t);
                  } else
                    (g = (Number(c[0]) % 360) / 360),
                      (h = Number(c[1]) / 100),
                      (i = Number(c[2]) / 100),
                      (e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
                      (d = 2 * i - e),
                      c.length > 3 && (c[3] = Number(c[3])),
                      (c[0] = oa(g + 1 / 3, d, e)),
                      (c[1] = oa(g, d, e)),
                      (c[2] = oa(g - 1 / 3, d, e));
                else c = a.match(s) || na.transparent;
                (c[0] = Number(c[0])),
                  (c[1] = Number(c[1])),
                  (c[2] = Number(c[2])),
                  c.length > 3 && (c[3] = Number(c[3]));
              }
            else c = na.black;
            return (
              b &&
                !m &&
                ((d = c[0] / 255),
                (e = c[1] / 255),
                (f = c[2] / 255),
                (j = Math.max(d, e, f)),
                (k = Math.min(d, e, f)),
                (i = (j + k) / 2),
                j === k
                  ? (g = h = 0)
                  : ((l = j - k),
                    (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)),
                    (g =
                      j === d
                        ? (e - f) / l + (f > e ? 6 : 0)
                        : j === e
                        ? (f - d) / l + 2
                        : (d - e) / l + 4),
                    (g *= 60)),
                (c[0] = (g + 0.5) | 0),
                (c[1] = (100 * h + 0.5) | 0),
                (c[2] = (100 * i + 0.5) | 0)),
              c
            );
          }),
          qa = function (a, b) {
            var c,
              d,
              e,
              f = a.match(ra) || [],
              g = 0,
              h = "";
            if (!f.length) return a;
            for (c = 0; c < f.length; c++)
              (d = f[c]),
                (e = a.substr(g, a.indexOf(d, g) - g)),
                (g += e.length + d.length),
                (d = pa(d, b)),
                3 === d.length && d.push(1),
                (h +=
                  e +
                  (b
                    ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                    : "rgba(" + d.join(",")) +
                  ")");
            return h + a.substr(g);
          },
          ra =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in na) ra += "|" + j + "\\b";
        (ra = new RegExp(ra + ")", "gi")),
          (g.colorStringFilter = function (a) {
            var b,
              c = a[0] + " " + a[1];
            ra.test(c) &&
              ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")),
              (a[0] = qa(a[0], b)),
              (a[1] = qa(a[1], b))),
              (ra.lastIndex = 0);
          }),
          b.defaultStringFilter ||
            (b.defaultStringFilter = g.colorStringFilter);
        var sa = function (a, b, c, d) {
            if (null == a)
              return function (a) {
                return a;
              };
            var e,
              f = b ? (a.match(ra) || [""])[0] : "",
              g = a.split(f).join("").match(u) || [],
              h = a.substr(0, a.indexOf(g[0])),
              i = ")" === a.charAt(a.length - 1) ? ")" : "",
              j = -1 !== a.indexOf(" ") ? " " : ",",
              k = g.length,
              l = k > 0 ? g[0].replace(s, "") : "";
            return k
              ? (e = b
                  ? function (a) {
                      var b, m, n, o;
                      if ("number" == typeof a) a += l;
                      else if (d && J.test(a)) {
                        for (
                          o = a.replace(J, "|").split("|"), n = 0;
                          n < o.length;
                          n++
                        )
                          o[n] = e(o[n]);
                        return o.join(",");
                      }
                      if (
                        ((b = (a.match(ra) || [f])[0]),
                        (m = a.split(b).join("").match(u) || []),
                        (n = m.length),
                        k > n--)
                      )
                        for (; ++n < k; )
                          m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                      return (
                        h +
                        m.join(j) +
                        j +
                        b +
                        i +
                        (-1 !== a.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (a) {
                      var b, f, m;
                      if ("number" == typeof a) a += l;
                      else if (d && J.test(a)) {
                        for (
                          f = a.replace(J, "|").split("|"), m = 0;
                          m < f.length;
                          m++
                        )
                          f[m] = e(f[m]);
                        return f.join(",");
                      }
                      if (
                        ((b = a.match("," === j ? u : v) || []),
                        (m = b.length),
                        k > m--)
                      )
                        for (; ++m < k; )
                          b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                      return (
                        (h && "none" !== a
                          ? a.substr(0, a.indexOf(b[0])) || h
                          : h) +
                        b.join(j) +
                        i
                      );
                    })
              : function (a) {
                  return a;
                };
          },
          ta = function (a) {
            return (
              (a = a.split(",")),
              function (b, c, d, e, f, g, h) {
                var i,
                  j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++)
                  h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
                return e.parse(b, h, f, g);
              }
            );
          },
          ua =
            ((T._setPluginRatio = function (a) {
              this.plugin.setRatio(a);
              for (
                var b,
                  c,
                  d,
                  e,
                  f,
                  g = this.data,
                  h = g.proxy,
                  i = g.firstMPT,
                  j = 1e-6;
                i;

              )
                (b = h[i.v]),
                  i.r ? (b = i.r(b)) : j > b && b > -j && (b = 0),
                  (i.t[i.p] = b),
                  (i = i._next);
              if (
                (g.autoRotate &&
                  (g.autoRotate.rotation = g.mod
                    ? g.mod.call(this._tween, h.rotation, this.t, this._tween)
                    : h.rotation),
                1 === a || 0 === a)
              )
                for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                  if (((c = i.t), c.type)) {
                    if (1 === c.type) {
                      for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)
                        e += c["xn" + d] + c["xs" + (d + 1)];
                      c[f] = e;
                    }
                  } else c[f] = c.s + c.xs0;
                  i = i._next;
                }
            }),
            function (a, b, c, d, e) {
              (this.t = a),
                (this.p = b),
                (this.v = c),
                (this.r = e),
                d && ((d._prev = this), (this._next = d));
            }),
          va =
            ((T._parseToProxy = function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j,
                k,
                l = d,
                m = {},
                n = {},
                o = c._transform,
                p = N;
              for (
                c._transform = null,
                  N = b,
                  d = k = c.parse(a, b, d, e),
                  N = p,
                  f &&
                    ((c._transform = o),
                    l && ((l._prev = null), l._prev && (l._prev._next = null)));
                d && d !== l;

              ) {
                if (
                  d.type <= 1 &&
                  ((h = d.p),
                  (n[h] = d.s + d.c),
                  (m[h] = d.s),
                  f || ((j = new ua(d, "s", h, j, d.r)), (d.c = 0)),
                  1 === d.type)
                )
                  for (g = d.l; --g > 0; )
                    (i = "xn" + g),
                      (h = d.p + "_" + i),
                      (n[h] = d.data[i]),
                      (m[h] = d[i]),
                      f || (j = new ua(d, i, h, j, d.rxp[i]));
                d = d._next;
              }
              return { proxy: m, end: n, firstMPT: j, pt: k };
            }),
            (T.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
              (this.t = a),
                (this.p = b),
                (this.s = d),
                (this.c = e),
                (this.n = i || b),
                a instanceof va || f.push(this.n),
                (this.r = j ? ("function" == typeof j ? j : Math.round) : j),
                (this.type = h || 0),
                k && ((this.pr = k), (c = !0)),
                (this.b = void 0 === l ? d : l),
                (this.e = void 0 === m ? d + e : m),
                g && ((this._next = g), (g._prev = this));
            })),
          wa = function (a, b, c, d, e, f) {
            var g = new va(a, b, c, d - c, e, -1, f);
            return (g.b = c), (g.e = g.xs0 = d), g;
          },
          xa = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
            (c = c || f || ""),
              "function" == typeof d && (d = d(r, q)),
              (h = new va(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
              (d += ""),
              e &&
                ra.test(d + c) &&
                ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
            var m,
              n,
              o,
              p,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C,
              D = c.split(", ").join(",").split(" "),
              E = d.split(", ").join(",").split(" "),
              F = D.length,
              G = k !== !1;
            for (
              (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
                (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl")
                  ? ((D = D.join(" ").replace(J, ", ").split(" ")),
                    (E = E.join(" ").replace(J, ", ").split(" ")))
                  : ((D = D.join(" ").split(",").join(", ").split(" ")),
                    (E = E.join(" ").split(",").join(", ").split(" "))),
                (F = D.length)),
                F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
                h.plugin = j,
                h.setRatio = l,
                ra.lastIndex = 0,
                m = 0;
              F > m;
              m++
            )
              if (
                ((p = D[m]), (u = E[m] + ""), (x = parseFloat(p)), x || 0 === x)
              )
                h.appendXtra(
                  "",
                  x,
                  ka(u, x),
                  u.replace(t, ""),
                  G && -1 !== u.indexOf("px") ? Math.round : !1,
                  !0
                );
              else if (e && ra.test(p))
                (B = u.indexOf(")") + 1),
                  (B = ")" + (B ? u.substr(B) : "")),
                  (C = -1 !== u.indexOf("hsl") && V),
                  (z = u),
                  (p = pa(p, C)),
                  (u = pa(u, C)),
                  (y = p.length + u.length > 6),
                  y && !V && 0 === u[3]
                    ? ((h["xs" + h.l] += h.l ? " transparent" : "transparent"),
                      (h.e = h.e.split(E[m]).join("transparent")))
                    : (V || (y = !1),
                      C
                        ? h
                            .appendXtra(
                              z.substr(0, z.indexOf("hsl")) +
                                (y ? "hsla(" : "hsl("),
                              p[0],
                              ka(u[0], p[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", p[1], ka(u[1], p[1]), "%,", !1)
                            .appendXtra(
                              "",
                              p[2],
                              ka(u[2], p[2]),
                              y ? "%," : "%" + B,
                              !1
                            )
                        : h
                            .appendXtra(
                              z.substr(0, z.indexOf("rgb")) +
                                (y ? "rgba(" : "rgb("),
                              p[0],
                              u[0] - p[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", p[1], u[1] - p[1], ",", Math.round)
                            .appendXtra(
                              "",
                              p[2],
                              u[2] - p[2],
                              y ? "," : B,
                              Math.round
                            ),
                      y &&
                        ((p = p.length < 4 ? 1 : p[3]),
                        h.appendXtra(
                          "",
                          p,
                          (u.length < 4 ? 1 : u[3]) - p,
                          B,
                          !1
                        ))),
                  (ra.lastIndex = 0);
              else if ((v = p.match(s))) {
                if (((w = u.match(t)), !w || w.length !== v.length)) return h;
                for (o = 0, n = 0; n < v.length; n++)
                  (A = v[n]),
                    (z = p.indexOf(A, o)),
                    h.appendXtra(
                      p.substr(o, z - o),
                      Number(A),
                      ka(w[n], A),
                      "",
                      G && "px" === p.substr(z + A.length, 2) ? Math.round : !1,
                      0 === n
                    ),
                    (o = z + A.length);
                h["xs" + h.l] += p.substr(o);
              } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
              for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++)
                B += h["xs" + m] + h.data["xn" + m];
              h.e = B + h["xs" + m];
            }
            return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
          }),
          ya = 9;
        for (j = va.prototype, j.l = j.pr = 0; --ya > 0; )
          (j["xn" + ya] = 0), (j["xs" + ya] = "");
        (j.xs0 = ""),
          (j._next =
            j._prev =
            j.xfirst =
            j.data =
            j.plugin =
            j.setRatio =
            j.rxp =
              null),
          (j.appendXtra = function (a, b, c, d, e, f) {
            var g = this,
              h = g.l;
            return (
              (g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
              c || 0 === h || g.plugin
                ? (g.l++,
                  (g.type = g.setRatio ? 2 : 1),
                  (g["xs" + g.l] = d || ""),
                  h > 0
                    ? ((g.data["xn" + h] = b + c),
                      (g.rxp["xn" + h] = e),
                      (g["xn" + h] = b),
                      g.plugin ||
                        ((g.xfirst = new va(
                          g,
                          "xn" + h,
                          b,
                          c,
                          g.xfirst || g,
                          0,
                          g.n,
                          e,
                          g.pr
                        )),
                        (g.xfirst.xs0 = 0)),
                      g)
                    : ((g.data = { s: b + c }),
                      (g.rxp = {}),
                      (g.s = b),
                      (g.c = c),
                      (g.r = e),
                      g))
                : ((g["xs" + h] += b + (d || "")), g)
            );
          });
        var za = function (a, b) {
            (b = b || {}),
              (this.p = b.prefix ? $(a) || a : a),
              (i[a] = i[this.p] = this),
              (this.format =
                b.formatter ||
                sa(b.defaultValue, b.color, b.collapsible, b.multi)),
              b.parser && (this.parse = b.parser),
              (this.clrs = b.color),
              (this.multi = b.multi),
              (this.keyword = b.keyword),
              (this.dflt = b.defaultValue),
              (this.allowFunc = b.allowFunc),
              (this.pr = b.priority || 0);
          },
          Aa = (T._registerComplexSpecialProp = function (a, b, c) {
            "object" != typeof b && (b = { parser: c });
            var d,
              e,
              f = a.split(","),
              g = b.defaultValue;
            for (c = c || [g], d = 0; d < f.length; d++)
              (b.prefix = 0 === d && b.prefix),
                (b.defaultValue = c[d] || g),
                (e = new za(f[d], b));
          }),
          Ba = (T._registerPluginProp = function (a) {
            if (!i[a]) {
              var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
              Aa(a, {
                parser: function (a, c, d, e, f, g, j) {
                  var k = h.com.greensock.plugins[b];
                  return k
                    ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j))
                    : (X("Error: " + b + " js file not loaded."), f);
                },
              });
            }
          });
        (j = za.prototype),
          (j.parseComplex = function (a, b, c, d, e, f) {
            var g,
              h,
              i,
              j,
              k,
              l,
              m = this.keyword;
            if (
              (this.multi &&
                (J.test(c) || J.test(b)
                  ? ((h = b.replace(J, "|").split("|")),
                    (i = c.replace(J, "|").split("|")))
                  : m && ((h = [b]), (i = [c]))),
              i)
            ) {
              for (
                j = i.length > h.length ? i.length : h.length, g = 0;
                j > g;
                g++
              )
                (b = h[g] = h[g] || this.dflt),
                  (c = i[g] = i[g] || this.dflt),
                  m &&
                    ((k = b.indexOf(m)),
                    (l = c.indexOf(m)),
                    k !== l &&
                      (-1 === l
                        ? (h[g] = h[g].split(m).join(""))
                        : -1 === k && (h[g] += " " + m)));
              (b = h.join(", ")), (c = i.join(", "));
            }
            return xa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
          }),
          (j.parse = function (a, b, c, d, f, g, h) {
            return this.parseComplex(
              a.style,
              this.format(ba(a, this.p, e, !1, this.dflt)),
              this.format(b),
              f,
              g
            );
          }),
          (g.registerSpecialProp = function (a, b, c) {
            Aa(a, {
              parser: function (a, d, e, f, g, h, i) {
                var j = new va(a, e, 0, 0, g, 2, e, !1, c);
                return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
              },
              priority: c,
            });
          }),
          (g.useSVGTransformAttr = !0);
        var Ca,
          Da =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          Ea = $("transform"),
          Fa = Y + "transform",
          Ga = $("transformOrigin"),
          Ha = null !== $("perspective"),
          Ia = (T.Transform = function () {
            (this.perspective = parseFloat(g.defaultTransformPerspective) || 0),
              (this.force3D =
                g.defaultForce3D !== !1 && Ha
                  ? g.defaultForce3D || "auto"
                  : !1);
          }),
          Ja = _gsScope.SVGElement,
          Ka = function (a, b, c) {
            var d,
              e = P.createElementNS("http://www.w3.org/2000/svg", a),
              f = /([a-z])([A-Z])/g;
            for (d in c)
              e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e;
          },
          La = P.documentElement || {},
          Ma = (function () {
            var a,
              b,
              c,
              d = p || (/Android/i.test(U) && !_gsScope.chrome);
            return (
              P.createElementNS &&
                La.appendChild &&
                !d &&
                ((a = Ka("svg", La)),
                (b = Ka("rect", a, { width: 100, height: 50, x: 100 })),
                (c = b.getBoundingClientRect().width),
                (b.style[Ga] = "50% 50%"),
                (b.style[Ea] = "scaleX(0.5)"),
                (d = c === b.getBoundingClientRect().width && !(n && Ha)),
                La.removeChild(a)),
              d
            );
          })(),
          Na = function (a, b, c, d, e, f) {
            var h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v = a._gsTransform,
              w = Sa(a, !0);
            v && ((t = v.xOrigin), (u = v.yOrigin)),
              (!d || (h = d.split(" ")).length < 2) &&
                ((n = a.getBBox()),
                0 === n.x &&
                  0 === n.y &&
                  n.width + n.height === 0 &&
                  (n = {
                    x:
                      parseFloat(
                        a.hasAttribute("x")
                          ? a.getAttribute("x")
                          : a.hasAttribute("cx")
                          ? a.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        a.hasAttribute("y")
                          ? a.getAttribute("y")
                          : a.hasAttribute("cy")
                          ? a.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (b = ja(b).split(" ")),
                (h = [
                  (-1 !== b[0].indexOf("%")
                    ? (parseFloat(b[0]) / 100) * n.width
                    : parseFloat(b[0])) + n.x,
                  (-1 !== b[1].indexOf("%")
                    ? (parseFloat(b[1]) / 100) * n.height
                    : parseFloat(b[1])) + n.y,
                ])),
              (c.xOrigin = k = parseFloat(h[0])),
              (c.yOrigin = l = parseFloat(h[1])),
              d &&
                w !== Ra &&
                ((m = w[0]),
                (n = w[1]),
                (o = w[2]),
                (p = w[3]),
                (q = w[4]),
                (r = w[5]),
                (s = m * p - n * o),
                s &&
                  ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s),
                  (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s),
                  (k = c.xOrigin = h[0] = i),
                  (l = c.yOrigin = h[1] = j))),
              v &&
                (f &&
                  ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
                e || (e !== !1 && g.defaultSmoothOrigin !== !1)
                  ? ((i = k - t),
                    (j = l - u),
                    (v.xOffset += i * w[0] + j * w[2] - i),
                    (v.yOffset += i * w[1] + j * w[3] - j))
                  : (v.xOffset = v.yOffset = 0)),
              f || a.setAttribute("data-svg-origin", h.join(" "));
          },
          Oa = function (a) {
            var b,
              c = Q(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              d = this.parentNode,
              e = this.nextSibling,
              f = this.style.cssText;
            if (
              (La.appendChild(c),
              c.appendChild(this),
              (this.style.display = "block"),
              a)
            )
              try {
                (b = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Oa);
              } catch (g) {}
            else this._originalGetBBox && (b = this._originalGetBBox());
            return (
              e ? d.insertBefore(this, e) : d.appendChild(this),
              La.removeChild(c),
              (this.style.cssText = f),
              b
            );
          },
          Pa = function (a) {
            try {
              return a.getBBox();
            } catch (b) {
              return Oa.call(a, !0);
            }
          },
          Qa = function (a) {
            return !(
              !Ja ||
              !a.getCTM ||
              (a.parentNode && !a.ownerSVGElement) ||
              !Pa(a)
            );
          },
          Ra = [1, 0, 0, 1, 0, 0],
          Sa = function (a, b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i,
              j = a._gsTransform || new Ia(),
              k = 1e5,
              l = a.style;
            if (
              (Ea
                ? (d = ba(a, Fa, null, !0))
                : a.currentStyle &&
                  ((d = a.currentStyle.filter.match(H)),
                  (d =
                    d && 4 === d.length
                      ? [
                          d[0].substr(4),
                          Number(d[2].substr(4)),
                          Number(d[1].substr(4)),
                          d[3].substr(4),
                          j.x || 0,
                          j.y || 0,
                        ].join(",")
                      : "")),
              (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
              Ea &&
                c &&
                !a.offsetParent &&
                a !== La &&
                ((f = l.display),
                (l.display = "block"),
                (i = a.parentNode),
                (i && a.offsetParent) ||
                  ((g = 1), (h = a.nextSibling), La.appendChild(a)),
                (d = ba(a, Fa, null, !0)),
                (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                f ? (l.display = f) : Xa(l, "display"),
                g &&
                  (h
                    ? i.insertBefore(a, h)
                    : i
                    ? i.appendChild(a)
                    : La.removeChild(a))),
              (j.svg || (a.getCTM && Qa(a))) &&
                (c &&
                  -1 !== (l[Ea] + "").indexOf("matrix") &&
                  ((d = l[Ea]), (c = 0)),
                (e = a.getAttribute("transform")),
                c &&
                  e &&
                  ((e = a.transform.baseVal.consolidate().matrix),
                  (d =
                    "matrix(" +
                    e.a +
                    "," +
                    e.b +
                    "," +
                    e.c +
                    "," +
                    e.d +
                    "," +
                    e.e +
                    "," +
                    e.f +
                    ")"),
                  (c = 0))),
              c)
            )
              return Ra;
            for (e = (d || "").match(s) || [], ya = e.length; --ya > -1; )
              (f = Number(e[ya])),
                (e[ya] = (g = f - (f |= 0))
                  ? ((g * k + (0 > g ? -0.5 : 0.5)) | 0) / k + f
                  : f);
            return b && e.length > 6
              ? [e[0], e[1], e[4], e[5], e[12], e[13]]
              : e;
          },
          Ta = (T.getTransform = function (a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;
            var f,
              h,
              i,
              j,
              k,
              l,
              m = d ? a._gsTransform || new Ia() : new Ia(),
              n = m.scaleX < 0,
              o = 2e-5,
              p = 1e5,
              q = Ha
                ? parseFloat(ba(a, Ga, c, !1, "0 0 0").split(" ")[2]) ||
                  m.zOrigin ||
                  0
                : 0,
              r = parseFloat(g.defaultTransformPerspective) || 0;
            if (
              ((m.svg = !(!a.getCTM || !Qa(a))),
              m.svg &&
                (Na(
                  a,
                  ba(a, Ga, c, !1, "50% 50%") + "",
                  m,
                  a.getAttribute("data-svg-origin")
                ),
                (Ca = g.useSVGTransformAttr || Ma)),
              (f = Sa(a)),
              f !== Ra)
            ) {
              if (16 === f.length) {
                var s,
                  t,
                  u,
                  v,
                  w,
                  x = f[0],
                  y = f[1],
                  z = f[2],
                  A = f[3],
                  B = f[4],
                  C = f[5],
                  D = f[6],
                  E = f[7],
                  F = f[8],
                  G = f[9],
                  H = f[10],
                  I = f[12],
                  J = f[13],
                  K = f[14],
                  L = f[11],
                  N = Math.atan2(D, H);
                m.zOrigin &&
                  ((K = -m.zOrigin),
                  (I = F * K - f[12]),
                  (J = G * K - f[13]),
                  (K = H * K + m.zOrigin - f[14])),
                  (m.rotationX = N * M),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = B * v + F * w),
                    (t = C * v + G * w),
                    (u = D * v + H * w),
                    (F = B * -w + F * v),
                    (G = C * -w + G * v),
                    (H = D * -w + H * v),
                    (L = E * -w + L * v),
                    (B = s),
                    (C = t),
                    (D = u)),
                  (N = Math.atan2(-z, H)),
                  (m.rotationY = N * M),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = x * v - F * w),
                    (t = y * v - G * w),
                    (u = z * v - H * w),
                    (G = y * w + G * v),
                    (H = z * w + H * v),
                    (L = A * w + L * v),
                    (x = s),
                    (y = t),
                    (z = u)),
                  (N = Math.atan2(y, x)),
                  (m.rotation = N * M),
                  N &&
                    ((v = Math.cos(N)),
                    (w = Math.sin(N)),
                    (s = x * v + y * w),
                    (t = B * v + C * w),
                    (u = F * v + G * w),
                    (y = y * v - x * w),
                    (C = C * v - B * w),
                    (G = G * v - F * w),
                    (x = s),
                    (B = t),
                    (F = u)),
                  m.rotationX &&
                    Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 &&
                    ((m.rotationX = m.rotation = 0),
                    (m.rotationY = 180 - m.rotationY)),
                  (N = Math.atan2(B, C)),
                  (m.scaleX =
                    ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
                  (m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
                  (m.scaleZ =
                    ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
                  (x /= m.scaleX),
                  (B /= m.scaleY),
                  (y /= m.scaleX),
                  (C /= m.scaleY),
                  Math.abs(N) > o
                    ? ((m.skewX = N * M),
                      (B = 0),
                      "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N)))
                    : (m.skewX = 0),
                  (m.perspective = L ? 1 / (0 > L ? -L : L) : 0),
                  (m.x = I),
                  (m.y = J),
                  (m.z = K),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)),
                    (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
              } else if (
                !Ha ||
                e ||
                !f.length ||
                m.x !== f[4] ||
                m.y !== f[5] ||
                (!m.rotationX && !m.rotationY)
              ) {
                var O = f.length >= 6,
                  P = O ? f[0] : 1,
                  Q = f[1] || 0,
                  R = f[2] || 0,
                  S = O ? f[3] : 1;
                (m.x = f[4] || 0),
                  (m.y = f[5] || 0),
                  (i = Math.sqrt(P * P + Q * Q)),
                  (j = Math.sqrt(S * S + R * R)),
                  (k = P || Q ? Math.atan2(Q, P) * M : m.rotation || 0),
                  (l = R || S ? Math.atan2(R, S) * M + k : m.skewX || 0),
                  (m.scaleX = i),
                  (m.scaleY = j),
                  (m.rotation = k),
                  (m.skewX = l),
                  Ha &&
                    ((m.rotationX = m.rotationY = m.z = 0),
                    (m.perspective = r),
                    (m.scaleZ = 1)),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)),
                    (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
              }
              Math.abs(m.skewX) > 90 &&
                Math.abs(m.skewX) < 270 &&
                (n
                  ? ((m.scaleX *= -1),
                    (m.skewX += m.rotation <= 0 ? 180 : -180),
                    (m.rotation += m.rotation <= 0 ? 180 : -180))
                  : ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
                (m.zOrigin = q);
              for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
            }
            return (
              d &&
                ((a._gsTransform = m),
                m.svg &&
                  (Ca && a.style[Ea]
                    ? b.delayedCall(0.001, function () {
                        Xa(a.style, Ea);
                      })
                    : !Ca &&
                      a.getAttribute("transform") &&
                      b.delayedCall(0.001, function () {
                        a.removeAttribute("transform");
                      }))),
              m
            );
          }),
          Ua = function (a) {
            var b,
              c,
              d = this.data,
              e = -d.rotation * L,
              f = e + d.skewX * L,
              g = 1e5,
              h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
              i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
              j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
              k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
              l = this.t.style,
              m = this.t.currentStyle;
            if (m) {
              (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
              var n,
                o,
                q = this.t.offsetWidth,
                r = this.t.offsetHeight,
                s = "absolute" !== m.position,
                t =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  h +
                  ", M12=" +
                  i +
                  ", M21=" +
                  j +
                  ", M22=" +
                  k,
                u = d.x + (q * d.xPercent) / 100,
                v = d.y + (r * d.yPercent) / 100;
              if (
                (null != d.ox &&
                  ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2),
                  (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2),
                  (u += n - (n * h + o * i)),
                  (v += o - (n * j + o * k))),
                s
                  ? ((n = q / 2),
                    (o = r / 2),
                    (t +=
                      ", Dx=" +
                      (n - (n * h + o * i) + u) +
                      ", Dy=" +
                      (o - (n * j + o * k) + v) +
                      ")"))
                  : (t += ", sizingMethod='auto expand')"),
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (l.filter = b.replace(I, t))
                  : (l.filter = t + " " + b),
                (0 === a || 1 === a) &&
                  1 === h &&
                  0 === i &&
                  0 === j &&
                  1 === k &&
                  ((s && -1 === t.indexOf("Dx=0, Dy=0")) ||
                    (y.test(b) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === b.indexOf(b.indexOf("Alpha")) &&
                      l.removeAttribute("filter"))),
                !s)
              ) {
                var w,
                  z,
                  A,
                  B = 8 > p ? 1 : -1;
                for (
                  n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round(
                      (q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 +
                        u
                    ),
                    d.ieOffsetY = Math.round(
                      (r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 +
                        v
                    ),
                    ya = 0;
                  4 > ya;
                  ya++
                )
                  (z = ha[ya]),
                    (w = m[z]),
                    (c =
                      -1 !== w.indexOf("px")
                        ? parseFloat(w)
                        : ca(this.t, z, parseFloat(w), w.replace(x, "")) || 0),
                    (A =
                      c !== d[z]
                        ? 2 > ya
                          ? -d.ieOffsetX
                          : -d.ieOffsetY
                        : 2 > ya
                        ? n - d.ieOffsetX
                        : o - d.ieOffsetY),
                    (l[z] =
                      (d[z] = Math.round(
                        c - A * (0 === ya || 2 === ya ? 1 : B)
                      )) + "px");
              }
            }
          },
          Va =
            (T.set3DTransformRatio =
            T.setTransformRatio =
              function (a) {
                var b,
                  c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  o,
                  p,
                  q,
                  r,
                  s,
                  t,
                  u,
                  v,
                  w,
                  x,
                  y,
                  z = this.data,
                  A = this.t.style,
                  B = z.rotation,
                  C = z.rotationX,
                  D = z.rotationY,
                  E = z.scaleX,
                  F = z.scaleY,
                  G = z.scaleZ,
                  H = z.x,
                  I = z.y,
                  J = z.z,
                  K = z.svg,
                  M = z.perspective,
                  N = z.force3D,
                  O = z.skewY,
                  P = z.skewX;
                if (
                  (O && ((P += O), (B += O)),
                  ((((1 === a || 0 === a) &&
                    "auto" === N &&
                    (this.tween._totalTime === this.tween._totalDuration ||
                      !this.tween._totalTime)) ||
                    !N) &&
                    !J &&
                    !M &&
                    !D &&
                    !C &&
                    1 === G) ||
                    (Ca && K) ||
                    !Ha)
                )
                  return void (B || P || K
                    ? ((B *= L),
                      (x = P * L),
                      (y = 1e5),
                      (c = Math.cos(B) * E),
                      (f = Math.sin(B) * E),
                      (d = Math.sin(B - x) * -F),
                      (g = Math.cos(B - x) * F),
                      x &&
                        "simple" === z.skewType &&
                        ((b = Math.tan(x - O * L)),
                        (b = Math.sqrt(1 + b * b)),
                        (d *= b),
                        (g *= b),
                        O &&
                          ((b = Math.tan(O * L)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b))),
                      K &&
                        ((H +=
                          z.xOrigin -
                          (z.xOrigin * c + z.yOrigin * d) +
                          z.xOffset),
                        (I +=
                          z.yOrigin -
                          (z.xOrigin * f + z.yOrigin * g) +
                          z.yOffset),
                        Ca &&
                          (z.xPercent || z.yPercent) &&
                          ((q = this.t.getBBox()),
                          (H += 0.01 * z.xPercent * q.width),
                          (I += 0.01 * z.yPercent * q.height)),
                        (q = 1e-6),
                        q > H && H > -q && (H = 0),
                        q > I && I > -q && (I = 0)),
                      (u =
                        ((c * y) | 0) / y +
                        "," +
                        ((f * y) | 0) / y +
                        "," +
                        ((d * y) | 0) / y +
                        "," +
                        ((g * y) | 0) / y +
                        "," +
                        H +
                        "," +
                        I +
                        ")"),
                      K && Ca
                        ? this.t.setAttribute("transform", "matrix(" + u)
                        : (A[Ea] =
                            (z.xPercent || z.yPercent
                              ? "translate(" +
                                z.xPercent +
                                "%," +
                                z.yPercent +
                                "%) matrix("
                              : "matrix(") + u))
                    : (A[Ea] =
                        (z.xPercent || z.yPercent
                          ? "translate(" +
                            z.xPercent +
                            "%," +
                            z.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        E +
                        ",0,0," +
                        F +
                        "," +
                        H +
                        "," +
                        I +
                        ")"));
                if (
                  (n &&
                    ((q = 1e-4),
                    q > E && E > -q && (E = G = 2e-5),
                    q > F && F > -q && (F = G = 2e-5),
                    !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                  B || P)
                )
                  (B *= L),
                    (r = c = Math.cos(B)),
                    (s = f = Math.sin(B)),
                    P &&
                      ((B -= P * L),
                      (r = Math.cos(B)),
                      (s = Math.sin(B)),
                      "simple" === z.skewType &&
                        ((b = Math.tan((P - O) * L)),
                        (b = Math.sqrt(1 + b * b)),
                        (r *= b),
                        (s *= b),
                        z.skewY &&
                          ((b = Math.tan(O * L)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b)))),
                    (d = -s),
                    (g = r);
                else {
                  if (!(D || C || 1 !== G || M || K))
                    return void (A[Ea] =
                      (z.xPercent || z.yPercent
                        ? "translate(" +
                          z.xPercent +
                          "%," +
                          z.yPercent +
                          "%) translate3d("
                        : "translate3d(") +
                      H +
                      "px," +
                      I +
                      "px," +
                      J +
                      "px)" +
                      (1 !== E || 1 !== F
                        ? " scale(" + E + "," + F + ")"
                        : ""));
                  (c = g = 1), (d = f = 0);
                }
                (k = 1),
                  (e = h = i = j = l = m = 0),
                  (o = M ? -1 / M : 0),
                  (p = z.zOrigin),
                  (q = 1e-6),
                  (v = ","),
                  (w = "0"),
                  (B = D * L),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (i = -s),
                    (l = o * -s),
                    (e = c * s),
                    (h = f * s),
                    (k = r),
                    (o *= r),
                    (c *= r),
                    (f *= r)),
                  (B = C * L),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (b = d * r + e * s),
                    (t = g * r + h * s),
                    (j = k * s),
                    (m = o * s),
                    (e = d * -s + e * r),
                    (h = g * -s + h * r),
                    (k *= r),
                    (o *= r),
                    (d = b),
                    (g = t)),
                  1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
                  1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
                  1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
                  (p || K) &&
                    (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                    K &&
                      ((H +=
                        z.xOrigin -
                        (z.xOrigin * c + z.yOrigin * d) +
                        z.xOffset),
                      (I +=
                        z.yOrigin -
                        (z.xOrigin * f + z.yOrigin * g) +
                        z.yOffset)),
                    q > H && H > -q && (H = w),
                    q > I && I > -q && (I = w),
                    q > J && J > -q && (J = 0)),
                  (u =
                    z.xPercent || z.yPercent
                      ? "translate(" +
                        z.xPercent +
                        "%," +
                        z.yPercent +
                        "%) matrix3d("
                      : "matrix3d("),
                  (u +=
                    (q > c && c > -q ? w : c) +
                    v +
                    (q > f && f > -q ? w : f) +
                    v +
                    (q > i && i > -q ? w : i)),
                  (u +=
                    v +
                    (q > l && l > -q ? w : l) +
                    v +
                    (q > d && d > -q ? w : d) +
                    v +
                    (q > g && g > -q ? w : g)),
                  C || D || 1 !== G
                    ? ((u +=
                        v +
                        (q > j && j > -q ? w : j) +
                        v +
                        (q > m && m > -q ? w : m) +
                        v +
                        (q > e && e > -q ? w : e)),
                      (u +=
                        v +
                        (q > h && h > -q ? w : h) +
                        v +
                        (q > k && k > -q ? w : k) +
                        v +
                        (q > o && o > -q ? w : o) +
                        v))
                    : (u += ",0,0,0,0,1,0,"),
                  (u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
                  (A[Ea] = u);
              });
        (j = Ia.prototype),
          (j.x =
            j.y =
            j.z =
            j.skewX =
            j.skewY =
            j.rotation =
            j.rotationX =
            j.rotationY =
            j.zOrigin =
            j.xPercent =
            j.yPercent =
            j.xOffset =
            j.yOffset =
              0),
          (j.scaleX = j.scaleY = j.scaleZ = 1),
          Aa(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                var j = i.scale && "function" == typeof i.scale ? i.scale : 0;
                j && (i.scale = j(r, a));
                var k,
                  l,
                  m,
                  n,
                  o,
                  p,
                  s,
                  t,
                  u,
                  v = a._gsTransform,
                  w = a.style,
                  x = 1e-6,
                  y = Da.length,
                  z = i,
                  A = {},
                  B = "transformOrigin",
                  C = Ta(a, e, !0, z.parseTransform),
                  D =
                    z.transform &&
                    ("function" == typeof z.transform
                      ? z.transform(r, q)
                      : z.transform);
                if (
                  ((C.skewType = z.skewType || C.skewType || g.defaultSkewType),
                  (d._transform = C),
                  "rotationZ" in z && (z.rotation = z.rotationZ),
                  D && "string" == typeof D && Ea)
                )
                  (l = R.style),
                    (l[Ea] = D),
                    (l.display = "block"),
                    (l.position = "absolute"),
                    -1 !== D.indexOf("%") &&
                      ((l.width = ba(a, "width")),
                      (l.height = ba(a, "height"))),
                    P.body.appendChild(R),
                    (k = Ta(R, null, !1)),
                    "simple" === C.skewType &&
                      (k.scaleY *= Math.cos(k.skewX * L)),
                    C.svg &&
                      ((p = C.xOrigin),
                      (s = C.yOrigin),
                      (k.x -= C.xOffset),
                      (k.y -= C.yOffset),
                      (z.transformOrigin || z.svgOrigin) &&
                        ((D = {}),
                        Na(
                          a,
                          ja(z.transformOrigin),
                          D,
                          z.svgOrigin,
                          z.smoothOrigin,
                          !0
                        ),
                        (p = D.xOrigin),
                        (s = D.yOrigin),
                        (k.x -= D.xOffset - C.xOffset),
                        (k.y -= D.yOffset - C.yOffset)),
                      (p || s) &&
                        ((t = Sa(R, !0)),
                        (k.x -= p - (p * t[0] + s * t[2])),
                        (k.y -= s - (p * t[1] + s * t[3])))),
                    P.body.removeChild(R),
                    k.perspective || (k.perspective = C.perspective),
                    null != z.xPercent &&
                      (k.xPercent = la(z.xPercent, C.xPercent)),
                    null != z.yPercent &&
                      (k.yPercent = la(z.yPercent, C.yPercent));
                else if ("object" == typeof z) {
                  if (
                    ((k = {
                      scaleX: la(
                        null != z.scaleX ? z.scaleX : z.scale,
                        C.scaleX
                      ),
                      scaleY: la(
                        null != z.scaleY ? z.scaleY : z.scale,
                        C.scaleY
                      ),
                      scaleZ: la(z.scaleZ, C.scaleZ),
                      x: la(z.x, C.x),
                      y: la(z.y, C.y),
                      z: la(z.z, C.z),
                      xPercent: la(z.xPercent, C.xPercent),
                      yPercent: la(z.yPercent, C.yPercent),
                      perspective: la(z.transformPerspective, C.perspective),
                    }),
                    (o = z.directionalRotation),
                    null != o)
                  )
                    if ("object" == typeof o) for (l in o) z[l] = o[l];
                    else z.rotation = o;
                  "string" == typeof z.x &&
                    -1 !== z.x.indexOf("%") &&
                    ((k.x = 0), (k.xPercent = la(z.x, C.xPercent))),
                    "string" == typeof z.y &&
                      -1 !== z.y.indexOf("%") &&
                      ((k.y = 0), (k.yPercent = la(z.y, C.yPercent))),
                    (k.rotation = ma(
                      "rotation" in z
                        ? z.rotation
                        : "shortRotation" in z
                        ? z.shortRotation + "_short"
                        : C.rotation,
                      C.rotation,
                      "rotation",
                      A
                    )),
                    Ha &&
                      ((k.rotationX = ma(
                        "rotationX" in z
                          ? z.rotationX
                          : "shortRotationX" in z
                          ? z.shortRotationX + "_short"
                          : C.rotationX || 0,
                        C.rotationX,
                        "rotationX",
                        A
                      )),
                      (k.rotationY = ma(
                        "rotationY" in z
                          ? z.rotationY
                          : "shortRotationY" in z
                          ? z.shortRotationY + "_short"
                          : C.rotationY || 0,
                        C.rotationY,
                        "rotationY",
                        A
                      ))),
                    (k.skewX = ma(z.skewX, C.skewX)),
                    (k.skewY = ma(z.skewY, C.skewY));
                }
                for (
                  Ha &&
                    null != z.force3D &&
                    ((C.force3D = z.force3D), (n = !0)),
                    m =
                      C.force3D ||
                      C.z ||
                      C.rotationX ||
                      C.rotationY ||
                      k.z ||
                      k.rotationX ||
                      k.rotationY ||
                      k.perspective,
                    m || null == z.scale || (k.scaleZ = 1);
                  --y > -1;

                )
                  (u = Da[y]),
                    (D = k[u] - C[u]),
                    (D > x || -x > D || null != z[u] || null != N[u]) &&
                      ((n = !0),
                      (f = new va(C, u, C[u], D, f)),
                      u in A && (f.e = A[u]),
                      (f.xs0 = 0),
                      (f.plugin = h),
                      d._overwriteProps.push(f.n));
                return (
                  (D =
                    "function" == typeof z.transformOrigin
                      ? z.transformOrigin(r, q)
                      : z.transformOrigin),
                  C.svg &&
                    (D || z.svgOrigin) &&
                    ((p = C.xOffset),
                    (s = C.yOffset),
                    Na(a, ja(D), k, z.svgOrigin, z.smoothOrigin),
                    (f = wa(
                      C,
                      "xOrigin",
                      (v ? C : k).xOrigin,
                      k.xOrigin,
                      f,
                      B
                    )),
                    (f = wa(
                      C,
                      "yOrigin",
                      (v ? C : k).yOrigin,
                      k.yOrigin,
                      f,
                      B
                    )),
                    (p !== C.xOffset || s !== C.yOffset) &&
                      ((f = wa(
                        C,
                        "xOffset",
                        v ? p : C.xOffset,
                        C.xOffset,
                        f,
                        B
                      )),
                      (f = wa(
                        C,
                        "yOffset",
                        v ? s : C.yOffset,
                        C.yOffset,
                        f,
                        B
                      ))),
                    (D = "0px 0px")),
                  (D || (Ha && m && C.zOrigin)) &&
                    (Ea
                      ? ((n = !0),
                        (u = Ga),
                        D ||
                          ((D = (ba(a, u, e, !1, "50% 50%") + "").split(" ")),
                          (D = D[0] + " " + D[1] + " " + C.zOrigin + "px")),
                        (D += ""),
                        (f = new va(w, u, 0, 0, f, -1, B)),
                        (f.b = w[u]),
                        (f.plugin = h),
                        Ha
                          ? ((l = C.zOrigin),
                            (D = D.split(" ")),
                            (C.zOrigin =
                              (D.length > 2 ? parseFloat(D[2]) : l) || 0),
                            (f.xs0 = f.e =
                              D[0] + " " + (D[1] || "50%") + " 0px"),
                            (f = new va(C, "zOrigin", 0, 0, f, -1, f.n)),
                            (f.b = l),
                            (f.xs0 = f.e = C.zOrigin))
                          : (f.xs0 = f.e = D))
                      : ja(D + "", C)),
                  n &&
                    (d._transformType =
                      (C.svg && Ca) || (!m && 3 !== this._transformType)
                        ? 2
                        : 3),
                  j && (i.scale = j),
                  f
                );
              },
              allowFunc: !0,
              prefix: !0,
            }
          ),
          Aa("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          Aa("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: sa("inset(0% 0% 0% 0%)", !1, !0),
          }),
          Aa("borderRadius", {
            defaultValue: "0px",
            parser: function (a, b, c, f, g, h) {
              b = this.format(b);
              var i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                z = a.style;
              for (
                q = parseFloat(a.offsetWidth),
                  r = parseFloat(a.offsetHeight),
                  i = b.split(" "),
                  j = 0;
                j < y.length;
                j++
              )
                this.p.indexOf("border") && (y[j] = $(y[j])),
                  (m = l = ba(a, y[j], e, !1, "0px")),
                  -1 !== m.indexOf(" ") &&
                    ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                  (n = k = i[j]),
                  (o = parseFloat(m)),
                  (t = m.substr((o + "").length)),
                  (u = "=" === n.charAt(1)),
                  u
                    ? ((p = parseInt(n.charAt(0) + "1", 10)),
                      (n = n.substr(2)),
                      (p *= parseFloat(n)),
                      (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || ""))
                    : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                  "" === s && (s = d[c] || t),
                  s !== t &&
                    ((v = ca(a, "borderLeft", o, t)),
                    (w = ca(a, "borderTop", o, t)),
                    "%" === s
                      ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%"))
                      : "em" === s
                      ? ((x = ca(a, "borderLeft", 1, "em")),
                        (m = v / x + "em"),
                        (l = w / x + "em"))
                      : ((m = v + "px"), (l = w + "px")),
                    u &&
                      ((n = parseFloat(m) + p + s),
                      (k = parseFloat(l) + p + s))),
                  (g = xa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
              return g;
            },
            prefix: !0,
            formatter: sa("0px 0px 0px 0px", !1, !0),
          }),
          Aa(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (a, b, c, d, f, g) {
                return xa(
                  a.style,
                  c,
                  this.format(ba(a, c, e, !1, "0px 0px")),
                  this.format(b),
                  !1,
                  "0px",
                  f
                );
              },
              prefix: !0,
              formatter: sa("0px 0px", !1, !0),
            }
          ),
          Aa("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (a, b, c, d, f, g) {
              var h,
                i,
                j,
                k,
                l,
                m,
                n = "background-position",
                o = e || aa(a, null),
                q = this.format(
                  (o
                    ? p
                      ? o.getPropertyValue(n + "-x") +
                        " " +
                        o.getPropertyValue(n + "-y")
                      : o.getPropertyValue(n)
                    : a.currentStyle.backgroundPositionX +
                      " " +
                      a.currentStyle.backgroundPositionY) || "0 0"
                ),
                r = this.format(b);
              if (
                (-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) &&
                r.split(",").length < 2 &&
                ((m = ba(a, "backgroundImage").replace(E, "")),
                m && "none" !== m)
              ) {
                for (
                  h = q.split(" "),
                    i = r.split(" "),
                    S.setAttribute("src", m),
                    j = 2;
                  --j > -1;

                )
                  (q = h[j]),
                    (k = -1 !== q.indexOf("%")),
                    k !== (-1 !== i[j].indexOf("%")) &&
                      ((l =
                        0 === j
                          ? a.offsetWidth - S.width
                          : a.offsetHeight - S.height),
                      (h[j] = k
                        ? (parseFloat(q) / 100) * l + "px"
                        : (parseFloat(q) / l) * 100 + "%"));
                q = h.join(" ");
              }
              return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: ja,
          }),
          Aa("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (a) {
              return (
                (a += ""),
                "co" === a.substr(0, 2)
                  ? a
                  : ja(-1 === a.indexOf(" ") ? a + " " + a : a)
              );
            },
          }),
          Aa("perspective", { defaultValue: "0px", prefix: !0 }),
          Aa("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          Aa("transformStyle", { prefix: !0 }),
          Aa("backfaceVisibility", { prefix: !0 }),
          Aa("userSelect", { prefix: !0 }),
          Aa("margin", {
            parser: ta("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          Aa("padding", {
            parser: ta("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          Aa("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (a, b, c, d, f, g) {
              var h, i, j;
              return (
                9 > p
                  ? ((i = a.currentStyle),
                    (j = 8 > p ? " " : ","),
                    (h =
                      "rect(" +
                      i.clipTop +
                      j +
                      i.clipRight +
                      j +
                      i.clipBottom +
                      j +
                      i.clipLeft +
                      ")"),
                    (b = this.format(b).split(",").join(j)))
                  : ((h = this.format(ba(a, this.p, e, !1, this.dflt))),
                    (b = this.format(b))),
                this.parseComplex(a.style, h, b, f, g)
              );
            },
          }),
          Aa("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          Aa("autoRound,strictUnits", {
            parser: function (a, b, c, d, e) {
              return e;
            },
          }),
          Aa("border", {
            defaultValue: "0px solid #000",
            parser: function (a, b, c, d, f, g) {
              var h = ba(a, "borderTopWidth", e, !1, "0px"),
                i = this.format(b).split(" "),
                j = i[0].replace(x, "");
              return (
                "px" !== j &&
                  (h = parseFloat(h) / ca(a, "borderTopWidth", 1, j) + j),
                this.parseComplex(
                  a.style,
                  this.format(
                    h +
                      " " +
                      ba(a, "borderTopStyle", e, !1, "solid") +
                      " " +
                      ba(a, "borderTopColor", e, !1, "#000")
                  ),
                  i.join(" "),
                  f,
                  g
                )
              );
            },
            color: !0,
            formatter: function (a) {
              var b = a.split(" ");
              return (
                b[0] +
                " " +
                (b[1] || "solid") +
                " " +
                (a.match(ra) || ["#000"])[0]
              );
            },
          }),
          Aa("borderWidth", {
            parser: ta(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          Aa("float,cssFloat,styleFloat", {
            parser: function (a, b, c, d, e, f) {
              var g = a.style,
                h = "cssFloat" in g ? "cssFloat" : "styleFloat";
              return new va(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            },
          });
        var Wa = function (a) {
          var b,
            c = this.t,
            d = c.filter || ba(this.data, "filter") || "",
            e = (this.s + this.c * a) | 0;
          100 === e &&
            (-1 === d.indexOf("atrix(") &&
            -1 === d.indexOf("radient(") &&
            -1 === d.indexOf("oader(")
              ? (c.removeAttribute("filter"), (b = !ba(this.data, "filter")))
              : ((c.filter = d.replace(A, "")), (b = !0))),
            b ||
              (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
              -1 === d.indexOf("pacity")
                ? (0 === e && this.xn1) ||
                  (c.filter = d + " alpha(opacity=" + e + ")")
                : (c.filter = d.replace(y, "opacity=" + e)));
        };
        Aa("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (a, b, c, d, f, g) {
            var h = parseFloat(ba(a, "opacity", e, !1, "1")),
              i = a.style,
              j = "autoAlpha" === c;
            return (
              "string" == typeof b &&
                "=" === b.charAt(1) &&
                (b =
                  ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
              j &&
                1 === h &&
                "hidden" === ba(a, "visibility", e) &&
                0 !== b &&
                (h = 0),
              V
                ? (f = new va(i, "opacity", h, b - h, f))
                : ((f = new va(i, "opacity", 100 * h, 100 * (b - h), f)),
                  (f.xn1 = j ? 1 : 0),
                  (i.zoom = 1),
                  (f.type = 2),
                  (f.b = "alpha(opacity=" + f.s + ")"),
                  (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                  (f.data = a),
                  (f.plugin = g),
                  (f.setRatio = Wa)),
              j &&
                ((f = new va(
                  i,
                  "visibility",
                  0,
                  0,
                  f,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== h ? "inherit" : "hidden",
                  0 === b ? "hidden" : "inherit"
                )),
                (f.xs0 = "inherit"),
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
              f
            );
          },
        });
        var Xa = function (a, b) {
            b &&
              (a.removeProperty
                ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) &&
                    (b = "-" + b),
                  a.removeProperty(b.replace(C, "-$1").toLowerCase()))
                : a.removeAttribute(b));
          },
          Ya = function (a) {
            if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
              this.t.setAttribute("class", 0 === a ? this.b : this.e);
              for (var b = this.data, c = this.t.style; b; )
                b.v ? (c[b.p] = b.v) : Xa(c, b.p), (b = b._next);
              1 === a &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        Aa("className", {
          parser: function (a, b, d, f, g, h, i) {
            var j,
              k,
              l,
              m,
              n,
              o = a.getAttribute("class") || "",
              p = a.style.cssText;
            if (
              ((g = f._classNamePT = new va(a, d, 0, 0, g, 2)),
              (g.setRatio = Ya),
              (g.pr = -11),
              (c = !0),
              (g.b = o),
              (k = ea(a, e)),
              (l = a._gsClassPT))
            ) {
              for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
              l.setRatio(1);
            }
            return (
              (a._gsClassPT = g),
              (g.e =
                "=" !== b.charAt(1)
                  ? b
                  : o.replace(
                      new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
              a.setAttribute("class", g.e),
              (j = fa(a, k, ea(a), i, m)),
              a.setAttribute("class", o),
              (g.data = j.firstMPT),
              a.style.cssText !== p && (a.style.cssText = p),
              (g = g.xfirst = f.parse(a, j.difs, g, h))
            );
          },
        });
        var Za = function (a) {
          if (
            (1 === a || 0 === a) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var b,
              c,
              d,
              e,
              f,
              g = this.t.style,
              h = i.transform.parse;
            if ("all" === this.e) (g.cssText = ""), (e = !0);
            else
              for (
                b = this.e.split(" ").join("").split(","), d = b.length;
                --d > -1;

              )
                (c = b[d]),
                  i[c] &&
                    (i[c].parse === h
                      ? (e = !0)
                      : (c = "transformOrigin" === c ? Ga : i[c].p)),
                  Xa(g, c);
            e &&
              (Xa(g, Ea),
              (f = this.t._gsTransform),
              f &&
                (f.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          Aa("clearProps", {
            parser: function (a, b, d, e, f) {
              return (
                (f = new va(a, d, 0, 0, f, 2)),
                (f.setRatio = Za),
                (f.e = b),
                (f.pr = -10),
                (f.data = e._tween),
                (c = !0),
                f
              );
            },
          }),
            j = "bezier,throwProps,physicsProps,physics2D".split(","),
            ya = j.length;
          ya--;

        )
          Ba(j[ya]);
        (j = g.prototype),
          (j._firstPT = j._lastParsedTransform = j._transform = null),
          (j._onInitTween = function (a, b, h, j) {
            if (!a.nodeType) return !1;
            (this._target = q = a),
              (this._tween = h),
              (this._vars = b),
              (r = j),
              (k = b.autoRound),
              (c = !1),
              (d = b.suffixMap || g.suffixMap),
              (e = aa(a, "")),
              (f = this._overwriteProps);
            var n,
              p,
              s,
              t,
              u,
              v,
              w,
              x,
              y,
              A = a.style;
            if (
              (l &&
                "" === A.zIndex &&
                ((n = ba(a, "zIndex", e)),
                ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
              "string" == typeof b &&
                ((t = A.cssText),
                (n = ea(a, e)),
                (A.cssText = t + ";" + b),
                (n = fa(a, n, ea(a)).difs),
                !V && z.test(b) && (n.opacity = parseFloat(RegExp.$1)),
                (b = n),
                (A.cssText = t)),
              b.className
                ? (this._firstPT = p =
                    i.className.parse(
                      a,
                      b.className,
                      "className",
                      this,
                      null,
                      null,
                      b
                    ))
                : (this._firstPT = p = this.parse(a, b, null)),
              this._transformType)
            ) {
              for (
                y = 3 === this._transformType,
                  Ea
                    ? m &&
                      ((l = !0),
                      "" === A.zIndex &&
                        ((w = ba(a, "zIndex", e)),
                        ("auto" === w || "" === w) &&
                          this._addLazySet(A, "zIndex", 0)),
                      o &&
                        this._addLazySet(
                          A,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (y ? "visible" : "hidden")
                        ))
                    : (A.zoom = 1),
                  s = p;
                s && s._next;

              )
                s = s._next;
              (x = new va(a, "transform", 0, 0, null, 2)),
                this._linkCSSP(x, null, s),
                (x.setRatio = Ea ? Va : Ua),
                (x.data = this._transform || Ta(a, e, !0)),
                (x.tween = h),
                (x.pr = -1),
                f.pop();
            }
            if (c) {
              for (; p; ) {
                for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p),
                  (p._next = s) ? (s._prev = p) : (u = p),
                  (p = v);
              }
              this._firstPT = t;
            }
            return !0;
          }),
          (j.parse = function (a, b, c, f) {
            var g,
              h,
              j,
              l,
              m,
              n,
              o,
              p,
              s,
              t,
              u = a.style;
            for (g in b) {
              if (
                ((n = b[g]),
                (h = i[g]),
                "function" != typeof n || (h && h.allowFunc) || (n = n(r, q)),
                h)
              )
                c = h.parse(a, n, g, this, c, f, b);
              else {
                if ("--" === g.substr(0, 2)) {
                  this._tween._propLookup[g] = this._addTween.call(
                    this._tween,
                    a.style,
                    "setProperty",
                    aa(a).getPropertyValue(g) + "",
                    n + "",
                    g,
                    !1,
                    g
                  );
                  continue;
                }
                (m = ba(a, g, e) + ""),
                  (s = "string" == typeof n),
                  "color" === g ||
                  "fill" === g ||
                  "stroke" === g ||
                  -1 !== g.indexOf("Color") ||
                  (s && B.test(n))
                    ? (s ||
                        ((n = pa(n)),
                        (n =
                          (n.length > 3 ? "rgba(" : "rgb(") +
                          n.join(",") +
                          ")")),
                      (c = xa(u, g, m, n, !0, "transparent", c, 0, f)))
                    : s && K.test(n)
                    ? (c = xa(u, g, m, n, !0, null, c, 0, f))
                    : ((j = parseFloat(m)),
                      (o = j || 0 === j ? m.substr((j + "").length) : ""),
                      ("" === m || "auto" === m) &&
                        ("width" === g || "height" === g
                          ? ((j = ia(a, g, e)), (o = "px"))
                          : "left" === g || "top" === g
                          ? ((j = da(a, g, e)), (o = "px"))
                          : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                      (t = s && "=" === n.charAt(1)),
                      t
                        ? ((l = parseInt(n.charAt(0) + "1", 10)),
                          (n = n.substr(2)),
                          (l *= parseFloat(n)),
                          (p = n.replace(x, "")))
                        : ((l = parseFloat(n)),
                          (p = s ? n.replace(x, "") : "")),
                      "" === p && (p = g in d ? d[g] : o),
                      (n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
                      o !== p &&
                        ("" !== p || "lineHeight" === g) &&
                        (l || 0 === l) &&
                        j &&
                        ((j = ca(a, g, j, o)),
                        "%" === p
                          ? ((j /= ca(a, g, 100, "%") / 100),
                            b.strictUnits !== !0 && (m = j + "%"))
                          : "em" === p ||
                            "rem" === p ||
                            "vw" === p ||
                            "vh" === p
                          ? (j /= ca(a, g, 1, p))
                          : "px" !== p && ((l = ca(a, g, l, p)), (p = "px")),
                        t && (l || 0 === l) && (n = l + j + p)),
                      t && (l += j),
                      (!j && 0 !== j) || (!l && 0 !== l)
                        ? void 0 !== u[g] &&
                          (n || (n + "" != "NaN" && null != n))
                          ? ((c = new va(
                              u,
                              g,
                              l || j || 0,
                              0,
                              c,
                              -1,
                              g,
                              !1,
                              0,
                              m,
                              n
                            )),
                            (c.xs0 =
                              "none" !== n ||
                              ("display" !== g && -1 === g.indexOf("Style"))
                                ? n
                                : m))
                          : X("invalid " + g + " tween value: " + b[g])
                        : ((c = new va(
                            u,
                            g,
                            j,
                            l - j,
                            c,
                            0,
                            g,
                            k !== !1 && ("px" === p || "zIndex" === g),
                            0,
                            m,
                            n
                          )),
                          (c.xs0 = p)));
              }
              f && c && !c.plugin && (c.plugin = f);
            }
            return c;
          }),
          (j.setRatio = function (a) {
            var b,
              c,
              d,
              e = this._firstPT,
              f = 1e-6;
            if (
              1 !== a ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                a ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; e; ) {
                  if (
                    ((b = e.c * a + e.s),
                    e.r ? (b = e.r(b)) : f > b && b > -f && (b = 0),
                    e.type)
                  )
                    if (1 === e.type)
                      if (((d = e.l), 2 === d))
                        e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                      else if (3 === d)
                        e.t[e.p] =
                          e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                      else if (4 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4;
                      else if (5 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4 +
                          e.xn4 +
                          e.xs5;
                      else {
                        for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    else
                      -1 === e.type
                        ? (e.t[e.p] = e.xs0)
                        : e.setRatio && e.setRatio(a);
                  else e.t[e.p] = b + e.xs0;
                  e = e._next;
                }
              else
                for (; e; )
                  2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a),
                    (e = e._next);
            else
              for (; e; ) {
                if (2 !== e.type)
                  if (e.r && -1 !== e.type)
                    if (((b = e.r(e.s + e.c)), e.type)) {
                      if (1 === e.type) {
                        for (
                          d = e.l, c = e.xs0 + b + e.xs1, d = 1;
                          d < e.l;
                          d++
                        )
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    } else e.t[e.p] = b + e.xs0;
                  else e.t[e.p] = e.e;
                else e.setRatio(a);
                e = e._next;
              }
          }),
          (j._enableTransforms = function (a) {
            (this._transform = this._transform || Ta(this._target, e, !0)),
              (this._transformType =
                (this._transform.svg && Ca) || (!a && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var $a = function (a) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (j._addLazySet = function (a, b, c) {
          var d = (this._firstPT = new va(a, b, 0, 0, this._firstPT, 2));
          (d.e = c), (d.setRatio = $a), (d.data = this);
        }),
          (j._linkCSSP = function (a, b, c, d) {
            return (
              a &&
                (b && (b._prev = a),
                a._next && (a._next._prev = a._prev),
                a._prev
                  ? (a._prev._next = a._next)
                  : this._firstPT === a &&
                    ((this._firstPT = a._next), (d = !0)),
                c
                  ? (c._next = a)
                  : d || null !== this._firstPT || (this._firstPT = a),
                (a._next = b),
                (a._prev = c)),
              a
            );
          }),
          (j._mod = function (a) {
            for (var b = this._firstPT; b; )
              "function" == typeof a[b.p] && (b.r = a[b.p]), (b = b._next);
          }),
          (j._kill = function (b) {
            var c,
              d,
              e,
              f = b;
            if (b.autoAlpha || b.alpha) {
              f = {};
              for (d in b) f[d] = b[d];
              (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
            }
            for (
              b.className &&
                (c = this._classNamePT) &&
                ((e = c.xfirst),
                e && e._prev
                  ? this._linkCSSP(e._prev, c._next, e._prev._prev)
                  : e === this._firstPT && (this._firstPT = c._next),
                c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                (this._classNamePT = null)),
                c = this._firstPT;
              c;

            )
              c.plugin &&
                c.plugin !== d &&
                c.plugin._kill &&
                (c.plugin._kill(b), (d = c.plugin)),
                (c = c._next);
            return a.prototype._kill.call(this, f);
          });
        var _a = function (a, b, c) {
          var d, e, f, g;
          if (a.slice) for (e = a.length; --e > -1; ) _a(a[e], b, c);
          else
            for (d = a.childNodes, e = d.length; --e > -1; )
              (f = d[e]),
                (g = f.type),
                f.style && (b.push(ea(f)), c && c.push(f)),
                (1 !== g && 9 !== g && 11 !== g) ||
                  !f.childNodes.length ||
                  _a(f, b, c);
        };
        return (
          (g.cascadeTo = function (a, c, d) {
            var e,
              f,
              g,
              h,
              i = b.to(a, c, d),
              j = [i],
              k = [],
              l = [],
              m = [],
              n = b._internals.reservedProps;
            for (
              a = i._targets || i.target,
                _a(a, k, m),
                i.render(c, !0, !0),
                _a(a, l),
                i.render(0, !0, !0),
                i._enabled(!0),
                e = m.length;
              --e > -1;

            )
              if (((f = fa(m[e], k[e], l[e])), f.firstMPT)) {
                f = f.difs;
                for (g in d) n[g] && (f[g] = d[g]);
                h = {};
                for (g in f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f));
              }
            return j;
          }),
          a.activate([g]),
          g
        );
      },
      !0
    ),
    (function () {
      var a = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.7.0",
          priority: -1,
          API: 2,
          init: function (a, b, c) {
            return (this._tween = c), !0;
          },
        }),
        b = function (a) {
          var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1;
          return function (c) {
            return ((Math.round(c / a) * a * b) | 0) / b;
          };
        },
        c = function (a, b) {
          for (; a; ) a.f || a.blob || (a.m = b || Math.round), (a = a._next);
        },
        d = a.prototype;
      (d._onInitAllProps = function () {
        var a,
          d,
          e,
          f,
          g = this._tween,
          h = g.vars.roundProps,
          i = {},
          j = g._propLookup.roundProps;
        if ("object" != typeof h || h.push)
          for (
            "string" == typeof h && (h = h.split(",")), e = h.length;
            --e > -1;

          )
            i[h[e]] = Math.round;
        else for (f in h) i[f] = b(h[f]);
        for (f in i)
          for (a = g._firstPT; a; )
            (d = a._next),
              a.pg
                ? a.t._mod(i)
                : a.n === f &&
                  (2 === a.f && a.t
                    ? c(a.t._firstPT, i[f])
                    : (this._add(a.t, f, a.s, a.c, i[f]),
                      d && (d._prev = a._prev),
                      a._prev
                        ? (a._prev._next = d)
                        : g._firstPT === a && (g._firstPT = d),
                      (a._next = a._prev = null),
                      (g._propLookup[f] = j))),
              (a = d);
        return !1;
      }),
        (d._add = function (a, b, c, d, e) {
          this._addTween(a, b, c, c + d, b, e || Math.round),
            this._overwriteProps.push(b);
        });
    })(),
    (function () {
      _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function (a, b, c, d) {
          var e, f;
          if ("function" != typeof a.setAttribute) return !1;
          for (e in b)
            (f = b[e]),
              "function" == typeof f && (f = f(d, a)),
              this._addTween(
                a,
                "setAttribute",
                a.getAttribute(e) + "",
                f + "",
                e,
                !1,
                e
              ),
              this._overwriteProps.push(e);
          return !0;
        },
      });
    })(),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (a, b, c, d) {
        "object" != typeof b && (b = { rotation: b }), (this.finals = {});
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;
        for (e in b)
          "useRadians" !== e &&
            ((h = b[e]),
            "function" == typeof h && (h = h(d, a)),
            (j = (h + "").split("_")),
            (f = j[0]),
            (g = parseFloat(
              "function" != typeof a[e]
                ? a[e]
                : a[
                    e.indexOf("set") ||
                    "function" != typeof a["get" + e.substr(3)]
                      ? e
                      : "get" + e.substr(3)
                  ]()
            )),
            (h = this.finals[e] =
              "string" == typeof f && "=" === f.charAt(1)
                ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2))
                : Number(f) || 0),
            (i = h - g),
            j.length &&
              ((f = j.join("_")),
              -1 !== f.indexOf("short") &&
                ((i %= k), i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
              -1 !== f.indexOf("_cw") && 0 > i
                ? (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k)
                : -1 !== f.indexOf("ccw") &&
                  i > 0 &&
                  (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
            (i > l || -l > i) &&
              (this._addTween(a, e, g, g + i, e),
              this._overwriteProps.push(e)));
        return !0;
      },
      set: function (a) {
        var b;
        if (1 !== a) this._super.setRatio.call(this, a);
        else
          for (b = this._firstPT; b; )
            b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]),
              (b = b._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (a) {
        var b,
          c,
          d,
          e,
          f = _gsScope.GreenSockGlobals || _gsScope,
          g = f.com.greensock,
          h = 2 * Math.PI,
          i = Math.PI / 2,
          j = g._class,
          k = function (b, c) {
            var d = j("easing." + b, function () {}, !0),
              e = (d.prototype = new a());
            return (e.constructor = d), (e.getRatio = c), d;
          },
          l = a.register || function () {},
          m = function (a, b, c, d, e) {
            var f = j(
              "easing." + a,
              { easeOut: new b(), easeIn: new c(), easeInOut: new d() },
              !0
            );
            return l(f, a), f;
          },
          n = function (a, b, c) {
            (this.t = a),
              (this.v = b),
              c &&
                ((this.next = c),
                (c.prev = this),
                (this.c = c.v - b),
                (this.gap = c.t - a));
          },
          o = function (b, c) {
            var d = j(
                "easing." + b,
                function (a) {
                  (this._p1 = a || 0 === a ? a : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              e = (d.prototype = new a());
            return (
              (e.constructor = d),
              (e.getRatio = c),
              (e.config = function (a) {
                return new d(a);
              }),
              d
            );
          },
          p = m(
            "Back",
            o("BackOut", function (a) {
              return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
            }),
            o("BackIn", function (a) {
              return a * a * ((this._p1 + 1) * a - this._p1);
            }),
            o("BackInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2)
                : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
            })
          ),
          q = j(
            "easing.SlowMo",
            function (a, b, c) {
              (b = b || 0 === b ? b : 0.7),
                null == a ? (a = 0.7) : a > 1 && (a = 1),
                (this._p = 1 !== a ? b : 0),
                (this._p1 = (1 - a) / 2),
                (this._p2 = a),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = c === !0);
            },
            !0
          ),
          r = (q.prototype = new a());
        return (
          (r.constructor = q),
          (r.getRatio = function (a) {
            var b = a + (0.5 - a) * this._p;
            return a < this._p1
              ? this._calcEnd
                ? 1 - (a = 1 - a / this._p1) * a
                : b - (a = 1 - a / this._p1) * a * a * a * b
              : a > this._p3
              ? this._calcEnd
                ? 1 === a
                  ? 0
                  : 1 - (a = (a - this._p3) / this._p1) * a
                : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
              : this._calcEnd
              ? 1
              : b;
          }),
          (q.ease = new q(0.7, 0.7)),
          (r.config = q.config =
            function (a, b, c) {
              return new q(a, b, c);
            }),
          (b = j(
            "easing.SteppedEase",
            function (a, b) {
              (a = a || 1),
                (this._p1 = 1 / a),
                (this._p2 = a + (b ? 0 : 1)),
                (this._p3 = b ? 1 : 0);
            },
            !0
          )),
          (r = b.prototype = new a()),
          (r.constructor = b),
          (r.getRatio = function (a) {
            return (
              0 > a ? (a = 0) : a >= 1 && (a = 0.999999999),
              (((this._p2 * a) | 0) + this._p3) * this._p1
            );
          }),
          (r.config = b.config =
            function (a, c) {
              return new b(a, c);
            }),
          (c = j(
            "easing.ExpoScaleEase",
            function (a, b, c) {
              (this._p1 = Math.log(b / a)),
                (this._p2 = b - a),
                (this._p3 = a),
                (this._ease = c);
            },
            !0
          )),
          (r = c.prototype = new a()),
          (r.constructor = c),
          (r.getRatio = function (a) {
            return (
              this._ease && (a = this._ease.getRatio(a)),
              (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
            );
          }),
          (r.config = c.config =
            function (a, b, d) {
              return new c(a, b, d);
            }),
          (d = j(
            "easing.RoughEase",
            function (b) {
              b = b || {};
              for (
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i = b.taper || "none",
                  j = [],
                  k = 0,
                  l = 0 | (b.points || 20),
                  m = l,
                  o = b.randomize !== !1,
                  p = b.clamp === !0,
                  q = b.template instanceof a ? b.template : null,
                  r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
                --m > -1;

              )
                (c = o ? Math.random() : (1 / l) * m),
                  (d = q ? q.getRatio(c) : c),
                  "none" === i
                    ? (e = r)
                    : "out" === i
                    ? ((f = 1 - c), (e = f * f * r))
                    : "in" === i
                    ? (e = c * c * r)
                    : 0.5 > c
                    ? ((f = 2 * c), (e = f * f * 0.5 * r))
                    : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                  o
                    ? (d += Math.random() * e - 0.5 * e)
                    : m % 2
                    ? (d += 0.5 * e)
                    : (d -= 0.5 * e),
                  p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
                  (j[k++] = { x: c, y: d });
              for (
                j.sort(function (a, b) {
                  return a.x - b.x;
                }),
                  h = new n(1, 1, null),
                  m = l;
                --m > -1;

              )
                (g = j[m]), (h = new n(g.x, g.y, h));
              this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
            },
            !0
          )),
          (r = d.prototype = new a()),
          (r.constructor = d),
          (r.getRatio = function (a) {
            var b = this._prev;
            if (a > b.t) {
              for (; b.next && a >= b.t; ) b = b.next;
              b = b.prev;
            } else for (; b.prev && a <= b.t; ) b = b.prev;
            return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
          }),
          (r.config = function (a) {
            return new d(a);
          }),
          (d.ease = new d()),
          m(
            "Bounce",
            k("BounceOut", function (a) {
              return 1 / 2.75 > a
                ? 7.5625 * a * a
                : 2 / 2.75 > a
                ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                : 2.5 / 2.75 > a
                ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
            }),
            k("BounceIn", function (a) {
              return (a = 1 - a) < 1 / 2.75
                ? 1 - 7.5625 * a * a
                : 2 / 2.75 > a
                ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                : 2.5 / 2.75 > a
                ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
            }),
            k("BounceInOut", function (a) {
              var b = 0.5 > a;
              return (
                (a = b ? 1 - 2 * a : 2 * a - 1),
                (a =
                  1 / 2.75 > a
                    ? 7.5625 * a * a
                    : 2 / 2.75 > a
                    ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                    : 2.5 / 2.75 > a
                    ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                    : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                b ? 0.5 * (1 - a) : 0.5 * a + 0.5
              );
            })
          ),
          m(
            "Circ",
            k("CircOut", function (a) {
              return Math.sqrt(1 - (a -= 1) * a);
            }),
            k("CircIn", function (a) {
              return -(Math.sqrt(1 - a * a) - 1);
            }),
            k("CircInOut", function (a) {
              return (a *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - a * a) - 1)
                : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
            })
          ),
          (e = function (b, c, d) {
            var e = j(
                "easing." + b,
                function (a, b) {
                  (this._p1 = a >= 1 ? a : 1),
                    (this._p2 = (b || d) / (1 > a ? a : 1)),
                    (this._p3 =
                      (this._p2 / h) * (Math.asin(1 / this._p1) || 0)),
                    (this._p2 = h / this._p2);
                },
                !0
              ),
              f = (e.prototype = new a());
            return (
              (f.constructor = e),
              (f.getRatio = c),
              (f.config = function (a, b) {
                return new e(a, b);
              }),
              e
            );
          }),
          m(
            "Elastic",
            e(
              "ElasticOut",
              function (a) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * a) *
                    Math.sin((a - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            e(
              "ElasticIn",
              function (a) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (a -= 1)) *
                  Math.sin((a - this._p3) * this._p2)
                );
              },
              0.3
            ),
            e(
              "ElasticInOut",
              function (a) {
                return (a *= 2) < 1
                  ? -0.5 *
                      (this._p1 *
                        Math.pow(2, 10 * (a -= 1)) *
                        Math.sin((a - this._p3) * this._p2))
                  : this._p1 *
                      Math.pow(2, -10 * (a -= 1)) *
                      Math.sin((a - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          m(
            "Expo",
            k("ExpoOut", function (a) {
              return 1 - Math.pow(2, -10 * a);
            }),
            k("ExpoIn", function (a) {
              return Math.pow(2, 10 * (a - 1)) - 0.001;
            }),
            k("ExpoInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (a - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
            })
          ),
          m(
            "Sine",
            k("SineOut", function (a) {
              return Math.sin(a * i);
            }),
            k("SineIn", function (a) {
              return -Math.cos(a * i) + 1;
            }),
            k("SineInOut", function (a) {
              return -0.5 * (Math.cos(Math.PI * a) - 1);
            })
          ),
          j(
            "easing.EaseLookup",
            {
              find: function (b) {
                return a.map[b];
              },
            },
            !0
          ),
          l(f.SlowMo, "SlowMo", "ease,"),
          l(d, "RoughEase", "ease,"),
          l(b, "SteppedEase", "ease,"),
          p
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a, b) {
    "use strict";
    var c = {},
      d = a.document,
      e = (a.GreenSockGlobals = a.GreenSockGlobals || a),
      f = e[b];
    if (f)
      return (
        "undefined" != typeof module && module.exports && (module.exports = f),
        f
      );
    var g,
      h,
      i,
      j,
      k,
      l = function (a) {
        var b,
          c = a.split("."),
          d = e;
        for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
        return d;
      },
      m = l("com.greensock"),
      n = 1e-8,
      o = function (a) {
        var b,
          c = [],
          d = a.length;
        for (b = 0; b !== d; c.push(a[b++]));
        return c;
      },
      p = function () {},
      q = (function () {
        var a = Object.prototype.toString,
          b = a.call([]);
        return function (c) {
          return (
            null != c &&
            (c instanceof Array ||
              ("object" == typeof c && !!c.push && a.call(c) === b))
          );
        };
      })(),
      r = {},
      s = function (d, f, g, h) {
        (this.sc = r[d] ? r[d].sc : []),
          (r[d] = this),
          (this.gsClass = null),
          (this.func = g);
        var i = [];
        (this.check = function (j) {
          for (var k, m, n, o, p = f.length, q = p; --p > -1; )
            (k = r[f[p]] || new s(f[p], [])).gsClass
              ? ((i[p] = k.gsClass), q--)
              : j && k.sc.push(this);
          if (0 === q && g) {
            if (
              ((m = ("com.greensock." + d).split(".")),
              (n = m.pop()),
              (o = l(m.join("."))[n] = this.gsClass = g.apply(g, i)),
              h)
            )
              if (
                ((e[n] = c[n] = o),
                "undefined" != typeof module && module.exports)
              )
                if (d === b) {
                  module.exports = c[b] = o;
                  for (p in c) o[p] = c[p];
                } else c[b] && (c[b][n] = o);
              else
                "function" == typeof define &&
                  define.amd &&
                  define(
                    (a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") +
                      d.split(".").pop(),
                    [],
                    function () {
                      return o;
                    }
                  );
            for (p = 0; p < this.sc.length; p++) this.sc[p].check();
          }
        }),
          this.check(!0);
      },
      t = (a._gsDefine = function (a, b, c, d) {
        return new s(a, b, c, d);
      }),
      u = (m._class = function (a, b, c) {
        return (
          (b = b || function () {}),
          t(
            a,
            [],
            function () {
              return b;
            },
            c
          ),
          b
        );
      });
    t.globals = e;
    var v = [0, 0, 1, 1],
      w = u(
        "easing.Ease",
        function (a, b, c, d) {
          (this._func = a),
            (this._type = c || 0),
            (this._power = d || 0),
            (this._params = b ? v.concat(b) : v);
        },
        !0
      ),
      x = (w.map = {}),
      y = (w.register = function (a, b, c, d) {
        for (
          var e,
            f,
            g,
            h,
            i = b.split(","),
            j = i.length,
            k = (c || "easeIn,easeOut,easeInOut").split(",");
          --j > -1;

        )
          for (
            f = i[j],
              e = d ? u("easing." + f, null, !0) : m.easing[f] || {},
              g = k.length;
            --g > -1;

          )
            (h = k[g]),
              (x[f + "." + h] =
                x[h + f] =
                e[h] =
                  a.getRatio ? a : a[h] || new a());
      });
    for (
      i = w.prototype,
        i._calcEnd = !1,
        i.getRatio = function (a) {
          if (this._func)
            return (this._params[0] = a), this._func.apply(null, this._params);
          var b = this._type,
            c = this._power,
            d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
          return (
            1 === c
              ? (d *= d)
              : 2 === c
              ? (d *= d * d)
              : 3 === c
              ? (d *= d * d * d)
              : 4 === c && (d *= d * d * d * d),
            1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
          );
        },
        g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        h = g.length;
      --h > -1;

    )
      (i = g[h] + ",Power" + h),
        y(new w(null, null, 1, h), i, "easeOut", !0),
        y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")),
        y(new w(null, null, 3, h), i, "easeInOut");
    (x.linear = m.easing.Linear.easeIn), (x.swing = m.easing.Quad.easeInOut);
    var z = u("events.EventDispatcher", function (a) {
      (this._listeners = {}), (this._eventTarget = a || this);
    });
    (i = z.prototype),
      (i.addEventListener = function (a, b, c, d, e) {
        e = e || 0;
        var f,
          g,
          h = this._listeners[a],
          i = 0;
        for (
          this !== j || k || j.wake(),
            null == h && (this._listeners[a] = h = []),
            g = h.length;
          --g > -1;

        )
          (f = h[g]),
            f.c === b && f.s === c
              ? h.splice(g, 1)
              : 0 === i && f.pr < e && (i = g + 1);
        h.splice(i, 0, { c: b, s: c, up: d, pr: e });
      }),
      (i.removeEventListener = function (a, b) {
        var c,
          d = this._listeners[a];
        if (d)
          for (c = d.length; --c > -1; )
            if (d[c].c === b) return void d.splice(c, 1);
      }),
      (i.dispatchEvent = function (a) {
        var b,
          c,
          d,
          e = this._listeners[a];
        if (e)
          for (
            b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget;
            --b > -1;

          )
            (d = e[b]),
              d &&
                (d.up
                  ? d.c.call(d.s || c, { type: a, target: c })
                  : d.c.call(d.s || c));
      });
    var A = a.requestAnimationFrame,
      B = a.cancelAnimationFrame,
      C =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      D = C();
    for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A; )
      (A = a[g[h] + "RequestAnimationFrame"]),
        (B =
          a[g[h] + "CancelAnimationFrame"] ||
          a[g[h] + "CancelRequestAnimationFrame"]);
    u("Ticker", function (a, b) {
      var c,
        e,
        f,
        g,
        h,
        i = this,
        l = C(),
        m = b !== !1 && A ? "auto" : !1,
        o = 500,
        q = 33,
        r = "tick",
        s = function (a) {
          var b,
            d,
            j = C() - D;
          j > o && (l += j - q),
            (D += j),
            (i.time = (D - l) / 1e3),
            (b = i.time - h),
            (!c || b > 0 || a === !0) &&
              (i.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)),
            a !== !0 && (f = e(s)),
            d && i.dispatchEvent(r);
        };
      z.call(i),
        (i.time = i.frame = 0),
        (i.tick = function () {
          s(!0);
        }),
        (i.lagSmoothing = function (a, b) {
          return arguments.length
            ? ((o = a || 1 / n), void (q = Math.min(b, o, 0)))
            : 1 / n > o;
        }),
        (i.sleep = function () {
          null != f &&
            (m && B ? B(f) : clearTimeout(f),
            (e = p),
            (f = null),
            i === j && (k = !1));
        }),
        (i.wake = function (a) {
          null !== f
            ? i.sleep()
            : a
            ? (l += -D + (D = C()))
            : i.frame > 10 && (D = C() - o + 5),
            (e =
              0 === c
                ? p
                : m && A
                ? A
                : function (a) {
                    return setTimeout(a, (1e3 * (h - i.time) + 1) | 0);
                  }),
            i === j && (k = !0),
            s(2);
        }),
        (i.fps = function (a) {
          return arguments.length
            ? ((c = a), (g = 1 / (c || 60)), (h = this.time + g), void i.wake())
            : c;
        }),
        (i.useRAF = function (a) {
          return arguments.length ? (i.sleep(), (m = a), void i.fps(c)) : m;
        }),
        i.fps(a),
        setTimeout(function () {
          "auto" === m &&
            i.frame < 5 &&
            "hidden" !== (d || {}).visibilityState &&
            i.useRAF(!1);
        }, 1500);
    }),
      (i = m.Ticker.prototype = new m.events.EventDispatcher()),
      (i.constructor = m.Ticker);
    var E = u("core.Animation", function (a, b) {
      if (
        ((this.vars = b = b || {}),
        (this._duration = this._totalDuration = a || 0),
        (this._delay = Number(b.delay) || 0),
        (this._timeScale = 1),
        (this._active = !!b.immediateRender),
        (this.data = b.data),
        (this._reversed = !!b.reversed),
        Z)
      ) {
        k || j.wake();
        var c = this.vars.useFrames ? Y : Z;
        c.add(this, c._time), this.vars.paused && this.paused(!0);
      }
    });
    (j = E.ticker = new m.Ticker()),
      (i = E.prototype),
      (i._dirty = i._gc = i._initted = i._paused = !1),
      (i._totalTime = i._time = 0),
      (i._rawPrevTime = -1),
      (i._next = i._last = i._onUpdate = i._timeline = i.timeline = null),
      (i._paused = !1);
    var F = function () {
      k &&
        C() - D > 2e3 &&
        ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) &&
        j.wake();
      var a = setTimeout(F, 2e3);
      a.unref && a.unref();
    };
    F(),
      (i.play = function (a, b) {
        return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
      }),
      (i.pause = function (a, b) {
        return null != a && this.seek(a, b), this.paused(!0);
      }),
      (i.resume = function (a, b) {
        return null != a && this.seek(a, b), this.paused(!1);
      }),
      (i.seek = function (a, b) {
        return this.totalTime(Number(a), b !== !1);
      }),
      (i.restart = function (a, b) {
        return this.reversed(!1)
          .paused(!1)
          .totalTime(a ? -this._delay : 0, b !== !1, !0);
      }),
      (i.reverse = function (a, b) {
        return (
          null != a && this.seek(a || this.totalDuration(), b),
          this.reversed(!0).paused(!1)
        );
      }),
      (i.render = function (a, b, c) {}),
      (i.invalidate = function () {
        return (
          (this._time = this._totalTime = 0),
          (this._initted = this._gc = !1),
          (this._rawPrevTime = -1),
          (this._gc || !this.timeline) && this._enabled(!0),
          this
        );
      }),
      (i.isActive = function () {
        var a,
          b = this._timeline,
          c = this._startTime;
        return (
          !b ||
          (!this._gc &&
            !this._paused &&
            b.isActive() &&
            (a = b.rawTime(!0)) >= c &&
            a < c + this.totalDuration() / this._timeScale - n)
        );
      }),
      (i._enabled = function (a, b) {
        return (
          k || j.wake(),
          (this._gc = !a),
          (this._active = this.isActive()),
          b !== !0 &&
            (a && !this.timeline
              ? this._timeline.add(this, this._startTime - this._delay)
              : !a && this.timeline && this._timeline._remove(this, !0)),
          !1
        );
      }),
      (i._kill = function (a, b) {
        return this._enabled(!1, !1);
      }),
      (i.kill = function (a, b) {
        return this._kill(a, b), this;
      }),
      (i._uncache = function (a) {
        for (var b = a ? this : this.timeline; b; )
          (b._dirty = !0), (b = b.timeline);
        return this;
      }),
      (i._swapSelfInParams = function (a) {
        for (var b = a.length, c = a.concat(); --b > -1; )
          "{self}" === a[b] && (c[b] = this);
        return c;
      }),
      (i._callback = function (a) {
        var b = this.vars,
          c = b[a],
          d = b[a + "Params"],
          e = b[a + "Scope"] || b.callbackScope || this,
          f = d ? d.length : 0;
        switch (f) {
          case 0:
            c.call(e);
            break;
          case 1:
            c.call(e, d[0]);
            break;
          case 2:
            c.call(e, d[0], d[1]);
            break;
          default:
            c.apply(e, d);
        }
      }),
      (i.eventCallback = function (a, b, c, d) {
        if ("on" === (a || "").substr(0, 2)) {
          var e = this.vars;
          if (1 === arguments.length) return e[a];
          null == b
            ? delete e[a]
            : ((e[a] = b),
              (e[a + "Params"] =
                q(c) && -1 !== c.join("").indexOf("{self}")
                  ? this._swapSelfInParams(c)
                  : c),
              (e[a + "Scope"] = d)),
            "onUpdate" === a && (this._onUpdate = b);
        }
        return this;
      }),
      (i.delay = function (a) {
        return arguments.length
          ? (this._timeline.smoothChildTiming &&
              this.startTime(this._startTime + a - this._delay),
            (this._delay = a),
            this)
          : this._delay;
      }),
      (i.duration = function (a) {
        return arguments.length
          ? ((this._duration = this._totalDuration = a),
            this._uncache(!0),
            this._timeline.smoothChildTiming &&
              this._time > 0 &&
              this._time < this._duration &&
              0 !== a &&
              this.totalTime(this._totalTime * (a / this._duration), !0),
            this)
          : ((this._dirty = !1), this._duration);
      }),
      (i.totalDuration = function (a) {
        return (
          (this._dirty = !1),
          arguments.length ? this.duration(a) : this._totalDuration
        );
      }),
      (i.time = function (a, b) {
        return arguments.length
          ? (this._dirty && this.totalDuration(),
            this.totalTime(a > this._duration ? this._duration : a, b))
          : this._time;
      }),
      (i.totalTime = function (a, b, c) {
        if ((k || j.wake(), !arguments.length)) return this._totalTime;
        if (this._timeline) {
          if (
            (0 > a && !c && (a += this.totalDuration()),
            this._timeline.smoothChildTiming)
          ) {
            this._dirty && this.totalDuration();
            var d = this._totalDuration,
              e = this._timeline;
            if (
              (a > d && !c && (a = d),
              (this._startTime =
                (this._paused ? this._pauseTime : e._time) -
                (this._reversed ? d - a : a) / this._timeScale),
              e._dirty || this._uncache(!1),
              e._timeline)
            )
              for (; e._timeline; )
                e._timeline._time !==
                  (e._startTime + e._totalTime) / e._timeScale &&
                  e.totalTime(e._totalTime, !0),
                  (e = e._timeline);
          }
          this._gc && this._enabled(!0, !1),
            (this._totalTime !== a || 0 === this._duration) &&
              (K.length && _(), this.render(a, b, !1), K.length && _());
        }
        return this;
      }),
      (i.progress = i.totalProgress =
        function (a, b) {
          var c = this.duration();
          return arguments.length
            ? this.totalTime(c * a, b)
            : c
            ? this._time / c
            : this.ratio;
        }),
      (i.startTime = function (a) {
        return arguments.length
          ? (a !== this._startTime &&
              ((this._startTime = a),
              this.timeline &&
                this.timeline._sortChildren &&
                this.timeline.add(this, a - this._delay)),
            this)
          : this._startTime;
      }),
      (i.endTime = function (a) {
        return (
          this._startTime +
          (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        );
      }),
      (i.timeScale = function (a) {
        if (!arguments.length) return this._timeScale;
        var b, c;
        for (
          a = a || n,
            this._timeline &&
              this._timeline.smoothChildTiming &&
              ((b = this._pauseTime),
              (c = b || 0 === b ? b : this._timeline.totalTime()),
              (this._startTime =
                c - ((c - this._startTime) * this._timeScale) / a)),
            this._timeScale = a,
            c = this.timeline;
          c && c.timeline;

        )
          (c._dirty = !0), c.totalDuration(), (c = c.timeline);
        return this;
      }),
      (i.reversed = function (a) {
        return arguments.length
          ? (a != this._reversed &&
              ((this._reversed = a),
              this.totalTime(
                this._timeline && !this._timeline.smoothChildTiming
                  ? this.totalDuration() - this._totalTime
                  : this._totalTime,
                !0
              )),
            this)
          : this._reversed;
      }),
      (i.paused = function (a) {
        if (!arguments.length) return this._paused;
        var b,
          c,
          d = this._timeline;
        return (
          a != this._paused &&
            d &&
            (k || a || j.wake(),
            (b = d.rawTime()),
            (c = b - this._pauseTime),
            !a &&
              d.smoothChildTiming &&
              ((this._startTime += c), this._uncache(!1)),
            (this._pauseTime = a ? b : null),
            (this._paused = a),
            (this._active = this.isActive()),
            !a &&
              0 !== c &&
              this._initted &&
              this.duration() &&
              ((b = d.smoothChildTiming
                ? this._totalTime
                : (b - this._startTime) / this._timeScale),
              this.render(b, b === this._totalTime, !0))),
          this._gc && !a && this._enabled(!0, !1),
          this
        );
      });
    var G = u("core.SimpleTimeline", function (a) {
      E.call(this, 0, a),
        (this.autoRemoveChildren = this.smoothChildTiming = !0);
    });
    (i = G.prototype = new E()),
      (i.constructor = G),
      (i.kill()._gc = !1),
      (i._first = i._last = i._recent = null),
      (i._sortChildren = !1),
      (i.add = i.insert =
        function (a, b, c, d) {
          var e, f;
          if (
            ((a._startTime = Number(b || 0) + a._delay),
            a._paused &&
              this !== a._timeline &&
              (a._pauseTime =
                this.rawTime() - (a._timeline.rawTime() - a._pauseTime)),
            a.timeline && a.timeline._remove(a, !0),
            (a.timeline = a._timeline = this),
            a._gc && a._enabled(!0, !0),
            (e = this._last),
            this._sortChildren)
          )
            for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
          return (
            e
              ? ((a._next = e._next), (e._next = a))
              : ((a._next = this._first), (this._first = a)),
            a._next ? (a._next._prev = a) : (this._last = a),
            (a._prev = e),
            (this._recent = a),
            this._timeline && this._uncache(!0),
            this
          );
        }),
      (i._remove = function (a, b) {
        return (
          a.timeline === this &&
            (b || a._enabled(!1, !0),
            a._prev
              ? (a._prev._next = a._next)
              : this._first === a && (this._first = a._next),
            a._next
              ? (a._next._prev = a._prev)
              : this._last === a && (this._last = a._prev),
            (a._next = a._prev = a.timeline = null),
            a === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
          this
        );
      }),
      (i.render = function (a, b, c) {
        var d,
          e = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; e; )
          (d = e._next),
            (e._active || (a >= e._startTime && !e._paused && !e._gc)) &&
              (e._reversed
                ? e.render(
                    (e._dirty ? e.totalDuration() : e._totalDuration) -
                      (a - e._startTime) * e._timeScale,
                    b,
                    c
                  )
                : e.render((a - e._startTime) * e._timeScale, b, c)),
            (e = d);
      }),
      (i.rawTime = function () {
        return k || j.wake(), this._totalTime;
      });
    var H = u(
        "TweenLite",
        function (b, c, d) {
          if (
            (E.call(this, c, d), (this.render = H.prototype.render), null == b)
          )
            throw "Cannot tween a null target.";
          this.target = b = "string" != typeof b ? b : H.selector(b) || b;
          var e,
            f,
            g,
            h =
              b.jquery ||
              (b.length &&
                b !== a &&
                b[0] &&
                (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
            i = this.vars.overwrite;
          if (
            ((this._overwrite = i =
              null == i
                ? X[H.defaultOverwrite]
                : "number" == typeof i
                ? i >> 0
                : X[i]),
            (h || b instanceof Array || (b.push && q(b))) &&
              "number" != typeof b[0])
          )
            for (
              this._targets = g = o(b),
                this._propLookup = [],
                this._siblings = [],
                e = 0;
              e < g.length;
              e++
            )
              (f = g[e]),
                f
                  ? "string" != typeof f
                    ? f.length &&
                      f !== a &&
                      f[0] &&
                      (f[0] === a ||
                        (f[0].nodeType && f[0].style && !f.nodeType))
                      ? (g.splice(e--, 1), (this._targets = g = g.concat(o(f))))
                      : ((this._siblings[e] = aa(f, this, !1)),
                        1 === i &&
                          this._siblings[e].length > 1 &&
                          ca(f, this, null, 1, this._siblings[e]))
                    : ((f = g[e--] = H.selector(f)),
                      "string" == typeof f && g.splice(e + 1, 1))
                  : g.splice(e--, 1);
          else
            (this._propLookup = {}),
              (this._siblings = aa(b, this, !1)),
              1 === i &&
                this._siblings.length > 1 &&
                ca(b, this, null, 1, this._siblings);
          (this.vars.immediateRender ||
            (0 === c &&
              0 === this._delay &&
              this.vars.immediateRender !== !1)) &&
            ((this._time = -n), this.render(Math.min(0, -this._delay)));
        },
        !0
      ),
      I = function (b) {
        return (
          b &&
          b.length &&
          b !== a &&
          b[0] &&
          (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))
        );
      },
      J = function (a, b) {
        var c,
          d = {};
        for (c in a)
          W[c] ||
            (c in b &&
              "transform" !== c &&
              "x" !== c &&
              "y" !== c &&
              "width" !== c &&
              "height" !== c &&
              "className" !== c &&
              "border" !== c) ||
            !(!T[c] || (T[c] && T[c]._autoCSS)) ||
            ((d[c] = a[c]), delete a[c]);
        a.css = d;
      };
    (i = H.prototype = new E()),
      (i.constructor = H),
      (i.kill()._gc = !1),
      (i.ratio = 0),
      (i._firstPT = i._targets = i._overwrittenProps = i._startAt = null),
      (i._notifyPluginsOfEnabled = i._lazy = !1),
      (H.version = "2.1.3"),
      (H.defaultEase = i._ease = new w(null, null, 1, 1)),
      (H.defaultOverwrite = "auto"),
      (H.ticker = j),
      (H.autoSleep = 120),
      (H.lagSmoothing = function (a, b) {
        j.lagSmoothing(a, b);
      }),
      (H.selector =
        a.$ ||
        a.jQuery ||
        function (b) {
          var c = a.$ || a.jQuery;
          return c
            ? ((H.selector = c), c(b))
            : (d || (d = a.document),
              d
                ? d.querySelectorAll
                  ? d.querySelectorAll(b)
                  : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
                : b);
        });
    var K = [],
      L = {},
      M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      N = /[\+-]=-?[\.\d]/,
      O = function (a) {
        for (var b, c = this._firstPT, d = 1e-6; c; )
          (b = c.blob
            ? 1 === a && null != this.end
              ? this.end
              : a
              ? this.join("")
              : this.start
            : c.c * a + c.s),
            c.m
              ? (b = c.m.call(this._tween, b, this._target || c.t, this._tween))
              : d > b && b > -d && !c.blob && (b = 0),
            c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
            (c = c._next);
      },
      P = function (a) {
        return ((1e3 * a) | 0) / 1e3 + "";
      },
      Q = function (a, b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = [],
          m = 0,
          n = "",
          o = 0;
        for (
          l.start = a,
            l.end = b,
            a = l[0] = a + "",
            b = l[1] = b + "",
            c && (c(l), (a = l[0]), (b = l[1])),
            l.length = 0,
            e = a.match(M) || [],
            f = b.match(M) || [],
            d &&
              ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
            i = f.length,
            h = 0;
          i > h;
          h++
        )
          (k = f[h]),
            (j = b.substr(m, b.indexOf(k, m) - m)),
            (n += j || !h ? j : ","),
            (m += j.length),
            o ? (o = (o + 1) % 5) : "rgba(" === j.substr(-5) && (o = 1),
            k === e[h] || e.length <= h
              ? (n += k)
              : (n && (l.push(n), (n = "")),
                (g = parseFloat(e[h])),
                l.push(g),
                (l._firstPT = {
                  _next: l._firstPT,
                  t: l,
                  p: l.length - 1,
                  s: g,
                  c:
                    ("=" === k.charAt(1)
                      ? parseInt(k.charAt(0) + "1", 10) *
                        parseFloat(k.substr(2))
                      : parseFloat(k) - g) || 0,
                  f: 0,
                  m: o && 4 > o ? Math.round : P,
                })),
            (m += k.length);
        return (
          (n += b.substr(m)),
          n && l.push(n),
          (l.setRatio = O),
          N.test(b) && (l.end = null),
          l
        );
      },
      R = function (a, b, c, d, e, f, g, h, i) {
        "function" == typeof d && (d = d(i || 0, a));
        var j,
          k = typeof a[b],
          l =
            "function" !== k
              ? ""
              : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)]
              ? b
              : "get" + b.substr(3),
          m = "get" !== c ? c : l ? (g ? a[l](g) : a[l]()) : a[b],
          n = "string" == typeof d && "=" === d.charAt(1),
          o = {
            t: a,
            p: b,
            s: m,
            f: "function" === k,
            pg: 0,
            n: e || b,
            m: f ? ("function" == typeof f ? f : Math.round) : 0,
            pr: 0,
            c: n
              ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2))
              : parseFloat(d) - m || 0,
          };
        return (
          ("number" != typeof m || ("number" != typeof d && !n)) &&
            (g ||
            isNaN(m) ||
            (!n && isNaN(d)) ||
            "boolean" == typeof m ||
            "boolean" == typeof d
              ? ((o.fp = g),
                (j = Q(
                  m,
                  n
                    ? parseFloat(o.s) +
                        o.c +
                        (o.s + "").replace(/[0-9\-\.]/g, "")
                    : d,
                  h || H.defaultStringFilter,
                  o
                )),
                (o = {
                  t: j,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: e || b,
                  pr: 0,
                  m: 0,
                }))
              : ((o.s = parseFloat(m)), n || (o.c = parseFloat(d) - o.s || 0))),
          o.c
            ? ((o._next = this._firstPT) && (o._next._prev = o),
              (this._firstPT = o),
              o)
            : void 0
        );
      },
      S = (H._internals = {
        isArray: q,
        isSelector: I,
        lazyTweens: K,
        blobDif: Q,
      }),
      T = (H._plugins = {}),
      U = (S.tweenLookup = {}),
      V = 0,
      W = (S.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
        stagger: 1,
      }),
      X = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0,
      },
      Y = (E._rootFramesTimeline = new G()),
      Z = (E._rootTimeline = new G()),
      $ = 30,
      _ = (S.lazyRender = function () {
        var a,
          b,
          c = K.length;
        for (L = {}, a = 0; c > a; a++)
          (b = K[a]),
            b &&
              b._lazy !== !1 &&
              (b.render(b._lazy[0], b._lazy[1], !0), (b._lazy = !1));
        K.length = 0;
      });
    (Z._startTime = j.time),
      (Y._startTime = j.frame),
      (Z._active = Y._active = !0),
      setTimeout(_, 1),
      (E._updateRoot = H.render =
        function () {
          var a, b, c;
          if (
            (K.length && _(),
            Z.render((j.time - Z._startTime) * Z._timeScale, !1, !1),
            Y.render((j.frame - Y._startTime) * Y._timeScale, !1, !1),
            K.length && _(),
            j.frame >= $)
          ) {
            $ = j.frame + (parseInt(H.autoSleep, 10) || 120);
            for (c in U) {
              for (b = U[c].tweens, a = b.length; --a > -1; )
                b[a]._gc && b.splice(a, 1);
              0 === b.length && delete U[c];
            }
            if (
              ((c = Z._first),
              (!c || c._paused) &&
                H.autoSleep &&
                !Y._first &&
                1 === j._listeners.tick.length)
            ) {
              for (; c && c._paused; ) c = c._next;
              c || j.sleep();
            }
          }
        }),
      j.addEventListener("tick", E._updateRoot);
    var aa = function (a, b, c) {
        var d,
          e,
          f = a._gsTweenID;
        if (
          (U[f || (a._gsTweenID = f = "t" + V++)] ||
            (U[f] = { target: a, tweens: [] }),
          b && ((d = U[f].tweens), (d[(e = d.length)] = b), c))
        )
          for (; --e > -1; ) d[e] === b && d.splice(e, 1);
        return U[f].tweens;
      },
      ba = function (a, b, c, d) {
        var e,
          f,
          g = a.vars.onOverwrite;
        return (
          g && (e = g(a, b, c, d)),
          (g = H.onOverwrite),
          g && (f = g(a, b, c, d)),
          e !== !1 && f !== !1
        );
      },
      ca = function (a, b, c, d, e) {
        var f, g, h, i;
        if (1 === d || d >= 4) {
          for (i = e.length, f = 0; i > f; f++)
            if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
            else if (5 === d) break;
          return g;
        }
        var j,
          k = b._startTime + n,
          l = [],
          m = 0,
          o = 0 === b._duration;
        for (f = e.length; --f > -1; )
          (h = e[f]) === b ||
            h._gc ||
            h._paused ||
            (h._timeline !== b._timeline
              ? ((j = j || da(b, 0, o)), 0 === da(h, j, o) && (l[m++] = h))
              : h._startTime <= k &&
                h._startTime + h.totalDuration() / h._timeScale > k &&
                (((o || !h._initted) && k - h._startTime <= 2 * n) ||
                  (l[m++] = h)));
        for (f = m; --f > -1; )
          if (
            ((h = l[f]),
            (i = h._firstPT),
            2 === d && h._kill(c, a, b) && (g = !0),
            2 !== d || (!h._firstPT && h._initted && i))
          ) {
            if (2 !== d && !ba(h, b)) continue;
            h._enabled(!1, !1) && (g = !0);
          }
        return g;
      },
      da = function (a, b, c) {
        for (
          var d = a._timeline, e = d._timeScale, f = a._startTime;
          d._timeline;

        ) {
          if (((f += d._startTime), (e *= d._timeScale), d._paused))
            return -100;
          d = d._timeline;
        }
        return (
          (f /= e),
          f > b
            ? f - b
            : (c && f === b) || (!a._initted && 2 * n > f - b)
            ? n
            : (f += a.totalDuration() / a._timeScale / e) > b + n
            ? 0
            : f - b - n
        );
      };
    (i._init = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = this.vars,
        h = this._overwrittenProps,
        i = this._duration,
        j = !!g.immediateRender,
        k = g.ease,
        l = this._startAt;
      if (g.startAt) {
        l && (l.render(-1, !0), l.kill()), (e = {});
        for (d in g.startAt) e[d] = g.startAt[d];
        if (
          ((e.data = "isStart"),
          (e.overwrite = !1),
          (e.immediateRender = !0),
          (e.lazy = j && g.lazy !== !1),
          (e.startAt = e.delay = null),
          (e.onUpdate = g.onUpdate),
          (e.onUpdateParams = g.onUpdateParams),
          (e.onUpdateScope = g.onUpdateScope || g.callbackScope || this),
          (this._startAt = H.to(this.target || {}, 0, e)),
          j)
        )
          if (this._time > 0) this._startAt = null;
          else if (0 !== i) return;
      } else if (g.runBackwards && 0 !== i)
        if (l) l.render(-1, !0), l.kill(), (this._startAt = null);
        else {
          0 !== this._time && (j = !1), (c = {});
          for (d in g) (W[d] && "autoCSS" !== d) || (c[d] = g[d]);
          if (
            ((c.overwrite = 0),
            (c.data = "isFromStart"),
            (c.lazy = j && g.lazy !== !1),
            (c.immediateRender = j),
            (this._startAt = H.to(this.target, 0, c)),
            j)
          ) {
            if (0 === this._time) return;
          } else
            this._startAt._init(),
              this._startAt._enabled(!1),
              this.vars.immediateRender && (this._startAt = null);
        }
      if (
        ((this._ease = k =
          k
            ? k instanceof w
              ? k
              : "function" == typeof k
              ? new w(k, g.easeParams)
              : x[k] || H.defaultEase
            : H.defaultEase),
        g.easeParams instanceof Array &&
          k.config &&
          (this._ease = k.config.apply(k, g.easeParams)),
        (this._easeType = this._ease._type),
        (this._easePower = this._ease._power),
        (this._firstPT = null),
        this._targets)
      )
        for (f = this._targets.length, a = 0; f > a; a++)
          this._initProps(
            this._targets[a],
            (this._propLookup[a] = {}),
            this._siblings[a],
            h ? h[a] : null,
            a
          ) && (b = !0);
      else
        b = this._initProps(
          this.target,
          this._propLookup,
          this._siblings,
          h,
          0
        );
      if (
        (b && H._onPluginEvent("_onInitAllProps", this),
        h &&
          (this._firstPT ||
            ("function" != typeof this.target && this._enabled(!1, !1))),
        g.runBackwards)
      )
        for (c = this._firstPT; c; ) (c.s += c.c), (c.c = -c.c), (c = c._next);
      (this._onUpdate = g.onUpdate), (this._initted = !0);
    }),
      (i._initProps = function (b, c, d, e, f) {
        var g, h, i, j, k, l;
        if (null == b) return !1;
        L[b._gsTweenID] && _(),
          this.vars.css ||
            (b.style &&
              b !== a &&
              b.nodeType &&
              T.css &&
              this.vars.autoCSS !== !1 &&
              J(this.vars, b));
        for (g in this.vars)
          if (((l = this.vars[g]), W[g]))
            l &&
              (l instanceof Array || (l.push && q(l))) &&
              -1 !== l.join("").indexOf("{self}") &&
              (this.vars[g] = l = this._swapSelfInParams(l, this));
          else if (
            T[g] &&
            (j = new T[g]())._onInitTween(b, this.vars[g], this, f)
          ) {
            for (
              this._firstPT = k =
                {
                  _next: this._firstPT,
                  t: j,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: g,
                  pg: 1,
                  pr: j._priority,
                  m: 0,
                },
                h = j._overwriteProps.length;
              --h > -1;

            )
              c[j._overwriteProps[h]] = this._firstPT;
            (j._priority || j._onInitAllProps) && (i = !0),
              (j._onDisable || j._onEnable) &&
                (this._notifyPluginsOfEnabled = !0),
              k._next && (k._next._prev = k);
          } else
            c[g] = R.call(
              this,
              b,
              g,
              "get",
              l,
              g,
              0,
              null,
              this.vars.stringFilter,
              f
            );
        return e && this._kill(e, b)
          ? this._initProps(b, c, d, e, f)
          : this._overwrite > 1 &&
            this._firstPT &&
            d.length > 1 &&
            ca(b, this, c, this._overwrite, d)
          ? (this._kill(c, b), this._initProps(b, c, d, e, f))
          : (this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration)) &&
              (L[b._gsTweenID] = !0),
            i);
      }),
      (i.render = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = this,
          i = h._time,
          j = h._duration,
          k = h._rawPrevTime;
        if (a >= j - n && a >= 0)
          (h._totalTime = h._time = j),
            (h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1),
            h._reversed ||
              ((d = !0),
              (e = "onComplete"),
              (c = c || h._timeline.autoRemoveChildren)),
            0 === j &&
              (h._initted || !h.vars.lazy || c) &&
              (h._startTime === h._timeline._duration && (a = 0),
              (0 > k ||
                (0 >= a && a >= -n) ||
                (k === n && "isPause" !== h.data)) &&
                k !== a &&
                ((c = !0), k > n && (e = "onReverseComplete")),
              (h._rawPrevTime = g = !b || a || k === a ? a : n));
        else if (n > a)
          (h._totalTime = h._time = 0),
            (h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0),
            (0 !== i || (0 === j && k > 0)) &&
              ((e = "onReverseComplete"), (d = h._reversed)),
            a > -n
              ? (a = 0)
              : 0 > a &&
                ((h._active = !1),
                0 === j &&
                  (h._initted || !h.vars.lazy || c) &&
                  (k >= 0 && (k !== n || "isPause" !== h.data) && (c = !0),
                  (h._rawPrevTime = g = !b || a || k === a ? a : n))),
            (!h._initted || (h._startAt && h._startAt.progress())) && (c = !0);
        else if (((h._totalTime = h._time = a), h._easeType)) {
          var l = a / j,
            m = h._easeType,
            o = h._easePower;
          (1 === m || (3 === m && l >= 0.5)) && (l = 1 - l),
            3 === m && (l *= 2),
            1 === o
              ? (l *= l)
              : 2 === o
              ? (l *= l * l)
              : 3 === o
              ? (l *= l * l * l)
              : 4 === o && (l *= l * l * l * l),
            (h.ratio =
              1 === m ? 1 - l : 2 === m ? l : 0.5 > a / j ? l / 2 : 1 - l / 2);
        } else h.ratio = h._ease.getRatio(a / j);
        if (h._time !== i || c) {
          if (!h._initted) {
            if ((h._init(), !h._initted || h._gc)) return;
            if (
              !c &&
              h._firstPT &&
              ((h.vars.lazy !== !1 && h._duration) ||
                (h.vars.lazy && !h._duration))
            )
              return (
                (h._time = h._totalTime = i),
                (h._rawPrevTime = k),
                K.push(h),
                void (h._lazy = [a, b])
              );
            h._time && !d
              ? (h.ratio = h._ease.getRatio(h._time / j))
              : d &&
                h._ease._calcEnd &&
                (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1));
          }
          for (
            h._lazy !== !1 && (h._lazy = !1),
              h._active ||
                (!h._paused && h._time !== i && a >= 0 && (h._active = !0)),
              0 === i &&
                (h._startAt &&
                  (a >= 0
                    ? h._startAt.render(a, !0, c)
                    : e || (e = "_dummyGS")),
                h.vars.onStart &&
                  (0 !== h._time || 0 === j) &&
                  (b || h._callback("onStart"))),
              f = h._firstPT;
            f;

          )
            f.f
              ? f.t[f.p](f.c * h.ratio + f.s)
              : (f.t[f.p] = f.c * h.ratio + f.s),
              (f = f._next);
          h._onUpdate &&
            (0 > a && h._startAt && a !== -1e-4 && h._startAt.render(a, !0, c),
            b || ((h._time !== i || d || c) && h._callback("onUpdate"))),
            e &&
              (!h._gc || c) &&
              (0 > a &&
                h._startAt &&
                !h._onUpdate &&
                a !== -1e-4 &&
                h._startAt.render(a, !0, c),
              d &&
                (h._timeline.autoRemoveChildren && h._enabled(!1, !1),
                (h._active = !1)),
              !b && h.vars[e] && h._callback(e),
              0 === j &&
                h._rawPrevTime === n &&
                g !== n &&
                (h._rawPrevTime = 0));
        }
      }),
      (i._kill = function (a, b, c) {
        if (
          ("all" === a && (a = null),
          null == a && (null == b || b === this.target))
        )
          return (this._lazy = !1), this._enabled(!1, !1);
        b =
          "string" != typeof b
            ? b || this._targets || this.target
            : H.selector(b) || b;
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m =
            c &&
            this._time &&
            c._startTime === this._startTime &&
            this._timeline === c._timeline,
          n = this._firstPT;
        if ((q(b) || I(b)) && "number" != typeof b[0])
          for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0);
        else {
          if (this._targets) {
            for (d = this._targets.length; --d > -1; )
              if (b === this._targets[d]) {
                (h = this._propLookup[d] || {}),
                  (this._overwrittenProps = this._overwrittenProps || []),
                  (e = this._overwrittenProps[d] =
                    a ? this._overwrittenProps[d] || {} : "all");
                break;
              }
          } else {
            if (b !== this.target) return !1;
            (h = this._propLookup),
              (e = this._overwrittenProps =
                a ? this._overwrittenProps || {} : "all");
          }
          if (h) {
            if (
              ((j = a || h),
              (k =
                a !== e &&
                "all" !== e &&
                a !== h &&
                ("object" != typeof a || !a._tempKill)),
              c && (H.onOverwrite || this.vars.onOverwrite))
            ) {
              for (f in j) h[f] && (l || (l = []), l.push(f));
              if ((l || !a) && !ba(this, c, b, l)) return !1;
            }
            for (f in j)
              (g = h[f]) &&
                (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                g.pg && g.t._kill(j) && (i = !0),
                (g.pg && 0 !== g.t._overwriteProps.length) ||
                  (g._prev
                    ? (g._prev._next = g._next)
                    : g === this._firstPT && (this._firstPT = g._next),
                  g._next && (g._next._prev = g._prev),
                  (g._next = g._prev = null)),
                delete h[f]),
                k && (e[f] = 1);
            !this._firstPT && this._initted && n && this._enabled(!1, !1);
          }
        }
        return i;
      }),
      (i.invalidate = function () {
        this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
        var a = this._time;
        return (
          (this._firstPT =
            this._overwrittenProps =
            this._startAt =
            this._onUpdate =
              null),
          (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
          (this._propLookup = this._targets ? {} : []),
          E.prototype.invalidate.call(this),
          this.vars.immediateRender &&
            ((this._time = -n), this.render(a, !1, this.vars.lazy !== !1)),
          this
        );
      }),
      (i._enabled = function (a, b) {
        if ((k || j.wake(), a && this._gc)) {
          var c,
            d = this._targets;
          if (d)
            for (c = d.length; --c > -1; )
              this._siblings[c] = aa(d[c], this, !0);
          else this._siblings = aa(this.target, this, !0);
        }
        return (
          E.prototype._enabled.call(this, a, b),
          this._notifyPluginsOfEnabled && this._firstPT
            ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
            : !1
        );
      }),
      (H.to = function (a, b, c) {
        return new H(a, b, c);
      }),
      (H.from = function (a, b, c) {
        return (
          (c.runBackwards = !0),
          (c.immediateRender = 0 != c.immediateRender),
          new H(a, b, c)
        );
      }),
      (H.fromTo = function (a, b, c, d) {
        return (
          (d.startAt = c),
          (d.immediateRender =
            0 != d.immediateRender && 0 != c.immediateRender),
          new H(a, b, d)
        );
      }),
      (H.delayedCall = function (a, b, c, d, e) {
        return new H(b, 0, {
          delay: a,
          onComplete: b,
          onCompleteParams: c,
          callbackScope: d,
          onReverseComplete: b,
          onReverseCompleteParams: c,
          immediateRender: !1,
          lazy: !1,
          useFrames: e,
          overwrite: 0,
        });
      }),
      (H.set = function (a, b) {
        return new H(a, 0, b);
      }),
      (H.getTweensOf = function (a, b) {
        if (null == a) return [];
        a = "string" != typeof a ? a : H.selector(a) || a;
        var c, d, e, f;
        if ((q(a) || I(a)) && "number" != typeof a[0]) {
          for (c = a.length, d = []; --c > -1; )
            d = d.concat(H.getTweensOf(a[c], b));
          for (c = d.length; --c > -1; )
            for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1);
        } else if (a._gsTweenID)
          for (d = aa(a).concat(), c = d.length; --c > -1; )
            (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
        return d || [];
      }),
      (H.killTweensOf = H.killDelayedCallsTo =
        function (a, b, c) {
          "object" == typeof b && ((c = b), (b = !1));
          for (var d = H.getTweensOf(a, b), e = d.length; --e > -1; )
            d[e]._kill(c, a);
        });
    var ea = u(
      "plugins.TweenPlugin",
      function (a, b) {
        (this._overwriteProps = (a || "").split(",")),
          (this._propName = this._overwriteProps[0]),
          (this._priority = b || 0),
          (this._super = ea.prototype);
      },
      !0
    );
    if (
      ((i = ea.prototype),
      (ea.version = "1.19.0"),
      (ea.API = 2),
      (i._firstPT = null),
      (i._addTween = R),
      (i.setRatio = O),
      (i._kill = function (a) {
        var b,
          c = this._overwriteProps,
          d = this._firstPT;
        if (null != a[this._propName]) this._overwriteProps = [];
        else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1);
        for (; d; )
          null != a[d.n] &&
            (d._next && (d._next._prev = d._prev),
            d._prev
              ? ((d._prev._next = d._next), (d._prev = null))
              : this._firstPT === d && (this._firstPT = d._next)),
            (d = d._next);
        return !1;
      }),
      (i._mod = i._roundProps =
        function (a) {
          for (var b, c = this._firstPT; c; )
            (b =
              a[this._propName] ||
              (null != c.n && a[c.n.split(this._propName + "_").join("")])),
              b &&
                "function" == typeof b &&
                (2 === c.f ? (c.t._applyPT.m = b) : (c.m = b)),
              (c = c._next);
        }),
      (H._onPluginEvent = function (a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = b._firstPT;
        if ("_onInitAllProps" === a) {
          for (; h; ) {
            for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
            (h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h),
              (h._next = d) ? (d._prev = h) : (f = h),
              (h = g);
          }
          h = b._firstPT = e;
        }
        for (; h; )
          h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
            (h = h._next);
        return c;
      }),
      (ea.activate = function (a) {
        for (var b = a.length; --b > -1; )
          a[b].API === ea.API && (T[new a[b]()._propName] = a[b]);
        return !0;
      }),
      (t.plugin = function (a) {
        if (!(a && a.propName && a.init && a.API))
          throw "illegal plugin definition.";
        var b,
          c = a.propName,
          d = a.priority || 0,
          e = a.overwriteProps,
          f = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps",
          },
          g = u(
            "plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
            function () {
              ea.call(this, c, d), (this._overwriteProps = e || []);
            },
            a.global === !0
          ),
          h = (g.prototype = new ea(c));
        (h.constructor = g), (g.API = a.API);
        for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
        return (g.version = a.version), ea.activate([g]), g;
      }),
      (g = a._gsQueue))
    ) {
      for (h = 0; h < g.length; h++) g[h]();
      for (i in r)
        r[i].func || a.console.log("GSAP encountered missing dependency: " + i);
    }
    k = !1;
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  );

/**
 * velocity-animate (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Velocity = factory());
}(this, (function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  /**
   * Check if a variable is a boolean.
   */
  function isBoolean(variable) {
      return variable === true || variable === false;
  }
  /**
   * Check if a variable is a function.
   */
  function isFunction(variable) {
      return Object.prototype.toString.call(variable) === "[object Function]";
  }
  /**
   * Check if a variable is an HTMLElement or SVGElement.
   */
  function isNode(variable) {
      return !!(variable && variable.nodeType);
  }
  /**
   * Check if a variable is a number.
   */
  function isNumber(variable) {
      return typeof variable === "number";
  }
  /**
   * Check if a variable is a plain object (and not an instance).
   */
  function isPlainObject(variable) {
      if (!variable || (typeof variable === "undefined" ? "undefined" : _typeof(variable)) !== "object" || variable.nodeType || Object.prototype.toString.call(variable) !== "[object Object]") {
          return false;
      }
      var proto = Object.getPrototypeOf(variable);
      return !proto || proto.hasOwnProperty("constructor") && proto.constructor === Object;
  }
  /**
   * Check if a variable is a string.
   */
  function isString(variable) {
      return typeof variable === "string";
  }
  /**
   * Check if a variable is the result of calling Velocity.
   */
  function isVelocityResult(variable) {
      return variable && isNumber(variable.length) && isFunction(variable.velocity);
  }
  /**
   * Check if a variable is an array-like wrapped jQuery, Zepto or similar, where
   * each indexed value is a Node.
   */
  function isWrapped(variable) {
      return variable && variable !== window && isNumber(variable.length) && !isString(variable) && !isFunction(variable) && !isNode(variable) && (variable.length === 0 || isNode(variable[0]));
  }
  /**
   * Check is a property is an enumerable member of an object.
   */
  function propertyIsEnumerable(obj, property) {
      return Object.prototype.propertyIsEnumerable.call(obj, property);
  }

  // Project
  /**
   * Add a single className to an Element.
   */
  function addClass(element, className) {
      if (element instanceof Element) {
          if (element.classList) {
              element.classList.add(className);
          } else {
              removeClass(element, className);
              element.className += (element.className.length ? " " : "") + className;
          }
      }
  }
  /**
   * Clone an array, works for array-like too.
   */
  function cloneArray(arrayLike) {
      return Array.prototype.slice.call(arrayLike, 0);
  }
  /**
   * The <strong><code>defineProperty()</code></strong> function provides a
   * shortcut to defining a property that cannot be accidentally iterated across.
   */
  function defineProperty$1(proto, name, value, readonly) {
      if (proto) {
          Object.defineProperty(proto, name, {
              configurable: !readonly,
              writable: !readonly,
              value: value
          });
      }
  }
  /**
   * When there are multiple locations for a value pass them all in, then get the
   * first value that is valid.
   */
  function getValue() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
          for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var arg = _step.value;

              if (arg !== undefined && arg === arg) {
                  return arg;
              }
          }
      } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
              }
          } finally {
              if (_didIteratorError) {
                  throw _iteratorError;
              }
          }
      }
  }
  /**
   * Shim to get the current milliseconds - on anything except old IE it'll use
   * Date.now() and save creating an object. If that doesn't exist then it'll
   * create one that gets GC.
   */
  var now = Date.now ? Date.now : function () {
      return new Date().getTime();
  };
  /**
   * Remove a single className from an Element.
   */
  function removeClass(element, className) {
      if (element instanceof Element) {
          if (element.classList) {
              element.classList.remove(className);
          } else {
              // TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
              element.className = element.className.replace(new RegExp("(^|\\s)" + className + "(\\s|$)", "gi"), " ");
          }
      }
  }

  // Project
  // Constants
  var Actions = {};
  /**
   * Used to register an action. This should never be called by users
   * directly, instead it should be called via  an action:<br/>
   * <code>Velocity("registerAction", "name", VelocityActionFn);</code>
   */
  function registerAction(args, internal) {
      var name = args[0],
          callback = args[1];
      if (!isString(name)) {
          console.warn("VelocityJS: Trying to set 'registerAction' name to an invalid value:", name);
      } else if (!isFunction(callback)) {
          console.warn("VelocityJS: Trying to set 'registerAction' callback to an invalid value:", name, callback);
      } else if (Actions[name] && !propertyIsEnumerable(Actions, name)) {
          console.warn("VelocityJS: Trying to override internal 'registerAction' callback", name);
      } else if (internal === true) {
          defineProperty$1(Actions, name, callback);
      } else {
          Actions[name] = callback;
      }
  }
  registerAction(["registerAction", registerAction], true);

  /**
   * Without this it will only un-prefix properties that have a valid "normal"
   * version.
   */
  var DURATION_FAST = 200;
  var DURATION_NORMAL = 400;
  var DURATION_SLOW = 600;
  var FUZZY_MS_PER_SECOND = 980;
  var DEFAULT_CACHE = true;
  var DEFAULT_DELAY = 0;
  var DEFAULT_DURATION = DURATION_NORMAL;
  var DEFAULT_EASING = "swing";
  var DEFAULT_FPSLIMIT = 60;
  var DEFAULT_LOOP = 0;
  var DEFAULT_PROMISE = true;
  var DEFAULT_PROMISE_REJECT_EMPTY = true;
  var DEFAULT_QUEUE = "";
  var DEFAULT_REPEAT = 0;
  var DEFAULT_SPEED = 1;
  var DEFAULT_SYNC = true;
  var CLASSNAME = "velocity-animating";
  var Duration = {
    fast: DURATION_FAST,
    normal: DURATION_NORMAL,
    slow: DURATION_SLOW
  };

  // Project
  // Constants
  var Easings = {};
  /**
   * Used to register a easing. This should never be called by users
   * directly, instead it should be called via an action:<br/>
   * <code>Velocity("registerEasing", "name", VelocityEasingFn);</code>
   */
  function registerEasing(args) {
      var name = args[0],
          callback = args[1];
      if (!isString(name)) {
          console.warn("VelocityJS: Trying to set 'registerEasing' name to an invalid value:", name);
      } else if (!isFunction(callback)) {
          console.warn("VelocityJS: Trying to set 'registerEasing' callback to an invalid value:", name, callback);
      } else if (Easings[name]) {
          console.warn("VelocityJS: Trying to override 'registerEasing' callback", name);
      } else {
          Easings[name] = callback;
      }
  }
  registerAction(["registerEasing", registerEasing], true);
  /**
   * Linear easing, used for sequence parts that don't have an actual easing
   * function.
   */
  function linearEasing(percentComplete, startValue, endValue, property) {
      return startValue + percentComplete * (endValue - startValue);
  }
  /**
   * Swing is the default for jQuery and Velocity.
   */
  function swingEasing(percentComplete, startValue, endValue) {
      return startValue + (0.5 - Math.cos(percentComplete * Math.PI) / 2) * (endValue - startValue);
  }
  /**
   * A less exaggerated version of easeInOutElastic.
   */
  function springEasing(percentComplete, startValue, endValue) {
      return startValue + (1 - Math.cos(percentComplete * 4.5 * Math.PI) * Math.exp(-percentComplete * 6)) * (endValue - startValue);
  }
  registerEasing(["linear", linearEasing]);
  registerEasing(["swing", swingEasing]);
  registerEasing(["spring", springEasing]);

  // Project
  /**
   * Fix to a range of <code>0 <= num <= 1</code>.
   */
  function fixRange(num) {
      return Math.min(Math.max(num, 0), 1);
  }
  function A(aA1, aA2) {
      return 1 - 3 * aA2 + 3 * aA1;
  }
  function B(aA1, aA2) {
      return 3 * aA2 - 6 * aA1;
  }
  function C(aA1) {
      return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
      return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
  }
  function generateBezier() {
      var NEWTON_ITERATIONS = 4,
          NEWTON_MIN_SLOPE = 0.001,
          SUBDIVISION_PRECISION = 0.0000001,
          SUBDIVISION_MAX_ITERATIONS = 10,
          kSplineTableSize = 11,
          kSampleStepSize = 1 / (kSplineTableSize - 1),
          float32ArraySupported = "Float32Array" in window;
      /* Must contain four args. */

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
      }

      if (args.length !== 4) {
          return;
      }
      /* Args must be numbers. */
      for (var i = 0; i < 4; ++i) {
          if (typeof args[i] !== "number" || isNaN(args[i]) || !isFinite(args[i])) {
              return;
          }
      }
      /* X values must be in the [0, 1] range. */
      var mX1 = fixRange(args[0]);
      var mY1 = args[1];
      var mX2 = fixRange(args[2]);
      var mY2 = args[3];
      var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      function newtonRaphsonIterate(aX, aGuessT) {
          for (var _i = 0; _i < NEWTON_ITERATIONS; ++_i) {
              var currentSlope = getSlope(aGuessT, mX1, mX2);
              if (currentSlope === 0) {
                  return aGuessT;
              }
              var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
              aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
      }
      function calcSampleValues() {
          for (var _i2 = 0; _i2 < kSplineTableSize; ++_i2) {
              mSampleValues[_i2] = calcBezier(_i2 * kSampleStepSize, mX1, mX2);
          }
      }
      function binarySubdivide(aX, aA, aB) {
          var currentX = void 0,
              currentT = void 0,
              i = 0;
          do {
              currentT = aA + (aB - aA) / 2;
              currentX = calcBezier(currentT, mX1, mX2) - aX;
              if (currentX > 0) {
                  aB = currentT;
              } else {
                  aA = currentT;
              }
          } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
          return currentT;
      }
      function getTForX(aX) {
          var lastSample = kSplineTableSize - 1;
          var intervalStart = 0,
              currentSample = 1;
          for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
              guessForT = intervalStart + dist * kSampleStepSize,
              initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
              return newtonRaphsonIterate(aX, guessForT);
          } else if (initialSlope === 0) {
              return guessForT;
          } else {
              return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
          }
      }
      var precomputed = false;
      function precompute() {
          precomputed = true;
          if (mX1 !== mY1 || mX2 !== mY2) {
              calcSampleValues();
          }
      }
      var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")",
          f = function f(percentComplete, startValue, endValue, property) {
          if (!precomputed) {
              precompute();
          }
          if (percentComplete === 0) {
              return startValue;
          }
          if (percentComplete === 1) {
              return endValue;
          }
          if (mX1 === mY1 && mX2 === mY2) {
              return startValue + percentComplete * (endValue - startValue);
          }
          return startValue + calcBezier(getTForX(percentComplete), mY1, mY2) * (endValue - startValue);
      };
      f.getControlPoints = function () {
          return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }];
      };
      f.toString = function () {
          return str;
      };
      return f;
  }
  /* Common easings */
  var easeIn = generateBezier(0.42, 0, 1, 1),
      easeOut = generateBezier(0, 0, 0.58, 1),
      easeInOut = generateBezier(0.42, 0, 0.58, 1);
  registerEasing(["ease", generateBezier(0.25, 0.1, 0.25, 1)]);
  registerEasing(["easeIn", easeIn]);
  registerEasing(["ease-in", easeIn]);
  registerEasing(["easeOut", easeOut]);
  registerEasing(["ease-out", easeOut]);
  registerEasing(["easeInOut", easeInOut]);
  registerEasing(["ease-in-out", easeInOut]);
  registerEasing(["easeInSine", generateBezier(0.47, 0, 0.745, 0.715)]);
  registerEasing(["easeOutSine", generateBezier(0.39, 0.575, 0.565, 1)]);
  registerEasing(["easeInOutSine", generateBezier(0.445, 0.05, 0.55, 0.95)]);
  registerEasing(["easeInQuad", generateBezier(0.55, 0.085, 0.68, 0.53)]);
  registerEasing(["easeOutQuad", generateBezier(0.25, 0.46, 0.45, 0.94)]);
  registerEasing(["easeInOutQuad", generateBezier(0.455, 0.03, 0.515, 0.955)]);
  registerEasing(["easeInCubic", generateBezier(0.55, 0.055, 0.675, 0.19)]);
  registerEasing(["easeOutCubic", generateBezier(0.215, 0.61, 0.355, 1)]);
  registerEasing(["easeInOutCubic", generateBezier(0.645, 0.045, 0.355, 1)]);
  registerEasing(["easeInQuart", generateBezier(0.895, 0.03, 0.685, 0.22)]);
  registerEasing(["easeOutQuart", generateBezier(0.165, 0.84, 0.44, 1)]);
  registerEasing(["easeInOutQuart", generateBezier(0.77, 0, 0.175, 1)]);
  registerEasing(["easeInQuint", generateBezier(0.755, 0.05, 0.855, 0.06)]);
  registerEasing(["easeOutQuint", generateBezier(0.23, 1, 0.32, 1)]);
  registerEasing(["easeInOutQuint", generateBezier(0.86, 0, 0.07, 1)]);
  registerEasing(["easeInExpo", generateBezier(0.95, 0.05, 0.795, 0.035)]);
  registerEasing(["easeOutExpo", generateBezier(0.19, 1, 0.22, 1)]);
  registerEasing(["easeInOutExpo", generateBezier(1, 0, 0, 1)]);
  registerEasing(["easeInCirc", generateBezier(0.6, 0.04, 0.98, 0.335)]);
  registerEasing(["easeOutCirc", generateBezier(0.075, 0.82, 0.165, 1)]);
  registerEasing(["easeInOutCirc", generateBezier(0.785, 0.135, 0.15, 0.86)]);

  /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
  /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
   then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
  function springAccelerationForState(state) {
      return -state.tension * state.x - state.friction * state.v;
  }
  function springEvaluateStateWithDerivative(initialState, dt, derivative) {
      var state = {
          x: initialState.x + derivative.dx * dt,
          v: initialState.v + derivative.dv * dt,
          tension: initialState.tension,
          friction: initialState.friction
      };
      return {
          dx: state.v,
          dv: springAccelerationForState(state)
      };
  }
  function springIntegrateState(state, dt) {
      var a = {
          dx: state.v,
          dv: springAccelerationForState(state)
      },
          b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
          c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
          d = springEvaluateStateWithDerivative(state, dt, c),
          dxdt = 1 / 6 * (a.dx + 2 * (b.dx + c.dx) + d.dx),
          dvdt = 1 / 6 * (a.dv + 2 * (b.dv + c.dv) + d.dv);
      state.x = state.x + dxdt * dt;
      state.v = state.v + dvdt * dt;
      return state;
  }
  function generateSpringRK4(tension, friction, duration) {
      var initState = {
          x: -1,
          v: 0,
          tension: parseFloat(tension) || 500,
          friction: parseFloat(friction) || 20
      },
          path = [0],
          tolerance = 1 / 10000,
          DT = 16 / 1000,
          haveDuration = duration != null; // deliberate "==", as undefined == null != 0
      var timeLapsed = 0,
          dt = void 0,
          lastState = void 0;
      /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
      if (haveDuration) {
          /* Run the simulation without a duration. */
          timeLapsed = generateSpringRK4(initState.tension, initState.friction);
          /* Compute the adjusted time delta. */
          dt = timeLapsed / duration * DT;
      } else {
          dt = DT;
      }
      while (true) {
          /* Next/step function .*/
          lastState = springIntegrateState(lastState || initState, dt);
          /* Store the position. */
          path.push(1 + lastState.x);
          timeLapsed += 16;
          /* If the change threshold is reached, break. */
          if (!(Math.abs(lastState.x) > tolerance && Math.abs(lastState.v) > tolerance)) {
              break;
          }
      }
      /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
       computed path and returns a snapshot of the position according to a given percentComplete. */
      return !haveDuration ? timeLapsed : function (percentComplete, startValue, endValue) {
          if (percentComplete === 0) {
              return startValue;
          }
          if (percentComplete === 1) {
              return endValue;
          }
          return startValue + path[Math.floor(percentComplete * (path.length - 1))] * (endValue - startValue);
      };
  }

  // Constants
  var cache = {};
  function generateStep(steps) {
      var fn = cache[steps];
      if (fn) {
          return fn;
      }
      return cache[steps] = function (percentComplete, startValue, endValue) {
          if (percentComplete === 0) {
              return startValue;
          }
          if (percentComplete === 1) {
              return endValue;
          }
          return startValue + Math.round(percentComplete * steps) * (1 / steps) * (endValue - startValue);
      };
  }

  // Project
  /**
   * Parse a duration value and return an ms number. Optionally return a
   * default value if the number is not valid.
   */
  function parseDuration(duration, def) {
      if (isNumber(duration)) {
          return duration;
      }
      if (isString(duration)) {
          return Duration[duration.toLowerCase()] || parseFloat(duration.replace("ms", "").replace("s", "000"));
      }
      return def == null ? undefined : parseDuration(def);
  }
  /**
   * Validate a <code>cache</code> option.
   */
  function validateCache(value) {
      if (isBoolean(value)) {
          return value;
      }
      if (value != null) {
          console.warn("VelocityJS: Trying to set 'cache' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>begin</code> option.
   */
  function validateBegin(value) {
      if (isFunction(value)) {
          return value;
      }
      if (value != null) {
          console.warn("VelocityJS: Trying to set 'begin' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>complete</code> option.
   */
  function validateComplete(value, noError) {
      if (isFunction(value)) {
          return value;
      }
      if (value != null && !noError) {
          console.warn("VelocityJS: Trying to set 'complete' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>delay</code> option.
   */
  function validateDelay(value) {
      var parsed = parseDuration(value);
      if (!isNaN(parsed)) {
          return parsed;
      }
      if (value != null) {
          console.error("VelocityJS: Trying to set 'delay' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>duration</code> option.
   */
  function validateDuration(value, noError) {
      var parsed = parseDuration(value);
      if (!isNaN(parsed) && parsed >= 0) {
          return parsed;
      }
      if (value != null && !noError) {
          console.error("VelocityJS: Trying to set 'duration' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>easing</code> option.
   */
  function validateEasing(value, duration, noError) {
      if (isString(value)) {
          // Named easing
          return Easings[value];
      }
      if (isFunction(value)) {
          return value;
      }
      // TODO: We should only do these if the correct function exists - don't force loading.
      if (Array.isArray(value)) {
          if (value.length === 1) {
              // Steps
              return generateStep(value[0]);
          }
          if (value.length === 2) {
              // springRK4 must be passed the animation's duration.
              // Note: If the springRK4 array contains non-numbers,
              // generateSpringRK4() returns an easing function generated with
              // default tension and friction values.
              return generateSpringRK4(value[0], value[1], duration);
          }
          if (value.length === 4) {
              // Note: If the bezier array contains non-numbers, generateBezier()
              // returns undefined.
              return generateBezier.apply(null, value) || false;
          }
      }
      if (value != null && !noError) {
          console.error("VelocityJS: Trying to set 'easing' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>fpsLimit</code> option.
   */
  function validateFpsLimit(value) {
      if (value === false) {
          return 0;
      } else {
          var parsed = parseInt(value, 10);
          if (!isNaN(parsed) && parsed >= 0) {
              return Math.min(parsed, 60);
          }
      }
      if (value != null) {
          console.warn("VelocityJS: Trying to set 'fpsLimit' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>loop</code> option.
   */
  function validateLoop(value) {
      switch (value) {
          case false:
              return 0;
          case true:
              return true;
          default:
              var parsed = parseInt(value, 10);
              if (!isNaN(parsed) && parsed >= 0) {
                  return parsed;
              }
              break;
      }
      if (value != null) {
          console.warn("VelocityJS: Trying to set 'loop' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>progress</code> option.
   */
  function validateProgress(value) {
      if (isFunction(value)) {
          return value;
      }
      if (value != null) {
          console.warn("VelocityJS: Trying to set 'progress' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>promise</code> option.
   */
  function validatePromise(value) {
      if (isBoolean(value)) {
          return value;
      }
      if (value != null) {
          console.warn("VelocityJS: Trying to set 'promise' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>promiseRejectEmpty</code> option.
   */
  function validatePromiseRejectEmpty(value) {
      if (isBoolean(value)) {
          return value;
      }
      if (value != null) {
          console.warn("VelocityJS: Trying to set 'promiseRejectEmpty' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>queue</code> option.
   */
  function validateQueue(value, noError) {
      if (value === false || isString(value)) {
          return value;
      }
      if (value != null && !noError) {
          console.warn("VelocityJS: Trying to set 'queue' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>repeat</code> option.
   */
  function validateRepeat(value) {
      switch (value) {
          case false:
              return 0;
          case true:
              return true;
          default:
              var parsed = parseInt(value, 10);
              if (!isNaN(parsed) && parsed >= 0) {
                  return parsed;
              }
              break;
      }
      if (value != null) {
          console.warn("VelocityJS: Trying to set 'repeat' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>speed</code> option.
   */
  function validateSpeed(value) {
      if (isNumber(value)) {
          return value;
      }
      if (value != null) {
          console.error("VelocityJS: Trying to set 'speed' to an invalid value:", value);
      }
  }
  /**
   * Validate a <code>sync</code> option.
   */
  function validateSync(value) {
      if (isBoolean(value)) {
          return value;
      }
      if (value != null) {
          console.error("VelocityJS: Trying to set 'sync' to an invalid value:", value);
      }
  }

  // Project
  // NOTE: Add the variable here, then add the default state in "reset" below.
  var cache$1 = void 0,
      begin = void 0,
      complete = void 0,
      delay = void 0,
      duration = void 0,
      easing = void 0,
      fpsLimit = void 0,
      loop = void 0,
      mobileHA = void 0,
      minFrameTime = void 0,
      promise = void 0,
      promiseRejectEmpty = void 0,
      queue = void 0,
      repeat = void 0,
      speed = void 0,
      sync = void 0;
  var defaults$1 = function () {
      function defaults$$1() {
          classCallCheck(this, defaults$$1);
      }

      createClass(defaults$$1, null, [{
          key: "reset",
          value: function reset() {
              cache$1 = DEFAULT_CACHE;
              begin = undefined;
              complete = undefined;
              delay = DEFAULT_DELAY;
              duration = DEFAULT_DURATION;
              easing = validateEasing(DEFAULT_EASING, DEFAULT_DURATION);
              fpsLimit = DEFAULT_FPSLIMIT;
              loop = DEFAULT_LOOP;
              minFrameTime = FUZZY_MS_PER_SECOND / DEFAULT_FPSLIMIT;
              promise = DEFAULT_PROMISE;
              promiseRejectEmpty = DEFAULT_PROMISE_REJECT_EMPTY;
              queue = DEFAULT_QUEUE;
              repeat = DEFAULT_REPEAT;
              speed = DEFAULT_SPEED;
              sync = DEFAULT_SYNC;
          }
      }, {
          key: "cache",
          get: function get$$1() {
              return cache$1;
          },
          set: function set$$1(value) {
              value = validateCache(value);
              if (value !== undefined) {
                  cache$1 = value;
              }
          }
      }, {
          key: "begin",
          get: function get$$1() {
              return begin;
          },
          set: function set$$1(value) {
              value = validateBegin(value);
              if (value !== undefined) {
                  begin = value;
              }
          }
      }, {
          key: "complete",
          get: function get$$1() {
              return complete;
          },
          set: function set$$1(value) {
              value = validateComplete(value);
              if (value !== undefined) {
                  complete = value;
              }
          }
      }, {
          key: "delay",
          get: function get$$1() {
              return delay;
          },
          set: function set$$1(value) {
              value = validateDelay(value);
              if (value !== undefined) {
                  delay = value;
              }
          }
      }, {
          key: "duration",
          get: function get$$1() {
              return duration;
          },
          set: function set$$1(value) {
              value = validateDuration(value);
              if (value !== undefined) {
                  duration = value;
              }
          }
      }, {
          key: "easing",
          get: function get$$1() {
              return easing;
          },
          set: function set$$1(value) {
              value = validateEasing(value, duration);
              if (value !== undefined) {
                  easing = value;
              }
          }
      }, {
          key: "fpsLimit",
          get: function get$$1() {
              return fpsLimit;
          },
          set: function set$$1(value) {
              value = validateFpsLimit(value);
              if (value !== undefined) {
                  fpsLimit = value;
                  minFrameTime = FUZZY_MS_PER_SECOND / value;
              }
          }
      }, {
          key: "loop",
          get: function get$$1() {
              return loop;
          },
          set: function set$$1(value) {
              value = validateLoop(value);
              if (value !== undefined) {
                  loop = value;
              }
          }
      }, {
          key: "mobileHA",
          get: function get$$1() {
              return mobileHA;
          },
          set: function set$$1(value) {
              if (isBoolean(value)) {
                  mobileHA = value;
              }
          }
      }, {
          key: "minFrameTime",
          get: function get$$1() {
              return minFrameTime;
          }
      }, {
          key: "promise",
          get: function get$$1() {
              return promise;
          },
          set: function set$$1(value) {
              value = validatePromise(value);
              if (value !== undefined) {
                  promise = value;
              }
          }
      }, {
          key: "promiseRejectEmpty",
          get: function get$$1() {
              return promiseRejectEmpty;
          },
          set: function set$$1(value) {
              value = validatePromiseRejectEmpty(value);
              if (value !== undefined) {
                  promiseRejectEmpty = value;
              }
          }
      }, {
          key: "queue",
          get: function get$$1() {
              return queue;
          },
          set: function set$$1(value) {
              value = validateQueue(value);
              if (value !== undefined) {
                  queue = value;
              }
          }
      }, {
          key: "repeat",
          get: function get$$1() {
              return repeat;
          },
          set: function set$$1(value) {
              value = validateRepeat(value);
              if (value !== undefined) {
                  repeat = value;
              }
          }
      }, {
          key: "repeatAgain",
          get: function get$$1() {
              return repeat;
          }
      }, {
          key: "speed",
          get: function get$$1() {
              return speed;
          },
          set: function set$$1(value) {
              value = validateSpeed(value);
              if (value !== undefined) {
                  speed = value;
              }
          }
      }, {
          key: "sync",
          get: function get$$1() {
              return sync;
          },
          set: function set$$1(value) {
              value = validateSync(value);
              if (value !== undefined) {
                  sync = value;
              }
          }
      }]);
      return defaults$$1;
  }();
  Object.freeze(defaults$1);
  // Reset to our default values, currently everything is undefined.
  defaults$1.reset();

  /**
   * The highest type index for finding the best normalization for a property.
   */
  /**
   * Unlike "actions", normalizations can always be replaced by users.
   */
  var Normalizations = [];
  /**
   * Store a cross-reference to units to be added to specific normalization
   * functions if the user supplies a unit-less number.
   *
   * This is pretty much confined to adding "px" to several css properties.
   */
  var NormalizationUnits = {};
  /**
   * Any normalisations that should never be cached are listed here.
   * Faster than an array - https://jsperf.com/array-includes-and-find-methods-vs-set-has
   */
  var NoCacheNormalizations = new Set();
  /**
   * An array of classes used for the per-class normalizations. This
   * translates into a bitwise enum for quick cross-reference, and so that
   * the element doesn't need multiple <code>instanceof</code> calls every
   * frame.
   */
  var constructors = [];
  /**
   * A cache of the various constructors we've found and mapping to their real
   * name - saves expensive lookups.
   */
  var constructorCache = new Map();

  // Project
  // Constants
  var dataName = "velocityData";
  /**
   * Get (and create) the internal data store for an element.
   */
  function Data(element) {
      // Use a string member so Uglify doesn't mangle it.
      var data = element[dataName];
      if (data) {
          return data;
      }
      var window = element.ownerDocument.defaultView;
      var types = 0;
      for (var index = 0; index < constructors.length; index++) {
          var _constructor = constructors[index];
          if (isString(_constructor)) {
              if (element instanceof window[_constructor]) {
                  types |= 1 << index; // tslint:disable-line:no-bitwise
              }
          } else if (element instanceof _constructor) {
              types |= 1 << index; // tslint:disable-line:no-bitwise
          }
      }
      // Use an intermediate object so it errors on incorrect data.
      var newData = {
          types: types,
          count: 0,
          computedStyle: null,
          cache: {},
          queueList: {},
          lastAnimationList: {},
          lastFinishList: {},
          window: window
      };
      Object.defineProperty(element, dataName, {
          value: newData
      });
      return newData;
  }

  // Constants
  var isClient = window && window === window.window,
      windowScrollAnchor = isClient && window.pageYOffset !== undefined;
  var State = {
      isClient: isClient,
      isMobile: isClient && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      isGingerbread: isClient && /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
      prefixElement: isClient && document.createElement("div"),
      windowScrollAnchor: windowScrollAnchor,
      scrollAnchor: windowScrollAnchor ? window : !isClient || document.documentElement || document.body.parentNode || document.body,
      scrollPropertyLeft: windowScrollAnchor ? "pageXOffset" : "scrollLeft",
      scrollPropertyTop: windowScrollAnchor ? "pageYOffset" : "scrollTop",
      className: CLASSNAME,
      isTicking: false,
      first: undefined,
      last: undefined,
      firstNew: undefined
  };

  // Project
  /**
   * Simple queue management. Un-named queue is directly within the element data,
   * named queue is within an object within it.
   */
  function animate(animation) {
      var prev = State.last;
      animation._prev = prev;
      animation._next = undefined;
      if (prev) {
          prev._next = animation;
      } else {
          State.first = animation;
      }
      State.last = animation;
      if (!State.firstNew) {
          State.firstNew = animation;
      }
      var element = animation.element,
          data = Data(element);
      if (!data.count++) {
          ////////////////////////
          // Feature: Classname //
          ////////////////////////
          addClass(element, State.className);
      }
  }
  /**
   * Add an item to an animation queue.
   */
  function queue$1(element, animation, queueName) {
      var data = Data(element);
      if (queueName !== false) {
          // Store the last animation added so we can use it for the
          // beginning of the next one.
          data.lastAnimationList[queueName] = animation;
      }
      if (queueName === false) {
          animate(animation);
      } else {
          if (!isString(queueName)) {
              queueName = "";
          }
          var last = data.queueList[queueName];
          if (!last) {
              if (last === null) {
                  data.queueList[queueName] = animation;
              } else {
                  data.queueList[queueName] = null;
                  animate(animation);
              }
          } else {
              while (last._next) {
                  last = last._next;
              }
              last._next = animation;
              animation._prev = last;
          }
      }
  }
  /**
   * Start the next animation on this element's queue (named or default).
   *
   * @returns the next animation that is starting.
   */
  function dequeue(element, queueName, skip) {
      if (queueName !== false) {
          if (!isString(queueName)) {
              queueName = "";
          }
          var data = Data(element),
              animation = data.queueList[queueName];
          if (animation) {
              data.queueList[queueName] = animation._next || null;
              if (!skip) {
                  animate(animation);
              }
          } else if (animation === null) {
              delete data.queueList[queueName];
          }
          return animation;
      }
  }
  /**
   * Remove an animation from the active animation list. If it has a queue set
   * then remember it as the last animation for that queue, and free the one
   * that was previously there. If the animation list is completely empty then
   * mark us as finished.
   */
  function freeAnimationCall(animation) {
      var next = animation._next,
          prev = animation._prev,
          queueName = animation.queue == null ? animation.options.queue : animation.queue;
      if (State.firstNew === animation) {
          State.firstNew = next;
      }
      if (State.first === animation) {
          State.first = next;
      } else if (prev) {
          prev._next = next;
      }
      if (State.last === animation) {
          State.last = prev;
      } else if (next) {
          next._prev = prev;
      }
      if (queueName) {
          var data = Data(animation.element);
          if (data) {
              animation._next = animation._prev = undefined;
          }
      }
  }

  var SequencesObject = {};

  // Project
  /**
   * Call the complete method of an animation in a separate function so it can
   * benefit from JIT compiling while still having a try/catch block.
   */
  function callComplete(activeCall) {
      var callback = activeCall.complete || activeCall.options.complete;
      if (callback) {
          try {
              var elements = activeCall.elements;
              callback.call(elements, elements, activeCall);
          } catch (error) {
              setTimeout(function () {
                  throw error;
              }, 1);
          }
      }
  }
  /**
   * Complete an animation. This might involve restarting (for loop or repeat
   * options). Once it is finished we also check for any callbacks or Promises
   * that need updating.
   */
  function completeCall(activeCall) {
      // TODO: Check if it's not been completed already
      var options = activeCall.options,
          queue = getValue(activeCall.queue, options.queue),
          isLoop = getValue(activeCall.loop, options.loop, defaults$1.loop),
          isRepeat = getValue(activeCall.repeat, options.repeat, defaults$1.repeat),
          isStopped = activeCall._flags & 8 /* STOPPED */; // tslint:disable-line:no-bitwise
      if (!isStopped && (isLoop || isRepeat)) {
          ////////////////////
          // Option: Loop   //
          // Option: Repeat //
          ////////////////////
          if (isRepeat && isRepeat !== true) {
              activeCall.repeat = isRepeat - 1;
          } else if (isLoop && isLoop !== true) {
              activeCall.loop = isLoop - 1;
              activeCall.repeat = getValue(activeCall.repeatAgain, options.repeatAgain, defaults$1.repeatAgain);
          }
          if (isLoop) {
              activeCall._flags ^= 64 /* REVERSE */; // tslint:disable-line:no-bitwise
          }
          if (queue !== false) {
              // Can't be called when stopped so no need for an extra check.
              Data(activeCall.element).lastFinishList[queue] = activeCall.timeStart + getValue(activeCall.duration, options.duration, defaults$1.duration);
          }
          activeCall.timeStart = activeCall.ellapsedTime = activeCall.percentComplete = 0;
          activeCall._flags &= ~4 /* STARTED */; // tslint:disable-line:no-bitwise
      } else {
          var element = activeCall.element,
              data = Data(element);
          if (! --data.count && !isStopped) {
              ////////////////////////
              // Feature: Classname //
              ////////////////////////
              removeClass(element, State.className);
          }
          //////////////////////
          // Option: Complete //
          //////////////////////
          // If this is the last animation in this list then we can check for
          // and complete calls or Promises.
          // TODO: When deleting an element we need to adjust these values.
          if (options && ++options._completed === options._total) {
              if (!isStopped && options.complete) {
                  // We don't call the complete if the animation is stopped,
                  // and we clear the key to prevent it being called again.
                  callComplete(activeCall);
                  options.complete = null;
              }
              var resolver = options._resolver;
              if (resolver) {
                  // Fulfil the Promise
                  resolver(activeCall.elements);
                  delete options._resolver;
              }
          }
          ///////////////////
          // Option: Queue //
          ///////////////////
          if (queue !== false) {
              // We only do clever things with queues...
              if (!isStopped) {
                  // If we're not stopping an animation, we need to remember
                  // what time it finished so that the next animation in
                  // sequence gets the correct start time.
                  data.lastFinishList[queue] = activeCall.timeStart + getValue(activeCall.duration, options.duration, defaults$1.duration);
              }
              // Start the next animation in sequence, or delete the queue if
              // this was the last one.
              dequeue(element, queue);
          }
          // Cleanup any pointers, and remember the last animation etc.
          freeAnimationCall(activeCall);
      }
  }

  // Project
  /**
   * Used to register a normalization. This should never be called by users
   * directly, instead it should be called via an action:<br/>
   * <code>Velocity("registerNormalization", "Element", "name", VelocityNormalizationsFn[, false]);</code>
   *
   * The second argument is the class of the animatable object. If this is passed
   * as a class name (ie, `"Element"` -> `window["Element"]`) then this will work
   * cross-iframe. If passed as an actual class (ie `Element`) then it will
   * attempt to find the class on the window and use that name instead. If it
   * can't find it then it will use the class passed, which allows for custom
   * animation targets, but will not work cross-iframe boundary.
   *
   * The fourth argument can be an explicit <code>false</code>, which prevents
   * the property from being cached. Please note that this can be dangerous
   * for performance!
   */
  function registerNormalization(args) {
      var constructor = args[0],
          name = args[1],
          callback = args[2];
      if (isString(constructor) && !(window[constructor] instanceof Object) || !isString(constructor) && !(constructor instanceof Object)) {
          console.warn("VelocityJS: Trying to set 'registerNormalization' constructor to an invalid value:", constructor);
      } else if (!isString(name)) {
          console.warn("VelocityJS: Trying to set 'registerNormalization' name to an invalid value:", name);
      } else if (!isFunction(callback)) {
          console.warn("VelocityJS: Trying to set 'registerNormalization' callback to an invalid value:", name, callback);
      } else {
          var index = constructors.indexOf(constructor),
              nextArg = 3;
          if (index < 0 && !isString(constructor)) {
              if (constructorCache.has(constructor)) {
                  index = constructors.indexOf(constructorCache.get(constructor));
              } else {
                  for (var property in window) {
                      if (window[property] === constructor) {
                          index = constructors.indexOf(property);
                          if (index < 0) {
                              index = constructors.push(property) - 1;
                              Normalizations[index] = {};
                              constructorCache.set(constructor, property);
                          }
                          break;
                      }
                  }
              }
          }
          if (index < 0) {
              index = constructors.push(constructor) - 1;
              Normalizations[index] = {};
          }
          Normalizations[index][name] = callback;
          if (isString(args[nextArg])) {
              var unit = args[nextArg++];
              var units = NormalizationUnits[unit];
              if (!units) {
                  units = NormalizationUnits[unit] = [];
              }
              units.push(callback);
          }
          if (args[nextArg] === false) {
              NoCacheNormalizations.add(name);
          }
      }
  }
  /**
   * Used to check if a normalisation exists on a specific class.
   */
  function hasNormalization(args) {
      var constructor = args[0],
          name = args[1];
      var index = constructors.indexOf(constructor);
      if (index < 0 && !isString(constructor)) {
          if (constructorCache.has(constructor)) {
              index = constructors.indexOf(constructorCache.get(constructor));
          } else {
              for (var property in window) {
                  if (window[property] === constructor) {
                      index = constructors.indexOf(property);
                      break;
                  }
              }
          }
      }
      return index >= 0 && Normalizations[index].hasOwnProperty(name);
  }
  /**
   * Get the unit to add to a unitless number based on the normalization used.
   */
  function getNormalizationUnit(fn) {
      for (var unit in NormalizationUnits) {
          if (NormalizationUnits[unit].includes(fn)) {
              return unit;
          }
      }
      return "";
  }
  /**
   * Get the normalization for an element and propertyName combination. This
   * value should be cached at asking time, as it may change if the user adds
   * more normalizations.
   */
  function getNormalization(element, propertyName) {
      var data = Data(element);
      var fn = void 0;
      for (var index = constructors.length - 1, types = data.types; !fn && index >= 0; index--) {
          if (types & 1 << index) {
              // tslint:disable-line:no-bitwise
              fn = Normalizations[index][propertyName];
          }
      }
      return fn;
  }
  registerAction(["registerNormalization", registerNormalization]);
  registerAction(["hasNormalization", hasNormalization]);

  // Project
  /**
   * The singular setPropertyValue, which routes the logic for all
   * normalizations.
   */
  function setPropertyValue(element, propertyName, propertyValue, fn) {
      var noCache = NoCacheNormalizations.has(propertyName),
          data = !noCache && Data(element);
      if (noCache || data && data.cache[propertyName] !== propertyValue) {
          // By setting it to undefined we force a true "get" later
          if (!noCache) {
              data.cache[propertyName] = propertyValue || undefined;
          }
          fn = fn || getNormalization(element, propertyName);
          if (fn) {
              fn(element, propertyValue);
          }
          if (Velocity$$1.debug >= 2) {
              console.info("Set \"" + propertyName + "\": \"" + propertyValue + "\"", element);
          }
      }
  }

  /**
   * Remove nested `calc(0px + *)` or `calc(* + (0px + *))` correctly.
   */
  function removeNestedCalc(value) {
      if (value.indexOf("calc(") >= 0) {
          var tokens = value.split(/([\(\)])/);
          var depth = 0;
          for (var i = 0; i < tokens.length; i++) {
              var token = tokens[i];
              switch (token) {
                  case "(":
                      depth++;
                      break;
                  case ")":
                      depth--;
                      break;
                  default:
                      if (depth && token[0] === "0") {
                          tokens[i] = token.replace(/^0[a-z%]+ \+ /, "");
                      }
                      break;
              }
          }
          return tokens.join("").replace(/(?:calc)?\(([0-9\.]+[a-z%]+)\)/g, "$1");
      }
      return value;
  }

  /**
   * Cache every camelCase match to avoid repeating lookups.
   */
  var cache$2 = {};
  /**
   * Camelcase a property name into its JavaScript notation (e.g.
   * "background-color" ==> "backgroundColor"). Camelcasing is used to
   * normalize property names between and across calls.
   */
  function camelCase(property) {
    var fixed = cache$2[property];
    if (fixed) {
      return fixed;
    }
    return cache$2[property] = property.replace(/-([a-z])/g, function ($, letter) {
      return letter.toUpperCase();
    });
  }

  // Constants
  var rxColor6 = /#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi,
      rxColor3 = /#([a-f\d])([a-f\d])([a-f\d])/gi,
      rxColorName = /(rgba?\(\s*)?(\b[a-z]+\b)/g,
      rxRGB = /rgb(a?)\(([^\)]+)\)/gi,
      rxSpaces = /\s+/g;
  /**
   * This is the list of color names -> rgb values. The object is in here so
   * that the actual name conversion can be in a separate file and not
   * included for custom builds.
   */
  var ColorNames = {};
  /**
   * Convert a hex list to an rgba value. Designed to be used in replace.
   */
  function makeRGBA(ignore, r, g, b) {
      return "rgba(" + parseInt(r, 16) + "," + parseInt(g, 16) + "," + parseInt(b, 16) + ",1)";
  }
  /**
   * Replace any css colour name with its rgba() value. It is possible to use
   * the name within an "rgba(blue, 0.4)" string this way.
   */
  function fixColors(str) {
      return str.replace(rxColor6, makeRGBA).replace(rxColor3, function ($0, r, g, b) {
          return makeRGBA($0, r + r, g + g, b + b);
      }).replace(rxColorName, function ($0, $1, $2) {
          if (ColorNames[$2]) {
              return ($1 ? $1 : "rgba(") + ColorNames[$2] + ($1 ? "" : ",1)");
          }
          return $0;
      }).replace(rxRGB, function ($0, $1, $2) {
          return "rgba(" + ($2.replace(rxSpaces, "") + ($1 ? "" : ",1")) + ")";
      });
  }

  // Project
  /**
   * Figure out the dimensions for this width / height based on the
   * potential borders and whether we care about them.
   */
  function augmentDimension(element, name, wantInner) {
      var isBorderBox = getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";
      if (isBorderBox === wantInner) {
          // in box-sizing mode, the CSS width / height accessors already
          // give the outerWidth / outerHeight.
          var sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
              fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];
          var augment = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
              for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var field = _step.value;

                  var value = parseFloat(getPropertyValue(element, field));
                  if (!isNaN(value)) {
                      augment += value;
                  }
              }
          } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                  }
              } finally {
                  if (_didIteratorError) {
                      throw _iteratorError;
                  }
              }
          }

          return wantInner ? -augment : augment;
      }
      return 0;
  }

  // Project
  /**
   * Get the width or height of an element, pulled out as it can be used when the
   * in two locations so don't want to repeat it.
   */
  function getWidthHeight(element, property) {
      return element.getBoundingClientRect()[property] + augmentDimension(element, property, true) + "px";
  }
  // TODO: This is still a complete mess
  function computePropertyValue(element, property) {
      var data = Data(element),

      // If computedStyle is cached, use it. If not then get the correct one
      // for the element to support cross-iframe boundaries.
      computedStyle = data.computedStyle ? data.computedStyle : data.window.getComputedStyle(element, null);
      var computedValue = 0;
      if (!data.computedStyle) {
          data.computedStyle = computedStyle;
      }
      if (computedStyle["display"] === "none") {
          switch (property) {
              case "width":
              case "height":
                  // Browsers do not return height and width values for elements
                  // that are set to display:"none". Thus, we temporarily toggle
                  // display to the element type's default value.
                  setPropertyValue(element, "display", "auto");
                  computedValue = getWidthHeight(element, property);
                  setPropertyValue(element, "display", "none");
                  return String(computedValue);
          }
      }
      /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
      /* TODO: There is a borderColor normalisation in legacy/ - figure out where this is needed... */
      computedValue = computedStyle[property];
      /* Fall back to the property's style value (if defined) when computedValue returns nothing,
       which can happen when the element hasn't been painted. */
      if (!computedValue) {
          computedValue = element.style[property];
      }
      /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
       defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
       effect as being set to 0, so no conversion is necessary.) */
      /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
       property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
       to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
      if (computedValue === "auto") {
          switch (property) {
              case "width":
              case "height":
                  computedValue = getWidthHeight(element, property);
                  break;
              case "top":
              case "left":

              case "right":
              case "bottom":
                  var position = getPropertyValue(element, "position");
                  if (position === "fixed" || position === "absolute") {
                      // Note: this has no pixel unit on its returned values,
                      // we re-add it here to conform with
                      // computePropertyValue's behavior.
                      computedValue = element.getBoundingClientRect[property] + "px";
                      break;
                  }
              // Deliberate fallthrough!
              default:
                  computedValue = "0px";
                  break;
          }
      }
      return computedValue ? String(computedValue) : "";
  }
  /**
   * Get a property value. This will grab via the cache if it exists, then
   * via any normalisations.
   */
  function getPropertyValue(element, propertyName, fn, skipCache) {
      var data = Data(element);
      var propertyValue = void 0;
      if (NoCacheNormalizations.has(propertyName)) {
          skipCache = true;
      }
      if (!skipCache && data && data.cache[propertyName] != null) {
          propertyValue = data.cache[propertyName];
      } else {
          fn = fn || getNormalization(element, propertyName);
          if (fn) {
              propertyValue = fn(element);
              if (data) {
                  data.cache[propertyName] = propertyValue;
              }
          }
      }
      if (Velocity$$1.debug >= 2) {
          console.info("Get \"" + propertyName + "\": \"" + propertyValue + "\"", element);
      }
      return propertyValue;
  }

  // Project
  // Constants
  var rxHex = /^#([A-f\d]{3}){1,2}$/i,
      commands = {
      function: function _function(value, element, elements, elementArrayIndex, propertyName, tween) {
          return value.call(element, elementArrayIndex, elements.length, propertyName);
      },
      number: function number(value, element, elements, elementArrayIndex, propertyName, tween) {
          return String(value) + getNormalizationUnit(tween.fn);
      },
      string: function string(value, element, elements, elementArrayIndex, propertyName, tween) {
          return fixColors(value);
      },
      undefined: function undefined(value, element, elements, elementArrayIndex, propertyName, tween) {
          return fixColors(getPropertyValue(element, propertyName, tween.fn) || "");
      }
  };
  /**
   * Expand a VelocityProperty argument into a valid sparse Tween array. This
   * pre-allocates the array as it is then the correct size and slightly
   * faster to access.
   */
  function expandProperties(animation, properties) {
      var tweens = animation.tweens = Object.create(null),
          elements = animation.elements,
          element = animation.element,
          elementArrayIndex = elements.indexOf(element),
          data = Data(element),
          queue = getValue(animation.queue, animation.options.queue),
          duration = getValue(animation.options.duration, defaults$1.duration);
      for (var property in properties) {
          if (properties.hasOwnProperty(property)) {
              var propertyName = camelCase(property),
                  fn = getNormalization(element, propertyName);
              var valueData = properties[property];
              if (!fn && propertyName !== "tween") {
                  if (Velocity$$1.debug) {
                      console.log("Skipping \"" + property + "\" due to a lack of browser support.");
                  }
                  continue;
              }
              if (valueData == null) {
                  if (Velocity$$1.debug) {
                      console.log("Skipping \"" + property + "\" due to no value supplied.");
                  }
                  continue;
              }
              var tween = tweens[propertyName] = {};
              var endValue = void 0,
                  startValue = void 0;
              tween.fn = fn;
              if (isFunction(valueData)) {
                  // If we have a function as the main argument then resolve
                  // it first, in case it returns an array that needs to be
                  // split.
                  valueData = valueData.call(element, elementArrayIndex, elements.length, elements);
              }
              if (Array.isArray(valueData)) {
                  // valueData is an array in the form of
                  // [ endValue, [, easing] [, startValue] ]
                  var arr1 = valueData[1],
                      arr2 = valueData[2];
                  endValue = valueData[0];
                  if (isString(arr1) && (/^[\d-]/.test(arr1) || rxHex.test(arr1)) || isFunction(arr1) || isNumber(arr1)) {
                      startValue = arr1;
                  } else if (isString(arr1) && Easings[arr1] || Array.isArray(arr1)) {
                      tween.easing = validateEasing(arr1, duration);
                      startValue = arr2;
                  } else {
                      startValue = arr1 || arr2;
                  }
              } else {
                  endValue = valueData;
              }
              tween.end = commands[typeof endValue === "undefined" ? "undefined" : _typeof(endValue)](endValue, element, elements, elementArrayIndex, propertyName, tween);
              if (startValue != null || queue === false || data.queueList[queue] === undefined) {
                  tween.start = commands[typeof startValue === "undefined" ? "undefined" : _typeof(startValue)](startValue, element, elements, elementArrayIndex, propertyName, tween);
                  explodeTween(propertyName, tween, duration);
              }
          }
      }
  }
  // TODO: Needs a better match for "translate3d" etc - a number must be preceded by some form of break...
  var rxToken = /((?:[+\-*/]=)?(?:[+-]?\d*\.\d+|[+-]?\d+)[a-z%]*|(?:.(?!$|[+-]?\d|[+\-*/]=[+-]?\d))+.|.)/g,
      rxNumber = /^([+\-*/]=)?([+-]?\d*\.\d+|[+-]?\d+)(.*)$/;
  /**
   * Find a pattern between multiple strings, return a VelocitySequence with
   * the pattern and the tokenised values.
   *
   * If number then animate.
   * If a string then must match.
   * If units then convert between them by wrapping in a calc().
   * - If already in a calc then nest another layer.
   * If in an rgba() then the first three numbers are rounded.
   */
  function findPattern(parts, propertyName) {
      var partsLength = parts.length,
          tokens = [],
          indexes = [];
      var numbers = void 0;
      // First tokenise the strings - these have all values, we will pull
      // numbers later.
      for (var part = 0; part < partsLength; part++) {
          if (isString(parts[part])) {
              if (parts[part] === "") {
                  tokens[part] = [""];
              } else {
                  tokens[part] = cloneArray(parts[part].match(rxToken));
              }
              indexes[part] = 0;
              // If it matches more than one thing then we've got a number.
              numbers = numbers || tokens[part].length > 1;
              //console.log(`tokens:`, parts[part], tokens[part])
          } else {
              // We have an incomplete lineup, it will get tried again later...
              return;
          }
      }
      var sequence = [],
          pattern = sequence.pattern = [],
          addString = function addString(text) {
          if (isString(pattern[pattern.length - 1])) {
              pattern[pattern.length - 1] += text;
          } else if (text) {
              pattern.push(text);
              for (var _part = 0; _part < partsLength; _part++) {
                  sequence[_part].push(null);
              }
          }
      },
          returnStringType = function returnStringType() {
          if (numbers || pattern.length > 1) {
              //console.error(`Velocity: Trying to pattern match mis-matched strings "${propertyName}":`, parts);
              return;
          }
          var isDisplay = propertyName === "display",
              isVisibility = propertyName === "visibility";
          for (var _part2 = 0; _part2 < partsLength; _part2++) {
              var value = parts[_part2];
              sequence[_part2][0] = value;
              // Don't care about duration...
              sequence[_part2].easing = validateEasing(isDisplay && value === "none" || isVisibility && value === "hidden" || !isDisplay && !isVisibility ? "at-end" : "at-start", 400);
          }
          pattern[0] = false;
          return sequence;
      };
      var more = true;
      for (var _part3 = 0; _part3 < partsLength; _part3++) {
          sequence[_part3] = [];
      }
      while (more) {
          var bits = [],
              units = [];
          var text = void 0,
              isUnitless = false,
              hasNumbers = false;
          for (var _part4 = 0; _part4 < partsLength; _part4++) {
              var index = indexes[_part4]++,
                  token = tokens[_part4][index];
              if (token) {
                  var num = token.match(rxNumber); // [ignore, change, number, unit]
                  if (num) {
                      // It's a number, possibly with a += change and unit.
                      if (text) {
                          return returnStringType();
                      }
                      var digits = parseFloat(num[2]),
                          unit = num[3],
                          change = num[1] ? num[1][0] + unit : undefined,
                          changeOrUnit = change || unit;
                      if (digits && !units.includes(changeOrUnit)) {
                          // Will be an empty string at the least.
                          units.push(changeOrUnit);
                      }
                      if (!unit) {
                          if (digits) {
                              hasNumbers = true;
                          } else {
                              isUnitless = true;
                          }
                      }
                      bits[_part4] = change ? [digits, changeOrUnit, true] : [digits, changeOrUnit];
                  } else if (bits.length) {
                      return returnStringType();
                  } else {
                      // It's a string.
                      if (!text) {
                          text = token;
                      } else if (text !== token) {
                          return returnStringType();
                      }
                  }
              } else if (!_part4) {
                  for (; _part4 < partsLength; _part4++) {
                      var index2 = indexes[_part4]++;
                      if (tokens[_part4][index2]) {
                          return returnStringType();
                      }
                  }
                  // IMPORTANT: This is the exit point.
                  more = false;
                  break;
              } else {
                  // Different
                  return;
              }
          }
          if (text) {
              addString(text);
          } else if (units.length) {
              if (units.length === 2 && isUnitless && !hasNumbers) {
                  // If we only have two units, and one is empty, and it's only empty on "0", then treat us as having one unit
                  units.splice(units[0] ? 1 : 0, 1);
              }
              if (units.length === 1) {
                  // All the same units, so append number then unit.
                  var _unit = units[0],
                      firstLetter = _unit[0];
                  switch (firstLetter) {
                      case "+":
                      case "-":
                      case "*":
                      case "/":
                          if (propertyName) {
                              console.error("Velocity: The first property must not contain a relative function \"" + propertyName + "\":", parts);
                          }
                          return;
                  }
                  pattern.push(false);
                  for (var _part5 = 0; _part5 < partsLength; _part5++) {
                      sequence[_part5].push(bits[_part5][0]);
                  }
                  addString(_unit);
              } else {
                  // Multiple units, so must be inside a calc.
                  addString("calc(");
                  var patternCalc = pattern.length - 1; // Store the beginning of our calc.
                  for (var i = 0; i < units.length; i++) {
                      var _unit2 = units[i],
                          _firstLetter = _unit2[0],
                          isComplex = _firstLetter === "*" || _firstLetter === "/",
                          isMaths = isComplex || _firstLetter === "+" || _firstLetter === "-";
                      if (isComplex) {
                          // TODO: Not sure this should be done automatically!
                          pattern[patternCalc] += "(";
                          addString(")");
                      }
                      if (i) {
                          addString(" " + (isMaths ? _firstLetter : "+") + " ");
                      }
                      pattern.push(false);
                      for (var _part6 = 0; _part6 < partsLength; _part6++) {
                          var bit = bits[_part6],
                              value = bit[1] === _unit2 ? bit[0] : bit.length === 3 ? sequence[_part6 - 1][sequence[_part6 - 1].length - 1] : isComplex ? 1 : 0;
                          sequence[_part6].push(value);
                      }
                      addString(isMaths ? _unit2.substring(1) : _unit2);
                  }
                  addString(")");
              }
          }
      }
      // We've got here, so a valid sequence - now check and fix RGB rounding
      // and calc() nesting...
      // TODO: Nested calc(a + calc(b + c)) -> calc(a + (b + c))
      for (var _i = 0, inRGB = 0; _i < pattern.length; _i++) {
          var _text = pattern[_i];
          if (isString(_text)) {
              if (inRGB && _text.indexOf(",") >= 0) {
                  inRGB++;
              } else if (_text.indexOf("rgb") >= 0) {
                  inRGB = 1;
              }
          } else if (inRGB) {
              if (inRGB < 4) {
                  pattern[_i] = true;
              } else {
                  inRGB = 0;
              }
          }
      }
      return sequence;
  }
  /**
   * Convert a string-based tween with start and end strings, into a pattern
   * based tween with arrays.
   */
  function explodeTween(propertyName, tween, duration, starting) {
      var startValue = tween.start,
          endValue = tween.end;
      if (!isString(endValue) || !isString(startValue)) {
          return;
      }
      var sequence = findPattern([startValue, endValue], propertyName);
      if (!sequence && starting) {
          // This little piece will take a startValue, split out the
          // various numbers in it, then copy the endValue into the
          // startValue while replacing the numbers in it to match the
          // original start numbers as a repeating sequence.
          // Finally this function will run again with the new
          // startValue and a now matching pattern.
          var startNumbers = startValue.match(/\d\.?\d*/g) || ["0"],
              count = startNumbers.length;
          var index = 0;
          sequence = findPattern([endValue.replace(/\d+\.?\d*/g, function () {
              return startNumbers[index++ % count];
          }), endValue], propertyName);
      }
      if (sequence) {
          if (Velocity$$1.debug) {
              console.log("Velocity: Sequence found:", sequence);
          }
          sequence[0].percent = 0;
          sequence[1].percent = 1;
          tween.sequence = sequence;
          switch (tween.easing) {
              case Easings["at-start"]:
              case Easings["during"]:
              case Easings["at-end"]:
                  sequence[0].easing = sequence[1].easing = tween.easing;
                  break;
          }
      }
  }
  /**
   * Expand all queued animations that haven't gone yet
   *
   * This will automatically expand the properties map for any recently added
   * animations so that the start and end values are correct.
   */
  function validateTweens(activeCall) {
      // This might be called on an already-ready animation
      if (State.firstNew === activeCall) {
          State.firstNew = activeCall._next;
      }
      // Check if we're actually already ready
      if (activeCall._flags & 1 /* EXPANDED */) {
              // tslint:disable-line:no-bitwise
              return;
          }
      var element = activeCall.element,
          tweens = activeCall.tweens,
          duration = getValue(activeCall.options.duration, defaults$1.duration);
      // tslint:disable-next-line:forin
      for (var propertyName in tweens) {
          var tween = tweens[propertyName];
          if (tween.start == null) {
              // Get the start value as it's not been passed in
              var startValue = getPropertyValue(activeCall.element, propertyName);
              if (isString(startValue)) {
                  tween.start = fixColors(startValue);
                  explodeTween(propertyName, tween, duration, true);
              } else if (!Array.isArray(startValue)) {
                  console.warn("bad type", tween, propertyName, startValue);
              }
          }
          if (Velocity$$1.debug) {
              console.log("tweensContainer \"" + propertyName + "\": " + JSON.stringify(tween), element);
          }
      }
      activeCall._flags |= 1 /* EXPANDED */; // tslint:disable-line:no-bitwise
  }

  // Project
  /**
   * Call the begin method of an animation in a separate function so it can
   * benefit from JIT compiling while still having a try/catch block.
   */
  function beginCall(activeCall) {
      var callback = activeCall.begin || activeCall.options.begin;
      if (callback) {
          try {
              var elements = activeCall.elements;
              callback.call(elements, elements, activeCall);
          } catch (error) {
              setTimeout(function () {
                  throw error;
              }, 1);
          }
      }
  }
  /**
   * Call the progress method of an animation in a separate function so it can
   * benefit from JIT compiling while still having a try/catch block.
   */
  function progressCall(activeCall) {
      var callback = activeCall.progress || activeCall.options.progress;
      if (callback) {
          try {
              var elements = activeCall.elements,
                  percentComplete = activeCall.percentComplete,
                  options = activeCall.options,
                  tweenValue = activeCall.tween;
              callback.call(elements, elements, percentComplete, Math.max(0, activeCall.timeStart + (activeCall.duration != null ? activeCall.duration : options.duration != null ? options.duration : defaults$1.duration) - lastTick), tweenValue !== undefined ? tweenValue : String(percentComplete * 100), activeCall);
          } catch (error) {
              setTimeout(function () {
                  throw error;
              }, 1);
          }
      }
  }
  /**
   * Call callbacks, potentially run async with the main animation thread.
   */
  function asyncCallbacks() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
          for (var _iterator = progressed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var activeCall = _step.value;

              progressCall(activeCall);
          }
      } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
              }
          } finally {
              if (_didIteratorError) {
                  throw _iteratorError;
              }
          }
      }

      progressed.clear();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
          for (var _iterator2 = completed[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _activeCall = _step2.value;

              completeCall(_activeCall);
          }
      } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
              }
          } finally {
              if (_didIteratorError2) {
                  throw _iteratorError2;
              }
          }
      }

      completed.clear();
  }
  /**************
   Timing
   **************/
  var FRAME_TIME = 1000 / 60,

  /**
   * Animations with a Complete callback.
   */
  completed = new Set(),

  /**
   * Animations with a Progress callback.
   */
  progressed = new Set(),

  /**
   * Shim for window.performance in case it doesn't exist
   */
  performance = function () {
      var perf = window.performance || {};
      if (typeof perf.now !== "function") {
          var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : now();
          perf.now = function () {
              return now() - nowOffset;
          };
      }
      return perf;
  }(),

  /**
   * Proxy function for when rAF is not available.
   *
   * This should hopefully never be used as the browsers often throttle
   * this to less than one frame per second in the background, making it
   * completely unusable.
   */
  rAFProxy = function rAFProxy(callback) {
      return setTimeout(callback, Math.max(0, FRAME_TIME - (performance.now() - lastTick)));
  },

  /**
   * Either requestAnimationFrame, or a shim for it.
   */
  rAFShim = window.requestAnimationFrame || rAFProxy;
  /**
   * Set if we are currently inside a tick() to prevent double-calling.
   */
  var ticking = void 0,

  /**
   * A background WebWorker that sends us framerate messages when we're in
   * the background. Without this we cannot maintain frame accuracy.
   */
  worker = void 0;
  /**
   * The time that the last animation frame ran at. Set from tick(), and used
   * for missing rAF (ie, when not in focus etc).
   */
  var lastTick = 0;
  /**
   * WebWorker background function.
   *
   * When we're in the background this will send us a msg every tick, when in
   * the foreground it won't.
   *
   * When running in the background the browser reduces allowed CPU etc, so
   * we raun at 30fps instead of 60fps.
   */
  function workerFn() {
      var _this = this;

      var interval = void 0;
      this.onmessage = function (e) {
          switch (e.data) {
              case true:
                  if (!interval) {
                      interval = setInterval(function () {
                          _this.postMessage(true);
                      }, 1000 / 30);
                  }
                  break;
              case false:
                  if (interval) {
                      clearInterval(interval);
                      interval = 0;
                  }
                  break;
              default:
                  _this.postMessage(e.data);
                  break;
          }
      };
  }
  try {
      // Create the worker - this might not be supported, hence the try/catch.
      worker = new Worker(URL.createObjectURL(new Blob(["(" + workerFn + ")()"])));
      // Whenever the worker sends a message we tick()
      worker.onmessage = function (e) {
          if (e.data === true) {
              tick();
          } else {
              asyncCallbacks();
          }
      };
      // And watch for going to the background to start the WebWorker running.
      if (!State.isMobile && document.hidden !== undefined) {
          document.addEventListener("visibilitychange", function () {
              worker.postMessage(State.isTicking && document.hidden);
          });
      }
  } catch (e) {}
  /*
   * WebWorkers are not supported in this format. This can happen in IE10
   * where it can't create one from a blob this way. We fallback, but make
   * no guarantees towards accuracy in this case.
   */

  /**
   * Called on every tick, preferably through rAF. This is reponsible for
   * initialising any new animations, then starting any that need starting.
   * Finally it will expand any tweens and set the properties relating to
   * them. If there are any callbacks relating to the animations then they
   * will attempt to call at the end (with the exception of "begin").
   */
  function tick(timestamp) {
      if (ticking) {
          // Should never happen - but if we've swapped back from hidden to
          // visibile then we want to make sure
          return;
      }
      ticking = true;
      /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
       We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
       the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
       calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
       the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
       by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
      if (timestamp !== false) {
          var timeCurrent = performance.now(),
              deltaTime = lastTick ? timeCurrent - lastTick : FRAME_TIME,
              defaultSpeed = defaults$1.speed,
              defaultEasing = defaults$1.easing,
              defaultDuration = defaults$1.duration;
          var activeCall = void 0,
              nextCall = void 0;
          if (deltaTime >= defaults$1.minFrameTime || !lastTick) {
              lastTick = timeCurrent;
              /********************
               Call Iteration
               ********************/
              // Expand any tweens that might need it.
              while (State.firstNew) {
                  validateTweens(State.firstNew);
              }
              // Iterate through each active call.
              for (activeCall = State.first; activeCall && activeCall !== State.firstNew; activeCall = activeCall._next) {
                  var element = activeCall.element,
                      data = Data(element);
                  // Check to see if this element has been deleted midway
                  // through the animation. If it's gone then end this
                  // animation.
                  if (!element.parentNode || !data) {
                      // TODO: Remove safely - decrease count, delete data, remove from arrays
                      freeAnimationCall(activeCall);
                      continue;
                  }
                  // Don't bother getting until we can use these.
                  var options = activeCall.options,
                      flags = activeCall._flags;
                  var timeStart = activeCall.timeStart;
                  // If this is the first time that this call has been
                  // processed by tick() then we assign timeStart now so that
                  // it's value is as close to the real animation start time
                  // as possible.
                  if (!timeStart) {
                      var queue = activeCall.queue != null ? activeCall.queue : options.queue;
                      timeStart = timeCurrent - deltaTime;
                      if (queue !== false) {
                          timeStart = Math.max(timeStart, data.lastFinishList[queue] || 0);
                      }
                      activeCall.timeStart = timeStart;
                  }
                  // If this animation is paused then skip processing unless
                  // it has been set to resume.
                  if (flags & 16 /* PAUSED */) {
                          // tslint:disable-line:no-bitwise
                          // Update the time start to accomodate the paused
                          // completion amount.
                          activeCall.timeStart += deltaTime;
                          continue;
                      }
                  // Check if this animation is ready - if it's synced then it
                  // needs to wait for all other animations in the sync
                  if (!(flags & 2 /* READY */)) {
                      // tslint:disable-line:no-bitwise
                      activeCall._flags |= 2 /* READY */; // tslint:disable-line:no-bitwise
                      options._ready++;
                  }
              }
              // Need to split the loop, as ready sync animations must all get
              // the same start time.
              for (activeCall = State.first; activeCall && activeCall !== State.firstNew; activeCall = nextCall) {
                  var _flags = activeCall._flags;
                  nextCall = activeCall._next;
                  if (!(_flags & 2 /* READY */) || _flags & 16 /* PAUSED */) {
                      // tslint:disable-line:no-bitwise
                      continue;
                  }
                  var _options = activeCall.options;
                  if (_flags & 32 /* SYNC */ && _options._ready < _options._total) {
                      // tslint:disable-line:no-bitwise
                      activeCall.timeStart += deltaTime;
                      continue;
                  }
                  var speed = activeCall.speed != null ? activeCall.speed : _options.speed != null ? _options.speed : defaultSpeed;
                  var _timeStart = activeCall.timeStart;
                  // Don't bother getting until we can use these.
                  if (!(_flags & 4 /* STARTED */)) {
                      // tslint:disable-line:no-bitwise
                      var delay = activeCall.delay != null ? activeCall.delay : _options.delay;
                      // Make sure anything we've delayed doesn't start
                      // animating yet, there might still be an active delay
                      // after something has been un-paused
                      if (delay) {
                          if (_timeStart + delay / speed > timeCurrent) {
                              continue;
                          }
                          activeCall.timeStart = _timeStart += delay / (delay > 0 ? speed : 1);
                      }
                      activeCall._flags |= 4 /* STARTED */; // tslint:disable-line:no-bitwise
                      // The begin callback is fired once per call, not once
                      // per element, and is passed the full raw DOM element
                      // set as both its context and its first argument.
                      if (_options._started++ === 0) {
                          _options._first = activeCall;
                          if (_options.begin) {
                              // Pass to an external fn with a try/catch block for optimisation
                              beginCall(activeCall);
                              // Only called once, even if reversed or repeated
                              _options.begin = undefined;
                          }
                      }
                  }
                  if (speed !== 1) {
                      // On the first frame we may have a shorter delta
                      // const delta = Math.min(deltaTime, timeCurrent - timeStart);
                      activeCall.timeStart = _timeStart += Math.min(deltaTime, timeCurrent - _timeStart) * (1 - speed);
                  }
                  var activeEasing = activeCall.easing != null ? activeCall.easing : _options.easing != null ? _options.easing : defaultEasing,
                      millisecondsEllapsed = activeCall.ellapsedTime = timeCurrent - _timeStart,
                      duration = activeCall.duration != null ? activeCall.duration : _options.duration != null ? _options.duration : defaultDuration,
                      percentComplete = activeCall.percentComplete = Velocity$$1.mock ? 1 : Math.min(millisecondsEllapsed / duration, 1),
                      tweens = activeCall.tweens,
                      reverse = _flags & 64 /* REVERSE */; // tslint:disable-line:no-bitwise
                  if (activeCall.progress || _options._first === activeCall && _options.progress) {
                      progressed.add(activeCall);
                  }
                  if (percentComplete === 1) {
                      completed.add(activeCall);
                  }
                  // tslint:disable-next-line:forin
                  for (var property in tweens) {
                      // For every element, iterate through each property.
                      var tween = tweens[property],
                          sequence = tween.sequence,
                          pattern = sequence.pattern;
                      var currentValue = "",
                          i = 0;
                      if (pattern) {
                          var easingComplete = (tween.easing || activeEasing)(percentComplete, 0, 1, property);
                          var best = 0;
                          for (var j = 0; j < sequence.length - 1; j++) {
                              if (sequence[j].percent < easingComplete) {
                                  best = j;
                              }
                          }
                          var tweenFrom = sequence[best],
                              tweenTo = sequence[best + 1] || tweenFrom,
                              rawPercent = (percentComplete - tweenFrom.percent) / (tweenTo.percent - tweenFrom.percent),
                              tweenPercent = reverse ? 1 - rawPercent : rawPercent,
                              easing = tweenTo.easing || activeEasing || linearEasing;
                          for (; i < pattern.length; i++) {
                              var startValue = tweenFrom[i];
                              if (startValue == null) {
                                  currentValue += pattern[i];
                              } else {
                                  var endValue = tweenTo[i];
                                  if (startValue === endValue) {
                                      currentValue += startValue;
                                  } else {
                                      // All easings must deal with numbers except for our internal ones.
                                      var result = easing(tweenPercent, startValue, endValue, property);
                                      currentValue += pattern[i] !== true ? result : Math.round(result);
                                  }
                              }
                          }
                          if (property !== "tween") {
                              if (percentComplete === 1) {
                                  currentValue = removeNestedCalc(currentValue);
                              }
                              // TODO: To solve an IE<=8 positioning bug, the unit type must be dropped when setting a property value of 0 - add normalisations to legacy
                              setPropertyValue(activeCall.element, property, currentValue, tween.fn);
                          } else {
                              // Skip the fake 'tween' property as that is only
                              // passed into the progress callback.
                              activeCall.tween = currentValue;
                          }
                      } else {
                          console.warn("VelocityJS: Missing pattern:", property, JSON.stringify(tween[property]));
                          delete tweens[property];
                      }
                  }
              }
              if (progressed.size || completed.size) {
                  if (!document.hidden) {
                      asyncCallbacks();
                  } else if (worker) {
                      worker.postMessage("");
                  } else {
                      setTimeout(asyncCallbacks, 1);
                  }
              }
          }
      }
      if (State.first) {
          State.isTicking = true;
          if (!document.hidden) {
              rAFShim(tick);
          } else if (!worker) {
              rAFProxy(tick);
          } else if (timestamp === false) {
              // Make sure we turn on the messages.
              worker.postMessage(true);
          }
      } else {
          State.isTicking = false;
          lastTick = 0;
          if (document.hidden && worker) {
              // Make sure we turn off the messages.
              worker.postMessage(false);
          }
      }
      ticking = false;
  }

  // Project
  /**
   * Check if an animation should be finished, and if so we set the tweens to
   * the final value for it, then call complete.
   */
  function checkAnimationShouldBeFinished(animation, queueName, defaultQueue) {
      validateTweens(animation);
      if (queueName === undefined || queueName === getValue(animation.queue, animation.options.queue, defaultQueue)) {
          if (!(animation._flags & 4 /* STARTED */)) {
              // tslint:disable-line:no-bitwise
              // Copied from tick.ts - ensure that the animation is completely
              // valid and run begin() before complete().
              var options = animation.options;
              // The begin callback is fired once per call, not once per
              // element, and is passed the full raw DOM element set as both
              // its context and its first argument.
              if (options._started++ === 0) {
                  options._first = animation;
                  if (options.begin) {
                      // Pass to an external fn with a try/catch block for optimisation
                      beginCall(animation);
                      // Only called once, even if reversed or repeated
                      options.begin = undefined;
                  }
              }
              animation._flags |= 4 /* STARTED */; // tslint:disable-line:no-bitwise
          }
          // tslint:disable-next-line:forin
          for (var property in animation.tweens) {
              var tween = animation.tweens[property],
                  sequence = tween.sequence,
                  pattern = sequence.pattern;
              var currentValue = "",
                  i = 0;
              if (pattern) {
                  var endValues = sequence[sequence.length - 1];
                  for (; i < pattern.length; i++) {
                      var endValue = endValues[i];
                      currentValue += endValue == null ? pattern[i] : endValue;
                  }
              }
              setPropertyValue(animation.element, property, currentValue, tween.fn);
          }
          completeCall(animation);
      }
  }
  /**
   * When the finish action is triggered, the elements' currently active call is
   * immediately finished. When an element is finished, the next item in its
   * animation queue is immediately triggered. If passed via a chained call
   * then this will only target the animations in that call, and not the
   * elements linked to it.
   *
   * A queue name may be passed in to specify that only animations on the
   * named queue are finished. The default queue is named "". In addition the
   * value of `false` is allowed for the queue name.
   *
   * An final argument may be passed in to clear an element's remaining queued
   * calls. This may only be the value `true`.
   */
  function finish(args, elements, promiseHandler) {
      var queueName = validateQueue(args[0], true),
          defaultQueue = defaults$1.queue,
          finishAll = args[queueName === undefined ? 0 : 1] === true;
      if (isVelocityResult(elements) && elements.velocity.animations) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
              for (var _iterator = elements.velocity.animations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var animation = _step.value;

                  checkAnimationShouldBeFinished(animation, queueName, defaultQueue);
              }
          } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                  }
              } finally {
                  if (_didIteratorError) {
                      throw _iteratorError;
                  }
              }
          }
      } else {
          while (State.firstNew) {
              validateTweens(State.firstNew);
          }
          for (var activeCall = State.first, nextCall; activeCall && (finishAll || activeCall !== State.firstNew); activeCall = nextCall || State.firstNew) {
              nextCall = activeCall._next;
              if (!elements || elements.includes(activeCall.element)) {
                  checkAnimationShouldBeFinished(activeCall, queueName, defaultQueue);
              }
          }
      }
      if (promiseHandler) {
          if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
              elements.then(promiseHandler._resolver);
          } else {
              promiseHandler._resolver(elements);
          }
      }
  }
  registerAction(["finish", finish], true);

  /**
   * Used to map getters for the various AnimationFlags.
   */
  var animationFlags = {
      isExpanded: 1 /* EXPANDED */
      , isReady: 2 /* READY */
      , isStarted: 4 /* STARTED */
      , isStopped: 8 /* STOPPED */
      , isPaused: 16 /* PAUSED */
      , isSync: 32 /* SYNC */
      , isReverse: 64 /* REVERSE */
  };
  /**
   * Get or set an option or running AnimationCall data value. If there is no
   * value passed then it will get, otherwise we will set.
   *
   * NOTE: When using "get" this will not touch the Promise as it is never
   * returned to the user.
   */
  function option(args, elements, promiseHandler, action) {
      var key = args[0],
          queue = action.indexOf(".") >= 0 ? action.replace(/^.*\./, "") : undefined,
          queueName = queue === "false" ? false : validateQueue(queue, true);
      var animations = void 0,
          value = args[1];
      if (!key) {
          console.warn("VelocityJS: Cannot access a non-existant key!");
          return null;
      }
      // If we're chaining the return value from Velocity then we are only
      // interested in the values related to that call
      if (isVelocityResult(elements) && elements.velocity.animations) {
          animations = elements.velocity.animations;
      } else {
          animations = [];
          for (var activeCall = State.first; activeCall; activeCall = activeCall._next) {
              if (elements.indexOf(activeCall.element) >= 0 && getValue(activeCall.queue, activeCall.options.queue) === queueName) {
                  animations.push(activeCall);
              }
          }
          // If we're dealing with multiple elements that are pointing at a
          // single running animation, then instead treat them as a single
          // animation.
          if (elements.length > 1 && animations.length > 1) {
              var i = 1,
                  options = animations[0].options;
              while (i < animations.length) {
                  if (animations[i++].options !== options) {
                      options = null;
                      break;
                  }
              }
              // TODO: this needs to check that they're actually a sync:true animation to merge the results, otherwise the individual values may be different
              if (options) {
                  animations = [animations[0]];
              }
          }
      }
      // GET
      if (value === undefined) {
          var result = [],
              flag = animationFlags[key];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
              for (var _iterator = animations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var animation = _step.value;

                  if (flag === undefined) {
                      // A normal key to get.
                      result.push(getValue(animation[key], animation.options[key]));
                  } else {
                      // A flag that we're checking against.
                      result.push((animation._flags & flag) === 0); // tslint:disable-line:no-bitwise
                  }
              }
          } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                  }
              } finally {
                  if (_didIteratorError) {
                      throw _iteratorError;
                  }
              }
          }

          if (elements.length === 1 && animations.length === 1) {
              // If only a single animation is found and we're only targetting a
              // single element, then return the value directly
              return result[0];
          }
          return result;
      }
      // SET
      var isPercentComplete = void 0;
      switch (key) {
          case "cache":
              value = validateCache(value);
              break;
          case "begin":
              value = validateBegin(value);
              break;
          case "complete":
              value = validateComplete(value);
              break;
          case "delay":
              value = validateDelay(value);
              break;
          case "duration":
              value = validateDuration(value);
              break;
          case "fpsLimit":
              value = validateFpsLimit(value);
              break;
          case "loop":
              value = validateLoop(value);
              break;
          case "percentComplete":
              isPercentComplete = true;
              value = parseFloat(value);
              break;
          case "repeat":
          case "repeatAgain":
              value = validateRepeat(value);
              break;
          default:
              if (key[0] !== "_") {
                  var num = parseFloat(value);
                  if (value === String(num)) {
                      value = num;
                  }
                  break;
              }
          // deliberate fallthrough
          case "queue":
          case "promise":
          case "promiseRejectEmpty":
          case "easing":
          case "started":
              console.warn("VelocityJS: Trying to set a read-only key:", key);
              return;
      }
      if (value === undefined || value !== value) {
          console.warn("VelocityJS: Trying to set an invalid value:" + key + "=" + value + " (" + args[1] + ")");
          return null;
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
          for (var _iterator2 = animations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _animation = _step2.value;

              if (isPercentComplete) {
                  _animation.timeStart = lastTick - getValue(_animation.duration, _animation.options.duration, defaults$1.duration) * value;
              } else {
                  _animation[key] = value;
              }
          }
      } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
              }
          } finally {
              if (_didIteratorError2) {
                  throw _iteratorError2;
              }
          }
      }

      if (promiseHandler) {
          if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
              elements.then(promiseHandler._resolver);
          } else {
              promiseHandler._resolver(elements);
          }
      }
  }
  registerAction(["option", option], true);

  // Project
  /**
   * Check if an animation should be paused / resumed.
   */
  function checkAnimation(animation, queueName, defaultQueue, isPaused) {
      if (queueName === undefined || queueName === getValue(animation.queue, animation.options.queue, defaultQueue)) {
          if (isPaused) {
              animation._flags |= 16 /* PAUSED */; // tslint:disable-line:no-bitwise
          } else {
              animation._flags &= ~16 /* PAUSED */; // tslint:disable-line:no-bitwise
          }
      }
  }
  /**
   * Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a
   * single element will cause any calls that contain tweens for that element to be paused/resumed
   * as well.
   */
  function pauseResume(args, elements, promiseHandler, action) {
      var isPaused = action.indexOf("pause") === 0,
          queue = action.indexOf(".") >= 0 ? action.replace(/^.*\./, "") : undefined,
          queueName = queue === "false" ? false : validateQueue(args[0]),
          defaultQueue = defaults$1.queue;
      if (isVelocityResult(elements) && elements.velocity.animations) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
              for (var _iterator = elements.velocity.animations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var animation = _step.value;

                  checkAnimation(animation, queueName, defaultQueue, isPaused);
              }
          } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                  }
              } finally {
                  if (_didIteratorError) {
                      throw _iteratorError;
                  }
              }
          }
      } else {
          var activeCall = State.first;
          while (activeCall) {
              if (!elements || elements.includes(activeCall.element)) {
                  checkAnimation(activeCall, queueName, defaultQueue, isPaused);
              }
              activeCall = activeCall._next;
          }
      }
      if (promiseHandler) {
          if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
              elements.then(promiseHandler._resolver);
          } else {
              promiseHandler._resolver(elements);
          }
      }
  }
  registerAction(["pause", pauseResume], true);
  registerAction(["resume", pauseResume], true);

  // Project
  /**
   * Get or set a style of Nomralised property value on one or more elements.
   * If there is no value passed then it will get, otherwise we will set.
   *
   * NOTE: When using "get" this will not touch the Promise as it is never
   * returned to the user.
   *
   * This can fail to set, and will reject the Promise if it does so.
   *
   * Velocity(elements, "style", "property", "value") => elements;
   * Velocity(elements, "style", {"property": "value", ...}) => elements;
   * Velocity(element, "style", "property") => "value";
   * Velocity(elements, "style", "property") => ["value", ...];
   */
  function propertyAction(args, elements, promiseHandler, action) {
      var property = args[0],
          value = args[1];
      if (!property) {
          console.warn("VelocityJS: Cannot access a non-existant property!");
          return null;
      }
      // GET
      if (value === undefined && !isPlainObject(property)) {
          if (Array.isArray(property)) {
              if (elements.length === 1) {
                  var result = {};
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                      for (var _iterator = property[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          var prop = _step.value;

                          result[prop] = fixColors(getPropertyValue(elements[0], prop));
                      }
                  } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                          }
                      } finally {
                          if (_didIteratorError) {
                              throw _iteratorError;
                          }
                      }
                  }

                  return result;
              } else {
                  var _result = [];
                  var _iteratorNormalCompletion2 = true;
                  var _didIteratorError2 = false;
                  var _iteratorError2 = undefined;

                  try {
                      for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                          var element = _step2.value;

                          var res = {};
                          var _iteratorNormalCompletion3 = true;
                          var _didIteratorError3 = false;
                          var _iteratorError3 = undefined;

                          try {
                              for (var _iterator3 = property[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                  var _prop = _step3.value;

                                  res[_prop] = fixColors(getPropertyValue(element, _prop));
                              }
                          } catch (err) {
                              _didIteratorError3 = true;
                              _iteratorError3 = err;
                          } finally {
                              try {
                                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                      _iterator3.return();
                                  }
                              } finally {
                                  if (_didIteratorError3) {
                                      throw _iteratorError3;
                                  }
                              }
                          }

                          _result.push(res);
                      }
                  } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion2 && _iterator2.return) {
                              _iterator2.return();
                          }
                      } finally {
                          if (_didIteratorError2) {
                              throw _iteratorError2;
                          }
                      }
                  }

                  return _result;
              }
          } else {
              // If only a single animation is found and we're only targetting a
              // single element, then return the value directly
              if (elements.length === 1) {
                  return fixColors(getPropertyValue(elements[0], property));
              }
              var _result2 = [];
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                  for (var _iterator4 = elements[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var _element = _step4.value;

                      _result2.push(fixColors(getPropertyValue(_element, property)));
                  }
              } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }
                  } finally {
                      if (_didIteratorError4) {
                          throw _iteratorError4;
                      }
                  }
              }

              return _result2;
          }
      }
      // SET
      var error = [];
      if (isPlainObject(property)) {
          for (var propertyName in property) {
              if (property.hasOwnProperty(propertyName)) {
                  var _iteratorNormalCompletion5 = true;
                  var _didIteratorError5 = false;
                  var _iteratorError5 = undefined;

                  try {
                      for (var _iterator5 = elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                          var _element2 = _step5.value;

                          var propertyValue = property[propertyName];
                          if (isString(propertyValue) || isNumber(propertyValue)) {
                              setPropertyValue(_element2, propertyName, property[propertyName]);
                          } else {
                              error.push("Cannot set a property \"" + propertyName + "\" to an unknown type: " + (typeof propertyValue === "undefined" ? "undefined" : _typeof(propertyValue)));
                              console.warn("VelocityJS: Cannot set a property \"" + propertyName + "\" to an unknown type:", propertyValue);
                          }
                      }
                  } catch (err) {
                      _didIteratorError5 = true;
                      _iteratorError5 = err;
                  } finally {
                      try {
                          if (!_iteratorNormalCompletion5 && _iterator5.return) {
                              _iterator5.return();
                          }
                      } finally {
                          if (_didIteratorError5) {
                              throw _iteratorError5;
                          }
                      }
                  }
              }
          }
      } else if (isString(value) || isNumber(value)) {
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
              for (var _iterator6 = elements[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  var _element3 = _step6.value;

                  setPropertyValue(_element3, property, String(value));
              }
          } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion6 && _iterator6.return) {
                      _iterator6.return();
                  }
              } finally {
                  if (_didIteratorError6) {
                      throw _iteratorError6;
                  }
              }
          }
      } else {
          error.push("Cannot set a property \"" + property + "\" to an unknown type: " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
          console.warn("VelocityJS: Cannot set a property \"" + property + "\" to an unknown type:", value);
      }
      if (promiseHandler) {
          if (error.length) {
              promiseHandler._rejecter(error.join(", "));
          } else if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
              elements.then(promiseHandler._resolver);
          } else {
              promiseHandler._resolver(elements);
          }
      }
  }
  registerAction(["property", propertyAction], true);

  // Project
  registerAction(["reverse", function (args, elements, promiseHandler, action) {
          // NOTE: Code needs to split out before here - but this is needed to prevent it being overridden
          throw new SyntaxError("VelocityJS: The 'reverse' action is built in and private.");
  }], true);

  // Project
  /**
   * Check if an animation should be stopped, and if so then set the STOPPED
   * flag on it, then call complete.
   */
  function checkAnimationShouldBeStopped(animation, queueName, defaultQueue) {
      validateTweens(animation);
      if (queueName === undefined || queueName === getValue(animation.queue, animation.options.queue, defaultQueue)) {
          animation._flags |= 8 /* STOPPED */; // tslint:disable-line:no-bitwise
          completeCall(animation);
      }
  }
  /**
   * When the stop action is triggered, the elements' currently active call is
   * immediately stopped. When an element is stopped, the next item in its
   * animation queue is immediately triggered. If passed via a chained call
   * then this will only target the animations in that call, and not the
   * elements linked to it.
   *
   * A queue name may be passed in to specify that only animations on the
   * named queue are stopped. The default queue is named "". In addition the
   * value of `false` is allowed for the queue name.
   *
   * An final argument may be passed in to clear an element's remaining queued
   * calls. This may only be the value `true`.
   *
   * Note: The stop command runs prior to Velocity's Queueing phase since its
   * behavior is intended to take effect *immediately*, regardless of the
   * element's current queue state.
   */
  function stop(args, elements, promiseHandler, action) {
      var queueName = validateQueue(args[0], true),
          defaultQueue = defaults$1.queue,
          finishAll = args[queueName === undefined ? 0 : 1] === true;
      if (isVelocityResult(elements) && elements.velocity.animations) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
              for (var _iterator = elements.velocity.animations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var animation = _step.value;

                  checkAnimationShouldBeStopped(animation, queueName, defaultQueue);
              }
          } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                  }
              } finally {
                  if (_didIteratorError) {
                      throw _iteratorError;
                  }
              }
          }
      } else {
          while (State.firstNew) {
              validateTweens(State.firstNew);
          }
          for (var activeCall = State.first, nextCall; activeCall && (finishAll || activeCall !== State.firstNew); activeCall = nextCall || State.firstNew) {
              nextCall = activeCall._next;
              if (!elements || elements.includes(activeCall.element)) {
                  checkAnimationShouldBeStopped(activeCall, queueName, defaultQueue);
              }
          }
      }
      if (promiseHandler) {
          if (isVelocityResult(elements) && elements.velocity.animations && elements.then) {
              elements.then(promiseHandler._resolver);
          } else {
              promiseHandler._resolver(elements);
          }
      }
  }
  registerAction(["stop", stop], true);

  // Project
  registerAction(["style", propertyAction], true);

  // Project
  /**
   *
   */
  function tweenAction(args, elements, promiseHandler, action) {
      var requireForcefeeding = void 0;
      if (!elements) {
          if (!args.length) {
              console.info("Velocity(<element>, \"tween\", percentComplete, property, end | [end, <easing>, <start>], <easing>) => value\nVelocity(<element>, \"tween\", percentComplete, {property: end | [end, <easing>, <start>], ...}, <easing>) => {property: value, ...}");
              return null;
          }
          elements = [document.body];
          requireForcefeeding = true;
      } else if (elements.length !== 1) {
          // TODO: Allow more than a single element to return an array of results
          throw new Error("VelocityJS: Cannot tween more than one element!");
      }
      var percentComplete = args[0],
          fakeAnimation = {
          elements: elements,
          element: elements[0],
          queue: false,
          options: {
              duration: 1000
          },
          tweens: null
      },
          result = {};
      var properties = args[1],
          singleResult = void 0,
          maybeSequence = void 0,
          easing = args[2],
          count = 0;
      if (isString(args[1])) {
          if (SequencesObject && SequencesObject[args[1]]) {
              maybeSequence = SequencesObject[args[1]];
              properties = {};
              easing = args[2];
          } else {
              singleResult = true;
              properties = defineProperty({}, args[1], args[2]);
              easing = args[3];
          }
      } else if (Array.isArray(args[1])) {
          singleResult = true;
          properties = {
              tween: args[1]
          };
          easing = args[2];
      }
      if (!isNumber(percentComplete) || percentComplete < 0 || percentComplete > 1) {
          throw new Error("VelocityJS: Must tween a percentage from 0 to 1!");
      }
      if (!isPlainObject(properties)) {
          throw new Error("VelocityJS: Cannot tween an invalid property!");
      }
      if (requireForcefeeding) {
          for (var property in properties) {
              if (properties.hasOwnProperty(property) && (!Array.isArray(properties[property]) || properties[property].length < 2)) {
                  throw new Error("VelocityJS: When not supplying an element you must force-feed values: " + property);
              }
          }
      }
      var activeEasing = validateEasing(getValue(easing, defaults$1.easing), DEFAULT_DURATION);
      if (maybeSequence) {
          expandSequence(fakeAnimation, maybeSequence);
      } else {
          expandProperties(fakeAnimation, properties);
      }
      // tslint:disable-next-line:forin
      for (var _property in fakeAnimation.tweens) {
          // For every element, iterate through each property.
          var propertyTween = fakeAnimation.tweens[_property],
              sequence = propertyTween.sequence,
              pattern = sequence.pattern;
          var currentValue = "",
              i = 0;
          count++;
          if (pattern) {
              var easingComplete = (propertyTween.easing || activeEasing)(percentComplete, 0, 1, _property);
              var best = 0;
              for (var j = 0; j < sequence.length - 1; j++) {
                  if (sequence[j].percent < easingComplete) {
                      best = j;
                  }
              }
              var tweenFrom = sequence[best],
                  tweenTo = sequence[best + 1] || tweenFrom,
                  tweenPercent = (percentComplete - tweenFrom.percent) / (tweenTo.percent - tweenFrom.percent),
                  tweenEasing = tweenTo.easing || linearEasing;
              for (; i < pattern.length; i++) {
                  var startValue = tweenFrom[i];
                  if (startValue == null) {
                      currentValue += pattern[i];
                  } else {
                      var endValue = tweenTo[i];
                      if (startValue === endValue) {
                          currentValue += startValue;
                      } else {
                          // All easings must deal with numbers except for our internal ones.
                          var value = tweenEasing(tweenPercent, startValue, endValue, _property);
                          currentValue += pattern[i] === true ? Math.round(value) : value;
                      }
                  }
              }
              result[_property] = currentValue;
          }
      }
      if (singleResult && count === 1) {
          for (var _property2 in result) {
              if (result.hasOwnProperty(_property2)) {
                  return result[_property2];
              }
          }
      }
      return result;
  }
  registerAction(["tween", tweenAction], true);

  // Project
  /**
   * Converting from hex as it makes for a smaller file.
   */
  var colorValues = {
      aliceblue: 0xF0F8FF,
      antiquewhite: 0xFAEBD7,
      aqua: 0x00FFFF,
      aquamarine: 0x7FFFD4,
      azure: 0xF0FFFF,
      beige: 0xF5F5DC,
      bisque: 0xFFE4C4,
      black: 0x000000,
      blanchedalmond: 0xFFEBCD,
      blue: 0x0000FF,
      blueviolet: 0x8A2BE2,
      brown: 0xA52A2A,
      burlywood: 0xDEB887,
      cadetblue: 0x5F9EA0,
      chartreuse: 0x7FFF00,
      chocolate: 0xD2691E,
      coral: 0xFF7F50,
      cornflowerblue: 0x6495ED,
      cornsilk: 0xFFF8DC,
      crimson: 0xDC143C,
      cyan: 0x00FFFF,
      darkblue: 0x00008B,
      darkcyan: 0x008B8B,
      darkgoldenrod: 0xB8860B,
      darkgray: 0xA9A9A9,
      darkgrey: 0xA9A9A9,
      darkgreen: 0x006400,
      darkkhaki: 0xBDB76B,
      darkmagenta: 0x8B008B,
      darkolivegreen: 0x556B2F,
      darkorange: 0xFF8C00,
      darkorchid: 0x9932CC,
      darkred: 0x8B0000,
      darksalmon: 0xE9967A,
      darkseagreen: 0x8FBC8F,
      darkslateblue: 0x483D8B,
      darkslategray: 0x2F4F4F,
      darkslategrey: 0x2F4F4F,
      darkturquoise: 0x00CED1,
      darkviolet: 0x9400D3,
      deeppink: 0xFF1493,
      deepskyblue: 0x00BFFF,
      dimgray: 0x696969,
      dimgrey: 0x696969,
      dodgerblue: 0x1E90FF,
      firebrick: 0xB22222,
      floralwhite: 0xFFFAF0,
      forestgreen: 0x228B22,
      fuchsia: 0xFF00FF,
      gainsboro: 0xDCDCDC,
      ghostwhite: 0xF8F8FF,
      gold: 0xFFD700,
      goldenrod: 0xDAA520,
      gray: 0x808080,
      grey: 0x808080,
      green: 0x008000,
      greenyellow: 0xADFF2F,
      honeydew: 0xF0FFF0,
      hotpink: 0xFF69B4,
      indianred: 0xCD5C5C,
      indigo: 0x4B0082,
      ivory: 0xFFFFF0,
      khaki: 0xF0E68C,
      lavender: 0xE6E6FA,
      lavenderblush: 0xFFF0F5,
      lawngreen: 0x7CFC00,
      lemonchiffon: 0xFFFACD,
      lightblue: 0xADD8E6,
      lightcoral: 0xF08080,
      lightcyan: 0xE0FFFF,
      lightgoldenrodyellow: 0xFAFAD2,
      lightgray: 0xD3D3D3,
      lightgrey: 0xD3D3D3,
      lightgreen: 0x90EE90,
      lightpink: 0xFFB6C1,
      lightsalmon: 0xFFA07A,
      lightseagreen: 0x20B2AA,
      lightskyblue: 0x87CEFA,
      lightslategray: 0x778899,
      lightslategrey: 0x778899,
      lightsteelblue: 0xB0C4DE,
      lightyellow: 0xFFFFE0,
      lime: 0x00FF00,
      limegreen: 0x32CD32,
      linen: 0xFAF0E6,
      magenta: 0xFF00FF,
      maroon: 0x800000,
      mediumaquamarine: 0x66CDAA,
      mediumblue: 0x0000CD,
      mediumorchid: 0xBA55D3,
      mediumpurple: 0x9370DB,
      mediumseagreen: 0x3CB371,
      mediumslateblue: 0x7B68EE,
      mediumspringgreen: 0x00FA9A,
      mediumturquoise: 0x48D1CC,
      mediumvioletred: 0xC71585,
      midnightblue: 0x191970,
      mintcream: 0xF5FFFA,
      mistyrose: 0xFFE4E1,
      moccasin: 0xFFE4B5,
      navajowhite: 0xFFDEAD,
      navy: 0x000080,
      oldlace: 0xFDF5E6,
      olive: 0x808000,
      olivedrab: 0x6B8E23,
      orange: 0xFFA500,
      orangered: 0xFF4500,
      orchid: 0xDA70D6,
      palegoldenrod: 0xEEE8AA,
      palegreen: 0x98FB98,
      paleturquoise: 0xAFEEEE,
      palevioletred: 0xDB7093,
      papayawhip: 0xFFEFD5,
      peachpuff: 0xFFDAB9,
      peru: 0xCD853F,
      pink: 0xFFC0CB,
      plum: 0xDDA0DD,
      powderblue: 0xB0E0E6,
      purple: 0x800080,
      rebeccapurple: 0x663399,
      red: 0xFF0000,
      rosybrown: 0xBC8F8F,
      royalblue: 0x4169E1,
      saddlebrown: 0x8B4513,
      salmon: 0xFA8072,
      sandybrown: 0xF4A460,
      seagreen: 0x2E8B57,
      seashell: 0xFFF5EE,
      sienna: 0xA0522D,
      silver: 0xC0C0C0,
      skyblue: 0x87CEEB,
      slateblue: 0x6A5ACD,
      slategray: 0x708090,
      slategrey: 0x708090,
      snow: 0xFFFAFA,
      springgreen: 0x00FF7F,
      steelblue: 0x4682B4,
      tan: 0xD2B48C,
      teal: 0x008080,
      thistle: 0xD8BFD8,
      tomato: 0xFF6347,
      turquoise: 0x40E0D0,
      violet: 0xEE82EE,
      wheat: 0xF5DEB3,
      white: 0xFFFFFF,
      whitesmoke: 0xF5F5F5,
      yellow: 0xFFFF00,
      yellowgreen: 0x9ACD32
  };
  for (var name in colorValues) {
      if (colorValues.hasOwnProperty(name)) {
          var color = colorValues[name];
          ColorNames[name] = Math.floor(color / 65536) + "," + Math.floor(color / 256 % 256) + "," + color % 256;
      }
  }

  // Project
  function registerBackIn(name, amount) {
      registerEasing([name, function (percentComplete, startValue, endValue) {
          if (percentComplete === 0) {
              return startValue;
          }
          if (percentComplete === 1) {
              return endValue;
          }
          return Math.pow(percentComplete, 2) * ((amount + 1) * percentComplete - amount) * (endValue - startValue);
      }]);
  }
  function registerBackOut(name, amount) {
      registerEasing([name, function (percentComplete, startValue, endValue) {
          if (percentComplete === 0) {
              return startValue;
          }
          if (percentComplete === 1) {
              return endValue;
          }
          return (Math.pow(--percentComplete, 2) * ((amount + 1) * percentComplete + amount) + 1) * (endValue - startValue);
      }]);
  }
  function registerBackInOut(name, amount) {
      amount *= 1.525;
      registerEasing([name, function (percentComplete, startValue, endValue) {
          if (percentComplete === 0) {
              return startValue;
          }
          if (percentComplete === 1) {
              return endValue;
          }
          percentComplete *= 2;
          return (percentComplete < 1 ? Math.pow(percentComplete, 2) * ((amount + 1) * percentComplete - amount) : Math.pow(percentComplete - 2, 2) * ((amount + 1) * (percentComplete - 2) + amount) + 2) * 0.5 * (endValue - startValue);
      }]);
  }
  registerBackIn("easeInBack", 1.7);
  registerBackOut("easeOutBack", 1.7);
  registerBackInOut("easeInOutBack", 1.7);
  // TODO: Expose these as actions to register custom easings?

  // Project
  function easeOutBouncePercent(percentComplete) {
      if (percentComplete < 1 / 2.75) {
          return 7.5625 * percentComplete * percentComplete;
      }
      if (percentComplete < 2 / 2.75) {
          return 7.5625 * (percentComplete -= 1.5 / 2.75) * percentComplete + 0.75;
      }
      if (percentComplete < 2.5 / 2.75) {
          return 7.5625 * (percentComplete -= 2.25 / 2.75) * percentComplete + 0.9375;
      }
      return 7.5625 * (percentComplete -= 2.625 / 2.75) * percentComplete + 0.984375;
  }
  function easeInBouncePercent(percentComplete) {
      return 1 - easeOutBouncePercent(1 - percentComplete);
  }
  function easeInBounce(percentComplete, startValue, endValue) {
      if (percentComplete === 0) {
          return startValue;
      }
      if (percentComplete === 1) {
          return endValue;
      }
      return easeInBouncePercent(percentComplete) * (endValue - startValue);
  }
  function easeOutBounce(percentComplete, startValue, endValue) {
      if (percentComplete === 0) {
          return startValue;
      }
      if (percentComplete === 1) {
          return endValue;
      }
      return easeOutBouncePercent(percentComplete) * (endValue - startValue);
  }
  function easeInOutBounce(percentComplete, startValue, endValue) {
      if (percentComplete === 0) {
          return startValue;
      }
      if (percentComplete === 1) {
          return endValue;
      }
      return (percentComplete < 0.5 ? easeInBouncePercent(percentComplete * 2) * 0.5 : easeOutBouncePercent(percentComplete * 2 - 1) * 0.5 + 0.5) * (endValue - startValue);
  }
  registerEasing(["easeInBounce", easeInBounce]);
  registerEasing(["easeOutBounce", easeOutBounce]);
  registerEasing(["easeInOutBounce", easeInOutBounce]);

  // Project
  // Constants
  var PI2 = Math.PI * 2;
  function registerElasticIn(name, amplitude, period) {
      registerEasing([name, function (percentComplete, startValue, endValue) {
          if (percentComplete === 0) {
              return startValue;
          }
          if (percentComplete === 1) {
              return endValue;
          }
          return -(amplitude * Math.pow(2, 10 * (percentComplete -= 1)) * Math.sin((percentComplete - period / PI2 * Math.asin(1 / amplitude)) * PI2 / period)) * (endValue - startValue);
      }]);
  }
  function registerElasticOut(name, amplitude, period) {
      registerEasing([name, function (percentComplete, startValue, endValue) {
          if (percentComplete === 0) {
              return startValue;
          }
          if (percentComplete === 1) {
              return endValue;
          }
          return (amplitude * Math.pow(2, -10 * percentComplete) * Math.sin((percentComplete - period / PI2 * Math.asin(1 / amplitude)) * PI2 / period) + 1) * (endValue - startValue);
      }]);
  }
  function registerElasticInOut(name, amplitude, period) {
      registerEasing([name, function (percentComplete, startValue, endValue) {
          if (percentComplete === 0) {
              return startValue;
          }
          if (percentComplete === 1) {
              return endValue;
          }
          var s = period / PI2 * Math.asin(1 / amplitude);
          percentComplete = percentComplete * 2 - 1;
          return (percentComplete < 0 ? -0.5 * (amplitude * Math.pow(2, 10 * percentComplete) * Math.sin((percentComplete - s) * PI2 / period)) : amplitude * Math.pow(2, -10 * percentComplete) * Math.sin((percentComplete - s) * PI2 / period) * 0.5 + 1) * (endValue - startValue);
      }]);
  }
  registerElasticIn("easeInElastic", 1, 0.3);
  registerElasticOut("easeOutElastic", 1, 0.3);
  registerElasticInOut("easeInOutElastic", 1, 0.3 * 1.5);
  // TODO: Expose these as actions to register custom easings?

  // Project
  /**
   * Easing function that sets to the specified value immediately after the
   * animation starts.
   */
  function atStart(percentComplete, startValue, endValue) {
    return percentComplete === 0 ? startValue : endValue;
  }
  /**
   * Easing function that sets to the specified value while the animation is
   * running.
   */
  function during(percentComplete, startValue, endValue) {
    return percentComplete === 0 || percentComplete === 1 ? startValue : endValue;
  }
  /**
   * Easing function that sets to the specified value when the animation ends.
   */
  function atEnd(percentComplete, startValue, endValue) {
    return percentComplete === 1 ? endValue : startValue;
  }
  registerEasing(["at-start", atStart]);
  registerEasing(["during", during]);
  registerEasing(["at-end", atEnd]);

  // Project
  /**
   * Get/set the inner/outer dimension.
   */
  function getDimension(name, wantInner) {
      return function (element, propertyValue) {
          if (propertyValue === undefined) {
              return augmentDimension(element, name, wantInner) + "px";
          }
          setPropertyValue(element, name, parseFloat(propertyValue) - augmentDimension(element, name, wantInner) + "px");
      };
  }
  registerNormalization(["Element", "innerWidth", getDimension("width", true)]);
  registerNormalization(["Element", "innerHeight", getDimension("height", true)]);
  registerNormalization(["Element", "outerWidth", getDimension("width", false)]);
  registerNormalization(["Element", "outerHeight", getDimension("height", false)]);

  // Project
  // Constants
  var inlineRx = /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i,
      listItemRx = /^(li)$/i,
      tableRowRx = /^(tr)$/i,
      tableRx = /^(table)$/i,
      tableRowGroupRx = /^(tbody)$/i;
  function display(element, propertyValue) {
      var style = element.style;
      if (propertyValue === undefined) {
          return computePropertyValue(element, "display");
      }
      if (propertyValue === "auto") {
          var nodeName = element && element.nodeName,
              data = Data(element);
          if (inlineRx.test(nodeName)) {
              propertyValue = "inline";
          } else if (listItemRx.test(nodeName)) {
              propertyValue = "list-item";
          } else if (tableRowRx.test(nodeName)) {
              propertyValue = "table-row";
          } else if (tableRx.test(nodeName)) {
              propertyValue = "table";
          } else if (tableRowGroupRx.test(nodeName)) {
              propertyValue = "table-row-group";
          } else {
              // Default to "block" when no match is found.
              propertyValue = "block";
          }
          // IMPORTANT: We need to do this as getPropertyValue bypasses the
          // Normalisation when it exists in the cache.
          data.cache["display"] = propertyValue;
      }
      style.display = propertyValue;
  }
  registerNormalization(["Element", "display", display]);

  // Project
  function clientWidth(element, propertyValue) {
      if (propertyValue == null) {
          return element.clientWidth + "px";
      }
  }
  function scrollWidth(element, propertyValue) {
      if (propertyValue == null) {
          return element.scrollWidth + "px";
      }
  }
  function clientHeight(element, propertyValue) {
      if (propertyValue == null) {
          return element.clientHeight + "px";
      }
  }
  function scrollHeight(element, propertyValue) {
      if (propertyValue == null) {
          return element.scrollHeight + "px";
      }
  }
  function scroll(direction, end) {
      return function (element, propertyValue) {
          if (propertyValue == null) {
              // Make sure we have these values cached.
              getPropertyValue(element, "client" + direction, null, true);
              getPropertyValue(element, "scroll" + direction, null, true);
              return element["scroll" + end] + "px";
          }
          var value = parseFloat(propertyValue),
              unit = propertyValue.replace(String(value), "");
          switch (unit) {
              case "":
              case "px":
                  element["scroll" + end] = value;
                  break;
              case "%":
                  var client = parseFloat(getPropertyValue(element, "client" + direction)),
                      scrollValue = parseFloat(getPropertyValue(element, "scroll" + direction));
                  element["scroll" + end] = Math.max(0, scrollValue - client) * value / 100;
                  break;
          }
      };
  }
  registerNormalization(["HTMLElement", "scroll", scroll("Height", "Top"), false]);
  registerNormalization(["HTMLElement", "scrollTop", scroll("Height", "Top"), false]);
  registerNormalization(["HTMLElement", "scrollLeft", scroll("Width", "Left"), false]);
  registerNormalization(["HTMLElement", "scrollWidth", scrollWidth]);
  registerNormalization(["HTMLElement", "clientWidth", clientWidth]);
  registerNormalization(["HTMLElement", "scrollHeight", scrollHeight]);
  registerNormalization(["HTMLElement", "clientHeight", clientHeight]);

  // Project
  /**
   * An RegExp pattern for the following list of css words using
   * http://kemio.com.ar/tools/lst-trie-re.php to generate:
   *
   * blockSize
   * borderBottomLeftRadius
   * borderBottomRightRadius
   * borderBottomWidth
   * borderImageOutset
   * borderImageWidth
   * borderLeftWidth
   * borderRadius
   * borderRightWidth
   * borderSpacing
   * borderTopLeftRadius
   * borderTopRightRadius
   * borderTopWidth
   * borderWidth
   * bottom
   * columnGap
   * columnRuleWidth
   * columnWidth
   * flexBasis
   * fontSize
   * gridColumnGap
   * gridGap
   * gridRowGap
   * height
   * inlineSize
   * left
   * letterSpacing
   * margin
   * marginBottom
   * marginLeft
   * marginRight
   * marginTop
   * maxBlockSize
   * maxHeight
   * maxInlineSize
   * maxWidth
   * minBlockSize
   * minHeight
   * minInlineSize
   * minWidth
   * objectPosition
   * outlineOffset
   * outlineWidth
   * padding
   * paddingBottom
   * paddingLeft
   * paddingRight
   * paddingTop
   * perspective
   * right
   * shapeMargin
   * strokeDashoffset
   * strokeWidth
   * textIndent
   * top
   * transformOrigin
   * width
   * wordSpacing
   */
  // tslint:disable-next-line:max-line-length
  var rxAddPx = /^(b(lockSize|o(rder(Bottom(LeftRadius|RightRadius|Width)|Image(Outset|Width)|LeftWidth|R(adius|ightWidth)|Spacing|Top(LeftRadius|RightRadius|Width)|Width)|ttom))|column(Gap|RuleWidth|Width)|f(lexBasis|ontSize)|grid(ColumnGap|Gap|RowGap)|height|inlineSize|le(ft|tterSpacing)|m(a(rgin(Bottom|Left|Right|Top)|x(BlockSize|Height|InlineSize|Width))|in(BlockSize|Height|InlineSize|Width))|o(bjectPosition|utline(Offset|Width))|p(adding(Bottom|Left|Right|Top)|erspective)|right|s(hapeMargin|troke(Dashoffset|Width))|t(extIndent|op|ransformOrigin)|w(idth|ordSpacing))$/;
  /**
   * Return a Normalisation that can be used to set / get a prefixed style
   * property.
   */
  function getSetPrefixed(propertyName, unprefixed) {
      return function (element, propertyValue) {
          if (propertyValue === undefined) {
              return computePropertyValue(element, propertyName) || computePropertyValue(element, unprefixed);
          }
          element.style[propertyName] = element.style[unprefixed] = propertyValue;
      };
  }
  /**
   * Return a Normalisation that can be used to set / get a style property.
   */
  function getSetStyle(propertyName) {
      return function (element, propertyValue) {
          if (propertyValue === undefined) {
              return computePropertyValue(element, propertyName);
          }
          element.style[propertyName] = propertyValue;
      };
  }
  /**
   * Vendor prefixes. Chrome / Safari, Firefox, IE / Edge, Opera.
   */
  var rxVendors = /^(webkit|moz|ms|o)[A-Z]/,
      prefixElement = State.prefixElement;
  if (prefixElement) {
      for (var propertyName in prefixElement.style) {
          if (rxVendors.test(propertyName)) {
              var unprefixed = propertyName.replace(/^[a-z]+([A-Z])/, function ($, letter) {
                  return letter.toLowerCase();
              });
              {
                  var addUnit = rxAddPx.test(unprefixed) ? "px" : undefined;
                  registerNormalization(["Element", unprefixed, getSetPrefixed(propertyName, unprefixed), addUnit]);
              }
          } else if (!hasNormalization(["Element", propertyName])) {
              var _addUnit = rxAddPx.test(propertyName) ? "px" : undefined;
              registerNormalization(["Element", propertyName, getSetStyle(propertyName), _addUnit]);
          }
      }
  }

  // Project
  /**
   * Get/set an attribute.
   */
  function getAttribute(name) {
      return function (element, propertyValue) {
          if (propertyValue === undefined) {
              return element.getAttribute(name);
          }
          element.setAttribute(name, propertyValue);
      };
  }
  var base = document.createElement("div"),
      rxSubtype = /^SVG(.*)Element$/,
      rxElement = /Element$/;
  Object.getOwnPropertyNames(window).forEach(function (property) {
      var subtype = rxSubtype.exec(property);
      if (subtype && subtype[1] !== "SVG") {
          // Don't do SVGSVGElement.
          try {
              var element = subtype[1] ? document.createElementNS("http://www.w3.org/2000/svg", (subtype[1] || "svg").toLowerCase()) : document.createElement("svg");
              // tslint:disable-next-line:forin
              for (var attribute in element) {
                  // Although this isn't a tween without prototypes, we do
                  // want to get hold of all attributes and not just own ones.
                  var value = element[attribute];
                  if (isString(attribute) && !(attribute[0] === "o" && attribute[1] === "n") && attribute !== attribute.toUpperCase() && !rxElement.test(attribute) && !(attribute in base) && !isFunction(value)) {
                      // TODO: Should this all be set on the generic SVGElement, it would save space and time, but not as powerful
                      registerNormalization([property, attribute, getAttribute(attribute)]);
                  }
              }
          } catch (e) {
              console.error("VelocityJS: Error when trying to identify SVG attributes on " + property + ".", e);
          }
      }
  });

  // Project
  /**
   * Get/set the width or height.
   */
  function getDimension$1(name) {
      return function (element, propertyValue) {
          if (propertyValue === undefined) {
              // Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM.
              try {
                  return element.getBBox()[name] + "px";
              } catch (e) {
                  return "0px";
              }
          }
          element.setAttribute(name, propertyValue);
      };
  }
  registerNormalization(["SVGElement", "width", getDimension$1("width")]);
  registerNormalization(["SVGElement", "height", getDimension$1("height")]);

  // Project
  /**
   * A fake normalization used to allow the "tween" property easy access.
   */
  function getSetTween(element, propertyValue) {
      if (propertyValue === undefined) {
          return "";
      }
  }
  registerNormalization(["Element", "tween", getSetTween]);

  // Automatically generated
  var VERSION = "2.0.6";

  // Project
  var Velocity$$1 = Velocity$1;
  /**
   * These parts of Velocity absolutely must be included, even if they're unused!
   */
  var VelocityStatic;
  (function (VelocityStatic) {
      /**
       * Actions cannot be replaced if they are internal (hasOwnProperty is false
       * but they still exist). Otherwise they can be replaced by users.
       *
       * All external method calls should be using actions rather than sub-calls
       * of Velocity itself.
       */
      VelocityStatic.Actions = Actions;
      /**
       * Our known easing functions.
       */
      VelocityStatic.Easings = Easings;
      /**
       * The currently registered sequences.
       */
      VelocityStatic.Sequences = SequencesObject;
      /**
       * Current internal state of Velocity.
       */
      VelocityStatic.State = State; // tslint:disable-line:no-shadowed-variable
      /**
       * Velocity option defaults, which can be overriden by the user.
       */
      VelocityStatic.defaults = defaults$1;
      /**
       * Used to patch any object to allow Velocity chaining. In order to chain an
       * object must either be treatable as an array - with a <code>.length</code>
       * property, and each member a Node, or a Node directly.
       *
       * By default Velocity will try to patch <code>window</code>,
       * <code>jQuery</code>, <code>Zepto</code>, and several classes that return
       * Nodes or lists of Nodes.
       */
      VelocityStatic.patch = patch;
      /**
       * Set to true, 1 or 2 (most verbose) to output debug info to console.
       */
      VelocityStatic.debug = false;
      /**
       * In mock mode, all animations are forced to complete immediately upon the
       * next rAF tick. If there are further animations queued then they will each
       * take one single frame in turn. Loops and repeats will be disabled while
       * <code>mock = true</code>.
       */
      VelocityStatic.mock = false;
      /**
       * Save our version number somewhere visible.
       */
      VelocityStatic.version = VERSION;
      /**
       * Added as a fallback for "import {Velocity} from 'velocity-animate';".
       */
      VelocityStatic.Velocity = Velocity$1; // tslint:disable-line:no-shadowed-variable
  })(VelocityStatic || (VelocityStatic = {}));
  /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
  var IE = function () {
      if (document.documentMode) {
          return document.documentMode;
      } else {
          for (var i = 7; i > 4; i--) {
              var div = document.createElement("div");
              div.innerHTML = "<!" + "--" + "[if IE " + i + "]><span></span><![endif]-->";
              if (div.getElementsByTagName("span").length) {
                  div = null;
                  return i;
              }
          }
      }
      return undefined;
  }();
  /******************
   Unsupported
   ******************/
  if (IE <= 8) {
      throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");
  }
  /******************
   Frameworks
   ******************/
  if (window) {
      /*
       * Both jQuery and Zepto allow their $.fn object to be extended to allow
       * wrapped elements to be subjected to plugin calls. If either framework is
       * loaded, register a "velocity" extension pointing to Velocity's core
       * animate() method. Velocity also registers itself onto a global container
       * (window.jQuery || window.Zepto || window) so that certain features are
       * accessible beyond just a per-element scope. Accordingly, Velocity can
       * both act on wrapped DOM elements and stand alone for targeting raw DOM
       * elements.
       */
      var jQuery = window.jQuery,
          Zepto = window.Zepto;
      patch(window, true);
      patch(Element && Element.prototype);
      patch(NodeList && NodeList.prototype);
      patch(HTMLCollection && HTMLCollection.prototype);
      patch(jQuery, true);
      patch(jQuery && jQuery.fn);
      patch(Zepto, true);
      patch(Zepto && Zepto.fn);
  }
  // Make sure that the values within Velocity are read-only and upatchable.

  var _loop = function _loop(property) {
      if (VelocityStatic.hasOwnProperty(property)) {
          switch (typeof property === "undefined" ? "undefined" : _typeof(property)) {
              case "number":
              case "boolean":
                  defineProperty$1(Velocity$$1, property, {
                      get: function get$$1() {
                          return VelocityStatic[property];
                      },
                      set: function set$$1(value) {
                          VelocityStatic[property] = value;
                      }
                  }, true);
                  break;
              default:
                  defineProperty$1(Velocity$$1, property, VelocityStatic[property], true);
                  break;
          }
      }
  };

  for (var property in VelocityStatic) {
      _loop(property);
  }
  Object.freeze(Velocity$$1);

  // Project
  var rxPercents = /(\d*\.\d+|\d+\.?|from|to)/g;
  function expandSequence(animation, sequence) {
      var tweens = animation.tweens = Object.create(null),
          element = animation.element;
      for (var propertyName in sequence.tweens) {
          if (sequence.tweens.hasOwnProperty(propertyName)) {
              var fn = getNormalization(element, propertyName);
              if (!fn && propertyName !== "tween") {
                  if (Velocity$$1.debug) {
                      console.log("Skipping [" + propertyName + "] due to a lack of browser support.");
                  }
                  continue;
              }
              tweens[propertyName] = {
                  fn: fn,
                  sequence: sequence.tweens[propertyName]
              };
          }
      }
  }
  /**
   * Used to register a sequence. This should never be called by users
   * directly, instead it should be called via an action:<br/>
   * <code>Velocity("registerSequence", ""name", VelocitySequence);</code>
   */
  function registerSequence(args) {
      if (isPlainObject(args[0])) {
          for (var name in args[0]) {
              if (args[0].hasOwnProperty(name)) {
                  registerSequence([name, args[0][name]]);
              }
          }
      } else if (isString(args[0])) {
          var _name = args[0],
              sequence = args[1];
          if (!isString(_name)) {
              console.warn("VelocityJS: Trying to set 'registerSequence' name to an invalid value:", _name);
          } else if (!isPlainObject(sequence)) {
              console.warn("VelocityJS: Trying to set 'registerSequence' sequence to an invalid value:", _name, sequence);
          } else {
              if (SequencesObject[_name]) {
                  console.warn("VelocityJS: Replacing named sequence:", _name);
              }
              var percents = {},
                  steps = new Array(100),
                  properties = [],
                  sequenceList = SequencesObject[_name] = {},
                  duration = validateDuration(sequence.duration);
              sequenceList.tweens = {};
              if (isNumber(duration)) {
                  sequenceList.duration = duration;
              }
              for (var part in sequence) {
                  if (sequence.hasOwnProperty(part)) {
                      var keys = String(part).match(rxPercents);
                      if (keys) {
                          var _iteratorNormalCompletion = true;
                          var _didIteratorError = false;
                          var _iteratorError = undefined;

                          try {
                              for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                  var key = _step.value;

                                  var percent = key === "from" ? 0 : key === "to" ? 100 : parseFloat(key);
                                  if (percent < 0 || percent > 100) {
                                      console.warn("VelocityJS: Trying to use an invalid value as a percentage (0 <= n <= 100):", _name, percent);
                                  } else if (isNaN(percent)) {
                                      console.warn("VelocityJS: Trying to use an invalid number as a percentage:", _name, part, key);
                                  } else {
                                      if (!percents[String(percent)]) {
                                          percents[String(percent)] = [];
                                      }
                                      percents[String(percent)].push(part);
                                      for (var property in sequence[part]) {
                                          if (!properties.includes(property)) {
                                              properties.push(property);
                                          }
                                      }
                                  }
                              }
                          } catch (err) {
                              _didIteratorError = true;
                              _iteratorError = err;
                          } finally {
                              try {
                                  if (!_iteratorNormalCompletion && _iterator.return) {
                                      _iterator.return();
                                  }
                              } finally {
                                  if (_didIteratorError) {
                                      throw _iteratorError;
                                  }
                              }
                          }
                      }
                  }
              }
              var orderedPercents = Object.keys(percents).sort(function (a, b) {
                  var a1 = parseFloat(a),
                      b1 = parseFloat(b);
                  return a1 > b1 ? 1 : a1 < b1 ? -1 : 0;
              });
              orderedPercents.forEach(function (key) {
                  steps.push.apply(percents[key]);
              });
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                  for (var _iterator2 = properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                      var _property = _step2.value;

                      var parts = [],
                          propertyName = camelCase(_property);
                      var _iteratorNormalCompletion3 = true;
                      var _didIteratorError3 = false;
                      var _iteratorError3 = undefined;

                      try {
                          for (var _iterator3 = orderedPercents[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                              var _key = _step3.value;
                              var _iteratorNormalCompletion6 = true;
                              var _didIteratorError6 = false;
                              var _iteratorError6 = undefined;

                              try {
                                  for (var _iterator6 = percents[_key][Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                      var _value = _step6.value;

                                      var stepProperties = sequence[_value];
                                      if (stepProperties[propertyName]) {
                                          parts.push(isString(stepProperties[propertyName]) ? stepProperties[propertyName] : stepProperties[propertyName][0]);
                                      }
                                  }
                              } catch (err) {
                                  _didIteratorError6 = true;
                                  _iteratorError6 = err;
                              } finally {
                                  try {
                                      if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                          _iterator6.return();
                                      }
                                  } finally {
                                      if (_didIteratorError6) {
                                          throw _iteratorError6;
                                      }
                                  }
                              }
                          }
                      } catch (err) {
                          _didIteratorError3 = true;
                          _iteratorError3 = err;
                      } finally {
                          try {
                              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                  _iterator3.return();
                              }
                          } finally {
                              if (_didIteratorError3) {
                                  throw _iteratorError3;
                              }
                          }
                      }

                      if (parts.length) {
                          var realSequence = findPattern(parts, propertyName);
                          var index = 0;
                          if (realSequence) {
                              var _iteratorNormalCompletion4 = true;
                              var _didIteratorError4 = false;
                              var _iteratorError4 = undefined;

                              try {
                                  for (var _iterator4 = orderedPercents[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                      var _key2 = _step4.value;
                                      var _iteratorNormalCompletion5 = true;
                                      var _didIteratorError5 = false;
                                      var _iteratorError5 = undefined;

                                      try {
                                          for (var _iterator5 = percents[_key2][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                              var value = _step5.value;

                                              var originalProperty = sequence[value][propertyName];
                                              if (originalProperty) {
                                                  if (Array.isArray(originalProperty) && originalProperty.length > 1 && (isString(originalProperty[1]) || Array.isArray(originalProperty[1]))) {
                                                      realSequence[index].easing = validateEasing(originalProperty[1], sequenceList.duration || DEFAULT_DURATION);
                                                  }
                                                  realSequence[index++].percent = parseFloat(_key2) / 100;
                                              }
                                          }
                                      } catch (err) {
                                          _didIteratorError5 = true;
                                          _iteratorError5 = err;
                                      } finally {
                                          try {
                                              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                                  _iterator5.return();
                                              }
                                          } finally {
                                              if (_didIteratorError5) {
                                                  throw _iteratorError5;
                                              }
                                          }
                                      }
                                  }
                              } catch (err) {
                                  _didIteratorError4 = true;
                                  _iteratorError4 = err;
                              } finally {
                                  try {
                                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                          _iterator4.return();
                                      }
                                  } finally {
                                      if (_didIteratorError4) {
                                          throw _iteratorError4;
                                      }
                                  }
                              }

                              sequenceList.tweens[propertyName] = realSequence;
                          }
                      }
                  }
              } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                      }
                  } finally {
                      if (_didIteratorError2) {
                          throw _iteratorError2;
                      }
                  }
              }
          }
      }
  }
  registerAction(["registerSequence", registerSequence], true);

  // Project
  var globalPromise = void 0;
  try {
      globalPromise = Promise;
  } catch ( /**/_a) {/**/}
  var noPromiseOption = ", if that is deliberate then pass `promiseRejectEmpty:false` as an option";
  /**
   * Patch a VelocityResult with a Promise.
   */
  function patchPromise(promiseObject, result) {
      defineProperty$1(result, "promise", promiseObject);
      defineProperty$1(result, "then", promiseObject.then.bind(promiseObject));
      defineProperty$1(result, "catch", promiseObject.catch.bind(promiseObject));
      if (promiseObject.finally) {
          // Semi-standard
          defineProperty$1(result, "finally", promiseObject.finally.bind(promiseObject));
      }
  }
  /* tslint:enable:max-line-length */
  function Velocity$1() {
      var
      /**
       * A shortcut to the default options.
       */
      defaults$$1 = defaults$1,

      /**
       * Cache of the first argument - this is used often enough to be saved.
       */
      args0 = arguments.length <= 0 ? undefined : arguments[0],

      /**
       * To allow for expressive CoffeeScript code, Velocity supports an
       * alternative syntax in which "elements" (or "e"), "properties" (or
       * "p"), and "options" (or "o") objects are defined on a container
       * object that's passed in as Velocity's sole argument.
       *
       * Note: Some browsers automatically populate arguments with a
       * "properties" object. We detect it by checking for its default
       * "names" property.
       */
      // TODO: Confirm which browsers - if <=IE8 the we can drop completely
      syntacticSugar = isPlainObject(args0) && (args0.p || isPlainObject(args0.properties) && !args0.properties.names || isString(args0.properties));
      var
      /**
       *  When Velocity is called via the utility function (Velocity()),
       * elements are explicitly passed in as the first parameter. Thus,
       * argument positioning varies.
       */
      argumentIndex = 0,

      /**
       * The list of elements, extended with Promise and Velocity.
       */
      elements = void 0,

      /**
       * The properties being animated. This can be a string, in which case it
       * is either a function for these elements, or it is a "named" animation
       * sequence to use instead. Named sequences start with either "callout."
       * or "transition.". When used as a callout the values will be reset
       * after finishing. When used as a transtition then there is no special
       * handling after finishing.
       */
      propertiesMap = void 0,

      /**
       * Options supplied, this will be mapped and validated into
       * <code>options</code>.
       */
      optionsMap = void 0,

      /**
       * If called via a chain then this contains the <b>last</b> calls
       * animations. If this does not have a value then any access to the
       * element's animations needs to be to the currently-running ones.
       */
      animations = void 0,

      /**
       * The promise that is returned.
       */
      promise = void 0,

      // Used when the animation is finished
      resolver = void 0,

      // Used when there was an issue with one or more of the Velocity arguments
      rejecter = void 0;
      //console.log(`Velocity`, args)
      // First get the elements, and the animations connected to the last call if
      // this is chained.
      // TODO: Clean this up a bit
      // TODO: Throw error if the chain is called with elements as the first argument. isVelocityResult(this) && ( (isNode(arg0) || isWrapped(arg0)) && arg0 == this)
      if (isNode(this)) {
          // This is from a chain such as document.getElementById("").velocity(...)
          elements = [this];
      } else if (isWrapped(this)) {
          // This might be a chain from something else, but if chained from a
          // previous Velocity() call then grab the animations it's related to.
          elements = cloneArray(this);
          if (isVelocityResult(this)) {
              animations = this.velocity.animations;
          }
      } else if (syntacticSugar) {
          elements = cloneArray(args0.elements || args0.e);
          argumentIndex++;
      } else if (isNode(args0)) {
          elements = cloneArray([args0]);
          argumentIndex++;
      } else if (isWrapped(args0)) {
          elements = cloneArray(args0);
          argumentIndex++;
      }
      // Allow elements to be chained.
      if (elements) {
          defineProperty$1(elements, "velocity", Velocity$1.bind(elements));
          if (animations) {
              defineProperty$1(elements.velocity, "animations", animations);
          }
      }
      // Next get the propertiesMap and options.
      if (syntacticSugar) {
          propertiesMap = getValue(args0.properties, args0.p);
      } else {
          var _ref;

          // TODO: Should be possible to call Velocity("pauseAll") - currently not possible
          propertiesMap = (_ref = argumentIndex++, arguments.length <= _ref ? undefined : arguments[_ref]);
      }
      // Get any options map passed in as arguments first, expand any direct
      // options if possible.
      var isReverse = propertiesMap === "reverse",
          isAction = !isReverse && isString(propertiesMap),
          maybeSequence = isAction && SequencesObject[propertiesMap],
          opts = syntacticSugar ? getValue(args0.options, args0.o) : arguments.length <= argumentIndex ? undefined : arguments[argumentIndex];
      if (isPlainObject(opts)) {
          optionsMap = opts;
      }
      // Create the promise if supported and wanted.
      if (globalPromise && getValue(optionsMap && optionsMap.promise, defaults$$1.promise)) {
          promise = new globalPromise(function (resolve, reject) {
              rejecter = reject;
              // IMPORTANT:
              // If a resolver tries to run on a Promise then it will wait until
              // that Promise resolves - but in this case we're running on our own
              // Promise, so need to make sure it's not seen as one. Removing
              // these values for the duration of the resolve.
              // Due to being an async call, they should be back to "normal"
              // before the <code>.then()</code> function gets called.
              resolver = function resolver(result) {
                  if (isVelocityResult(result) && result.promise) {
                      delete result.then;
                      delete result.catch;
                      delete result.finally;
                      resolve(result);
                      patchPromise(result.promise, result);
                  } else {
                      resolve(result);
                  }
              };
          });
          if (elements) {
              patchPromise(promise, elements);
          }
      }
      if (promise) {
          var optionPromiseRejectEmpty = optionsMap && optionsMap.promiseRejectEmpty,
              promiseRejectEmpty = getValue(optionPromiseRejectEmpty, defaults$$1.promiseRejectEmpty);
          if (!elements && !isAction) {
              if (promiseRejectEmpty) {
                  rejecter("Velocity: No elements supplied" + (isBoolean(optionPromiseRejectEmpty) ? "" : noPromiseOption) + ". Aborting.");
              } else {
                  resolver();
              }
          } else if (!propertiesMap) {
              if (promiseRejectEmpty) {
                  rejecter("Velocity: No properties supplied" + (isBoolean(optionPromiseRejectEmpty) ? "" : noPromiseOption) + ". Aborting.");
              } else {
                  resolver();
              }
          }
      }
      if (!elements && !isAction || !propertiesMap) {
          return promise;
      }
      // NOTE: Can't use isAction here due to type inference - there are callbacks
      // between so the type isn't considered safe.
      if (isAction) {
          var actionArgs = [],
              promiseHandler = promise && {
              _promise: promise,
              _resolver: resolver,
              _rejecter: rejecter
          };
          while (argumentIndex < arguments.length) {
              var _ref2;

              actionArgs.push((_ref2 = argumentIndex++, arguments.length <= _ref2 ? undefined : arguments[_ref2]));
          }
          // Velocity's behavior is categorized into "actions". If a string is
          // passed in instead of a propertiesMap then that will call a function
          // to do something special to the animation linked.
          // There is one special case - "reverse" - which is handled differently,
          // by being stored on the animation and then expanded when the animation
          // starts.
          var action = propertiesMap.replace(/\..*$/, ""),
              callback = Actions[action];
          if (callback) {
              var result = callback(actionArgs, elements, promiseHandler, propertiesMap);
              if (result !== undefined) {
                  return result;
              }
              return elements || promise;
          } else if (!maybeSequence) {
              console.error("VelocityJS: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.");
              return;
          }
      }
      var hasValidDuration = void 0;
      if (isPlainObject(propertiesMap) || isReverse || maybeSequence) {
          /**
           * The options for this set of animations.
           */
          var options = {};
          var isSync = defaults$$1.sync;
          // Private options first - set as non-enumerable, and starting with an
          // underscore so we can filter them out.
          if (promise) {
              defineProperty$1(options, "_promise", promise);
              defineProperty$1(options, "_rejecter", rejecter);
              defineProperty$1(options, "_resolver", resolver);
          }
          defineProperty$1(options, "_ready", 0);
          defineProperty$1(options, "_started", 0);
          defineProperty$1(options, "_completed", 0);
          defineProperty$1(options, "_total", 0);
          // Now check the optionsMap
          if (isPlainObject(optionsMap)) {
              var validDuration = validateDuration(optionsMap.duration);
              hasValidDuration = validDuration !== undefined;
              options.duration = getValue(validDuration, defaults$$1.duration);
              options.delay = getValue(validateDelay(optionsMap.delay), defaults$$1.delay);
              // Need the extra fallback here in case it supplies an invalid
              // easing that we need to overrride with the default.
              options.easing = validateEasing(getValue(optionsMap.easing, defaults$$1.easing), options.duration) || validateEasing(defaults$$1.easing, options.duration);
              options.loop = getValue(validateLoop(optionsMap.loop), defaults$$1.loop);
              options.repeat = options.repeatAgain = getValue(validateRepeat(optionsMap.repeat), defaults$$1.repeat);
              if (optionsMap.speed != null) {
                  options.speed = getValue(validateSpeed(optionsMap.speed), 1);
              }
              if (isBoolean(optionsMap.promise)) {
                  options.promise = optionsMap.promise;
              }
              options.queue = getValue(validateQueue(optionsMap.queue), defaults$$1.queue);
              if (optionsMap.mobileHA && !State.isGingerbread) {
                  /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
                   on animating elements. HA is removed from the element at the completion of its animation. */
                  /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
                  /* Note: You can read more about the use of mobileHA in Velocity's documentation: velocity-animate/#mobileHA. */
                  options.mobileHA = true;
              }
              if (optionsMap.drag === true) {
                  options.drag = true;
              }
              if (isNumber(optionsMap.stagger) || isFunction(optionsMap.stagger)) {
                  options.stagger = optionsMap.stagger;
              }
              if (!isReverse) {
                  if (optionsMap["display"] != null) {
                      propertiesMap.display = optionsMap["display"];
                      console.error("Deprecated \"options.display\" used, this is now a property:", optionsMap["display"]);
                  }
                  if (optionsMap["visibility"] != null) {
                      propertiesMap.visibility = optionsMap["visibility"];
                      console.error("Deprecated \"options.visibility\" used, this is now a property:", optionsMap["visibility"]);
                  }
              }
              // TODO: Allow functional options for different options per element
              var optionsBegin = validateBegin(optionsMap.begin),
                  optionsComplete = validateComplete(optionsMap.complete),
                  optionsProgress = validateProgress(optionsMap.progress),
                  optionsSync = validateSync(optionsMap.sync);
              if (optionsBegin != null) {
                  options.begin = optionsBegin;
              }
              if (optionsComplete != null) {
                  options.complete = optionsComplete;
              }
              if (optionsProgress != null) {
                  options.progress = optionsProgress;
              }
              if (optionsSync != null) {
                  isSync = optionsSync;
              }
          } else if (!syntacticSugar) {
              // Expand any direct options if possible.
              var offset = 0;
              options.duration = validateDuration(arguments.length <= argumentIndex ? undefined : arguments[argumentIndex], true);
              if (options.duration === undefined) {
                  options.duration = defaults$$1.duration;
              } else {
                  hasValidDuration = true;
                  offset++;
              }
              if (!isFunction(arguments.length <= argumentIndex + offset ? undefined : arguments[argumentIndex + offset])) {
                  // Despite coming before Complete, we can't pass a fn easing
                  var easing = validateEasing(arguments.length <= argumentIndex + offset ? undefined : arguments[argumentIndex + offset], getValue(options && validateDuration(options.duration), defaults$$1.duration), true);
                  if (easing !== undefined) {
                      offset++;
                      options.easing = easing;
                  }
              }
              var complete = validateComplete(arguments.length <= argumentIndex + offset ? undefined : arguments[argumentIndex + offset], true);
              if (complete !== undefined) {
                  options.complete = complete;
              }
              options.delay = defaults$$1.delay;
              options.loop = defaults$$1.loop;
              options.repeat = options.repeatAgain = defaults$$1.repeat;
          }
          if (isReverse && options.queue === false) {
              throw new Error("VelocityJS: Cannot reverse a queue:false animation.");
          }
          if (!hasValidDuration && maybeSequence && maybeSequence.duration) {
              options.duration = maybeSequence.duration;
          }
          // When a set of elements is targeted by a Velocity call, the set is
          // broken up and each element has the current Velocity call individually
          // queued onto it. In this way, each element's existing queue is
          // respected; some elements may already be animating and accordingly
          // should not have this current Velocity call triggered immediately
          // unless the sync:true option is used.
          var rootAnimation = {
              options: options,
              elements: elements,
              _prev: undefined,
              _next: undefined,
              _flags: isSync ? 32 /* SYNC */ : 0,
              percentComplete: 0,
              ellapsedTime: 0,
              timeStart: 0
          };
          animations = [];
          for (var index = 0; index < elements.length; index++) {
              var element = elements[index];
              var flags = 0;
              if (isNode(element)) {
                  // TODO: This needs to check for valid animation targets, not just Elements
                  if (isReverse) {
                      var lastAnimation = Data(element).lastAnimationList[options.queue];
                      propertiesMap = lastAnimation && lastAnimation.tweens;
                      if (!propertiesMap) {
                          console.error("VelocityJS: Attempting to reverse an animation on an element with no previous animation:", element);
                          continue;
                      }
                      flags |= 64 /* REVERSE */ & ~(lastAnimation._flags & 64 /* REVERSE */); // tslint:disable-line:no-bitwise
                  }
                  var animation = Object.assign({}, rootAnimation, { element: element, _flags: rootAnimation._flags | flags });
                  options._total++;
                  animations.push(animation);
                  if (options.stagger) {
                      if (isFunction(options.stagger)) {
                          var num = optionCallback(options.stagger, element, index, elements.length, elements, "stagger");
                          if (isNumber(num)) {
                              animation.delay = options.delay + num;
                          }
                      } else {
                          animation.delay = options.delay + options.stagger * index;
                      }
                  }
                  if (options.drag) {
                      animation.duration = options.duration - options.duration * Math.max(1 - (index + 1) / elements.length, 0.75);
                  }
                  if (maybeSequence) {
                      expandSequence(animation, maybeSequence);
                  } else if (isReverse) {
                      // In this case we're using the previous animation, so
                      // it will be expanded correctly when that one runs.
                      animation.tweens = propertiesMap;
                  } else {
                      animation.tweens = Object.create(null);
                      expandProperties(animation, propertiesMap);
                  }
                  queue$1(element, animation, options.queue);
              }
          }
          if (State.isTicking === false) {
              // If the animation tick isn't running, start it. (Velocity shuts it
              // off when there are no active calls to process.)
              tick(false);
          }
          if (animations) {
              defineProperty$1(elements.velocity, "animations", animations);
          }
      }
      /***************
       Chaining
       ***************/
      /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
      return elements || promise;
  }
  /**
   * Call an option callback in a try/catch block and report an error if needed.
   */
  function optionCallback(fn, element, index, length, elements, option) {
      try {
          return fn.call(element, index, length, elements, option);
      } catch (e) {
          console.error("VelocityJS: Exception when calling '" + option + "' callback:", e);
      }
  }

  // Project
  /**
   * Used to patch any object to allow Velocity chaining. In order to chain an
   * object must either be treatable as an array - with a <code>.length</code>
   * property, and each member a Node, or a Node directly.
   *
   * By default Velocity will try to patch <code>window</code>,
   * <code>jQuery</code>, <code>Zepto</code>, and several classes that return
   * Nodes or lists of Nodes.
   */
  function patch(proto, global) {
      try {
          defineProperty$1(proto, (global ? "V" : "v") + "elocity", Velocity$1);
      } catch (e) {
          console.warn("VelocityJS: Error when trying to add prototype.", e);
      }
  }

  // Project
  var Velocity$2 = Velocity$1;
  /**
   * These parts of Velocity absolutely must be included, even if they're unused!
   */
  var VelocityStatic$1;
  (function (VelocityStatic) {
      /**
       * Actions cannot be replaced if they are internal (hasOwnProperty is false
       * but they still exist). Otherwise they can be replaced by users.
       *
       * All external method calls should be using actions rather than sub-calls
       * of Velocity itself.
       */
      VelocityStatic.Actions = Actions;
      /**
       * Our known easing functions.
       */
      VelocityStatic.Easings = Easings;
      /**
       * The currently registered sequences.
       */
      VelocityStatic.Sequences = SequencesObject;
      /**
       * Current internal state of Velocity.
       */
      VelocityStatic.State = State; // tslint:disable-line:no-shadowed-variable
      /**
       * Velocity option defaults, which can be overriden by the user.
       */
      VelocityStatic.defaults = defaults$1;
      /**
       * Used to patch any object to allow Velocity chaining. In order to chain an
       * object must either be treatable as an array - with a <code>.length</code>
       * property, and each member a Node, or a Node directly.
       *
       * By default Velocity will try to patch <code>window</code>,
       * <code>jQuery</code>, <code>Zepto</code>, and several classes that return
       * Nodes or lists of Nodes.
       */
      VelocityStatic.patch = patch;
      /**
       * Set to true, 1 or 2 (most verbose) to output debug info to console.
       */
      VelocityStatic.debug = false;
      /**
       * In mock mode, all animations are forced to complete immediately upon the
       * next rAF tick. If there are further animations queued then they will each
       * take one single frame in turn. Loops and repeats will be disabled while
       * <code>mock = true</code>.
       */
      VelocityStatic.mock = false;
      /**
       * Save our version number somewhere visible.
       */
      VelocityStatic.version = VERSION;
      /**
       * Added as a fallback for "import {Velocity} from 'velocity-animate';".
       */
      VelocityStatic.Velocity = Velocity$1; // tslint:disable-line:no-shadowed-variable
  })(VelocityStatic$1 || (VelocityStatic$1 = {}));
  /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
  var IE$1 = function () {
      if (document.documentMode) {
          return document.documentMode;
      } else {
          for (var i = 7; i > 4; i--) {
              var div = document.createElement("div");
              div.innerHTML = "<!" + "--" + "[if IE " + i + "]><span></span><![endif]-->";
              if (div.getElementsByTagName("span").length) {
                  div = null;
                  return i;
              }
          }
      }
      return undefined;
  }();
  /******************
   Unsupported
   ******************/
  if (IE$1 <= 8) {
      throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");
  }
  /******************
   Frameworks
   ******************/
  if (window) {
      /*
       * Both jQuery and Zepto allow their $.fn object to be extended to allow
       * wrapped elements to be subjected to plugin calls. If either framework is
       * loaded, register a "velocity" extension pointing to Velocity's core
       * animate() method. Velocity also registers itself onto a global container
       * (window.jQuery || window.Zepto || window) so that certain features are
       * accessible beyond just a per-element scope. Accordingly, Velocity can
       * both act on wrapped DOM elements and stand alone for targeting raw DOM
       * elements.
       */
      var jQuery$1 = window.jQuery,
          Zepto$1 = window.Zepto;
      patch(window, true);
      patch(Element && Element.prototype);
      patch(NodeList && NodeList.prototype);
      patch(HTMLCollection && HTMLCollection.prototype);
      patch(jQuery$1, true);
      patch(jQuery$1 && jQuery$1.fn);
      patch(Zepto$1, true);
      patch(Zepto$1 && Zepto$1.fn);
  }
  // Make sure that the values within Velocity are read-only and upatchable.

  var _loop$1 = function _loop(property) {
      if (VelocityStatic$1.hasOwnProperty(property)) {
          switch (typeof property === "undefined" ? "undefined" : _typeof(property)) {
              case "number":
              case "boolean":
                  defineProperty$1(Velocity$2, property, {
                      get: function get$$1() {
                          return VelocityStatic$1[property];
                      },
                      set: function set$$1(value) {
                          VelocityStatic$1[property] = value;
                      }
                  }, true);
                  break;
              default:
                  defineProperty$1(Velocity$2, property, VelocityStatic$1[property], true);
                  break;
          }
      }
  };

  for (var property$1 in VelocityStatic$1) {
      _loop$1(property$1);
  }
  Object.freeze(Velocity$2);

  return Velocity$2;

})));
//# sourceMappingURL=velocity.js.map
