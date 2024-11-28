let template = document.createElement("template");

template.innerHTML = /*html*/`
<div>
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
	  <router-link to="Profile Settings.html" class="sub-menu-link">
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
<div class="Profile_container">
   <img class="profile-img" src="https://avatars.githubusercontent.com/u/70679159">
   <h2>DON-FREX</h2>
   <div class="user-details">
	  <div class="info-grid">
		 <div class="info-item">
			<span>First Name</span>
			<span>Adnane</span>
		 </div>
		 <div class="info-item">
			<span>Last Name</span>
			<span>SaBer</span>
		 </div>
		 <div class="info-item">
			<span>Email</span>
			<span>Adnane.SaBer@example.com</span>
		 </div>
		 <div class="info-item">
			<span>Password</span>
			<span>**********</span>
		 </div>
	  </div>
	  <a href="Profile Settings.html" class="edit-button">EDIT</a>
   </div>
   <div class="analyse">
	  <div class="sales">
		 <div class="status">
			<div class="info">
			   <h3>Winnings</h3>
			   <h1>12</h1>
			</div>
			<div class="progresss">
			   <svg>
				  <circle cx="38" cy="38" r="36"></circle>
			   </svg>
			   <div class="percentage">
				  <p>+80%</p>
			   </div>
			</div>
		 </div>
	  </div>
	  <div class="visits">
		 <div class="status">
			<div class="info">
			   <h3>Losses</h3>
			   <h1>4</h1>
			</div>
			<div class="progresss">
			   <svg>
				  <circle cx="38" cy="38" r="36"></circle>
			   </svg>
			   <div class="percentage">
				  <p>20%</p>
			   </div>
			</div>
		 </div>
	  </div>
	  <div class="searches">
		 <div class="status">
			<div class="info">
			   <h3>Total Played</h3>
			   <h1>16</h1>
			</div>
			<div class="progresss">
			   <svg>
				  <circle cx="38" cy="38" r="36"></circle>
			   </svg>
			   <div class="percentage">
				  <p>+21%</p>
			   </div>
			</div>
		 </div>
	  </div>
   </div>
</div>
</div>
`;


class PROFILE extends HTMLElement {
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
    console.log("PROFILE is Connected");
	this.runprofile();
  }
  
  disconnectedCallback() {
    console.log('PROFILE is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }
  runprofile(params){
	let subMenu = this.shadow.getElementById("subMenu");
	let profilePic = this.shadow.querySelector(".user-pic");
	// console.log(profilePic)

	profilePic.addEventListener("click",()=>{
		subMenu.classList.toggle("open-menu");
	})
  }
}
customElements.define('profile-page', PROFILE);

export default PROFILE;
