let template = document.createElement("template");

template.innerHTML = /*html*/`
	<section class="auth-container">
	<h1 class="auth-title">Two authentication factor</h1>
	<p class="auth-subtitle">
	For added security, please enter the one-time password<br />
	that was sent
	</p>
	<form class="otp-container" role="form">
	<!-- <label class="visually-hidden" for="otp-1">Enter first digit</label> -->
	<input type="text" id="otp-1" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric" aria-label="Digit 1" required />
	<!-- <label class="visually-hidden" for="otp-2">Enter second digit</label> -->
	<input type="text" id="otp-2" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric" aria-label="Digit 2" required />
	<!-- <label class="visually-hidden" for="otp-3">Enter third digit</label> -->
	<input type="text" id="otp-3" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric" aria-label="Digit 3" required />
	<!-- <label class="visually-hidden" for="otp-4">Enter fourth digit</label> -->
	<input type="text" id="otp-4" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric" aria-label="Digit 4" required />
	<!-- <label class="visually-hidden" for="otp-5">Enter fifth digit</label> -->
	<input type="text" id="otp-5" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric" aria-label="Digit 5" required />
	<!-- <label class="visually-hidden" for="otp-6">Enter sixth digit</label> -->
	<input type="text" id="otp-6" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric" aria-label="Digit 6" required />
	<!-- <a href="Home Page.html" class="continue-btn">Continue</a>-->
	<router-link to="/home" kind="link" class="continue-btn">Continue</router-link>
	
	</form>
	</section>
`;


class AUTHENTIFICATION extends HTMLElement {
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
    console.log("AUTHENTIFICATION is Connected");
  }
  
  disconnectedCallback() {
    console.log('AUTHENTIFICATION is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

}
customElements.define('authentification-page', AUTHENTIFICATION);

export default AUTHENTIFICATION;
