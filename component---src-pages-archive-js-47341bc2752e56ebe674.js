"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[527],{5790:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var r=a(7294),l=a(1883),n=a(9147),s=a(9357);const o=()=>r.createElement(s.Z,{title:"Archive"});t.default=e=>{let{data:t,location:a}=e;const s=t.allMarkdownRemark.nodes,o=new Map;for(const r of s)if(null!==r.frontmatter.date){const e=new Date(r.frontmatter.date).getFullYear(),t=new Date(r.frontmatter.date).toDateString().split(" ")[1];o.has(e)||o.set(e,new Map),o.get(e).has(t)||o.get(e).set(t,[]),o.get(e).get(t).push(r)}return console.log(o),r.createElement(n.Z,{location:a},Array.from(o.keys()).map((e=>r.createElement("div",{className:"flex flex-col w-full border-opacity-50"},r.createElement("div",{className:"divider text-xl font-bold"},e),Array.from(o.get(e).keys()).map((t=>r.createElement("div",{className:"card bg-base-100 shadow-xl my-3"},r.createElement("div",{className:"card-body"},r.createElement("span",{className:"text-3xl font-bold text-primary"},t),o.get(e).get(t).map((e=>r.createElement(l.Link,{className:"text-lg hover:text-xl",to:e.frontmatter.slug?"/"+e.frontmatter.slug:e.fields.slug},r.createElement("span",{className:"text-primary-content/25 mr-3"},e.frontmatter.date),r.createElement("span",{className:"text-primary-content/75"},e.frontmatter.title))))))))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-47341bc2752e56ebe674.js.map