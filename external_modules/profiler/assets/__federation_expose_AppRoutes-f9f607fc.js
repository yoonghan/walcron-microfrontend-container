import{j as e}from"./jsx-runtime-2576e2e0.js";import v from"./__federation_expose_Contact-68aca434.js";import E from"./__federation_expose_Basic-198fa5e3.js";import{importShared as s}from"./__federation_fn_import.js";import y,{u as S,T as w,_ as u,c as f,p as P,g as R,a as _,b as d,d as j,L as h}from"./__federation_expose_SignIn-064b9fce.js";const b=await s("react"),L=b.createContext(null),p=L,$=await s("react");function g(){return $.useContext(p)}const M=typeof Symbol=="function"&&Symbol.for,C=M?Symbol.for("mui.nested"):"__THEME_NESTED__",k=await s("react");function B(t,n){return typeof n=="function"?n(t):{...t,...n}}function O(t){const{children:n,theme:r}=t,o=g(),i=k.useMemo(()=>{const c=o===null?r:B(o,r);return c!=null&&(c[C]=o!==null),c},[r,o]);return e.jsx(p.Provider,{value:i,children:n})}const H=await s("react"),m={};function l(t,n,r,o=!1){return H.useMemo(()=>{const i=t&&n[t]||n;if(typeof r=="function"){const c=r(i),a=t?u({},n,{[t]:c}):c;return o?()=>a:a}return t?u({},n,{[t]:r}):u({},n,r)},[t,n,r,o])}function N(t){const{children:n,theme:r,themeId:o}=t,i=S(m),c=g()||m,a=l(o,i,r),T=l(o,c,r,!0);return e.jsx(O,{theme:T,children:e.jsx(w.Provider,{value:a,children:n})})}const Y=await s("react"),{Link:D}=await s("react-router-dom"),x=Y.forwardRef((t,n)=>{const{href:r,...o}=t;return e.jsx(D,{ref:n,to:r,...o})}),F=f({palette:{primary:{main:P[500]},secondary:{main:R[500]}},components:{MuiLink:{defaultProps:{component:x}},MuiButtonBase:{defaultProps:{LinkComponent:x}}}}),I=f(F),W=["theme"];await s("react");function q(t){let{theme:n}=t,r=_(t,W);const o=n[d];return e.jsx(N,u({},r,{themeId:o?d:void 0,theme:o||n}))}const{Outlet:z}=await s("react-router-dom");function A(){return e.jsxs(q,{theme:I,children:[e.jsxs("div",{id:"sidebar",children:[e.jsx(j,{variant:"h1",component:"h2",children:"Navigation"}),e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(h,{href:"contacts/1",children:"Your Name"})}),e.jsx("li",{children:e.jsx(h,{href:"contacts/2",children:"Your Friend"})}),e.jsx("li",{children:e.jsx(h,{href:"basic",children:"Basic"})})]})})]}),e.jsx("div",{id:"detail",children:e.jsx(z,{})})]})}const{useRouteError:G}=await s("react-router-dom");function J(){const t=G();return e.jsxs("div",{id:"error-page",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{children:"Sorry, an unexpected error has occurred."}),e.jsx("p",{children:e.jsx("i",{children:t.statusText||t.message})})]})}const{useEffect:K}=await s("react"),Q=({onSignOut:t})=>(K(()=>{t()},[t]),e.jsx(j,{children:"Signing out"})),te=(t,n=e.jsx(J,{}),r={onSignIn:()=>{},onSignOut:()=>{}})=>({path:t,element:e.jsx(A,{}),errorElement:n,children:[{path:"contacts/:contactId",element:e.jsx(v,{})},{path:"basic",element:e.jsx(E,{})},{path:"auth/login",element:e.jsx(y,{...r})},{path:"auth/logout",element:e.jsx(Q,{...r})}]});export{te as default};
