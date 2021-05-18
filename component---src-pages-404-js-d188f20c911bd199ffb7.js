/*! For license information please see component---src-pages-404-js-d188f20c911bd199ffb7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7vrA":function(e,t,i){"use strict";var a=i("wx14"),o=i("zLVn"),n=i("TSYQ"),r=i.n(n),s=i("q1tI"),l=i.n(s),c=i("vUet"),p=l.a.forwardRef((function(e,t){var i=e.bsPrefix,n=e.fluid,s=e.as,p=void 0===s?"div":s,d=e.className,u=Object(o.a)(e,["bsPrefix","fluid","as","className"]),h=Object(c.a)(i,"container"),g="string"==typeof n?"-"+n:"-fluid";return l.a.createElement(p,Object(a.a)({ref:t},u,{className:r()(d,n?""+h+g:h)}))}));p.displayName="Container",p.defaultProps={fluid:!1},t.a=p},TSYQ:function(e,t,i){var a;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var r=o.apply(null,a);r&&e.push(r)}}else if("object"===n)if(a.toString===Object.prototype.toString)for(var s in a)i.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},jooN:function(e,t,i){"use strict";i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"i",(function(){return s})),i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return c})),i.d(t,"f",(function(){return p})),i.d(t,"b",(function(){return d})),i.d(t,"a",(function(){return u}));var a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",i=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&i[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},o={title:"Wentao Lu - Computer Science Student at Algonquin",lang:"en",description:"Welcome to my website"},n={title:"",name:"",subtitle:"",cta:""},r={img:"profile.jpeg",paragraphOne:"",paragraphTwo:"",paragraphThree:"",resume:"https://drive.google.com/file/d/1Y8KYP_US0Nnmx8-sTWBAfLw8rjh42GWN/view?usp=sharing"},s=[{id:a(),img:"project1.jpg",title:"Shopping Website PHP Project",info:"Our first website project at school. The website provides categories, filters, and comparison capabilities.",info2:"It is designed with HTML, CSS and JavaScript using PHP and MySQL databases as the backend.",url:"https://drive.google.com/drive/folders/1-_rtpeupFQIjDmZhpdtQ3pvDpkhPDFs-?usp=sharing",repo:"https://github.com/WentaoLuk/shopping-website-project/tree/master/code"},{id:a(),img:"project2.jpg",title:"Photo Gallery With Upload Function Using PHP.",info:"School Assignment: A photo gallery page with upload function. New pictures will be displayed on the top.",info2:"Once uploaded, the picutures will be stored into image folders.",url:"https://github.com/WentaoLuk/gallery-app",repo:"https://github.com/WentaoLuk/gallery-app"},{id:a(),img:"project3.jpg",title:"Survey App with JSON to Store results",info:"The App verifies the input and store the result into JSON file as array set using PHP.",info2:"All the results will be displayed on the result page.",url:"https://github.com/WentaoLuk/survey-app",repo:"https://github.com/WentaoLuk/survey-app"},{id:a(),img:"project4.jpg",title:"Calculator App using Javascript",info:"The calculator App has basic calculating functions",info2:"If the equation has an issue with it (E.g.: “10++5”), it should replace the content inside the textbox with “Error”. Following that, if a number or operator is then clicked, it should then replace “Error” with whatever number or operator is clicked.",url:"https://github.com/WentaoLuk/calculator-app",repo:"https://github.com/WentaoLuk/calculator-app"}],l={cta:"",btn:"Contact me!",email:"lu000168@algonquinlive.com"},c={networks:[{id:a(),name:"twitter",url:"https://twitter.com/WenTaoLuk"},{id:a(),name:"codepen",url:"https://github.com/WentaoLuk"},{id:a(),name:"linkedin",url:"https://www.linkedin.com/in/wentao-lu-0078b7201/"},{id:a(),name:"github",url:"https://github.com/WentaoLuk"}]},p={isEnabled:!0},d=[{title:"How I Made My Blog Work",date:"2021-5-17",categories:["geek","study"],link:"#",image:"post1.jpeg",description:"Briefly introduce my blog and how I built it.",detail:" <p>Hi! Finally! I (almost--) finished building my blog.</p> <p>This may not be a real blog since the website is built on GitHub, and GitHub is only to host static pages. But I am still feeling good because it is the first website I built for myself. Now let's take a look at what I have done on this project. </p> <p> First of all, the website is built by ReactJS. The landing page is a template provided by Jacobo Martínez on Gatsby. So I pulled the whole template from his GitHub. It did save me a lot of initial work. (Big thanks for this wonderful template! I linked his GitHub page down in the footer of this website.) </p> <p> The blog is built on React. Since I cannot deploy the backend on GitHub Pages, everything has to be static. So all these words you are reading, all the tags are all put inside as arrays in a 'warehouse', which is the mock.js. Thus you will notice that when you click on any of the articles, the page will not be refreshed. Everything here is JavaScript. </p> <p> The blog pages is divided into three sections. Each of them is displayed as a grid. You might have noticed that the the second section is the aggregation of the first and third section, but displayed in a different way. I also put a paginate function down below, but since I currently do not have a lot of articles, I decided to save it for later use. </p> <p> The popup window is built as a component and hid by default until you click any of the articles. Then it will pass the title, tags, and the content as an array right into the Popup component to be displayed, then the window pops up. </p> <p> That's how I built my blog. I hope you enjoy browsing my blog. </p> <br/><p>Wentao</p><img src='https://i.ibb.co/jwRh2d3/post1.jpg' alt='post1' border='0'>"},{title:"About me",date:"2021-5-18",categories:["daily","life"],link:"#",image:"first_diary.jpeg",description:"Let me tell you who I am and what I love.",detail:"<p> I was born and raised in China. I love music. I started to play piano since I was six, and I have a good sense of pitch. </p> <p> I have a good sense of pitch, and I play piano and guitar. My previous college experience was a blast. I formed a music club, and every weekend at 7 pm, we would take out our equipment and hold shows on the campus. We gradually built a fan base, and luckily, I gained a lot of friendships with them. We even helped two of our alumni proposed. </p> <img src='https://i.ibb.co/tb54KhX/10240057-4-D99-4-FDA-BC33-6-A2-BFA740826.jpg' alt='10240057-4-D99-4-FDA-BC33-6-A2-BFA740826' border='0'> <p> After finishing my last degree in Hydraulic Engineering, I realized that being a hydraulic engineer was not my goal. After taking two jobs in completely non-engineering fields and doing a lot of research, I finally decided to start a new student career in the IT industry because I am always technologically savvy, and I wished to make full use of my gift. </p> <img src='https://i.ibb.co/FbvVcmj/4-E1792-AD-BEDB-417-C-B13-D-4-EC1363815-DD.jpg' alt='4-E1792-AD-BEDB-417-C-B13-D-4-EC1363815-DD' border='0'> <p> I love exploring new surroundings and making new friends. Travelling built my humility and taught me how meaningful it is to understand and respect people from different cultures and backgrounds. To me, there won't be a better choice than studying Computer Science in Canada and exposing myself to such a multicultural society. I'm joyful, grateful, and amaze by how beautiful the country is and how friendly people are to each other. </p> <img src='https://i.ibb.co/W396q59/C0340876-4313-4-B58-9-EC5-98-E2456183-F6.jpg' alt='C0340876-4313-4-B58-9-EC5-98-E2456183-F6' border='0'> <p> My short-term goal is to finish my program at Algonquin College. And my long-term? Becoming a professional full-stack or OOP developer and making contributions to open-source communities may just be the first step. Next? For now, I can't be sure. But I always dream big. </p> <img src='https://i.ibb.co/8MwvBMh/80926160-263-D-448-C-B89-C-A2-FBDF262-F79.jpg' alt='80926160-263-D-448-C-B89-C-A2-FBDF262-F79' border='0'> "},{title:"Yet to finish",date:"2021-5-15",categories:["daily","life"],link:"#",image:"first_diary.jpeg",description:"This is the description of the posts",detail:"This is the detail"},{title:"Yet to finish",date:"2021-5-15",categories:["daily","life"],link:"#",image:"first_diary.jpeg",description:"This is the description of the posts",detail:"This is the detail"}],u=[{title:"My Other Posts(Yet to finish)",date:"2021-5-15",categories:["daily","life"],link:"#",image:"first_diary.jpeg",description:"This is the description of the posts",detail:"This is the detail"},{title:"My Other Posts With Longer title(Yet to finish)",date:"2021-5-15",categories:["daily","life"],link:"#",image:"second_day.jpeg",description:"This is the description of the posts",detail:"This is the detail"},{title:"My Other Posts with long title(Yet to finish)",date:"2021-5-15",categories:["daily","life"],link:"#",image:"first_diary.jpeg",description:"This is the description of the posts",detail:"This is the detail"},{title:"My Other Posts(Yet to finish)",date:"2021-5-15",categories:["daily","life"],link:"#",image:"first_diary.jpeg",description:"This is the description of the posts",detail:"This is the detail"},{title:"My Other Posts(Yet to finish)",date:"2021-5-15",categories:["daily","life"],link:"#",image:"first_diary.jpeg",description:"This is the description of the posts",detail:"This is the detail"}]},vUet:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));i("wx14");var a=i("q1tI"),o=i.n(a),n=o.a.createContext({});n.Consumer,n.Provider;function r(e,t){var i=Object(a.useContext)(n);return e||i[t]||t}},w2l6:function(e,t,i){"use strict";i.r(t);var a=i("q1tI"),o=i.n(a),n=i("Wbzz"),r=i("qhky"),s=i("7vrA"),l=i("/eHF"),c=i.n(l),p=(i("q4sD"),i("jooN"));i("J9yo");t.default=function(){var e=p.g.lang;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Page not found"),o.a.createElement("html",{lang:e||"en"}),o.a.createElement("meta",{name:"description",content:"Page not found"})),o.a.createElement("section",{id:"hero",className:"jumbotron"},o.a.createElement(s.a,null,o.a.createElement(c.a,{bottom:!0,duration:1e3,delay:500,distance:"30px"},o.a.createElement("h1",{className:"hero-title text-center"},"Sorry, this path does not exist"," ",o.a.createElement("span",{role:"img","aria-label":"emoji"},"😞"))),o.a.createElement(c.a,{bottom:!0,duration:1e3,delay:1e3,distance:"30px"},o.a.createElement("p",{className:"hero-cta justify-content-center"},o.a.createElement(n.Link,{className:"cta-btn cta-btn--hero",to:"/"},"Go back"))))))}},wx14:function(e,t,i){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}i.d(t,"a",(function(){return a}))},yLpj:function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(a){"object"==typeof window&&(i=window)}e.exports=i},zLVn:function(e,t,i){"use strict";function a(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}i.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-404-js-d188f20c911bd199ffb7.js.map