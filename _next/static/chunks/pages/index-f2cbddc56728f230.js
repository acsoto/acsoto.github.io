(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9329)}])},4080:function(t,e,n){"use strict";var r=n(7320);e.Z=function(t){var e=t.children;return e?(0,r.BX)("div",{className:"inline-flex w-full items-center justify-center",children:[(0,r.tZ)("hr",{className:"my-5 h-px w-full border-0 bg-gray-200 dark:bg-gray-700"}),(0,r.tZ)("span",{className:"absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white",children:(0,r.tZ)("div",{className:"text-xl font-bold text-gray-500",children:e})})]}):(0,r.tZ)("hr",{className:"my-5 h-px border-0 bg-gray-200 dark:bg-gray-700"})}},4854:function(t,e,n){"use strict";var r=n(7320),s=n(7233),i=n(6232);e.Z=function(t){var e=t.post,n=e.slug,a=e.date,o=e.title,u=e.summary,l=e.tags,c=e.image;return(0,r.tZ)(s.Z,{href:"/blog/".concat(n),children:(0,r.BX)("article",{className:"mx-auto overflow-hidden rounded-xl shadow-md hover:bg-gray-100 dark:hover:bg-gray-800",children:[(0,r.tZ)("img",{src:c,className:"aspect-video w-full object-cover",alt:""}),(0,r.BX)("div",{className:"p-3",children:[(0,r.tZ)("h2",{className:"text-xl font-bold",children:o||n}),(0,r.tZ)("section",{className:"text-gray-500",children:(0,r.tZ)("p",{children:u})}),(0,r.tZ)("span",{className:"text-sm text-gray-600",children:(0,r.tZ)("time",{dateTime:a,children:(0,i.Z)(a)})}),(0,r.tZ)("p",{className:"mt-3 flex flex-row space-x-3",children:l&&l.map((function(t){return(0,r.tZ)("div",{className:"rounded-md border-2 bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text px-2 text-sm font-bold text-transparent",children:t},t)}))})]})]})})}},9831:function(t,e,n){"use strict";n.d(e,{TQ:function(){return l},$t:function(){return c},Uy:function(){return p}});var r=n(7320),s=n(9008),i=n(1163),a=n(1576),o=n.n(a),u=function(t){var e=t.title,n=t.description,a=t.ogType,u=t.ogImage,l=t.twImage,c=t.canonicalUrl,p=(0,i.useRouter)();return(0,r.BX)(s.default,{children:[(0,r.tZ)("title",{children:e}),(0,r.tZ)("meta",{name:"robots",content:"follow, index"}),(0,r.tZ)("meta",{name:"description",content:n}),(0,r.tZ)("meta",{property:"og:url",content:"".concat(o().siteUrl).concat(p.asPath)}),(0,r.tZ)("meta",{property:"og:type",content:a}),(0,r.tZ)("meta",{property:"og:site_name",content:o().title}),(0,r.tZ)("meta",{property:"og:description",content:n}),(0,r.tZ)("meta",{property:"og:title",content:e}),"Array"===u.constructor.name?u.map((function(t){var e=t.url;return(0,r.tZ)("meta",{property:"og:image",content:e},e)})):(0,r.tZ)("meta",{property:"og:image",content:u},u),(0,r.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.tZ)("meta",{name:"twitter:site",content:o().twitter}),(0,r.tZ)("meta",{name:"twitter:title",content:e}),(0,r.tZ)("meta",{name:"twitter:description",content:n}),(0,r.tZ)("meta",{name:"twitter:image",content:l}),(0,r.tZ)("link",{rel:"canonical",href:c||"".concat(o().siteUrl).concat(p.asPath)})]})},l=function(t){var e=t.title,n=t.description,s=o().siteUrl+o().socialBanner,i=o().siteUrl+o().socialBanner;return(0,r.tZ)(u,{title:e,description:n,ogType:"website",ogImage:s,twImage:i})},c=function(t){var e=t.title,n=t.description,a=o().siteUrl+o().socialBanner,l=o().siteUrl+o().socialBanner,c=(0,i.useRouter)();return(0,r.BX)(r.HY,{children:[(0,r.tZ)(u,{title:e,description:n,ogType:"website",ogImage:a,twImage:l}),(0,r.tZ)(s.default,{children:(0,r.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(n," - RSS feed"),href:"".concat(o().siteUrl).concat(c.asPath,"/feed.xml")})})]})},p=function(t){var e=t.authorDetails,n=t.title,a=t.summary,l=t.date,c=t.lastmod,p=t.url,h=t.images,d=void 0===h?[]:h,f=t.canonicalUrl,m=((0,i.useRouter)(),new Date(l).toISOString()),y=new Date(c||l).toISOString(),g=(0===d.length?[o().socialBanner]:"string"===typeof d?[d]:d).map((function(t){return{"@type":"ImageObject",url:t.includes("http")?t:o().siteUrl+t}})),b={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":p},headline:n,image:g,datePublished:m,dateModified:y,author:e?e.map((function(t){return{"@type":"Person",name:t.name}})):{"@type":"Person",name:o().author},publisher:{"@type":"Organization",name:o().author,logo:{"@type":"ImageObject",url:"".concat(o().siteUrl).concat(o().siteLogo)}},description:a},v=g[0].url;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(u,{title:n,description:a,ogType:"article",ogImage:g,twImage:v,canonicalUrl:f}),(0,r.BX)(s.default,{children:[l&&(0,r.tZ)("meta",{property:"article:published_time",content:m}),c&&(0,r.tZ)("meta",{property:"article:modified_time",content:y}),(0,r.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(b,null,2)}})]})]})}},6232:function(t,e,n){"use strict";var r=n(1576),s=n.n(r);e.Z=function(t){return new Date(t).toLocaleDateString(s().locale,{year:"numeric",month:"long",day:"numeric"})}},9329:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return m},default:function(){return y}});var r=n(7320),s=n(7233),i=n(9831),a=n(1576),o=n.n(a),u=n(4854),l=n(1720),c=n(3614),p=n.n(c),h=n(4844),d=function(){var t=l.default.useRef(null),e=l.default.useRef(null);return l.default.useEffect((function(){return e.current=new(p())(t.current,{strings:["I was raised in Alxa, Inner Mongolia.","I like \ud83c\udfca\u200d\u2642\ufe0f / \ud83c\udfc3 / \ud83c\udff8.","I like \u9032\u6483\u306e\u5de8\u4eba.","I like Minecraft.","I like LOL \ud83c\udfae.","I like J-POP/Chinese folk music \ud83c\udfb5.","..."],typeSpeed:50,backSpeed:50,loop:!0}),function(){e.current.destroy()}}),[]),(0,r.BX)(r.HY,{children:[(0,r.tZ)("h1",{className:"bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-7xl font-extrabold text-transparent",children:"Hi Friends,"}),(0,r.BX)("p",{className:"my-3 leading-6 text-gray-500 lg:w-3/4",children:["Welcome! I\u2019m ",(0,r.tZ)("b",{children:"Zhou Zihang"}),". \ud83e\udd73",(0,r.tZ)("br",{}),"SOTO is a convenient way to refer to me on social media.",(0,r.tZ)("br",{}),"This is a place where I share my life, thoughts, and other stuff that might be interesting.",(0,r.tZ)("br",{}),(0,r.tZ)("br",{}),"I am now living in China \ud83c\udde8\ud83c\uddf3 and am a senior at Beihang University, studying computer science and technology, and I plan to go abroad next year for my master's degree.",(0,r.tZ)("br",{}),(0,r.tZ)("br",{}),"I am running a Minecraft server from 2014 to now, which is probably the origin of my interest in programming. If you are interested, feel free to type"," ",(0,r.tZ)("a",{className:"text-blue-300 hover:text-blue-400",href:"https://www.mcac.cc/",children:"mcac.cc"})," ","in Minecraft and have fun.",(0,r.tZ)("br",{}),(0,r.tZ)("br",{}),"I have a Shiba Inu \ud83d\udc36 named doudou. You can see him"," ",(0,r.tZ)("a",{className:"text-blue-300 hover:text-blue-400",href:"https://www.instagram.com/puppydoudou/",children:"here"}),".",(0,r.tZ)("br",{}),(0,r.tZ)("br",{}),(0,r.BX)("div",{className:"type-wrap",children:[(0,r.tZ)("span",{style:{whiteSpace:"pre"},ref:t}),(0,r.tZ)("br",{})]}),(0,r.tZ)("br",{}),"Happy reading!",(0,r.BX)("div",{className:"flex flex-row gap-2",children:[(0,r.tZ)("span",{children:"Contact me:"}),(0,r.tZ)(h.Z,{kind:"instagram",href:o().instagram,size:"6"}),(0,r.tZ)(h.Z,{kind:"mail",href:"mailto:".concat(o().email),size:"6"}),(0,r.tZ)(h.Z,{kind:"github",href:o().github,size:"6"}),(0,r.tZ)("span",{children:"RSS feed:"}),(0,r.tZ)(h.Z,{kind:"rss",href:"/feed.xml",size:"6"})]})]})]})},f=n(4080),m=!0;function y(t){var e=t.posts;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(i.TQ,{title:o().title,description:o().description}),(0,r.tZ)(d,{}),(0,r.tZ)("h1",{className:"mt-10 text-2xl font-bold",children:"Recent Posts"}),(0,r.tZ)(f.Z,{}),(0,r.tZ)("ul",{className:"grid gap-6 lg:grid-cols-2",style:{listStyle:"none"},children:e.slice(0,10).map((function(t){var e=t.slug;return(0,r.tZ)("li",{children:(0,r.tZ)(u.Z,{post:t})},e)}))}),e.length>10&&(0,r.tZ)("div",{className:"my-4 flex justify-center",children:(0,r.tZ)(s.Z,{href:"/archive",className:"text-soto-100 hover:text-soto-200","aria-label":"More",children:"More \u2192"})})]})}},3614:function(t){var e;e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(1),i=n(3),a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s.initializer.load(this,n,e),this.begin()}return r(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),s=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=i.htmlParser.typeHtmlChars(t,e,n);var r=0,a=t.substr(e);if("^"===a.charAt(0)&&/^\^\d+/.test(a)){var o=1;o+=(a=/\d+/.exec(a)[0]).length,r=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+o),n.toggleBlinking(!0)}if("`"===a.charAt(0)){for(;"`"!==t.substr(e+s).charAt(0)&&(s++,!(e+s>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+s),c=t.substring(e+s+1);t=u+l+c,s--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,s),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var r=t.substr(0,e);this.replaceText(r),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=i.htmlParser.backSpaceHtmlChars(t,e,n);var r=t.substr(0,e);if(n.replaceText(r),n.smartBackspace){var s=n.strings[n.arrayPos+1];s&&r===s.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),r)}else this.setPauseStatus(t,e,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=a,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(2),o=(r=a)&&r.__esModule?r:{default:r},u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"load",value:function(t,e,n){if(t.el="string"===typeof n?document.querySelector(n):n,t.options=s({},o.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"===typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var r=Array.prototype.slice.apply(t.stringsElement.children),i=r.length;if(i)for(var a=0;a<i;a+=1){var u=r[a];t.strings.push(u.innerHTML.trim())}}for(var a in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[a]=a;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var r="";t.showCursor&&(r+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(r+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=r,document.body.appendChild(n))}}}]),t}();e.default=u;var l=new u;e.initializer=l},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var s="";for(s="<"===r?">":";";t.substr(e+1).charAt(0)!==s&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if(">"===r||";"===r){var s="";for(s=">"===r?"<":"&";t.substr(e-1).charAt(0)!==s&&!(--e<0););e--}return e}}]),t}();e.default=r;var s=new r;e.htmlParser=s}])},t.exports=e()}},function(t){t.O(0,[888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);