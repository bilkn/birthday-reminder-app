(this["webpackJsonpbirthday-reminder-app"]=this["webpackJsonpbirthday-reminder-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(10),c=n.n(a),o=n(2),s=n(1),i=n.n(s),u=(n(17),n(4)),l=n.n(u),p=n(6),b=n(5),d=(n(19),Object(s.createContext)(null)),j=Object(s.createContext)(null);var f=function(e,t){return e.filter((function(e){var n=e.name.toLowerCase();return t=t.toLowerCase(),n.includes(t)}))};var O=function(e){return e.filter((function(e){return e.inFavourites}))},h={people:[{id:1,name:"Derek Green",birthday:"20.05.1992",picture:"./assets/man-3.png"},{id:2,name:"Lewis Milton",birthday:"15.11.1980",picture:"./assets/man-4.png"},{id:3,name:"Michael John",birthday:"20.10.1985",picture:"./assets/man-1.png"},{id:4,name:"Niho Kerr",birthday:"06.04.1993",picture:"./assets/girl-1.png"},{id:5,name:"Tom Bloom",birthday:"12.02.1990",picture:"./assets/man-2.png"}]};var v=function(e){var t=e.setShowSearchBox,n=Object(s.useContext)(d),a=n.dispatch,c=n.state,i=n.favState,u=Object(s.useContext)(j),v=Object(o.a)(u,2)[1],m=Object(o.a)(i,1)[0],x=Object(s.useRef)(null),_=function(){var e=Object(b.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"DEMO-DATA"===(t=x.current.value)&&(n=h.people,a({type:"ADD_PERSON",payload:[].concat(Object(p.a)(c.people),Object(p.a)(n))}),N()),y(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){var t=m?O(c.people):c.people;if(t){var n=f(t,e);v(n)}else console.log("Data could not found!")},N=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"",t(!1),y("");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=function(e){"Escape"===e.key&&N()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),Object(r.jsxs)("div",{className:"search-box",children:[Object(r.jsx)("input",{className:"search-box__search-input",type:"search",placeholder:"Search by name",onChange:_,ref:x,autoFocus:!0}),Object(r.jsx)("button",{className:"search-box__close-btn","aria-label":"Search",onClick:N,children:Object(r.jsx)("i",{className:"far fa-times-circle"})})]})};function m(e){var t=/(\d\d)(\.|-|\/)(\d\d)(\.|-|\/)(\d{4})/;return{result:t.test(e),regex:t}}function x(e){var t=/(\d{4})(\.|-|\/)(\d\d)(\.|-|\/)(\d\d)/;return{result:t.test(e),regex:t}}var _=function(e){return e.replace(/(\.|-|\/)/g,".")};function y(e,t){var n=x(e).regex;return e=m(e).result?e:e.replace(n,"$5.$3.$1"),t=m(t).result?t:t.replace(n,"$5.$3.$1"),/-|\//.test(e)&&(e=_(e)),/-|\//.test(t)&&(t=_(t)),[e,t]}var N=function(e){var t=e.peopleList,n=e.dispatch,r=e.nextSort,a=e.setPeopleList,c=e.showFavourites,s=t;"sortByAge"===r?function(e,t,n,r){var a=e.sort((function(e,t){var n=e.birthday.slice(),r=t.birthday.slice(),a=y(n,r),c=Object(o.a)(a,2);n=c[0],r=c[1];var s=n.split("."),i=Object(o.a)(s,3),u=i[0],l=i[1],p=i[2],b=r.split("."),d=Object(o.a)(b,3),j=d[0],f=d[1],O=d[2];return new Date(p,l,u).getTime()-new Date(O,f,j).getTime()}));if(r){n(a.filter((function(e){return e.inFavourites})))}else n(a);t({type:"SORT_PEOPLE_BY_AGE"})}(s,n,a,c):"sortByMonth"===r?function(e,t,n,r){var a=e.sort((function(e,t){var n=e.birthday.slice(),r=t.birthday.slice(),a=y(n,r),c=Object(o.a)(a,2);n=c[0],r=c[1];var s=n.split("."),i=Object(o.a)(s,2),u=i[0],l=i[1],p=r.split("."),b=Object(o.a)(p,2);return+b[0]+100*+b[1]-(+u+100*+l)}));if(r){n(a.filter((function(e){return e.inFavourites})))}else n(a);t({type:"SORT_PEOPLE_BY_MONTH"})}(s,n,a,c):"sortByName"===r&&function(e,t,n,r){var a=e.sort((function(e,t){var n=e.name.toLowerCase(),r=Object(o.a)(n,1)[0],a=t.name.toLowerCase(),c=Object(o.a)(a,1)[0];return r.charCodeAt(0)-c.charCodeAt(0)}));if(r){n(a.filter((function(e){return e.inFavourites})))}else n(a);t({type:"SORT_PEOPLE_BY_NAME"})}(s,n,a,c)};n(20);var g=function(){var e=Object(s.useContext)(d),t=e.dispatch,n=e.favState,a=e.sortingState,c=Object(s.useContext)(j),i=Object(o.a)(c,2),u=i[0],l=i[1],p=Object(o.a)(n,1)[0],b=Object(o.a)(a,2),f=b[0],O=b[1],h=function(e){switch(e){case"sort-by-name":return"sortByName";case"sort-by-age":return"sortByAge";case"sort-by-month":return"sortByMonth"}};return Object(r.jsxs)("select",{className:"sorting-selectbox","aria-selected":!0,role:"option",onChange:function(e){var n=e.target.value,r=h(n);N({peopleList:u,setPeopleList:l,nextSort:r,showFavourites:p,dispatch:t}),O(r)},defaultValue:f,children:[Object(r.jsx)("option",{id:"test",value:"sort-by-name",className:"sorting-selectbox__option",children:"Sort by name"}),Object(r.jsx)("option",{value:"sort-by-age",className:"sorting-selectbox__option",children:"Sort by age"}),Object(r.jsx)("option",{value:"sort-by-month",className:"sorting-selectbox__option",children:"Sort by month"})]})},E=Object(s.createContext)(null);var I=function(e){return window.matchMedia("(min-width: ".concat(e,"px)")).matches};var w=function(){var e=Object(s.useContext)(d).favState,t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),i=Object(o.a)(c,2),u=i[0],l=i[1],p=Object(s.useContext)(E),b=Object(o.a)(p,2),j=b[0],f=b[1];return Object(s.useEffect)((function(){I(769)?f((function(){return!0})):f((function(){return!1}))}),[f]),Object(r.jsxs)("header",{className:"app-head",children:[(j||!u)&&Object(r.jsx)("h1",{className:"app-head__logo",children:"BirthdayReminder"}),Object(r.jsxs)("nav",{className:"app-head-nav",children:[u&&Object(r.jsx)(v,{setShowSearchBox:l})||Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{}),Object(r.jsx)("button",{className:"app-head-nav__search-btn","aria-label":"Search",onClick:function(){return l(!u)},children:Object(r.jsx)("i",{className:"fas fa-search app-head-nav__icon"})})]}),Object(r.jsx)("button",{className:"app-head-nav__fav-btn",onClick:function(){return!a(!n)},style:{color:n?" #dcd6f7":"#c9c2e8"},"aria-label":"Favourites",children:Object(r.jsx)("i",{className:"fa fa-star app-head-nav__icon","aria-hidden":"true"})})]})]})};n(21),n(22);var P=function(e){if(e instanceof File||e instanceof Blob)return URL.createObjectURL(e);if("string"===typeof e&&(e.includes(".png")||e.includes(".jpeg")||e.includes(".jpg")))return e;throw Error("Input must be a File, String (includes .png, .jpeg or .jpg), or Blob object.")},D=n(3);n(23);var S=function(e,t){return e.find((function(e){return e.id===t}))},C=n(11);function A(e,t){return k.apply(this,arguments)}function k(){return(k=Object(b.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(t,n,{upgrade:function(e){e.createObjectStore("people",{keyPath:"id"})}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t,n){return T.apply(this,arguments)}function T(){return(T=Object(b.a)(l.a.mark((function e(t,n,r){var a,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t,n);case 2:return a=e.sent,c=a.transaction(r,"readwrite"),o=c.objectStore(r),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t,n,r){return F.apply(this,arguments)}function F(){return(F=Object(b.a)(l.a.mark((function e(t,n,r,a){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(n,r,a);case 2:return c=e.sent,e.next=5,c.put(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t,n){return V.apply(this,arguments)}function V(){return(V=Object(b.a)(l.a.mark((function e(t,n,r){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t,n,r);case 2:return a=e.sent,e.next=5,a.getAll();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(b.a)(l.a.mark((function e(t,n,r,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t,n,r);case 2:e.sent.delete(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return new Promise((function(t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){t(r.result)})),r.addEventListener("error",n),r.readAsArrayBuffer(e)}))}var Y=function(e){var t=e.currentPersonID,n=e.setCurrentPersonID,a=e.handleDeletePerson,c=Object(s.useContext)(d),i=c.state,u=c.dispatch,l=c.backgroundState,b=c.showEditPersonUIState,j=S(i.people,t),f=Object(o.a)(l,2)[1],O=Object(o.a)(b,2)[1],h=Object(s.useState)(""),v=Object(o.a)(h,2),m=v[0],x=v[1],_=function(e){return e&&e.inFavourites},y=function(){var e=i.people.filter((function(e){return t!==e.id})),r=Object(D.a)(Object(D.a)({},j),{},{inFavourites:!0});u({type:"ADD_FAVOURITE",payload:{people:[].concat(Object(p.a)(e),[r]),name:r.name}});try{R(r,"userDatabase","1","people")}catch(a){console.log(a)}n(null)},N=function(){var e=i.people.filter((function(e){return e.id!==t})),r=Object(D.a)(Object(D.a)({},j),{},{inFavourites:!1});u({type:"REMOVE_FAVOURITE",payload:{people:[].concat(Object(p.a)(e),[r]),name:r.name}}),n(null)};return Object(s.useEffect)((function(){_(j)?x("Remove from favourites"):x("Add to favourites")}),[j]),Object(r.jsxs)("div",{className:"person-options-container",onMouseEnter:function(e){var t=document.querySelector(".person__dropdown-btn");if(I(769)){var r=e.target.closest("div");r.addEventListener("mouseleave",(function e(a){var c=a.relatedTarget;c&&!c.classList.contains("person__dropdown-btn")&&(t.style={},n(null),r.removeEventListener("mouseleave",e))}))}},children:[Object(r.jsxs)("p",{className:"person-options-container__name",children:["Person: ",j&&j.name]}),Object(r.jsxs)("ul",{className:"person-options-list",children:[Object(r.jsx)("li",{className:"person-options-list__item person-options-list__item--triangled",children:Object(r.jsx)("button",{className:"person-options-list__btn",onClick:function(e){return function(e){return e.stopPropagation(),f(!1),_(j)?N:y}(e)()},children:m})}),Object(r.jsx)("li",{className:"person-options-list__item person-options-list__item--edit-btn",children:Object(r.jsx)("button",{className:"person-options-list__btn",onClick:function(e){return function(e){e.stopPropagation(),f(!0),O(!0),setTimeout((function(){return n(null)}),0)}(e)},children:"Edit"})}),Object(r.jsx)("li",{className:"person-options-list__item person-options-list__item--delete-btn",children:Object(r.jsx)("button",{className:"person-options-list__btn",onClick:function(e){return a(e,t)},children:"Delete"})})]})]})};var H=function(e){var t=/(\.|-|\/)/,n=e.birthday.split(t).filter((function(e){return!t.test(e)}));4!==n[0].length&&(n=n.reverse());var r=new Date(n[0],n[1],n[2]),a=Date.now()-r.getTime(),c=new Date(a);return Math.abs(c.getUTCFullYear()-1970)};var $=function(e){var t=e.person,n=e.handleDeletePerson,a=e.currentPersonID,c=e.setCurrentPersonID,i=e.handleSelectPerson,u=t.id,l=t.name,p=t.birthday,b=t.picture,d=Object(s.useState)(null),j=Object(o.a)(d,2),f=j[0],O=j[1],h=Object(s.useState)(null),v=Object(o.a)(h,2),m=v[0],x=v[1],_=Object(s.useState)(""),y=Object(o.a)(_,2),N=y[0],g=y[1],E=Object(s.useState)(null),w=Object(o.a)(E,2),D=w[0],S=w[1],C=Object(s.useState)(-1),A=Object(o.a)(C,2),k=A[0],L=A[1];Object(s.useEffect)((function(){var e,t=null;try{if("string"!==typeof b){var n=new Blob([b],{type:e});t=P(n)}else t=b}catch(r){console.log(r)}x((function(){return t}))}),[b]),Object(s.useEffect)((function(){g(a===u?"person person--highlighted":"person")}),[a,u]),Object(s.useEffect)((function(){S(H(t))}),[t]),Object(s.useEffect)((function(){I(769)||L(-1)}),[]);var T=function(e){"Tab"!==e.key||I(769)?"Tab"===e.key&&I(769)&&L(-1):L(1)};return Object(s.useEffect)((function(){return window.addEventListener("keyup",T),function(){window.removeEventListener("keyup",T)}}),[]),Object(r.jsxs)("div",{className:N,onKeyPress:function(e){"Enter"===e.key&&i(u)},onClick:function(){I(769)||i(u)},tabIndex:k,children:[Object(r.jsx)("button",{className:"person__dropdown-btn",onMouseEnter:function(e){var t=e.target.closest("button");i(u);O({height:"50px",width:"30px"});t.addEventListener("mouseleave",(function e(n){var r=n.relatedTarget;r&&!r.classList.contains("person-options-list__item")&&(c(null),O(null),t.removeEventListener("mouseleave",e))}))},style:f,"aria-label":"Dropdown menu",children:Object(r.jsx)("i",{className:"fa fa-ellipsis-h","aria-hidden":"true"})}),a===u&&Object(r.jsx)(Y,{currentPersonID:a,setCurrentPersonID:c,handleDeletePerson:n}),Object(r.jsx)("div",{className:"person-img-container",children:Object(r.jsx)("img",{className:"person-img-container__img",src:m,alt:l})}),Object(r.jsxs)("div",{className:"person-info",children:[Object(r.jsx)("p",{className:"person-info__name",children:l}),Object(r.jsx)("p",{className:"person-info__birthday",children:p})]}),Object(r.jsxs)("div",{className:"person-age-container",children:[Object(r.jsx)("p",{className:"person-age-container__title",children:"Age:"}),Object(r.jsx)("p",{className:"person-age-container__age",children:D})]})]})};n(24);var G=function(e){var t=e.setShowDeletePersonDialog,n=e.removeItem,a=e.deletionUserID,c=e.setCurrentPersonID,i=Object(s.useContext)(d),u=i.backgroundState,l=i.state,p=Object(o.a)(u,2)[1],b=function(e){e.stopPropagation(),"Yes"===e.target.textContent&&n(a),t(!1),p(!1),c(!1)};return Object(r.jsxs)("div",{className:"delete-person-dialog",children:[Object(r.jsx)("p",{className:"delete-person-dialog__text",children:" Are you really want to delete ".concat(S(l.people,a).name,"?")}),Object(r.jsxs)("div",{className:"delete-person-dialog-controls",children:[Object(r.jsx)("button",{className:"delete-person-dialog-controls__btn",onClick:b,autoFocus:!0,children:"Yes"}),Object(r.jsx)("button",{className:"delete-person-dialog-controls__btn delete-person-dialog-controls__btn--no-margin",onClick:b,children:"No"})]})]})},K=(n(25),n.p+"static/media/no-picture.2fda6558.png"),J=function(e){try{if("string"===typeof e)return!0;var t=e.type;return"image/jpeg"===t||"image/png"===t||e instanceof ArrayBuffer}catch(n){return console.log(n),!1}};n(26);var z=function(e){var t=e.setDidUserUploadPicture,n=e.setCurrentPicture,a=Object(s.useContext)(d).dispatch,c=Object(s.useRef)(null);return Object(s.useEffect)((function(){c.current.focus()}),[]),Object(r.jsxs)("div",{className:"picture-input-container",children:[Object(r.jsx)("label",{htmlFor:"picture",className:"picture-input-container__label",tabIndex:0,ref:c,onKeyDown:function(e){"Enter"===e.key&&c.current.click()},children:Object(r.jsx)("i",{className:"fas fa-camera picture-input-container__icon","aria-hidden":!0})}),Object(r.jsx)("input",{id:"picture",type:"file",className:"picture-input-container__picture",accept:"image/png, image/jpeg",onChange:function(e){var r=e.target.files[0];J(r)?(t(!0),n(r)):a({type:"INVALID_FILE_TYPE"})},hidden:!0})]})};var q=function(e,t,n){return e.length<=0?"INVALID_NAME":function(e){return m(e).result||x(e).result}(t)?function(e){var t=m(e).result?+e.slice(0,2):+e.slice(-2);return t<=31&&t>0}(t)?function(e){var t=m(e).result?+e.slice(3,5):+e.slice(5,7);return t<=12&&t>0}(t)?function(e){var t=m(e).result?+e.slice(-4):+e.slice(0,4);return t<=(new Date).getFullYear()&&t>1e3}(t)?!!J(n)||"INVALID_FILE_TYPE":"INVALID_YEAR":"INVALID_MONTH":"INVALID_DAY":"INVALID_DATE"};n(27);var Q=function(e){var t=e.handleAddPerson;return Object(r.jsx)("div",{className:"add-person-ui-controls",children:Object(r.jsx)("button",{className:"add-person-ui-controls__add-btn",onClick:function(){t()},children:Object(r.jsx)("i",{className:"fa fa-plus-circle add-person-ui-controls__icon","aria-hidden":"true"})})})};n(28);var W=function(e){var t=e.nameContainer,n=e.dateContainer,a=e.name,c=e.birthday;return Object(r.jsxs)("div",{className:"add-person-ui-info-container",children:[Object(r.jsx)("input",{type:"text",className:"add-person-ui-info-container__name",ref:t,maxLength:"15",placeholder:"Name",defaultValue:a||""}),Object(r.jsx)("input",{type:"text",className:"add-person-ui-info-container__birthday",ref:n,defaultValue:c||"",maxLength:"10",placeholder:"dd/mm/yyyy"})]})};n(29);var X=function(e){var t=e.createFileURL,n=e.currentPicture,a=e.nameContainer;return Object(r.jsx)("div",{className:"person-img-container",children:Object(r.jsx)("img",{className:"person-img-container__img",src:t(n),alt:a.current.value})})};var Z=function(e){var t=e.setShowBackground,n=e.toggleAddPersonUI,a=Object(s.useContext)(d),c=a.state,i=a.dispatch,u=Object(s.useState)(!1),j=Object(o.a)(u,2),f=j[0],O=j[1],h=Object(s.useState)(null),v=Object(o.a)(h,2),m=v[0],x=v[1],_=Object(s.useRef)(null),y=Object(s.useRef)(null),N=function(){var e=Object(b.a)(l.a.mark((function e(){var r,a,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=_.current.value,a=y.current.value,c=null,e.prev=3,!m){e.next=10;break}return e.next=7,M(m);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=K;case 11:c=e.t0,e.next=17;break;case 14:e.prev=14,e.t1=e.catch(3),console.log(e.t1);case 17:o=q(r,a,c),e.t2=o,e.next="INVALID_NAME"===e.t2||"INVALID_DATE"===e.t2||"INVALID_DAY"===e.t2||"INVALID_MONTH"===e.t2||"INVALID_YEAR"===e.t2||"INVALID_FILE_TYPE"===e.t2?21:23;break;case 21:return i({type:o}),e.abrupt("break",27);case 23:return g(r,a,c),t(!1),n(),e.abrupt("break",27);case 27:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),g=function(e,t,n){e=e.charAt(0).toUpperCase()+e.slice(1);var r=E(e,t,n);i({type:"ADD_PERSON",payload:[].concat(Object(p.a)(c.people),[r])});try{R(r,"userDatabase","1","people")}catch(a){console.log(a)}},E=function(e,t,n){return{id:(new Date).getTime().toString(),name:e,birthday:t,picture:n,inFavourites:!1}};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"add-person-ui",children:[f?Object(r.jsx)(X,{createFileURL:P,currentPicture:m,nameContainer:_}):Object(r.jsx)(z,{setDidUserUploadPicture:O,currentPicture:m,setCurrentPicture:x}),Object(r.jsx)(W,{nameContainer:_,dateContainer:y}),Object(r.jsx)(Q,{handleAddPerson:N}),Object(r.jsx)("button",{className:"add-person-ui__close-btn",onClick:n,children:Object(r.jsx)("i",{className:"fas fa-times"})})]})})};n(30);var ee=function(e){var t=e.handleAddPersonUIForLargerScreen;return Object(r.jsx)("li",{className:"add-person-ui-large",tabIndex:0,onClick:function(e){t(e)},onKeyDown:function(e){"Enter"===e.key&&t(e)},children:Object(r.jsx)("div",{className:"add-person-ui-large__icon-container",children:Object(r.jsx)("i",{className:"fa fa-plus add-person-ui-large__add-icon","aria-hidden":"true"})})})};n(31);var te=function(e){var t=e.handleAcceptClick;return Object(r.jsx)("div",{className:"edit-person-ui-controls",children:Object(r.jsx)("button",{className:"edit-person-ui-controls__accept-btn",onClick:function(e){return t(e)},children:Object(r.jsx)("i",{className:"fas fa-check-circle edit-person-ui-controls__icon","aria-hidden":!0})})})};n(32);var ne=function(e){var t=e.currentPersonID,n=e.setShowEditPersonUI,a=e.setShowBackground,c=t,i=Object(s.useRef)(null),u=Object(s.useRef)(null),j=Object(s.useContext)(d),f=j.state,O=j.dispatch,h=Object(s.useState)(c),v=Object(o.a)(h,1)[0],m=Object(s.useState)(null),x=Object(o.a)(m,2),_=x[0],y=x[1],N=Object(s.useState)(!1),g=Object(o.a)(N,2),E=g[0],I=g[1],w=S(f.people,v),C=function(){var e=Object(b.a)(l.a.mark((function e(t){var r,c,o,s,b,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),r=i.current.value,c=u.current.value,o=E?_:w.picture,s=null,e.prev=5,e.next=8,A(r,c,o);case 8:s=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.log(e.t0);case 14:if(s){b=f.people.filter((function(e){return e.id!==v})),d=[].concat(Object(p.a)(b),[s]);try{R(s,"userDatabase","1","people")}catch(l){console.log(l)}O({type:"EDIT_PERSON",payload:{people:d,name:s.name}}),a(!1),n(!1)}case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(l.a.mark((function e(t,n,r){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(D.a)(Object(D.a)({},w),{},{id:v,name:t,birthday:n,picture:r}),e.prev=1,!_){e.next=8;break}return e.next=5,M(_);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=K;case 9:r=e.t0,e.next=15;break;case 12:e.prev=12,e.t1=e.catch(1),console.log(e.t1);case 15:c=q(t,n,r),e.t2=c,e.next="INVALID_NAME"===e.t2||"INVALID_DATE"===e.t2||"INVALID_DAY"===e.t2||"INVALID_MONTH"===e.t2||"INVALID_YEAR"===e.t2||"INVALID_FILE_TYPE"===e.t2?19:21;break;case 19:return O({type:c}),e.abrupt("break",22);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=function(e){"Escape"===e.key&&n(!1)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]),Object(r.jsxs)("div",{className:"edit-person-ui",children:[E?Object(r.jsx)(X,{createFileURL:P,currentPicture:_,nameContainer:i}):Object(r.jsx)(z,{setDidUserUploadPicture:I,currentPicture:_,setCurrentPicture:y}),Object(r.jsx)(W,{name:w.name,birthday:w.birthday,currentPersonID:t,nameContainer:i,dateContainer:u}),Object(r.jsx)(te,{handleAcceptClick:C})]})};n(33);var re=function(e){var t=e.isTimePassed,n=e.setIsTimePassed,a=Object(s.useContext)(d),c=a.state,o=a.dispatch;Object(s.useEffect)((function(){t&&(n(!1),setTimeout(i,2500))}));var i=function(){o({type:"REMOVE_MODAL"}),n(!0)};return Object(r.jsx)("p",{className:"notification",children:c.notificationContent})};var ae=function(e){var t=e.currentPersonID,n=e.setCurrentPersonID,a=Object(s.useContext)(j),c=Object(o.a)(a,2),i=c[0],u=c[1],l=Object(s.useContext)(E),p=Object(o.a)(l,2)[1],b=Object(s.useContext)(d),f=b.state,h=b.dispatch,v=b.favState,m=b.backgroundState,x=b.showEditPersonUIState,_=b.showAddPersonUIState,y=Object(o.a)(_,2),g=y[0],w=y[1],P=Object(o.a)(v,1)[0],D=Object(o.a)(m,2),S=D[0],C=D[1],A=Object(o.a)(x,2),k=A[0],L=A[1],T=Object(s.useState)(!1),R=Object(o.a)(T,2),F=R[0],B=R[1],V=Object(s.useState)(null),M=Object(o.a)(V,2),Y=M[0],H=M[1],K=Object(s.useState)(!0),J=Object(o.a)(K,2),z=J[0],q=J[1],Q=Object(s.useState)(!1),W=Object(o.a)(Q,2),X=W[0],te=W[1],ae=function(e,t){I(769)||n(null),e.stopPropagation(),B(!0),H(t)},ce=function(e){I(769)||C(!0),t!==e&&n(e)};return Object(s.useEffect)((function(){var e=function(e){"Escape"===e.key&&(n(null),C(!1),w(!1))};return window.addEventListener("keyup",e),function(){window.removeEventListener("keyup",e)}}),[n,C,w]),Object(s.useEffect)((function(){var e=P?O(f.people):f.people;u(e)}),[P,f.people,u]),Object(s.useEffect)((function(){var e=function(){var e=I(769);p(e?function(){return!0}:function(){return!1}),e&&(g||t||F)&&S?C(!1):e||!(g||t||F)||S||C(!0)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[S,C,g,t,F,p]),Object(s.useEffect)((function(){if(i.length&&!X){N({peopleList:i,setPeopleList:u,nextSort:"sortByName",showFavourites:P,dispatch:h}),te(!0)}}),[h,i,u,X,P]),Object(r.jsxs)(r.Fragment,{children:[f.isNotificationOpen&&Object(r.jsx)(re,{isTimePassed:z,setIsTimePassed:q}),F&&Object(r.jsx)(G,{setShowDeletePersonDialog:B,removeItem:function(e){var t=f.people.filter((function(t){return t.id!==e}));try{!function(e,t,n,r){U.apply(this,arguments)}("userDatabase","1","people",e)}catch(n){console.log(n)}h({type:"REMOVE_PERSON",payload:{people:t}}),C(!1)},deletionUserID:Y,setCurrentPersonID:n}),Object(r.jsxs)("ul",{className:"people-list",children:[i&&i.map((function(e){return Object(r.jsx)($,{person:e,handleDeletePerson:ae,currentPersonID:t,setCurrentPersonID:n,handleSelectPerson:ce,setShowBackground:C},e.id)})),g&&Object(r.jsx)(Z,{setShowBackground:C,toggleAddPersonUI:function(){w((function(){return!g}))}})||Object(r.jsx)(ee,{handleAddPersonUIForLargerScreen:function(){w(!g)}})]}),k&&Object(r.jsx)(ne,{currentPersonID:t,setShowEditPersonUI:L,setShowBackground:C})]})};n(34);var ce=function(e){var t=e.setShowUI,n=Object(s.useContext)(d),a=n.currentPersonID,c=n.setCurrentPersonID;return Object(r.jsx)("main",{className:"home-main",children:Object(r.jsx)(ae,{currentPersonID:a,setCurrentPersonID:c,setShowUI:t})})};n(35);var oe=function(e){switch(e){case"sortByName":return"sortByAge";case"sortByAge":return"sortByMonth";case"sortByMonth":return"sortByName"}};var se=function(){var e=Object(s.useContext)(d),t=e.dispatch,n=e.favState,a=e.showAddPersonUIState,c=e.backgroundState,i=e.sortingState,u=Object(o.a)(a,2),l=u[0],p=u[1],b=Object(o.a)(n,2),f=b[0],O=b[1],h=Object(o.a)(c,2),v=h[0],m=h[1],x=Object(o.a)(i,2),_=x[0],y=x[1],g=Object(s.useContext)(j),E=Object(o.a)(g,2),I=E[0],w=E[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("nav",{className:"mobile-nav",children:[Object(r.jsx)("button",{className:"mobile-nav__btn mobile-nav__btn--side","aria-label":"Sort people list",onClick:function(){var e=oe(_);N({peopleList:I,setPeopleList:w,nextSort:e,showFavourites:f,dispatch:t}),y(e)},children:Object(r.jsx)("i",{className:"fas fa-sort-amount-down"})}),Object(r.jsx)("button",{className:"mobile-nav__btn","aria-label":"Add person",onClick:function(){m(!v),p(!l)},children:Object(r.jsx)("i",{className:"fas fa-plus"})}),Object(r.jsx)("button",{className:"mobile-nav__btn mobile-nav__btn--side","aria-label":"Toggle favourites",onClick:function(){return O(!f)},children:Object(r.jsx)("i",{className:"fas fa-star"})})]})})};n(36);var ie=function(){var e=Object(s.useContext)(d),t=e.showAddPersonUIState,n=e.showEditPersonUIState,a=e.backgroundState,c=e.currentPersonID,i=e.setCurrentPersonID,u=Object(o.a)(t,2),l=u[0],p=u[1],b=Object(o.a)(n,2),j=b[0],f=b[1],O=Object(o.a)(a,2),h=O[0],v=O[1];Object(s.useEffect)((function(){document.body.style.overflow=h?"hidden":"initial"}),[h]);var m=h?"dark-background dark-background--visible":"dark-background";return Object(r.jsx)("div",{className:m,onClick:function(e){(c||l||j)&&(e.stopPropagation(),v(!1),f(!1),p(!1),i(null))}})};var ue=function(e){var t=i.a.useState([]),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.jsx)(j.Provider,Object(D.a)({value:[a,c]},e))};function le(){return(le=Object(b.a)(l.a.mark((function e(t,n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(t,n,r);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var pe=function(e,t,n){return le.apply(this,arguments)};function be(){return(be=Object(b.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe("userDatabase","1","people");case 2:return t=e.sent,n={people:t,isNotificationOpen:!1,notificationContext:""},e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(){return be.apply(this,arguments)},je=function(e,t){switch(t.type){case"ADD_PERSON":return Object(D.a)(Object(D.a)({},e),{},{people:t.payload,isNotificationOpen:!0,notificationContent:"Person has been added."});case"REMOVE_PERSON":return Object(D.a)(Object(D.a)({},e),{},{people:t.payload.people,isNotificationOpen:!0,notificationContent:"Person has been deleted."});case"REMOVE_MODAL":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!1,notificationContent:""});case"INVALID_NAME":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"Name input must include at least one character."});case"INVALID_DATE":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"Please provide correct date format, (yyyy/mm/dd), or (dd/mm/yyyy) with any date seperators."});case"INVALID_DAY":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"Day value must be between 1 and 31 (inclusive)."});case"INVALID_MONTH":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"Month value must be between 1 and 12 (inclusive)."});case"INVALID_YEAR":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"Year value must be between 1000 and current year (inclusive)."});case"SORT_PEOPLE_BY_AGE":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"SORT BY AGE"});case"SORT_PEOPLE_BY_MONTH":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"SORT BY MONTH"});case"SORT_PEOPLE_BY_NAME":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"SORT BY NAME"});case"FILTER_PEOPLE_BY_NAME":return Object(D.a)(Object(D.a)({},e),{},{people:t.payload,isNotificationOpen:!1,notificationContent:""});case"INITIAL_LOAD":return Object(D.a)(Object(D.a)({},e),{},{people:t.payload.people,isNotificationOpen:!1,notificationContent:""});case"INVALID_FILE_TYPE":return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:'Invalid file type. Please provide ".jpeg", or ".png" file for the picture.'});case"ADD_FAVOURITE":var n=t.payload.name;return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"".concat(n," has been added to your favorites."),people:t.payload.people});case"REMOVE_FAVOURITE":var r=t.payload.name;return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"".concat(r," has been removed from your favorites."),people:t.payload.people});case"EDIT_PERSON":var a=t.payload.name;return Object(D.a)(Object(D.a)({},e),{},{isNotificationOpen:!0,notificationContent:"".concat(a,"'s information has been changed."),people:t.payload.people});default:throw new Error("Unhandled action type: ".concat(t.type))}};var fe=function(e){var t=Object(s.useReducer)(je,{people:[],isNotificationOpen:!1,notificationContent:""}),n=Object(o.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(null),u=Object(o.a)(i,2),p=u[0],j=u[1],f=Object(s.useState)(!1),O=Object(s.useState)(!1),h=Object(s.useState)(!1),v=Object(s.useState)(!1),m=Object(s.useState)("sortByName"),x=function(){var e=Object(b.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de();case 3:t=e.sent,n=t.people,c({type:"INITIAL_LOAD",payload:{people:n}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){x()}),[]),Object(r.jsx)(d.Provider,Object(D.a)({value:{state:a,dispatch:c,favState:v,backgroundState:h,showAddPersonUIState:f,showEditPersonUIState:O,currentPersonID:p,setCurrentPersonID:j,sortingState:m}},e))};var Oe=function(e){var t=Object(s.useState)(!1),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.jsx)(E.Provider,Object(D.a)({value:[a,c]},e))};var he=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(fe,{children:[Object(r.jsx)(ie,{}),Object(r.jsxs)(ue,{children:[Object(r.jsxs)(Oe,{children:[Object(r.jsx)(w,{}),Object(r.jsx)(ce,{})]}),Object(r.jsx)(se,{})]})]})})};n(37),n(38);c.a.render(Object(r.jsx)(he,{}),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.f0ea2da7.chunk.js.map