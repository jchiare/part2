(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),o=n.n(c),u=n(4),i=n(2),l=n(3),s=n.n(l);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d="/api/persons",b=function(){return s.a.get(d).then(function(e){return e.data})},p=function(e){return s.a.post(d,e).then(function(e){return e.data})},O=function(e){return s.a.delete(d+"/"+e).then(function(e){return e.data})},h=function(e){var t=s.a.put(d+"/"+e.id,m({},e));return console.log(m({},e)),t.then(function(e){return e.data})};n(37);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var j=function(e){var t=e.message;return null===t?null:a.a.createElement("div",{className:"success"},t)},w=function(e){var t=e.message;return null===t?null:a.a.createElement("div",{className:"error"},t)},E=function(e){var t=e.addFilter;return a.a.createElement("p",null,"Filter shown with: ",a.a.createElement("input",{onChange:t}))},g=function(e){var t=e.persons,n=e.setPersons;return t.map(function(e){return a.a.createElement("p",{key:e.name},e.name," ",e.number,a.a.createElement("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(e.name))&&O(e.id).then(n(t.filter(function(t){return t.id!==e.id}))).catch(function(e){alert(e)})}(e)}},"delete"))})},y=function(e){var t=e.addPerson,n=e.addName,r=e.addNumber;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,"name: ",a.a.createElement("input",{onChange:n})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{onChange:r})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},P=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),l=Object(i.a)(o,2),s=l[0],f=l[1],m=Object(r.useState)(""),d=Object(i.a)(m,2),O=d[0],P=d[1],D=Object(r.useState)(""),k=Object(i.a)(D,2),S=k[0],N=k[1],C=Object(r.useState)(""),A=Object(i.a)(C,2),F=A[0],T=A[1],J=Object(r.useState)(""),L=Object(i.a)(J,2),x=L[0],B=L[1];Object(r.useEffect)(function(){b().then(function(e){return c(e)})},[]);var I=n.filter(function(e){return e.name.toLowerCase().includes(S)});return a.a.createElement("div",{className:"main"},a.a.createElement(j,{message:F||null}),a.a.createElement(w,{message:x||null}),a.a.createElement("h2",null,"Phonebook"),a.a.createElement(E,{addFilter:function(e){e.preventDefault(),N(e.target.value.toLowerCase())}}),a.a.createElement("h2",null,"Add a new"),a.a.createElement(y,{addPerson:function(e){e.preventDefault();var t=n.find(function(e){return e.name===s});if(t){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{number:O});h(r).then(function(e){c(n.map(function(t){return t.id!==r.id?t:e})),T('Added new "'.concat(e.number,'" number of ').concat(e.name,"'s to the phonebook.")),setTimeout(function(){T(null)},5e3)}).catch(function(e){B("".concat(s,"'s already deleted from server.")),setTimeout(function(){B(null)},5e3)})}}else p({name:"".concat(s),number:"".concat(O)}).then(function(e){c(n.concat(e)),T("Added ".concat(s," to the phonebook.")),setTimeout(function(){T(null)},5e3)}).catch(function(e){alert(e)})},addName:function(e){e.preventDefault(),f(e.target.value)},addNumber:function(e){e.preventDefault(),P(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(g,{persons:I,setPersons:c}))};o.a.render(a.a.createElement(P,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2a4061d3.chunk.js.map