"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[340],{3053:function(n,e,t){t.d(e,{G:function(){return p}});var o,r,i=t(168),c=t(9434),u=t(6943),l=t(6444),s=t(3500),a=t(184),f=l.ZP.ul(o||(o=(0,i.Z)(["\ndisplay: grid;\njustify-content: center;\ngrid-template-columns: repeat(auto-fill, minmax(370px, 1fr));\ngrid-gap: ","px;   \n"])),(function(n){return n.theme.space[5]})),d=l.ZP.li(r||(r=(0,i.Z)(["\nposition: relative;\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\npadding: ","px;\nbox-shadow: 0px 6px 5px -5px ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.tertiary})),p=function(n){var e=n.todos,t=(0,c.I0)();return(0,a.jsx)(a.Fragment,{children:e&&(0,a.jsx)(f,{children:e.map((function(n){var e=n.id,o=n.todo,r=n.completed;return(0,a.jsx)(d,{children:(0,a.jsx)(s.z,{todo:o,completed:r,onToggleCompleted:function(){return t((0,u.KE)(e))},onDelete:function(){return t((0,u.aS)(e))}})},e)}))})})}},3500:function(n,e,t){t.d(e,{z:function(){return h}});var o,r,i,c=t(168),u=t(6444),l=t(2981),s=t(6856),a=t(184),f=u.ZP.div(o||(o=(0,c.Z)(["\ndisplay: flex;\njustify-content: flex-start;\nalign-items: center;\n"]))),d=u.ZP.input(r||(r=(0,c.Z)(["\ncursor: pointer;\nwidth: 25px;\nheight: 25px;\nbackground-color: ",";\ncolor: ",";\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black})),p=u.ZP.p(i||(i=(0,c.Z)(["\nmargin: 0 ","px;\nfont-size: ",";\nfont-weight: ",";\nfont-family: ",";\ncolor: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.colors.black})),h=function(n){var e=n.todo,t=n.completed,o=n.onToggleCompleted,r=n.onDelete;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(f,{children:[(0,a.jsx)(d,{type:"checkbox",checked:t,onChange:o}),(0,a.jsx)(p,{style:{textDecoration:t&&"line-through"},children:e})]}),(0,a.jsx)(l.h,{onClick:r,icon:(0,a.jsx)(s.I0,{})})]})}},4030:function(n,e,t){t.d(e,{l:function(){return u},I:function(){return l}});var o,r,i=t(168),c=t(6444),u=c.ZP.form(o||(o=(0,i.Z)(["\nmargin: 0 auto;\ndisplay: flex;\nalign-items: center;\nmax-width: 370px;\nborder-bottom: 1 px solid ",";\noverflow: hidden;\n"])),(function(n){return n.theme.colors.accent})),l=c.ZP.input(r||(r=(0,i.Z)(["\ndisplay: inline-block;\nwidth: 370px;\nfont-family: ",";\nfont-size: ",";\nborder: none;\nborder-bottom: 2px solid ",";\ncolor: ",";\nbackground-color: transparent;\noutline: none;\npadding: ","px ","px;\n  &::placeholder {\n    font: inherit;\n    font-size: ",";\n    color: ",";\n  };\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.black}))},9340:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var o,r,i,c,u,l,s,a,f,d=t(885),p=t(1413),h=t(168),x=t(9434),m=t(5176),g=t(6444),j=t(9085),b=t(6943),y=t(6856),v=t(4030),Z=t(184),w=g.ZP.button(o||(o=(0,h.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder: 0;\nbackground: transparent;\ntransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\ncursor: pointer;\noutline: none;\n  svg{\n    width: 30px;\n    height: 30px;\n    color: ",";\n  };\n"])),(function(n){return n.theme.colors.accent})),k=function(n){var e=n.onSave,t=(0,x.I0)(),o=(0,m.cI)(),r=o.register,i=o.handleSubmit,c=o.resetField;return(0,Z.jsxs)(v.l,{onSubmit:i((function(n){if(""===n.todo)return j.Am.info("Fill the todo text");t((0,b.rk)(n.todo)),e(),c("todo")})),children:[(0,Z.jsx)(v.I,(0,p.Z)((0,p.Z)({type:"text",placeholder:"start to write"},r("todo")),{},{autoComplete:"off",autoFocus:!0})),(0,Z.jsx)(w,{type:"submit",children:(0,Z.jsx)(y.cC1,{})})]})},P=t(9609),C=t(3500),z=t(5175),S=g.ZP.ul(r||(r=(0,h.Z)(["\ndisplay: grid;\njustify-content: center;\ngrid-template-columns: repeat(auto-fill, minmax(370px, 1fr));\ngrid-gap: ","px;   \n"])),(function(n){return n.theme.space[2]})),E=g.ZP.li(i||(i=(0,h.Z)(["\nposition: relative;\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\nbox-shadow: 0px 6px 5px -5px ",";\n"])),(function(n){return n.theme.colors.tertiary})),D=function(){var n=(0,x.v9)(P.GR),e=(0,x.v9)(P.Wy),t=(0,x.I0)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(S,{children:n.map((function(n){var e=n.id,o=n.todo,r=n.completed;return(0,Z.jsx)(E,{children:(0,Z.jsx)(C.z,{todo:o,completed:r,onToggleCompleted:function(){return t((0,b.KE)(e))},onDelete:function(){return t((0,b.aS)(e))}})},e)}))}),e.length>0&&(0,Z.jsx)(z.x,{children:"Done"}),(0,Z.jsx)(S,{children:e&&e.map((function(n){var e=n.id,o=n.todo,r=n.completed;return(0,Z.jsx)(E,{children:(0,Z.jsx)(C.z,{todo:o,completed:r,onToggleCompleted:function(){return t((0,b.KE)(e))},onDelete:function(){return t((0,b.aS)(e))}})},e)}))})]})},I=(t(3053),t(2981)),F=t(9586),L=t(2791),T=t(4164),W=g.ZP.div(c||(c=(0,h.Z)(["\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100vw;\nheight: 100vh;\nbackground-color: rgba(0, 0, 0, 0.5);\n"]))),_=g.ZP.div(u||(u=(0,h.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nmax-width: 370px;\nwidth: 100%;\npadding: ","px;\nbackground-color: ",";\nborder-radius: ",";\nbox-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.small})),G=document.querySelector("#modal-root"),K=function(n){var e=n.children,t=n.onClose;(0,L.useEffect)((function(){return window.addEventListener("keydown",o),function(){return window.removeEventListener("keydown",o)}}));var o=function(n){var e=n.code,o=n.target,r=n.currentTarget;"Escape"!==e&&o!==r||t()};return(0,T.createPortal)((0,Z.jsx)(W,{onClick:o,children:(0,Z.jsx)(_,{children:e})}),G)},R=g.ZP.ul(l||(l=(0,h.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: flex-end;\n"]))),q=g.ZP.li(s||(s=(0,h.Z)(["\ndisplay: flex;\nmargin: 0;\ntext-align: center;\n  &:not(:last-child) {\n    margin-right: ","px;\n  };\n"])),(function(n){return n.theme.space[3]})),A=g.ZP.span(a||(a=(0,h.Z)(["\nfont-size: ",";\nfont-weight: ",";\nfont-family: ",";\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.fonts.body})),Q=g.ZP.span(f||(f=(0,h.Z)(["\nfont-size: ",";\nfont-weight: ",";\nfont-family: ",";\ncolor: ",";\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.colors.accent})),$=function(){var n=(0,x.v9)(P.LC),e=(0,x.v9)(P.uP);return(0,Z.jsxs)(R,{children:[(0,Z.jsxs)(q,{children:[(0,Z.jsx)(Q,{children:"Total"}),(0,Z.jsxs)(A,{children:["\xa0",n.length]})]}),(0,Z.jsxs)(q,{children:[(0,Z.jsx)(Q,{children:"Completed"}),(0,Z.jsxs)(A,{children:["\xa0",e]})]})]})},B=t(8152),H=function(){var n=(0,L.useState)(!1),e=(0,d.Z)(n,2),t=e[0],o=e[1],r=function(){return o((function(n){return!t}))};return(0,Z.jsxs)(B.W,{children:[(0,Z.jsxs)(F.$,{children:[(0,Z.jsx)($,{}),(0,Z.jsx)(I.h,{onClick:r,icon:(0,Z.jsx)(y.oDQ,{})})]}),(0,Z.jsx)(D,{}),t&&(0,Z.jsx)(K,{onClose:r,children:(0,Z.jsx)(k,{onSave:r})})]})}},9609:function(n,e,t){t.d(e,{GR:function(){return c},LC:function(){return r},Wy:function(){return l},aE:function(){return i},uP:function(){return u}});var o=t(6916),r=function(n){return n.todos.items},i=function(n,e){return n.filter((function(n){return n.todo.toLowerCase().includes(e.toLowerCase())}))},c=(0,o.P1)([r],(function(n){return n.filter((function(n){return!n.completed}))})),u=(0,o.P1)([r],(function(n){return n.reduce((function(n,e){return e.completed?n+1:n}),0)})),l=(0,o.P1)([r],(function(n){return n.filter((function(n){return n.completed}))}))}}]);
//# sourceMappingURL=340.3b99fcb5.chunk.js.map