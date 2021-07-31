(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),o=(n(14),n(9)),r=n(2),l=n.p+"static/media/logo.abb64ac9.svg",u=n(0);var d=function(e){var t=e.logoPic,n=e.loading;return Object(u.jsxs)("header",{className:"header header_position_center","aria-label":"\u0448\u0430\u043f\u043a\u0430",children:[Object(u.jsx)("div",{className:"header__loading ".concat(n&&"header__loading_active")}),Object(u.jsx)("div",{className:"header__container",children:Object(u.jsx)("img",{className:"header__logo ".concat(n&&"header__logo_loading"),src:t,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"})})]})},j=a.a.createContext();var b=function(e){var t=e.card,n=e.onDelete,a=e.onCardClick,s=e.onCardLike,i=Object(c.useContext)(j),o=t.owner._id===i._id,r="elements__trash ".concat(o?"":"elements__trash_hidden"),l=t.likes.some((function(e){return e._id===i._id})),d="elements__like-button ".concat(l?"elements__like-button_active":"");return Object(u.jsxs)("li",{className:"elements__card",children:[Object(u.jsx)("button",{onClick:function(){n(t)},className:r,children:Object(u.jsx)("div",{className:"elements__trash-icon"})}),Object(u.jsx)("div",{className:"elements__background",children:Object(u.jsx)("img",{className:"elements__picture",onClick:function(){a([t.link,t.name,t._id])},src:t.link,alt:"\u043f\u0435\u0439\u0437\u0430\u0436"})}),Object(u.jsxs)("div",{className:"elements__text-area",children:[Object(u.jsx)("h2",{className:"elements__title",children:t.name}),Object(u.jsxs)("div",{className:"elements__like",children:[Object(u.jsx)("button",{onClick:function(){s(t)},className:d,type:"button"}),Object(u.jsx)("p",{className:"elements__like-counter",children:t.likes.length})]})]})]})};var h=function(e){var t=e.cards,n=e.onEditAvatar,a=e.onEditProfile,s=e.onAddPlace,i=e.onCardLike,o=e.onCardDelete,r=e.onCardClick,l=Object(c.useContext)(j);return Object(u.jsxs)("main",{className:"main",children:[Object(u.jsxs)("section",{className:"profile profile_position_center",children:[Object(u.jsxs)("div",{className:"profile__picture-edit",children:[Object(u.jsx)("img",{className:"profile__picture",src:l.avatar,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(u.jsx)("button",{className:"profile__picture-edit-button",type:"button",onClick:n})]}),Object(u.jsxs)("div",{className:"profile__name-box",children:[Object(u.jsx)("h1",{className:"profile__name",children:l.name}),Object(u.jsx)("button",{className:"profile__edit-button",type:"button",onClick:a}),Object(u.jsx)("p",{className:"profile__profession",children:l.about})]}),Object(u.jsx)("button",{className:"profile__add-button",type:"button",onClick:s})]}),Object(u.jsxs)("section",{className:"elements","aria-label":"\u043c\u0435\u0441\u0442\u0430",children:[Object(u.jsx)("p",{className:"elements__empty ".concat(!t.length&&"elements__empty_active"),children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"}),Object(u.jsx)("ul",{className:"elements__table",children:t.map((function(e){return Object(u.jsx)(b,{onCardLike:i,onDelete:o,onCardClick:r,card:e},e._id)}))})]})]})};var p=function(){return Object(u.jsx)("footer",{className:"footer footer_position_center",children:Object(u.jsx)("p",{className:"footer__copy",children:"\xa9 2021 Mesto Russia"})})};var m=function(e){var t=e.name,n=e.isOpen,c=e.onClose,a=e.onSubmit,s=e.title,i=e.children,o=e.buttonTxt,r=e.buttonState;return Object(u.jsx)("div",{className:"popup ".concat(n&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&c()},children:Object(u.jsxs)("div",{className:"popup__container popup__container_position_center",children:[Object(u.jsx)("button",{className:"popup__exit",type:"button",onClick:c}),Object(u.jsx)("h2",{className:"popup__heading",children:s}),Object(u.jsxs)("form",{onSubmit:a,className:"form",name:t,children:[Object(u.jsx)("fieldset",{className:"form__input-container",children:i}),Object(u.jsx)("button",{disabled:r,type:"submit",className:"form__save-button",children:o})]})]})})};var f=function(e){var t,n,a,s=e.name,i=e.type,o=e.inputRef,l=e.validities,d=e.setButtonState,j=e.placeholder,b=e.minLength,h=e.maxLength,p=e.isOpen,m=Object(c.useState)(""),f=Object(r.a)(m,2),O=f[0],_=f[1],v=Object(c.useState)(null),x=Object(r.a)(v,2),k=x[0],g=x[1],C=Object(c.useState)(!1),N=Object(r.a)(C,2),y=N[0],S=N[1],L=Object(c.useCallback)((function(e){var t;clearTimeout(a),S(!1),a=setTimeout((function(){return S(!0)}),1e3),g(!0),t=e,l.some((function(e){return!e.current.validity.valid}))?(_(t.target.validationMessage),d(!0)):(_(""),d(!1))}),[]);return Object(c.useEffect)((function(){return g(null),o.current.addEventListener("input",L),function(){var e;return null===o||void 0===o||null===(e=o.current)||void 0===e?void 0:e.removeEventListener("input",L)}}),[p]),Object(u.jsxs)("label",{className:"form__field",children:[Object(u.jsx)("input",{type:i,className:"form__input ".concat(y&&null!==k&&!(null===(t=l[0].current)||void 0===t?void 0:t.validity.valid)&&"form__input-invalid","\n            "),id:"form-".concat(s),placeholder:j,minLength:b,maxLength:h,ref:o,required:!0}),Object(u.jsx)("span",{className:"form__error ".concat(y&&null!==k&&!(null===(n=l[0].current)||void 0===n?void 0:n.validity.valid)&&"form__error_active"),children:O})]})};var O=function(e){var t=e.onUpdateUser,n=e.isOpen,a=e.onClose,s=Object(c.useContext)(j),i=Object(c.useRef)(),o=Object(c.useRef)(),l=Object(c.useState)(!1),d=Object(r.a)(l,2),b=d[0],h=d[1];return Object(c.useEffect)((function(){h(!1),i.current.value=s.name,o.current.value=s.about}),[s,n]),Object(u.jsxs)(m,{name:"name",isOpen:n,onClose:a,onSubmit:function(e){e.preventDefault(),t({name:i.current.value,about:o.current.value},h)},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTxt:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonState:b,children:[Object(u.jsx)(f,{name:"name",type:"text",inputRef:i,validities:[i,o],setButtonState:h,placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",isOpen:n}),Object(u.jsx)(f,{name:"description",type:"text",inputRef:o,validities:[o,i],setButtonState:h,placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",isOpen:n})]})};var _=function(e){var t=e.onUpdateAvatar,n=e.isOpen,a=e.onClose,s=Object(c.useRef)(),i=Object(c.useState)(!1),o=Object(r.a)(i,2),l=o[0],d=o[1];return Object(c.useEffect)((function(){d(!0),s.current.value=""}),[n]),Object(u.jsx)(m,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTxt:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:n,onClose:a,onSubmit:function(e){e.preventDefault(),t({avatar:s.current.value},d)},buttonState:l,children:Object(u.jsx)(f,{name:"avatar",type:"url",inputRef:s,validities:[s],setButtonState:d,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",isOpen:n})})};var v=function(e){var t=e.onAddPlace,n=e.isOpen,a=e.onClose,s=Object(c.useRef)(),i=Object(c.useRef)(),o=Object(c.useState)(!0),l=Object(r.a)(o,2),d=l[0],j=l[1];return Object(c.useEffect)((function(){j(!0),s.current.value="",i.current.value=""}),[n]),Object(u.jsxs)(m,{name:"card",onSubmit:function(e){e.preventDefault(),t({name:s.current.value,link:i.current.value},j)},isOpen:n,onClose:function(){s.current.value="",i.current.value="",a()},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTxt:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",buttonState:d,children:[Object(u.jsx)(f,{name:"place",type:"text",inputRef:s,validities:[s,i],setButtonState:j,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",isOpen:n}),Object(u.jsx)(f,{name:"place-link",type:"url",inputRef:i,validities:[i,s],setButtonState:j,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",isOpen:n})]})};var x=function(e){var t=e.isOpen,n=e.card,c=e.onClose,a=e.cardName,s=e.cardId;return Object(u.jsx)("div",{className:"popup popup_content_picture  ".concat(t&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&c()},children:Object(u.jsxs)("div",{className:"popup__pic-container",children:[Object(u.jsx)("button",{className:"popup__exit",onClick:c,type:"button"}),Object(u.jsx)("img",{className:"popup__picture",src:n,alt:"\u043f\u0435\u0439\u0437\u0430\u0436"},s),Object(u.jsx)("p",{className:"popup__picture-title",children:a})]})})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onDelete,s=Object(c.useState)(!1),i=Object(r.a)(s,2),o=i[0],l=i[1];return Object(u.jsx)(m,{name:"delete",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a(l)},title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTxt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",buttonState:o})},g=n(7),C=n(8),N=new(function(){function e(t){var n=t.baseUrl,c=t.headers;Object(g.a)(this,e),this._url=n,this._headers=c}return Object(C.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"redactProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(t),about:"".concat(n)})}).then(this._checkResponse)}},{key:"redactAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(t)})}).then(this._checkResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(t),link:"".concat(n)})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"43e71961-3715-4de8-9b86-f45dfa570664","Content-Type":"application/json"}});var y=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),b=i[0],m=i[1],f=Object(c.useState)(!1),g=Object(r.a)(f,2),C=g[0],y=g[1],S=Object(c.useState)(!1),L=Object(r.a)(S,2),E=L[0],R=L[1],T=Object(c.useState)(null),P=Object(r.a)(T,2),A=P[0],D=P[1],U=Object(c.useState)(null),w=Object(r.a)(U,2),B=w[0],I=w[1],J=Object(c.useState)(null),F=Object(r.a)(J,2),M=F[0],G=F[1],H=Object(c.useState)(!1),q=Object(r.a)(H,2),z=q[0],K=q[1],Q=Object(c.useState)(null),V=Object(r.a)(Q,2),W=V[0],X=V[1],Y=Object(c.useState)([]),Z=Object(r.a)(Y,2),$=Z[0],ee=Z[1],te=Object(c.useState)({name:"",about:"",avatar:""}),ne=Object(r.a)(te,2),ce=ne[0],ae=ne[1],se=Object(c.useState)(!0),ie=Object(r.a)(se,2),oe=ie[0],re=ie[1],le=Object(c.useCallback)((function(e){"Escape"===e.key&&ue()}),[]),ue=function(){a(!1),m(!1),y(!1),R(!1),K(!1),document.removeEventListener("keydown",le)};return Object(c.useEffect)((function(){Promise.all([N.getUserInfo(),N.getCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],c=t[1];ae(n),ee(c)})).catch((function(e){return console.log(e)})).finally((function(){return re(!1)}))}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"page ".concat(oe&&"page_loading"),children:Object(u.jsxs)(j.Provider,{value:ce,children:[Object(u.jsx)(d,{logoPic:l,loading:oe}),Object(u.jsx)(h,{cards:$,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ce._id}));N.changeLikeCardStatus(e._id,t).then((function(t){return ee((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){K(!0),X(e)},onEditProfile:function(){m(!0),document.addEventListener("keydown",le)},onEditAvatar:function(){a(!0),document.addEventListener("keydown",le)},onAddPlace:function(){y(!0),document.addEventListener("keydown",le)},onCardClick:function(e){var t=Object(r.a)(e,3),n=t[0],c=t[1],a=t[2];G(a),D(n),R(!0),I(c),document.addEventListener("keydown",le)}}),Object(u.jsx)(p,{}),Object(u.jsxs)("section",{className:"popups","aria-label":"\u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u043e\u043a\u043d\u0430",children:[Object(u.jsx)(O,{isOpen:b,onClose:ue,onUpdateUser:function(e,t){t(!0),N.redactProfile(e).then((function(e){ae(e),ue()})).catch((function(e){return console.log(e)})).finally((function(){return t(!1)}))}}),Object(u.jsx)(_,{isOpen:n,onClose:ue,onUpdateAvatar:function(e,t){t(!0),N.redactAvatar(e).then((function(e){ae(e),ue()})).catch((function(e){return console.log(e)})).finally((function(){return t(!1)}))}}),Object(u.jsx)(v,{isOpen:C,onClose:ue,onAddPlace:function(e,t){return t(!0),N.addCard(e).then((function(e){ee([e].concat(Object(o.a)($))),ue()})).catch((function(e){return console.log(e)})).finally((function(){return t(!1)}))}}),Object(u.jsx)(x,{isOpen:E,onClose:ue,card:A,cardName:B,cardId:M}),Object(u.jsx)(k,{isOpen:z,onClose:ue,onDelete:function(e){e(!0),N.deleteCard(W._id).then((function(){return ee((function(e){return e.filter((function(e){return e._id!==W._id}))}))})).catch((function(e){return console.log(e)})).finally((function(){ue(),e(!1)}))}})]})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.0d000fc6.chunk.js.map