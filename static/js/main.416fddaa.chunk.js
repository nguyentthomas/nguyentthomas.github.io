(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{39:function(e,t,a){e.exports=a(55)},44:function(e,t,a){},45:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(22),r=a.n(l),o=(a(44),a(7)),s=a(10),c=a(9),m=a(8),h=a(24),u=a(5),d=a(13),g=a(38),p=a(25),f=(a(45),a(15)),y=a(19);var w=function(){return i.a.createElement("footer",{className:"mt-5"},i.a.createElement(d.a,{fluid:!0},i.a.createElement(f.a,{className:"border-top justify-content-between p-3"},i.a.createElement(y.a,{className:"p-0",md:3,sm:12},"nguyentthomas.github.io"),i.a.createElement(y.a,{className:"p-0 d-flex justify-content-end",md:3},"Copyright \xa9 2020 - Thomas T. Nguyen"))))},b=a(36);var E=function(e){return i.a.createElement(b.a,{className:"bg-transparent jumbotron-fluid p-0"},i.a.createElement(d.a,{fluid:!0},i.a.createElement(f.a,{className:"justify-content-center py-5"},i.a.createElement(y.a,{md:8,sm:12},e.title&&i.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&i.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&i.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},v=a(20),T=a(33);var k=function(e){var t=Object(T.b)({opacity:1,from:{opacity:0}});return i.a.createElement(T.a.div,{className:"g-card-info",style:t},i.a.createElement("p",{className:"g-card-title"},e.title),i.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),i.a.createElement("a",{href:""+e.link,rel:"noopener noreferrer"},"View"))};var x=function(e){return i.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},i.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&i.a.createElement(k,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(v.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return i.a.createElement(x,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"95x eSports",subTitle:"Online Competitive Team Official Website",selected:!1},{id:1,title:"KetoKing",subTitle:"iOS App helping users to incorporate keto into their diet.",link:"/ketoKing",selected:!1},{id:2,title:"ActiveBingo",subTitle:"Active Living, enhancing lives and experiences as you age.",link:"/activeBingo",selected:!1},{id:3,title:"Plantamagotchi",subTitle:"'Growing plants like pets.' Physical interactive game.",link:"/plantamagotchi",selected:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{fluid:!0},i.a.createElement(f.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(i.a.Component);var N=function(e){return i.a.createElement("div",null,i.a.createElement(E,{title:e.title,subTitle:e.subTitle,text:e.text}),i.a.createElement(j,null))};var C=function(e){return i.a.createElement(d.a,{fluid:!0},i.a.createElement(f.a,{className:"justify-content-center"},i.a.createElement(y.a,{md:8},e.children)))};var I=function(e){return i.a.createElement("div",null,i.a.createElement(E,{title:e.title}),i.a.createElement(C,null,i.a.createElement("p",null,"I'm a UX designer and Web Developer, currently located in Sydney. I'm passionate about designing unique and engaging experiences. In order to aid in visualising and conceptualising these experience, I am well equipped in prototyping tools, specifically Sketch, Figma and Adobe XD."),i.a.createElement("p",null,"With expertise to create and develop within multiple programming languages, technologies and frameworks, of which include: JavaScript(Node JS, React), PHP, Python, Java and, of course, HTML and CSS. I'm constantly learning new things. Currently, those things include gaining more experience with JavaScript, specifically React, Node JS as well as App Development with React Native and XCode/Swift."),i.a.createElement("p",null,"I also have experience with designing components and graphics using the Adobe Creative Suite (Photoshop, Illustrator and Premiere Pro.)"),i.a.createElement("p",null,"I have worked on multiple projects that are done myself or done so collaboratively to hone my skills and mindset while always looking to learn effectively and quickly. Outside of that, I love drawing, sketching as well as tinkering with electronics and reading."),i.a.createElement("p",null,"My dream is to develop products/services that are innovative, and seamless in aligning its usage with the habits and lifestyle of the user.")))},O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(E,{title:this.props.title}),i.a.createElement(C,null,i.a.createElement("h1",null,i.a.createElement("a",{href:"mailto:nguyen.thomastri@gmail.com"},"Email Me!"))))}}]),a}(i.a.Component);var B=function(e){return i.a.createElement("div",null,i.a.createElement(E,{title:e.title}),i.a.createElement(C,null,i.a.createElement("h3",null,"Plantamagotchi"),i.a.createElement("h5",null,"My Role:"),i.a.createElement("p",null,"This project was completed collaboratively as part of the \u201cPrototyping Physical Interaction\u201d unit as part of my major at studying at University of Technology Sydney, within a group of five including Marc Pulumbarit, Daniel Tran, Kevin Chov, Derry Jasin and myself (Thomas Nguyen). Within this project, my role was to designate roles and control the design flow, as well as contribute to the overall design. This also included prototyping, testing, and coding for the electronics."),i.a.createElement("h5",null,"The Problem"),i.a.createElement("p",null),i.a.createElement("h5",null,"The Approach"),i.a.createElement("p",null),i.a.createElement("h5",null,"Usability Testing / User Studies"),i.a.createElement("p",null),i.a.createElement("h5",null,"Overview of Final Functional Prototype"),i.a.createElement("p",null,"The Plantamagotchi is a physically interactive project that aimed to provide users a learning experience while tying in physical elements that enhanced their interactions, providing more value and instant entertainment to a slow and gradual process. Ideation and formulation of prototype and design was done through a variety of sessions that ultimately amounted to become the Plantamagotchi in its final form. The plantamagotchi provided varying levels of feedback to users, with the purpose of \u201cgame\u201d-ifying the experience of having a potted plant where the premise was to cater to the needs and requirements of the plant (soil moisture, temperature, pH level and ambient humidity) of the given parameters in plant and its digital counterpart to stay alive.")))};var P=function(e){return i.a.createElement("div",null,i.a.createElement(E,{title:e.title}),i.a.createElement(C,null,i.a.createElement("h3",null,"Active Bingo"),i.a.createElement("h5",null,"My role:"),i.a.createElement("p",null,"This project took place during my final semester at University from July 2019 \u2013 October 2019. In a group of 5, I was responsible for leading the overall design and experience. I was also responsible of constructing accompanying UI elements."),i.a.createElement("h5",null,"The Problem"),i.a.createElement("p",null,"With the growing elderly population and the divide between generations becoming larger. The aging population can seem quite left without experiences that help accomodate or enhance their experience. Hence, this project focuses on Active Aging. To address the problem, the scope of the project needed to narrow it's focus."),i.a.createElement("p",null,"We began by asking around, researching and gathering data on what could not only make life more convienient but also increase the wellbeing and initiate a change in lifestyle or improve quality of life. Upon listening to multiple qualms, we narrowed it to Health and reigniting the connection to society."),i.a.createElement("h5",null,"The Approach"),i.a.createElement("p",null,"Upon different approaches, we finally set on the idea of combining a well-known game with physical exercises and social elements. This would allow users to socialise with their friends over long-distances whilst not being physically near others, whilst also allowing them to interact over something simple yet fun with the bonus aspect of staying physically fit. Ultimately, trying to tie the entire experience around promoting health and wellbeing."),i.a.createElement("h5",null,"Usability Testing / User Studies"),i.a.createElement("p",null,"We proceeded to seek further feedback on the design and prototype, in order to create a valuable and effective experience for users. We decided upon user usability tests to analyse what functions and aspects of our design needed improvement. Some of the qualms that users presented in the first series of our user and usability study were:"),i.a.createElement("p",null,'"Not intuitive enough to call Bingo" - Users wanted a more engaging and clear way to call Bingo. '),i.a.createElement("p",null,'"Leaderboard is cluttered and not inclusive" - Competition did not seem to increase engagement, a new approach in increasing the return playability needed to be brought up.'),i.a.createElement("p",null,'"Too hard to get started with playing with friends" - This was directly linked to the usability and core functionality of the app, it was too much of as hassle in its current state to play a game together. A more efficient and effective way was required to counteract the inconvienience and frustration of users.'),i.a.createElement("p",null,"In summary, the findings:",i.a.createElement("ol",null,i.a.createElement("li",null,"Usability Issues"),i.a.createElement("li",null,"Experience Optimisation"),i.a.createElement("li",null,"Progression and Competition"))),i.a.createElement("h5",null,"Overview of Final Functional Prototype"),i.a.createElement("p",null,"Active Bingo, the game of chance Bingo with a , in which the user\u2019s objective is to mark all exercises on their Bingo card as soon as possible in the allocated patterns. The exercises to be performed by the users are called out randomly and the winner of the game is determined by the first person to mark one of the winning patterns and calling out \u2018Bingo\u2019. This game is designed as a tool helping facilitate the physical, mental and social needs of individuals regardless of their age. Their minds are mentally stimulated when playing bingo and having the interactivity of online technology to interact with others allow their social needs to be met. Opting to use Bingo as the \u2018bridge\u2019 to form bonds builds upon the pre-existing expectations a simple age-old game of bingo, where it is not forcing the user to change drastically by using something familiar, with the intent only to enhance the experience and support active aging. The user experience the prototype aims to support is one of familiarity. It accomplishes this with the basis of the game being one that users similar to that of the persona would have experienced in the past."),i.a.createElement("p",null,i.a.createElement("b",null,"Functions:"),i.a.createElement("b",null),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("b",null,"Registration"),": For new users the registration page will ask the user to sign up with their email address. The purpose of registering is to allow the user to create a profile, which will allow them to find their friends as well and meet new people."),i.a.createElement("li",null,i.a.createElement("b",null,"Bingo Game"),": The bingo game is a fun way of using a familiar game that elderly people play and incorporating it with exercises instead of numbers. The user will have the choice of playing a game of 2 to 6 players."),i.a.createElement("li",null,i.a.createElement("b",null,"Adjusting Difficulty"),": The adjusting difficulty function will allow users to choose their level of experience with the options of \u201cBeginner\u201d, \u201cIntermediate\u201d and \u201cExperienced\u201d. Choosing the \u201cBeginner\u201d or \u201cIntermediate\u201d will filter out the difficult exercises in the game and will only randomly churn out the easier exercises."),i.a.createElement("li",null,i.a.createElement("b",null,"Find Friends"),": ActiveBingo has a \u201cFind Friend\u201d feature which enables users to add their friends and play with them, which may be convenient for them, as it saves them the effort of having to travel long distances in order to exercise with them. They can also find and add new friends they meet while playing a game. For some users this may be a feature which mitigates feelings of loneliness they may experience at times, being home alone all day."),i.a.createElement("li",null,i.a.createElement("b",null,"Trophies"),": The trophies\u2019s function will display the scores and trophies of the players and their friends. This function will act as a feature to motivate users to play more and achieve a higher score, seeing their own contributions growing."),i.a.createElement("li",null,i.a.createElement("b",null,"Declare Medical conditions"),": The Declare Medical Conditions feature will allow users to declare their medical conditions, which will filter out any particular exercises in the game that may be harmful towards the user\u2019s medical condition. This will minimise any risk of injury or harm towards the user."),i.a.createElement("li",null,i.a.createElement("b",null,"Tutorial"),": This function will guide new users on how to play the game and walk them through different ways of winning the game. The tutorial will be a practice game for the player, interactively highlighting different ways of winning a game.")))))};var S=function(e){return i.a.createElement("div",null,i.a.createElement(E,{title:e.title}),i.a.createElement(C,null))},A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:"Thomas Nguyen",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Thomas Nguyen",subTitle:"Portfolio",text:"Check out my projects below"},about:{title:"About Me"},contact:{title:"Let's Connect"},activeBingo:{title:"ActiveBingo"},ketoKing:{title:"KetoKing"},plantamagotchi:{title:"Plantamgotchi"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(h.a,null,i.a.createElement(d.a,{className:"p-0",fluid:!0},i.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},i.a.createElement(p.a.Brand,null,"Thomas T. Nguyen"),i.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),i.a.createElement(p.a.Collapse,{id:"navbar-toggle"},i.a.createElement(g.a,{className:"ml-auto"},i.a.createElement(h.b,{className:"nav-link",to:"/"},"Home"),i.a.createElement(h.b,{className:"nav-link",to:"/about"},"About"),i.a.createElement(h.b,{className:"nav-link",to:"/contact"},"Contact")))),i.a.createElement(u.a,{path:"/",exact:!0,render:function(){return i.a.createElement(N,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),i.a.createElement(u.a,{path:"/about",exact:!0,render:function(){return i.a.createElement(I,{title:e.state.about.title})}}),i.a.createElement(u.a,{path:"/contact",exact:!0,render:function(){return i.a.createElement(O,{title:e.state.contact.title})}}),i.a.createElement(u.a,{path:"/plantamagotchi",exact:!0,render:function(){return i.a.createElement(B,{title:e.state.plantamagotchi.title})}}),i.a.createElement(u.a,{path:"/activeBingo",exact:!0,render:function(){return i.a.createElement(P,{title:e.state.activeBingo.title})}}),i.a.createElement(u.a,{path:"/ketoKing",exact:!0,render:function(){return i.a.createElement(S,{title:e.state.ketoKing.title})}}),i.a.createElement(w,null)))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(54);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.416fddaa.chunk.js.map