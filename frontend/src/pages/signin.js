let template = document.createElement("template");

template.innerHTML = /*html*/
`<div class="app">
<div id="particles-js" class="particles"></div>
<div class="sign_container" id="sign_container">
   <div class="form-sign_container sign-up">
	  <form>
		 <h1>Create Account</h1>
		 <input type="text" placeholder="first name">
		 <input type="text" placeholder="last name">
		 <input type="text" placeholder="Username">
		 <input type="email" placeholder="Email">
		 <input type="password" placeholder="Password">
		 <input type="password" placeholder="Rewrite Password">
		 <button>
		<!-- <a href="Pages/Authentification.html">Sign Up</a> -->
		 <router-link to="/authentification" kind="link">Sign Up</router-link>
		 </button>
		 <span>----------- Or Regested With -----------</span>
		 <div class="social-icons">
			<a href="#" class="icon">
			   <i>
				  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="100" viewBox="0 0 48 48">
					 <path fill="#f5bc00" d="M43.6,20.1H42V20H24v8h11.3c-1.6,4.7-6.1,8-11.3,8c-6.6,0-12-5.4-12-12s5.4-12,12-12c3.1,0,5.8,1.2,8,3l5.7-5.7	C34,6.1,29.3,4,24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20C44,22.7,43.9,21.4,43.6,20.1z"></path>
					 <path fill="#6c19ff" d="M43.6,20.1L43.6,20.1L42,20H24v8h11.3c-0.8,2.2-2.2,4.2-4.1,5.6c0,0,0,0,0,0l6.2,5.2C37,39.2,44,34,44,24	C44,22.7,43.9,21.4,43.6,20.1z"></path>
					 <path fill="#3ddab4" d="M24,44c5.2,0,9.9-2,13.4-5.2l-6.2-5.2c-2,1.5-4.5,2.4-7.2,2.4c-5.2,0-9.6-3.3-11.3-7.9l-6.5,5	C9.5,39.6,16.2,44,24,44z"></path>
					 <path fill="#f55376" d="M6.3,14.7l6.6,4.8C14.7,15.1,19,12,24,12c3.1,0,5.8,1.2,8,3l5.7-5.7C34,6.1,29.3,4,24,4	C16.3,4,9.7,8.3,6.3,14.7z"></path>
					 <path fill="#2100c4" d="M26.6,35.7l6.8,6c1.5-0.8,2.9-1.8,4.1-2.9l-6.2-5.2C29.9,34.6,28.3,35.3,26.6,35.7z"></path>
					 <path fill="#eb0000" d="M9.2,10.6c-1.1,1.2-2.1,2.6-2.9,4.1l3.9,2.9l2.6,1.9c0.6-1.6,1.6-3,2.8-4.1L9.2,10.6z"></path>
				  </svg>
			   </i>
			</a>
			<a href="#" class="icon">
			   <svg width="35" height="42" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <g clip-path="url(#clip0_284_776)">
					 <path d="M0 30.9565H22.1076V42H33.1395V22.0435H11.0756L33.1395 0H22.1076L0 22.0435V30.9565Z" fill="Black"/>
					 <path d="M37.8926 11.0435L48.9245 0H37.8926V11.0435Z" fill="Black"/>
					 <path d="M48.9245 11.0435L37.8926 22.0435V33.0435H48.9245V22.0435L60.0001 11.0435V0H48.9245V11.0435Z" fill="Black"/>
					 <path d="M60.0004 22.0439L48.9248 33.044H60.0004V22.0439Z" fill="Black"/>
				  </g>
				  <defs>
					 <clipPath id="clip0_284_776">
						<rect width="60" height="42" fill="white"/>
					 </clipPath>
				  </defs>
			   </svg>
			</a>
		 </div>
	  </form>
   </div>
   <div class="form-sign_container sign-in">
	  <form>
		 <h1>Sign In</h1>
		 <input type="email" placeholder="Email">
		 <input type="password" placeholder="Password">
		 <a href="#">Forget your password</a>
		 <button>
		 <!-- <a href="Pages/Home Page.html">Sign In</a> -->
		 <router-link to="/home" kind="link">Sign In</router-link>
		 </button>
		 <span>----------- Or sign in with -----------</span>
		 <div class="social-icons">
			<a href="#" class="icon">
			   <i>
				  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="100" viewBox="0 0 48 48">
					 <path fill="#f5bc00" d="M43.6,20.1H42V20H24v8h11.3c-1.6,4.7-6.1,8-11.3,8c-6.6,0-12-5.4-12-12s5.4-12,12-12c3.1,0,5.8,1.2,8,3l5.7-5.7	C34,6.1,29.3,4,24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20C44,22.7,43.9,21.4,43.6,20.1z"></path>
					 <path fill="#6c19ff" d="M43.6,20.1L43.6,20.1L42,20H24v8h11.3c-0.8,2.2-2.2,4.2-4.1,5.6c0,0,0,0,0,0l6.2,5.2C37,39.2,44,34,44,24	C44,22.7,43.9,21.4,43.6,20.1z"></path>
					 <path fill="#3ddab4" d="M24,44c5.2,0,9.9-2,13.4-5.2l-6.2-5.2c-2,1.5-4.5,2.4-7.2,2.4c-5.2,0-9.6-3.3-11.3-7.9l-6.5,5	C9.5,39.6,16.2,44,24,44z"></path>
					 <path fill="#f55376" d="M6.3,14.7l6.6,4.8C14.7,15.1,19,12,24,12c3.1,0,5.8,1.2,8,3l5.7-5.7C34,6.1,29.3,4,24,4	C16.3,4,9.7,8.3,6.3,14.7z"></path>
					 <path fill="#2100c4" d="M26.6,35.7l6.8,6c1.5-0.8,2.9-1.8,4.1-2.9l-6.2-5.2C29.9,34.6,28.3,35.3,26.6,35.7z"></path>
					 <path fill="#eb0000" d="M9.2,10.6c-1.1,1.2-2.1,2.6-2.9,4.1l3.9,2.9l2.6,1.9c0.6-1.6,1.6-3,2.8-4.1L9.2,10.6z"></path>
				  </svg>
			   </i>
			</a>
			<a href="#" class="icon">
			   <svg width="35" height="42" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <g clip-path="url(#clip0_284_776)">
					 <path d="M0 30.9565H22.1076V42H33.1395V22.0435H11.0756L33.1395 0H22.1076L0 22.0435V30.9565Z" fill="Black"/>
					 <path d="M37.8926 11.0435L48.9245 0H37.8926V11.0435Z" fill="Black"/>
					 <path d="M48.9245 11.0435L37.8926 22.0435V33.0435H48.9245V22.0435L60.0001 11.0435V0H48.9245V11.0435Z" fill="Black"/>
					 <path d="M60.0004 22.0439L48.9248 33.044H60.0004V22.0439Z" fill="Black"/>
				  </g>
				  <defs>
					 <clipPath id="clip0_284_776">
						<rect width="60" height="42" fill="white"/>
					 </clipPath>
				  </defs>
			   </svg>
			</a>
		 </div>
	  </form>
   </div>
   <div class="toggle-sign_container">
	  <div class="toggle">
		 <div class="toggle-panel toggle-left">
			<h1>Welcome Back!</h1>
			<p>Enter your personal Details to get all sit'features</p>
			<button class="hidden" id="login">Sign In</button>
		 </div>
		 <div class="toggle-panel toggle-right">
			<h1>Hello Friend!</h1>
			<p>Regester your personal Details to get all sit'features</p>
			<button class="hidden" id="register">Sign Up</button>
		 </div>
	  </div>
   </div>
</div>
</div>`;


class SIGNIN extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'src/assets/style/home-page.css');
    this.shadow.appendChild(linkElem);
  }

  connectedCallback() {
    console.log("SIGNIN is Connected");
	this.runSignin();
  }
  
  disconnectedCallback() {
    console.log('SIGNIN is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }
  runSignin(params){
	const container= this.shadow.getElementById('sign_container');
	const login_btn = this.shadow.getElementById('login');
	const register_btn = this.shadow.getElementById('register');

	register_btn.addEventListener('click', () => {
		container.classList.add("active");
	});

	login_btn.addEventListener('click', () =>{
		container.classList.remove("active");
	});
  }
}
customElements.define('signin-page', SIGNIN);

export default SIGNIN;
