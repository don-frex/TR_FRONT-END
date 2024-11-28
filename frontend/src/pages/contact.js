let template = document.createElement("template");

template.innerHTML = `<div id="contact-page" class="contact-page"> Hello from CONTACT... ! </div>`;


class CONTACT extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'src/assets/style/contact-page.css');
    this.shadow.appendChild(linkElem);
  }

  connectedCallback() {
    console.log("CONTACT is Connected");
  }
  
  disconnectedCallback() {
    console.log('CONTACT is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

}
customElements.define('contact-page', CONTACT);

export default CONTACT;
