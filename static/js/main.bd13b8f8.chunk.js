(this["webpackJsonpbirthday-reminder-app"]=this["webpackJsonpbirthday-reminder-app"]||[]).push([[0],Array(18).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(10),s=n.n(r),c=n(4),o=n.n(c),i=n(5),u=n(2),l=n(1),d=(n(18),n(19),Object(l.createContext)(null)),p=n(11);function b(e,t){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,Object(p.a)(t,n,{upgrade:function(e,t,n,a){e.createObjectStore("people",{keyPath:"id"}),e.createObjectStore("favourites",{keyPath:"id"})}});case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return");case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function O(e,t,n){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(o.a.mark((function e(t,n,a){var r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,e.prev=1,e.next=4,b(t,n);case 4:r=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return s=r.transaction(a,"readwrite"),c=s.objectStore(a),e.abrupt("return",c);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function v(e,t,n,a){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(o.a.mark((function e(t,n,a,r){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(n,a,r);case 3:return s=e.sent,e.next=6,s.put(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e,t,n){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(o.a.mark((function e(t,n,a){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(t,n,a);case 3:return r=e.sent,e.next=6,r.getAll();case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function _(e,t,n,a){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(o.a.mark((function e(t,n,a,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(t,n,a);case 3:e.sent.delete(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function I(e){return new Promise((function(t,n){var a=new FileReader;a.addEventListener("loadend",(function(e){t(a.result)})),a.addEventListener("error",n),a.readAsArrayBuffer(e)}))}var g=function(e,t,n,a){n({type:a?"FILTER_FAVOURITES_BY_NAME":"FILTER_PEOPLE_BY_NAME",payload:e.filter((function(e){var n=e.name.toLowerCase();return t=t.toLowerCase(),n.includes(t)}))})};var E=function(e){var t=e.setShowSearchBox,n=Object(l.useContext)(d),r=n.dispatch,s=n.favState,c=Object(u.a)(s,1)[0],p=Object(l.useRef)(null),b=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=p.current.value,n=null,!c){e.next=8;break}return e.next=5,m("userDatabase","1","favourites");case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,m("userDatabase","1","people");case 10:n=e.sent;case 11:n?g(n,t,r,c):console.log("Data could not found!");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(!1),n=null,a="",!c){e.next=9;break}return e.next=6,m("userDatabase","1","favourites");case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,m("userDatabase","1","people");case 11:n=e.sent;case 12:n?g(n,a,r,c):console.log("Data could not found!");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"search-box",children:[Object(a.jsx)("input",{className:"search-box__search-input",type:"search",placeholder:"Search by name",onChange:b,ref:p}),Object(a.jsx)("button",{className:"search-box__close-btn",onClick:j,children:Object(a.jsx)("i",{className:"far fa-times-circle"})})]})};var N=function(){var e=Object(l.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.jsx)("header",{className:"app-head",children:Object(a.jsx)("nav",{className:"app-head-nav",children:n&&Object(a.jsx)(E,{setShowSearchBox:r})||Object(a.jsx)("button",{className:"app-head-nav__search-btn",onClick:function(){return r(!n)},children:Object(a.jsx)("i",{className:"fas fa-search"})})})})};n(20);var P=function(e){if(e instanceof File||e instanceof Blob)return URL.createObjectURL(e);if("string"===typeof e&&(e.includes(".png")||e.includes(".jpeg")||e.includes(".jpg")))return e;throw Error("Input must be a File, String (includes .png, .jpeg or .jpg), or Blob object.")},S=n(6);n(21);var D=function(e,t){return e.find((function(e){return e.id===t}))};var C=function(e){var t=e.currentPersonID,n=e.setCurrentPersonID,r=Object(l.useContext)(d),s=r.state,c=r.dispatch,o=r.backgroundState,i=r.showEditPersonUIState,p=D(s.people,t),b=Object(u.a)(o,2)[1],j=Object(u.a)(i,2)[1],O=function(){return s.favourites.some((function(e){return e.id===t}))},f=function(){c({type:"ADD_FAVOURITE",payload:[].concat(Object(S.a)(s.favourites),[p])}),v(p,"userDatabase","1","favourites"),n(null)},h=function(){var e=s.favourites.filter((function(e){return e.id!==t}));c({type:"REMOVE_FAVOURITE",payload:e}),_("userDatabase","1","favourites",t),n(null)};return Object(a.jsxs)("div",{className:"person-options-container",children:[Object(a.jsxs)("p",{className:"person-options-container__name",children:["Person: ",p.name]}),Object(a.jsxs)("ul",{className:"person-options-list",children:[Object(a.jsx)("li",{className:"person-options-list__item",children:Object(a.jsx)("button",{className:"person-options-list__btn",onClick:function(e){return function(e){return e.stopPropagation(),b(!1),O()?h:f}(e)()},children:O()?"Remove from favourites":"Add to favourites"})}),Object(a.jsx)("hr",{className:"person-options-list__line"}),Object(a.jsx)("li",{className:"person-options-list__item",children:Object(a.jsx)("button",{className:"person-options-list__btn",onClick:function(e){return function(e){e.stopPropagation(),j(!0),setTimeout((function(){return n(null)}),0)}(e)},children:"Edit"})})]})]})};var A=function(e){var t=e.person,n=e.removeItemHandler,r=e.currentPersonID,s=e.setCurrentPersonID,c=e.selectPersonHandler,o=t.id,i=t.name,u=t.birthday,l=t.picture,d=r===o?"person person--highlighted":"person";return Object(a.jsxs)("div",{className:d,onKeyPress:function(e){return function(e){"Enter"!==e.key||r||c(o)}(e)},onClick:function(){return c(o)},tabIndex:1,children:[r===o&&Object(a.jsx)(C,{currentPersonID:r,setCurrentPersonID:s}),Object(a.jsx)("div",{className:"person-img-container",children:Object(a.jsx)("img",{className:"person-img-container__img",src:function(){var e,t=null;try{if("string"!==typeof l){var n=new Blob([l],{type:e});t=P(n)}else t=l}catch(a){console.log(a)}return t}(),alt:i})}),Object(a.jsxs)("div",{className:"person-info",children:[Object(a.jsx)("p",{className:"person-info__name",children:i}),Object(a.jsx)("p",{className:"person-info__birthday",children:u})]}),Object(a.jsx)("div",{className:"person-controls",children:Object(a.jsx)("button",{className:"person-controls__remove-btn",onClick:function(e){n(e,o)},children:Object(a.jsx)("i",{className:"fas fa-trash"})})})]})};n(22);var w=function(e){var t=e.toggleAddPersonUIHandlerForLargerScreen;return Object(a.jsx)("div",{className:"empty-box",tabIndex:1,onClick:t,children:Object(a.jsx)("div",{className:"empty-box__icon-container",children:Object(a.jsx)("i",{className:"fa fa-plus empty-box__add-icon","aria-hidden":"true"})})})};n(23),n(24);var k=function(e){var t=e.setShowDeletePersonDialog,n=e.removeItem,r=e.deletionUserID,s=function(e){"Yes"===e.target.textContent&&n(r),t(!1)};return Object(a.jsxs)("div",{className:"delete-person-dialog",children:[Object(a.jsx)("p",{className:"delete-person-dialog__text",children:"Are you really want to delete this person?"}),Object(a.jsxs)("div",{className:"delete-person-dialog-controls",children:[Object(a.jsx)("button",{className:"delete-person-dialog-controls__btn",onClick:s,children:"Yes"}),Object(a.jsx)("button",{className:"delete-person-dialog-controls__btn delete-person-dialog-controls__btn--no-margin",onClick:s,children:"No"})]})]})};var T=function(e,t){var n=t.filter((function(t){return t.id!==e}));return _("userDatabase","1","favourites",e),n};n(25);var R=function(e){var t=e.nameContainer,n=e.dateContainer,r=e.name,s=e.birthday,c=null;return s&&(c=s.split(".").reverse().join("-")),Object(a.jsxs)("div",{className:"add-person-ui-info-container",children:[Object(a.jsx)("input",{type:"text",className:"add-person-ui-info-container__name",ref:t,maxLength:"15",placeholder:"Name",defaultValue:r||""}),Object(a.jsx)("input",{type:"date",className:"add-person-ui-info-container__birthday",ref:n,defaultValue:c||""})]})};n(26);var M=function(e){var t=e.handleAcceptClick;return Object(a.jsx)("div",{className:"edit-person-ui-controls",children:Object(a.jsx)("button",{className:"edit-person-ui-controls__accept-btn",onClick:function(e){return t(e)},children:Object(a.jsx)("i",{className:"fas fa-check-circle edit-person-ui-controls__icon","aria-hidden":!0})})})},U=function(e){try{if("string"===typeof e)return!0;var t=e.type;return"image/jpeg"===t||"image/png"===t||e instanceof ArrayBuffer}catch(n){return console.log(n),!1}};n(27);var L=function(e){var t=e.setDidUserUploadPicture,n=e.setCurrentPicture,r=Object(l.useContext)(d).dispatch;return Object(a.jsxs)("div",{className:"picture-input-container",children:[Object(a.jsx)("label",{htmlFor:"picture",className:"picture-input-container__label",children:Object(a.jsx)("i",{className:"fas fa-camera picture-input-container__icon","aria-hidden":!0})}),Object(a.jsx)("input",{id:"picture",type:"file",className:"picture-input-container__picture",accept:"image/png, image/jpeg",onChange:function(e){var a=e.target.files[0];U(a)?(t(!0),n(a)):r({type:"INVALID_FILE_TYPE"})},hidden:!0})]})},B=(n(28),function(e){return e.split("-").reverse().join(".")}),F=n.p+"static/media/no-picture.2fda6558.png";n(29);var V=function(e){var t=e.createFileURL,n=e.currentPicture,r=e.nameContainer;return Object(a.jsx)("div",{className:"person-img-container",children:Object(a.jsx)("img",{className:"person-img-container__img",src:t(n),alt:r.current.value})})};var Y=function(e){var t=e.currentPersonID,n=(e.setCurrentPersonID,e.setShowEditPersonUI),r=e.setShowBackground,s=t,c=Object(l.useRef)(null),o=Object(l.useRef)(null),i=Object(l.useContext)(d),p=i.state,b=i.dispatch,j=Object(l.useState)(s),O=Object(u.a)(j,1)[0],f=Object(l.useState)(null),h=Object(u.a)(f,2),m=h[0],x=h[1],_=Object(l.useState)(!1),y=Object(u.a)(_,2),I=y[0],g=y[1],E=D(p.people,O),N=function(e){if(D(p.favourites,O)){var t=p.favourites.filter((function(e){return e.id!==O}));return[].concat(Object(S.a)(t),[e])}},C=function(e,t,n){return{id:O,name:e,birthday:t,picture:n}};return Object(a.jsxs)("div",{className:"edit-person-ui",children:[I?Object(a.jsx)(V,{createFileURL:P,currentPicture:m,nameContainer:c}):Object(a.jsx)(L,{setDidUserUploadPicture:g,setCurrentPicture:x}),Object(a.jsx)(R,{name:E.name,birthday:E.birthday,currentPersonID:t,nameContainer:c,dateContainer:o}),Object(a.jsx)(M,{handleAcceptClick:function(e){e.stopPropagation();var t=c.current.value,a=o.current.value,s=B(a),i=C(t,s,m||F),u=p.people.filter((function(e){return e.id!==O})),l=[].concat(Object(S.a)(u),[i]),d=N(i);v(i,"userDatabase","1","people"),v(i,"userDatabase","1","favourites"),b({type:"EDIT_PERSON",payload:{people:l,favourites:d||p.favourites}}),r(!1),n(!1)}})]})};n(30);var H=function(e){var t=e.isTimePassed,n=e.setIsTimePassed,r=Object(l.useContext)(d),s=r.state,c=r.dispatch;Object(l.useEffect)((function(){t&&(n(!1),setTimeout(o,2e3))}));var o=function(){c({type:"REMOVE_MODAL"}),n(!0)};return Object(a.jsx)("p",{className:"modal",children:s.modalContent})},G=(n(31),function(e,t,n){return e.length<=0?"INVALID_NAME":10!==t.length?"INVALID_DATE":!!U(n)||"INVALID_FILE_TYPE"});n(32);var J=function(e){var t=e.addPersonHandler;return Object(a.jsx)("div",{className:"add-person-ui-controls",children:Object(a.jsx)("button",{className:"add-person-ui-controls__add-btn",onClick:function(){t()},children:Object(a.jsx)("i",{className:"fa fa-plus-circle add-person-ui-controls__icon","aria-hidden":"true"})})})};var K=function(e){var t=e.showAddPersonUIHandler,n=Object(l.useContext)(d),r=n.state,s=n.dispatch,c=Object(l.useState)(!1),p=Object(u.a)(c,2),b=p[0],j=p[1],O=Object(l.useState)(null),f=Object(u.a)(O,2),h=f[0],m=f[1],x=Object(l.useRef)(null),_=Object(l.useRef)(null),y=function(){var e=Object(i.a)(o.a.mark((function e(){var n,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=x.current.value,a=_.current.value,!h){e.next=8;break}return e.next=5,I(h);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=F;case 9:r=e.t0,c=G(n,a,r),console.log(r),e.t1=c,e.next="INVALID_NAME"===e.t1||"INVALID_DATE"===e.t1||"INVALID_FILE_TYPE"===e.t1?15:17;break;case 15:return s({type:c}),e.abrupt("break",20);case 17:return g(n,a,r),t(),e.abrupt("break",20);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e,t,n){e=e.charAt(0).toUpperCase()+e.slice(1);var a=B(t),c=E(e,a,n);s({type:"ADD_ITEM",payload:[].concat(Object(S.a)(r.people),[c])}),v(c,"userDatabase","1","people")},E=function(e,t,n){return{id:(new Date).getTime().toString(),name:e,birthday:t,picture:n}};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"add-person-ui",children:[b?Object(a.jsx)(V,{createFileURL:P,currentPicture:h,nameContainer:x}):Object(a.jsx)(L,{setDidUserUploadPicture:j,currentPicture:h,setCurrentPicture:m}),Object(a.jsx)(R,{nameContainer:x,dateContainer:_}),Object(a.jsx)(J,{addPersonHandler:y})]})})};var q=function(e){var t=e.currentPersonID,n=e.setCurrentPersonID,r=e.showUI,s=Object(l.useContext)(d),c=s.state,o=s.dispatch,i=s.favState,p=s.backgroundState,b=s.showEditPersonUIState,j=Object(u.a)(i,1)[0],O=Object(l.useState)(!1),f=Object(u.a)(O,2),v=f[0],h=f[1],m=Object(u.a)(b,2),x=m[0],y=m[1],I=Object(l.useState)(null),g=Object(u.a)(I,2),E=g[0],N=g[1],P=Object(u.a)(p,2)[1],S=Object(l.useState)(!0),D=Object(u.a)(S,2),C=D[0],R=D[1],M=Object(l.useState)(!1),U=Object(u.a)(M,2),L=U[0],B=U[1],F=j?c.favourites:c.people,V=function(e,t){e.stopPropagation(),h(!0),N(t)},G=function(e){P(!0),t!==e&&r&&n(e)},J=function(e){"Escape"===e.key&&(n(null),P(!1))};return Object(l.useEffect)((function(){t?window.addEventListener("keyup",J):window.removeEventListener("keyup",J)})),Object(a.jsxs)(a.Fragment,{children:[c.isModalOpen&&Object(a.jsx)(H,{isTimePassed:C,setIsTimePassed:R}),v&&Object(a.jsx)(k,{setShowDeletePersonDialog:h,removeItem:function(e){var t=c.people,n=T(e,c.favourites),a=t.filter((function(t){return t.id!==e}));_("userDatabase","1","people",e),o({type:"REMOVE_ITEM",payload:{people:a,favourites:n}}),P(!1)},deletionUserID:E}),Object(a.jsxs)("ul",{className:"person-list",children:[F.map((function(e){return Object(a.jsx)(A,{person:e,removeItemHandler:V,currentPersonID:t,setCurrentPersonID:n,selectPersonHandler:G,setShowBackground:P},e.id)})),L&&Object(a.jsx)(K,{showAddPersonUIHandler:function(){B(!L)}})||Object(a.jsx)(w,{toggleAddPersonUIHandlerForLargerScreen:function(){B(!L)}})]}),x&&Object(a.jsx)(Y,{currentPersonID:t,setCurrentPersonID:n,setShowEditPersonUI:y,setShowBackground:P})]})};n(33);var z=function(e){var t=e.showUI,n=e.setShowUI,r=e.currentPersonID,s=e.setCurrentPersonID;return Object(a.jsx)("main",{className:"home-main",children:Object(a.jsx)(q,{currentPersonID:r,setCurrentPersonID:s,showUI:t,setShowUI:n})})};n(34);var Q=function(e){var t=e.state,n=e.dispatch,a=e.sortState,r=e.showFavourites,s=r&&t.favourites||t.people;"sortByAge"===a?function(e,t,n){var a=e.sort((function(e,t){var n=e.birthday.split("."),a=Object(u.a)(n,3),r=a[0],s=a[1],c=a[2],o=t.birthday.split("."),i=Object(u.a)(o,3),l=i[0],d=i[1],p=i[2];return new Date(c,s,r).getTime()-new Date(p,d,l).getTime()}));t(n?{type:"SORT_FAVOURITES_BY_AGE",payload:a}:{type:"SORT_PEOPLE_BY_AGE",payload:a})}(s,n,r):"sortByMonth"===a?function(e,t,n){var a=e.sort((function(e,t){var n=e.birthday.split("."),a=Object(u.a)(n,2),r=a[0],s=a[1],c=t.birthday.split("."),o=Object(u.a)(c,2);return+r+10*+s-(+o[0]+10*+o[1])}));t(n?{type:"SORT_FAVOURITES_BY_MONTH",payload:a}:{type:"SORT_PEOPLE_BY_MONTH",payload:a})}(s,n,r):"sortByName"===a&&function(e,t,n){var a=e.sort((function(e,t){var n=Object(u.a)(e.name,1)[0],a=Object(u.a)(t.name,1)[0];return n.charCodeAt(0)-a.charCodeAt(0)}));t(n?{type:"SORT_FAVOURITES_BY_NAME",payload:a}:{type:"SORT_PEOPLE_BY_NAME",payload:a})}(s,n,r)};var W=function(){var e=Object(l.useContext)(d),t=e.state,n=e.dispatch,r=e.favState,s=e.showAddPersonUIState,c=e.backgroundState,o=Object(u.a)(s,2),i=o[0],p=o[1],b=Object(u.a)(r,2),j=b[0],O=b[1],f=Object(u.a)(c,2),v=f[0],h=f[1],m=Object(l.useState)("sortByAge"),x=Object(u.a)(m,2),_=x[0],y=x[1],I=function(){h(!v),p(!i)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"mobile-nav",children:[Object(a.jsx)("button",{className:"mobile-nav__add-btn mobile-nav__add-btn--side",onClick:function(){switch(_){case"sortByAge":y("sortByName");break;case"sortByName":y("sortByMonth");break;case"sortByMonth":y("sortByAge")}Q({state:t,dispatch:n,sortState:_,showFavourites:j})},children:Object(a.jsx)("i",{className:"fas fa-sort-amount-down"})}),Object(a.jsx)("button",{className:"mobile-nav__add-btn",onClick:I,children:Object(a.jsx)("i",{className:"fas fa-plus"})}),Object(a.jsx)("button",{className:"mobile-nav__add-btn mobile-nav__add-btn--side",onClick:function(){return O(!j)},children:Object(a.jsx)("i",{className:"fas fa-star"})})]}),i&&Object(a.jsx)(K,{showAddPersonUIHandler:I})]})},X=n(3),Z=function(e,t){switch(t.type){case"ADD_ITEM":return Object(X.a)(Object(X.a)({},e),{},{people:t.payload,isModalOpen:!0,modalContent:"Person is added."});case"REMOVE_ITEM":var n=t.payload.people,a=t.payload.favourites;return Object(X.a)(Object(X.a)({},e),{},{people:n,favourites:a,isModalOpen:!0,modalContent:"Person is removed."});case"REMOVE_MODAL":return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!1,modalContent:""});case"INVALID_NAME":return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:"Name input should includes at least one character."});case"INVALID_DATE":return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:"Please provide correct date format."});case"SORT_PEOPLE_BY_AGE":return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:"SORT BY AGE"});case"SORT_PEOPLE_BY_MONTH":return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:"SORT BY MONTH"});case"SORT_PEOPLE_BY_NAME":return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:"SORT BY NAME"});case"SORT_FAVOURITES_BY_AGE":case"SORT_FAVOURITES_BY_NAME":case"SORT_FAVOURITES_BY_MONTH":return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:"SORT BY AGE",favourites:t.payload});case"FILTER_PEOPLE_BY_NAME":return Object(X.a)(Object(X.a)({},e),{},{people:t.payload,isModalOpen:!1,modalContent:""});case"FILTER_FAVOURITES_BY_NAME":return Object(X.a)(Object(X.a)({},e),{},{favourites:t.payload,isModalOpen:!1,modalContent:""});case"INITIAL_LOAD":return Object(X.a)(Object(X.a)({},e),{},{people:t.payload.people,favourites:t.payload.favourites,isModalOpen:!1,modalContent:""});case"INVALID_FILE_TYPE":return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:'Invalid file type. Please provide ".jpeg", or ".png" file for the picture.'});case"ADD_FAVOURITE":var r=t.payload[t.payload.length-1].name;return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:"".concat(r," has been added to your favorites."),favourites:t.payload});case"REMOVE_FAVOURITE":var s=t.payload.length&&t.payload[t.payload.length-1].name,c=s?"".concat(s," has been removed from your favorites."):"Favourites have been cleared.";return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:c,favourites:t.payload});case"EDIT_PERSON":var o=t.payload.favourites,i=o[o.length-1].name;return Object(X.a)(Object(X.a)({},e),{},{isModalOpen:!0,modalContent:"".concat(i,"'s information has been changed."),people:t.payload.people,favourites:o})}};function $(){return($=Object(i.a)(o.a.mark((function e(t,n,a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(t,n,a);case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var ee=function(e,t,n){return $.apply(this,arguments)};function te(){return(te=Object(i.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee("userDatabase","1","people");case 2:return t=e.sent,e.next=5,ee("userDatabase","1","favourites");case 5:return n=e.sent,a={people:t,isModalOpen:!1,modalContext:"",favourites:n},e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=function(){return te.apply(this,arguments)};n(35);var ae=function(e){var t=Object(l.useContext)(d),n=t.showAddPersonUIState,r=t.showEditPersonUIState,s=Object(u.a)(n,2),c=s[0],o=s[1],i=Object(u.a)(r,2),p=i[0],b=i[1],j=e.showBackground,O=e.setShowBackground,f=e.currentPersonID,v=e.setCurrentPersonID;Object(l.useEffect)((function(){document.body.style.overflow=j?"hidden":"initial"}),[j]);var h=j?"dark-background dark-background--visible":"dark-background";return Object(a.jsx)("div",{className:h,onClick:function(e){(f||c||p)&&(e.stopPropagation(),O(!1),b(!1),o(!1),v(null))}})};var re=function(){var e=Object(l.useReducer)(Z,{people:[],isModalOpen:!1,modalContent:"",favourites:[]}),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(l.useState)(!1),c=Object(u.a)(s,2),p=c[0],b=c[1],j=Object(l.useState)(!0),O=Object(u.a)(j,2),f=O[0],v=O[1],h=Object(l.useState)(null),m=Object(u.a)(h,2),x=m[0],_=m[1],y=Object(l.useState)(!1),I=Object(u.a)(y,2),g=I[0],E=I[1],P=Object(l.useState)(!1),S=Object(u.a)(P,2),D=S[0],C=S[1],A=Object(l.useState)(!1),w=Object(u.a)(A,2),k=[D,C],T=[w[0],w[1]],R=[g,E],M=[p,b],U=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:t=e.sent,n=t.people,a=t.favourites,r({type:"INITIAL_LOAD",payload:{people:n,favourites:a}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){U()}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(d.Provider,{value:{state:n,dispatch:r,favState:M,backgroundState:R,showAddPersonUIState:k,showEditPersonUIState:T},children:[Object(a.jsx)(ae,{showBackground:g,setShowBackground:E,currentPersonID:x,setCurrentPersonID:_}),Object(a.jsx)(N,{}),Object(a.jsx)(z,{showUI:f,setShowUI:v,currentPersonID:x,setCurrentPersonID:_}),Object(a.jsx)(W,{})]})})};n(36);s.a.render(Object(a.jsx)(re,{}),document.getElementById("root"))}]),[[37,1,2]]]);
//# sourceMappingURL=main.bd13b8f8.chunk.js.map