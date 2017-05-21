/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-objectfit-svg-touchevents-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var f in y)if(y.hasOwnProperty(f)){if(e=[],n=y[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?w.className.baseVal=n:w.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var s,f,l,u,c="modernizr",p=i("div"),d=a();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:c+(r+1),p.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+c,(d.fake?d:p).appendChild(s),d.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(d)),f=t(p,e),d.fake?(d.parentNode.removeChild(d),w.style.overflow=u,w.offsetHeight):p.parentNode.removeChild(p),!!f}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return!!~(""+e).indexOf(n)}function c(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?c(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,s){function a(){c&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var c,p,d,v,h,g=["modernizr","tspan","samp"];!N.style&&g.length;)c=!0,N.modElem=i(g.shift()),N.style=N.modElem.style;for(d=e.length,p=0;d>p;p++)if(v=e[p],h=N.style[v],u(v,"-")&&(v=l(v)),N.style[v]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?v:!0;try{N.style[v]=o}catch(y){}if(N.style[v]!=h)return a(),"pfx"==n?v:!0}return a(),!1}function h(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,s):(a=(e+" "+j.join(i+" ")+i).split(" "),p(a,n,t))}var g=[],y=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var w=n.documentElement,_="svg"===w.nodeName.toLowerCase(),S=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=S;var x=C.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");x(r,function(e){t=9===e.offsetTop})}return t});var b="Moz O ms Webkit",E=C._config.usePrefixes?b.split(" "):[];C._cssomPrefixes=E;var T=function(n){var r,o=S.length,s=e.CSSRule;if("undefined"==typeof s)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+n;for(var i=0;o>i;i++){var a=S[i],f=a.toUpperCase()+"_"+r;if(f in s)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=T;var j=C._config.usePrefixes?b.toLowerCase().split(" "):[];C._domPrefixes=j;var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var N={style:z.elem.style};Modernizr._q.unshift(function(){delete N.style}),C.testAllProps=h;var P=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?T(e):(-1!=e.indexOf("-")&&(e=l(e)),n?h(e,n,t):h(e,"pfx"))};Modernizr.addTest("objectfit",!!P("objectFit"),{aliases:["object-fit"]}),o(),s(g),delete C.addTest,delete C.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);