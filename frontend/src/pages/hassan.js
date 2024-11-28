let template = document.createElement("template");

template.innerHTML = `<div id="hassan-page" class="hassan-page"> Hello from HASSAN... ! </div>`;


class HASSAN extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'src/assets/style/hassan-page.css');
    this.shadow.appendChild(linkElem);
  }

  connectedCallback() {
    console.log("HASSAN is Connected");
  }
  
  disconnectedCallback() {
    console.log('HASSAN is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

}
customElements.define('hassan-page', HASSAN);

export default HASSAN;
