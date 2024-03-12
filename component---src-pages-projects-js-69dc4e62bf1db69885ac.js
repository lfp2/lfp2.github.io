"use strict";(self.webpackChunklfpaganini_gatsby_site=self.webpackChunklfpaganini_gatsby_site||[]).push([[429],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),l=new RegExp(i.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,l=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return x},P:function(){return k},S:function(){return F},_:function(){return l},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(6540),n=(a(2729),a(5556)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=l(e,f);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],k=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:i().object.isRequired,alt:S},R=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],j=new Set;let I,T;const O=function(e){let{as:t="div",image:n,style:i,backgroundColor:d,className:u,class:p,onStartLoad:g,onLoad:m,onError:h}=e,f=l(e,R);const{width:y,height:b,layout:w}=n,v=c(y,b,w),{style:k,className:x}=v,E=l(v,N),L=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(u=p);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{I||(I=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(C);if(T&&j.has(C))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;L.current&&(L.current.innerHTML=a(s({isLoading:!0,isLoaded:j.has(C),image:n},f)),j.has(C)||(t=requestAnimationFrame((()=>{L.current&&(r=l(L.current,C,j,i,g,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(C)&&T&&(L.current.innerHTML=T(s({isLoading:j.has(C),isLoaded:j.has(C),image:n},f)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},E,{style:s({},k,i,{backgroundColor:d}),className:x+(u?" "+u:""),ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));q.propTypes=_,q.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:i}=t,o=l(t,P);return i&&console.warn(i),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const A=z((function(e){let{as:t="div",className:a,class:n,style:i,image:o,loading:p="lazy",imgClassName:g,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:b}=e,w=l(e,E);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=s({objectFit:y,objectPosition:b,backgroundColor:f},h);const{width:v,height:S,layout:_,images:R,placeholder:N,backgroundColor:j}=o,I=c(v,S,_),{style:T,className:O}=I,q=l(I,L),P={fallback:void 0,sources:[]};return R.fallback&&(P.fallback=s({},R.fallback,{srcSet:R.fallback.srcSet?C(R.fallback.srcSet):void 0})),R.sources&&(P.sources=R.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,s({},q,{style:s({},T,i,{backgroundColor:f}),className:O+(a?" "+a:"")}),r.createElement(m,{layout:_,width:v,height:S},r.createElement(k,s({},u(N,!1,_,v,S,j,y,b))),r.createElement(x,s({"data-gatsby-image-ssr":"",className:g},w,d("eager"===p,!1,P,p,h)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:S,width:W,height:W,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=M;const F=z(q);F.displayName="StaticImage",F.propTypes=M},3049:function(e,t,a){a.r(t);var r=a(6540),n=a(4715),i=a(2532);const s=n.default.div.withConfig({displayName:"projects__Square",componentId:"sc-rf8uck-0"})(["min-width:200px;max-width:500px;min-height:200px;display:flex;flex-wrap:wrap;flex-direction:column;background-color:",";box-shadow:rgba(0,0,0,0.08) 0px 4px 12px;"],(e=>{let{theme:t}=e;return t.background})),l=n.default.p.withConfig({displayName:"projects__Title",componentId:"sc-rf8uck-1"})(["flex:2;font-weight:bold;"]),o=n.default.p.withConfig({displayName:"projects__Description",componentId:"sc-rf8uck-2"})(["flex:1;margin:6px 12px 6px 12px;text-align:justify;"]);t.default=()=>r.createElement(r.Fragment,null,r.createElement("h1",null,"Projects"),r.createElement(s,null,r.createElement(i.S,{src:"../images/hack_grrrl.jpg",maxWidth:400,aspectRatio:21/9,quality:100,__imageData:a(5635)}),r.createElement(l,null,"Hack GRRRL"),r.createElement(o,null,"Hack GRRRL is a women-focused hackathon, an time-bounded event with duration between 24 to 48 hours, where participants are part of multidisciplinary teams and create a tech solution for a problem. I co-founded and organized the first Hack GRRRL in Recife with 231 enrollments and 26 participants in 2019. We achieved 55 participants on the online version in 2021, where all the groups finished the hackathon with an MVP."),r.createElement(o,null,"Learn more about Hack GRRRL ",r.createElement("a",{href:"https://hackgrrrl.com/",target:"_blank",rel:"noreferrer external"},"here."))))},5635:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/772139d166036c6b4398255c3539b165/d6ff6/hack_grrrl.jpg","srcSet":"/static/772139d166036c6b4398255c3539b165/fd881/hack_grrrl.jpg 1296w,\\n/static/772139d166036c6b4398255c3539b165/ff365/hack_grrrl.jpg 2592w,\\n/static/772139d166036c6b4398255c3539b165/d6ff6/hack_grrrl.jpg 5184w","sizes":"(min-width: 5184px) 5184px, 100vw"},"sources":[{"srcSet":"/static/772139d166036c6b4398255c3539b165/f0289/hack_grrrl.webp 1296w,\\n/static/772139d166036c6b4398255c3539b165/f2333/hack_grrrl.webp 2592w,\\n/static/772139d166036c6b4398255c3539b165/1d0a9/hack_grrrl.webp 5184w","type":"image/webp","sizes":"(min-width: 5184px) 5184px, 100vw"}]},"width":5184,"height":2222}')}}]);
//# sourceMappingURL=component---src-pages-projects-js-69dc4e62bf1db69885ac.js.map