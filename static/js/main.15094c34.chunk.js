(this.webpackJsonpcoctails=this.webpackJsonpcoctails||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),s=n(16),r=n.n(s),a=(n(22),n(10)),l=n(9),d=n(2),j=(n(23),n(1)),o=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Object(d.f)().idDrink;return Object(c.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(s)).then((function(t){return t.json()})).then((function(t){return i(t.drinks)})).catch((function(t){return console.error(t)}))}),[s]),Object(j.jsx)("div",{children:n.map((function(t){var e=t.strIngredient1,n=t.strIngredient2,c=t.strIngredient3,i=t.strIngredient4,s=t.strIngredient5,r=t.strIngredient6,a=t.strIngredient7,l=t.strIngredient8,d=t.strIngredient9,o=t.strIngredient10,h=t.strIngredient11,u=t.strIngredient12,b=t.strIngredient13,O=t.strIngredient14,m=t.strIngredient15,x=t.strDrink,f=t.strDrinkThumb,g=t.strInstructions,v=t.idDrink,p=[];return p.push(e,n,c,i,s,r,a,l,d,o,h,u,b,O,m),p.filter((function(t){return null!==t?t:null})),Object(j.jsxs)("div",{className:"coktail-container",children:[Object(j.jsxs)("div",{className:"small-container",children:[Object(j.jsxs)("div",{className:"image-container",children:[Object(j.jsx)("div",{className:"titles",children:x}),Object(j.jsx)("img",{className:"coktails-image",alt:"coctail",src:f})]}),Object(j.jsxs)("div",{className:"ingredients-container",children:[Object(j.jsx)("div",{className:"titles",children:"Ingredients"}),Object(j.jsx)("div",{className:"ingredients",children:p.map((function(t){if(null!==t)return Object(j.jsxs)("div",{className:"coktail-signature",children:[Object(j.jsx)("img",{alt:"ingredients",src:"https://www.thecocktaildb.com/images/ingredients/".concat(t,"-Medium.png")}),Object(j.jsx)("div",{className:"description",children:t})]},t)}))})]})]}),Object(j.jsx)("div",{className:"instruction",children:Object(j.jsxs)("div",{className:"ins",children:[Object(j.jsx)("h3",{children:"Instructions"}),Object(j.jsx)("div",{children:g})]})})]},v)}))})},h=(n(30),function(){var t=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail").then((function(t){return t.json()})).then((function(t){return i(t.drinks)})).catch((function(t){return console.error(t)}))}),[]),Object(j.jsx)("div",{className:"main-container",children:Object(j.jsx)("div",{className:"container",children:n.map((function(t){var e=t.strDrink,n=t.strDrinkThumb,c=t.idDrink;return Object(j.jsxs)("div",{className:"coctails",children:[Object(j.jsx)("div",{className:"title",children:e}),Object(j.jsx)("a",{href:"/coctail/".concat(c),children:Object(j.jsx)("img",{src:n,alt:"coctail"})})]},c)}))})})};return Object(j.jsxs)(l.a,{path:"/coktails/",children:[Object(j.jsx)("nav",{className:"header",children:Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:"Home"})})})}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/coctail/:idDrink",children:Object(j.jsx)(o,{})}),Object(j.jsx)(d.a,{path:"/",children:Object(j.jsx)(t,{})})]})]})});r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.15094c34.chunk.js.map