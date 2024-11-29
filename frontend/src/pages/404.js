let template = document.createElement("template");

template.innerHTML = /*html*/`
	<div>
	<section class="not404-container">
	<header class="not404-header">
		<img class="img-404" src="src/assets/images/404.png">
		<p class="not404-subtitle">
			PAGE NOT FOUNDED!
		</p>
		<router-link to="/home" kind="link">
			<button class="ui-btn">
		</router-link>
		<span>
		Home Page
		</span>
		</button>
	</header>
	</section>
	</div>
`;


class page_404 extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'src/assets/style/404-page.css');
    this.shadow.appendChild(linkElem);
  }

  connectedCallback() {
    console.log("404 is Connected");
  }
  
  disconnectedCallback() {
    console.log('404 is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

}
customElements.define('page_404-page', page_404);

export default page_404;
