import{S as j,i as z,s as A,C,w as x,x as T,y as E,z as F,A as O,q as w,o as U,B as N,K,af as q,k as h,m as g,g as v,d as m,e as f,t as B,c as $,a as b,h as y,b as u,F as p,a7 as R,U as S}from"../../chunks/vendor-858a832d.js";import{M as G}from"../../chunks/_markdown-8d17e6d4.js";import{p as H,C as J,a as D,r as V}from"../../chunks/actions-b360e665.js";import"../../chunks/stores-a44b3550.js";import"../../chunks/Ads-0d8ad148.js";import"../../chunks/index-e929a61d.js";import"../../chunks/SEO-a7e6661e.js";import"../../chunks/preload-helper-ec9aa979.js";import"../../chunks/Translate-9a953910.js";function L(c){let t,o,l,s,a,r,e,n,d;return{c(){t=f("div"),o=f("button"),l=B("Button"),s=h(),a=f("button"),r=B("Button"),e=h(),n=f("button"),d=B("Button"),this.h()},l(i){t=$(i,"DIV",{class:!0});var _=b(t);o=$(_,"BUTTON",{class:!0});var I=b(o);l=y(I,"Button"),I.forEach(m),s=g(_),a=$(_,"BUTTON",{class:!0});var P=b(a);r=y(P,"Button"),P.forEach(m),e=g(_),n=$(_,"BUTTON",{class:!0});var k=b(n);d=y(k,"Button"),k.forEach(m),_.forEach(m),this.h()},h(){u(o,"class","btn btn-active"),u(a,"class","btn"),u(n,"class","btn"),u(t,"class","btn-group")},m(i,_){v(i,t,_),p(t,o),p(o,l),p(t,s),p(t,a),p(a,r),p(t,e),p(t,n),p(n,d)},d(i){i&&m(t)}}}function Q(c){let t,o=`<div class="$$btn-group">
  <button class="$$btn $$btn-active">Button</button>
  <button class="$$btn">Button</button>
  <button class="$$btn">Button</button>
</div>`,l,s,a,r;return{c(){t=f("pre"),l=B(o),this.h()},l(e){t=$(e,"PRE",{slot:!0});var n=b(t);l=y(n,o),n.forEach(m),this.h()},h(){u(t,"slot","html")},m(e,n){v(e,t,n),p(t,l),a||(r=R(s=V.call(null,t,{to:c[0]})),a=!0)},p(e,n){s&&S(s.update)&&n&1&&s.update.call(null,{to:e[0]})},d(e){e&&m(t),a=!1,r()}}}function W(c){let t,o,l,s,a,r,e,n;return{c(){t=f("div"),o=f("input"),l=h(),s=f("input"),a=h(),r=f("input"),e=h(),n=f("input"),this.h()},l(d){t=$(d,"DIV",{class:!0});var i=b(t);o=$(i,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),l=g(i),s=$(i,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),a=g(i),r=$(i,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),e=g(i),n=$(i,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),i.forEach(m),this.h()},h(){u(o,"type","radio"),u(o,"name","options"),u(o,"data-title","1"),u(o,"class","btn"),u(s,"type","radio"),u(s,"name","options"),u(s,"data-title","2"),s.checked="checked",u(s,"class","btn"),u(r,"type","radio"),u(r,"name","options"),u(r,"data-title","3"),u(r,"class","btn"),u(n,"type","radio"),u(n,"name","options"),u(n,"data-title","4"),u(n,"class","btn"),u(t,"class","btn-group")},m(d,i){v(d,t,i),p(t,o),p(t,l),p(t,s),p(t,a),p(t,r),p(t,e),p(t,n)},d(d){d&&m(t)}}}function X(c){let t,o=`<div class="$$btn-group">
  <input type="radio" name="options" data-title="1" class="$$btn">
  <input type="radio" name="options" data-title="2" class="$$btn" checked>
  <input type="radio" name="options" data-title="3" class="$$btn">
  <input type="radio" name="options" data-title="4" class="$$btn">
</div>`,l,s,a,r;return{c(){t=f("pre"),l=B(o),this.h()},l(e){t=$(e,"PRE",{slot:!0});var n=b(t);l=y(n,o),n.forEach(m),this.h()},h(){u(t,"slot","html")},m(e,n){v(e,t,n),p(t,l),a||(r=R(s=V.call(null,t,{to:c[0]})),a=!0)},p(e,n){s&&S(s.update)&&n&1&&s.update.call(null,{to:e[0]})},d(e){e&&m(t),a=!1,r()}}}function Y(c){let t,o,l,s,a,r;return t=new J({props:{data:[{type:"component",class:"btn-group",desc:"Container for grouping multiple buttons"}]}}),l=new D({props:{title:"Button group",$$slots:{html:[Q],default:[L]},$$scope:{ctx:c}}}),a=new D({props:{title:"Button group with radio buttons",$$slots:{html:[X],default:[W]},$$scope:{ctx:c}}}),{c(){x(t.$$.fragment),o=h(),x(l.$$.fragment),s=h(),x(a.$$.fragment)},l(e){T(t.$$.fragment,e),o=g(e),T(l.$$.fragment,e),s=g(e),T(a.$$.fragment,e)},m(e,n){E(t,e,n),v(e,o,n),E(l,e,n),v(e,s,n),E(a,e,n),r=!0},p(e,n){const d={};n&5&&(d.$$scope={dirty:n,ctx:e}),l.$set(d);const i={};n&5&&(i.$$scope={dirty:n,ctx:e}),a.$set(i)},i(e){r||(w(t.$$.fragment,e),w(l.$$.fragment,e),w(a.$$.fragment,e),r=!0)},o(e){U(t.$$.fragment,e),U(l.$$.fragment,e),U(a.$$.fragment,e),r=!1},d(e){N(t,e),e&&m(o),N(l,e),e&&m(s),N(a,e)}}}function Z(c){let t,o;const l=[c[1],M];let s={$$slots:{default:[Y]},$$scope:{ctx:c}};for(let a=0;a<l.length;a+=1)s=C(s,l[a]);return t=new G({props:s}),{c(){x(t.$$.fragment)},l(a){T(t.$$.fragment,a)},m(a,r){E(t,a,r),o=!0},p(a,[r]){const e=r&2?F(l,[r&2&&O(a[1]),r&0&&O(M)]):{};r&5&&(e.$$scope={dirty:r,ctx:a}),t.$set(e)},i(a){o||(w(t.$$.fragment,a),o=!0)},o(a){U(t.$$.fragment,a),o=!1},d(a){N(t,a)}}}const M={title:"Button group",desc:"Button group shows buttons next to each other.",published:!0};function tt(c,t,o){let l;return K(c,H,s=>o(0,l=s)),c.$$set=s=>{o(1,t=C(C({},t),q(s)))},t=q(t),[l,t]}class pt extends j{constructor(t){super();z(this,t,tt,Z,A,{})}}export{pt as default,M as metadata};
