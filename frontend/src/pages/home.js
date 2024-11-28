let template = document.createElement("template");

template.innerHTML = /*html*/
  `<div id="home-page">
       <div class="body-form">
         <nav>
			<router-link to="/home" kind="link">
			<img class="logo" src="src/assets/images/TR-logo.png">
			</router-link>
            <!--<a href="Home Page.html">
            <img class="logo" src="src/assets/images/TR-logo.png">
            </a>-->
            <img src="https://cdn.intra.42.fr/users/6346b9909265439cf973f7d7ecb87989/asaber.jpg" class="user-pic">
            <div class="sub-menu-wrap" id="subMenu">
               <div class="sub-menu">
                  <div class="user-info">
                     <img src="https://cdn.intra.42.fr/users/6346b9909265439cf973f7d7ecb87989/asaber.jpg">
                     <h2>Adnane Saber</h2>
                  </div>
                  <hr>
                  <router-link to="/profile" class="sub-menu-link">
                     <img src="src/assets/images/user-icon.png">
                     <p> Profile</p>
                     <span>></span>
					</router-link>
                  <router-link to="/settings" class="sub-menu-link">
                     <img src="src/assets/images/setting-icon.png">
                     <p> Settings</p>
                     <span>></span>
					 </router-link>
                  <router-link to="/signin" class="sub-menu-link">
                     <img src="src/assets/images/og-out-icon.png">
                     <p> Log out</p>
                     <span>></span>
					 </router-link>
               </div>
            </div>
         </nav>
      </div>
      
      <div id="particles-js" class="particles"></div>
      <div id="games">
         <div class="squareGame animated bounceInLeft">
            <div class="imgGame overwatch"></div>
            <div class="gameText">
               <a>Start</a>
            </div>
         </div>
         <div class="squareGame animated bounceInLeft">
            <div class="imgGame rocketLeague"></div>
            <div class="gameText">Start</div>
         </div>
         <div class="squareGame animated bounceInLeft">
            <div class="imgGame cod"></div>
            <div class="gameText">Start</div>
         </div>
         <div class="squareGame animated bounceInLeft">
            <div class="imgGame youtube"></div>
            <div class="gameText">Start</div>
         </div>
         <div class="squareGame animated bounceInLeft">
            <div class="imgGame bro"></div>
            <div class="gameText">Start</div>
         </div>
         <div class="squareGame animated bounceInLeft">
            <div class="imgGame outlast"></div>
            <div class="gameText">Start</div>
         </div>
         <div class="squareGame animated bounceInLeft">
            <div class="imgGame new">
               <a href="../index.html"></a>
            </div>
            <div class="gameText ascii">
               <!-- <a href="../Pages/Team Building.html">▼</a> -->
               <a href="/team" data-route="">▼</a>
            </div>
         </div>
      </div>
      <div class='box'>
         <div class='wave -one'></div>
         <div class='wave -two'></div>
         <div class='wave -three'></div>
      </div>
  </div >`;

class HOME extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
	const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'src/assets/style/home-page.css');
    this.shadow.appendChild(linkElem);
  }

  connectedCallback() {
    console.log("HOME is Connected");
	this.runHome();
  }

  async disconnectedCallback() {
    console.log("HOME is Disonnected");
  }

  static get observedAttributes() {
    return [
      /* array of attribute names to monitor for changes */
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

  runHome(params) {
	  $(document).ready(function(){
		$(".gameText").hide();
		$('.gameTitle').hide();
		$('#store').hide();
		// alert($(".gameText").attr(lol, "eee"));
		// Variables for current position
		var x, y;
	
		function handleMouse(e) {
		
		}
	
		// Assign handleMouse to mouse movement events
		document.onmousemove = handleMouse;
	
		 $(window).scroll(function(){
			
		});
	});
	
	/******************** subMenu ***********************************/
	let subMenu = this.shadow.getElementById("subMenu");
	let profilePic = this.shadow.querySelector(".user-pic");
	console.log(profilePic)

	profilePic.addEventListener("click",()=>{
		subMenu.classList.toggle("open-menu");
	})
	// function toggleMenu(){
	// }
	
	$(".squareGame").hover(
		function(){
			$(this).find('.gameText').show();
			$(this).find('.gameTitle').show();
			$(this).find('#store').show();
		},
		function(){
			$(this).find('.gameText').hide();
			$(this).find('.gameTitle').hide();
			$(this).find('#store').hide();
		}
	);
	
	function init() {
	  'use strict'
	  function select(a) {
		return document.querySelector(a);
	  }
	  var randomNum = Math.floor((Math.random() * 24) + 1),
		  triangle = select('.triangle img'),
		  circle = select('.circle img'),
		  cross = select('.cross img'),
		  box = select('.boxi img'),
		  link = 'http://kapilnemo.free.fr/codepen/playstation-loading/',
		  order = [
			[1,2,3,4],
			[1,2,4,3],
			[1,3,2,4],
			[1,3,4,2],
			[1,4,2,3],
			[1,4,3,2],
			[2,1,3,4],
			[2,1,4,3],
			[2,3,1,4],
			[2,3,4,1],
			[2,4,1,3],
			[2,4,3,1],
			[3,1,2,4],
			[3,1,4,2],
			[3,2,1,4],
			[3,2,4,1],
			[3,4,1,2],
			[3,4,2,1],
			[4,1,2,3],
			[4,1,3,2],
			[4,2,1,3],
			[4,2,3,1],
			[4,3,1,2],
			[4,3,2,1]
		  ];
	
	
	}
	window.setInterval(init, 2000);	
 }
}
customElements.define("home-page", HOME);

export default HOME;
