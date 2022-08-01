"use strict";(self.webpackChunkoddisy_documentation=self.webpackChunkoddisy_documentation||[]).push([[4396],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6653:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3,title:"Entry Fields"},s=void 0,u={unversionedId:"Concepts/entry_fields",id:"Concepts/entry_fields",title:"Entry Fields",description:"What is an Entry Field",source:"@site/docs/Concepts/entry_fields.md",sourceDirName:"Concepts",slug:"/Concepts/entry_fields",permalink:"/oddisy_documentation/docs/Concepts/entry_fields",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Concepts/entry_fields.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Entry Fields"},sidebar:"tutorialSidebar",previous:{title:"Entries",permalink:"/oddisy_documentation/docs/Concepts/entries"},next:{title:"Predefined Fields",permalink:"/oddisy_documentation/docs/Concepts/predefined_fields"}},d={},c=[{value:"What is an Entry Field",id:"what-is-an-entry-field",level:2},{value:"Types",id:"types",level:2},{value:"Short Text",id:"short-text",level:3},{value:"Long Text",id:"long-text",level:3},{value:"Number",id:"number",level:3},{value:"Number Format",id:"number-format",level:4},{value:"Writing Number Format",id:"writing-number-format",level:5},{value:"Yes/No",id:"yesno",level:3},{value:"Dropdown",id:"dropdown",level:3},{value:"Color",id:"color",level:3},{value:"List",id:"list",level:3},{value:"Image",id:"image",level:3},{value:"Default Values",id:"default-values",level:2}],p={toc:c};function f(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-an-entry-field"},"What is an Entry Field"),(0,a.kt)("p",null,"Entry fields provide a way of storing information about your Entry. "),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("h3",{id:"short-text"},"Short Text"),(0,a.kt)("p",null,"The Short Text Field is for names, phrases, or anything else that is less than a short sentence."),(0,a.kt)("h3",{id:"long-text"},"Long Text"),(0,a.kt)("p",null,"The Long Text Field is for anything that is too long for a short text field. This can be backstory, notes, etc."),(0,a.kt)("h3",{id:"number"},"Number"),(0,a.kt)("p",null,"The Number Field is for any numerical data. This can be weight, age, or any other value you want to describe using a number."),(0,a.kt)("h4",{id:"number-format"},"Number Format"),(0,a.kt)("p",null,"The number field displays the number according to a number format."),(0,a.kt)("p",null,"On Predefined Fields this can be managed in the Settings Menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fullscreen image",src:n(6086).Z,width:"1597",height:"229"})),(0,a.kt)("h5",{id:"writing-number-format"},"Writing Number Format"),(0,a.kt)("p",null,"The format is specified as a pattern using a subset of the ICU formatting patterns."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 A single digit"),(0,a.kt)("li",{parentName:"ul"},"#"," A single digit, omitted if the value is zero"),(0,a.kt)("li",{parentName:"ul"},". Decimal separator"),(0,a.kt)("li",{parentName:"ul"},"-"," Minus sign"),(0,a.kt)("li",{parentName:"ul"},", Grouping separator"),(0,a.kt)("li",{parentName:"ul"},"E Separates mantissa and exponent"),(0,a.kt)("li",{parentName:"ul"},"+"," ","-"," Before an exponent, to say it should be prefixed with a plus sign."),(0,a.kt)("li",{parentName:"ul"},"% - In prefix or suffix, multiply by 100 and show as percentage"),(0,a.kt)("li",{parentName:"ul"},"\u2030 (\\u2030) In prefix or suffix, multiply by 1000 and show as per mille"),(0,a.kt)("li",{parentName:"ul"},"\xa4 (\\u00A4) Currency sign, replaced by currency name"),(0,a.kt)("li",{parentName:"ul"},"' Used to quote special characters"),(0,a.kt)("li",{parentName:"ul"},"; Used to separate the positive and negative patterns (if both present)")),(0,a.kt)("h3",{id:"yesno"},"Yes/No"),(0,a.kt)("p",null,"The Yes/No Field is for anything that is either a yes or no."),(0,a.kt)("h3",{id:"dropdown"},"Dropdown"),(0,a.kt)("p",null,"The Dropdown field is for anything that has a set number of possible options."),(0,a.kt)("p",null,"An example would be Species: Human, Animal, Alien, Robot."),(0,a.kt)("p",null,"When used in tandem with Predefined Fields, this makes it easy to note the race of different Entries."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Dropdowns work best when used as a Predefined Field."))),(0,a.kt)("h3",{id:"color"},"Color"),(0,a.kt)("p",null,"The Color field is for anything that can be described as a color."),(0,a.kt)("h3",{id:"list"},"List"),(0,a.kt)("p",null,"The List Field is for anything that can be represented as a list of Short Text Widgets. "),(0,a.kt)("h3",{id:"image"},"Image"),(0,a.kt)("p",null,"An Image field can hold a single image."),(0,a.kt)("h2",{id:"default-values"},"Default Values"),(0,a.kt)("p",null,"You can set the default value for all of the Fields in the Default Values Page in the Settings."),(0,a.kt)("p",null,"These default values will be used every time you create a new Field of that Predefined Field type."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fullscreen image",src:n(4401).Z,width:"1920",height:"1040"})))}f.isMDXComponent=!0},4401:function(e,t,n){t.Z=n.p+"assets/images/default_values-bc9379e3f37d16f0ef2f232a35b9edec.JPG"},6086:function(e,t,n){t.Z=n.p+"assets/images/number_format-148959fcf4696e7d5f4c47b3e679653b.JPG"}}]);