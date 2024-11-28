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
<div class="Psetting_container">
	<div class="form-Psetting_container Profile_upload">
		<h1>Profile Settings</h1>
		<div class="Psetting_card">
			<h2>Adnane Saber</h2>
			<p>@DON-FREX</p>
			<img src="src/assets/images/profile.png" id="profile-pic">
			<label for="input-file">update image</label>
			<input type="file" accept="image/jpeg, image/jpg, image/png" id="input-file">
		</div>
	</div>
	<form>
		<input type="text" placeholder="first name">
		<input type="text" placeholder="last name">
		<input type="text" placeholder="Username">
		<input type="email" placeholder="Email">
		<input type="password" placeholder="Password">
		<input type="password" placeholder="Rewrite Password">
		<label class="checkbox" for="checkbox1">
			<span class="label">two factor authentication</span>
			<input checked="" id="checkbox1" type="checkbox">
			<span class="checkmark"></span>
		</label>
	</form>
</div>
</div>
`;


class SETTINGS extends HTMLElement {
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
    console.log("SETTINGS is Connected");
	runsetting();
  }
  
  disconnectedCallback() {
    console.log('SETTINGS is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }
  runsetting(params){
	let profile_pic = document.getElementById("profile-pic");
	let input_file = document.getElementById("input-file");

	input_file.onchange = function(){
		profile_pic.src = URL.createObjectURL(input_file.files[0]);
	}
  }
}
customElements.define('settings-page', SETTINGS);

export default SETTINGS;
