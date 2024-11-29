let template = document.createElement("template");

template.innerHTML = /*html*/`
	<div class="sentemail">
	<h1>Verification Email Was Sent!</h1>
	<h3>check your inbox</h3>
	</div>
`;


class SENT extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'src/assets/style/sent-page.css');
    this.shadow.appendChild(linkElem);
  }

  connectedCallback() {
    console.log("SENT is Connected");
  }
  
  disconnectedCallback() {
    console.log('SENT is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

}
customElements.define('sent-page', SENT);

export default SENT;
