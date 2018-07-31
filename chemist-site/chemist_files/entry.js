// Copyright 2008-2016 Monetate, Inc.
// 2016-10-12T18:50:19Z t1476293139 entry_referrer.js
(function(){var g=void 0,h=!0,i=null,k=!1,l=this;function m(a){for(var a=a.split("."),b=l,c;a.length&&(c=a.shift());)if(b[c]!=i)b=b[c];else return i;return b}function n(a,b){var c=a.split("."),d=l;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==g?d[e]=b:d=d[e]?d[e]:d[e]={}};var p=[];function r(a,b){var c=s(a,b);n("monetate."+a,c);return c}function s(a,b){var c=m("monetate."+a)||b;"undefined"==typeof c&&(c={});return c};var t="0",u="m-int1.walgreens.com",w="!!!",x="m-int1.walgreens.com!!!m-perf.walgreens.com!!!walgreens.com".split(w),t=t+"",u=u+"",w=w+"";var aa={"~":h,"!":h,"*":h,"(":h,")":h,"-":h,_:h,".":h,",":h,":":h,"@":h,$:h,"'":h,"/":h};function ba(a){if(/^[A-Za-z0-9_\-]*$/.test(a))return a;a=a.replace(/([^A-Za-z0-9_\-])/g,function(a,c){return aa[c]?c:encodeURIComponent(c)});return a.replace(/%20/g,"+")};function y(a){for(var b=(document.cookie||"").split(/\s*;\s*/),c=0,d=b.length;c<d;c++){var e=b[c],f=e.indexOf("=");if(-1!=f&&a===e.substring(0,f))return unescape(e.substring(f+1))}return i}function z(a,b,c){var d=u;document.cookie=a+"="+ba(b)+"; "+(d&&d.length?"domain="+d+"; ":"")+"path=/; "+(c?"expires="+(new Date((new Date).getTime()+c)).toGMTString()+"; ":"")}
function A(){var a=y("mt.v");if(!a||!(64>a.length))a="2."+Math.floor(2147483647*Math.random())+"."+(new Date).getTime(),z("mt.v",a,15768E7);return a};function B(){return"https:"==document.location.protocol?"https://sb.monetate.net":"http://b.monetate.net"};var ca=r("rp",[]);n("monetate.rph",function(a,b){ca.push({data:a,callback:b})});function C(a){var b=s("rph");b&&b(a,g)}function D(a,b){a.e=a.e||[];var c;a:{c=a.e;for(var d=c.length,e=0;e<d;++e)if(c[e]===b){c=h;break a}c=k}c||a.e.push(b)};function da(a){var b=document.createElement("script");b.type="text/javascript";b.src=a;b.charset="utf-8";return b}function ea(a){var b=document.getElementsByTagName("script")[0],a=da(a);a.async=h;b.parentNode.insertBefore(a,b);return a};function E(a){a instanceof Array&&(a=a.join(""));a=Error(a||"");a.name="mtAssert";throw a;};var F=r("p",{c:k,keys:{},ops:[],admits:{}});
function fa(){var a=ga;return function(){var b=s("preview",-1),c=G("preview","mt.ps");if(-1!=b&&c=="cp"+b.cp)a:{b=b.name;for(c=0;c<F.ops.length;c++){var d=F.ops[c];if("mt.ps"==d.cookie&&d.label==b)break a}F.ops.push({cookie:"mt.ps",label:b})}else if(c&&-1==b&&(b=/^([a-z]{1,3})([0-9A-Z]{32})$/.exec(c))&&3==b.length)if(b=B()+("/js/2/a-ca4ba9c7/p/walgreens.com/entry.js?"+b[1]+"="+b[2]),!F.admits["/js/2/a-ca4ba9c7/p/walgreens.com/entry.js"]){for(c=0;c<p.length;c++){for(var d=p[c].split("."),e=g,f=window,
e=0;e<d.length-1;e++)f=f[d[e]];delete f[d[e]]}p.length=0;c=b;document.getElementsByTagName("script");c=da(c);c.setAttribute("id","monetate-block");d=document.createElement("div");d.appendChild(c);document.write(d.innerHTML);document.getElementById("monetate-block")?c.removeAttribute("id"):c=g;if(c||ea(b)){F.admits["/js/2/a-ca4ba9c7/p/walgreens.com/entry.js"]=h;return}}a.apply(this,arguments)}}
function G(a,b){if(!F.c){var c=window.location,d=c.hash;F.c=h;if(d&&"#monetate-"==d.substr(0,10)){for(var d=d.slice(10).split(","),e=0;e<d.length;e++){var f=d[e].split("=");F.keys[f[0]]=f[1]||"1"}"pushState"in window.history&&window.history.pushState("",document.title,c.protocol+"//"+c.hostname+c.pathname+c.search)}}a in F.keys&&z(b,F.keys[a]);return y(b)};var H=i;function I(){if(H===i&&(H=!!G("diagnostics","mt.diagnostics")))J("a","a-ca4ba9c7/p/walgreens.com"),J("ts","ad.monetate.net");return H}var ha=r("dq",[]);function J(a,b){I()&&ha.push({type:a,obj:b})}function ia(a,b,c,d,e){J(c?"h":"hi",{name:d||a,timeout:4E3,css:b,selector:d,actionId:e})};var K=0;function L(a){if(3>K){K+=1;!a.msg&&a.entry&&(a.msg=a.entry);J("e",a);var b={};D(b,"xx");b.xx=b.xx||[];b.xx.push(a);C(b)}}function M(a,b){return function(){try{return b.apply(this,arguments)}catch(c){try{L({entry:a,xname:c.name,xmsg:c.message,msg:a})}catch(d){}}}};var N=[],O=0,ja={};function P(a){var b=ja[a]||0,b=b+1;return ja[a]=b}function Q(a){var b=s("timeBasis",i);b===i&&(b=window.monetateT||(new Date).getTime(),n("monetate.timeBasis",b),ka({n:"basis",s:P("basis"),t:Q(0),d:0}));return a-b}function la(a){a&&(a.d=Q((new Date).getTime())-a.t,ka(a))}var R=i;function ma(){if(R===i){var a;if(!(a=I()))a:{if(a=A())if((a=a.split("."))&&1<a.length)if((a=a[1])&&a.length){a=1>parseInt(a,10)%100;break a}a=k}R=a}return R}
function na(){var a=fa();return function(){var b=ma()?{n:"entry",s:P("entry"),t:Q((new Date).getTime())}:i;try{return a.apply(window,arguments)}finally{la(b)}}}function ka(a){J("m",a);N.push(a);1==N.length&&setTimeout(M("timeout",oa),750)}function oa(){if(10>O){O+=1;var a={},b=N;D(a,"xt");a.xt=b;C(a)}N=[]};function S(a){for(var b=[],c=0,d=0;d<a.length;d++){for(var e=a.charCodeAt(d);255<e;)b[c++]=e&255,e>>=8;b[c++]=e}return b};function U(){this.chain_=[];this.buf_=[];this.W_=[];this.pad_=[];this.pad_[0]=128;for(var a=1;64>a;++a)this.pad_[a]=0;this.reset()}U.prototype.reset=function(){this.chain_[0]=1732584193;this.chain_[1]=4023233417;this.chain_[2]=2562383102;this.chain_[3]=271733878;this.chain_[4]=3285377520;this.total_=this.inbuf_=0};function V(a,b){return(a<<b|a>>>32-b)&4294967295}
function W(a,b){for(var c=a.W_,d=0;64>d;d+=4)c[d/4]=b[d]<<24|b[d+1]<<16|b[d+2]<<8|b[d+3];for(d=16;80>d;d++)c[d]=V(c[d-3]^c[d-8]^c[d-14]^c[d-16],1);for(var e=a.chain_[0],f=a.chain_[1],j=a.chain_[2],o=a.chain_[3],T=a.chain_[4],q,v,d=0;80>d;d++)40>d?20>d?(q=o^f&(j^o),v=1518500249):(q=f^j^o,v=1859775393):60>d?(q=f&j|o&(f|j),v=2400959708):(q=f^j^o,v=3395469782),q=V(e,5)+q+T+v+c[d]&4294967295,T=o,o=j,j=V(f,30),f=e,e=q;a.chain_[0]=a.chain_[0]+e&4294967295;a.chain_[1]=a.chain_[1]+f&4294967295;a.chain_[2]=
a.chain_[2]+j&4294967295;a.chain_[3]=a.chain_[3]+o&4294967295;a.chain_[4]=a.chain_[4]+T&4294967295}U.prototype.update=function(a,b){b||(b=a.length);var c=0;if(0==this.inbuf_)for(;c+64<b;)W(this,a.slice(c,c+64)),c+=64,this.total_+=64;for(;c<b;)if(this.buf_[this.inbuf_++]=a[c++],this.total_++,64==this.inbuf_){this.inbuf_=0;for(W(this,this.buf_);c+64<b;)W(this,a.slice(c,c+64)),c+=64,this.total_+=64}};function X(a){return a.protocol+"//"+a.hostname+a.pathname}function pa(a){for(var b=0;b<a.length;b++)if(!qa(a[b]))return k;return h}
function qa(a){var b=RegExp(a.value,"i"),c=window.location;switch(a.op){case "path_iregex":if(!b.test(c.pathname))return k;break;case "url_iregex":if(!b.test(X(c)))return k;break;case "full_iregex":if(!b.test(X(c)+c.search))return k;break;case "not_param_iequals":if((a=document.location.search.match(RegExp("(#|\\?|&)"+a.value+"=(.*?)(&|$)","i")))&&a[2]&&decodeURIComponent(a[2].replace(/\+/g," ")))return k;break;default:return L({entry:"mask",msg:"mask",xmsg:"Unknown rule: "+a.op}),k}return h};var ra=k;function Y(a,b,c){a._element[b]=c;b="protocol,hostname,host,port,href,pathname,search,hash".split(",");for(c=0;c<b.length;c++){var d=b[c];a[d]=a._element[d]}"/"!=a.pathname.charAt(0)&&(a.pathname="/"+a.pathname)};var Z=r("st",{refs:{},id:0,last:"",defer:k});
function sa(){var a={},b="",c;for(c in Z.refs)if(Z.refs.hasOwnProperty(c)){var d=Z.refs[c];a[d]||(b+=d+"\n",a[d]=h)}Z.last!=b&&(Z.last=b,(a=document.getElementById("monetatecss"))&&a.parentNode.removeChild(a),b&&(/MSIE [6789]\./.test(navigator.userAgent)&&document.styleSheets&&31<=document.styleSheets.length&&E("stylesheet limit reached"),(a=document.getElementsByTagName("head")[0])||E("missing <head>"),c=document.createElement("style"),c.setAttribute("type","text/css"),c.styleSheet?c.styleSheet.cssText=
b:c.appendChild(document.createTextNode(b)),c.id="monetatecss",a.insertBefore(c,a.firstChild)))};var $=r("em",{masks:{},count:0,tmark:i});function ta(a,b){if(!$.masks[a]){$.count++;!$.tmark&&ma()&&($.tmark={n:"mask",s:P("mask"),t:Q((new Date).getTime())});var c=b+" { visibility: hidden !important; } \n",d=Z.id++;c&&(Z.refs[d]=c,Z.defer||sa());d={extended:k,stylesheetId:d,selector:b,key:a,onRemove:g};$.masks[a]=d;b&&($.masks[b]=d);c.search(/\s*\{|$/);ia(a,c,h,b,a&&!isNaN(a)?+a:i)}}
function ua(a){var b=g;if(a.rules&&pa(a.rules)){b||(b=setTimeout(M("timeout",function(){var a=[],b;for(b in $.masks)if($.masks.hasOwnProperty(b)){var c=$.masks[b];$.masks[b].extended&&-1===a.indexOf(c.key)&&a.push(c.key)}b=0;for(c=a.length;b<c;b++)L({entry:"mask",code:5,msg:"extended mask not removed",xmsg:"Action ID: "+a[b]+" extended a mask without removing it"});for(var j in $.masks)if($.masks.hasOwnProperty(j)&&(a=$.masks[j])){b=a.stylesheetId;Z.refs[b]&&(delete Z.refs[b],Z.defer||sa());if(a.onRemove)a.onRemove();
delete $.masks[a.key];delete $.masks[a.selector];$.count--;$.tmark&&0===$.count&&la($.tmark)}}),4E3));for(b=0;b<a.action_ids.length;b++)ta(a.action_ids[b]+"",a.selector)}else if(I())for(b=0;b<a.action_ids.length;b++){var c=a.action_ids[b]+"";ia(c,a.selector+" { visibility: hidden !important; } \n",k,a.selector,c&&!isNaN(c)?+c:i)}}function va(a){for(var b=0,c=a.length;b<c;++b){var d=a[b];M("masks",function(){ua(d)})()}};var wa=RegExp("MSIE\\ (?:[6-9]|10\\.)|Trident/|Version/(?:3\\.[1-2]|[4-9]|1[0-9]).*Safari|Firefox/|Chrome|CriOS/|Windows\\s?NT\\s?10\\.0|AppleWebKit/.*Mobile/"),xa=[],ya=/Firefox\/(?:1\.0)|Windows CE/;function za(){var a=Aa();return function(){var b=navigator;"1"==t&&("1"==b.doNotTrack||"yes"==b.doNotTrack||"1"==b.msDoNotTrack)?z("mt.v","",-1):a.apply(this,arguments)}}
function Aa(){var a=Ba();return function(){var b=navigator.userAgent,c=b,d=wa.test(c);if(!d)for(var e=0,f=xa.length;e<f;e++)if(xa[e].test(c)){d=h;break}d&&!ya.test(b)&&a.apply(this,arguments)}}function Ba(){var a=na();return function(){var b;a:{b=document.location.host;for(var c=0,d=x.length;c<d;c++){var e=x[c],f;if(!(f=b==e)){f="."+e;var j=b.length-f.length;f=0<=j&&b.indexOf(f,j)==j}if(f){b=e;break a}}b=u}b||E("Cookie domain is null or undefined");u=b;a.apply(this,arguments)}};var Ca=k,Da=k;
function ga(){if(Da){var a;var b=s("redirect",[]),c=A();if(y("mt.v")==c&&!y("mt.redirect"))b:{a=0;for(var d=b.length;a<d;++a){var e=b[a];if(pa(e.rules)){c:{b=e;a=b.a;d=c;e=b.cg;c=new U;c.update(S("testeverything"));c.update(S(""+a));c.update(S(""+d));c.update(S(""+e));a=[];e=8*c.total_;56>c.inbuf_?c.update(c.pad_,56-c.inbuf_):c.update(c.pad_,64-(c.inbuf_-56));for(d=63;56<=d;d--)c.buf_[d]=e&255,e>>>=8;W(c,c.buf_);for(d=e=0;5>d;d++)for(var f=24;0<=f;f-=8)a[e++]=c.chain_[d]>>f&255;for(d=c=0;6>d;++d)c=
256*c+a[d];c/=281474976710656;for(a=0;a<b.splits.length;++a)if(d=b.splits[a],c<d.cdf){d:{c=d;z("mt.redirect",[c.o,(new Date).getTime(),0].join(";"));ra&&z("mt.referrer",encodeURIComponent(document.referrer));if(c.targets.length){b={_element:document.createElement("a")};Y(b,"href",window.location.href);e:{c=c.targets;a=b;for(d=0;d<c.length;d++)switch(e=c[d],f=RegExp(e.key,"i"),e.op){case "path_iregex":e=a.pathname.replace(f,e.value);Y(a,"pathname",e);break;case "url_iregex":e=X(a).replace(f,e.value);
Y(a,"href",e);break;case "full_iregex":e=(X(a)+a.search).replace(f,e.value);Y(a,"href",e);break;case "not_param_iequals":Y(a,"search",(a.search?a.search+"&":"?")+(e.key+"="+e.value));break;default:c=k;break e}c=h}if(c){document.location.replace(X(b)+b.search);if(b=document.documentElement)b.style.display="none";b=h;break d}}b=g}break c}b=g}a=b;break b}}a=g}if(a)return}Ca&&(b=s("masks",[]),va(b));b=s("preview",-1);c=G("preview","mt.ps");b=-1!=b&&c=="cp"+b.cp?"?cp="+b.cp:"";ea((b?B():"https:"==document.location.protocol?
"https://se.monetate.net":"http://e.monetate.net")+("/js/3/a-ca4ba9c7/p/walgreens.com/t1531412227/4961c3cfb2c2f55a/custom.js"+b))};var ra=Da=Ca=h,Ea=M("entry",function(){var a=za();return function(){var b=window.location.protocol;("http:"==b||"https:"==b)&&a.apply(this,arguments)}}());m("monetate.entry")||(p.push("monetate.entry"),n("monetate.entry",Ea));})();
if(this.monetate){monetate.redirect=[{"a":"3585","cg":"902365","rules":[{"op":"full_iregex","value":"((https:\\/\\/www\\.walgreens\\.com\\/locator\\/.*\\/id=.*)((?!.*?reactjs=true)))"}],"splits":[{"cdf":0.5,"key":"Control","o":"1.1042716.0","targets":[]},{"cdf":1.0,"key":"Experiment","o":"1.1042716.1","targets":[{"key":"((https:\\/\\/www\\.walgreens\\.com\\/locator\\/.*\\/id=.*)((?!.*?reactjs=true)))","op":"full_iregex","value":"$1?reactjs=true"}]}]},{"a":"3585","cg":"902366","rules":[{"op":"full_iregex","value":"((https:\\/\\/www\\.walgreens\\.com\\/storelocator\\/find.jsp.?.*)|(https:\\/\\/www\\.walgreens\\.com\\/storelocator\\/storeDetails.jsp.?stnum=.*)((?!.*?reactjs=true)))"}],"splits":[{"cdf":0.5,"key":"Control","o":"1.1042717.0","targets":[]},{"cdf":1.0,"key":"Experiment","o":"1.1042717.1","targets":[{"key":"((https:\\/\\/www\\.walgreens\\.com\\/storelocator\\/find.jsp.?.*)|(https:\\/\\/www\\.walgreens\\.com\\/storelocator\\/storeDetails.jsp.?stnum=.*)((?!.*?reactjs=true)))","op":"full_iregex","value":"$1&reactjs=true"}]}]},{"a":"3585","cg":"887985","rules":[{"op":"full_iregex","value":"(https:\\/\\/www\\.walgreens.com\\/pharmacy\\/register\\/authentication\\/rx_authentication\\.jsp)"}],"splits":[{"cdf":0.0,"key":"Control","o":"1.1025889.0","targets":[]},{"cdf":1.0,"key":"Experiment","o":"1.1025889.1","targets":[{"key":"(https:\\/\\/www\\.walgreens.com\\/pharmacy\\/register\\/authentication\\/rx_authentication\\.jsp)","op":"full_iregex","value":"$1?design=newrxauthflow"}]}]},{"a":"3585","cg":"912318","rules":[{"op":"full_iregex","value":"(https:\\/\\/www\\.walgreens\\.com\\/search\\/results\\.jsp\\?Ntt=.*)$"}],"splits":[{"cdf":0.5,"key":"Control","o":"1.1054500.0","targets":[]},{"cdf":1.0,"key":"Experiment","o":"1.1054500.1","targets":[{"key":"(https:\\/\\/www\\.walgreens\\.com\\/search\\/results\\.jsp\\?Ntt=.*)$","op":"full_iregex","value":"$1&pillFilters=true"}]}]}];monetate.masks=[{"action_id":2092038,"action_ids":[2092038,2232045,2460326],"rules":[{"op":"path_iregex","value":"^\\/store\\/"}],"selector":"#product .wag-new-icon"},{"action_id":2012853,"action_ids":[2012853],"rules":[{"op":"path_iregex","value":"^https\\:\\/\\/www\\.walgreens\\.com"}],"selector":"#promoForExpAB"}];monetate.tgt=[{"args":["dscmredirect","e","1"],"is_id":false,"op":"targetQueryParam","rules":{"op":"","value":""},"targetId":19340},{"args":["encLoyaltyId","",""],"is_id":true,"op":"targetCookie","rules":{"op":"","value":""},"targetId":34401}];monetate.bk=false;monetate.preview=null;monetate.ch="ae4f695ec8f7074d";monetate.entry()}