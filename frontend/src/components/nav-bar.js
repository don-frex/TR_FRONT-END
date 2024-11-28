let template = document.createElement("template");

template.innerHTML = `<div id="nav-bar" class="nav-bar"> Hello from Navbar... ! </div>`;


class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'src/assets/style/nav-bar.css');
    this.shadow.appendChild(linkElem);
  }

  connectedCallback() {
    console.log("Navbar is Connected");
  }
  
  disconnectedCallback() {
    console.log('Navbar is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

}
customElements.define('nav-bar', Navbar);

export default Navbar;
