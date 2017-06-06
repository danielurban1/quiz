function getDomain(a){if(a.indexOf("www.")==0){return a.replace("www.","")}return a}function isEmpty(a){return(!a||0===a.length)}function getUrlParams(){var a=window.location.href;return a.indexOf("?")!=-1?a.slice(a.indexOf("?")+1):""}function getUrlAnch(){var b=window.location.href;var a=b.indexOf("?")!=-1?b.slice(0,b.indexOf("?")):b;if(!isEmpty(a)){return a.indexOf("#")!=-1?a.slice(a.indexOf("#")+1):""}return""}function generateUUID(){var a=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};var b=(new Date()).getTime().toString(16);return(b+"-"+a()+a()+a()+"-"+a()+a()+"-"+a()+a()+"-"+a()+a()+"-"+a()+a()+a())}function getUrlVars(){var c=[],a;var d=getUrlParams().split("&");for(var b=0;b<d.length;b++){a=d[b].split("=");c.push(a[0]);c[a[0]]=a[1]}return c}function smCreateCookie(c,d,e){var a="";if(e){var b=new Date();b.setTime(b.getTime()+(e*24*60*60*1000));a="; expires="+b.toGMTString()}document.cookie=c+"="+d+a+"; path=/; domain="+getDomain(document.domain)}function createCookie(c,d,e){var a="";if(e){var b=new Date();b.setTime(b.getTime()+(e*24*60*60*1000));a="; expires="+b.toGMTString()}document.cookie=c+"="+d+a+"; path=/; domain="+getDomain(document.domain)}function smReadCookie(b){var e=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)==0){return f.substring(e.length,f.length)}}return null}function readCookie(b){var e=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)==0){return f.substring(e.length,f.length)}}return null}function eraseCookie(a){smCreateCookie(a,"",-1)}function dateToISOString(b){function a(c){return c<10?"0"+c:c}return b.getUTCFullYear()+"-"+a(b.getUTCMonth()+1)+"-"+a(b.getUTCDate())+"T"+a(b.getUTCHours())+":"+a(b.getUTCMinutes())+":"+a(b.getUTCSeconds())+"Z"}var operations=function(){var b=false;var d="_smor";(function(){try{var y="smvr";var B=smReadCookie(y);var A;if(typeof B!=="undefined"&&B!=null){A=JSON.parse(atob(B))}else{A={visits:1,views:0,ts:new Date().getTime(),numberOfRejectionButtonClick:0};b=true}A.incrementViews=function(){var C=new Date().getTime();this.views+=1;if(C-this.ts>(3*60*60*1000)){this.visits+=1;b=true;smCreateCookie(d,document.referrer,1);v()}this.ts=C};A.incrementViews();var i=btoa(JSON.stringify(A));smCreateCookie(y,i,365*10)}catch(z){console.log(z)}})();if(typeof _smclientid!=="undefined"&&_smclientid!=null){client=_smclientid;smCreateCookie("smclient",client,365*10)}else{if(typeof client!=="undefined"&&client!=null){smCreateCookie("smclient",client,365*10)}else{client=storedClient}}var q=smReadCookie("smuuid");if(!q||((typeof client!=="undefined"&&client!=null)&&(typeof storedClient!=="undefined"&&storedClient!=null)&&(storedClient!==client))){q=generateUUID()}smCreateCookie("smuuid",q,365*10);if(typeof _smid!=="undefined"&&_smid!=null){var e=new Date();var l="smvr";var o=smReadCookie(l);var c=1;if(typeof o!=="undefined"&&o!=null){c=JSON.parse(atob(o)).visits}var h=window.location.pathname;if(typeof _smurloverride!=="undefined"&&_smurloverride!=null){h=_smurloverride}else{var r=getUrlAnch();if(!isEmpty(r)){h=h+"#"+r}var u=getUrlParams();if(!isEmpty(u)){h=h+"?"+u}}var n=document.domain;var t=("https:"==document.location.protocol?"https://":"http://")+"www.salesmanago.pl/api/r.gif";var f="?uri="+encodeURIComponent(h)+"&location="+encodeURIComponent(n)+"&uuid="+encodeURIComponent(q)+"&referrer="+encodeURIComponent(document.referrer)+"&smid="+encodeURIComponent(_smid)+"&time="+encodeURIComponent(dateToISOString(e))+"&timestamp="+e.getTime()+"&session="+c+"&title="+encodeURIComponent(document.title)+"&cp="+encodeURIComponent(e.getTime());if(typeof conversation!=="undefined"&&conversation!=null){f=f+"&conversation="+encodeURIComponent(conversation)}if(typeof smlid!=="undefined"&&smlid!=null){f=f+"&smlid="+encodeURIComponent(smlid)}if(typeof smpid!=="undefined"&&smpid!=null){f=f+"&smpid="+encodeURIComponent(smpid)}if(typeof _smtags!=="undefined"&&_smtags!=null){f=f+"&tags="+encodeURIComponent(_smtags)}if(typeof client!=="undefined"&&client!=null){f=f+"&client="+encodeURIComponent(client)}if(typeof _smextid!=="undefined"&&_smextid!=null){var w=smReadCookie(_smextid);if(typeof w!=="undefined"&&w!=null){f=f+"&extid="+encodeURIComponent(w)}}var j=smReadCookie("__goadservices");if(typeof j!=="undefined"&&j!=null){f=f+"&goid="+encodeURIComponent(j)}if(typeof b!=="undefined"&&b!=null){f=f+"&ns="+encodeURIComponent(b.toString())}var a="_smvs";var k=smReadCookie(a);if(typeof k==="undefined"||k==null){v()}else{f=f+"&vs="+encodeURIComponent(k)}var x=new Image(1,1);x.src=t+f;if((typeof _smcustom!=="undefined"&&_smcustom!=null&&_smcustom)||(typeof _smbanners!=="undefined"&&_smbanners!=null&&_smbanners)){if(typeof _smcustomparam!=="undefined"&&_smcustomparam!=null&&_smcustomparam){f=f+"&custom="+encodeURIComponent(_smcustomparam)}if(typeof _smbanners!=="undefined"&&_smbanners!=null&&_smbanners){f=f+"&banners=true"}else{f=f+"&banners=false"}(function(){var y=document.createElement("script");y.type="text/javascript";y.async=true;y.src=("https:"==document.location.protocol?"https://":"http://")+"www.salesmanago.pl/dynamic/"+_smid+"/custom.js"+f;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(y,i)})()}}if(client!=""&&document.getElementsByClassName("sm-iframe-download-form").length>0){var g=document.getElementsByClassName("sm-iframe-download-form");for(var p=0;p<g.length;p++){var s=g[p].getAttribute("src");var m=s+"?contactId="+client;g[p].setAttribute("src",m)}}if(window.addEventListener){addEventListener("message",listener,false)}else{attachEvent("onmessage",listener)}function v(){try{var y=("https:"==document.location.protocol?"https://":"http://")+"www.salesmanago.pl/api/vs";var z="?location="+encodeURIComponent(document.domain)+"&referrer="+encodeURIComponent(document.referrer);var i=smReadCookie(d);if(typeof i!=="undefined"&&i!=null){z=z+"&or="+encodeURIComponent(i)}if(typeof conversation!=="undefined"&&conversation!=null){z=z+"&conversation="+encodeURIComponent(conversation)}var B;if(window.XMLHttpRequest){B=new XMLHttpRequest()}else{B=new ActiveXObject("Microsoft.XMLHTTP")}B.open("GET",y+z,true);B.onload=function(){if(B.readyState===4){if(B.status===200){if(B.responseText!=""){var C=JSON.parse(B.responseText);smCreateCookie(a,C.visitSource,1)}else{console.log("Unable to resolve visit source")}}}};B.send()}catch(A){console.log("Unable to resolve visit source")}}};var client=getUrlVars()["smclient"];var conversation=getUrlVars()["smconv"];var smlid=getUrlVars()["smlid"];var smpid=getUrlVars()["smpid"];var storedClient=smReadCookie("smclient");operations();function buildEventUrl(c,f,b){var e=new Date();var g="smevent:"+c;var h=document.domain;var d=("https:"==document.location.protocol?"https://":"http://")+"www.salesmanago.pl/api/r.gif?uri="+encodeURIComponent(g)+"&location="+encodeURIComponent(h)+"&uuid="+encodeURIComponent(f)+"&referrer="+encodeURIComponent(document.referrer)+"&smid="+encodeURIComponent(_smid)+"&time="+encodeURIComponent(dateToISOString(e))+"&title="+encodeURIComponent(document.title)+"&cp="+encodeURIComponent(e.getTime());if(typeof _smtags!=="undefined"&&_smtags!=null){d=d+"&tags="+encodeURIComponent(_smtags)}if(typeof b!=="undefined"&&b!=null){d=d+"&client="+encodeURIComponent(b)}if(typeof _smextid!=="undefined"&&_smextid!=null){var a=smReadCookie(_smextid);if(typeof a!=="undefined"&&a!=null){d=d+"&extid="+encodeURIComponent(a)}}return d}function smEvent(c,h){try{var a=getUrlVars()["smclient"];var f=smReadCookie("smclient");if(typeof _smclientid!=="undefined"&&_smclientid!=null){a=_smclientid;smCreateCookie("smclient",a,365*10)}else{if(typeof a!=="undefined"&&a!=null){smCreateCookie("smclient",a,365*10)}else{a=f}}var g=smReadCookie("smuuid");if(!g||((typeof a!=="undefined"&&a!=null)&&(typeof f!=="undefined"&&f!=null)&&(f!==a))){g=generateUUID()}smCreateCookie("smuuid",g,365*10);if(typeof _smid!=="undefined"&&_smid!=null){var d=buildEventUrl(c,g,a);var b=new Image(1,1);if(h&&(typeof h=="function")){b.onload=function(){setTimeout(h,500)}}b.src=d}}catch(i){if(h&&(typeof h=="function")){h()}}}function listener(c){if(c.origin!=="https://www.salesmanago.pl"&&c.origin!=="http://www.salesmanago.pl"){return}if(c.data.indexOf("smclientid:")==0){var b=c.data.replace("smclientid:","");smCreateCookie("smclient",b,10*365);try{smEvent("SMFORM ["+c.source.top.location.pathname+"]")}catch(a){}}}(function(){function c(){var w=getUrlVars()["smclient"];var A=smReadCookie("smclient");if(typeof _smclientid!=="undefined"&&_smclientid!=null){w=_smclientid;smCreateCookie("smclient",w,365*10)}else{if(typeof w!=="undefined"&&w!=null){smCreateCookie("smclient",w,365*10)}else{w=A}}return w}function n(){var A=p.q;if(typeof A!=="undefined"&&A.length>0){for(var w=0;w<A.length;w++){o(A[w][0],A[w][1])}}i[i.SalesmanagoObject]=o}function o(w,A){if(typeof w==="undefined"||typeof A==="undefined"){return}h(w,A)}function h(A,C){try{var w=new Image(1,1);if(A==="extEvent"){m(C,w)}if(A==="webPush"){t(C)}}catch(B){console.log(B)}}function m(C,B){var A=new s(b+d+r,u);for(var w in C){if(C.hasOwnProperty(w)){A.addParameter(w,C[w])}}B.src=A.buildUrl()}function t(B){var w=q("smwp");var A="smvr";var D=smReadCookie(A);var C;if(typeof D!=="undefined"&&D!=null){C=JSON.parse(atob(D));if(w===""){x(B[0]).then(function(F){var E=C.numberOfRejectionButtonClick>0?0:k(JSON.parse(F))*1000;if(l()&&(g(C,JSON.parse(F))||C.numberOfRejectionButtonClick>0)){setTimeout(function(){v(B[0],B[1])},E)}})}}}function g(A,w){if(w.displaySettings.active){switch(w.displaySettings.type){case"views":return A.views>=w.displaySettings.viewsAmount;case"visits":return A.visits>=w.displaySettings.visitsAmount}}else{return true}}function k(w){if(w.displaySettingsDelay.active){return w.displaySettingsDelay.delay}else{return 0}}function x(w){return new Promise(function(F,E){var A="smcfds";var D=smReadCookie(A);if(typeof D!=="undefined"&&D!=null){F(JSON.parse(atob(D)))}else{var B=("https:"==document.location.protocol?"https://":"http://")+"www.salesmanago.pl/api/push/consentForm/displaySettings.json?id="+w;var C;if(window.XMLHttpRequest){C=new XMLHttpRequest()}else{C=new ActiveXObject("Microsoft.XMLHTTP")}C.open("GET",B,true);C.onload=function(){if(C.readyState===4){if(C.status===200){if(C.responseText!=""){var G=btoa(JSON.stringify(C.responseText));smCreateCookie("smcfds",G,1);F(C.responseText)}else{E("Unable to load consent form display settings")}}}};C.send()}})}function v(C,G){var F=window.location.hostname;var E=q("smuuid");var A="id="+C+"&url="+F+"&smuuid="+E;var w=smReadCookie("smclient");if(typeof w!=="undefined"&&w!=null){A+="&smclient="+w}var B=("https:"==document.location.protocol?"https://":"http://")+"www.salesmanago.pl/api/push/consentForm.htm?"+A;var D;if(window.XMLHttpRequest){D=new XMLHttpRequest()}else{D=new ActiveXObject("Microsoft.XMLHTTP")}D.open("GET",B,true);D.onload=function(){if(D.readyState===4){if(D.status===200){if(D.responseText!=""){f(D.responseText);document.getElementById("smwpConfirmationButton").addEventListener("click",function(){var H=screen.width/2-300;var I=screen.height/2-400;j("smwp","true",24*365*10);window.open(a(F,A),"_blank","left="+H+",top="+I+",width=600,height=600");z()});document.getElementById("smwpRejectionButton").addEventListener("click",function(){j("smwp","false",G);var I="smvr";var K=smReadCookie(I);var J;if(typeof K!=="undefined"&&K!=null){J=JSON.parse(atob(K));J.numberOfRejectionButtonClick+=1}var H=btoa(JSON.stringify(J));smCreateCookie(I,H,365*10);z()})}}}};D.send()}function a(w,A){if(_smid==="q45h84p75gs0o1k2"){return"https://"+w.replace(/\.|_/g,"-")+"-01.promocje.r.pl?"+A}else{return"https://"+w.replace(/\.|_/g,"-")+"-01.salesmanagopush.com?"+A}}function f(w){var A=document.createElement("div");A.innerHTML=w;document.getElementsByTagName("BODY")[0].appendChild(A);window.addEventListener("orientationchange",function(){document.getElementsByClassName("sm-webpush")[0].className="sm-webpush"})}function z(){document.getElementById("consentForm").parentNode.remove()}function j(A,D,B){var C=new Date();C.setTime(C.getTime()+(B*60*60*1000));var w="; expires="+C.toUTCString();document.cookie=A+"="+D+w+"; path=/; domain="+getDomain(document.domain)}function q(B){var A=B+"=";var w=document.cookie.split(";");for(var C=0;C<w.length;C++){var D=w[C];while(D.charAt(0)==" "){D=D.substring(1)}if(D.indexOf(A)==0){return D.substring(A.length,D.length)}}return""}function l(){var w=navigator.userAgent.split(")").reverse()[0].match(/(?!Gecko|Version|[A-Za-z]+?Web[Kk]it)[A-Z][a-z]+\/[\d.]+/g)[0].split("/");var B=false;var C=w[0].toLocaleLowerCase();var A=parseInt(w[1]);if(C=="chrome"&&A>=42||C=="firefox"&&A>=44){B=true}return B}function e(){this.map={}}e.prototype.add=function(w,A){this.map[A]=w};e.prototype.getShort=function(w){if(typeof w!="undefined"){if(this.map.hasOwnProperty(w)){return this.map[w]}return w}};function s(A,w){this.url=A;this.params=[];this.parameterMap=w}s.prototype.addParameter=function(w,A){this.params[w]=A};s.prototype.objectToParameters=function(A,w){for(var C in w){if(w.hasOwnProperty(C)&&typeof w[C]!=="undefined"&&w[C]!=null){if(Object.prototype.toString.call(w[C])==="[object Array]"){for(var B=0;B<w[C].length;B++){A=A+encodeURIComponent(this.parameterMap.getShort(C))+"="+encodeURIComponent(w[C][B])+"&"}}else{A=A+encodeURIComponent(this.parameterMap.getShort(C))+"="+encodeURIComponent(w[C])+"&"}}}return A};s.prototype.buildUrl=function(){var w=this.url+"?";w=this.objectToParameters(w,y);w=this.objectToParameters(w,this.params);return w.substring(0,w.length-1)};var u=new e();u.add("a","client");u.add("b","owner");u.add("c","email");u.add("d","cid");u.add("e","contactExtEventType");u.add("f","date");u.add("g","description");u.add("h","products");u.add("i","location");u.add("j","value");u.add("k","details");u.add("l","externalId");u.add("m","timestamp");var y={client:_smid,timestamp:new Date().getUTCDate(),cid:c()};var i=window;var p=i[i.SalesmanagoObject];if(typeof p=="undefined"){return}var b="https://www.salesmanago.pl",d="/web-api",r="/e.gif";n()})(window);(function(b){var a=b.pushState;b.pushState=function(d){if(typeof b.onpushstate=="function"){b.onpushstate({state:d})}var c=a.apply(b,arguments);if(typeof b.onpushstateapplied=="function"){b.onpushstateapplied({state:d},window.location.href)}return c}})(window.history);history.onpushstate=function(a){};history.onpushstateapplied=function(b,a){operations()};